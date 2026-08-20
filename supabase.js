console.log('⚡ Supabase script loaded (Version 2 - No attempted field)');

// ── Global ACT Constants & Scoring Functions ───────
window.SECTION_COLORS = window.SECTION_COLORS || {
    english: '#93c5fd', math: '#6ee7b7', reading: '#c4b5fd', science: '#fde68a'
};
window.SECTION_NAMES = window.SECTION_NAMES || {
    english: '📝 English', math: '🔢 Math', reading: '📖 Reading', science: '🔬 Science'
};
var SECTION_COLORS = window.SECTION_COLORS;
var SECTION_NAMES = window.SECTION_NAMES;

if (typeof window.ACT_SCALE_TABLE === 'undefined') {
    window.ACT_SCALE_TABLE = {
        english: [
            1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 18, 19, 20,
            21, 21, 22, 23, 24, 24, 25, 25, 26, 27, 27, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35,
            35, 35, 35, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36
        ],
        math: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
            22, 22, 23, 24, 25, 26, 26, 27, 28, 28, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35, 35, 35, 36,
            36, 36, 36, 36, 36
        ],
        reading: [
            1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
            27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 36
        ],
        science: [
            1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
            28, 29, 30, 31, 32, 33, 34, 35, 35, 36, 36
        ]
    };
}

if (typeof window.getACTSectionScore !== 'function') {
    window.getACTSectionScore = function(sectionId, rawScore, totalQuestions) {
        const sec = (sectionId || '').toLowerCase();
        const table = (window.ACT_SCALE_TABLE || {})[sec];
        if (!table || table.length === 0) return 1;

        // Auto-detect total questions for section if not provided
        let total = totalQuestions;
        if (!total || typeof total !== 'number' || total <= 0) {
            if (typeof SECTION_QUESTIONS !== 'undefined' && SECTION_QUESTIONS[sec] && Array.isArray(SECTION_QUESTIONS[sec])) {
                total = SECTION_QUESTIONS[sec].length;
            } else if (typeof ACT_QUESTIONS1 !== 'undefined' && Array.isArray(ACT_QUESTIONS1)) {
                total = ACT_QUESTIONS1.filter(q => (q.section || '').toLowerCase() === sec).length;
            } else if (typeof QUESTIONS !== 'undefined' && Array.isArray(QUESTIONS)) {
                total = QUESTIONS.filter(q => (q.section || '').toLowerCase() === sec).length;
            }
        }

        if (!total || total <= 0) {
            total = table.length - 1;
        }

        const raw = typeof rawScore === 'number' && !isNaN(rawScore) ? rawScore : 0;
        if (raw <= 0) return 1;
        if (raw >= total) return 36; // 0 wrong answers guarantees 36/36

        // Normalize raw score proportion onto standard ACT scoring curve
        const fraction = Math.max(0, Math.min(1, raw / total));
        const tableMaxIdx = table.length - 1;
        const idx = Math.min(tableMaxIdx, Math.max(0, Math.round(fraction * tableMaxIdx)));
        const score = table[idx] || 1;
        return Math.min(36, Math.max(1, score));
    };
}

if (typeof window.getACTCompositeScore !== 'function') {
    window.getACTCompositeScore = function(sectionScores) {
        if (!sectionScores) return 1;
        const validKeys = ['english', 'math', 'reading'].filter(k => typeof sectionScores[k] === 'number' && !isNaN(sectionScores[k]));
        if (validKeys.length > 0) {
            const sum = validKeys.reduce((a, k) => a + sectionScores[k], 0);
            return Math.round(sum / validKeys.length);
        }
        const scores = Object.values(sectionScores).filter(s => typeof s === 'number' && !isNaN(s));
        if (scores.length === 0) return 1;
        return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    };
}

const SUPABASE_CONFIG = {
    url: 'https://dyvvhmuegtzooijrtwyd.supabase.co', // e.g. https://xyzabc.supabase.co
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dnZobXVlZ3R6b29panJ0d3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTk5MTEsImV4cCI6MjA5NDY3NTkxMX0.pksVza66eu3WlM1_r_IGARkjd19BwUvbKntoUIwPhRY', // Settings > API > anon public key
};

// ── Save registration to Supabase ─────────────
// Jab student form fill kare aur test start kare
async function saveRegistration(studentData, examName) {
    if (studentData && studentData.email) {
        try {
            localStorage.setItem('student_email', studentData.email);
            if (!localStorage.getItem('user_email')) {
                localStorage.setItem('user_email', studentData.email);
            }
        } catch (e) {}
    }

    if (SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL') {
        console.warn('⚠️ Supabase not configured yet. Follow SUPABASE_SETUP_GUIDE.txt');
        return;
    }

    const row = {
        student_name: studentData.name,
        student_email: studentData.email,
        student_phone: studentData.phone,
        exam_name: examName || 'SAT Practice',
        registered_at: studentData.startTime || new Date().toISOString(),
        created_at: new Date().toISOString()
    };

    try {
        const res = await fetch(`${SUPABASE_CONFIG.url
            }/rest/v1/sat_registrations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey
                    }`,
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify(row)
        });

        if (res.ok || res.status === 201) {
            console.log('✅ Registration saved to Supabase successfully');
        } else {
            const errText = await res.text();
            console.error('❌ Supabase registration save failed:', res.status, errText);
        }
    } catch (err) {
        console.error('❌ Supabase registration network error:', err);
    }
}

// ── Save result to Supabase ───────────────────
// Jab student test submit kare aur report generate ho
async function saveToSupabase(result) {
    if (!result) return;
    if (result.student && result.student.email) {
        try {
            localStorage.setItem('student_email', result.student.email);
            if (!localStorage.getItem('user_email')) {
                localStorage.setItem('user_email', result.student.email);
            }
        } catch (e) {}
    }

    if (SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL') {
        console.warn('⚠️ Supabase not configured yet. Follow SUPABASE_SETUP_GUIDE.txt');
        return;
    }

    // Try to get logged in user_id & session access token
    let userId = null;
    let authHeader = `Bearer ${SUPABASE_CONFIG.anonKey}`;
    let supabaseClient = null;

    if (window.supabase && SUPABASE_CONFIG.url && SUPABASE_CONFIG.url !== 'YOUR_SUPABASE_URL') {
        try {
            supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
            const { data: { session } } = await supabaseClient.auth.getSession();
            if (session && session.user) {
                userId = session.user.id;
                authHeader = `Bearer ${session.access_token}`;
            }
        } catch (e) {
            console.warn('Could not retrieve Supabase session:', e);
        }
    }

    const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
    const enrichedDetails = (result.details || []).map(d => {
        const answerIdx = (typeof d.answer === 'number') ? d.answer : (typeof d.correct_option === 'number' ? d.correct_option : null);
        const ansLetter = answerIdx !== null && LETTERS[answerIdx] ? LETTERS[answerIdx] : (d.answer || d.correct_option || '–');
        return {
            id: d.id,
            section: d.section || 'General',
            topic: d.topic || 'General',
            text: d.text || d.question || d.prompt || '',
            options: d.options || [],
            answer: d.answer !== undefined ? d.answer : d.correct_option,
            chosen: d.chosen !== undefined ? d.chosen : d.chosen_option,
            status: d.status || (d.chosen === d.answer ? 'correct' : (d.chosen !== null && d.chosen !== undefined ? 'wrong' : 'unattempted')),
            explanation: d.explanation || d.solution || `Option (${ansLetter}) is the correct answer.`
        };
    });

    // Top weak topics (for quick view in dashboard)
    const weakTopics = (result.topicAnalysis || []).filter(t => t.attempted > 0).sort((a, b) => a.acc - b.acc).slice(0, 3).map(t => `${t.name} (${t.acc}%)`).join(', ') || null;

    // Per-topic accuracy object (stored as JSON column)
    const topicScores = {};
    (result.topicAnalysis || []).forEach(t => {
        topicScores[t.name] = {
            total: t.total,
            correct: t.correct,
            wrong: t.wrong,
            accuracy: t.acc
        };
    });

    const studentAnswers = (result.details || []).map(d => ({
        question_id: d.id,
        section: d.section,
        topic: d.topic,
        status: d.status,
        chosen_option: d.options ? (d.chosen !== undefined && d.chosen !== null ? ['A', 'B', 'C', 'D'][d.chosen] : null) : (d.chosen || null),
        correct_option: d.options ? ['A', 'B', 'C', 'D'][d.answer] : d.fillAnswer
    }));

    // Row to insert into sat_results table
    const row = {
        user_id: userId,
        // Student info
        student_name: result.student.name,
        student_email: result.student.email,
        student_phone: result.student.phone,

        // Scores
        sat_score: result.scaled || null,
        rw_score: result.rwScore || null,
        math_score: result.mathScore || null,
        percentage: result.pct,
        grade: result.grade,

        // Stats
        correct: result.correct,
        wrong: result.wrong,
        skipped: result.unattempted,
        total: result.total,

        // Topic breakdown & full details
        topic_scores: topicScores,
        weak_topics: weakTopics,
        details: enrichedDetails,
        details_json: JSON.stringify(enrichedDetails),
        student_answers: studentAnswers,

        // Exam name
        exam_name: result.examName || null,

        // Timestamps
        submitted_at: result.submitTime,
        created_at: new Date().toISOString()
    };

    // Save to LocalStorage fallback
    try {
        const historyStr = localStorage.getItem('sat_results_history');
        const history = historyStr ? JSON.parse(historyStr) : [];
        history.unshift({ ...row, _type: 'sat', submitted_at: row.submitted_at });
        localStorage.setItem('sat_results_history', JSON.stringify(history));
        console.log('✅ SAT Result saved to LocalStorage');
    } catch (e) {
        console.error('Failed to save SAT to LocalStorage:', e);
    }

    try {
        if (supabaseClient) {
            const { data, error } = await supabaseClient.from('sat_results').insert([row]);
            if (!error) {
                console.log('✅ SAT Result saved to Supabase via SDK');
                return;
            }
        }
        const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/sat_results`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_CONFIG.anonKey,
                'Authorization': authHeader,
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify(row)
        });

        if (res.ok || res.status === 201) {
            console.log('✅ Result saved to Supabase successfully');
        } else {
            const errText = await res.text();
            console.error('❌ Supabase save failed:', res.status, errText);
        }
    } catch (err) {
        console.error('❌ Supabase network error:', err);
    }
}

// Prefill email if user is logged in
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', async () => {
        if (window.supabase && typeof SUPABASE_CONFIG !== 'undefined') {
            try {
                const client = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
                const { data: { session } } = await client.auth.getSession();
                if (session && session.user && session.user.email) {
                    const regEmail = document.getElementById('regEmail');
                    if (regEmail && !regEmail.value) {
                        regEmail.value = session.user.email;
                    }
                }
            } catch (e) {
                console.error('Error prefilling email:', e);
            }
        }
    });
}



// =============================================
// SUPABASE ACT ADDON
// Is code ko supabase.js ke end mein paste karo
// Ya ek alag file act_supabase.js banake load karo
// act1.html mein supabase.js ke baad
// =============================================

// ── Save ACT result to Supabase & LocalStorage ───────────────
async function saveACTResult(result) {
    if (!result) return;

    // 1. Build topic scores JSON
    const topicScores = {};
    (result.topicAnalysis || []).forEach(t => {
        const key = `${t.section}::${t.name}`;
        topicScores[key] = {
            section: t.section,
            topic: t.name,
            total: t.total,
            correct: t.correct,
            wrong: t.wrong,
            accuracy: t.acc
        };
    });

    // 2. Weak topics (bottom 3 by accuracy)
    const weakTopics = (result.topicAnalysis || [])
        .filter(t => t.attempted > 0)
        .sort((a, b) => a.acc - b.acc)
        .slice(0, 3)
        .map(t => `${t.name} [${t.section}] (${t.acc}%)`)
        .join(', ') || null;

    const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
    const enrichedDetails = (result.details || []).map(d => {
        const answerIdx = (typeof d.answer === 'number') ? d.answer : (typeof d.correct_option === 'number' ? d.correct_option : null);
        const ansLetter = answerIdx !== null && LETTERS[answerIdx] ? LETTERS[answerIdx] : (d.answer || d.correct_option || '–');
        return {
            id: d.id,
            section: d.section || 'General',
            topic: d.topic || 'General',
            text: d.text || d.question || d.prompt || '',
            options: d.options || [],
            answer: d.answer !== undefined ? d.answer : d.correct_option,
            chosen: d.chosen !== undefined ? d.chosen : d.chosen_option,
            status: d.status || (d.chosen === d.answer ? 'correct' : (d.chosen !== null && d.chosen !== undefined ? 'wrong' : 'unattempted')),
            explanation: d.explanation || d.solution || `Option (${ansLetter}) is the correct answer.`
        };
    });

    // 3. Simplified student answers JSON
    const studentAnswers = (result.details || []).map(d => ({
        question_id: d.id,
        section: d.section,
        topic: d.topic,
        status: d.status,   // 'correct', 'wrong', 'unattempted'
        chosen_option: d.chosen !== undefined && d.chosen !== null
            ? (typeof d.chosen === 'number' ? ['A', 'B', 'C', 'D'][d.chosen] : d.chosen)
            : null,
        correct_option: typeof d.answer === 'number' ? ['A', 'B', 'C', 'D'][d.answer] : d.answer
    }));

    // 4. Try to get logged in user_id & session access token
    let userId = null;
    let authHeader = `Bearer ${SUPABASE_CONFIG.anonKey}`;
    let supabaseClient = null;

    if (window.supabase && SUPABASE_CONFIG.url && SUPABASE_CONFIG.url !== 'YOUR_SUPABASE_URL') {
        try {
            supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
            const { data: { session } } = await supabaseClient.auth.getSession();
            if (session && session.user) {
                userId = session.user.id;
                authHeader = `Bearer ${session.access_token}`;
            }
        } catch (e) {
            console.warn('Could not retrieve Supabase session:', e);
        }
    }

    const isTopic = (result.level === 'Topic' || (result.examName && result.examName.toLowerCase().includes('topic')));
    const levelVal = isTopic ? 'Topic' : (result.level || 'Diagnostic');

    const row = {
        user_id: userId,
        student_name: result.student?.name || 'Student',
        student_email: result.student?.email || 'student@eduquest.com',
        student_phone: result.student?.phone || '–',

        exam_name: result.examName || 'ACT Practice Test',
        level: levelVal,
        test_type: levelVal,

        composite_score: result.composite || null,
        english_score: result.sectionScores?.english || null,
        math_score: result.sectionScores?.math || null,
        reading_score: result.sectionScores?.reading || null,
        science_score: null,

        percentage: result.pct || 0,
        grade: result.grade || 'B',
        correct: result.correct || 0,
        wrong: result.wrong || 0,
        skipped: result.unattempted || 0,
        unattempted: result.unattempted || 0,
        total: result.total || 0,

        topic_scores: topicScores,
        section_scores: result.sectionScores || topicScores,
        weak_topics: weakTopics,

        details: enrichedDetails,
        details_json: JSON.stringify(enrichedDetails),
        student_answers: studentAnswers,

        submitted_at: result.submitTime || new Date().toISOString(),
        created_at: new Date().toISOString()
    };

    // 5. Always save to LocalStorage fallback
    try {
        const historyStr = localStorage.getItem('act_results_history');
        const history = historyStr ? JSON.parse(historyStr) : [];
        history.unshift(row);
        localStorage.setItem('act_results_history', JSON.stringify(history));

        if (isTopic) {
            const topicStr = localStorage.getItem('act_topic_report');
            const topicHist = topicStr ? JSON.parse(topicStr) : [];
            topicHist.unshift(row);
            localStorage.setItem('act_topic_report', JSON.stringify(topicHist));
        }

        if (row.student_email && row.student_email !== 'student@eduquest.com') {
            localStorage.setItem('student_email', row.student_email);
            if (!localStorage.getItem('user_email')) {
                localStorage.setItem('user_email', row.student_email);
            }
        }
        console.log('✅ ACT Result saved to LocalStorage');
    } catch (e) {
        console.error('Failed to save to LocalStorage:', e);
    }

    // 6. Save to Supabase table act_results
    if (SUPABASE_CONFIG.url && SUPABASE_CONFIG.url !== 'YOUR_SUPABASE_URL') {
        try {
            if (supabaseClient) {
                const { data, error } = await supabaseClient.from('act_results').insert([row]);
                if (error) {
                    console.error('❌ Supabase act_results insert error:', error);
                } else {
                    console.log('✅ ACT Result saved to Supabase successfully via SDK');
                    return;
                }
            }

            // Fallback REST fetch if SDK insert had issue
            const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/act_results`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': SUPABASE_CONFIG.anonKey,
                    'Authorization': authHeader,
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify(row)
            });

            if (res.ok || res.status === 201) {
                console.log('✅ ACT Result saved to Supabase via REST fetch');
            } else {
                const errText = await res.text();
                console.error('❌ ACT Supabase REST save failed:', res.status, errText);
            }
        } catch (err) {
            console.error('❌ ACT Supabase network error:', err);
        }
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getACTSectionScore: window.getACTSectionScore,
        getACTCompositeScore: window.getACTCompositeScore,
        ACT_SCALE_TABLE: window.ACT_SCALE_TABLE,
        SECTION_COLORS: window.SECTION_COLORS,
        SECTION_NAMES: window.SECTION_NAMES
    };
}
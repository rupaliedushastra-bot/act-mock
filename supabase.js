console.log('⚡ Supabase script loaded (Version 2 - No attempted field)');

const SUPABASE_CONFIG = {
    url: 'https://dyvvhmuegtzooijrtwyd.supabase.co', // e.g. https://xyzabc.supabase.co
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dnZobXVlZ3R6b29panJ0d3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTk5MTEsImV4cCI6MjA5NDY3NTkxMX0.pksVza66eu3WlM1_r_IGARkjd19BwUvbKntoUIwPhRY', // Settings > API > anon public key
};

// ── Save registration to Supabase ─────────────
// Jab student form fill kare aur test start kare
async function saveRegistration(studentData, examName) {
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
    if (SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL') {
        console.warn('⚠️ Supabase not configured yet. Follow SUPABASE_SETUP_GUIDE.txt');
        return;
    }

    // Top weak topics (for quick view in dashboard)
    const weakTopics = (result.topicAnalysis || []).filter(t => t.attempted > 0).sort((a, b) => a.acc - b.acc).slice(0, 3).map(t => `${t.name
        } (${t.acc
        }%)`).join(', ') || null;

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

    // Row to insert into sat_results table
    const row = {
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

        // Topic breakdown (stored as JSON)
        topic_scores: topicScores,
        weak_topics: weakTopics,

        // Student's full answers detail (stored as JSON)
        student_answers: (result.details || []).map(d => ({
            question_id: d.id,
            section: d.section,
            topic: d.topic,
            status: d.status, // 'correct', 'wrong', 'unattempted'
            chosen_option: d.options ? (d.chosen !== undefined && d.chosen !== null ? ['A', 'B', 'C', 'D'][d.chosen] : null) : (d.chosen || null),
            correct_option: d.options ? ['A', 'B', 'C', 'D'][d.answer] : d.fillAnswer
        })),

        // Exam name
        exam_name: result.examName || null,

        // Timestamps
        submitted_at: result.submitTime,
        created_at: new Date().toISOString()
    };

    try {
        const res = await fetch(`${SUPABASE_CONFIG.url
            }/rest/v1/sat_results`, {
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



// =============================================
// SUPABASE ACT ADDON
// Is code ko supabase.js ke end mein paste karo
// Ya ek alag file act_supabase.js banake load karo
// act1.html mein supabase.js ke baad
// =============================================

// ── Save ACT result to Supabase ───────────────
// act_results table mein data store hoga (SAT se alag)
async function saveACTResult(result) {
    if (SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL') {
        console.warn('⚠️ Supabase not configured yet.');
        return;
    }

    // Topic scores as JSON object
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

    // Weak topics (bottom 3 by accuracy)
    const weakTopics = (result.topicAnalysis || [])
        .filter(t => t.attempted > 0)
        .sort((a, b) => a.acc - b.acc)
        .slice(0, 3)
        .map(t => `${t.name} [${t.section}] (${t.acc}%)`)
        .join(', ') || null;

    // Student answers JSON
    const studentAnswers = (result.details || []).map(d => ({
        question_id: d.id,
        section: d.section,
        topic: d.topic,
        status: d.status,   // 'correct', 'wrong', 'unattempted'
        chosen_option: d.chosen !== undefined && d.chosen !== null
            ? ['A', 'B', 'C', 'D'][d.chosen]
            : null,
        correct_option: ['A', 'B', 'C', 'D'][d.answer]
    }));

    const row = {
        // Student info
        student_name: result.student.name,
        student_email: result.student.email,
        student_phone: result.student.phone,

        // Exam info
        exam_name: result.examName || 'ACT Practice Test 1',
        level: result.level || 'Diagnostic',
        test_type: result.level || 'Diagnostic',

        // Composite + section scores
        composite_score: result.composite || null,
        english_score: result.sectionScores?.english || null,
        math_score: result.sectionScores?.math || null,
        reading_score: result.sectionScores?.reading || null,
        science_score: result.sectionScores?.science || null,

        // Overall stats
        percentage: result.pct,
        grade: result.grade,
        correct: result.correct,
        wrong: result.wrong,
        skipped: result.unattempted,
        unattempted: result.unattempted,
        total: result.total,

        // JSON columns
        topic_scores: topicScores,
        section_scores: topicScores,
        weak_topics: weakTopics,
        student_answers: studentAnswers,
        details: studentAnswers,

        // Timestamps
        submitted_at: result.submitTime,
        created_at: new Date().toISOString()
    };

    try {
        const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/act_results`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify(row)
        });

        if (res.ok || res.status === 201) {
            console.log('✅ ACT Result saved to Supabase successfully');
        } else {
            const errText = await res.text();
            console.error('❌ ACT Supabase save failed:', res.status, errText);
        }
    } catch (err) {
        console.error('❌ ACT Supabase network error:', err);
    }
}
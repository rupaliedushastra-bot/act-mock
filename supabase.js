// =============================================
// supabase.js – Supabase Integration
// Digital SAT Practice Exam 1 & 2
// =============================================
// Supabase se student data automatically
// save hota hai:
// 1) Registration — jab form fill hota hai
// 2) Results      — jab test submit hota hai
//
// Setup ke liye SUPABASE_SETUP_GUIDE.txt padho.
// =============================================

const SUPABASE_CONFIG = {
    url: 'https://dyvvhmuegtzooijrtwyd.supabase.co', // e.g. https://xyzabc.supabase.co
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dnZobXVlZ3R6b29panJ0d3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTk5MTEsImV4cCI6MjA5NDY3NTkxMX0.pksVza66eu3WlM1_r_IGARkjd19BwUvbKntoUIwPhRYYOUR_SUPABASE_ANON_KEY', // Settings > API > anon public key
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
        const res = await fetch(`${
            SUPABASE_CONFIG.url
        }/rest/v1/sat_registrations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_CONFIG.anonKey,
                'Authorization': `Bearer ${
                    SUPABASE_CONFIG.anonKey
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
    const weakTopics = (result.topicAnalysis || []).filter(t => t.attempted > 0).sort((a, b) => a.acc - b.acc).slice(0, 3).map(t => `${
        t.name
    } (${
        t.acc
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

        // Timestamps
        submitted_at: result.submitTime,
        created_at: new Date().toISOString()
    };

    try {
        const res = await fetch(`${
            SUPABASE_CONFIG.url
        }/rest/v1/sat_results`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_CONFIG.anonKey,
                'Authorization': `Bearer ${
                    SUPABASE_CONFIG.anonKey
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

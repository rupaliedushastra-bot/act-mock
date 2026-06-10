// =============================================
// supabase.js – Supabase Integration
// Digital SAT Practice Exam 1
// =============================================
// Supabase se student results automatically
// save hote hain ek database table mein.
//
// Setup ke liye SUPABASE_SETUP_GUIDE.txt padho.
// =============================================

const SUPABASE_CONFIG = {
  url:    'YOUR_SUPABASE_URL',      // e.g. https://xyzabc.supabase.co
  anonKey:'YOUR_SUPABASE_ANON_KEY', // Settings > API > anon public key
};

// ── Save result to Supabase ───────────────────
async function saveToSupabase(result) {
  if (SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL') {
    console.warn('⚠️ Supabase not configured yet. Follow SUPABASE_SETUP_GUIDE.txt');
    return;
  }

  // Top weak topics (for quick view in dashboard)
  const weakTopics = (result.topicAnalysis || [])
    .filter(t => t.attempted > 0)
    .sort((a, b) => a.acc - b.acc)
    .slice(0, 3)
    .map(t => `${t.name} (${t.acc}%)`)
    .join(', ') || null;

  // Per-topic accuracy object (stored as JSON column)
  const topicScores = {};
  (result.topicAnalysis || []).forEach(t => {
    topicScores[t.name] = { total: t.total, correct: t.correct, wrong: t.wrong, accuracy: t.acc };
  });

  // Row to insert into sat_results table
  const row = {
    // Student info
    student_name:   result.student.name,
    student_email:  result.student.email,
    student_phone:  result.student.phone,

    // Scores
    sat_score:      result.scaled   || null,
    rw_score:       result.rwScore  || null,
    math_score:     result.mathScore|| null,
    percentage:     result.pct,
    grade:          result.grade,

    // Stats
    correct:        result.correct,
    wrong:          result.wrong,
    skipped:        result.unattempted,
    total:          result.total,

    // Topic breakdown (stored as JSON)
    topic_scores:   topicScores,
    weak_topics:    weakTopics,

    // Timestamps
    submitted_at:   result.submitTime,
    created_at:     new Date().toISOString(),
  };

  try {
    const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/sat_results`, {
      method:  'POST',
      headers: {
        'Content-Type':  'application/json',
        'apikey':         SUPABASE_CONFIG.anonKey,
        'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
        'Prefer':        'return=minimal',
      },
      body: JSON.stringify(row),
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

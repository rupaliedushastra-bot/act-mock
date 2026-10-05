// =============================================
// email.js – Nodemailer API Integration
// Digital SAT Practice Exams
// Admin: rupali.eduquest@gmail.com
// =============================================
// Sends emails via /api/send-email serverless function.
// SMTP credentials are stored securely in Vercel
// environment variables (never exposed to browser).
// =============================================

const EMAIL_API_URL = '/api/send-email';

// ── Send admin email when student submits an ACT test ───────
async function sendEmails(result) {
  try {
    const res = await fetch(EMAIL_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'result',
        result: {
          student:       result.student,
          examName:      result.examName,
          correct:       result.correct,
          wrong:         result.wrong,
          unattempted:   result.unattempted,
          total:         result.total,
          pct:           result.pct,
          grade:         result.grade,
          composite:     result.composite || result.scaled,
          sectionScores: result.sectionScores || {},
          submitTime:    result.submitTime || new Date().toISOString(),
          topicAnalysis: result.topicAnalysis || [],
        }
      })
    });

    const data = await res.json();
    if (res.ok) {
      console.log('✅ Admin email sent successfully:', data.message);
    } else {
      console.error('❌ Email API error:', data.error || data);
    }
  } catch (err) {
    console.error('❌ Email network error:', err);
  }
}

// ── Send admin email when a new user signs up ───────
async function sendSignupNotification(userData) {
  try {
    const payload = typeof userData === 'string' ? { email: userData } : (userData || {});
    const res = await fetch(EMAIL_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'signup',
        userEmail: payload.email || payload.userEmail || '',
        fullName: payload.fullName || payload.name || 'Student',
        phone: payload.phone || '–',
        role: payload.role || 'student',
      })
    });

    const data = await res.json();
    if (res.ok) {
      console.log('✅ Admin signup notification sent successfully:', data.message);
    } else {
      console.error('❌ Signup notification API error:', data.error || data);
    }
  } catch (err) {
    console.error('❌ Signup notification network error:', err);
  }
}

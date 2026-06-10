// =============================================
// email.js – Brevo (SMTP API) Integration
// Digital SAT Practice Exam 1
// Admin: rupali.eduquest@gmail.com
// =============================================
// Brevo free plan: 300 emails/day, no credit card
// Setup: https://app.brevo.com → API Keys
// =============================================

const EMAIL_CONFIG = {
  brevoApiKey: 'YOUR_BREVO_API_KEY',   // Step 2 mein milega
  adminEmail:  'rupali.eduquest@gmail.com',
  adminName:   'Rupali – EduQuest',
  fromEmail:   'rupali.eduquest@gmail.com', // Same as admin (Brevo sender)
  fromName:    'EduQuest SAT Portal',
};

// ── Send admin email via Brevo SMTP API ───────
async function sendEmails(result) {
  if (EMAIL_CONFIG.brevoApiKey === 'YOUR_BREVO_API_KEY') {
    console.warn('⚠️ Brevo API key not set. Follow BREVO_SETUP_GUIDE.txt');
    return;
  }

  // Weak topics string
  const weakTopics = (result.topicAnalysis || [])
    .filter(t => t.attempted > 0)
    .sort((a, b) => a.acc - b.acc)
    .slice(0, 3)
    .map(t => `${t.name} (${t.acc}%)`)
    .join(', ') || 'N/A';

  // Topic table rows for HTML email
  const topicRows = (result.topicAnalysis || []).map(t => {
    const color = t.acc >= 70 ? '#059669' : t.acc >= 40 ? '#d97706' : '#dc2626';
    return `
      <tr style="border-bottom:1px solid #e5e7eb;">
        <td style="padding:8px 12px;font-size:13px;">${t.name}</td>
        <td style="padding:8px 12px;text-align:center;font-size:13px;">${t.total}</td>
        <td style="padding:8px 12px;text-align:center;font-size:13px;color:#059669;font-weight:600;">${t.correct}</td>
        <td style="padding:8px 12px;text-align:center;font-size:13px;color:#dc2626;font-weight:600;">${t.wrong}</td>
        <td style="padding:8px 12px;text-align:center;font-size:13px;color:${color};font-weight:700;">${t.acc}%</td>
      </tr>`;
  }).join('');

  const submitTime = new Date(result.submitTime).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const scoreColor = result.pct >= 70 ? '#059669' : result.pct >= 50 ? '#d97706' : '#dc2626';

  // HTML email body
  const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.10);">

  <!-- Header -->
  <tr>
    <td style="background:linear-gradient(135deg,#1a56db,#1e429f);padding:32px 36px;text-align:center;">
      <div style="font-size:13px;color:rgba(255,255,255,0.7);text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;">EduQuest SAT Portal</div>
      <div style="font-size:26px;font-weight:800;color:#ffffff;margin-bottom:4px;">New Test Submission</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.75);">Digital SAT Practice Exam 1</div>
    </td>
  </tr>

  <!-- Student Info -->
  <tr>
    <td style="padding:28px 36px 0;">
      <div style="background:#f0f4ff;border-radius:10px;padding:18px 20px;border-left:4px solid #1a56db;">
        <div style="font-size:11px;font-weight:700;color:#1a56db;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Student Information</div>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="font-size:13px;color:#6b7280;padding:3px 0;width:100px;">Name</td>
            <td style="font-size:14px;font-weight:600;color:#111827;padding:3px 0;">${result.student.name}</td>
          </tr>
          <tr>
            <td style="font-size:13px;color:#6b7280;padding:3px 0;">Email</td>
            <td style="font-size:14px;color:#111827;padding:3px 0;">${result.student.email}</td>
          </tr>
          <tr>
            <td style="font-size:13px;color:#6b7280;padding:3px 0;">Phone</td>
            <td style="font-size:14px;color:#111827;padding:3px 0;">${result.student.phone}</td>
          </tr>
          <tr>
            <td style="font-size:13px;color:#6b7280;padding:3px 0;">Submitted</td>
            <td style="font-size:14px;color:#111827;padding:3px 0;">${submitTime} IST</td>
          </tr>
        </table>
      </div>
    </td>
  </tr>

  <!-- SAT Score -->
  <tr>
    <td style="padding:20px 36px 0;">
      <div style="background:#0d0d14;border-radius:12px;padding:24px;text-align:center;">
        <div style="font-size:12px;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;">Estimated SAT Score</div>
        <div style="font-size:52px;font-weight:800;color:${scoreColor};line-height:1;">${result.scaled || '—'}</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px;">out of 1600</div>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;">
          <tr>
            <td align="center" style="border-right:1px solid rgba(255,255,255,0.1);">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:1px;">Reading & Writing</div>
              <div style="font-size:24px;font-weight:700;color:#60a5fa;">${result.rwScore || '—'}</div>
              <div style="font-size:11px;color:rgba(255,255,255,0.4);">/ 800</div>
            </td>
            <td align="center">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:1px;">Math</div>
              <div style="font-size:24px;font-weight:700;color:#34d399;">${result.mathScore || '—'}</div>
              <div style="font-size:11px;color:rgba(255,255,255,0.4);">/ 800</div>
            </td>
          </tr>
        </table>
      </div>
    </td>
  </tr>

  <!-- Stats row -->
  <tr>
    <td style="padding:16px 36px 0;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="background:#f0fdf4;border-radius:10px;padding:14px 8px;border:1px solid #bbf7d0;">
            <div style="font-size:24px;font-weight:800;color:#059669;">${result.correct}</div>
            <div style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-top:2px;">Correct</div>
          </td>
          <td width="10"></td>
          <td align="center" style="background:#fff1f2;border-radius:10px;padding:14px 8px;border:1px solid #fecdd3;">
            <div style="font-size:24px;font-weight:800;color:#dc2626;">${result.wrong}</div>
            <div style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-top:2px;">Wrong</div>
          </td>
          <td width="10"></td>
          <td align="center" style="background:#fffbeb;border-radius:10px;padding:14px 8px;border:1px solid #fde68a;">
            <div style="font-size:24px;font-weight:800;color:#d97706;">${result.unattempted}</div>
            <div style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-top:2px;">Skipped</div>
          </td>
          <td width="10"></td>
          <td align="center" style="background:#eff6ff;border-radius:10px;padding:14px 8px;border:1px solid #bfdbfe;">
            <div style="font-size:24px;font-weight:800;color:#1a56db;">${result.pct}%</div>
            <div style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-top:2px;">Score</div>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Weak topics -->
  <tr>
    <td style="padding:16px 36px 0;">
      <div style="background:#fff7ed;border-radius:10px;padding:14px 18px;border-left:4px solid #f97316;">
        <div style="font-size:11px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">⚠ Top Weak Topics</div>
        <div style="font-size:13px;color:#374151;">${weakTopics}</div>
      </div>
    </td>
  </tr>

  <!-- Topic table -->
  <tr>
    <td style="padding:20px 36px 0;">
      <div style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Topic-wise Performance</div>
      <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
        <tr style="background:#f9fafb;">
          <th style="padding:9px 12px;text-align:left;font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Topic</th>
          <th style="padding:9px 12px;text-align:center;font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Qs</th>
          <th style="padding:9px 12px;text-align:center;font-size:11px;color:#059669;font-weight:600;">✓</th>
          <th style="padding:9px 12px;text-align:center;font-size:11px;color:#dc2626;font-weight:600;">✗</th>
          <th style="padding:9px 12px;text-align:center;font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Acc%</th>
        </tr>
        ${topicRows}
      </table>
    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td style="padding:28px 36px;text-align:center;border-top:1px solid #f3f4f6;margin-top:20px;">
      <div style="font-size:12px;color:#9ca3af;">EduQuest SAT Portal &nbsp;·&nbsp; rupali.eduquest@gmail.com</div>
      <div style="font-size:11px;color:#d1d5db;margin-top:4px;">This is an automated report. PDF attached to this email.</div>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`;

  // Plain text fallback
  const textBody = `New SAT Submission – EduQuest

Student: ${result.student.name}
Email:   ${result.student.email}
Phone:   ${result.student.phone}
Time:    ${submitTime} IST

SAT Score: ${result.scaled || '—'} / 1600
R&W:       ${result.rwScore || '—'} / 800
Math:      ${result.mathScore || '—'} / 800

Correct: ${result.correct}  Wrong: ${result.wrong}  Skipped: ${result.unattempted}
Score:   ${result.pct}% (${result.grade})

Weak Topics: ${weakTopics}

— EduQuest SAT Portal`;

  // Generate PDF as base64
  let pdfAttachment = null;
  try {
    if (typeof generatePDFReport === 'function') {
      const pdfDoc    = generatePDFReport(result, false);
      const pdfBase64 = pdfDoc.output('datauristring').split(',')[1];
      const safeName  = result.student.name.replace(/[^a-zA-Z0-9]/g, '_');
      pdfAttachment = {
        content: pdfBase64,
        name:    `${safeName}_SAT_Report.pdf`,
      };
    }
  } catch (e) {
    console.warn('PDF generation for attachment failed:', e);
  }

  // Build Brevo API payload
  const payload = {
    sender:   { name: EMAIL_CONFIG.fromName, email: EMAIL_CONFIG.fromEmail },
    to:       [{ email: EMAIL_CONFIG.adminEmail, name: EMAIL_CONFIG.adminName }],
    subject:  `📝 SAT Result: ${result.student.name} — ${result.scaled || result.pct + '%'}`,
    htmlContent: htmlBody,
    textContent: textBody,
  };

  // Attach PDF if generated successfully
  if (pdfAttachment) {
    payload.attachment = [pdfAttachment];
  }

  // Send via Brevo Transactional Email API
  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key':       EMAIL_CONFIG.brevoApiKey,
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      console.log('✅ Admin email sent via Brevo SMTP to', EMAIL_CONFIG.adminEmail);
    } else {
      const err = await res.json().catch(() => ({}));
      console.error('❌ Brevo email failed:', res.status, err.message || err);
    }
  } catch (err) {
    console.error('❌ Brevo network error:', err);
  }
}

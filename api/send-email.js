const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "rupali.eduquest@gmail.com",
    pass: process.env.SMTP_PASS || "utfucjqehmaygikw",
  },
});

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;
  const fromName = "EduQuest SAT Portal";
  const fromEmail = process.env.SMTP_USER;

  try {
    const body = req.body;

    // ── TYPE: signup ─────────────────────────────────────────
    if (body.type === "signup") {
      const { userEmail } = body;

      await transport.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: adminEmail,
        subject: `🔔 New User Signup: ${userEmail}`,
        html: `
          <div style="font-family:sans-serif;max-width:620px;margin:0 auto;padding:28px;background:#0B1C3D;color:#f1f5ff;border-radius:16px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
              <h2 style="color:#7c3aed;margin:0;">🔔 New User Registration</h2>
              <span style="background:#7c3aed22;border:1px solid #7c3aed55;color:#a78bfa;padding:3px 10px;border-radius:50px;font-size:11px;font-weight:700;">NEW SIGNUP</span>
            </div>
            <hr style="border-color:rgba(255,255,255,.1);margin-bottom:20px"/>
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0;color:rgba(241,245,255,.5);font-size:13px;width:180px;">Username / Email</td>
                <td style="padding:8px 0;font-weight:600;font-size:13px;">${userEmail}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:rgba(241,245,255,.5);font-size:13px;">Signup Time</td>
                <td style="padding:8px 0;font-weight:600;font-size:13px;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td>
              </tr>
            </table>
            <div style="margin-top:24px;padding:16px;background:rgba(124,58,237,.07);border:1px solid rgba(124,58,237,.2);border-radius:10px;font-size:12px;color:rgba(241,245,255,.5);">
              You can approve their exam access from the Admin Dashboard.
            </div>
            <hr style="border-color:rgba(255,255,255,.08);margin:20px 0 12px"/>
            <p style="color:rgba(241,245,255,.25);font-size:11px;text-align:center;margin:0;">EduQuest SAT Practice Portal · rupali.eduquest@gmail.com</p>
          </div>
        `,
      });

      return res.status(200).json({ ok: true, message: "Signup notification sent" });
    }

    // ── TYPE: result ─────────────────────────────────────────
    if (body.type === "result") {
      const r = body.result;

      const submitTime = new Date(r.submitTime).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      });

      const scoreColor = r.pct >= 70 ? "#059669" : r.pct >= 50 ? "#d97706" : "#dc2626";

      const weakTopics = (r.topicAnalysis || [])
        .filter(t => t.attempted > 0)
        .sort((a, b) => a.acc - b.acc)
        .slice(0, 3)
        .map(t => `${t.name} (${t.acc}%)`)
        .join(", ") || "N/A";

      const topicRows = (r.topicAnalysis || []).map(t => {
        const color = t.acc >= 70 ? "#059669" : t.acc >= 40 ? "#d97706" : "#dc2626";
        return `
          <tr style="border-bottom:1px solid rgba(255,255,255,.08);">
            <td style="padding:8px 0;font-size:13px;">${t.name}</td>
            <td style="padding:8px 0;text-align:center;font-size:13px;">${t.total}</td>
            <td style="padding:8px 0;text-align:center;font-size:13px;color:#059669;font-weight:600;">${t.correct}</td>
            <td style="padding:8px 0;text-align:center;font-size:13px;color:#dc2626;font-weight:600;">${t.wrong}</td>
            <td style="padding:8px 0;text-align:center;font-size:13px;color:${color};font-weight:700;">${t.acc}%</td>
          </tr>`;
      }).join("");

      // Determine score display
      let scoreBlock = "";
      if (r.scaled != null) {
        scoreBlock = `
          <div style="font-size:12px;color:rgba(241,245,255,.4);letter-spacing:.15em;text-transform:uppercase;margin-bottom:6px;">Estimated SAT Score</div>
          <div style="font-size:52px;font-weight:800;color:${scoreColor};line-height:1;">${r.scaled}</div>
          <div style="font-size:13px;color:rgba(241,245,255,.4);margin-top:4px;">out of 1600</div>`;
      } else if (r.rwScore != null && r.mathScore != null) {
        const calc = Math.round(400 + (r.correct / r.total) * 1200);
        scoreBlock = `
          <div style="font-size:12px;color:rgba(241,245,255,.4);letter-spacing:.15em;text-transform:uppercase;margin-bottom:6px;">Estimated SAT Score</div>
          <div style="font-size:52px;font-weight:800;color:${scoreColor};line-height:1;">${calc}</div>
          <div style="font-size:13px;color:rgba(241,245,255,.4);margin-top:4px;">out of 1600</div>`;
      } else if (r.rwScore != null) {
        scoreBlock = `
          <div style="font-size:12px;color:rgba(241,245,255,.4);letter-spacing:.15em;text-transform:uppercase;margin-bottom:6px;">Reading & Writing Score</div>
          <div style="font-size:52px;font-weight:800;color:${scoreColor};line-height:1;">${r.rwScore}</div>
          <div style="font-size:13px;color:rgba(241,245,255,.4);margin-top:4px;">out of 800</div>`;
      } else {
        scoreBlock = `
          <div style="font-size:12px;color:rgba(241,245,255,.4);letter-spacing:.15em;text-transform:uppercase;margin-bottom:6px;">Score</div>
          <div style="font-size:52px;font-weight:800;color:${scoreColor};line-height:1;">${r.pct}%</div>`;
      }

      const infoRows = [
        ["Name", r.student.name],
        ["Email", r.student.email],
        ["Phone", r.student.phone || "—"],
        ["Submitted", submitTime + " IST"],
      ];

      await transport.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: adminEmail,
        subject: `📝 ${r.examName || "SAT"} Result: ${r.student.name} — ${r.scaled || r.rwScore || r.pct + "%"}`,
        html: `
          <div style="font-family:sans-serif;max-width:620px;margin:0 auto;padding:28px;background:#0B1C3D;color:#f1f5ff;border-radius:16px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
              <h2 style="color:#00C9B1;margin:0;">📝 New Test Submission</h2>
              <span style="background:#1a56db22;border:1px solid #1a56db55;color:#60a5fa;padding:3px 10px;border-radius:50px;font-size:11px;font-weight:700;">${r.examName || "SAT PRACTICE"}</span>
            </div>
            <hr style="border-color:rgba(255,255,255,.1);margin-bottom:20px"/>

            <!-- Student Info -->
            <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
              ${infoRows.map(([k, v]) => `
                <tr>
                  <td style="padding:8px 0;color:rgba(241,245,255,.5);font-size:13px;width:120px;">${k}</td>
                  <td style="padding:8px 0;font-weight:600;font-size:13px;">${v}</td>
                </tr>`).join("")}
            </table>

            <!-- Score -->
            <div style="background:rgba(26,86,219,.07);border:1px solid rgba(26,86,219,.2);border-radius:14px;padding:24px;text-align:center;margin-bottom:20px;">
              ${scoreBlock}
              <table style="width:100%;margin-top:16px;border-collapse:collapse;">
                <tr>
                  <td style="text-align:center;border-right:1px solid rgba(255,255,255,.1);">
                    <div style="font-size:11px;color:rgba(241,245,255,.4);text-transform:uppercase;letter-spacing:.1em;">R&W</div>
                    <div style="font-size:22px;font-weight:700;color:#60a5fa;">${r.rwScore || "—"}</div>
                  </td>
                  <td style="text-align:center;">
                    <div style="font-size:11px;color:rgba(241,245,255,.4);text-transform:uppercase;letter-spacing:.1em;">Math</div>
                    <div style="font-size:22px;font-weight:700;color:#34d399;">${r.mathScore || "—"}</div>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Stats -->
            <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
              <tr>
                <td style="text-align:center;padding:12px 4px;background:rgba(5,150,105,.08);border-radius:8px;">
                  <div style="font-size:22px;font-weight:800;color:#059669;">${r.correct}</div>
                  <div style="font-size:10px;color:rgba(241,245,255,.4);text-transform:uppercase;letter-spacing:.1em;margin-top:2px;">Correct</div>
                </td>
                <td style="width:8px;"></td>
                <td style="text-align:center;padding:12px 4px;background:rgba(220,38,38,.08);border-radius:8px;">
                  <div style="font-size:22px;font-weight:800;color:#dc2626;">${r.wrong}</div>
                  <div style="font-size:10px;color:rgba(241,245,255,.4);text-transform:uppercase;letter-spacing:.1em;margin-top:2px;">Wrong</div>
                </td>
                <td style="width:8px;"></td>
                <td style="text-align:center;padding:12px 4px;background:rgba(217,119,6,.08);border-radius:8px;">
                  <div style="font-size:22px;font-weight:800;color:#d97706;">${r.unattempted}</div>
                  <div style="font-size:10px;color:rgba(241,245,255,.4);text-transform:uppercase;letter-spacing:.1em;margin-top:2px;">Skipped</div>
                </td>
                <td style="width:8px;"></td>
                <td style="text-align:center;padding:12px 4px;background:rgba(26,86,219,.08);border-radius:8px;">
                  <div style="font-size:22px;font-weight:800;color:#60a5fa;">${r.pct}%</div>
                  <div style="font-size:10px;color:rgba(241,245,255,.4);text-transform:uppercase;letter-spacing:.1em;margin-top:2px;">Score</div>
                </td>
              </tr>
            </table>

            <!-- Weak Topics -->
            <div style="background:rgba(249,115,22,.07);border:1px solid rgba(249,115,22,.2);border-radius:10px;padding:14px 18px;margin-bottom:20px;">
              <div style="font-size:11px;font-weight:700;color:#f97316;text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px;">⚠ Top Weak Topics</div>
              <div style="font-size:13px;">${weakTopics}</div>
            </div>

            <!-- Topic Table -->
            <div style="font-size:11px;font-weight:700;color:rgba(241,245,255,.4);text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;">Topic-wise Performance</div>
            <table style="width:100%;border-collapse:collapse;border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;">
              <tr style="background:rgba(255,255,255,.05);">
                <th style="padding:8px 10px;text-align:left;font-size:11px;color:rgba(241,245,255,.4);font-weight:600;">Topic</th>
                <th style="padding:8px 6px;text-align:center;font-size:11px;color:rgba(241,245,255,.4);font-weight:600;">Qs</th>
                <th style="padding:8px 6px;text-align:center;font-size:11px;color:#059669;font-weight:600;">✓</th>
                <th style="padding:8px 6px;text-align:center;font-size:11px;color:#dc2626;font-weight:600;">✗</th>
                <th style="padding:8px 6px;text-align:center;font-size:11px;color:rgba(241,245,255,.4);font-weight:600;">Acc%</th>
              </tr>
              ${topicRows}
            </table>

            <hr style="border-color:rgba(255,255,255,.08);margin:24px 0 12px"/>
            <p style="color:rgba(241,245,255,.25);font-size:11px;text-align:center;margin:0;">EduQuest SAT Practice Portal · rupali.eduquest@gmail.com</p>
          </div>
        `,
      });

      return res.status(200).json({ ok: true, message: "Result email sent" });
    }

    return res.status(400).json({ error: "Invalid email type. Use 'signup' or 'result'." });

  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Failed to send email", details: err.message });
  }
};

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

  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || "rupali.eduquest@gmail.com";
  const fromName = "EduQuest ACT Portal";
  const fromEmail = process.env.SMTP_USER || "rupali.eduquest@gmail.com";

  try {
    const body = req.body;

    // ── TYPE: signup ─────────────────────────────────────────
    if (body.type === "signup") {
      const userEmail = body.userEmail || body.email || "—";
      const fullName = body.fullName || body.name || "New User";
      const phone = body.phone || "—";
      const role = (body.role || "student").toUpperCase();
      const timeStr = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      await transport.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: adminEmail,
        subject: `ACT New Signup: ${fullName} (${userEmail})`,
        html: `
          <div style="font-family:sans-serif;max-width:620px;margin:0 auto;padding:28px;background:#0B1C3D;color:#f1f5ff;border-radius:16px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
              <h2 style="color:#00C9B1;margin:0;font-size:22px;letter-spacing:0.5px;">ACT New Signup</h2>
              <span style="background:rgba(0,201,177,0.15);border:1px solid rgba(0,201,177,0.4);color:#00C9B1;padding:4px 12px;border-radius:50px;font-size:11px;font-weight:700;">${role}</span>
            </div>
            <p style="color:rgba(241,245,255,.65);font-size:13px;margin:8px 0 18px;">A new user has registered on the ACT Practice Portal with the following details:</p>
            <hr style="border:none;border-top:1px solid rgba(255,255,255,.1);margin-bottom:20px"/>
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;color:rgba(241,245,255,.5);font-size:13px;width:150px;">Full Name</td>
                <td style="padding:10px 0;font-weight:600;font-size:14px;color:#ffffff;">${fullName}</td>
              </tr>
              <tr style="border-top:1px solid rgba(255,255,255,0.06);">
                <td style="padding:10px 0;color:rgba(241,245,255,.5);font-size:13px;">Email Address</td>
                <td style="padding:10px 0;font-weight:600;font-size:14px;color:#93c5fd;">${userEmail}</td>
              </tr>
              <tr style="border-top:1px solid rgba(255,255,255,0.06);">
                <td style="padding:10px 0;color:rgba(241,245,255,.5);font-size:13px;">Phone Number</td>
                <td style="padding:10px 0;font-weight:600;font-size:14px;color:#6ee7b7;">${phone}</td>
              </tr>
              <tr style="border-top:1px solid rgba(255,255,255,0.06);">
                <td style="padding:10px 0;color:rgba(241,245,255,.5);font-size:13px;">Role</td>
                <td style="padding:10px 0;font-weight:600;font-size:14px;color:#c4b5fd;">${role}</td>
              </tr>
              <tr style="border-top:1px solid rgba(255,255,255,0.06);">
                <td style="padding:10px 0;color:rgba(241,245,255,.5);font-size:13px;">Signup Time</td>
                <td style="padding:10px 0;font-weight:600;font-size:14px;color:#ffffff;">${timeStr} IST</td>
              </tr>
            </table>
            <div style="margin-top:24px;padding:16px;background:rgba(0,201,177,.08);border:1px solid rgba(0,201,177,.25);border-radius:10px;font-size:12px;color:rgba(241,245,255,.75);line-height:1.5;">
              📌 <strong>Admin Note:</strong> You can manage and grant diagnostic/practice exam access for this user in the Admin Dashboard.
            </div>
            <hr style="border:none;border-top:1px solid rgba(255,255,255,.08);margin:20px 0 12px"/>
            <p style="color:rgba(241,245,255,.3);font-size:11px;text-align:center;margin:0;">EduQuest ACT Practice Portal · rupali.eduquest@gmail.com</p>
          </div>
        `,
      });

      return res.status(200).json({ ok: true, message: "Signup notification sent to admin" });
    }

    // ── TYPE: result ─────────────────────────────────────────
    if (body.type === "result") {
      const r = body.result;

      const submitTime = new Date(r.submitTime).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      });

      const compositeScore = r.composite || r.scaled || Math.round((r.correct / r.total) * 36) || 1;
      const scoreColor = compositeScore >= 28 ? "#059669" : compositeScore >= 20 ? "#d97706" : "#dc2626";

      const engScore = r.sectionScores?.english || "—";
      const mathScore = r.sectionScores?.math || "—";
      const readScore = r.sectionScores?.reading || "—";

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
            <td style="padding:8px 10px;font-size:13px;">${t.name}</td>
            <td style="padding:8px 6px;text-align:center;font-size:13px;">${t.total}</td>
            <td style="padding:8px 6px;text-align:center;font-size:13px;color:#059669;font-weight:600;">${t.correct}</td>
            <td style="padding:8px 6px;text-align:center;font-size:13px;color:#dc2626;font-weight:600;">${t.wrong}</td>
            <td style="padding:8px 6px;text-align:center;font-size:13px;color:${color};font-weight:700;">${t.acc}%</td>
          </tr>`;
      }).join("");

      const scoreBlock = `
        <div style="font-size:12px;color:rgba(241,245,255,.4);letter-spacing:.15em;text-transform:uppercase;margin-bottom:6px;">ACT Composite Score</div>
        <div style="font-size:52px;font-weight:800;color:${scoreColor};line-height:1;">${compositeScore}</div>
        <div style="font-size:13px;color:rgba(241,245,255,.4);margin-top:4px;">out of 36</div>`;

      const infoRows = [
        ["Name", r.student?.name || "Student"],
        ["Email", r.student?.email || "—"],
        ["Phone", r.student?.phone || "—"],
        ["Submitted", submitTime + " IST"],
      ];

      await transport.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: adminEmail,
        subject: `📝 ACT Result: ${r.student?.name || "Student"} — Score ${compositeScore}/36 (${r.examName || "ACT Practice"})`,
        html: `
          <div style="font-family:sans-serif;max-width:620px;margin:0 auto;padding:28px;background:#0B1C3D;color:#f1f5ff;border-radius:16px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
              <h2 style="color:#00C9B1;margin:0;">📝 New Test Submission</h2>
              <span style="background:#1a56db22;border:1px solid #1a56db55;color:#60a5fa;padding:3px 10px;border-radius:50px;font-size:11px;font-weight:700;">${r.examName || "ACT PRACTICE"}</span>
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
                  <td style="text-align:center;border-right:1px solid rgba(255,255,255,.1);padding:6px;">
                    <div style="font-size:11px;color:rgba(241,245,255,.4);text-transform:uppercase;letter-spacing:.1em;">English</div>
                    <div style="font-size:22px;font-weight:700;color:#93c5fd;">${engScore}</div>
                    <div style="font-size:10px;color:rgba(241,245,255,.3);">/ 36</div>
                  </td>
                  <td style="text-align:center;border-right:1px solid rgba(255,255,255,.1);padding:6px;">
                    <div style="font-size:11px;color:rgba(241,245,255,.4);text-transform:uppercase;letter-spacing:.1em;">Math</div>
                    <div style="font-size:22px;font-weight:700;color:#6ee7b7;">${mathScore}</div>
                    <div style="font-size:10px;color:rgba(241,245,255,.3);">/ 36</div>
                  </td>
                  <td style="text-align:center;padding:6px;">
                    <div style="font-size:11px;color:rgba(241,245,255,.4);text-transform:uppercase;letter-spacing:.1em;">Reading</div>
                    <div style="font-size:22px;font-weight:700;color:#c4b5fd;">${readScore}</div>
                    <div style="font-size:10px;color:rgba(241,245,255,.3);">/ 36</div>
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
                  <div style="font-size:10px;color:rgba(241,245,255,.4);text-transform:uppercase;letter-spacing:.1em;margin-top:2px;">Accuracy</div>
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
            <p style="color:rgba(241,245,255,.25);font-size:11px;text-align:center;margin:0;">EduQuest ACT Practice Portal · rupali.eduquest@gmail.com</p>
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

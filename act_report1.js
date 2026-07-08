// =============================================
// act_report1.js – ACT PDF Report via jsPDF
// EduQuest ACT Practice Portal
// =============================================

function generateACTPDFReport(result, shouldSave = true) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const W = 210, M = 15;
    let y = 0;

    const line = (x1, y1, x2, y2, r = 200, g = 200, b = 200, lw = 0.3) => {
        doc.setDrawColor(r, g, b); doc.setLineWidth(lw); doc.line(x1, y1, x2, y2);
    };
    const rect = (x, yy, w, h, r, g, b, fill = true) => {
        if (fill) { doc.setFillColor(r, g, b); doc.rect(x, yy, w, h, 'F'); }
        else { doc.setDrawColor(r, g, b); doc.rect(x, yy, w, h, 'S'); }
    };
    const txt = (s, x, yy, sz = 10, bold = false, color = [30, 30, 30], align = 'left') => {
        doc.setFontSize(sz);
        doc.setFont('helvetica', bold ? 'bold' : 'normal');
        doc.setTextColor(...color);
        doc.text(String(s), x, yy, { align });
    };

    // ── PAGE 1 ──────────────────────────────────────
    // Header — rainbow gradient bar (4-section colors)
    rect(0, 0, W, 30, 13, 13, 20);
    rect(0, 0, 6, 30, 26, 86, 219);   // English blue
    rect(0, 0, 3, 30, 26, 86, 219);
    // Color accent strips at top
    const stripColors = [[26, 86, 219], [5, 150, 105], [124, 58, 237], [217, 119, 6]];
    stripColors.forEach(([r, g, b], i) => {
        doc.setFillColor(r, g, b);
        doc.rect(0, 0, W * (i + 1) / 4, 2, 'F');
    });
    txt(result.examName || 'ACT Practice Test 1', W / 2, 13, 15, true, [255, 255, 255], 'center');
    txt('Student Performance Report', W / 2, 21, 9, false, [160, 180, 255], 'center');
    txt('EduQuest · rupali.eduquest@gmail.com', W / 2, 27, 7, false, [120, 140, 220], 'center');
    y = 36;

    // Student info box
    rect(M, y, W - 2 * M, 22, 240, 244, 255);
    doc.setDrawColor(180, 190, 240); doc.setLineWidth(0.3);
    doc.rect(M, y, W - 2 * M, 22, 'S');
    txt('STUDENT INFO', M + 4, y + 6, 7.5, true, [26, 86, 219]);
    txt(`Name:   ${result.student.name}`, M + 4, y + 13, 9);
    txt(`Email:  ${result.student.email}`, M + 4, y + 19, 8.5);
    txt(`Phone:  ${result.student.phone}`, W / 2 + 4, y + 13, 9);
    txt(`Date:   ${new Date(result.submitTime).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`, W / 2 + 4, y + 19, 8.5);
    y += 28;

    // Composite score hero
    const gc = result.composite >= 28 ? [5, 150, 105] : result.composite >= 20 ? [180, 100, 0] : [200, 30, 30];
    rect(M, y, W - 2 * M, 28, ...gc);
    txt(String(result.composite), M + 16, y + 20, 32, true, [255, 255, 255]);
    txt('ACT Composite Score', M + 16, y + 26, 7, false, [200, 255, 220]);
    // Section scores on right
    const secData = [
        ['English', result.sectionScores?.english || '-', [93, 197, 253]],
        ['Math', result.sectionScores?.math || '-', [110, 231, 183]],
        ['Reading', result.sectionScores?.reading || '-', [196, 181, 253]],
    ];
    if (result.sectionScores?.science !== undefined) {
        secData.push(['Science', result.sectionScores.science, [253, 230, 138]]);
    }
    const secBoxW = (W - 2 * M - 55) / secData.length;
    secData.forEach(([name, score, [r, g, b]], i) => {
        const sx = M + 52 + i * (secBoxW + 2);
        doc.setFillColor(0, 0, 0, 0.3);
        rect(sx, y + 3, secBoxW, 22, 0, 0, 0);
        doc.setFillColor(r, g, b, 0.1);
        rect(sx, y + 3, secBoxW, 22, Math.floor(r / 4), Math.floor(g / 4), Math.floor(b / 4));
        txt(name, sx + secBoxW / 2, y + 10, 6.5, true, [r, g, b], 'center');
        txt(String(score), sx + secBoxW / 2, y + 20, 14, true, [255, 255, 255], 'center');
        txt('/36', sx + secBoxW / 2, y + 25.5, 6, false, [r, g, b], 'center');
    });
    y += 34;

    // Stats row
    const STATS = [
        ['Attempted', result.correct + result.wrong, [13, 13, 20]],
        ['Correct', result.correct, [5, 150, 105]],
        ['Wrong', result.wrong, [220, 38, 38]],
        ['Skipped', result.unattempted, [180, 100, 0]],
        ['Accuracy', result.pct + '%', [26, 86, 219]],
        ['Grade', result.grade, [124, 58, 237]],
    ];
    const bw = (W - 2 * M - 10) / 6;
    STATS.forEach(([label, val, [r, g, b]], i) => {
        const bx = M + i * (bw + 2);
        doc.setDrawColor(r, g, b); doc.setLineWidth(0.4);
        doc.rect(bx, y, bw, 16, 'S');
        txt(String(val), bx + bw / 2, y + 9, 11, true, [r, g, b], 'center');
        txt(label, bx + bw / 2, y + 14, 6.5, false, [100, 100, 120], 'center');
    });
    y += 22;

    // Topic table header
    txt('TOPIC-WISE PERFORMANCE', M, y + 5, 7.5, true, [26, 86, 219]);
    y += 9;
    rect(M, y, W - 2 * M, 7, 230, 235, 255);
    doc.setDrawColor(190, 200, 240); doc.setLineWidth(0.3); doc.rect(M, y, W - 2 * M, 7, 'S');
    [['Topic', M + 3], ['Section', M + 85], ['Total', M + 108], ['✓', M + 120], ['✗', M + 130], ['Accuracy', M + 140]].forEach(([h, x]) => {
        txt(h, x, y + 5, 7, true, [26, 86, 219]);
    });
    y += 7;

    const sectionColorMap = {
        english: [26, 86, 219], math: [5, 150, 105], reading: [124, 58, 237], science: [217, 119, 6]
    };

    (result.topicAnalysis || []).forEach((t, idx) => {
        if (y > 268) { doc.addPage(); y = 20; }
        if (idx % 2 === 0) rect(M, y, W - 2 * M, 7, 249, 250, 255);
        doc.setDrawColor(220, 224, 240); doc.setLineWidth(0.2); doc.rect(M, y, W - 2 * M, 7, 'S');
        txt(t.name || '', M + 3, y + 5, 7.5);
        const sc = sectionColorMap[t.section] || [80, 80, 100];
        txt(t.section.toUpperCase(), M + 88, y + 5, 7, true, sc);
        txt(t.total, M + 111, y + 5, 7.5, false, [80, 80, 100], 'center');
        txt(t.correct, M + 123, y + 5, 7.5, false, [5, 150, 105], 'center');
        txt(t.wrong, M + 133, y + 5, 7.5, false, [220, 38, 38], 'center');
        const bc = t.acc >= 70 ? [5, 150, 105] : t.acc >= 40 ? [180, 100, 0] : [220, 38, 38];
        rect(M + 140, y + 2.5, 46, 2.5, 220, 224, 235);
        if (t.acc > 0) rect(M + 140, y + 2.5, 46 * (t.acc / 100), 2.5, ...bc);
        txt(`${t.acc}%`, M + 188, y + 5, 7, false, [80, 80, 100]);
        y += 7;
    });
    y += 4;

    // ── PAGE 2+: All Questions & Answers Review ─────
    const LETTERS = ['A', 'B', 'C', 'D'];
    const reviewQs = result.details || [];
    const clean = str => (str || '').replace(/<[^>]*>/g, '').replace(/&[a-z]+;/gi, m =>
        ({ '&nbsp;': ' ', '&deg;': '°', '&rarr;': '→', '&larr;': '←', '&minus;': '−', '&sup2;': '²', '&sup3;': '³' }[m] || ' ')
    );

    if (reviewQs.length > 0) {
        doc.addPage(); y = 20;
        rect(M, y, W - 2 * M, 9, 230, 242, 255);
        doc.setDrawColor(26, 86, 219); doc.setLineWidth(0.4); doc.rect(M, y, W - 2 * M, 9, 'S');
        txt(`COMPLETE QUESTIONS & ANSWERS REVIEW  (${reviewQs.length} questions)`, M + 4, y + 6, 9, true, [26, 86, 219]);
        y += 15;

        let lastSection = null;
        reviewQs.forEach(qObj => {
            // Section divider
            if (qObj.section !== lastSection) {
                if (y > 260) { doc.addPage(); y = 20; }
                const sc = sectionColorMap[qObj.section] || [80, 80, 100];
                rect(M, y, W - 2 * M, 6, ...sc);
                txt({ english: 'ENGLISH', math: 'MATH', reading: 'READING', science: 'SCIENCE' }[qObj.section] || qObj.section.toUpperCase(),
                    M + 4, y + 4.5, 8, true, [255, 255, 255]);
                y += 9;
                lastSection = qObj.section;
            }

            const qText = `Q${qObj.id} [${qObj.topic || ''}]: ${clean(qObj.text)}`;
            const qLines = doc.splitTextToSize(qText, W - 2 * M - 10);
            let yAnsText = '';
            if (qObj.status === 'unattempted') {
                yAnsText = `➖ Your Answer: (Skipped)`;
            } else if (qObj.status === 'correct') {
                yAnsText = `✓ Your Answer: (${LETTERS[qObj.chosen]}) ${clean(qObj.options[qObj.chosen])}`;
            } else {
                yAnsText = `✗ Your Answer: (${LETTERS[qObj.chosen]}) ${clean(qObj.options[qObj.chosen])}`;
            }
            const yAns = doc.splitTextToSize(yAnsText, W - 2 * M - 14);
            let cAns = [];
            if (qObj.status !== 'correct') {
                cAns = doc.splitTextToSize(`✓ Correct:     (${LETTERS[qObj.answer]}) ${clean(qObj.options[qObj.answer])}`, W - 2 * M - 14);
            }
            const need = qLines.length * 4.5 + yAns.length * 4.2 + cAns.length * 4.2 + 10;
            if (y + need > 275) { doc.addPage(); y = 20; }

            const accentColor = qObj.status === 'correct' ? [5, 130, 80] : qObj.status === 'unattempted' ? [217, 119, 6] : [220, 38, 38];
            rect(M, y, 1.8, need - 3, ...accentColor);

            let iy = y + 1;
            doc.setFontSize(8.5); doc.setFont('helvetica', 'bold'); doc.setTextColor(30, 30, 30);
            qLines.forEach(l => { doc.text(l, M + 5, iy + 3.5); iy += 4.5; });
            doc.setFontSize(8); doc.setFont('helvetica', 'normal');
            doc.setTextColor(...(qObj.status === 'correct' ? [5, 130, 80] : qObj.status === 'unattempted' ? [217, 119, 6] : [200, 30, 30]));
            yAns.forEach(l => { doc.text(l, M + 8, iy + 3.2); iy += 4.2; });
            if (qObj.status !== 'correct') {
                doc.setTextColor(5, 130, 80);
                cAns.forEach(l => { doc.text(l, M + 8, iy + 3.2); iy += 4.2; });
            }
            y += need + 2;
        });
    }

    // Footer
    const totalPages = doc.getNumberOfPages();
    for (let p = 1; p <= totalPages; p++) {
        doc.setPage(p);
        line(M, 285, W - M, 285, 180, 190, 220);
        txt(`${result.examName || 'ACT Practice Test 1'} — EduQuest`, M, 290, 6.5, false, [140, 150, 180]);
        txt(`Page ${p} of ${totalPages}`, W - M, 290, 6.5, false, [140, 150, 180], 'right');
        txt('rupali.eduquest@gmail.com', W / 2, 290, 6.5, false, [140, 150, 180], 'center');
    }

    const filename = `${result.student.name.replace(/\s+/g, '_')}_ACT_Report.pdf`;
    if (shouldSave) doc.save(filename);
    return doc;
}
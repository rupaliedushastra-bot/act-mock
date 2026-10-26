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

    // Score hero banner
    const allSecCandidates = [
        ['english', 'English', (result.sectionScores && result.sectionScores.english), [93, 197, 253]],
        ['math', 'Math', (result.sectionScores && result.sectionScores.math), [110, 231, 183]],
        ['reading', 'Reading', (result.sectionScores && result.sectionScores.reading), [196, 181, 253]]
    ];

    const activeSecKeysInDetails = new Set((result.details || []).map(d => (d && d.section ? String(d.section).toLowerCase() : '')));
    const hasSpecificDetails = activeSecKeysInDetails.size > 0;

    let secData = allSecCandidates.filter(([secKey, name, score]) => {
        if (score === undefined || score === null || score === '-') return false;
        if (hasSpecificDetails && !activeSecKeysInDetails.has(secKey)) return false;
        return true;
    }).map(([secKey, name, score, color]) => [name, score, color, secKey]);

    const isSingleSection = secData.length === 1;
    const isMathTest = (isSingleSection && secData[0][3] === 'math') || ((result.examName || '').toLowerCase().includes('math'));

    let heroScore = result.composite;
    let heroLabel = 'ACT Composite Score';

    if (isMathTest) {
        heroLabel = 'ACT Math Score';
        heroScore = (result.sectionScores && result.sectionScores.math !== undefined) ? result.sectionScores.math : result.composite;
    } else if (isSingleSection) {
        heroLabel = 'ACT ' + secData[0][0] + ' Score';
        heroScore = secData[0][1] !== undefined ? secData[0][1] : result.composite;
    }

    const numHero = Number(heroScore) || 0;
    const gc = numHero >= 28 ? [5, 150, 105] : numHero >= 20 ? [180, 100, 0] : [200, 30, 30];
    rect(M, y, W - 2 * M, 28, ...gc);
    txt(String(heroScore !== undefined && heroScore !== null ? heroScore : 0), M + 16, y + 20, 32, true, [255, 255, 255]);
    txt(heroLabel, M + 16, y + 26, 7.5, false, [200, 255, 220]);

    if (!isSingleSection && secData.length > 1) {
        const secBoxW = (W - 2 * M - 55) / (secData.length || 1);
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
    } else {
        const chips = [
            ['Accuracy', (result.pct || 0) + '%'],
            ['Raw Score', (result.correct || 0) + ' / ' + (result.total || 0)],
            ['Grade', String(result.grade || 'A')]
        ];
        const chipW = (W - 2 * M - 60) / 3;
        chips.forEach(([lbl, val], i) => {
            const sx = M + 55 + i * (chipW + 2);
            doc.setFillColor(0, 0, 0, 0.25);
            rect(sx, y + 4, chipW, 20, 0, 0, 0);
            txt(lbl, sx + chipW / 2, y + 11, 7, false, [200, 255, 220], 'center');
            txt(String(val), sx + chipW / 2, y + 20, 11, true, [255, 255, 255], 'center');
        });
    }
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
    [['Topic', M + 3], ['Section', M + 80], ['Total', M + 104], ['Correct', M + 117], ['Wrong', M + 130], ['Accuracy', M + 144]].forEach(([h, x]) => {
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
        txt(t.section ? t.section.toUpperCase() : 'GENERAL', M + 80, y + 5, 7, true, sc);
        txt(t.total !== undefined ? t.total : '–', M + 108, y + 5, 7.5, false, [80, 80, 100], 'center');
        txt(t.correct !== undefined ? t.correct : '–', M + 121, y + 5, 7.5, false, [5, 150, 105], 'center');
        txt(t.wrong !== undefined ? t.wrong : '–', M + 133, y + 5, 7.5, false, [220, 38, 38], 'center');
        const accVal = t.acc !== undefined ? t.acc : (t.accuracy !== undefined ? t.accuracy : 0);
        const bc = accVal >= 70 ? [5, 150, 105] : accVal >= 40 ? [180, 100, 0] : [220, 38, 38];
        rect(M + 144, y + 2.5, 30, 2.5, 220, 224, 235);
        if (accVal > 0) rect(M + 144, y + 2.5, 30 * (accVal / 100), 2.5, ...bc);
        txt(`${accVal}%`, M + 178, y + 5, 7, false, [80, 80, 100]);
        y += 7;
    });
    y += 4;

    // ── PAGE 2+: All Questions & Answers Review ─────
    const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
    const reviewQs = result.details || [];
    const clean = str => (str || '').replace(/<[^>]*>/g, '').replace(/&[a-z]+;/gi, m =>
        ({ '&nbsp;': ' ', '&deg;': '°', '&rarr;': '→', '&larr;': '←', '&minus;': '−', '&sup2;': '²', '&sup3;': '³' }[m] || ' ')
    );

    const getOptText = (q, val) => {
        if (val === null || val === undefined || val === '') return '';
        if (Array.isArray(q.options) && q.options.length > 0) {
            if (typeof val === 'number' && q.options[val] !== undefined) return clean(q.options[val]);
            if (typeof val === 'string') {
                const num = parseInt(val, 10);
                if (!isNaN(num) && num >= 0 && num < q.options.length) return clean(q.options[num]);
                const idx = LETTERS.indexOf(val.toUpperCase());
                if (idx !== -1 && q.options[idx] !== undefined) return clean(q.options[idx]);
                return clean(val);
            }
        }
        if (q.options && typeof q.options === 'object') {
            if (typeof val === 'string' && q.options[val.toUpperCase()]) return clean(q.options[val.toUpperCase()]);
            if (typeof val === 'number' && LETTERS[val] && q.options[LETTERS[val]]) return clean(q.options[LETTERS[val]]);
        }
        return clean(String(val));
    };

    const getLetter = (val) => {
        if (val === null || val === undefined || val === '') return '';
        if (typeof val === 'number') return LETTERS[val] || String(val);
        if (typeof val === 'string') {
            const num = parseInt(val, 10);
            if (!isNaN(num) && LETTERS[num]) return LETTERS[num];
            return val.length === 1 ? val.toUpperCase() : '';
        }
        return '';
    };

    if (reviewQs.length > 0) {
        doc.addPage(); y = 20;
        rect(M, y, W - 2 * M, 9, 230, 242, 255);
        doc.setDrawColor(26, 86, 219); doc.setLineWidth(0.4); doc.rect(M, y, W - 2 * M, 9, 'S');
        txt(`COMPLETE QUESTIONS & ANSWERS REVIEW  (${reviewQs.length} questions)`, M + 4, y + 6, 9, true, [26, 86, 219]);
        y += 15;

        let lastSection = null;
        reviewQs.forEach(qObj => {
            const secKey = (qObj.section || 'General').toLowerCase();
            if (secKey !== lastSection) {
                if (y > 260) { doc.addPage(); y = 20; }
                const sc = sectionColorMap[secKey] || [80, 80, 100];
                rect(M, y, W - 2 * M, 6, ...sc);
                txt({ english: 'ENGLISH', math: 'MATH', reading: 'READING', science: 'SCIENCE' }[secKey] || secKey.toUpperCase(),
                    M + 4, y + 4.5, 8, true, [255, 255, 255]);
                y += 9;
                lastSection = secKey;
            }

            const rawText = qObj.text || qObj.question || qObj.prompt || 'Question text unavailable';
            const qText = `Q${qObj.id || ''} [${qObj.topic || ''}]: ${clean(rawText)}`;
            const qLines = doc.splitTextToSize(qText, W - 2 * M - 10);
            
            const chosenVal = qObj.chosen !== undefined && qObj.chosen !== null ? qObj.chosen : qObj.chosen_option;
            const answerVal = qObj.answer !== undefined && qObj.answer !== null ? qObj.answer : qObj.correct_option;
            const status = qObj.status || (chosenVal === answerVal ? 'correct' : (chosenVal !== null ? 'wrong' : 'unattempted'));

            let yAnsText = '';
            if (status === 'unattempted' || chosenVal === null) {
                yAnsText = `➖ Your Answer: (Skipped)`;
            } else if (status === 'correct') {
                yAnsText = `✓ Your Answer: (${getLetter(chosenVal)}) ${getOptText(qObj, chosenVal)}`;
            } else {
                yAnsText = `✗ Your Answer: (${getLetter(chosenVal)}) ${getOptText(qObj, chosenVal)}`;
            }
            const yAns = doc.splitTextToSize(yAnsText, W - 2 * M - 14);
            
            let cAns = [];
            if (status !== 'correct' && answerVal !== null) {
                cAns = doc.splitTextToSize(`✓ Correct:     (${getLetter(answerVal)}) ${getOptText(qObj, answerVal)}`, W - 2 * M - 14);
            }

            let expLines = [];
            const expText = qObj.explanation || qObj.solution;
            if (expText) {
                expLines = doc.splitTextToSize(`💡 Explanation: ${clean(expText)}`, W - 2 * M - 14);
            }

            const need = qLines.length * 4.5 + yAns.length * 4.2 + cAns.length * 4.2 + expLines.length * 4 + 10;
            if (y + need > 275) { doc.addPage(); y = 20; }

            const accentColor = status === 'correct' ? [5, 130, 80] : status === 'unattempted' ? [217, 119, 6] : [220, 38, 38];
            rect(M, y, 1.8, need - 3, ...accentColor);

            let iy = y + 1;
            doc.setFontSize(8.5); doc.setFont('helvetica', 'bold'); doc.setTextColor(30, 30, 30);
            qLines.forEach(l => { doc.text(l, M + 5, iy + 3.5); iy += 4.5; });
            
            doc.setFontSize(8); doc.setFont('helvetica', 'normal');
            doc.setTextColor(...(status === 'correct' ? [5, 130, 80] : status === 'unattempted' ? [217, 119, 6] : [200, 30, 30]));
            yAns.forEach(l => { doc.text(l, M + 8, iy + 3.2); iy += 4.2; });
            
            if (status !== 'correct' && cAns.length > 0) {
                doc.setTextColor(5, 130, 80);
                cAns.forEach(l => { doc.text(l, M + 8, iy + 3.2); iy += 4.2; });
            }

            if (expLines.length > 0) {
                doc.setTextColor(70, 90, 150);
                expLines.forEach(l => { doc.text(l, M + 8, iy + 3.2); iy += 4.0; });
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
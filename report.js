// =============================================
// act_report1.js & report.js – ACT PDF Report via jsPDF
// EduQuest ACT Practice Portal
// =============================================

function generateACTPDFReport(result, shouldSave = true) {
    result = result || {};
    const jsPDFConstructor = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
    if (!jsPDFConstructor) {
        console.error('jsPDF library is not loaded');
        alert('PDF generator library is not ready. Please refresh or try again.');
        return null;
    }

    const doc = new jsPDFConstructor({ unit: 'mm', format: 'a4' });
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
        doc.text(String(s === null || s === undefined ? '' : s), x, yy, { align });
    };

    // ── PAGE 1 ──────────────────────────────────────
    rect(0, 0, W, 30, 13, 13, 20);
    rect(0, 0, 6, 30, 26, 86, 219);
    rect(0, 0, 3, 30, 26, 86, 219);
    const stripColors = [[26, 86, 219], [5, 150, 105], [124, 58, 237], [217, 119, 6]];
    stripColors.forEach(([r, g, b], i) => {
        doc.setFillColor(r, g, b);
        doc.rect(0, 0, W * (i + 1) / 4, 2, 'F');
    });
    txt(result.examName || 'ACT Practice Test', W / 2, 13, 15, true, [255, 255, 255], 'center');
    txt('Student Performance Report', W / 2, 21, 9, false, [160, 180, 255], 'center');
    txt('EduQuest · rupali.eduquest@gmail.com', W / 2, 27, 7, false, [120, 140, 220], 'center');
    y = 36;

    const student = result.student || {};
    const sName = String(student.name || 'Student');
    const sEmail = String(student.email || 'student@eduquest.com');
    const sPhone = String(student.phone || '–');
    let dateStr = '–';
    try {
        dateStr = new Date(result.submitTime || Date.now()).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        if (dateStr === 'Invalid Date') dateStr = new Date().toLocaleDateString();
    } catch (e) {
        dateStr = new Date().toLocaleDateString();
    }

    rect(M, y, W - 2 * M, 22, 240, 244, 255);
    doc.setDrawColor(180, 190, 240); doc.setLineWidth(0.3);
    doc.rect(M, y, W - 2 * M, 22, 'S');
    txt('STUDENT INFO', M + 4, y + 6, 7.5, true, [26, 86, 219]);
    txt('Name:   ' + sName, M + 4, y + 13, 9);
    txt('Email:  ' + sEmail, M + 4, y + 19, 8.5);
    txt('Phone:  ' + sPhone, W / 2 + 4, y + 13, 9);
    txt('Date:   ' + dateStr, W / 2 + 4, y + 19, 8.5);
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

    const correctCount = Number(result.correct) || 0;
    const wrongCount = Number(result.wrong) || 0;
    const skippedCount = Number(result.unattempted) || 0;
    const pctVal = result.pct !== undefined ? result.pct : 0;
    const gradeVal = result.grade || 'B';

    const STATS = [
        ['Attempted', correctCount + wrongCount, [13, 13, 20]],
        ['Correct', correctCount, [5, 150, 105]],
        ['Wrong', wrongCount, [220, 38, 38]],
        ['Skipped', skippedCount, [180, 100, 0]],
        ['Accuracy', pctVal + '%', [26, 86, 219]],
        ['Grade', gradeVal, [124, 58, 237]],
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
        if (!t || typeof t !== 'object') return;
        if (y > 268) { doc.addPage(); y = 20; }
        if (idx % 2 === 0) rect(M, y, W - 2 * M, 7, 249, 250, 255);
        doc.setDrawColor(220, 224, 240); doc.setLineWidth(0.2); doc.rect(M, y, W - 2 * M, 7, 'S');
        txt(String(t.name || ''), M + 3, y + 5, 7.5);
        const secKey = typeof t.section === 'string' ? t.section.toLowerCase() : '';
        const sc = sectionColorMap[secKey] || [80, 80, 100];
        txt(secKey ? secKey.toUpperCase() : 'GENERAL', M + 80, y + 5, 7, true, sc);
        txt(t.total !== undefined ? String(t.total) : '–', M + 108, y + 5, 7.5, false, [80, 80, 100], 'center');
        txt(t.correct !== undefined ? String(t.correct) : '–', M + 121, y + 5, 7.5, false, [5, 150, 105], 'center');
        txt(t.wrong !== undefined ? String(t.wrong) : '–', M + 133, y + 5, 7.5, false, [220, 38, 38], 'center');
        const accVal = t.acc !== undefined ? t.acc : (t.accuracy !== undefined ? t.accuracy : 0);
        const bc = accVal >= 70 ? [5, 150, 105] : accVal >= 40 ? [180, 100, 0] : [220, 38, 38];
        rect(M + 144, y + 2.5, 30, 2.5, 220, 224, 235);
        if (accVal > 0) rect(M + 144, y + 2.5, 30 * (Math.min(100, Math.max(0, accVal)) / 100), 2.5, ...bc);
        txt(accVal + '%', M + 178, y + 5, 7, false, [80, 80, 100]);
        y += 7;
    });
    y += 4;

    const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const reviewQs = Array.isArray(result.details) ? result.details : [];

    const clean = str => {
        if (str === null || str === undefined) return '';
        const s = typeof str === 'string' ? str : String(str);
        return s.replace(/<[^>]*>/g, '').replace(/&[a-z]+;/gi, m =>
            ({ '&nbsp;': ' ', '&deg;': '°', '&rarr;': '→', '&larr;': '←', '&minus;': '−', '&sup2;': '²', '&sup3;': '³' }[m] || ' ')
        );
    };

    const isOptMatch = (targetVal, optIdx, opt) => {
        if (targetVal === null || targetVal === undefined || targetVal === '' || targetVal === 'None' || targetVal === -1) return false;
        if (typeof targetVal === 'number') return targetVal === optIdx;
        const strVal = String(targetVal).trim();
        if (/^d+$/.test(strVal)) return parseInt(strVal, 10) === optIdx;
        if (LETTERS[optIdx] && strVal.toUpperCase() === LETTERS[optIdx]) return true;
        const m = strVal.match(/^[\(\[]?([A-Ha-h])[\)\]\.]?/);
        if (m && LETTERS[optIdx] && m[1].toUpperCase() === LETTERS[optIdx]) return true;
        if (opt !== undefined && opt !== null) {
            const cOpt = clean(opt).trim().toLowerCase();
            const cTar = clean(strVal).trim().toLowerCase();
            if (cOpt === cTar) return true;
        }
        return false;
    };

    const getLetter = (val, optArray) => {
        if (val === null || val === undefined || val === '' || val === 'None' || val === -1) return '';
        if (typeof val === 'number') return LETTERS[val] || String(val + 1);
        const strVal = String(val).trim();
        if (/^d+$/.test(strVal)) {
            const num = parseInt(strVal, 10);
            return LETTERS[num] || String(num + 1);
        }
        if (/^[A-Ha-h]$/.test(strVal)) return strVal.toUpperCase();
        const m = strVal.match(/^[\(\[]?([A-Ha-h])[\)\]\.]?/);
        if (m) return m[1].toUpperCase();
        if (Array.isArray(optArray)) {
            const idx = optArray.findIndex((opt, i) => isOptMatch(val, i, opt));
            if (idx !== -1 && LETTERS[idx]) return LETTERS[idx];
        }
        return '';
    };

    const getOptText = (q, val) => {
        if (val === null || val === undefined || val === '' || val === 'None' || val === -1) return '';
        const optArray = Array.isArray(q.options) ? q.options : (typeof q.options === 'object' && q.options !== null ? Object.values(q.options) : []);
        if (optArray.length > 0) {
            if (typeof val === 'number' && optArray[val] !== undefined) return clean(optArray[val]);
            const strVal = String(val).trim();
            const num = parseInt(strVal, 10);
            if (/^d+$/.test(strVal) && !isNaN(num) && num >= 0 && num < optArray.length) return clean(optArray[num]);
            const ltrIdx = LETTERS.indexOf(strVal.toUpperCase());
            if (ltrIdx !== -1 && optArray[ltrIdx] !== undefined) return clean(optArray[ltrIdx]);
            const matchIdx = optArray.findIndex((o, i) => isOptMatch(val, i, o));
            if (matchIdx !== -1) return clean(optArray[matchIdx]);
            return clean(val);
        }
        return clean(String(val));
    };

    if (reviewQs.length > 0) {
        doc.addPage(); y = 20;
        rect(M, y, W - 2 * M, 9, 230, 242, 255);
        doc.setDrawColor(26, 86, 219); doc.setLineWidth(0.4); doc.rect(M, y, W - 2 * M, 9, 'S');
        txt('COMPLETE QUESTIONS & ANSWERS REVIEW  (' + reviewQs.length + ' questions)', M + 4, y + 6, 9, true, [26, 86, 219]);
        y += 15;

        let lastSection = null;
        reviewQs.forEach(qObj => {
            if (!qObj) return;
            const secKey = String(qObj.section || 'General').toLowerCase();
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
            const qText = 'Q' + (qObj.id || '') + ' [' + (qObj.topic || '') + ']: ' + clean(rawText);
            const qLines = doc.splitTextToSize(qText, W - 2 * M - 10);
            
            const chosenVal = qObj.chosen !== undefined && qObj.chosen !== null ? qObj.chosen : (qObj.chosen_option !== undefined ? qObj.chosen_option : qObj.userAnswer);
            const answerVal = qObj.answer !== undefined && qObj.answer !== null ? qObj.answer : (qObj.correct_option !== undefined ? qObj.correct_option : (qObj.correctAnswer !== undefined ? qObj.correctAnswer : qObj.fillAnswer));

            const isSkipped = (chosenVal === null || chosenVal === undefined || chosenVal === '' || chosenVal === 'None' || chosenVal === -1);
            let isCorrect = false;
            const optArray = Array.isArray(qObj.options) ? qObj.options : (typeof qObj.options === 'object' && qObj.options !== null ? Object.values(qObj.options) : []);

            if (!isSkipped) {
                if (qObj.status === 'correct') isCorrect = true;
                else if (qObj.status === 'wrong') isCorrect = false;
                else if (typeof chosenVal === 'number' && typeof answerVal === 'number') isCorrect = (chosenVal === answerVal);
                else if (String(chosenVal).trim().toUpperCase() === String(answerVal).trim().toUpperCase()) isCorrect = true;
                else if (optArray.length > 0) {
                    const cIdx = optArray.findIndex((o, idx) => isOptMatch(chosenVal, idx, o));
                    const aIdx = optArray.findIndex((o, idx) => isOptMatch(answerVal, idx, o));
                    if (cIdx !== -1 && aIdx !== -1 && cIdx === aIdx) isCorrect = true;
                }
            }
            const status = isSkipped ? 'unattempted' : (isCorrect ? 'correct' : 'wrong');

            // ── All Options (A, B, C, D) ──
            const allOpts = [];
            if (optArray.length > 0) {
                optArray.forEach((opt, optIdx) => {
                    const ltr = LETTERS[optIdx] || String(optIdx + 1);
                    const isChosen = isOptMatch(chosenVal, optIdx, opt);
                    const isAns = isOptMatch(answerVal, optIdx, opt);
                    let optStr = '   (' + ltr + ') ' + clean(opt);
                    if (isAns && isChosen) optStr += '  ✓ (Your Choice & Correct)';
                    else if (isChosen) optStr += '  ✗ (Your Choice)';
                    else if (isAns) optStr += '  ✓ (Correct)';
                    const splitOpt = doc.splitTextToSize(optStr, W - 2 * M - 16);
                    allOpts.push({ lines: splitOpt, isChosen, isCorrect: isAns });
                });
            }

            let yAnsText = '';
            const chosenLtr = getLetter(chosenVal, optArray);
            const chosenTxt = getOptText(qObj, chosenVal);
            if (status === 'unattempted') {
                yAnsText = '➖ Selected Answer: (Skipped / Not Attempted)';
            } else if (status === 'correct') {
                yAnsText = '✓ Selected Answer: (' + (chosenLtr || '–') + ') ' + chosenTxt + ' (Correct)';
            } else {
                yAnsText = '✗ Selected Answer: (' + (chosenLtr || '–') + ') ' + chosenTxt + ' (Incorrect)';
            }
            const yAns = doc.splitTextToSize(yAnsText, W - 2 * M - 14);
            
            const ansLtr = getLetter(answerVal, optArray);
            const ansTxt = getOptText(qObj, answerVal);
            const cAns = doc.splitTextToSize('✓ Correct Answer:  (' + (ansLtr || '–') + ') ' + ansTxt, W - 2 * M - 14);

            let expLines = [];
            const expText = qObj.explanation || qObj.solution;
            if (expText) {
                expLines = doc.splitTextToSize('💡 Explanation: ' + clean(expText), W - 2 * M - 14);
            }

            const totalOptLines = allOpts.reduce((acc, o) => acc + o.lines.length, 0);
            const need = qLines.length * 4.5 + totalOptLines * 3.8 + yAns.length * 4.2 + cAns.length * 4.2 + expLines.length * 4 + 14;
            if (y + need > 275) { doc.addPage(); y = 20; }

            const accentColor = status === 'correct' ? [5, 130, 80] : status === 'unattempted' ? [217, 119, 6] : [220, 38, 38];
            rect(M, y, 1.8, need - 3, ...accentColor);

            let iy = y + 1;
            // 1. Question Prompt
            doc.setFontSize(8.5); doc.setFont('helvetica', 'bold'); doc.setTextColor(30, 30, 30);
            qLines.forEach(l => { doc.text(l, M + 5, iy + 3.5); iy += 4.5; });
            
            // 2. All Options
            doc.setFontSize(7.5); doc.setFont('helvetica', 'normal');
            allOpts.forEach(optItem => {
                if (optItem.isCorrect) {
                    doc.setTextColor(5, 130, 80);
                    doc.setFont('helvetica', 'bold');
                } else if (optItem.isChosen) {
                    doc.setTextColor(200, 30, 30);
                    doc.setFont('helvetica', 'bold');
                } else {
                    doc.setTextColor(80, 80, 95);
                    doc.setFont('helvetica', 'normal');
                }
                optItem.lines.forEach(l => { doc.text(l, M + 6, iy + 3.0); iy += 3.8; });
            });

            // 3. Selected Answer
            iy += 1.5;
            doc.setFontSize(8); doc.setFont('helvetica', 'bold');
            doc.setTextColor(...(status === 'correct' ? [5, 130, 80] : status === 'unattempted' ? [217, 119, 6] : [200, 30, 30]));
            yAns.forEach(l => { doc.text(l, M + 6, iy + 3.2); iy += 4.2; });
            
            // 4. Correct Answer
            doc.setTextColor(5, 130, 80);
            cAns.forEach(l => { doc.text(l, M + 6, iy + 3.2); iy += 4.2; });

            // 5. Explanation
            if (expLines.length > 0) {
                doc.setFontSize(7.8); doc.setFont('helvetica', 'normal');
                doc.setTextColor(70, 90, 150);
                expLines.forEach(l => { doc.text(l, M + 6, iy + 3.2); iy += 4.0; });
            }

            y += need + 2;
        });
    }

    // Footer
    const totalPages = doc.getNumberOfPages();
    for (let p = 1; p <= totalPages; p++) {
        doc.setPage(p);
        line(M, 285, W - M, 285, 180, 190, 220);
        txt((result.examName || 'ACT Practice Test') + ' — EduQuest', M, 290, 6.5, false, [140, 150, 180]);
        txt('Page ' + p + ' of ' + totalPages, W - M, 290, 6.5, false, [140, 150, 180], 'right');
        txt('rupali.eduquest@gmail.com', W / 2, 290, 6.5, false, [140, 150, 180], 'center');
    }

    const safeName = String(student.name || 'Student').replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '_') || 'Student';
    const filename = safeName + '_ACT_Report.pdf';
    if (shouldSave) {
        try {
            doc.save(filename);
        } catch (saveErr) {
            console.warn('doc.save failed, trying blob download fallback:', saveErr);
            const blob = doc.output('blob');
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 1000);
        }
    }
    return doc;
}

if (typeof window !== 'undefined') {
    window.generateACTPDFReport = generateACTPDFReport;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateACTPDFReport };
}

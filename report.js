// =============================================
// report.js – PDF Report Generation via jsPDF
// Digital SAT Practice Exam 1
// =============================================

function generatePDFReport(result, shouldSave = true) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const W = 210, M = 15;
  let y = 0;

  const line = (x1,y1,x2,y2,r=200,g=200,b=200,lw=0.3) => {
    doc.setDrawColor(r,g,b); doc.setLineWidth(lw); doc.line(x1,y1,x2,y2);
  };
  const rect = (x,yy,w,h,r,g,b,fill=true) => {
    if (fill) { doc.setFillColor(r,g,b); doc.rect(x,yy,w,h,'F'); }
    else      { doc.setDrawColor(r,g,b); doc.rect(x,yy,w,h,'S'); }
  };
  const txt = (s,x,yy,sz=10,bold=false,color=[30,30,30],align='left') => {
    doc.setFontSize(sz);
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setTextColor(...color);
    doc.text(String(s), x, yy, { align });
  };

  // ── PAGE 1 ────────────────────────────────
  // Header bar
  rect(0, 0, W, 28, 13, 13, 20);
  rect(0, 0, 6, 28, 26, 86, 219);
  txt(result.examName || 'Digital SAT — Practice Exam 1', W/2, 11, 15, true, [255,255,255], 'center');
  txt('Student Performance Report', W/2, 19, 9, false, [160,180,255], 'center');
  txt(`EduQuest · rupali.eduquest@gmail.com`, W/2, 25, 7, false, [120,140,220], 'center');
  y = 34;

  // Student info box
  rect(M, y, W-2*M, 22, 240, 244, 255);
  doc.setDrawColor(180, 190, 240); doc.setLineWidth(0.3);
  doc.rect(M, y, W-2*M, 22, 'S');
  txt('STUDENT INFO', M+4, y+6, 7.5, true, [26,86,219]);
  txt(`Name:   ${result.student.name}`,  M+4,    y+13, 9);
  txt(`Email:  ${result.student.email}`, M+4,    y+19, 8.5);
  txt(`Phone:  ${result.student.phone}`, W/2+4,  y+13, 9);
  txt(`Date:   ${new Date(result.submitTime).toLocaleString('en-IN', {timeZone:'Asia/Kolkata'})}`, W/2+4, y+19, 8.5);
  y += 28;

  // SAT Score hero
  const gc = result.pct >= 70 ? [5,150,105] : result.pct >= 50 ? [180,100,0] : [200,30,30];
  rect(M, y, W-2*M, 26, ...gc);
  let displayScore = '';
  let scoreLabel = '';
  if (result.scaled !== null && result.scaled !== undefined) {
    displayScore = String(result.scaled);
    scoreLabel = 'Estimated SAT Score';
  } else if (result.rwScore !== null && result.rwScore !== undefined && result.mathScore !== null && result.mathScore !== undefined) {
    displayScore = String(Math.round(400 + (result.correct / result.total) * 1200));
    scoreLabel = 'Estimated SAT Score';
  } else if (result.rwScore !== null && result.rwScore !== undefined) {
    displayScore = String(result.rwScore);
    scoreLabel = 'Reading & Writing Score';
  } else if (result.mathScore !== null && result.mathScore !== undefined) {
    displayScore = String(result.mathScore);
    scoreLabel = 'Math Score';
  } else {
    displayScore = String(Math.round(400 + (result.correct / result.total) * 1200));
    scoreLabel = 'Estimated SAT Score';
  }

  txt(displayScore, M+14, y+18, 28, true, [255,255,255]);
  txt(scoreLabel, M+14, y+24, 7, false, [200,255,220]);
  txt(`R&W: ${result.rwScore || '—'}   Math: ${result.mathScore || '—'}`, W/2+8, y+12, 11, true, [255,255,255]);
  txt(`${result.correct} Correct  ·  ${result.wrong} Wrong  ·  ${result.unattempted} Skipped`, W/2+8, y+19, 8.5, false, [210,240,210]);
  txt(`Out of ${result.total} total questions`, W/2+8, y+24, 7.5, false, [190,230,200]);
  y += 32;

  // Stat row
  const attempted = result.correct + result.wrong;
  const STATS = [
    ['Attempted', attempted,            [13,13,20]],
    ['Correct',   result.correct,       [5,150,105]],
    ['Wrong',     result.wrong,         [220,38,38]],
    ['Skipped',   result.unattempted,   [180,100,0]],
    ['Score',     result.pct + '%',     [26,86,219]],
  ];
  const bw = (W - 2*M - 12) / 5;
  STATS.forEach(([label, val, [r,g,b]], i) => {
    const bx = M + i*(bw+3);
    doc.setDrawColor(r,g,b); doc.setLineWidth(0.5);
    doc.rect(bx, y, bw, 16, 'S');
    txt(String(val), bx+bw/2, y+9,  13, true,  [r,g,b], 'center');
    txt(label,       bx+bw/2, y+14, 7,  false, [100,100,120], 'center');
  });
  y += 22;

  // Section scores
  txt('SECTION SCORES', M, y+5, 7.5, true, [26,86,219]);
  y += 9;
  const sections = [
    ['Reading & Writing', result.rwScore || '—', '/800'],
    ['Math',             result.mathScore || '—', '/800'],
  ];
  sections.forEach(([name, score, suffix], i) => {
    const sx = M + i * ((W-2*M)/2 + 3);
    const sw = (W-2*M)/2 - 3;
    rect(sx, y, sw, 12, 245,247,252);
    doc.setDrawColor(210,215,240); doc.setLineWidth(0.3); doc.rect(sx,y,sw,12,'S');
    txt(name,            sx+4, y+5,  8,  true,  [60,60,100]);
    txt(String(score),   sx+sw-20, y+9, 12, true, [26,86,219]);
    txt(suffix,          sx+sw-6,  y+9, 8,  false, [120,130,160]);
  });
  y += 18;

  // Topic table
  txt('TOPIC-WISE PERFORMANCE', M, y+5, 7.5, true, [26,86,219]);
  y += 9;
  rect(M, y, W-2*M, 7, 230, 235, 255);
  doc.setDrawColor(190,200,240); doc.setLineWidth(0.3); doc.rect(M,y,W-2*M,7,'S');
  [['Topic', M+3], ['Total', M+110], ['✓', M+123], ['✗', M+133], ['Accuracy', M+143]].forEach(([h,x]) => {
    txt(h, x, y+5, 7.5, true, [26,86,219]);
  });
  y += 7;

  (result.topicAnalysis || []).forEach((t, idx) => {
    if (y > 268) { doc.addPage(); y = 20; }
    if (idx % 2 === 0) rect(M, y, W-2*M, 7, 249, 250, 255);
    doc.setDrawColor(220,224,240); doc.setLineWidth(0.2); doc.rect(M,y,W-2*M,7,'S');
    txt(t.name,    M+3,   y+5, 8);
    txt(t.total,   M+113, y+5, 8, false, [80,80,100], 'center');
    txt(t.correct, M+126, y+5, 8, false, [5,150,105], 'center');
    txt(t.wrong,   M+136, y+5, 8, false, [220,38,38], 'center');
    // accuracy bar
    const bc = t.acc>=70?[5,150,105]:t.acc>=40?[180,100,0]:[220,38,38];
    rect(M+143, y+2.5, 44, 2.5, 220,224,235);
    if (t.acc > 0) rect(M+143, y+2.5, 44*(t.acc/100), 2.5, ...bc);
    txt(`${t.acc}%`, M+188, y+5, 7, false, [80,80,100]);
    y += 7;
  });
  y += 4;

  // ── PAGE 2: Incorrect & Skipped answers ─────────────
  const LETTERS = ['A','B','C','D'];
  const reviewQs = (result.details || []).filter(d => d.status === 'wrong' || d.status === 'unattempted');

  if (reviewQs.length > 0) {
    doc.addPage(); y = 20;
    rect(M, y, W-2*M, 9, 255, 245, 230); // light amber/orange background
    doc.setDrawColor(217, 119, 6); doc.setLineWidth(0.4); doc.rect(M,y,W-2*M,9,'S');
    txt(`INCORRECT & SKIPPED ANSWERS REVIEW  (${reviewQs.length} questions)`, M+4, y+6, 9, true, [180,90,10]);
    y += 15;

    const clean = str => (str || '').replace(/<[^>]*>/g, '').replace(/&[a-z]+;/gi, m =>
      ({'&nbsp;':' ','&deg;':'°','&rarr;':'→','&larr;':'←','&minus;':'−','&sup2;':'²','&sup3;':'³'}[m] || ' ')
    );

    reviewQs.forEach(qObj => {
      const qText  = `Q${qObj.id} [${qObj.topic || ''}]: ${clean(qObj.text)}`;
      const qLines = doc.splitTextToSize(qText, W-2*M-10);
      
      let yAnsText = '';
      if (qObj.status === 'unattempted') {
        yAnsText = `➖ Your Answer: (Skipped)`;
      } else {
        yAnsText = `✗ Your Answer: (${LETTERS[qObj.chosen]}) ${clean(qObj.options[qObj.chosen])}`;
      }
      
      const yAns   = doc.splitTextToSize(yAnsText, W-2*M-14);
      const cAns   = doc.splitTextToSize(`✓ Correct:     (${LETTERS[qObj.answer]}) ${clean(qObj.options[qObj.answer])}`, W-2*M-14);
      const need   = qLines.length*4.5 + yAns.length*4.2 + cAns.length*4.2 + 10;

      if (y + need > 275) { doc.addPage(); y = 20; }

      // left accent bar
      if (qObj.status === 'unattempted') {
        rect(M, y, 1.8, need-3, 217, 119, 6); // amber/orange
      } else {
        rect(M, y, 1.8, need-3, 220, 38, 38); // red
      }

      let iy = y + 1;
      // question text
      doc.setFontSize(8.5); doc.setFont('helvetica','bold'); doc.setTextColor(30,30,30);
      qLines.forEach(l => { doc.text(l, M+5, iy+3.5); iy += 4.5; });
      // user answer
      doc.setFontSize(8); doc.setFont('helvetica','normal'); 
      if (qObj.status === 'unattempted') {
        doc.setTextColor(217, 119, 6);
      } else {
        doc.setTextColor(200, 30, 30);
      }
      yAns.forEach(l => { doc.text(l, M+8, iy+3.2); iy += 4.2; });
      // correct answer
      doc.setTextColor(5,130,80);
      cAns.forEach(l => { doc.text(l, M+8, iy+3.2); iy += 4.2; });

      y += need + 2;
    });
  }

  // Footer on every page
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    line(M, 285, W-M, 285, 180,190,220);
    txt(`${result.examName || 'Digital SAT Practice Exam 1'} — EduQuest`, M, 290, 6.5, false, [140,150,180]);
    txt(`Page ${p} of ${totalPages}`, W-M, 290, 6.5, false, [140,150,180], 'right');
    txt('rupali.eduquest@gmail.com', W/2, 290, 6.5, false, [140,150,180], 'center');
  }

  const filename = `${result.student.name.replace(/\s+/g,'_')}_SAT_Report.pdf`;
  if (shouldSave) doc.save(filename);
  return doc;
}

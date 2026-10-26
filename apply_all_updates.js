const fs = require('fs');
const path = require('path');

function findFiles(dir, filterNames) {
    let results = [];
    fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
        if (entry.name === 'node_modules' || entry.name === '.git') return;
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results = results.concat(findFiles(fullPath, filterNames));
        } else if (filterNames.includes(entry.name)) {
            results.push(fullPath);
        }
    });
    return results;
}

function updateTestHtml(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    const isMathFolder = filePath.toLowerCase().includes('math');

    // 1. Update HTML hero score label id & initial text
    if (content.includes('<div class="composite-label">ACT Composite Score</div>')) {
        const defaultLabel = isMathFolder ? 'ACT Math Score' : 'ACT Composite Score';
        content = content.replace(
            '<div class="composite-label">ACT Composite Score</div>',
            `<div class="composite-label" id="compositeLabel">${defaultLabel}</div>`
        );
        changed = true;
    } else if (content.includes('<div class="composite-label" id="compositeLabel">ACT Composite Score</div>') && isMathFolder) {
        content = content.replace(
            '<div class="composite-label" id="compositeLabel">ACT Composite Score</div>',
            '<div class="composite-label" id="compositeLabel">ACT Math Score</div>'
        );
        changed = true;
    }

    // 2. Update submitTest scoring calculation
    const oldScoreRegex = /\/\/ Section scaled scores[\s\S]*?const composite = (getACTCompositeScore\(sectionScores\)|isSingleSec \?[\s\S]*?\);)/;
    if (oldScoreRegex.test(content)) {
        const newScoreBlock = `// Section scaled scores
            const activeSecKeys = Object.keys(SECTION_QUESTIONS).filter(sec => SECTION_QUESTIONS[sec] && SECTION_QUESTIONS[sec].length > 0);
            const isSingleSec = activeSecKeys.length === 1;
            const singleSecKey = isSingleSec ? activeSecKeys[0] : null;

            const sectionScores = {};
            activeSecKeys.forEach(sec => {
                sectionScores[sec] = getACTSectionScore(sec, sectionRaw[sec] || 0, SECTION_QUESTIONS[sec].length);
            });
            const composite = isSingleSec ? (sectionScores[singleSecKey] || 0) : getACTCompositeScore(sectionScores);`;
        content = content.replace(oldScoreRegex, newScoreBlock);
        changed = true;
    }

    // 3. Update sendEmails mathScore payload
    if (content.includes('mathScore: null,')) {
        content = content.replace('mathScore: null,', 'mathScore: (sectionScores && sectionScores.math) || null,');
        changed = true;
    }

    // 4. Update showResultScreen
    const oldShowResultRegex = /function showResultScreen\(r\)\s*\{[\s\S]*?renderInlineReview\('all'\);[\s\S]*?\}/;
    if (oldShowResultRegex.test(content)) {
        const newShowResultBlock = `function showResultScreen(r) {
            document.getElementById('testScreen').style.display = 'none';
            document.getElementById('resultScreen').style.display = 'flex';
            document.getElementById('resultScreen').style.flexDirection = 'column';

            const activeSecKeys = Object.keys(r.sectionScores || {}).filter(sec => {
                return (typeof SECTION_QUESTIONS !== 'undefined' && SECTION_QUESTIONS[sec] && SECTION_QUESTIONS[sec].length > 0) || (r.details && r.details.some(d => d.section === sec));
            });
            const isSingleSec = activeSecKeys.length === 1;
            const singleSec = isSingleSec ? activeSecKeys[0] : (activeSecKeys.includes('math') && activeSecKeys.length === 1 ? 'math' : null);
            const isMathTest = singleSec === 'math' || (!singleSec && (r.examName || '').toLowerCase().includes('math'));

            let mainLabel = 'ACT Composite Score';
            let mainScore = r.composite;

            if (isMathTest) {
                mainLabel = 'ACT Math Score';
                mainScore = r.sectionScores?.math !== undefined ? r.sectionScores.math : r.composite;
            } else if (isSingleSec) {
                const secLabels = { english: 'English', math: 'Math', reading: 'Reading', science: 'Science' };
                mainLabel = \`ACT \${secLabels[singleSec] || singleSec} Score\`;
                mainScore = r.sectionScores?.[singleSec] !== undefined ? r.sectionScores[singleSec] : r.composite;
            }

            const compLabelEl = document.getElementById('compositeLabel') || document.querySelector('.composite-label');
            if (compLabelEl) compLabelEl.textContent = mainLabel;

            const scoreNum = Number(mainScore) || 0;
            const scoreColor = scoreNum >= 28 ? '#34d399' : scoreNum >= 20 ? '#fbbf24' : '#f87171';
            const el = document.getElementById('compositeScore');
            if (el) {
                el.textContent = mainScore;
                el.style.color = scoreColor;
            }

            // Section scores row - if single section (e.g. Maths test), do not show redundant sub-card
            const secRow = document.getElementById('sectionScoresRow');
            if (secRow) {
                if (isSingleSec || isMathTest) {
                    secRow.innerHTML = '';
                    secRow.style.display = 'none';
                } else {
                    secRow.style.display = 'grid';
                    const secColors = { english: '#1a56db', math: '#059669', reading: '#7c3aed', science: '#d97706' };
                    const secLabels = { english: 'English', math: 'Math', reading: 'Reading', science: 'Science' };
                    secRow.innerHTML = activeSecKeys.map(sec => \`
    <div class="sec-score-box" style="background:\${secColors[sec] || '#222'}22;border:1px solid \${secColors[sec] || '#444'}44">
      <div class="s-label" style="color:\${(typeof SECTION_COLORS !== 'undefined' && SECTION_COLORS[sec]) || '#fff'}">\${secLabels[sec] || sec}</div>
      <div class="s-val" style="color:\${(typeof SECTION_COLORS !== 'undefined' && SECTION_COLORS[sec]) || '#fff'}">\${r.sectionScores[sec]}</div>
      <div class="s-max" style="color:\${(typeof SECTION_COLORS !== 'undefined' && SECTION_COLORS[sec]) || '#fff'}aa">/ 36</div>
    </div>
  \`).join('');
                }
            }

            // Stats
            const statsWrap = document.getElementById('resultStats');
            statsWrap.innerHTML = [
                ['✅ Correct', r.correct, '#34d399'],
                ['❌ Wrong', r.wrong, '#f87171'],
                ['➖ Skipped', r.unattempted, '#fbbf24'],
                ['🎯 Accuracy', r.pct + '%', '#60a5fa'],
            ].map(([l, v, c]) => \`
    <div class="stat-box">
      <div class="sv" style="color:\${c}">\${v}</div>
      <div class="sl">\${l}</div>
    </div>
  \`).join('');

            // Topic table
            const tbody = document.getElementById('topicTableBody');
            const secClrs = { english: '#93c5fd', math: '#6ee7b7', reading: '#c4b5fd', science: '#fde68a' };
            tbody.innerHTML = r.topicAnalysis.map(t => {
                const bc = t.acc >= 70 ? '#34d399' : t.acc >= 40 ? '#fbbf24' : '#f87171';
                return \`
      <tr>
        <td>\${t.name}</td>
        <td><span style="color:\${secClrs[t.section]};font-size:0.78rem;font-weight:600">\${t.section.toUpperCase()}</span></td>
        <td>\${t.total}</td>
        <td style="color:#34d399;font-weight:600">\${t.correct}</td>
        <td style="color:#f87171;font-weight:600">\${t.wrong}</td>
        <td>
          <div class="acc-bar-wrap">
            <div class="acc-bar-bg"><div class="acc-bar-fill" style="width:\${t.acc}%;background:\${bc}"></div></div>
            <span style="font-size:0.8rem;font-weight:600;color:\${bc};min-width:40px">\${t.acc}%</span>
          </div>
        </td>
      </tr>
    \`;
            }).join('');
            if (typeof renderInlineReview === 'function') renderInlineReview('all');
        }`;
        content = content.replace(oldShowResultRegex, newShowResultBlock);
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('✓ Updated test HTML:', filePath);
    }
}

function updateReportJs(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    const oldReportHeroRegex = /(\/\/ Composite score hero[\s\S]*?|const compScore = Number\(result\.composite\)[\s\S]*?|\/\/ Score hero banner[\s\S]*?)(y \+= 34;)/;
    if (oldReportHeroRegex.test(content)) {
        const newReportHero = `// Score hero banner
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
    y += 34;`;
        content = content.replace(oldReportHeroRegex, newReportHero);
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('✓ Updated report JS:', filePath);
    }
}

console.log('Applying updates to all test HTML files...');
const testFiles = findFiles('.', ['test.html', 'act1.html']);
testFiles.forEach(updateTestHtml);

console.log('\nApplying updates to all report JS files...');
const reportFiles = findFiles('.', ['report.js', 'act_report1.js']);
reportFiles.forEach(updateReportJs);

console.log('\nAll files processed successfully!');

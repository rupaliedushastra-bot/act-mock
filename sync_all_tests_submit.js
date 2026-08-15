const fs = require('fs');
const path = require('path');

function syncTestFile(filePath) {
    let code = fs.readFileSync(filePath, 'utf8');

    // 1. Update updateTabCounts
    const oldUpdateTabCountsRegex = /function updateTabCounts\(\)\s*\{[\s\S]*?\n        \}/;
    const newUpdateTabCountsCode = `function updateTabCounts() {
            ['english', 'math', 'reading', 'science'].forEach(sec => {
                const qs = SECTION_QUESTIONS[sec] || [];
                const answered = qs.filter(q => answers[q.id] !== undefined).length;
                const el = document.getElementById(\`tabCount-\${sec}\`);
                if (el) el.textContent = \`\${answered}/\${qs.length}\`;
            });
        }`;

    if (oldUpdateTabCountsRegex.test(code)) {
        code = code.replace(oldUpdateTabCountsRegex, newUpdateTabCountsCode);
    }

    // 2. Replace Next/Submit button block inside renderQuestion
    const oldBtnBlockRegex = /\/\/ Next \/ Submit button[\s\S]*?updateTabCounts\(\);/;

    const newBtnBlockCode = `// Next / Submit button
            const activeSecs = Object.keys(SECTION_QUESTIONS).filter(sec => SECTION_QUESTIONS[sec] && SECTION_QUESTIONS[sec].length > 0);
            const lastSec = activeSecs[activeSecs.length - 1] || currentSection;
            const isLastSection = currentSection === lastSec;
            const isLastQ = currentQIndex === qs.length - 1;
            const btnNext = document.getElementById('btnNext');

            if (isLastSection && isLastQ) {
                btnNext.textContent = 'Submit Test ✓';
                btnNext.className = 'btn-nav btn-submit-test';
                btnNext.onclick = confirmSubmit;
            } else if (isLastQ) {
                const nextIdx = activeSecs.indexOf(currentSection) + 1;
                const nextSecName = activeSecs[nextIdx];
                btnNext.textContent = \`Next Section (\${SECTION_NAMES[nextSecName] || 'Next'}) →\`;
                btnNext.className = 'btn-nav btn-next';
                btnNext.onclick = () => goToSection(nextSecName);
            } else {
                btnNext.textContent = 'Next →';
                btnNext.className = 'btn-nav btn-next';
                btnNext.onclick = nextQ;
            }

            updateTabCounts();`;

    if (oldBtnBlockRegex.test(code)) {
        code = code.replace(oldBtnBlockRegex, newBtnBlockCode);
        console.log('Successfully synced Next/Submit logic in:', filePath);
    } else {
        console.warn('Could not match button block in:', filePath);
    }

    fs.writeFileSync(filePath, code);
}

function findFiles(dir) {
    const results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                results.push(...findFiles(fullPath));
            }
        } else {
            if (file === 'act1.html' || file === 'test.html') {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const files = findFiles('.');
files.forEach(syncTestFile);
console.log('Synced Submit button & updateTabCounts across ALL 39 test files!');

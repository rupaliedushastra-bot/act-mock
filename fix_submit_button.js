const fs = require('fs');
const path = require('path');

function fixSubmitButtonInFile(filePath) {
    let code = fs.readFileSync(filePath, 'utf8');

    // 1. Fix updateTabCounts
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

    // 2. Fix isLastSection and Next/Submit button logic in renderQuestion
    const oldBtnLogicRegex = /const isLastSection = currentSection === ['"]science['"];\s*const isLastQ = currentQIndex === qs\.length - 1;\s*const btnNext = document\.getElementById\(['"]btnNext['"]\);\s*if \(isLastSection && isLastQ\) \{[\s\S]*?\} else \{\s*btnNext\.textContent = ['"]Next →['"];\s*btnNext\.className = ['"]btn-nav btn-next['"];\s*btnNext\.onclick = nextQ;\s*\}/;

    const newBtnLogicCode = `const activeSecs = Object.keys(SECTION_QUESTIONS).filter(sec => SECTION_QUESTIONS[sec] && SECTION_QUESTIONS[sec].length > 0);
            const lastSec = activeSecs[activeSecs.length - 1] || 'reading';
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
            }`;

    if (oldBtnLogicRegex.test(code)) {
        code = code.replace(oldBtnLogicRegex, newBtnLogicCode);
        console.log('Fixed submit button logic in:', filePath);
    } else {
        // Fallback replacement if exact regex match fails
        code = code.replace("const isLastSection = currentSection === 'science';", "const activeSecs = Object.keys(SECTION_QUESTIONS).filter(sec => SECTION_QUESTIONS[sec] && SECTION_QUESTIONS[sec].length > 0);\n            const lastSec = activeSecs[activeSecs.length - 1] || 'reading';\n            const isLastSection = currentSection === lastSec;");
        console.log('Fallback fixed in:', filePath);
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
files.forEach(fixSubmitButtonInFile);
console.log('Finished updating submit button logic across all files!');

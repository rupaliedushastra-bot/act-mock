const fs = require('fs');
const path = require('path');

function fixSectionConstsInFile(filePath) {
    let code = fs.readFileSync(filePath, 'utf8');

    code = code.replace(
        /const\s+SECTION_COLORS\s*=\s*\{/g,
        'var SECTION_COLORS = window.SECTION_COLORS = window.SECTION_COLORS || {'
    );

    code = code.replace(
        /const\s+SECTION_NAMES\s*=\s*\{/g,
        'var SECTION_NAMES = window.SECTION_NAMES = window.SECTION_NAMES || {'
    );

    fs.writeFileSync(filePath, code);
    console.log('Fixed section consts in:', filePath);
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
files.forEach(fixSectionConstsInFile);
console.log('Finished fixing SECTION_COLORS and SECTION_NAMES across all files!');

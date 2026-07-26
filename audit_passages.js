const fs = require('fs');
const path = require('path');

const files = ['act_questions1.js'];
fs.readdirSync('.').forEach(d => {
    if (fs.statSync(d).isDirectory()) {
        const f1 = path.join(d, 'act_questions1.js');
        const f2 = path.join(d, 'questions.js');
        if (fs.existsSync(f1)) files.push(f1);
        if (fs.existsSync(f2)) files.push(f2);
    }
});

let withPassageCount = 0;
let totalQ = 0;

files.forEach(f => {
    try {
        const content = fs.readFileSync(f, 'utf8');
        const matches = content.match(/\{\s*"id"[\s\S]*?\n\s*\}/g) || [];
        matches.forEach(m => {
            totalQ++;
            if (m.includes('"passage"')) withPassageCount++;
        });
    } catch(e) {}
});

console.log(`Total questions scanned across ${files.length} files: ${totalQ}`);
console.log(`Questions with "passage" field: ${withPassageCount}`);

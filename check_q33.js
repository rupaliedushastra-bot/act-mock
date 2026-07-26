const fs = require('fs');
const path = require('path');

const files = [];
if (fs.existsSync('act_questions1.js')) files.push('act_questions1.js');
fs.readdirSync('.').forEach(d => {
    if (fs.statSync(d).isDirectory()) {
        const f1 = path.join(d, 'act_questions1.js');
        const f2 = path.join(d, 'questions.js');
        if (fs.existsSync(f1)) files.push(f1);
        if (fs.existsSync(f2)) files.push(f2);
    }
});

files.forEach(f => {
    try {
        const code = fs.readFileSync(f, 'utf8');
        // require module by creating dummy context or regex
        const matches = code.match(/\{\s*"id"\s*:\s*(?:33|32|34|31|35)[\s\S]*?\n\s*\}/g) || [];
        matches.forEach(m => {
            if (m.includes('[33]') || m.includes('33') || m.includes('underlined portion')) {
                console.log(`=== File: ${f} ===`);
                console.log(m);
                console.log('-----------------------------------');
            }
        });
    } catch(e) {}
});

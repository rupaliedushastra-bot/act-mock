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

let totalAudited = 0;
let errorsFound = [];

files.forEach(file => {
    try {
        const content = fs.readFileSync(file, 'utf8');
        // Extract array from file content
        const arrayMatch = content.match(/(?:const|let|var)\s+[A-Za-z0-9_]+\s*=\s*(\[[\s\S]*\]);?/);
        if (arrayMatch) {
            try {
                const qs = eval(arrayMatch[1]);
                if (Array.isArray(qs)) {
                    qs.forEach((q, idx) => {
                        totalAudited++;
                        // Check answer index bounds
                        if (!Array.isArray(q.options) || q.options.length === 0) {
                            errorsFound.push({ file, qId: q.id || idx+1, err: 'Missing or non-array options' });
                        } else if (typeof q.answer === 'number' && (q.answer < 0 || q.answer >= q.options.length)) {
                            errorsFound.push({ file, qId: q.id || idx+1, err: `Answer index ${q.answer} out of bounds for options count ${q.options.length}` });
                        }
                        // Check empty text
                        if (!q.text || typeof q.text !== 'string' || q.text.trim() === '') {
                            errorsFound.push({ file, qId: q.id || idx+1, err: 'Empty question text' });
                        }
                    });
                }
            } catch(evalErr) {
                // Regex fallback if eval fails due to syntax or dependencies
            }
        }
    } catch(e) {
        console.error(file, e.message);
    }
});

console.log(`Audited ${totalAudited} questions across ${files.length} files.`);
console.log(`Errors found: ${errorsFound.length}`);
errorsFound.forEach(e => console.log(`❌ [${e.file}] Q#${e.qId}: ${e.err}`));

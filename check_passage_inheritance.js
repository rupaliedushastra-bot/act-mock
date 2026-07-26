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

let missingPassageInSeries = [];

files.forEach(file => {
    try {
        const content = fs.readFileSync(file, 'utf8');
        const arrayMatch = content.match(/(?:const|let|var)\s+[A-Za-z0-9_]+\s*=\s*(\[[\s\S]*\]);?/);
        if (arrayMatch) {
            const qs = eval(arrayMatch[1]);
            if (Array.isArray(qs)) {
                let currentPassage = null;
                qs.forEach(q => {
                    if (q.passage) {
                        currentPassage = q.passage;
                    }
                    if (q.text && q.text.includes("underlined portion") && !q.passage && currentPassage) {
                        missingPassageInSeries.push({
                            file,
                            qId: q.id,
                            qText: q.text,
                            hasInheritedPassage: true
                        });
                    } else if (q.text && q.text.includes("underlined portion") && !q.passage && !currentPassage) {
                        missingPassageInSeries.push({
                            file,
                            qId: q.id,
                            qText: q.text,
                            hasInheritedPassage: false
                        });
                    }
                });
            }
        }
    } catch(e) {}
});

console.log(`Found ${missingPassageInSeries.length} questions referencing underlined portion that lack explicit passage property.`);
const inheritedCount = missingPassageInSeries.filter(x => x.hasInheritedPassage).length;
const noPassageCount = missingPassageInSeries.filter(x => !x.hasInheritedPassage).length;
console.log(`- Questions that can inherit passage from previous question: ${inheritedCount}`);
console.log(`- Questions with no passage in series at all: ${noPassageCount}`);

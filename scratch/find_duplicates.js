const fs = require('fs');

const loadQs = (dir) => {
    try {
        const code = fs.readFileSync(`${dir}/act_questions1.js`, 'utf8');
        const context = {};
        eval(code + '\n; context.ACT_QUESTIONS1 = ACT_QUESTIONS1;');
        return context.ACT_QUESTIONS1;
    } catch(e) {
        return [];
    }
};

const allDirs = Array.from({length: 9}, (_, i) => `act-diagnostic-${i+1}`);
const allQs = allDirs.map(d => ({name: d, qs: loadQs(d)}));

console.log("Checking for question text overlaps between diagnostic 1 and others:");
const d1Texts = new Set(allQs[0].qs.map(q => q.text.toLowerCase().trim()));

for (let i = 1; i < 9; i++) {
    let overlap = 0;
    allQs[i].qs.forEach(q => {
        if (d1Texts.has(q.text.toLowerCase().trim())) {
            overlap++;
        }
    });
    console.log(`Overlap with ${allQs[i].name}: ${overlap} / ${allQs[i].qs.length}`);
}

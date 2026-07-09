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

const d4Texts = new Set(allQs[3].qs.map(q => q.text.toLowerCase().trim()));
console.log("Overlap with act-diagnostic-4:");
for (let i = 0; i < 9; i++) {
    let overlap = 0;
    allQs[i].qs.forEach(q => {
        if (d4Texts.has(q.text.toLowerCase().trim())) {
            overlap++;
        }
    });
    console.log(`${allQs[i].name}: ${overlap} / ${allQs[i].qs.length}`);
}

const d7Texts = new Set(allQs[6].qs.map(q => q.text.toLowerCase().trim()));
console.log("\nOverlap with act-diagnostic-7:");
for (let i = 0; i < 9; i++) {
    let overlap = 0;
    allQs[i].qs.forEach(q => {
        if (d7Texts.has(q.text.toLowerCase().trim())) {
            overlap++;
        }
    });
    console.log(`${allQs[i].name}: ${overlap} / ${allQs[i].qs.length}`);
}

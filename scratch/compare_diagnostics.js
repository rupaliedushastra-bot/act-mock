const fs = require('fs');

const loadQs = (dir) => {
    const code = fs.readFileSync(`${dir}/act_questions1.js`, 'utf8');
    const context = {};
    eval(code + '\n; context.ACT_QUESTIONS1 = ACT_QUESTIONS1;');
    return context.ACT_QUESTIONS1;
};

const q1 = loadQs('act-diagnostic-1');
const q2 = loadQs('act-diagnostic-2');

console.log("Diagnostic 1 Q51:");
console.log(q1[50]); // index 50 is Q51
console.log("\nDiagnostic 2 Q51:");
console.log(q2[50]);

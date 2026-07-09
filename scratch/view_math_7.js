const fs = require('fs');
const code = fs.readFileSync('act-diagnostic-7/act_questions1.js', 'utf8');
const context = {};
eval(code + '\n; context.ACT_QUESTIONS1 = ACT_QUESTIONS1;');
const mathQs = context.ACT_QUESTIONS1.filter(q => q.section === 'math');
console.log(JSON.stringify(mathQs.slice(0, 10), null, 2));

const fs = require('fs');
let code = fs.readFileSync('act-diagnostic-9/act_questions1.js', 'utf8');
const context = {};
eval(code + '\n; context.ACT_QUESTIONS1 = ACT_QUESTIONS1;');
const mathQs = context.ACT_QUESTIONS1.filter(q => q.section === 'math');
console.log(`Found ${mathQs.length} Math questions.`);
console.log(JSON.stringify(mathQs.slice(0, 3), null, 2));

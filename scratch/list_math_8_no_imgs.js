const fs = require('fs');
const code = fs.readFileSync('act-diagnostic-8/act_questions1.js', 'utf8');
const context = {};
eval(code + '\n; context.ACT_QUESTIONS1 = ACT_QUESTIONS1;');
const mathQs = context.ACT_QUESTIONS1.filter(q => q.section === 'math' && !q.text.includes('<img'));
console.log(mathQs.map(q => ({id: q.id, text: q.text, options: q.options})));

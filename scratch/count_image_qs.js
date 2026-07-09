const fs = require('fs');

const allDirs = Array.from({length: 9}, (_, i) => `act-diagnostic-${i+1}`);

allDirs.forEach(dir => {
    try {
        const code = fs.readFileSync(`${dir}/act_questions1.js`, 'utf8');
        const context = {};
        eval(code + '\n; context.ACT_QUESTIONS1 = ACT_QUESTIONS1;');
        const qs = context.ACT_QUESTIONS1;
        const total = qs.length;
        const mathTotal = qs.filter(q => q.section === 'math').length;
        const mathImg = qs.filter(q => q.section === 'math' && (q.text.includes('<img') || q.options.some(o => o.includes('<img')))).length;
        console.log(`${dir}: Total qs: ${total} | Math qs: ${mathTotal} | Math qs with images: ${mathImg}`);
    } catch(e) {
        console.log(`${dir}: Error: ${e.message}`);
    }
});

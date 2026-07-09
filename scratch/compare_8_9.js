const fs = require('fs');

const loadQs = (dir) => {
    const code = fs.readFileSync(`${dir}/act_questions1.js`, 'utf8');
    const context = {};
    eval(code + '\n; context.ACT_QUESTIONS1 = ACT_QUESTIONS1;');
    return context.ACT_QUESTIONS1;
};

const q8 = loadQs('act-diagnostic-8');
const q9 = loadQs('act-diagnostic-9');

// Find a math question in q8 that is also in q9 but has different values or text
q8.forEach((item8) => {
    if (item8.section === 'math') {
        // Find a math question in q9 with the same topic and similar wording
        const match = q9.find(item9 => item9.section === 'math' && item9.topic === item8.topic && (item9.text.slice(0, 30) === item8.text.slice(0, 30) || item9.id === item8.id));
        if (match && match.text !== item8.text) {
            console.log("=== Match found ===");
            console.log("Diagnostic 8:", JSON.stringify(item8, null, 2));
            console.log("Diagnostic 9:", JSON.stringify(match, null, 2));
        }
    }
});

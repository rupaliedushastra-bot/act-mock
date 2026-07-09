const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('.').filter(name => name.startsWith('act-diagnostic-'));
dirs.sort();

dirs.forEach(dir => {
    const file = path.join(dir, 'act_questions1.js');
    if (fs.existsSync(file)) {
        try {
            let code = fs.readFileSync(file, 'utf8');
            // Mock empty scaling table and other dependencies to avoid reference error
            const window = {};
            const global = {};
            // Eval the file to get ACT_QUESTIONS1
            const context = {};
            eval(code + '\n; context.ACT_QUESTIONS1 = ACT_QUESTIONS1;');
            const qs = context.ACT_QUESTIONS1;
            const sections = {};
            qs.forEach(q => {
                sections[q.section] = (sections[q.section] || 0) + 1;
            });
            console.log(`${dir}: Total: ${qs.length} | Sections: ${JSON.stringify(sections)}`);
        } catch (e) {
            console.log(`${dir}: Error: ${e.message}`);
        }
    }
});

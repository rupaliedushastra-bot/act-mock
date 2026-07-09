const fs = require('fs');
const path = require('path');

const dirs = ['act-diagnostic-10', 'act-diagnostic-11', 'act-diagnostic-12'];

dirs.forEach(dir => {
    const file = path.join(dir, 'act_questions1.js');
    if (!fs.existsSync(file)) {
        console.error(`❌ ${file} does not exist!`);
        process.exit(1);
    }
    
    try {
        const code = fs.readFileSync(file, 'utf8');
        const context = {};
        eval(code + '\n; context.ACT_QUESTIONS1 = ACT_QUESTIONS1;');
        const qs = context.ACT_QUESTIONS1;
        
        console.log(`=== Verification for ${dir} ===`);
        console.log(`Total questions: ${qs.length} (expected 131)`);
        
        const counts = { english: 0, math: 0, reading: 0 };
        qs.forEach((q, index) => {
            counts[q.section]++;
            if (q.id !== index + 1) {
                console.error(`❌ Question ID mismatch at index ${index}: expected ${index + 1}, got ${q.id}`);
            }
            if (q.answer < 0 || q.answer >= q.options.length) {
                console.error(`❌ Question ID ${q.id} has invalid answer index ${q.answer} for options count ${q.options.length}`);
            }
        });
        
        console.log(`Section counts: ${JSON.stringify(counts)}`);
        if (qs.length === 131 && counts.english === 50 && counts.math === 45 && counts.reading === 36) {
            console.log(`✅ ${dir} passes check!`);
        } else {
            console.error(`❌ ${dir} failed count assertions!`);
        }
    } catch(e) {
        console.error(`❌ Error parsing ${file}: ${e.message}`);
    }
});

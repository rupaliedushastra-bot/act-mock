const fs = require('fs');
const path = require('path');

function findQuestionFiles() {
    const files = [];
    if (fs.existsSync('act_questions1.js')) files.push('act_questions1.js');
    
    fs.readdirSync('.').forEach(d => {
        if (fs.statSync(d).isDirectory()) {
            const f1 = path.join(d, 'act_questions1.js');
            const f2 = path.join(d, 'questions.js');
            if (fs.existsSync(f1)) files.push(f1);
            if (fs.existsSync(f2)) files.push(f2);
        }
    });
    return files;
}

const files = findQuestionFiles();
console.log(`Found ${files.length} question files.`);

const problemQuestions = [];

files.forEach(file => {
    try {
        const content = fs.readFileSync(file, 'utf8');
        // Evaluate array using Function or JSON parse if possible, or regex match
        const matches = content.match(/\{\s*"id"[\s\S]*?\n\s*\}/g) || [];
        
        matches.forEach((qStr, idx) => {
            if (qStr.includes("underlined portion") || qStr.includes("[33]") || qStr.match(/\[\d+\]/)) {
                problemQuestions.push({
                    file,
                    snippet: qStr.slice(0, 200).replace(/\s+/g, ' ')
                });
            }
        });
    } catch(e) {
        console.error(file, e.message);
    }
});

console.log(`Found ${problemQuestions.length} questions referencing bracketed/underlined portions.`);
problemQuestions.slice(0, 30).forEach((item, idx) => {
    console.log(`${idx+1}. [${item.file}] ${item.snippet}`);
});

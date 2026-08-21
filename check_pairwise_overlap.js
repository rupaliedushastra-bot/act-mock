const fs = require('fs');
const path = require('path');
const { findTestFiles, loadQuestions } = require('./validate_all_tests');

function normalize(text) {
    if (!text) return '';
    return text.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
}

const testFiles = findTestFiles();
const testsData = [];

testFiles.forEach(tf => {
    const qs = loadQuestions(tf.path);
    if (!Array.isArray(qs)) return;
    testsData.push({
        name: tf.name,
        path: tf.path,
        questions: qs.map(q => ({
            id: q.id,
            section: q.section,
            text: q.text || '',
            normText: normalize(q.text || '')
        }))
    });
});

console.log('--- TEST PAIRWISE OVERLAP MATRIX ---');
for (let i = 0; i < testsData.length; i++) {
    for (let j = i + 1; j < testsData.length; j++) {
        const t1 = testsData[i];
        const t2 = testsData[j];
        
        // Count shared questions
        const t1Texts = new Set(t1.questions.map(q => q.normText).filter(t => t.length > 10));
        let shared = 0;
        t2.questions.forEach(q => {
            if (t1Texts.has(q.normText)) shared++;
        });

        if (shared > 0) {
            console.log(`[${t1.name}] <---> [${t2.name}]: ${shared} questions shared (${Math.round(shared / t1.questions.length * 100)}% of T1, ${Math.round(shared / t2.questions.length * 100)}% of T2)`);
        }
    }
}

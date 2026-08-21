const fs = require('fs');
const path = require('path');
const { findTestFiles, loadQuestions } = require('./validate_all_tests');

const testFiles = findTestFiles();
console.log('--- SECTION BREAKDOWN ACROSS ALL TESTS ---');

testFiles.forEach(tf => {
    const qs = loadQuestions(tf.path);
    if (!Array.isArray(qs)) return;

    const sections = {};
    const topics = new Set();
    let hasPassages = 0;
    let missingPassages = 0;
    let missingExplanation = 0;

    qs.forEach(q => {
        const sec = (q.section || 'unknown').toLowerCase();
        sections[sec] = (sections[sec] || 0) + 1;
        if (q.topic) topics.add(q.topic);
        if (sec === 'reading') {
            if (q.passage && q.passage.trim().length > 0) hasPassages++;
            else missingPassages++;
        }
        if (!q.explanation && !q.solution) missingExplanation++;
    });

    const secStr = Object.entries(sections).map(([s, count]) => `${s}: ${count}`).join(', ');
    console.log(`[${tf.name}] Total: ${qs.length} Qs | Sections: { ${secStr} } | Topics: ${topics.size} | Reading w/ Passages: ${hasPassages}, Missing Passages: ${missingPassages} | No Explanations: ${missingExplanation}`);
});

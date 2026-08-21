const fs = require('fs');
const path = require('path');
const { findTestFiles, loadQuestions } = require('./validate_all_tests');

const testFiles = findTestFiles();
let count = 0;

testFiles.forEach(tf => {
    const qs = loadQuestions(tf.path);
    if (!Array.isArray(qs)) return;
    qs.forEach(q => {
        if (q.text && q.text.includes("underlined portion") && !q.passage) {
            count++;
            if (count <= 5) {
                console.log(`\n--- Example #${count} in [${tf.name}] Q#${q.id} (Sec: ${q.section}, Topic: ${q.topic}) ---`);
                console.log(`Text: ${q.text}`);
                console.log(`Options: ${JSON.stringify(q.options)}`);
            }
        }
    });
});
console.log(`\nTotal questions with 'underlined portion' without passage: ${count}`);

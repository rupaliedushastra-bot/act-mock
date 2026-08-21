const fs = require('fs');
const path = require('path');
const { findTestFiles, loadQuestions } = require('./validate_all_tests');

function normalize(text) {
    if (!text) return '';
    return text.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
}

const testFiles = findTestFiles();
console.log(`Loaded ${testFiles.length} test files for cross-duplication audit.`);

// Store all questions: { testName, id, text, cleanText, normText, options, answer, section }
const allQuestions = [];

testFiles.forEach(tf => {
    const qs = loadQuestions(tf.path);
    if (!Array.isArray(qs)) {
        console.error(`Error loading ${tf.name}`);
        return;
    }
    qs.forEach((q, idx) => {
        allQuestions.push({
            testName: tf.name,
            testPath: tf.path,
            index: idx + 1,
            id: q.id,
            section: q.section,
            text: q.text || '',
            normText: normalize(q.text || ''),
            options: q.options || [],
            answer: q.answer,
            passage: q.passage || ''
        });
    });
});

console.log(`Total questions collected across all tests: ${allQuestions.length}`);

// 1. Group by exact normalized text
const textMap = new Map();
allQuestions.forEach(q => {
    if (!q.normText || q.normText.length < 10) return; // skip too short if any
    if (!textMap.has(q.normText)) {
        textMap.set(q.normText, []);
    }
    textMap.get(q.normText).push(q);
});

let exactDupCount = 0;
const exactDuplicates = [];

textMap.forEach((qList, normText) => {
    if (qList.length > 1) {
        // Check if they are across different tests
        const tests = new Set(qList.map(q => q.testName));
        if (tests.size > 1) {
            exactDupCount++;
            exactDuplicates.push({
                text: qList[0].text,
                occurrences: qList.map(q => ({ test: q.testName, id: q.id, index: q.index, section: q.section, answer: q.answer }))
            });
        }
    }
});

console.log(`\n====================================================`);
console.log(`CROSS-TEST EXACT DUPLICATES FOUND: ${exactDuplicates.length}`);
console.log(`====================================================`);

exactDuplicates.forEach((dup, i) => {
    console.log(`\n[Duplicate #${i + 1}] Text snippet: "${dup.text.slice(0, 100)}..."`);
    dup.occurrences.forEach(occ => {
        console.log(`   - In [${occ.test}] Q#${occ.index} (ID: ${occ.id}, Section: ${occ.section}, Ans: ${occ.answer})`);
    });
});

// Let's also check between full tests / diagnostic tests specifically (excluding topic tests if separate)
const fullMockDupes = exactDuplicates.filter(d => {
    const mockTests = d.occurrences.filter(o => !o.test.startsWith('topic-'));
    return mockTests.length > 1;
});

console.log(`\n====================================================`);
console.log(`DUPLICATES AMONG FULL MOCK / DIAGNOSTIC TESTS (Excluding topic tests): ${fullMockDupes.length}`);
console.log(`====================================================`);
fullMockDupes.forEach((dup, i) => {
    console.log(`\n[Full Mock Dup #${i + 1}] "${dup.text.slice(0, 100)}..."`);
    dup.occurrences.forEach(occ => {
        console.log(`   - In [${occ.test}] Q#${occ.index} (ID: ${occ.id})`);
    });
});

// Let's check topic tests vs full mocks
const topicMockDupes = exactDuplicates.filter(d => {
    const hasTopic = d.occurrences.some(o => o.test.startsWith('topic-'));
    const hasMock = d.occurrences.some(o => !o.test.startsWith('topic-'));
    return hasTopic && hasMock;
});

console.log(`\n====================================================`);
console.log(`DUPLICATES BETWEEN TOPIC TESTS AND MOCK TESTS: ${topicMockDupes.length}`);
console.log(`====================================================`);
topicMockDupes.forEach((dup, i) => {
    console.log(`\n[Topic vs Mock #${i + 1}] "${dup.text.slice(0, 100)}..."`);
    dup.occurrences.forEach(occ => {
        console.log(`   - In [${occ.test}] Q#${occ.index} (ID: ${occ.id})`);
    });
});

const fs = require('fs');
const path = require('path');
const { findTestFiles, loadQuestions } = require('./validate_all_tests');

function normalize(text) {
    if (!text) return '';
    return text.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
}

const testFiles = findTestFiles();
const mockTests = testFiles.filter(t => !t.name.startsWith('topic-'));

// Global question registry: normText -> list of test names
const registry = new Map();

mockTests.forEach(tf => {
    const qs = loadQuestions(tf.path);
    if (!Array.isArray(qs)) return;
    qs.forEach(q => {
        const norm = normalize(q.text || '');
        if (!norm || norm.length < 10) return;
        if (!registry.has(norm)) registry.set(norm, []);
        registry.get(norm).push(tf.name);
    });
});

console.log('--- PER-TEST UNIQUENESS BREAKDOWN (Full Mocks & Diagnostics) ---');
mockTests.forEach(tf => {
    const qs = loadQuestions(tf.path);
    if (!Array.isArray(qs)) return;
    let uniqueToThis = 0;
    let sharedWithOthers = 0;
    qs.forEach(q => {
        const norm = normalize(q.text || '');
        const owners = registry.get(norm) || [];
        if (owners.length === 1) {
            uniqueToThis++;
        } else {
            sharedWithOthers++;
        }
    });
    console.log(`[${tf.name}] Total: ${qs.length} | Unique to this test: ${uniqueToThis} | Shared/Duplicate: ${sharedWithOthers}`);
});

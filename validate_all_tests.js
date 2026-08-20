const fs = require('fs');
const path = require('path');

function loadQuestions(filePath) {
    const code = fs.readFileSync(filePath, 'utf8');
    try {
        const fn = new Function('window', `
            let windowObj = window || {};
            ${code}
            const vars = [
                typeof ACT_QUESTIONS1 !== 'undefined' ? ACT_QUESTIONS1 : null,
                typeof ACT_QUESTIONS !== 'undefined' ? ACT_QUESTIONS : null,
                typeof QUESTIONS !== 'undefined' ? QUESTIONS : null,
                typeof QUESTIONS_DATA !== 'undefined' ? QUESTIONS_DATA : null,
                typeof ACT_DIAGNOSTIC_QUESTIONS !== 'undefined' ? ACT_DIAGNOSTIC_QUESTIONS : null,
                windowObj.ACT_QUESTIONS1,
                windowObj.QUESTIONS
            ];
            return vars.find(v => Array.isArray(v));
        `);
        const qs = fn({});
        if (Array.isArray(qs)) return qs;
    } catch(e) {
        return { error: e.message };
    }
    return { error: 'No questions array found' };
}

function findTestFiles() {
    const files = [];
    if (fs.existsSync('act_questions1.js')) {
        files.push({ name: 'ACT Practice Test 1 (root)', path: 'act_questions1.js' });
    }
    ['act-2', 'act-3'].forEach(f => {
        const p = path.join(f, 'act_questions1.js');
        if (fs.existsSync(p)) files.push({ name: f, path: p });
    });
    for (let i = 1; i <= 12; i++) {
        const p = path.join(`act-diagnostic-${i}`, 'act_questions1.js');
        if (fs.existsSync(p)) files.push({ name: `ACT Diagnostic ${i}`, path: p });
    }
    fs.readdirSync('.').filter(f => f.startsWith('topic-')).forEach(f => {
        const p = path.join(f, 'questions.js');
        if (fs.existsSync(p)) files.push({ name: f, path: p });
    });
    return files;
}

function validateTestFile(testInfo) {
    const result = {
        name: testInfo.name,
        path: testInfo.path,
        totalQuestions: 0,
        errors: [],
        warnings: []
    };

    const qs = loadQuestions(testInfo.path);
    if (!qs || qs.error || !Array.isArray(qs)) {
        result.errors.push(`Failed to load questions: ${qs ? qs.error : 'Unknown error'}`);
        return result;
    }

    result.totalQuestions = qs.length;

    const seenIds = new Set();
    const seenTexts = new Map();

    qs.forEach((q, idx) => {
        const qNum = idx + 1;

        // 1. Check ID
        if (q.id === undefined || q.id === null) {
            result.errors.push(`Question #${qNum} is missing 'id' property`);
        } else {
            if (seenIds.has(q.id)) {
                result.errors.push(`Duplicate question ID ${q.id} at index ${qNum}`);
            }
            seenIds.add(q.id);
        }

        // 2. Check Question Text
        if (!q.text || typeof q.text !== 'string' || q.text.trim().length === 0) {
            result.errors.push(`Question ID ${q.id || qNum} has empty or missing text`);
        } else {
            const cleanText = q.text.replace(/\s+/g, ' ').trim();
            if (seenTexts.has(cleanText)) {
                const prevId = seenTexts.get(cleanText);
                result.errors.push(`Duplicate question text detected: Q${q.id} duplicates Q${prevId} ("${cleanText.slice(0, 50)}...")`);
            } else {
                seenTexts.set(cleanText, q.id);
            }
        }

        // 3. Check Section
        const sec = (q.section || '').toLowerCase();
        if (!['english', 'math', 'reading', 'science'].includes(sec)) {
            result.errors.push(`Question ID ${q.id || qNum} has invalid section: '${q.section}'`);
        }

        // 4. Check Options & Answer Index
        if (!Array.isArray(q.options) || q.options.length < 2) {
            result.errors.push(`Question ID ${q.id || qNum} does not have valid options array`);
        } else {
            if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= q.options.length) {
                result.errors.push(`Question ID ${q.id || qNum} has invalid answer index (${q.answer}) for ${q.options.length} options`);
            }
        }

        // 5. Check Reading Passages
        if (sec === 'reading') {
            if (!q.passage || typeof q.passage !== 'string' || q.passage.trim().length === 0) {
                result.errors.push(`Reading Question ID ${q.id || qNum} is missing required 'passage' text`);
            }
        }
    });

    return result;
}

function runAudit() {
    console.log('====================================================');
    console.log('ACT TEST INTEGRITY & DEDUPLICATION AUDITOR');
    console.log('====================================================\n');

    const testFiles = findTestFiles();
    console.log(`Auditing ${testFiles.length} test suites...\n`);

    let totalErrors = 0;
    let failedTests = 0;

    testFiles.forEach(testInfo => {
        const res = validateTestFile(testInfo);
        if (res.errors.length > 0) {
            failedTests++;
            totalErrors += res.errors.length;
            console.log(`❌ [FAIL] ${res.name} (${res.totalQuestions} questions) - ${res.errors.length} issues:`);
            res.errors.slice(0, 5).forEach(err => console.log(`   - ${err}`));
            if (res.errors.length > 5) {
                console.log(`   ... and ${res.errors.length - 5} more issues.`);
            }
        } else {
            console.log(`✅ [PASS] ${res.name} (${res.totalQuestions} questions verified)`);
        }
    });

    console.log('\n====================================================');
    if (totalErrors === 0) {
        console.log(`🎉 ALL ${testFiles.length} TESTS PASSED VALIDATION! (0 errors)`);
        console.log('====================================================');
        return true;
    } else {
        console.log(`⚠️ VALIDATION FOUND ${totalErrors} ISSUES ACROSS ${failedTests} TESTS.`);
        console.log('====================================================');
        return false;
    }
}

if (require.main === module) {
    const success = runAudit();
    process.exit(success ? 0 : 1);
}

module.exports = { validateTestFile, runAudit, loadQuestions, findTestFiles };

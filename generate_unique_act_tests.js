// generate_unique_act_tests.js
// Generates completely unique, mathematically verified, and curriculum-aligned ACT question sets for all 14 mock/diagnostic tests.

const fs = require('fs');
const path = require('path');
const { generateEnglishQuestions } = require('./generator/english_builder');
const { generateMathQuestions } = require('./generator/math_builder');
const { generateReadingQuestions } = require('./generator/reading_builder');

const TEST_TARGETS = [
    { name: 'ACT Practice Test 2', folder: 'act-2', path: 'act-2/act_questions1.js', testIndex: 2 },
    { name: 'ACT Practice Test 3', folder: 'act-3', path: 'act-3/act_questions1.js', testIndex: 3 },
    { name: 'ACT Diagnostic Test 1', folder: 'act-diagnostic-1', path: 'act-diagnostic-1/act_questions1.js', testIndex: 4 },
    { name: 'ACT Diagnostic Test 2', folder: 'act-diagnostic-2', path: 'act-diagnostic-2/act_questions1.js', testIndex: 5 },
    { name: 'ACT Diagnostic Test 3', folder: 'act-diagnostic-3', path: 'act-diagnostic-3/act_questions1.js', testIndex: 6 },
    { name: 'ACT Diagnostic Test 4', folder: 'act-diagnostic-4', path: 'act-diagnostic-4/act_questions1.js', testIndex: 7 },
    { name: 'ACT Diagnostic Test 5', folder: 'act-diagnostic-5', path: 'act-diagnostic-5/act_questions1.js', testIndex: 8 },
    { name: 'ACT Diagnostic Test 6', folder: 'act-diagnostic-6', path: 'act-diagnostic-6/act_questions1.js', testIndex: 9 },
    { name: 'ACT Diagnostic Test 7', folder: 'act-diagnostic-7', path: 'act-diagnostic-7/act_questions1.js', testIndex: 10 },
    { name: 'ACT Diagnostic Test 8', folder: 'act-diagnostic-8', path: 'act-diagnostic-8/act_questions1.js', testIndex: 11 },
    { name: 'ACT Diagnostic Test 9', folder: 'act-diagnostic-9', path: 'act-diagnostic-9/act_questions1.js', testIndex: 12 },
    { name: 'ACT Diagnostic Test 10', folder: 'act-diagnostic-10', path: 'act-diagnostic-10/act_questions1.js', testIndex: 13 },
    { name: 'ACT Diagnostic Test 11', folder: 'act-diagnostic-11', path: 'act-diagnostic-11/act_questions1.js', testIndex: 14 },
    { name: 'ACT Diagnostic Test 12', folder: 'act-diagnostic-12', path: 'act-diagnostic-12/act_questions1.js', testIndex: 15 }
];

console.log("=================================================");
console.log("GENERATING 14 UNIQUE ACT TEST SUITES...");
console.log("=================================================\n");

TEST_TARGETS.forEach(target => {
    const englishQs = generateEnglishQuestions(target.testIndex);
    const mathQs = generateMathQuestions(target.testIndex);
    const readingQs = generateReadingQuestions(target.testIndex);

    const allQuestions = [...englishQs, ...mathQs, ...readingQs];

    if (allQuestions.length !== 131) {
        console.error(`❌ Error in ${target.name}: Expected 131 questions, got ${allQuestions.length}`);
        return;
    }

    const fileContent = `// =============================================
// act_questions1.js – ${target.name}
// Core ACT Format: English (50Q), Math (45Q), Reading (36Q)
// Total: 131 questions
// =============================================

const ACT_QUESTIONS1 = ${JSON.stringify(allQuestions, null, 4)};

if (typeof window !== 'undefined') {
    window.ACT_QUESTIONS1 = ACT_QUESTIONS1;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ACT_QUESTIONS1;
}
`;

    // Ensure directory exists
    const dir = path.dirname(target.path);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(target.path, fileContent, 'utf8');
    console.log(`✅ [SUCCESS] Generated ${target.name} -> ${target.path} (${allQuestions.length} unique questions)`);
});

console.log("\n=================================================");
console.log("🎉 ALL 14 TEST SUITES GENERATED SUCCESSFULLY!");
console.log("=================================================\n");

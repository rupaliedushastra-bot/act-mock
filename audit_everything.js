// audit_everything.js
// Comprehensive Full-Repository Audit Script for ACT Test Portal

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT_DIR = __dirname;

const TEST_FILES = [
    { name: "ACT Practice Test 1 (root)", path: "act_questions1.js", htmlPath: "act1.html", type: "mock" },
    { name: "act-2", path: "act-2/act_questions1.js", htmlPath: "act-2/act1.html", type: "mock" },
    { name: "act-3", path: "act-3/act_questions1.js", htmlPath: "act-3/act1.html", type: "mock" },
    { name: "ACT Diagnostic 1", path: "act-diagnostic-1/act_questions1.js", htmlPath: "act-diagnostic-1/act1.html", type: "mock" },
    { name: "ACT Diagnostic 2", path: "act-diagnostic-2/act_questions1.js", htmlPath: "act-diagnostic-2/act1.html", type: "mock" },
    { name: "ACT Diagnostic 3", path: "act-diagnostic-3/act_questions1.js", htmlPath: "act-diagnostic-3/act1.html", type: "mock" },
    { name: "ACT Diagnostic 4", path: "act-diagnostic-4/act_questions1.js", htmlPath: "act-diagnostic-4/act1.html", type: "mock" },
    { name: "ACT Diagnostic 5", path: "act-diagnostic-5/act_questions1.js", htmlPath: "act-diagnostic-5/act1.html", type: "mock" },
    { name: "ACT Diagnostic 6", path: "act-diagnostic-6/act_questions1.js", htmlPath: "act-diagnostic-6/act1.html", type: "mock" },
    { name: "ACT Diagnostic 7", path: "act-diagnostic-7/act_questions1.js", htmlPath: "act-diagnostic-7/act1.html", type: "mock" },
    { name: "ACT Diagnostic 8", path: "act-diagnostic-8/act_questions1.js", htmlPath: "act-diagnostic-8/act1.html", type: "mock" },
    { name: "ACT Diagnostic 9", path: "act-diagnostic-9/act_questions1.js", htmlPath: "act-diagnostic-9/act1.html", type: "mock" },
    { name: "ACT Diagnostic 10", path: "act-diagnostic-10/act_questions1.js", htmlPath: "act-diagnostic-10/act1.html", type: "mock" },
    { name: "ACT Diagnostic 11", path: "act-diagnostic-11/act_questions1.js", htmlPath: "act-diagnostic-11/act1.html", type: "mock" },
    { name: "ACT Diagnostic 12", path: "act-diagnostic-12/act_questions1.js", htmlPath: "act-diagnostic-12/act1.html", type: "mock" },
    // Topic tests
    { name: "topic-active_passive_voice", path: "topic-active_passive_voice/questions.js", htmlPath: "topic-active_passive_voice/test.html", type: "topic" },
    { name: "topic-coordinate_geometry", path: "topic-coordinate_geometry/questions.js", htmlPath: "topic-coordinate_geometry/test.html", type: "topic" },
    { name: "topic-elementary_algebra", path: "topic-elementary_algebra/questions.js", htmlPath: "topic-elementary_algebra/test.html", type: "topic" },
    { name: "topic-exponents_radicals", path: "topic-exponents_radicals/questions.js", htmlPath: "topic-exponents_radicals/test.html", type: "topic" },
    { name: "topic-grammar_usage", path: "topic-grammar_usage/questions.js", htmlPath: "topic-grammar_usage/test.html", type: "topic" },
    { name: "topic-humanities", path: "topic-humanities/questions.js", htmlPath: "topic-humanities/test.html", type: "topic" },
    { name: "topic-inference", path: "topic-inference/questions.js", htmlPath: "topic-inference/test.html", type: "topic" },
    { name: "topic-intermediate_algebra", path: "topic-intermediate_algebra/questions.js", htmlPath: "topic-intermediate_algebra/test.html", type: "topic" },
    { name: "topic-literary_narrative", path: "topic-literary_narrative/questions.js", htmlPath: "topic-literary_narrative/test.html", type: "topic" },
    { name: "topic-main_idea", path: "topic-main_idea/questions.js", htmlPath: "topic-main_idea/test.html", type: "topic" },
    { name: "topic-natural_science", path: "topic-natural_science/questions.js", htmlPath: "topic-natural_science/test.html", type: "topic" },
    { name: "topic-percentages", path: "topic-percentages/questions.js", htmlPath: "topic-percentages/test.html", type: "topic" },
    { name: "topic-plane_geometry", path: "topic-plane_geometry/questions.js", htmlPath: "topic-plane_geometry/test.html", type: "topic" },
    { name: "topic-pre_algebra", path: "topic-pre_algebra/questions.js", htmlPath: "topic-pre_algebra/test.html", type: "topic" },
    { name: "topic-punctuation", path: "topic-punctuation/questions.js", htmlPath: "topic-punctuation/test.html", type: "topic" },
    { name: "topic-ratios_proportions", path: "topic-ratios_proportions/questions.js", htmlPath: "topic-ratios_proportions/test.html", type: "topic" },
    { name: "topic-rhetorical_skills", path: "topic-rhetorical_skills/questions.js", htmlPath: "topic-rhetorical_skills/test.html", type: "topic" },
    { name: "topic-sentence_structure", path: "topic-sentence_structure/questions.js", htmlPath: "topic-sentence_structure/test.html", type: "topic" },
    { name: "topic-social_science", path: "topic-social_science/questions.js", htmlPath: "topic-social_science/test.html", type: "topic" },
    { name: "topic-statistics_probability", path: "topic-statistics_probability/questions.js", htmlPath: "topic-statistics_probability/test.html", type: "topic" },
    { name: "topic-style_tone", path: "topic-style_tone/questions.js", htmlPath: "topic-style_tone/test.html", type: "topic" },
    { name: "topic-transitions", path: "topic-transitions/questions.js", htmlPath: "topic-transitions/test.html", type: "topic" },
    { name: "topic-trigonometry", path: "topic-trigonometry/questions.js", htmlPath: "topic-trigonometry/test.html", type: "topic" },
    { name: "topic-wordiness_redundancy", path: "topic-wordiness_redundancy/questions.js", htmlPath: "topic-wordiness_redundancy/test.html", type: "topic" }
];

function normalizeText(str) {
    if (!str) return '';
    return str
        .toLowerCase()
        .replace(/<[^>]+>/g, '') // remove html tags
        .replace(/[^\w\s]/g, '')  // remove punctuation
        .replace(/\s+/g, ' ')     // collapse spaces
        .trim();
}

function loadQuestions(filePath) {
    const raw = fs.readFileSync(filePath, 'utf8');
    const cleaned = raw.replace(/\bconst\s+ACT_QUESTIONS1\b/g, 'var ACT_QUESTIONS1')
                       .replace(/\bconst\s+questions\b/g, 'var questions')
                       .replace(/\blet\s+ACT_QUESTIONS1\b/g, 'var ACT_QUESTIONS1')
                       .replace(/\blet\s+questions\b/g, 'var questions');
    const sandbox = { module: {}, exports: {}, window: {} };
    vm.createContext(sandbox);
    vm.runInContext(cleaned, sandbox);
    return sandbox.ACT_QUESTIONS1 || sandbox.questions || sandbox.module.exports || (sandbox.window && sandbox.window.ACT_QUESTIONS1);
}

function runComprehensiveAudit() {
    console.log("=================================================");
    console.log("🔍 RUNNING DEEP COMPREHENSIVE AUDIT ON 39 TESTS");
    console.log("=================================================\n");

    let totalIssues = 0;
    const globalQuestions = [];
    const normalizedTextMap = new Map();
    const exactTextMap = new Map();

    // 1. Audit each file individually
    for (const test of TEST_FILES) {
        const fullPath = path.join(ROOT_DIR, test.path);
        if (!fs.existsSync(fullPath)) {
            console.error(`❌ [FILE MISSING] ${test.name}: ${test.path}`);
            totalIssues++;
            continue;
        }

        let qs;
        try {
            qs = loadQuestions(fullPath);
        } catch (e) {
            console.error(`❌ [SYNTAX/EXEC ERROR] ${test.name}: ${e.message}`);
            totalIssues++;
            continue;
        }

        if (!Array.isArray(qs)) {
            console.error(`❌ [DATA ERROR] ${test.name}: Could not load question array!`);
            totalIssues++;
            continue;
        }

        const expectedCount = test.type === 'mock' ? 131 : 20;
        if (qs.length !== expectedCount) {
            console.error(`❌ [COUNT ERROR] ${test.name}: Expected ${expectedCount} questions, found ${qs.length}`);
            totalIssues++;
        }

        // Intra-test checks
        const seenIds = new Set();
        const seenLocalTexts = new Set();

        qs.forEach((q, idx) => {
            const qNum = idx + 1;

            // Check ID
            if (q.id !== qNum) {
                console.error(`❌ [ID MISMATCH] ${test.name} Q#${qNum}: id is ${q.id}, expected ${qNum}`);
                totalIssues++;
            }
            if (seenIds.has(q.id)) {
                console.error(`❌ [DUPLICATE ID] ${test.name}: Multiple questions with id ${q.id}`);
                totalIssues++;
            }
            seenIds.add(q.id);

            // Check Section & Distribution for Mock
            if (test.type === 'mock') {
                let expSection = "";
                if (qNum <= 50) expSection = "english";
                else if (qNum <= 95) expSection = "math";
                else expSection = "reading";

                if (q.section !== expSection) {
                    console.error(`❌ [SECTION ERROR] ${test.name} Q#${qNum}: Section is "${q.section}", expected "${expSection}"`);
                    totalIssues++;
                }
            }

            // Check Text
            if (!q.text || typeof q.text !== 'string' || q.text.trim().length === 0) {
                console.error(`❌ [EMPTY TEXT] ${test.name} Q#${qNum}: Question text is missing or empty!`);
                totalIssues++;
            }

            // Check Options
            if (!Array.isArray(q.options) || q.options.length < 2) {
                console.error(`❌ [INVALID OPTIONS] ${test.name} Q#${qNum}: Options must be an array with >= 2 items`);
                totalIssues++;
            } else {
                // Check for duplicate options within the same question (e.g. Option A == Option B)
                const seenOpts = new Set();
                q.options.forEach((opt, oIdx) => {
                    const normOpt = String(opt).trim().toLowerCase();
                    if (seenOpts.has(normOpt)) {
                        console.error(`❌ [DUPLICATE OPTION VALUE] ${test.name} Q#${qNum}: Duplicate option text "${opt}" at option index ${oIdx}`);
                        totalIssues++;
                    }
                    seenOpts.add(normOpt);
                });
            }

            // Check Answer Index
            if (typeof q.answer !== 'number' || !Number.isInteger(q.answer) || q.answer < 0 || (Array.isArray(q.options) && q.answer >= q.options.length)) {
                console.error(`❌ [INVALID ANSWER INDEX] ${test.name} Q#${qNum}: answer=${q.answer}, options length=${q.options ? q.options.length : 0}`);
                totalIssues++;
            }

            // Check Explanation
            if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim().length === 0) {
                console.error(`⚠️ [EMPTY EXPLANATION] ${test.name} Q#${qNum}: Explanation is missing or empty`);
                totalIssues++;
            }

            // Check Reading Passage
            if (q.section === 'reading') {
                if (!q.passage || typeof q.passage !== 'string' || q.passage.trim().length === 0) {
                    console.error(`❌ [MISSING PASSAGE] ${test.name} Q#${qNum}: Reading question requires non-empty passage property`);
                    totalIssues++;
                }
            }

            // Intra-test Duplicate Text
            const normText = normalizeText(q.text);
            if (seenLocalTexts.has(normText)) {
                console.error(`❌ [INTRA-TEST DUPLICATE] ${test.name} Q#${qNum}: Same question text used multiple times within this test! ("${q.text.slice(0, 45)}...")`);
                totalIssues++;
            }
            seenLocalTexts.add(normText);

            // Collect for Global/Cross-Test Audit
            const qObj = {
                testName: test.name,
                testPath: test.path,
                id: q.id,
                qNum: qNum,
                section: q.section,
                text: q.text,
                normText: normText,
                options: q.options,
                answer: q.answer
            };
            globalQuestions.push(qObj);

            // Exact cross check
            if (!exactTextMap.has(q.text.trim())) {
                exactTextMap.set(q.text.trim(), []);
            }
            exactTextMap.get(q.text.trim()).push(qObj);

            // Normalized / Fuzzy cross check
            if (!normalizedTextMap.has(normText)) {
                normalizedTextMap.set(normText, []);
            }
            normalizedTextMap.get(normText).push(qObj);
        });

        // Check HTML file linkage if exists
        if (test.htmlPath) {
            const htmlFullPath = path.join(ROOT_DIR, test.htmlPath);
            if (fs.existsSync(htmlFullPath)) {
                const htmlContent = fs.readFileSync(htmlFullPath, 'utf8');
                const scriptRef = path.basename(test.path);
                if (!htmlContent.includes(scriptRef)) {
                    console.error(`❌ [HTML SCRIPT LINK MISMATCH] ${test.htmlPath} does not reference ${scriptRef}`);
                    totalIssues++;
                }
            }
        }
    }

    console.log("--- CROSS-TEST DEDUPLICATION AUDIT ---");
    let crossExactDuplicates = 0;
    for (const [text, occurrences] of exactTextMap.entries()) {
        if (occurrences.length > 1) {
            crossExactDuplicates++;
            totalIssues++;
            console.error(`❌ [CROSS DUPLICATE EXACT] Found in ${occurrences.length} tests: "${text.slice(0, 60)}..."`);
            occurrences.forEach(occ => console.error(`     -> [${occ.testName}] Q#${occ.qNum} (ID: ${occ.id})`));
        }
    }

    let crossFuzzyDuplicates = 0;
    for (const [normText, occurrences] of normalizedTextMap.entries()) {
        if (occurrences.length > 1) {
            const distinctExact = new Set(occurrences.map(o => o.text.trim()));
            if (distinctExact.size > 1) {
                crossFuzzyDuplicates++;
                totalIssues++;
                console.error(`❌ [CROSS DUPLICATE FUZZY] Near-identical text in ${occurrences.length} tests:`);
                occurrences.forEach(occ => console.error(`     -> [${occ.testName}] Q#${occ.qNum}: "${occ.text.slice(0, 60)}..."`));
            }
        }
    }

    console.log("\n=================================================");
    console.log(`TOTAL QUESTIONS AUDITED : ${globalQuestions.length}`);
    console.log(`CROSS EXACT DUPLICATES  : ${crossExactDuplicates}`);
    console.log(`CROSS FUZZY DUPLICATES  : ${crossFuzzyDuplicates}`);
    console.log(`TOTAL DETECTED ISSUES   : ${totalIssues}`);
    console.log("=================================================");

    if (totalIssues === 0) {
        console.log("🎉 AUDIT COMPLETED WITH ZERO DEFECTS! EVERYTHING IS 100% PERFECT.");
        process.exit(0);
    } else {
        console.error(`⚠️ AUDIT COMPLETED WITH ${totalIssues} ISSUES DETECTED.`);
        process.exit(1);
    }
}

runComprehensiveAudit();

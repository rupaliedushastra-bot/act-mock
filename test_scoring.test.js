const assert = require('assert');
global.window = global.window || {};
const { getACTSectionScore, getACTCompositeScore } = require('./supabase.js');

describe_test('Scoring Pipeline Unit Tests', () => {
    // 1. 0 Wrong Answers (Perfect raw score) should ALWAYS yield Scale 36
    console.log('\n--- 1. Perfect Raw Score (0 Wrong Answers) Assertions ---');
    
    // Math Section with 45 questions (Current Practice/Diagnostic format)
    const math45 = getACTSectionScore('math', 45, 45);
    assert.strictEqual(math45, 36, `Math 45/45 raw score must be scale 36, got ${math45}`);
    console.log('✓ Math 45/45 -> 36/36');

    // Math Section with 60 questions (Standard full-length ACT)
    const math60 = getACTSectionScore('math', 60, 60);
    assert.strictEqual(math60, 36, `Math 60/60 raw score must be scale 36, got ${math60}`);
    console.log('✓ Math 60/60 -> 36/36');

    // Math Section with 36 questions
    const math36 = getACTSectionScore('math', 36, 36);
    assert.strictEqual(math36, 36, `Math 36/36 raw score must be scale 36, got ${math36}`);
    console.log('✓ Math 36/36 -> 36/36');

    // Math Section with 20 questions (Topic Test format)
    const math20 = getACTSectionScore('math', 20, 20);
    assert.strictEqual(math20, 36, `Math 20/20 raw score must be scale 36, got ${math20}`);
    console.log('✓ Math 20/20 -> 36/36');

    // English Section with 50 questions (Diagnostic format)
    const eng50 = getACTSectionScore('english', 50, 50);
    assert.strictEqual(eng50, 36, `English 50/50 raw score must be scale 36, got ${eng50}`);
    console.log('✓ English 50/50 -> 36/36');

    // Reading Section with 36 questions (Diagnostic format)
    const read36 = getACTSectionScore('reading', 36, 36);
    assert.strictEqual(read36, 36, `Reading 36/36 raw score must be scale 36, got ${read36}`);
    console.log('✓ Reading 36/36 -> 36/36');

    // Topic test (20 questions) for all sections
    ['english', 'math', 'reading', 'science'].forEach(sec => {
        const sc20 = getACTSectionScore(sec, 20, 20);
        assert.strictEqual(sc20, 36, `${sec} 20/20 must be scale 36, got ${sc20}`);
        console.log(`✓ ${sec} 20/20 -> 36/36`);
    });

    // 2. Minimum Raw Score (0 correct)
    console.log('\n--- 2. Minimum Raw Score (0 Correct) Assertions ---');
    ['english', 'math', 'reading', 'science'].forEach(sec => {
        const sc0 = getACTSectionScore(sec, 0, 45);
        assert.strictEqual(sc0, 1, `${sec} 0/45 must be scale 1, got ${sc0}`);
        console.log(`✓ ${sec} 0/45 -> 1/36`);
    });

    // 3. Monotonicity Test
    console.log('\n--- 3. Monotonicity Verification Across All Section Lengths ---');
    [
        { sec: 'math', total: 45 },
        { sec: 'math', total: 60 },
        { sec: 'english', total: 50 },
        { sec: 'english', total: 75 },
        { sec: 'reading', total: 36 },
        { sec: 'reading', total: 40 },
        { sec: 'math', total: 20 },
        { sec: 'english', total: 20 },
        { sec: 'reading', total: 20 }
    ].forEach(({ sec, total }) => {
        let prevScore = 1;
        for (let r = 0; r <= total; r++) {
            const score = getACTSectionScore(sec, r, total);
            assert(score >= 1 && score <= 36, `Score ${score} out of bounds for raw ${r}/${total}`);
            assert(score >= prevScore, `Monotonicity violation in ${sec} (${total}Q): raw ${r} gave ${score} < prev ${prevScore}`);
            prevScore = score;
        }
        console.log(`✓ ${sec.toUpperCase()} (${total}Q curve) is strictly non-decreasing from 1 to 36`);
    });

    // 4. Composite Score Calculation
    console.log('\n--- 4. Composite Score Calculations ---');
    const comp36 = getACTCompositeScore({ english: 36, math: 36, reading: 36 });
    assert.strictEqual(comp36, 36, `Perfect composite must be 36, got ${comp36}`);
    console.log('✓ Perfect composite: { eng: 36, math: 36, read: 36 } -> 36');

    const compMixed = getACTCompositeScore({ english: 32, math: 34, reading: 30 });
    assert.strictEqual(compMixed, 32, `Composite (32+34+30)/3 = 32, got ${compMixed}`);
    console.log('✓ Mixed composite: { eng: 32, math: 34, read: 30 } -> 32');

    // 5. Mock Full Test Submission with 0 Wrong on Math
    console.log('\n--- 5. Mock Test Submission Flow Verification ---');
    const mockAnswers = {};
    const mockQuestions = [];
    for (let i = 1; i <= 45; i++) {
        mockQuestions.push({ id: 50 + i, section: 'math', answer: 0 });
        mockAnswers[50 + i] = 0; // all answered correctly (0 wrong)
    }

    let mathRaw = 0;
    mockQuestions.forEach(q => {
        if (mockAnswers[q.id] === q.answer) mathRaw++;
    });
    assert.strictEqual(mathRaw, 45, 'Mock raw count must be 45');
    const computedMathScale = getACTSectionScore('math', mathRaw, mockQuestions.length);
    assert.strictEqual(computedMathScale, 36, `0 wrong answers in mock math test must yield scale 36, got ${computedMathScale}`);
    console.log(`✓ Mock 45-question Math section with 0 wrong answers -> ${computedMathScale}/36!`);

    console.log('\n=========================================');
    console.log('🎉 ALL SCORING UNIT TESTS PASSED!');
    console.log('=========================================');
});

function describe_test(name, fn) {
    console.log(`\n=========================================\n${name}\n=========================================`);
    fn();
}

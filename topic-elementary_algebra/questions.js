// =============================================
// questions.js – Topic: elementary_algebra
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for x: 3x + 7 = 22",
        "options": [
            "x = 3",
            "x = 5",
            "x = 7",
            "x = 9"
        ],
        "answer": 1,
        "explanation": "Subtract 7 from both sides: 3x = 22 – 7 => 3x = 15. Divide by 3: x = 15 / 3 => x = 5."
    },
    {
        "id": 2,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for y: 4(y – 3) = 2y + 6",
        "options": [
            "y = 6",
            "y = 9",
            "y = 3",
            "y = 12"
        ],
        "answer": 1,
        "explanation": "Distribute the 4: 4y – 12 = 2y + 6. Subtract 2y from both sides: 2y – 12 = 6. Add 12 to both sides: 2y = 18. Divide by 2: y = 9."
    },
    {
        "id": 3,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "If 2x – 5 = 11, what is the value of 4x + 1?",
        "options": [
            "31",
            "33",
            "16",
            "25"
        ],
        "answer": 1,
        "explanation": "Solve 2x – 5 = 11 => 2x = 16 => x = 8. Substitute x = 8 into 4x + 1: 4(8) + 1 = 32 + 1 = 33."
    },
    {
        "id": 4,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Factor completely: x² – 9",
        "options": [
            "(x – 3)²",
            "(x + 3)(x – 3)",
            "(x + 9)(x – 1)",
            "(x – 9)(x + 1)"
        ],
        "answer": 1,
        "explanation": "The expression x² – 9 is a difference of two squares, a² – b² = (a + b)(a – b). Here a = x and b = 3, so x² – 9 = (x + 3)(x – 3)."
    },
    {
        "id": 5,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for x: 2(x + 4) – 3(x – 1) = 15",
        "options": [
            "x = –4",
            "x = 4",
            "x = –2",
            "x = 2"
        ],
        "answer": 0,
        "explanation": "Expand both terms: 2x + 8 – 3x + 3 = 15. Combine like terms: –x + 11 = 15. Subtract 11: –x = 4 => x = –4."
    },
    {
        "id": 6,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "If 3a + 2b = 18 and b = 3, what is the value of a?",
        "options": [
            "2",
            "4",
            "3",
            "6"
        ],
        "answer": 1,
        "explanation": "Substitute b = 3 into the equation: 3a + 2(3) = 18 => 3a + 6 = 18 => 3a = 12 => a = 4."
    },
    {
        "id": 7,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve the inequality: 3x – 5 > 7",
        "options": [
            "x > 4",
            "x < 4",
            "x > 2",
            "x < 2"
        ],
        "answer": 0,
        "explanation": "Add 5 to both sides: 3x > 12. Divide both sides by 3 (positive, so inequality direction is preserved): x > 4."
    },
    {
        "id": 8,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve the inequality: –2x + 4 ≤ 10",
        "options": [
            "x ≤ –3",
            "x ≥ –3",
            "x ≥ 3",
            "x ≤ 3"
        ],
        "answer": 1,
        "explanation": "Subtract 4 from both sides: –2x ≤ 6. Divide both sides by –2 and reverse the inequality sign: x ≥ –3."
    },
    {
        "id": 9,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "What are the solutions to x² – 5x + 6 = 0?",
        "options": [
            "x = 2 and x = 3",
            "x = –2 and x = –3",
            "x = 1 and x = 6",
            "x = –1 and x = –6"
        ],
        "answer": 0,
        "explanation": "Factor the quadratic: (x – 2)(x – 3) = 0. Set each factor to zero: x – 2 = 0 => x = 2, and x – 3 = 0 => x = 3."
    },
    {
        "id": 10,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Evaluate 3x² – 2x + 5 when x = –2.",
        "options": [
            "13",
            "21",
            "17",
            "9"
        ],
        "answer": 1,
        "explanation": "Substitute x = –2: 3(–2)² – 2(–2) + 5 = 3(4) + 4 + 5 = 12 + 4 + 5 = 21."
    },
    {
        "id": 11,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Simplify the expression: (3x²y)(–4xy³)",
        "options": [
            "–12x³y⁴",
            "–12x²y³",
            "12x³y⁴",
            "–7x³y⁴"
        ],
        "answer": 0,
        "explanation": "Multiply coefficients and add exponents of like bases: (3 · –4)(x² · x)(y · y³) = –12 · x²⁺¹ · y¹⁺³ = –12x³y⁴."
    },
    {
        "id": 12,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for p: p/4 + 3 = 8",
        "options": [
            "16",
            "20",
            "24",
            "12"
        ],
        "answer": 1,
        "explanation": "Subtract 3 from both sides: p/4 = 5. Multiply both sides by 4: p = 20."
    },
    {
        "id": 13,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Which of the following is equivalent to 2(3x – 4) + 5(x + 2)?",
        "options": [
            "11x + 2",
            "11x – 2",
            "6x + 2",
            "11x + 18"
        ],
        "answer": 0,
        "explanation": "Distribute: 2(3x – 4) + 5(x + 2) = 6x – 8 + 5x + 10 = (6x + 5x) + (–8 + 10) = 11x + 2."
    },
    {
        "id": 14,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "If 5x – 3 = 2x + 9, what is the value of x?",
        "options": [
            "2",
            "4",
            "3",
            "6"
        ],
        "answer": 1,
        "explanation": "Subtract 2x from both sides: 3x – 3 = 9. Add 3 to both sides: 3x = 12. Divide by 3: x = 4."
    },
    {
        "id": 15,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "What is the solution set for |x – 3| = 7?",
        "options": [
            "{10, –4}",
            "{4, –10}",
            "{10, 4}",
            "{–10, –4}"
        ],
        "answer": 0,
        "explanation": "Split the absolute value equation into two cases: Case 1: x – 3 = 7 => x = 10. Case 2: x – 3 = –7 => x = –4. The solution set is {10, –4}."
    },
    {
        "id": 16,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for w: (2w – 6) / 3 = 4",
        "options": [
            "w = 9",
            "w = 6",
            "w = 12",
            "w = 5"
        ],
        "answer": 0,
        "explanation": "Multiply both sides by 3: 2w – 6 = 12. Add 6: 2w = 18. Divide by 2: w = 9."
    },
    {
        "id": 17,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Factor: 2x² + 7x + 3",
        "options": [
            "(2x + 1)(x + 3)",
            "(2x + 3)(x + 1)",
            "(2x – 1)(x – 3)",
            "(x + 7)(2x + 3)"
        ],
        "answer": 0,
        "explanation": "Find factors of a·c = 2·3 = 6 that add to b = 7: 6 and 1. Rewrite: 2x² + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)."
    },
    {
        "id": 18,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "If x/3 + x/6 = 6, what is x?",
        "options": [
            "8",
            "10",
            "12",
            "14"
        ],
        "answer": 2,
        "explanation": "Multiply the entire equation by the common denominator 6: 6(x/3) + 6(x/6) = 6(6) => 2x + x = 36 => 3x = 36 => x = 12."
    },
    {
        "id": 19,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "If 4 – 2x > 10, which of the following describes all possible values of x?",
        "options": [
            "x > –3",
            "x < –3",
            "x < 3",
            "x > 3"
        ],
        "answer": 1,
        "explanation": "Subtract 4 from both sides: –2x > 6. Divide by –2 and flip the inequality sign: x < –3."
    },
    {
        "id": 20,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for t: 5(t – 2) – 2(t + 1) = 9",
        "options": [
            "t = 7",
            "t = 5",
            "t = 6",
            "t = 8"
        ],
        "answer": 0,
        "explanation": "Distribute: 5t – 10 – 2t – 2 = 9 => 3t – 12 = 9 => 3t = 21 => t = 7."
    }
];

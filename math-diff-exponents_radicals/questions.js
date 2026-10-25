// =============================================
// questions.js – Topic: math-diff-exponents_radicals
// ACT Math – Exponents & Radicals (Difficult Level)
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: x^3 · x^3.",
        "options": [
            "x^6",
            "x^9",
            "x^0",
            "2x^6"
        ],
        "answer": 0,
        "explanation": "The correct answer is Option (A): x^6.",
        "diagram": null
    },
    {
        "id": 2,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: (y^6)^5.",
        "options": [
            "30y",
            "y^1",
            "y^11",
            "y^30"
        ],
        "answer": 3,
        "explanation": "The correct answer is Option (D): y^30.",
        "diagram": null
    },
    {
        "id": 3,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "For x ≠ 0, rewrite x^−3 / x^−5 using positive exponents.",
        "options": [
            "1/x²",
            "x⁸",
            "x²",
            "1/x⁸"
        ],
        "answer": 2,
        "explanation": "The correct answer is Option (C): x².",
        "diagram": null
    },
    {
        "id": 4,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: √(625).",
        "options": [
            "10",
            "25√2",
            "25",
            "50"
        ],
        "answer": 2,
        "explanation": "The correct answer is Option (C): 25.",
        "diagram": null
    },
    {
        "id": 5,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: (27x^9)^(1/3).",
        "options": [
            "9x^3",
            "27x^3",
            "3x^9",
            "3x^3"
        ],
        "answer": 3,
        "explanation": "The correct answer is Option (D): 3x^3.",
        "diagram": null
    },
    {
        "id": 6,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "If 2^x = 32, what is x?",
        "options": [
            "4",
            "16",
            "6",
            "5"
        ],
        "answer": 3,
        "explanation": "The correct answer is Option (D): 5.",
        "diagram": null
    },
    {
        "id": 7,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: √(4x²), assuming x < 0.",
        "options": [
            "2x",
            "−2x",
            "4x",
            "−4x"
        ],
        "answer": 1,
        "explanation": "The correct answer is Option (B): −2x.",
        "diagram": null
    },
    {
        "id": 8,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Evaluate: 16^(3/4).",
        "options": [
            "8",
            "64",
            "4",
            "12"
        ],
        "answer": 0,
        "explanation": "The correct answer is Option (A): 8.",
        "diagram": null
    },
    {
        "id": 9,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: (x^5y^4)²/(x^4y).",
        "options": [
            "x^4y^7",
            "x^7y^4",
            "x^6y^7",
            "x^9y^3"
        ],
        "answer": 2,
        "explanation": "The correct answer is Option (C): x^6y^7.",
        "diagram": null
    },
    {
        "id": 10,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "If 9^x = 27, what is x?",
        "options": [
            "3",
            "1/2",
            "3/2",
            "2/3"
        ],
        "answer": 2,
        "explanation": "The correct answer is Option (C): 3/2.",
        "diagram": null
    },
    {
        "id": 11,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: x^3 · x^4.",
        "options": [
            "x^1",
            "x^12",
            "2x^7",
            "x^7"
        ],
        "answer": 3,
        "explanation": "The correct answer is Option (D): x^7.",
        "diagram": null
    },
    {
        "id": 12,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: (y^3)^3.",
        "options": [
            "9y",
            "y^6",
            "y^9",
            "y^0"
        ],
        "answer": 2,
        "explanation": "The correct answer is Option (C): y^9.",
        "diagram": null
    },
    {
        "id": 13,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Rewrite with positive exponents: x^−3/x^−2.",
        "options": [
            "1/x",
            "1/x⁵",
            "x⁵",
            "x"
        ],
        "answer": 0,
        "explanation": "The correct answer is Option (A): 1/x.",
        "diagram": null
    },
    {
        "id": 14,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: √(36).",
        "options": [
            "5",
            "12",
            "6√2",
            "6"
        ],
        "answer": 3,
        "explanation": "The correct answer is Option (D): 6.",
        "diagram": null
    },
    {
        "id": 15,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: (27x^18)^(1/3).",
        "options": [
            "9x^6",
            "3x^6",
            "3x^18",
            "27x^6"
        ],
        "answer": 1,
        "explanation": "The correct answer is Option (B): 3x^6.",
        "diagram": null
    },
    {
        "id": 16,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "If 2^(3x − 1) = 32^(x − 3), what is the value of x?",
        "options": [
            "8",
            "5",
            "−7",
            "7"
        ],
        "answer": 3,
        "explanation": "The correct answer is Option (D): 7.",
        "diagram": null
    },
    {
        "id": 17,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: √(25x²), assuming x < 0.",
        "options": [
            "5x",
            "−5x",
            "25x",
            "−25x"
        ],
        "answer": 1,
        "explanation": "The correct answer is Option (B): −5x.",
        "diagram": null
    },
    {
        "id": 18,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "What is the value of (8^(2/3) · 27^(−1/3)) / 4^(−1/2)?",
        "options": [
            "6",
            "8/3",
            "4/3",
            "2/3"
        ],
        "answer": 1,
        "explanation": "The correct answer is Option (B): 8/3.",
        "diagram": null
    },
    {
        "id": 19,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: (x^3y^3)²/(x^2y).",
        "options": [
            "x^5y^3",
            "x^5y^2",
            "x^4y^5",
            "x^2y^5"
        ],
        "answer": 2,
        "explanation": "The correct answer is Option (C): x^4y^5.",
        "diagram": null
    },
    {
        "id": 20,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "For x > 0, the expression (x^(1/2) · x^(1/3)) / x^(1/6) equals x^k. What is k?",
        "options": [
            "5/6",
            "1",
            "1/3",
            "2/3"
        ],
        "answer": 3,
        "explanation": "The correct answer is Option (D): 2/3.",
        "diagram": null
    }
];

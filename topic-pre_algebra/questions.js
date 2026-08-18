// =============================================
// questions.js – Topic: pre_algebra
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "What is the greatest common factor (GCF) of 24 and 36?",
        "options": [
            "12",
            "6",
            "8",
            "72"
        ],
        "answer": 0,
        "explanation": "Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. The greatest common factor is 12."
    },
    {
        "id": 2,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "What is the least common multiple (LCM) of 6 and 8?",
        "options": [
            "24",
            "48",
            "12",
            "16"
        ],
        "answer": 0,
        "explanation": "Multiples of 6: 6, 12, 18, 24, 30... Multiples of 8: 8, 16, 24, 32... The smallest shared multiple is 24."
    },
    {
        "id": 3,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Evaluate the expression: 4 + 6 · (3 – 1)²",
        "options": [
            "28",
            "40",
            "100",
            "16"
        ],
        "answer": 0,
        "explanation": "Follow order of operations (PEMDAS): Parentheses: (3 – 1) = 2. Exponent: 2² = 4. Multiplication: 6 · 4 = 24. Addition: 4 + 24 = 28."
    },
    {
        "id": 4,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "What is the value of –8 – (–15) + (–3)?",
        "options": [
            "4",
            "–10",
            "–26",
            "10"
        ],
        "answer": 0,
        "explanation": "Subtracting a negative is adding: –8 + 15 = 7. Then add –3: 7 + (–3) = 4."
    },
    {
        "id": 5,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Simplify the fraction: 42 / 56",
        "options": [
            "3/4",
            "6/7",
            "7/8",
            "2/3"
        ],
        "answer": 0,
        "explanation": "Divide numerator and denominator by their greatest common divisor 14: 42 ÷ 14 = 3, 56 ÷ 14 = 4. So 42/56 = 3/4."
    },
    {
        "id": 6,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Add the fractions: 2/3 + 3/4",
        "options": [
            "17/12",
            "5/7",
            "1",
            "11/12"
        ],
        "answer": 0,
        "explanation": "Find common denominator 12: (2 · 4) / 12 + (3 · 3) / 12 = 8/12 + 9/12 = 17/12."
    },
    {
        "id": 7,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Multiply the fractions: (5/8) · (4/15)",
        "options": [
            "1/6",
            "1/4",
            "2/3",
            "9/23"
        ],
        "answer": 0,
        "explanation": "Multiply and cancel common factors: (5 · 4) / (8 · 15) = 20 / 120 = 1/6."
    },
    {
        "id": 8,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Divide: (3/5) ÷ (9/10)",
        "options": [
            "2/3",
            "3/2",
            "27/50",
            "1/2"
        ],
        "answer": 0,
        "explanation": "Multiply by the reciprocal of the divisor: (3/5) · (10/9) = (3 · 10) / (5 · 9) = 30 / 45 = 2/3."
    },
    {
        "id": 9,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Convert the mixed number 3 4/5 into an improper fraction.",
        "options": [
            "19/5",
            "12/5",
            "17/5",
            "15/4"
        ],
        "answer": 0,
        "explanation": "Multiply whole number by denominator and add numerator: (3 · 5 + 4) / 5 = (15 + 4) / 5 = 19/5."
    },
    {
        "id": 10,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "What is the absolute value of –17.5?",
        "options": [
            "17.5",
            "–17.5",
            "0",
            "1/17.5"
        ],
        "answer": 0,
        "explanation": "The absolute value of a number represents its distance from zero on the number line, which is always non-negative: |–17.5| = 17.5."
    },
    {
        "id": 11,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Which of the following is a prime number?",
        "options": [
            "29",
            "27",
            "21",
            "33"
        ],
        "answer": 0,
        "explanation": "A prime number has only two distinct positive divisors (1 and itself). 29 is prime, whereas 27 (3·9), 21 (3·7), and 33 (3·11) are composite."
    },
    {
        "id": 12,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "What is the prime factorization of 60?",
        "options": [
            "2² · 3 · 5",
            "2 · 3 · 10",
            "4 · 15",
            "2³ · 5"
        ],
        "answer": 0,
        "explanation": "60 = 2 · 30 = 2 · 2 · 15 = 2 · 2 · 3 · 5 = 2² · 3 · 5."
    },
    {
        "id": 13,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Evaluate: 18 – 3 · 2 + 8 ÷ 4",
        "options": [
            "14",
            "32",
            "8",
            "16"
        ],
        "answer": 0,
        "explanation": "Follow PEMDAS: Multiplication and division first from left to right: 3 · 2 = 6, and 8 ÷ 4 = 2. Then addition and subtraction: 18 – 6 + 2 = 12 + 2 = 14."
    },
    {
        "id": 14,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "What is 0.375 expressed as a simplified fraction?",
        "options": [
            "3/8",
            "3/4",
            "3/5",
            "7/16"
        ],
        "answer": 0,
        "explanation": "0.375 = 375 / 1000. Dividing numerator and denominator by 125 gives 3 / 8."
    },
    {
        "id": 15,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Round 4.6784 to the nearest hundredth.",
        "options": [
            "4.68",
            "4.67",
            "4.70",
            "4.678"
        ],
        "answer": 0,
        "explanation": "The hundredths digit is 7. The following thousandths digit is 8 (≥ 5), so round up the 7 to 8: 4.68."
    },
    {
        "id": 16,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "If a temperature was –5°F at dawn and rose by 18°F by afternoon, what was the afternoon temperature?",
        "options": [
            "13°F",
            "23°F",
            "–13°F",
            "15°F"
        ],
        "answer": 0,
        "explanation": "The initial dawn temperature was –5°F. Since it rose by 18°F by the afternoon, add the increase: –5°F + 18°F = 13°F."
    },
    {
        "id": 17,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Which property is illustrated by the equation: a + b = b + a?",
        "options": [
            "Commutative Property of Addition",
            "Associative Property of Addition",
            "Distributive Property",
            "Identity Property of Addition"
        ],
        "answer": 0,
        "explanation": "The commutative property states that changing the order of the terms does not change the sum: a + b = b + a."
    },
    {
        "id": 18,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Which property is illustrated by: a · (b + c) = a · b + a · c?",
        "options": [
            "Distributive Property",
            "Commutative Property",
            "Associative Property",
            "Inverse Property"
        ],
        "answer": 0,
        "explanation": "The distributive property distributes multiplication over addition: a(b + c) = ab + ac."
    },
    {
        "id": 19,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "What is the square root of 225?",
        "options": [
            "15",
            "25",
            "13",
            "17"
        ],
        "answer": 0,
        "explanation": "The square root of a number x is the value that, when multiplied by itself, equals x. Since 15 · 15 = 225, the principal square root is √225 = 15."
    },
    {
        "id": 20,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Evaluate: |–12| – |–4| + |7|",
        "options": [
            "15",
            "23",
            "1",
            "–9"
        ],
        "answer": 0,
        "explanation": "|–12| = 12, |–4| = 4, |7| = 7. So 12 – 4 + 7 = 8 + 7 = 15."
    }
];

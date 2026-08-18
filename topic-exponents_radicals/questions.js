// =============================================
// questions.js – Topic: exponents_radicals
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: (x³)(x⁴)",
        "options": [
            "x⁷",
            "x¹²",
            "x¹",
            "2x⁷"
        ],
        "answer": 0,
        "explanation": "When multiplying terms with the same base, add the exponents: xᵃ · xᵇ = xᵃ⁺ᵇ. Here, x³ · x⁴ = x³⁺⁴ = x⁷."
    },
    {
        "id": 2,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: (2x³)²",
        "options": [
            "2x⁶",
            "4x⁶",
            "4x⁵",
            "2x⁵"
        ],
        "answer": 1,
        "explanation": "Apply the power of a product rule: (ab)ⁿ = aⁿbⁿ and (xᵃ)ᵇ = xᵃᵇ. Here, (2x³)² = 2² · (x³)² = 4x⁶."
    },
    {
        "id": 3,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "What is the value of 16^(3/4)?",
        "options": [
            "4",
            "8",
            "12",
            "6"
        ],
        "answer": 1,
        "explanation": "By definition of rational exponents, a^(m/n) = (ⁿ√a)ᵐ. 16^(3/4) = (⁴√16)³ = 2³ = 8."
    },
    {
        "id": 4,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: √72",
        "options": [
            "6√2",
            "2√6",
            "3√8",
            "8√3"
        ],
        "answer": 0,
        "explanation": "Factor 72 to find the largest perfect square factor: 72 = 36 · 2. Thus, √72 = √(36 · 2) = √36 · √2 = 6√2."
    },
    {
        "id": 5,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: (x⁸ / x³)",
        "options": [
            "x⁵",
            "x¹¹",
            "x²⁴",
            "x^(8/3)"
        ],
        "answer": 0,
        "explanation": "When dividing terms with the same base, subtract the exponents: xᵃ / xᵇ = xᵃ⁻ᵇ. Here, x⁸ / x³ = x⁸⁻³ = x⁵."
    },
    {
        "id": 6,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "What is the value of 5⁻²?",
        "options": [
            "–25",
            "–10",
            "1/25",
            "1/10"
        ],
        "answer": 2,
        "explanation": "A negative exponent indicates the reciprocal of the base raised to the positive power: a⁻ⁿ = 1 / aⁿ. Thus, 5⁻² = 1 / 5² = 1 / 25."
    },
    {
        "id": 7,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: √18 + √50",
        "options": [
            "8√2",
            "√68",
            "15√2",
            "2√34"
        ],
        "answer": 0,
        "explanation": "Simplify each radical: √18 = √(9 · 2) = 3√2, and √50 = √(25 · 2) = 5√2. Adding them gives 3√2 + 5√2 = 8√2."
    },
    {
        "id": 8,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: (3a²b³)³",
        "options": [
            "9a⁵b⁶",
            "27a⁶b⁹",
            "27a⁵b⁶",
            "9a⁶b⁹"
        ],
        "answer": 1,
        "explanation": "Apply the power to each factor: (3)³ · (a²)³ · (b³)³ = 27 · a⁶ · b⁹ = 27a⁶b⁹."
    },
    {
        "id": 9,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "What is the value of (27/8)^(-2/3)?",
        "options": [
            "4/9",
            "9/4",
            "–9/4",
            "–4/9"
        ],
        "answer": 0,
        "explanation": "Take the negative power as the reciprocal raised to positive power: (27/8)^(-2/3) = (8/27)^(2/3) = (³√(8/27))² = (2/3)² = 4/9."
    },
    {
        "id": 10,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Solve for x: 2^(x+1) = 32",
        "options": [
            "3",
            "4",
            "5",
            "6"
        ],
        "answer": 1,
        "explanation": "Express 32 as a power of 2: 32 = 2⁵. Set exponents equal: x + 1 = 5 => x = 4."
    },
    {
        "id": 11,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: √(48x⁴)",
        "options": [
            "4x²√3",
            "3x²√4",
            "4x√3",
            "16x²√3"
        ],
        "answer": 0,
        "explanation": "Factor 48x⁴: √(16 · 3 · (x²)²) = √16 · √(x⁴) · √3 = 4x²√3."
    },
    {
        "id": 12,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "What is the value of 8^(2/3) + 9^(1/2)?",
        "options": [
            "7",
            "5",
            "9",
            "11"
        ],
        "answer": 0,
        "explanation": "8^(2/3) = (³√8)² = 2² = 4. 9^(1/2) = √9 = 3. 4 + 3 = 7."
    },
    {
        "id": 13,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: (x⁻³y⁴) / (x²y⁻¹)",
        "options": [
            "y⁵ / x⁵",
            "x⁵ / y⁵",
            "y³ / x",
            "x⁻¹y³"
        ],
        "answer": 0,
        "explanation": "Subtract exponents of like bases: x⁻³⁻² · y⁴⁻(⁻¹) = x⁻⁵ · y⁵ = y⁵ / x⁵."
    },
    {
        "id": 14,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: (√5)(√15)",
        "options": [
            "5√3",
            "3√5",
            "√75",
            "15√5"
        ],
        "answer": 0,
        "explanation": "Multiply under the radical: √(5 · 15) = √75 = √(25 · 3) = 5√3."
    },
    {
        "id": 15,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "If 3^(2x) = 81, what is x?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 1,
        "explanation": "81 = 3⁴. Therefore, 3^(2x) = 3⁴ => 2x = 4 => x = 2."
    },
    {
        "id": 16,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: 1 / √3 by rationalizing the denominator.",
        "options": [
            "√3 / 3",
            "3 / √3",
            "1/3",
            "√3"
        ],
        "answer": 0,
        "explanation": "Multiply numerator and denominator by √3: (1 · √3) / (√3 · √3) = √3 / 3."
    },
    {
        "id": 17,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "What is the value of (–2)⁴ – (–2)³?",
        "options": [
            "24",
            "8",
            "16",
            "–8"
        ],
        "answer": 0,
        "explanation": "(–2)⁴ = 16 (even power is positive). (–2)³ = –8 (odd power is negative). 16 – (–8) = 16 + 8 = 24."
    },
    {
        "id": 18,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: (x^(1/2))(x^(3/2))",
        "options": [
            "x²",
            "x^(3/4)",
            "x^(4/2)",
            "x"
        ],
        "answer": 0,
        "explanation": "Add exponents: x^(1/2 + 3/2) = x^(4/2) = x²."
    },
    {
        "id": 19,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "What is the value of 64^(–1/3)?",
        "options": [
            "1/4",
            "–4",
            "4",
            "–1/4"
        ],
        "answer": 0,
        "explanation": "64^(–1/3) = 1 / (64^(1/3)) = 1 / (³√64) = 1 / 4."
    },
    {
        "id": 20,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify: √128 / √2",
        "options": [
            "8",
            "16",
            "4√2",
            "64"
        ],
        "answer": 0,
        "explanation": "Combine under a single radical: √(128 / 2) = √64 = 8."
    }
];

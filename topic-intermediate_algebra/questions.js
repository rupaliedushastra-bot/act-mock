// =============================================
// questions.js – Topic: intermediate_algebra
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What are the solutions to the quadratic equation 2x² – 7x + 3 = 0?",
        "options": [
            "x = 1/2 and x = 3",
            "x = –1/2 and x = –3",
            "x = 2 and x = 3",
            "x = 1 and x = 6"
        ],
        "answer": 0,
        "explanation": "Factor 2x² – 7x + 3 = (2x – 1)(x – 3) = 0. Setting each factor to zero: 2x – 1 = 0 => x = 1/2; x – 3 = 0 => x = 3. Solutions are x = 1/2 and x = 3."
    },
    {
        "id": 2,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "If f(x) = 3x² – 4x + 2, what is f(–2)?",
        "options": [
            "22",
            "18",
            "–6",
            "14"
        ],
        "answer": 0,
        "explanation": "Evaluate f(–2) = 3(–2)² – 4(–2) + 2 = 3(4) + 8 + 2 = 12 + 8 + 2 = 22."
    },
    {
        "id": 3,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Solve the system of equations:\n2x + y = 7\nx – y = 2",
        "options": [
            "x = 3, y = 1",
            "x = 2, y = 3",
            "x = 4, y = –1",
            "x = 1, y = 5"
        ],
        "answer": 0,
        "explanation": "Add the two equations together: (2x + y) + (x – y) = 7 + 2 => 3x = 9 => x = 3. Substitute x = 3 into x – y = 2: 3 – y = 2 => y = 1."
    },
    {
        "id": 4,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What is the discriminant of the quadratic equation 3x² – 4x + 2 = 0, and what does it indicate about the roots?",
        "options": [
            "–8; two distinct real roots",
            "–8; two complex (non-real) roots",
            "40; two real roots",
            "0; one real root"
        ],
        "answer": 1,
        "explanation": "Discriminant Δ = b² – 4ac = (–4)² – 4(3)(2) = 16 – 24 = –8. Because Δ < 0, the equation has two complex conjugate (non-real) roots."
    },
    {
        "id": 5,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "If f(x) = x + 3 and g(x) = 2x – 1, what is (f ∘ g)(4)?",
        "options": [
            "10",
            "13",
            "14",
            "7"
        ],
        "answer": 0,
        "explanation": "First compute g(4) = 2(4) – 1 = 7. Then evaluate f(g(4)) = f(7) = 7 + 3 = 10."
    },
    {
        "id": 6,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What is the inverse function f⁻¹(x) if f(x) = 3x – 6?",
        "options": [
            "f⁻¹(x) = (x + 6) / 3",
            "f⁻¹(x) = (x – 6) / 3",
            "f⁻¹(x) = 3x + 6",
            "f⁻¹(x) = x/3 – 6"
        ],
        "answer": 0,
        "explanation": "Set y = 3x – 6. Swap x and y: x = 3y – 6. Solve for y: 3y = x + 6 => y = (x + 6) / 3. So f⁻¹(x) = (x + 6)/3."
    },
    {
        "id": 7,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Solve for x: log₂(x) + log₂(x – 2) = 3",
        "options": [
            "x = 4",
            "x = –2",
            "x = 4 and x = –2",
            "x = 8"
        ],
        "answer": 0,
        "explanation": "Use log addition property: log₂[x(x – 2)] = 3 => x(x – 2) = 2³ = 8 => x² – 2x – 8 = 0 => (x – 4)(x + 2) = 0. Since the argument of a logarithm must be positive, x > 2, so x = 4 (x = –2 is extraneous)."
    },
    {
        "id": 8,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What is the vertex of the parabola y = 2(x – 3)² + 5?",
        "options": [
            "(3, 5)",
            "(–3, 5)",
            "(3, –5)",
            "(–3, –5)"
        ],
        "answer": 0,
        "explanation": "In vertex form y = a(x – h)² + k, the vertex is (h, k). Here h = 3 and k = 5, so the vertex is (3, 5)."
    },
    {
        "id": 9,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Simplify: (2 + 3i)(1 – 2i) where i = √–1.",
        "options": [
            "8 – i",
            "–4 – i",
            "8 + i",
            "2 – 6i"
        ],
        "answer": 0,
        "explanation": "FOIL the complex numbers: 2(1) + 2(–2i) + 3i(1) + 3i(–2i) = 2 – 4i + 3i – 6i². Since i² = –1: 2 – i – 6(–1) = 2 – i + 6 = 8 – i."
    },
    {
        "id": 10,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What is the domain of the function f(x) = √(2x – 8)?",
        "options": [
            "x ≥ 4",
            "x > 4",
            "x ≤ 4",
            "All real numbers"
        ],
        "answer": 0,
        "explanation": "The expression under a square root must be non-negative: 2x – 8 ≥ 0 => 2x ≥ 8 => x ≥ 4."
    },
    {
        "id": 11,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Solve for x: 3^(x+2) = 81",
        "options": [
            "x = 2",
            "x = 4",
            "x = 1",
            "x = 3"
        ],
        "answer": 0,
        "explanation": "Express 81 as a power of 3: 81 = 3⁴. Thus, 3^(x+2) = 3⁴ => x + 2 = 4 => x = 2."
    },
    {
        "id": 12,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What is the sum of the roots of the equation 3x² – 12x + 5 = 0?",
        "options": [
            "4",
            "–4",
            "5/3",
            "–5/3"
        ],
        "answer": 0,
        "explanation": "By Vieta's formulas, the sum of the roots of ax² + bx + c = 0 is –b / a. Here, –(–12) / 3 = 12 / 3 = 4."
    },
    {
        "id": 13,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What is the product of the roots of 2x² + 5x – 14 = 0?",
        "options": [
            "–7",
            "7",
            "–5/2",
            "5/2"
        ],
        "answer": 0,
        "explanation": "By Vieta's formulas, the product of the roots is c / a = –14 / 2 = –7."
    },
    {
        "id": 14,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Solve the rational equation: 2 / x + 1 / (2x) = 5/4",
        "options": [
            "x = 2",
            "x = 4",
            "x = 1/2",
            "x = 5/2"
        ],
        "answer": 0,
        "explanation": "Combine terms on the left: 4/(2x) + 1/(2x) = 5/(2x). Set 5/(2x) = 5/4 => 2x = 4 => x = 2."
    },
    {
        "id": 15,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What is the vertical asymptote of f(x) = (2x + 1) / (x – 4)?",
        "options": [
            "x = 4",
            "x = –4",
            "y = 2",
            "x = –1/2"
        ],
        "answer": 0,
        "explanation": "A vertical asymptote occurs where the denominator equals zero (and the numerator is non-zero): x – 4 = 0 => x = 4."
    },
    {
        "id": 16,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What is the horizontal asymptote of f(x) = (3x² + 2) / (x² – 5)?",
        "options": [
            "y = 3",
            "y = 0",
            "y = –2/5",
            "No horizontal asymptote"
        ],
        "answer": 0,
        "explanation": "Since the degrees of the numerator and denominator are equal (both degree 2), the horizontal asymptote is the ratio of leading coefficients: y = 3 / 1 = 3."
    },
    {
        "id": 17,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "If |2x – 5| < 9, what is the solution set for x?",
        "options": [
            "–2 < x < 7",
            "x < 7",
            "x > –2",
            "x < –2 or x > 7"
        ],
        "answer": 0,
        "explanation": "Unfold the inequality: –9 < 2x – 5 < 9. Add 5 to all parts: –4 < 2x < 14. Divide by 2: –2 < x < 7."
    },
    {
        "id": 18,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Find the value of k such that x² + kx + 16 is a perfect square trinomial (with k > 0).",
        "options": [
            "8",
            "4",
            "16",
            "32"
        ],
        "answer": 0,
        "explanation": "A trinomial x² + kx + c is a perfect square if c = (k/2)². So 16 = (k/2)² => k/2 = 4 => k = 8."
    },
    {
        "id": 19,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "If log₁₀(x) = 3, what is x?",
        "options": [
            "1000",
            "30",
            "100",
            "300"
        ],
        "answer": 0,
        "explanation": "Convert from logarithmic to exponential form: log₁₀(x) = 3 => x = 10³ = 1000."
    },
    {
        "id": 20,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Which of the following is a factor of x³ – 8?",
        "options": [
            "x – 2",
            "x + 2",
            "x² – 4",
            "x² + 4"
        ],
        "answer": 0,
        "explanation": "Using the difference of cubes formula a³ – b³ = (a – b)(a² + ab + b²), x³ – 8 = (x – 2)(x² + 2x + 4). Thus, (x – 2) is a factor."
    }
];

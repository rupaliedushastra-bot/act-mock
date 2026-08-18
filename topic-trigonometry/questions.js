// =============================================
// questions.js – Topic: trigonometry
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "math",
        "topic": "Trigonometry",
        "text": "In a right triangle, if the side opposite angle θ is 3 and the hypotenuse is 5, what is sin(θ)?",
        "options": [
            "3/5",
            "4/5",
            "3/4",
            "5/3"
        ],
        "answer": 0,
        "explanation": "By definition, sin(θ) = Opposite / Hypotenuse = 3 / 5."
    },
    {
        "id": 2,
        "section": "math",
        "topic": "Trigonometry",
        "text": "In a right triangle with legs of length 5 and 12, what is the value of cos(θ) for the angle adjacent to the leg of length 5?",
        "options": [
            "5/13",
            "12/13",
            "5/12",
            "12/5"
        ],
        "answer": 0,
        "explanation": "Hypotenuse = √(5² + 12²) = √(25 + 144) = √169 = 13. For the angle adjacent to the leg of length 5: cos(θ) = Adjacent / Hypotenuse = 5 / 13."
    },
    {
        "id": 3,
        "section": "math",
        "topic": "Trigonometry",
        "text": "In a right triangle, if opposite side is 8 and adjacent side is 6, what is tan(θ)?",
        "options": [
            "4/3",
            "3/4",
            "4/5",
            "3/5"
        ],
        "answer": 0,
        "explanation": "tan(θ) = Opposite / Adjacent = 8 / 6 = 4 / 3."
    },
    {
        "id": 4,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the exact value of sin(30°)?",
        "options": [
            "1/2",
            "√3 / 2",
            "√2 / 2",
            "1"
        ],
        "answer": 0,
        "explanation": "In a standard 30°-60°-90° right triangle, the ratio of the side opposite 30° to the hypotenuse is 1 / 2. So sin(30°) = 1/2."
    },
    {
        "id": 5,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the exact value of cos(60°)?",
        "options": [
            "1/2",
            "√3 / 2",
            "√2 / 2",
            "0"
        ],
        "answer": 0,
        "explanation": "cos(60°) = sin(90° – 60°) = sin(30°) = 1/2."
    },
    {
        "id": 6,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the value of tan(45°)?",
        "options": [
            "1",
            "√2",
            "1/2",
            "√3"
        ],
        "answer": 0,
        "explanation": "In a 45°-45°-90° right triangle, both legs are equal in length. tan(45°) = Opposite / Adjacent = 1 / 1 = 1."
    },
    {
        "id": 7,
        "section": "math",
        "topic": "Trigonometry",
        "text": "Which trigonometric identity is true for all values of θ?",
        "options": [
            "sin²(θ) + cos²(θ) = 1",
            "sin(θ) + cos(θ) = 1",
            "tan²(θ) + 1 = sin²(θ)",
            "sin(2θ) = 2 sin(θ)"
        ],
        "answer": 0,
        "explanation": "The Pythagorean trigonometric identity states that for any angle θ, sin²(θ) + cos²(θ) = 1."
    },
    {
        "id": 8,
        "section": "math",
        "topic": "Trigonometry",
        "text": "If sin(θ) = 4/5 and θ is in Quadrant I, what is cos(θ)?",
        "options": [
            "3/5",
            "1/5",
            "4/3",
            "5/4"
        ],
        "answer": 0,
        "explanation": "Using sin²(θ) + cos²(θ) = 1: cos²(θ) = 1 – (4/5)² = 1 – 16/25 = 9/25 => cos(θ) = √(9/25) = 3/5 (positive in Quadrant I)."
    },
    {
        "id": 9,
        "section": "math",
        "topic": "Trigonometry",
        "text": "If cos(θ) = 12/13 in a right triangle, what is tan(θ)?",
        "options": [
            "5/12",
            "12/5",
            "5/13",
            "13/12"
        ],
        "answer": 0,
        "explanation": "Opposite side = √(13² – 12²) = √(169 – 144) = √25 = 5. tan(θ) = Opposite / Adjacent = 5 / 12."
    },
    {
        "id": 10,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the value of sin(90°)?",
        "options": [
            "1",
            "0",
            "–1",
            "Undefined"
        ],
        "answer": 0,
        "explanation": "On the unit circle, at 90° (π/2 radians), the coordinate is (0, 1), so sin(90°) = 1."
    },
    {
        "id": 11,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the value of cos(0°)?",
        "options": [
            "1",
            "0",
            "–1",
            "Undefined"
        ],
        "answer": 0,
        "explanation": "On the unit circle, at 0° (0 radians), the coordinate is (1, 0), so cos(0°) = 1."
    },
    {
        "id": 12,
        "section": "math",
        "topic": "Trigonometry",
        "text": "Convert 180° to radians.",
        "options": [
            "π radians",
            "2π radians",
            "π/2 radians",
            "3π/2 radians"
        ],
        "answer": 0,
        "explanation": "Radians = Degrees · (π / 180°) = 180° · (π / 180°) = π radians."
    },
    {
        "id": 13,
        "section": "math",
        "topic": "Trigonometry",
        "text": "Convert π/3 radians into degrees.",
        "options": [
            "60°",
            "30°",
            "45°",
            "90°"
        ],
        "answer": 0,
        "explanation": "Degrees = (π/3) · (180° / π) = 180° / 3 = 60°."
    },
    {
        "id": 14,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the reciprocal trigonometric function of cos(θ)?",
        "options": [
            "sec(θ)",
            "csc(θ)",
            "cot(θ)",
            "tan(θ)"
        ],
        "answer": 0,
        "explanation": "The secant function is defined as the reciprocal of cosine: sec(θ) = 1 / cos(θ)."
    },
    {
        "id": 15,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the reciprocal trigonometric function of sin(θ)?",
        "options": [
            "csc(θ)",
            "sec(θ)",
            "cot(θ)",
            "cos(θ)"
        ],
        "answer": 0,
        "explanation": "The cosecant function is defined as the reciprocal of sine: csc(θ) = 1 / sin(θ)."
    },
    {
        "id": 16,
        "section": "math",
        "topic": "Trigonometry",
        "text": "If tan(θ) = 3/4 in Quadrant I, what is sec(θ)?",
        "options": [
            "5/4",
            "4/5",
            "5/3",
            "4/3"
        ],
        "answer": 0,
        "explanation": "Opposite = 3, Adjacent = 4, Hypotenuse = √(3² + 4²) = 5. cos(θ) = 4/5 => sec(θ) = 1 / cos(θ) = 5/4."
    },
    {
        "id": 17,
        "section": "math",
        "topic": "Trigonometry",
        "text": "In right triangle ABC with right angle at C, if angle A = 30° and hypotenuse AB = 10, what is the length of side BC opposite to angle A?",
        "options": [
            "5",
            "5√3",
            "10√3",
            "2.5"
        ],
        "answer": 0,
        "explanation": "BC = AB · sin(A) = 10 · sin(30°) = 10 · (1/2) = 5."
    },
    {
        "id": 18,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the exact value of sin(45°)?",
        "options": [
            "√2 / 2",
            "1/2",
            "√3 / 2",
            "1"
        ],
        "answer": 0,
        "explanation": "In a 45°-45°-90° right triangle, sin(45°) = 1 / √2 = √2 / 2."
    },
    {
        "id": 19,
        "section": "math",
        "topic": "Trigonometry",
        "text": "In a right triangle, if angle θ = 70° and the adjacent side is 10, which expression represents the length of the opposite side?",
        "options": [
            "10 tan(70°)",
            "10 / tan(70°)",
            "10 sin(70°)",
            "10 cos(70°)"
        ],
        "answer": 0,
        "explanation": "tan(70°) = Opposite / Adjacent = Opposite / 10 => Opposite = 10 tan(70°)."
    },
    {
        "id": 20,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the value of cos(90°)?",
        "options": [
            "0",
            "1",
            "–1",
            "Undefined"
        ],
        "answer": 0,
        "explanation": "On the unit circle, at 90° (0, 1), the x-coordinate is 0, so cos(90°) = 0."
    }
];

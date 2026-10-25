// =============================================
// questions.js – Topic: math-diff-trigonometry
// ACT Math – Trigonometry (Difficult Level)
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "math",
        "topic": "Trigonometry",
        "text": "In a right triangle, sin θ = 5/13 and θ is acute. What is cos θ?",
        "options": [
            "12/5",
            "13/12",
            "5/12",
            "12/13"
        ],
        "answer": 3,
        "explanation": "The correct answer is Option (D): 12/13.",
        "diagram": null
    },
    {
        "id": 2,
        "section": "math",
        "topic": "Trigonometry",
        "text": "If tan θ = 7/24 for an acute angle θ, what is sin θ?",
        "options": [
            "25/7",
            "24/25",
            "7/25",
            "7/24"
        ],
        "answer": 2,
        "explanation": "The correct answer is Option (C): 7/25.",
        "diagram": null
    },
    {
        "id": 3,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the exact value of sin 30° + cos 60°?",
        "options": [
            "0",
            "1",
            "1/2",
            "√3"
        ],
        "answer": 1,
        "explanation": "The correct answer is Option (B): 1.",
        "diagram": null
    },
    {
        "id": 4,
        "section": "math",
        "topic": "Trigonometry",
        "text": "If cos θ = 0.6 and θ is acute, what is tan θ?",
        "options": [
            "4/3",
            "5/3",
            "3/4",
            "3/5"
        ],
        "answer": 0,
        "explanation": "The correct answer is Option (A): 4/3.",
        "diagram": null
    },
    {
        "id": 5,
        "section": "math",
        "topic": "Trigonometry",
        "text": "A 20-foot ladder makes a 60° angle with the ground. How high up a wall does it reach?",
        "options": [
            "10 ft",
            "5√3 ft",
            "10√3 ft",
            "20√3 ft"
        ],
        "answer": 2,
        "explanation": "The correct answer is Option (C): 10√3 ft.",
        "diagram": "../diagrams/TR-05.jpg"
    },
    {
        "id": 6,
        "section": "math",
        "topic": "Trigonometry",
        "text": "For an acute θ, if sin θ = cos(2θ), what is θ?",
        "options": [
            "60°",
            "30°",
            "45°",
            "15°"
        ],
        "answer": 1,
        "explanation": "The correct answer is Option (B): 30°.",
        "diagram": null
    },
    {
        "id": 7,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the amplitude of y = −4 sin(3x) + 2?",
        "options": [
            "2",
            "−4",
            "4",
            "3"
        ],
        "answer": 2,
        "explanation": "The correct answer is Option (C): 4.",
        "diagram": null
    },
    {
        "id": 8,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the period of y = cos(2x) when x is measured in radians?",
        "options": [
            "2π",
            "π/2",
            "4π",
            "π"
        ],
        "answer": 3,
        "explanation": "The correct answer is Option (D): π.",
        "diagram": null
    },
    {
        "id": 9,
        "section": "math",
        "topic": "Trigonometry",
        "text": "A 15-m pole casts a shadow 5√3 m long. What is the sun's angle of elevation?",
        "options": [
            "45°",
            "60°",
            "30°",
            "75°"
        ],
        "answer": 1,
        "explanation": "The correct answer is Option (B): 60°.",
        "diagram": null
    },
    {
        "id": 10,
        "section": "math",
        "topic": "Trigonometry",
        "text": "If tan θ = 1 and 0° < θ < 90°, what is sin(2θ)?",
        "options": [
            "0",
            "1/2",
            "√2/2",
            "1"
        ],
        "answer": 3,
        "explanation": "The correct answer is Option (D): 1.",
        "diagram": null
    },
    {
        "id": 11,
        "section": "math",
        "topic": "Trigonometry",
        "text": "If sin θ + cos θ = 7/5, what is the value of sin θ · cos θ?",
        "options": [
            "12/25",
            "24/25",
            "1/5",
            "7/25"
        ],
        "answer": 0,
        "explanation": "The correct answer is Option (A): 12/25.",
        "diagram": null
    },
    {
        "id": 12,
        "section": "math",
        "topic": "Trigonometry",
        "text": "From a point 100 feet from the base of a building, the angle of elevation to the top of the building is 40° and to the top of a flagpole on the roof is 50°. To the nearest tenth of a foot, how tall is the flagpole?",
        "options": [
            "28.4",
            "19.2",
            "42.6",
            "35.3"
        ],
        "answer": 3,
        "explanation": "The correct answer is Option (D): 35.3.",
        "diagram": null
    },
    {
        "id": 13,
        "section": "math",
        "topic": "Trigonometry",
        "text": "If tan θ = 3/4 and θ is in Quadrant III, what is cos θ?",
        "options": [
            "4/5",
            "−3/4",
            "−3/5",
            "−4/5"
        ],
        "answer": 3,
        "explanation": "The correct answer is Option (D): −4/5.",
        "diagram": null
    },
    {
        "id": 14,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the period of y = 3cos(πx/2) + 1?",
        "options": [
            "π",
            "8",
            "2",
            "4"
        ],
        "answer": 3,
        "explanation": "The correct answer is Option (D): 4.",
        "diagram": null
    },
    {
        "id": 15,
        "section": "math",
        "topic": "Trigonometry",
        "text": "A 26-foot ladder leans against a wall with its base 10 feet from the wall. To the nearest degree, what angle does the ladder make with the ground?",
        "options": [
            "23°",
            "67°",
            "38°",
            "57°"
        ],
        "answer": 1,
        "explanation": "The correct answer is Option (B): 67°.",
        "diagram": null
    },
    {
        "id": 16,
        "section": "math",
        "topic": "Trigonometry",
        "text": "A triangle has two sides of lengths 7 and 8 with a 60° angle between them. What is the length of the third side?",
        "options": [
            "√113",
            "15",
            "√169",
            "√57"
        ],
        "answer": 3,
        "explanation": "The correct answer is Option (D): √57.",
        "diagram": null
    },
    {
        "id": 17,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the area of a triangle with two sides of length 6 and 9 and an included angle of 30°?",
        "options": [
            "27",
            "27√3/2",
            "27/4",
            "27/2"
        ],
        "answer": 3,
        "explanation": "The correct answer is Option (D): 27/2.",
        "diagram": null
    },
    {
        "id": 18,
        "section": "math",
        "topic": "Trigonometry",
        "text": "If sin x = 3/5 and 0° < x < 90°, what is sin 2x?",
        "options": [
            "7/25",
            "12/25",
            "6/5",
            "24/25"
        ],
        "answer": 3,
        "explanation": "The correct answer is Option (D): 24/25.",
        "diagram": null
    },
    {
        "id": 19,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the maximum value of y = 5 − 3cos(2x)?",
        "options": [
            "8",
            "2",
            "11",
            "5"
        ],
        "answer": 0,
        "explanation": "The correct answer is Option (A): 8.",
        "diagram": null
    },
    {
        "id": 20,
        "section": "math",
        "topic": "Trigonometry",
        "text": "How many solutions does sin(2x) = 1/2 have for 0 ≤ x < 2π?",
        "options": [
            "4",
            "2",
            "3",
            "6"
        ],
        "answer": 0,
        "explanation": "The correct answer is Option (A): 4.",
        "diagram": null
    }
];

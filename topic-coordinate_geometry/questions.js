// =============================================
// questions.js – Topic: coordinate_geometry
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "A circle is centered at (3, –2) with a radius of 5. What is the equation of the circle?",
        "options": [
            "(x + 3)² + (y – 2)² = 25",
            "(x – 3)² + (y + 2)² = 25",
            "(x – 3)² – (y + 2)² = 25",
            "(x – 3)² + (y + 2)² = 5"
        ],
        "answer": 1,
        "explanation": "The standard equation of a circle centered at (h, k) with radius r is (x – h)² + (y – k)² = r². Substituting h = 3, k = –2, and r = 5 gives (x – 3)² + (y – (–2))² = 5², which simplifies to (x – 3)² + (y + 2)² = 25."
    },
    {
        "id": 2,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the slope of a line that is perpendicular to a line with slope 2/3?",
        "options": [
            "–2/3",
            "–3/2",
            "2/3",
            "3/2"
        ],
        "answer": 1,
        "explanation": "Perpendicular lines have slopes that are negative reciprocals of each other (m₁ · m₂ = –1). The negative reciprocal of 2/3 is –1 / (2/3) = –3/2."
    },
    {
        "id": 3,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the distance between the points (2, 3) and (8, 11)?",
        "options": [
            "8",
            "6",
            "14",
            "10"
        ],
        "answer": 3,
        "explanation": "Using the distance formula d = √[(x₂ – x₁)² + (y₂ – y₁)²]: d = √[(8 – 2)² + (11 – 3)²] = √[6² + 8²] = √[36 + 64] = √100 = 10."
    },
    {
        "id": 4,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the midpoint of the segment connecting (–4, 6) and (8, –10)?",
        "options": [
            "(4, –4)",
            "(2, 2)",
            "(–2, 2)",
            "(2, –2)"
        ],
        "answer": 3,
        "explanation": "Using the midpoint formula M = ((x₁ + x₂)/2, (y₁ + y₂)/2): M = ((–4 + 8)/2, (6 + (–10))/2) = (4/2, –4/2) = (2, –2)."
    },
    {
        "id": 5,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the distance between the points (–3, 1) and (5, 7)?",
        "options": [
            "10",
            "8",
            "6",
            "14"
        ],
        "answer": 0,
        "explanation": "Using the distance formula: d = √[(5 – (–3))² + (7 – 1)²] = √[8² + 6²] = √[64 + 36] = √100 = 10."
    },
    {
        "id": 6,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the slope of the line passing through (2, 5) and (6, 13)?",
        "options": [
            "1/2",
            "2",
            "4",
            "3"
        ],
        "answer": 1,
        "explanation": "Slope m = (y₂ – y₁) / (x₂ – x₁) = (13 – 5) / (6 – 2) = 8 / 4 = 2."
    },
    {
        "id": 7,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "Which of the following is the y-intercept of the line 3x – 4y = 12?",
        "options": [
            "(0, –3)",
            "(0, 3)",
            "(0, 4)",
            "(0, –4)"
        ],
        "answer": 0,
        "explanation": "To find the y-intercept, set x = 0: 3(0) – 4y = 12 => –4y = 12 => y = –3. Thus, the y-intercept is (0, –3)."
    },
    {
        "id": 8,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the x-intercept of the line 2x + 5y = 20?",
        "options": [
            "(10, 0)",
            "(0, 4)",
            "(4, 0)",
            "(0, 10)"
        ],
        "answer": 0,
        "explanation": "To find the x-intercept, set y = 0: 2x + 5(0) = 20 => 2x = 20 => x = 10. Thus, the x-intercept is (10, 0)."
    },
    {
        "id": 9,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the equation of the line passing through (0, 4) with a slope of –3?",
        "options": [
            "y = –3x + 4",
            "y = 4x – 3",
            "y = 3x + 4",
            "y = –3x – 4"
        ],
        "answer": 0,
        "explanation": "Using the slope-intercept form y = mx + b, where m = –3 and the y-intercept b = 4, the equation is y = –3x + 4."
    },
    {
        "id": 10,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the slope of a line parallel to 4x – 2y = 8?",
        "options": [
            "–2",
            "4",
            "2",
            "–4"
        ],
        "answer": 2,
        "explanation": "Convert 4x – 2y = 8 into slope-intercept form: –2y = –4x + 8 => y = 2x – 4. The slope is 2. Parallel lines have equal slopes, so the slope is 2."
    },
    {
        "id": 11,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the center and radius of the circle with equation (x + 4)² + (y – 1)² = 49?",
        "options": [
            "Center (4, –1), radius 7",
            "Center (–4, 1), radius 49",
            "Center (–4, 1), radius 7",
            "Center (4, 1), radius 7"
        ],
        "answer": 2,
        "explanation": "Comparing (x + 4)² + (y – 1)² = 49 with (x – h)² + (y – k)² = r²: h = –4, k = 1, and r² = 49 => r = √49 = 7. Thus, center is (–4, 1) and radius is 7."
    },
    {
        "id": 12,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the distance between the points (0, 0) and (–6, 8)?",
        "options": [
            "14",
            "10",
            "8",
            "12"
        ],
        "answer": 1,
        "explanation": "Distance d = √[(–6 – 0)² + (8 – 0)²] = √[36 + 64] = √100 = 10."
    },
    {
        "id": 13,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "In which quadrant does the point (–4, –7) lie?",
        "options": [
            "Quadrant I",
            "Quadrant II",
            "Quadrant III",
            "Quadrant IV"
        ],
        "answer": 2,
        "explanation": "Points in Quadrant III have negative x-coordinates and negative y-coordinates (x < 0, y < 0). Since both –4 and –7 are negative, (–4, –7) lies in Quadrant III."
    },
    {
        "id": 14,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the equation of the line passing through (2, 3) and (4, 7)?",
        "options": [
            "y = 2x – 1",
            "y = 2x + 1",
            "y = x + 1",
            "y = 3x – 3"
        ],
        "answer": 0,
        "explanation": "Slope m = (7 – 3) / (4 – 2) = 4 / 2 = 2. Using point-slope form with (2, 3): y – 3 = 2(x – 2) => y – 3 = 2x – 4 => y = 2x – 1."
    },
    {
        "id": 15,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the midpoint of the line segment joining (1, –3) and (7, 5)?",
        "options": [
            "(4, 1)",
            "(3, 1)",
            "(4, 2)",
            "(8, 2)"
        ],
        "answer": 0,
        "explanation": "Midpoint M = ((1 + 7)/2, (–3 + 5)/2) = (8/2, 2/2) = (4, 1)."
    },
    {
        "id": 16,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "If line L has slope 0, which statement about line L is true?",
        "options": [
            "Line L is vertical.",
            "Line L is horizontal.",
            "Line L passes through the origin.",
            "Line L is perpendicular to the x-axis."
        ],
        "answer": 1,
        "explanation": "A line with a slope of 0 has no vertical change as x changes (Δy = 0), which means it is a horizontal line parallel to the x-axis."
    },
    {
        "id": 17,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the slope of a vertical line?",
        "options": [
            "0",
            "1",
            "–1",
            "Undefined"
        ],
        "answer": 3,
        "explanation": "For a vertical line, all points have the same x-coordinate, so Δx = 0. Since slope is Δy / Δx, division by zero results in an undefined slope."
    },
    {
        "id": 18,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the length of the radius of the circle given by x² + y² – 6x + 8y = 0?",
        "options": [
            "5",
            "10",
            "25",
            "7"
        ],
        "answer": 0,
        "explanation": "Complete the square for x and y: (x² – 6x + 9) + (y² + 8y + 16) = 9 + 16 => (x – 3)² + (y + 4)² = 25. Radius r = √25 = 5."
    },
    {
        "id": 19,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "Which point lies on the line y = 3x – 5?",
        "options": [
            "(2, 2)",
            "(3, 4)",
            "(1, –2)",
            "(4, 8)"
        ],
        "answer": 2,
        "explanation": "Substitute x = 1: y = 3(1) – 5 = 3 – 5 = –2. Thus, (1, –2) satisfies the equation."
    },
    {
        "id": 20,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the reflection of the point (3, –4) across the x-axis?",
        "options": [
            "(–3, –4)",
            "(3, 4)",
            "(–3, 4)",
            "(4, –3)"
        ],
        "answer": 1,
        "explanation": "Reflecting a point (x, y) across the x-axis negates its y-coordinate while keeping the x-coordinate unchanged: (x, y) -> (x, –y). Thus, (3, –4) becomes (3, –(–4)) = (3, 4)."
    }
];

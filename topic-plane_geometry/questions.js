// =============================================
// questions.js – Topic: plane_geometry
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "In right triangle ABC, the legs have lengths of 6 cm and 8 cm. What is the length of the hypotenuse?",
        "options": [
            "10 cm",
            "12 cm",
            "14 cm",
            "9 cm"
        ],
        "answer": 0,
        "explanation": "Using the Pythagorean theorem a² + b² = c²: c = √(6² + 8²) = √(36 + 64) = √100 = 10 cm."
    },
    {
        "id": 2,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "What is the area of a triangle with a base of 12 inches and a height of 7 inches?",
        "options": [
            "42 sq in",
            "84 sq in",
            "38 sq in",
            "48 sq in"
        ],
        "answer": 0,
        "explanation": "Area of a triangle = (1/2) · base · height = (1/2) · 12 · 7 = 6 · 7 = 42 sq in."
    },
    {
        "id": 3,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "What is the sum of the interior angles of a regular hexagon (6-sided polygon)?",
        "options": [
            "720°",
            "540°",
            "360°",
            "1080°"
        ],
        "answer": 0,
        "explanation": "Sum of interior angles of an n-sided polygon = (n – 2) · 180°. For a hexagon (n = 6): (6 – 2) · 180° = 4 · 180° = 720°."
    },
    {
        "id": 4,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "A rectangle has a perimeter of 36 cm and a length of 10 cm. What is its area?",
        "options": [
            "80 sq cm",
            "100 sq cm",
            "60 sq cm",
            "72 sq cm"
        ],
        "answer": 0,
        "explanation": "Perimeter P = 2(length + width) => 36 = 2(10 + width) => 18 = 10 + width => width = 8 cm. Area = length · width = 10 · 8 = 80 sq cm."
    },
    {
        "id": 5,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "What is the circumference of a circle with a radius of 7 cm? (Use π ≈ 22/7)",
        "options": [
            "44 cm",
            "22 cm",
            "154 cm",
            "88 cm"
        ],
        "answer": 0,
        "explanation": "Circumference C = 2πr = 2 · (22/7) · 7 = 44 cm."
    },
    {
        "id": 6,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "What is the area of a circle with a diameter of 10 cm? (Leave answer in terms of π)",
        "options": [
            "25π sq cm",
            "100π sq cm",
            "50π sq cm",
            "10π sq cm"
        ],
        "answer": 0,
        "explanation": "Radius r = diameter / 2 = 10 / 2 = 5 cm. Area = πr² = π(5²) = 25π sq cm."
    },
    {
        "id": 7,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "In an isosceles triangle, the vertex angle measures 40°. What is the measure of each base angle?",
        "options": [
            "70°",
            "60°",
            "80°",
            "50°"
        ],
        "answer": 0,
        "explanation": "The angles in a triangle sum to 180°. Base angles are equal in an isosceles triangle: 2(base angle) + 40° = 180° => 2(base angle) = 140° => base angle = 70°."
    },
    {
        "id": 8,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "What is the area of a trapezoid with bases of length 8 cm and 14 cm, and a height of 5 cm?",
        "options": [
            "55 sq cm",
            "110 sq cm",
            "45 sq cm",
            "60 sq cm"
        ],
        "answer": 0,
        "explanation": "Area of a trapezoid = ((b₁ + b₂) / 2) · height = ((8 + 14) / 2) · 5 = (22 / 2) · 5 = 11 · 5 = 55 sq cm."
    },
    {
        "id": 9,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "Two similar triangles have corresponding sides in the ratio 3 : 5. What is the ratio of their areas?",
        "options": [
            "9 : 25",
            "3 : 5",
            "6 : 10",
            "27 : 125"
        ],
        "answer": 0,
        "explanation": "The ratio of the areas of two similar figures equals the square of the ratio of their corresponding linear dimensions: (3/5)² = 9 / 25."
    },
    {
        "id": 10,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "In a 30°-60°-90° right triangle, if the shorter leg opposite the 30° angle is 4 cm, what is the length of the hypotenuse?",
        "options": [
            "8 cm",
            "4√3 cm",
            "8√3 cm",
            "6 cm"
        ],
        "answer": 0,
        "explanation": "In a 30°-60°-90° special right triangle, sides are in the ratio 1 : √3 : 2 (short leg : long leg : hypotenuse). Hypotenuse = 2 · (short leg) = 2 · 4 = 8 cm."
    },
    {
        "id": 11,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "In a 45°-45°-90° right triangle, if each leg is 6 cm, what is the length of the hypotenuse?",
        "options": [
            "6√2 cm",
            "12 cm",
            "6√3 cm",
            "9 cm"
        ],
        "answer": 0,
        "explanation": "In a 45°-45°-90° triangle, sides are in the ratio 1 : 1 : √2. Hypotenuse = leg · √2 = 6√2 cm."
    },
    {
        "id": 12,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "What is the measure of each interior angle in a regular pentagon (5-sided polygon)?",
        "options": [
            "108°",
            "72°",
            "120°",
            "90°"
        ],
        "answer": 0,
        "explanation": "Sum of interior angles = (5 – 2) · 180° = 3 · 180° = 540°. Each interior angle of a regular pentagon = 540° / 5 = 108°."
    },
    {
        "id": 13,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "What is the area of a parallelogram with a base of 9 cm and a perpendicular height of 6 cm?",
        "options": [
            "54 sq cm",
            "27 sq cm",
            "30 sq cm",
            "45 sq cm"
        ],
        "answer": 0,
        "explanation": "Area of a parallelogram = base · height = 9 · 6 = 54 sq cm."
    },
    {
        "id": 14,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "A square has a diagonal of length 10 cm. What is the area of the square?",
        "options": [
            "50 sq cm",
            "100 sq cm",
            "25 sq cm",
            "75 sq cm"
        ],
        "answer": 0,
        "explanation": "Area of a square in terms of its diagonal d is A = d² / 2. Here, A = 10² / 2 = 100 / 2 = 50 sq cm."
    },
    {
        "id": 15,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "Two vertical angles are represented by (3x + 10)° and (5x – 30)°. What is the value of x?",
        "options": [
            "20",
            "15",
            "25",
            "10"
        ],
        "answer": 0,
        "explanation": "Vertical angles are congruent: 3x + 10 = 5x – 30 => 2x = 40 => x = 20."
    },
    {
        "id": 16,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "What is the area of a rhombus with diagonals of lengths 12 cm and 16 cm?",
        "options": [
            "96 sq cm",
            "192 sq cm",
            "48 sq cm",
            "100 sq cm"
        ],
        "answer": 0,
        "explanation": "Area of a rhombus = (1/2) · d₁ · d₂ = (1/2) · 12 · 16 = 6 · 16 = 96 sq cm."
    },
    {
        "id": 17,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "In a circle with radius 6 cm, what is the length of an arc intercepted by a central angle of 60°?",
        "options": [
            "2π cm",
            "3π cm",
            "6π cm",
            "π cm"
        ],
        "answer": 0,
        "explanation": "Arc length s = (θ / 360°) · 2πr = (60° / 360°) · 2π(6) = (1/6) · 12π = 2π cm."
    },
    {
        "id": 18,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "What is the area of a sector of a circle with radius 6 cm and central angle 90°?",
        "options": [
            "9π sq cm",
            "18π sq cm",
            "36π sq cm",
            "6π sq cm"
        ],
        "answer": 0,
        "explanation": "Sector Area = (θ / 360°) · πr² = (90° / 360°) · π(6²) = (1/4) · 36π = 9π sq cm."
    },
    {
        "id": 19,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "What is the volume of a right rectangular prism with length 5 cm, width 4 cm, and height 3 cm?",
        "options": [
            "60 cu cm",
            "47 cu cm",
            "94 cu cm",
            "30 cu cm"
        ],
        "answer": 0,
        "explanation": "Volume V = length · width · height = 5 · 4 · 3 = 60 cubic cm."
    },
    {
        "id": 20,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "What is the total surface area of a cube with edge length 4 cm?",
        "options": [
            "96 sq cm",
            "64 sq cm",
            "48 sq cm",
            "16 sq cm"
        ],
        "answer": 0,
        "explanation": "A cube has 6 congruent square faces. Total surface area = 6s² = 6(4²) = 6(16) = 96 sq cm."
    }
];

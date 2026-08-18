// =============================================
// questions.js – Topic: ratios_proportions
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "If 3 apples cost $1.50, how much do 12 apples cost at the same unit rate?",
        "options": [
            "$6.00",
            "$4.50",
            "$7.50",
            "$5.00"
        ],
        "answer": 0,
        "explanation": "Unit cost per apple = $1.50 / 3 = $0.50. Cost for 12 apples = 12 · $0.50 = $6.00."
    },
    {
        "id": 2,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "In a recipe, the ratio of flour to sugar is 3 : 2. If a baker uses 6 cups of flour, how many cups of sugar should be used?",
        "options": [
            "4 cups",
            "5 cups",
            "3 cups",
            "9 cups"
        ],
        "answer": 0,
        "explanation": "Set up the proportion: 3 / 2 = 6 / x => 3x = 12 => x = 4 cups of sugar."
    },
    {
        "id": 3,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "A map scale indicates that 1 inch represents 25 miles. If two cities are 3.5 inches apart on the map, what is the actual distance between them?",
        "options": [
            "87.5 miles",
            "75 miles",
            "100 miles",
            "85 miles"
        ],
        "answer": 0,
        "explanation": "Actual distance = 3.5 inches · 25 miles/inch = 87.5 miles."
    },
    {
        "id": 4,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "Solve the proportion for x: 5 / 8 = x / 40",
        "options": [
            "25",
            "20",
            "30",
            "32"
        ],
        "answer": 0,
        "explanation": "Cross-multiply: 8x = 5 · 40 => 8x = 200 => x = 200 / 8 = 25."
    },
    {
        "id": 5,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "A car travels 180 miles on 6 gallons of gas. How far can the car travel on 15 gallons of gas at the same fuel efficiency?",
        "options": [
            "450 miles",
            "400 miles",
            "500 miles",
            "360 miles"
        ],
        "answer": 0,
        "explanation": "Fuel efficiency = 180 / 6 = 30 miles per gallon. Distance on 15 gallons = 15 · 30 = 450 miles."
    },
    {
        "id": 6,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "In a class of 28 students, the ratio of boys to girls is 3 : 4. How many boys are in the class?",
        "options": [
            "12",
            "16",
            "14",
            "9"
        ],
        "answer": 0,
        "explanation": "Total ratio parts = 3 + 4 = 7. Each part = 28 / 7 = 4 students. Number of boys = 3 · 4 = 12 boys."
    },
    {
        "id": 7,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "If y varies directly as x, and y = 24 when x = 6, what is y when x = 10?",
        "options": [
            "40",
            "36",
            "44",
            "60"
        ],
        "answer": 0,
        "explanation": "Direct variation equation is y = kx. Constant k = y / x = 24 / 6 = 4. When x = 10: y = 4 · 10 = 40."
    },
    {
        "id": 8,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "If y varies inversely as x, and y = 12 when x = 3, what is y when x = 9?",
        "options": [
            "4",
            "36",
            "6",
            "9"
        ],
        "answer": 0,
        "explanation": "Inverse variation is xy = k. Constant k = 3 · 12 = 36. When x = 9: 9y = 36 => y = 4."
    },
    {
        "id": 9,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "A machine produces 150 widgets in 20 minutes. At this rate, how many widgets can it produce in 2 hours?",
        "options": [
            "900",
            "750",
            "600",
            "1,200"
        ],
        "answer": 0,
        "explanation": "2 hours = 120 minutes. Rate = 150 / 20 = 7.5 widgets per minute. Total widgets = 7.5 · 120 = 900 widgets."
    },
    {
        "id": 10,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "The ratio of red, blue, and green marbles in a bag is 2 : 3 : 5. If there are 50 marbles in total, how many green marbles are in the bag?",
        "options": [
            "25",
            "15",
            "10",
            "20"
        ],
        "answer": 0,
        "explanation": "Total parts = 2 + 3 + 5 = 10. Each part = 50 / 10 = 5 marbles. Green marbles = 5 · 5 = 25 marbles."
    },
    {
        "id": 11,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "If 4 workers can paint a fence in 6 hours, how many hours would it take 3 workers to paint the same fence at the same rate?",
        "options": [
            "8 hours",
            "7 hours",
            "9 hours",
            "5 hours"
        ],
        "answer": 0,
        "explanation": "Total worker-hours required = 4 · 6 = 24 worker-hours. Time for 3 workers = 24 / 3 = 8 hours."
    },
    {
        "id": 12,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "Solve for x: (2x + 1) / 3 = (x + 5) / 2",
        "options": [
            "13",
            "11",
            "9",
            "7"
        ],
        "answer": 0,
        "explanation": "Cross-multiply: 2(2x + 1) = 3(x + 5) => 4x + 2 = 3x + 15 => x = 13."
    },
    {
        "id": 13,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "A 5-pound bag of apples costs $4.00. What is the unit price per ounce? (1 pound = 16 ounces)",
        "options": [
            "$0.05",
            "$0.08",
            "$0.10",
            "$0.04"
        ],
        "answer": 0,
        "explanation": "Total ounces = 5 · 16 = 80 ounces. Unit price = $4.00 / 80 = $0.05 per ounce."
    },
    {
        "id": 14,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "In a photographic enlargement, the original image is 4 inches wide and 6 inches tall. If the enlarged image is 10 inches wide, how tall is it?",
        "options": [
            "15 inches",
            "12 inches",
            "16 inches",
            "14 inches"
        ],
        "answer": 0,
        "explanation": "Set up proportion: 4 / 6 = 10 / h => 4h = 60 => h = 15 inches."
    },
    {
        "id": 15,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "The ratio of cats to dogs at a shelter is 4 : 5. If there are 36 cats, how many dogs are there?",
        "options": [
            "45",
            "40",
            "50",
            "30"
        ],
        "answer": 0,
        "explanation": "4 / 5 = 36 / d => 4d = 180 => d = 45 dogs."
    },
    {
        "id": 16,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "If a runner completes 5 kilometers in 25 minutes, what is the runner's speed in kilometers per hour?",
        "options": [
            "12 km/h",
            "10 km/h",
            "15 km/h",
            "8 km/h"
        ],
        "answer": 0,
        "explanation": "25 minutes = 25/60 hours = 5/12 hours. Speed = Distance / Time = 5 / (5/12) = 5 · (12/5) = 12 km/h."
    },
    {
        "id": 17,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "A shade of purple paint requires mixing blue and red paint in a 5 : 3 ratio. If 24 quarts of purple paint are needed, how many quarts of blue paint are required?",
        "options": [
            "15 quarts",
            "9 quarts",
            "12 quarts",
            "18 quarts"
        ],
        "answer": 0,
        "explanation": "Total parts = 5 + 3 = 8. Each part = 24 / 8 = 3 quarts. Blue paint needed = 5 · 3 = 15 quarts."
    },
    {
        "id": 18,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "If x/y = 3/4 and y/z = 2/5, what is the ratio of x to z?",
        "options": [
            "3/10",
            "6/20",
            "5/6",
            "3/8"
        ],
        "answer": 0,
        "explanation": "Multiply the ratios: (x/y) · (y/z) = x/z = (3/4) · (2/5) = 6/20 = 3/10."
    },
    {
        "id": 19,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "A shadow problem: A 6-foot pole casts a 4-foot shadow. At the same time, how tall is a tree that casts a 24-foot shadow?",
        "options": [
            "36 feet",
            "32 feet",
            "40 feet",
            "28 feet"
        ],
        "answer": 0,
        "explanation": "Height / Shadow ratio = 6 / 4 = 1.5. Height of tree = 24 · 1.5 = 36 feet."
    },
    {
        "id": 20,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "If 8 ounces of juice contain 110 calories, how many calories are in a 20-ounce bottle of juice?",
        "options": [
            "275 calories",
            "250 calories",
            "300 calories",
            "220 calories"
        ],
        "answer": 0,
        "explanation": "Calories per ounce = 110 / 8 = 13.75. For 20 ounces: 20 · 13.75 = 275 calories."
    }
];

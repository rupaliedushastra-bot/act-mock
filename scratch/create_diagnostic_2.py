import json
import re
import sys
import random
import os

def main():
    # Set random seed for reproducibility
    random.seed(2026)

    source_path = 'act-diagnostic-1/act_questions1.js'
    dest_dir = 'act-diagnostic-2'
    dest_path = os.path.join(dest_dir, 'act_questions1.js')

    if not os.path.exists(source_path):
        print(f"Error: Source file {source_path} not found.")
        sys.exit(1)

    os.makedirs(dest_dir, exist_ok=True)

    # Read source file
    with open(source_path, 'r', encoding='utf-8') as f:
        js_content = f.read()

    # Find the ACT_QUESTIONS1 array
    match = re.search(r'const ACT_QUESTIONS1 = (\[.*?\]);', js_content, re.DOTALL)
    if not match:
        print("Error: Could not find ACT_QUESTIONS1 in source.")
        sys.exit(1)

    array_str = match.group(1)

    # Strip line comments to make it valid JSON
    lines = []
    for line in array_str.splitlines():
        stripped = line.strip()
        if stripped.startswith('//'):
            continue
        lines.append(line)
    clean_str = '\n'.join(lines)

    try:
        questions = json.loads(clean_str)
    except Exception as e:
        print("Error parsing JSON of ACT_QUESTIONS1:", e)
        sys.exit(1)

    # Math Mutations mapping by original ID (51 to 95)
    math_mutations = {
        51: {
            "text": "A recipe requires 3/4 cup of sugar for 12 cookies. How much sugar is needed for 20 cookies, assuming a proportional increase?",
            "options": ["1 cup", "1 1/4 cups", "1 1/2 cups", "1 3/4 cups"],
            "answer": 1
        },
        52: {
            "text": "Solve for x: 3(x + 2) = 4x – 1",
            "options": ["5", "6", "7", "8"],
            "answer": 2
        },
        53: {
            "text": "What is the value of x in the equation 3^x = 81?",
            "options": ["2", "3", "4", "5"],
            "answer": 2
        },
        54: {
            "text": "What is the midpoint of the segment connecting (–4, 6) and (8, –2)?",
            "options": ["(2, 2)", "(2, 4)", "(4, 2)", "(–2, 2)"],
            "answer": 0
        },
        55: {
            "text": "The interior angles of a triangle measure x, 3x, and 8x degrees. What is the value of x?",
            "options": ["10", "15", "20", "30"],
            "answer": 1
        },
        56: {
            "text": "If sin(θ) = 0.5 and 0° < θ < 90°, what is θ?",
            "options": ["30°", "45°", "60°", "90°"],
            "answer": 0
        },
        57: {
            "text": "What is the least common multiple of 9 and 15?",
            "options": ["30", "36", "45", "135"],
            "answer": 2
        },
        58: {
            "text": "Factor completely: x² – 25",
            "options": ["(x – 5)(x + 5)", "(x – 25)(x + 1)", "(x – 5)²", "(x + 25)(x – 1)"],
            "answer": 0
        },
        59: {
            "text": "A system of equations is given: y = 3x – 2 and y = –2x + 13. What is the value of x at the point of intersection?",
            "options": ["2", "3", "4", "5"],
            "answer": 1
        },
        60: {
            "text": "What is the equation of a line with slope –4 that passes through the point (0, 3)?",
            "options": ["y = –4x + 3", "y = 4x + 3", "y = –4x – 3", "y = 3x – 4"],
            "answer": 0
        },
        61: {
            "text": "A right triangle has legs of length 5 and 12. What is the length of the hypotenuse?",
            "options": ["10", "13", "15", "17"],
            "answer": 1
        },
        62: {
            "text": "What is the value of cos(60°)?",
            "options": ["1/2", "√2/2", "√3/2", "1"],
            "answer": 0
        },
        63: {
            "text": "A car travels 350 miles in 5 hours. What is its average speed in miles per hour?",
            "options": ["50 mph", "60 mph", "70 mph", "80 mph"],
            "answer": 2
        },
        64: {
            "text": "If 6x – 5 = 2x + 15, what is the value of x?",
            "options": ["3", "4", "5", "6"],
            "answer": 2
        },
        65: {
            "text": "What is the discriminant of the quadratic equation x² – 6x + 9 = 0?",
            "options": ["0", "3", "6", "9"],
            "answer": 0
        },
        66: {
            "text": "What is the distance between the points (2, 3) and (8, 11)?",
            "options": ["6", "8", "10", "12"],
            "answer": 2
        },
        67: {
            "text": "A square has a perimeter of 48 cm. What is its area?",
            "options": ["96 cm²", "100 cm²", "144 cm²", "196 cm²"],
            "answer": 2
        },
        68: {
            "text": "In a right triangle, the angle θ satisfies cos(θ) = 0.8. What is sin(θ), given the Pythagorean identity?",
            "options": ["0.4", "0.6", "0.8", "1.0"],
            "answer": 1
        },
        69: {
            "text": "What is the value of |–9 + 4|?",
            "options": ["5", "–5", "13", "–13"],
            "answer": 0
        },
        70: {
            "text": "Simplify: (4x³y²)(2xy⁴)",
            "options": ["8x⁴y⁶", "6x⁴y⁶", "8x³y⁸", "6x³y⁸"],
            "answer": 0
        },
        71: {
            "text": "If g(x) = √(x – 3), what is the domain of g?",
            "options": ["x ≥ 3", "x ≤ 3", "x ≥ –3", "all real numbers"],
            "answer": 0
        },
        72: {
            "text": "A line has the equation 3x + 4y = 24. What is its y-intercept?",
            "options": ["4", "5", "6", "8"],
            "answer": 2
        },
        73: {
            "text": "What is the volume of a rectangular box with length 6, width 5, and height 4?",
            "options": ["60", "80", "120", "150"],
            "answer": 2
        },
        74: {
            "text": "What is the period of the function y = sin(4x)?",
            "options": ["π/2", "π", "2π", "4π"],
            "answer": 0
        },
        75: {
            "text": "A jar contains 60 marbles, of which 40% are blue. How many marbles are blue?",
            "options": ["18", "24", "30", "36"],
            "answer": 1
        },
        76: {
            "text": "Solve for x: x/5 + 4 = 10",
            "options": ["20", "30", "40", "50"],
            "answer": 1
        },
        77: {
            "text": "What is the sum of the roots of the equation x² – 8x + 12 = 0?",
            "options": ["6", "8", "12", "–8"],
            "answer": 1
        },
        78: {
            "text": "Two lines, y = –2x + 4 and y = –2x – 3, are graphed on the same coordinate plane. What is true about these lines?",
            "options": ["They are parallel.", "They are perpendicular.", "They intersect at one point.", "They are the same line."],
            "answer": 0
        },
        79: {
            "text": "A sector of a circle has a central angle of 120° and a radius of 6 cm. What is the area of the sector, in terms of π?",
            "options": ["6π cm²', '12π cm²', '18π cm²', '36π cm²"],
            "answer": 1
        },
        80: {
            "text": "If a right triangle has an angle of 60° and the side opposite that angle measures 9√3, what is the length of the hypotenuse?",
            "options": ["9", "12", "18", "9√3"],
            "answer": 2
        },
        81: {
            "text": "What is the greatest common factor of 45 and 60?",
            "options": ["5", "9", "15", "30"],
            "answer": 2
        },
        82: {
            "text": "Expand and simplify: (x + 6)(x – 3)",
            "options": ["x² + 3x – 18", "x² – 3x – 18", "x² + 9x – 18", "x² – 9x + 18"],
            "answer": 0
        },
        83: {
            "text": "What is the inverse of the function f(x) = 4x – 8?",
            "options": ["f⁻¹(x) = (x + 8)/4", "f⁻¹(x) = (x – 8)/4", "f⁻¹(x) = 4x + 8", "f⁻¹(x) = (x/4) – 8"],
            "answer": 0
        },
        84: {
            "text": "What is the slope of a line that is perpendicular to a line with slope –3/4?",
            "options": ["–3/4", "3/4", "–4/3", "4/3"],
            "answer": 3
        },
        85: {
            "text": "A cylinder has a radius of 4 cm and a height of 8 cm. What is its volume, in terms of π?",
            "options": ["32π cm³", "64π cm³", "128π cm³", "256π cm³"],
            "answer": 2
        },
        86: {
            "text": "What is the value of sin(90°)?",
            "options": ["0", "1", "–1", "undefined"],
            "answer": 1
        },
        87: {
            "text": "A bag contains red, blue, and green marbles in the ratio 1:3:4. If there are 80 marbles total, how many are blue?",
            "options": ["20", "30", "40", "50"],
            "answer": 1
        },
        88: {
            "text": "If 3(x – 2) – 4 = 8, what is the value of x?",
            "options": ["5", "6", "7", "8"],
            "answer": 1
        },
        89: {
            "text": "What is the value of log₃(81)?",
            "options": ["3", "4", "5", "9"],
            "answer": 1
        },
        90: {
            "text": "A circle is centered at (–2, 4) with a radius of 6. What is the equation of the circle?",
            "options": ["(x + 2)² + (y – 4)² = 36", "(x – 2)² + (y + 4)² = 36", "(x + 2)² + (y – 4)² = 6", "(x + 2)² – (y – 4)² = 36"],
            "answer": 0
        },
        91: {
            "text": "Two similar triangles have a scale factor of 2:3. If the smaller triangle has an area of 16 square units, what is the area of the larger triangle?",
            "options": ["24 sq units", "30 sq units", "36 sq units", "48 sq units"],
            "answer": 2
        },
        92: {
            "text": "A ladder leans against a wall, forming a 65° angle with the ground. If the ladder is 12 feet long, which expression gives the height where it touches the wall?",
            "options": ["12 sin(65°)", "12 cos(65°)", "12 tan(65°)", "12/sin(65°)"],
            "answer": 0
        },
        93: {
            "text": "If a is 5 more than three times b, and b = 4, what is the value of a?",
            "options": ["12", "17", "20", "22"],
            "answer": 1
        },
        94: {
            "text": "Solve the inequality: 4x – 7 > 13",
            "options": ["x > 5", "x < 5", "x > 20/4", "x > 4"],
            "answer": 0
        },
        95: {
            "text": "What is the vertex of the parabola y = (x – 4)² + 3?",
            "options": ["(4, 3)", "(–4, 3)", "(4, –3)", "(3, 4)"],
            "answer": 0
        }
    }

    # Separate questions into sections
    english_qs = []
    math_qs = []
    reading_qs = []

    for q in questions:
        # Mutate Math questions before shuffling
        q_id = q.get('id')
        if q_id in math_mutations:
            mut = math_mutations[q_id]
            q['text'] = mut['text']
            q['options'] = mut['options']
            q['answer'] = mut['answer']

        # Mutate some English details (names, minor words)
        if q['section'] == 'english':
            # e.g., Louise Bourgeois -> Clara Peeters
            if "Louise Bourgeois" in q['text']:
                q['text'] = q['text'].replace("Louise Bourgeois (1911–2010)", "Clara Peeters (1594–1657)")
                # Change "NO CHANGE" options to keep it clean if needed, or leave it
            # e.g., change "raining heavily" to "snowing heavily" in ID 2
            if "raining heavily" in q['text']:
                q['text'] = q['text'].replace("raining heavily", "snowing heavily").replace("heavy rain", "heavy snow").replace("rained heavily", "snowed heavily").replace("rain being heavy", "snow being heavy")
                q['options'] = [opt.replace("raining heavily", "snowing heavily").replace("heavy rain", "heavy snow").replace("rained heavily", "snowed heavily").replace("rain being heavy", "snow being heavy") for opt in q['options']]

        # Mutate some Reading details (names, minor words)
        if q['section'] == 'reading':
            # e.g., echolocation in bats -> sonar in dolphins
            if "bats use echolocation" in q['text']:
                q['text'] = q['text'].replace("bats use echolocation to navigate in darkness by emitting sound waves and interpreting their echoes", "dolphins use echolocation to navigate underwater by emitting click sounds and listening to their return")
                q['options'] = [opt.replace("sonar", "underwater sonar") for opt in q['options']]

        # Categorize
        if q['section'] == 'english':
            english_qs.append(q)
        elif q['section'] == 'math':
            math_qs.append(q)
        elif q['section'] == 'reading':
            reading_qs.append(q)

    # Shuffle within each section
    random.shuffle(english_qs)
    random.shuffle(math_qs)
    random.shuffle(reading_qs)

    # Recombine and assign new IDs 1 to 131
    combined_qs = english_qs + math_qs + reading_qs
    for idx, q in enumerate(combined_qs):
        q['id'] = idx + 1

    # Format the array as JS string
    questions_js_str = json.dumps(combined_qs, indent=4, ensure_ascii=False)

    # Rebuild the entire js file content
    # We will extract everything after the ACT_QUESTIONS1 array in the source file
    # Let's find index where ACT_QUESTIONS1 block ends:
    array_end_idx = js_content.index(match.group(0)) + len(match.group(0))
    trailing_js = js_content[array_end_idx:]

    header_comment = """// =============================================
// act_questions1.js – ACT Diagnostic Test 2
// (Shuffled and Value-Altered Variant)
// Core ACT Format: English (50Q), Math (45Q), Reading (36Q)
// Total: 131 questions | Time: 125 minutes (2 hr 5 min)
// =============================================

const ACT_QUESTIONS1 = """

    final_content = header_comment + questions_js_str + ";\n" + trailing_js

    # Write to destination
    with open(dest_path, 'w', encoding='utf-8') as f:
        f.write(final_content)

    print(f"Successfully generated new shuffled/mutated test at: {dest_path}")

if __name__ == '__main__':
    main()

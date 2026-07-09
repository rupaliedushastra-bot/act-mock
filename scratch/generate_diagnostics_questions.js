const fs = require('fs');
const path = require('path');

// Helper to load questions from a file
function loadQuestions(filePath) {
    const code = fs.readFileSync(filePath, 'utf8');
    const context = {};
    eval(code + '\n; context.ACT_QUESTIONS1 = ACT_QUESTIONS1;');
    return context.ACT_QUESTIONS1;
}

// Shuffling helper (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Mappings for Math alterations
const mathAlterations = [
    {
        pattern: /triangular ramp has a base of 8 feet and a height of 15 feet/i,
        newText: "A right triangular ramp has a base of 5 feet and a height of 12 feet. What is the length of the ramp?",
        newOptions: ["12 feet", "13 feet", "14 feet", "15 feet", "17 feet"],
        correctOptionIndex: 1
    },
    {
        pattern: /least common multiple \(LCM\) of 15 and 20/i,
        newText: "What is the least common multiple (LCM) of 12 and 18?",
        newOptions: ["24", "30", "36", "48", "54"],
        correctOptionIndex: 2
    },
    {
        pattern: /algebraic expression 3<i>x<\/i>² − 5<i>x<\/i> \+ 2 when <i>x<\/i> = −2/i,
        newText: "What is the value of the algebraic expression 2<i>x</i>² − 4<i>x</i> + 3 when <i>x</i> = −3?",
        newOptions: ["18", "27", "30", "33", "36"],
        correctOptionIndex: 3
    },
    {
        pattern: /algebraic expression 3<i>x<\/i>² - 5<i>x<\/i> \+ 2 when <i>x<\/i> = -2/i,
        newText: "What is the value of the algebraic expression 2<i>x</i>² − 4<i>x</i> + 3 when <i>x</i> = −3?",
        newOptions: ["18", "27", "30", "33", "36"],
        correctOptionIndex: 3
    },
    {
        pattern: /lengths of sides AC and BC are 5 units and 12 units/i,
        newText: "In right triangle ABC, angle C is the right angle. If the lengths of sides AC and BC are 8 units and 15 units respectively, what is the length of the hypotenuse AB?",
        newOptions: ["13 units", "15 units", "17 units", "19 units", "21 units"],
        correctOptionIndex: 2
    },
    {
        pattern: /fencing to enclose a square area of 5625 square feet/i,
        newText: "Melissa is ordering fencing to enclose a square area of 2500 square feet. How many feet of fencing does she need?",
        newOptions: ["50 feet", "100 feet", "200 feet", "2500 feet", "5000 feet"],
        correctOptionIndex: 2
    },
    {
        pattern: /He uses half of his butter to make the pie, and then uses half of the remaining butter to make the cupcakes. If he has 2 cups of butter left/i,
        newText: "Andy needs to make a pie and some cupcakes. He uses half of his butter to make the pie, and then uses half of the remaining butter to make the cupcakes. If he has 3 cups of butter left, how much did he have before he made the pie?",
        newOptions: ["6 cups", "8 cups", "10 cups", "12 cups", "16 cups"],
        correctOptionIndex: 3
    },
    {
        pattern: /He uses half of his butter to make the pie, and then uses half of the remaining butter to make the cupcakes. If he has 3 cups of butter left/i,
        newText: "Andy needs to make a pie and some cupcakes. He uses half of his butter to make the pie, and then uses half of the remaining butter to make the cupcakes. If he has 4 cups of butter left, how much did he have before he made the pie?",
        newOptions: ["8 cups", "12 cups", "14 cups", "16 cups", "20 cups"],
        correctOptionIndex: 3
    },
    {
        pattern: /perimeter of 44 yards and a length of 36 feet/i,
        newText: "If a rectangular field has a perimeter of 60 yards and a length of 54 feet, what is the field's width?",
        newOptions: ["24 feet", "36 feet", "48 feet", "6 yards", "30 yards"],
        correctOptionIndex: 1
    },
    {
        pattern: /perimeter of 50 yards and a length of 45 feet/i,
        newText: "If a rectangular field has a perimeter of 80 yards and a length of 72 feet, what is the field's width?",
        newOptions: ["30 feet", "48 feet", "60 feet", "8 yards", "40 yards"],
        correctOptionIndex: 1
    },
    {
        pattern: /650 square foot apartment in Boston costs \$1800/i,
        newText: "A 750 square foot apartment in Boston costs $2100 per month to rent. What is the monthly rent per square foot?",
        newOptions: ["$0.36", "$2.50", "$2.80", "$3.50", "$14.00"],
        correctOptionIndex: 2
    },
    {
        pattern: /mean of the following data set\? \{8, 14, 6, 10, 12\}/i,
        newText: "What is the mean of the following data set? {7, 13, 5, 9, 11}",
        newOptions: ["8", "9", "10", "11", "12"],
        correctOptionIndex: 1
    },
    {
        pattern: /leg <i>AB<\/i> = 12 inches. If angle <i>BAC<\/i> = 35/i,
        newText: "Right triangle <i>ABC</i> has leg <i>AB</i> = 15 inches. If angle <i>BAC</i> = 35&deg;, find hypotenuse <i>AC</i>.",
        newOptions: ["12.3 inches", "15.0 inches", "18.3 inches", "21.4 inches", "26.1 inches"],
        correctOptionIndex: 2
    },
    {
        pattern: /leg <i>AB<\/i> = 15 inches. If angle <i>BAC<\/i> = 35/i,
        newText: "Right triangle <i>ABC</i> has leg <i>AB</i> = 18 inches. If angle <i>BAC</i> = 35&deg;, find hypotenuse <i>AC</i>.",
        newOptions: ["14.7 inches", "18.0 inches", "22.0 inches", "25.7 inches", "31.3 inches"],
        correctOptionIndex: 2
    },
    {
        pattern: /twice as many red marbles as blue marbles, and the number of blue marbles is 88%/i,
        newText: "A bag contains twice as many red marbles as blue marbles, and the number of blue marbles is 60% of the number of green marbles. If <i>g</i> represents the number of green marbles, which of the following expressions represents the total number of marbles in the bag?",
        newOptions: ["2.00g", "2.20g", "2.60g", "2.80g", "3.00g"],
        correctOptionIndex: 1
    },
    {
        pattern: /twice as many red marbles as blue marbles, and the number of blue marbles is 75%/i,
        newText: "A bag contains twice as many red marbles as blue marbles, and the number of blue marbles is 80% of the number of green marbles. If <i>g</i> represents the number of green marbles, which of the following expressions represents the total number of marbles in the bag?",
        newOptions: ["2.20g", "2.40g", "3.20g", "3.40g", "3.60g"],
        correctOptionIndex: 3
    },
    {
        pattern: /Clearance for \$65.00. If the shoes originally cost \$85.00/i,
        newText: "Angie purchases a pair of running shoes on clearance for $48.00. If the shoes originally cost $80.00, what was her total discount percentage?",
        newOptions: ["30%", "40%", "45%", "50%", "60%"],
        correctOptionIndex: 1
    },
    {
        pattern: /clearance for \$48.00. If the shoes originally cost \$80.00/i,
        newText: "Angie purchases a pair of running shoes on clearance for $54.00. If the shoes originally cost $90.00, what was her total discount percentage?",
        newOptions: ["25%", "33.3%", "40%", "50%", "60%"],
        correctOptionIndex: 2
    },
    {
        pattern: /distance from the center of the circle to point B is 10 centimeters, and the distance from the center of the circle to line segment BC is 8/i,
        newText: "Points B and C are on a circle, and a chord is formed by line segment BC. If the distance from the center of the circle to point B is 5 centimeters, and the distance from the center of the circle to line segment BC is 3 centimeters, what is the length of line segment BC?",
        newOptions: ["3 centimeters", "4 centimeters", "6 centimeters", "8 centimeters", "10 centimeters"],
        correctOptionIndex: 3
    },
    {
        pattern: /distance from the center of the circle to point B is 5 centimeters, and the distance from the center of the circle to line segment BC is 3/i,
        newText: "Points B and C are on a circle, and a chord is formed by line segment BC. If the distance from the center of the circle to point B is 13 centimeters, and the distance from the center of the circle to line segment BC is 5 centimeters, what is the length of line segment BC?",
        newOptions: ["12 centimeters", "16 centimeters", "20 centimeters", "24 centimeters", "26 centimeters"],
        correctOptionIndex: 3
    },
    {
        pattern: /bought 2 tickets has a 0.4% chance of winning/i,
        newText: "In a particular raffle, a single ticket will be randomly drawn from a bag containing all the purchased tickets. If someone who buys 5 tickets has a 0.5% chance of winning, how many tickets were bought in total?",
        newOptions: ["100 tickets", "250 tickets", "500 tickets", "1,000 tickets", "2,000 tickets"],
        correctOptionIndex: 3
    },
    {
        pattern: /bought 5 tickets has a 0.5% chance of winning/i,
        newText: "In a particular raffle, a single ticket will be randomly drawn from a bag containing all the purchased tickets. If someone who buys 3 tickets has a 0.6% chance of winning, how many tickets were bought in total?",
        newOptions: ["100 tickets", "200 tickets", "300 tickets", "500 tickets", "1,000 tickets"],
        correctOptionIndex: 3
    },
    {
        pattern: /f\(x\) = 3<sup>x<\/sup> &minus; 2, evaluate f\(5\)/i,
        newText: "If <i>f</i>(<i>x</i>) = 2<sup><i>x</i></sup> + 3, evaluate <i>f</i>(6).",
        newOptions: ["15", "64", "67", "128", "131"],
        correctOptionIndex: 2
    },
    {
        pattern: /Solve for x: 16x<sup>2<\/sup> \+ 8x \+ 1 = 0/i,
        newText: "Solve for <i>x</i>: 4<i>x</i>² + 4<i>x</i> + 1 = 0",
        newOptions: ["x = -1/2", "x = -1, 1", "x = -2", "x = 1/2", "x = 2"],
        correctOptionIndex: 0
    },
    {
        pattern: /right triangle is 24.5 square centimeters. If one of its angles measures 45/i,
        newText: "The area of a right triangle is 18 square centimeters. If one of its angles measures 45&deg;, what is the length of its hypotenuse?",
        newOptions: ["4.2 centimeters", "6 centimeters", "8.5 centimeters", "9.8 centimeters", "12 centimeters"],
        correctOptionIndex: 2
    },
    {
        pattern: /weight limit for his suitcase is 22 kilograms, and the suitcase itself weighs 3.2 kilograms. If each bag of coffee weighs 800 grams/i,
        newText: "Patrick is coming home from vacation and wants to fill one of his suitcases with bags of coffee. The weight limit for his suitcase is 20 kilograms, and the suitcase itself weighs 2.0 kilograms. If each bag of coffee weighs 600 grams, how many bags can he bring without going over the limit?",
        newOptions: ["10 bags", "15 bags", "20 bags", "30 bags", "40 bags"],
        correctOptionIndex: 3
    },
    {
        pattern: /college applicants increased in 2014 by 7%. This is 15% larger/i,
        newText: "The number of college applicants increased in 2015 by 8%. This is 20% larger than the percentage increase in 2014. What was the percentage increase in college applicants in 2014?",
        newOptions: ["2%", "4%", "5%", "6.67%", "7.5%"],
        correctOptionIndex: 3
    },
    {
        pattern: /average height of female students in a class is 64.5 inches, and the average height of male students in the class is 69 inches/i,
        newText: "The average height of female students in a class is 63 inches, and the average height of male students in the class is 68 inches. If there are 1.5 times as many female students as male students, what is the average height for the entire class?",
        newOptions: ["64.5 inches", "65.0 inches", "65.5 inches", "66.0 inches", "66.5 inches"],
        correctOptionIndex: 1
    },
    {
        pattern: /swimmer is swimming 25 meter sprints. If he swims 4 sprints in 3 minutes, 6 more sprints in 5 minutes, and then 4 final sprints in 2 minutes/i,
        newText: "A swimmer is swimming 50 meter sprints. If he swims 2 sprints in 3 minutes, 4 more sprints in 5 minutes, and then 2 final sprints in 2 minutes, what was his average speed during his sprints?",
        newOptions: ["20 meters per minute", "40 meters per minute", "50 meters per minute", "60 meters per minute", "80 meters per minute"],
        correctOptionIndex: 1
    },
    {
        pattern: /240 cans of soda and 6 veggie platters. Soda cans are purchased in sets of 6 at a price of \$2.35 per pack. Veggie platters are sold in sets of 2 for \$12.95/i,
        newText: "Julian is throwing a party. He needs to purchase 120 cans of soda and 4 veggie platters. Soda cans are purchased in sets of 6 at a price of $2.50 per pack. Veggie platters are sold in sets of 2 for $15.00. How much will he spend?",
        newOptions: ["$60.00", "$70.00", "$80.00", "$90.00", "$100.00"],
        correctOptionIndex: 2
    }
];

// Apply alterations to a question if match is found
function alterQuestionValues(q) {
    if (q.section !== 'math') return q;
    for (const alt of mathAlterations) {
        if (alt.pattern.test(q.text)) {
            return {
                ...q,
                text: alt.newText,
                options: [...alt.newOptions],
                answer: alt.correctOptionIndex
            };
        }
    }
    return q;
}

// Main logic to generate a diagnostic test
function generateDiagnosticTest(srcDir, destDir, testNumber) {
    console.log(`Generating diagnostic test ${testNumber} from ${srcDir} to ${destDir}...`);
    const questionsPath = path.join(srcDir, 'act_questions1.js');
    const questions = loadQuestions(questionsPath);

    // Group questions by section and passage to keep passages grouped
    const sections = { english: [], math: [], reading: [] };
    questions.forEach(q => {
        sections[q.section].push(q);
    });

    const processedSections = {};

    Object.keys(sections).forEach(sectionName => {
        const list = sections[sectionName];

        if (sectionName === 'math') {
            // For Math: alter values, then shuffle options, then shuffle question order (Math has no passages)
            const altered = list.map(q => {
                const altQ = alterQuestionValues(q);
                // Shuffle options
                const correctOptionText = altQ.options[altQ.answer];
                const shuffledOptions = shuffleArray([...altQ.options]);
                const newAnswerIndex = shuffledOptions.indexOf(correctOptionText);
                return {
                    ...altQ,
                    options: shuffledOptions,
                    answer: newAnswerIndex
                };
            });
            processedSections[sectionName] = shuffleArray(altered);
        } else {
            // For English and Reading: group by passage text to keep passages intact
            const passageGroups = [];
            const passageMap = new Map();

            list.forEach(q => {
                const passageKey = q.passage || 'NO_PASSAGE';
                if (!passageMap.has(passageKey)) {
                    passageMap.set(passageKey, []);
                }
                passageMap.get(passageKey).push(q);
            });

            // Convert to array of groups
            for (const [key, qGroup] of passageMap.entries()) {
                passageGroups.push({
                    passageKey: key,
                    qs: qGroup
                });
            }

            // Shuffle the passage groups
            shuffleArray(passageGroups);

            // Within each passage group, optionally shuffle options and questions
            passageGroups.forEach(group => {
                // Shuffle options for each question
                group.qs = group.qs.map(q => {
                    const correctOptionText = q.options[q.answer];
                    const shuffledOptions = shuffleArray([...q.options]);
                    const newAnswerIndex = shuffledOptions.indexOf(correctOptionText);
                    return {
                        ...q,
                        options: shuffledOptions,
                        answer: newAnswerIndex
                    };
                });
                // Shuffle the order of questions within the passage
                shuffleArray(group.qs);
            });

            // Flatten back into a list
            const flattened = [];
            passageGroups.forEach(group => {
                flattened.push(...group.qs);
            });
            processedSections[sectionName] = flattened;
        }
    });

    // Re-combine and set new IDs
    const finalQuestions = [];
    let currentId = 1;
    ['english', 'math', 'reading'].forEach(secName => {
        processedSections[secName].forEach(q => {
            q.id = currentId++;
            finalQuestions.push(q);
        });
    });

    // Serialize to JS format
    const outputJs = `// =============================================
// act_questions1.js – ACT Practice Test ${testNumber}
// Shuffled & Value-Altered Core ACT Format
// Total: 131 questions | Time: 125 minutes (2 hr 5 min)
// =============================================

const ACT_QUESTIONS1 = ${JSON.stringify(finalQuestions, null, 4)};

const ACT_SCALE_TABLE = {
    english: [
        1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 18, 19, 20,
        21, 21, 22, 23, 24, 24, 25, 25, 26, 27, 27, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35, 35, 36, 36, 36,
        36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36
    ],
    math: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 22, 23, 24, 25, 26, 26, 27, 28, 28, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35, 35, 36, 36, 36, 36, 36, 36
    ],
    reading: [
        1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
        27, 28, 29, 30, 31, 32, 33, 34, 35, 36
    ]
};

function getACTSectionScore(sectionId, rawScore) {
    const table = ACT_SCALE_TABLE[sectionId];
    if (!table) return 1;
    const idx = Math.min(rawScore, table.length - 1);
    return table[idx] || 1;
}

function getACTCompositeScore(sectionScores) {
    const scores = Object.values(sectionScores).filter(s => typeof s === 'number' && !isNaN(s));
    if (scores.length === 0) return 1;
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    return Math.round(avg);
}
`;

    fs.writeFileSync(path.join(destDir, 'act_questions1.js'), outputJs, 'utf8');
    console.log(`Generated act_questions1.js in ${destDir}.`);
}

// Generate the 3 new tests
generateDiagnosticTest('act-diagnostic-8', 'act-diagnostic-10', 13);
generateDiagnosticTest('act-diagnostic-9', 'act-diagnostic-11', 14);
generateDiagnosticTest('act-diagnostic-3', 'act-diagnostic-12', 15);

console.log("All three diagnostic test questions files generated successfully.");

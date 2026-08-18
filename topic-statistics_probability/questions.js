// =============================================
// questions.js – Topic: statistics_probability
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "What is the mean of the data set: {4, 8, 6, 10, 12}?",
        "options": [
            "8",
            "6",
            "10",
            "7.5"
        ],
        "answer": 0,
        "explanation": "Mean = Sum / Count = (4 + 8 + 6 + 10 + 12) / 5 = 40 / 5 = 8."
    },
    {
        "id": 2,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "What is the median of the data set: {15, 3, 8, 12, 7, 20, 9}?",
        "options": [
            "9",
            "8",
            "10",
            "12"
        ],
        "answer": 0,
        "explanation": "Order data from least to greatest: {3, 7, 8, 9, 12, 15, 20}. With 7 values, the middle value (4th position) is 9."
    },
    {
        "id": 3,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "What is the mode of the data set: {5, 2, 7, 5, 8, 2, 5, 9, 1}?",
        "options": [
            "5",
            "2",
            "7",
            "5 and 2"
        ],
        "answer": 0,
        "explanation": "The mode is the most frequently occurring value. The number 5 appears three times, more than any other value."
    },
    {
        "id": 4,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "What is the range of the numbers: {14, 28, 5, 33, 19, 42}?",
        "options": [
            "37",
            "42",
            "28",
            "33"
        ],
        "answer": 0,
        "explanation": "Range = Maximum – Minimum = 42 – 5 = 37."
    },
    {
        "id": 5,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "A standard six-sided die is rolled once. What is the probability of rolling a prime number?",
        "options": [
            "1/2",
            "1/3",
            "2/3",
            "1/6"
        ],
        "answer": 0,
        "explanation": "The outcomes on a die are {1, 2, 3, 4, 5, 6}. The prime numbers are {2, 3, 5} (3 outcomes). Probability = 3 / 6 = 1/2."
    },
    {
        "id": 6,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "A bag contains 4 red, 6 blue, and 5 green marbles. If one marble is drawn at random, what is the probability that it is NOT blue?",
        "options": [
            "3/5",
            "2/5",
            "1/3",
            "2/3"
        ],
        "answer": 0,
        "explanation": "Total marbles = 4 + 6 + 5 = 15. Marbles that are not blue = 4 (red) + 5 (green) = 9. Probability = 9 / 15 = 3/5."
    },
    {
        "id": 7,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "Two fair coins are flipped simultaneously. What is the probability of getting at least one head?",
        "options": [
            "3/4",
            "1/2",
            "1/4",
            "2/3"
        ],
        "answer": 0,
        "explanation": "Sample space = {HH, HT, TH, TT} (4 equally likely outcomes). Outcomes with at least one head = {HH, HT, TH} (3 outcomes). Probability = 3/4."
    },
    {
        "id": 8,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "A student scores 85, 90, and 88 on three tests. What score must the student earn on the fourth test to have an average of 90?",
        "options": [
            "97",
            "95",
            "92",
            "98"
        ],
        "answer": 0,
        "explanation": "Required total score for 4 tests = 4 · 90 = 360. Current sum = 85 + 90 + 88 = 263. Required fourth score = 360 – 263 = 97."
    },
    {
        "id": 9,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "How many different 4-digit PIN numbers can be formed using the digits 0–9 if digits CANNOT be repeated?",
        "options": [
            "5,040",
            "10,000",
            "6,561",
            "4,500"
        ],
        "answer": 0,
        "explanation": "By the fundamental counting principle (permutations): 10 · 9 · 8 · 7 = 5,040."
    },
    {
        "id": 10,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "How many ways can a committee of 3 students be chosen from a group of 8 candidates?",
        "options": [
            "56",
            "336",
            "24",
            "120"
        ],
        "answer": 0,
        "explanation": "Since order of selection does not matter, use combinations: ₈C₃ = 8! / (3! · 5!) = (8 · 7 · 6) / (3 · 2 · 1) = 56."
    },
    {
        "id": 11,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "If events A and B are independent, P(A) = 0.4, and P(B) = 0.5, what is P(A and B)?",
        "options": [
            "0.20",
            "0.90",
            "0.10",
            "0.45"
        ],
        "answer": 0,
        "explanation": "For independent events, P(A and B) = P(A) · P(B) = 0.4 · 0.5 = 0.20."
    },
    {
        "id": 12,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "If the standard deviation of a data set is 0, what can be concluded about the data values?",
        "options": [
            "All values in the data set are identical",
            "The mean of the data set is 0",
            "The data set contains no values",
            "The data is normally distributed"
        ],
        "answer": 0,
        "explanation": "Standard deviation measures dispersion. A standard deviation of 0 indicates zero variation, meaning every single value in the data set is identical to the mean."
    },
    {
        "id": 13,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "In a normal distribution, approximately what percentage of data falls within one standard deviation of the mean?",
        "options": [
            "68%",
            "95%",
            "99.7%",
            "50%"
        ],
        "answer": 0,
        "explanation": "According to the empirical rule (68-95-99.7 rule) for normal distributions, approximately 68% of the data falls within ±1 standard deviation of the mean."
    },
    {
        "id": 14,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "What is the median of the data set: {6, 10, 14, 18}?",
        "options": [
            "12",
            "14",
            "10",
            "11"
        ],
        "answer": 0,
        "explanation": "For an even number of ordered values, the median is the mean of the two middle values: (10 + 14) / 2 = 24 / 2 = 12."
    },
    {
        "id": 15,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "A card is drawn from a standard 52-card deck. What is the probability of drawing an Ace or a King?",
        "options": [
            "2/13",
            "1/13",
            "4/13",
            "8/52"
        ],
        "answer": 0,
        "explanation": "There are 4 Aces and 4 Kings (8 cards total) in a 52-card deck. P(Ace or King) = 8 / 52 = 2 / 13."
    },
    {
        "id": 16,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "A survey of 200 people found that 120 prefer coffee and 80 prefer tea. What is the probability that a randomly chosen person prefers tea?",
        "options": [
            "0.40",
            "0.60",
            "0.20",
            "0.80"
        ],
        "answer": 0,
        "explanation": "Probability = 80 / 200 = 8 / 20 = 4 / 10 = 0.40 (or 40%)."
    },
    {
        "id": 17,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "How many different ways can 5 runners finish in 1st, 2nd, and 3rd place in a race?",
        "options": [
            "60",
            "120",
            "10",
            "15"
        ],
        "answer": 0,
        "explanation": "Order matters (permutations): ₅P₃ = 5 · 4 · 3 = 60 ways."
    },
    {
        "id": 18,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "If a spinner has 8 equal sections numbered 1 through 8, what is the probability of landing on a number greater than 5?",
        "options": [
            "3/8",
            "5/8",
            "1/2",
            "1/4"
        ],
        "answer": 0,
        "explanation": "Numbers greater than 5 are {6, 7, 8} (3 outcomes out of 8). Probability = 3/8."
    },
    {
        "id": 19,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "A box plot shows a median of 45, lower quartile (Q1) of 30, and upper quartile (Q3) of 60. What is the interquartile range (IQR)?",
        "options": [
            "30",
            "15",
            "45",
            "60"
        ],
        "answer": 0,
        "explanation": "Interquartile Range IQR = Q3 – Q1 = 60 – 30 = 30."
    },
    {
        "id": 20,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "If the mean of 5 numbers is 14, what is their total sum?",
        "options": [
            "70",
            "60",
            "80",
            "56"
        ],
        "answer": 0,
        "explanation": "Since the arithmetic mean of a data set is defined as the total sum divided by the number of items (Mean = Sum / n), the total sum is calculated as: Sum = Mean · Count = 14 · 5 = 70."
    }
];

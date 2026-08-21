// =============================================
// questions.js – Topic: percentages
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "math",
        "topic": "Percentages",
        "text": "A jacket originally priced at $80 is on sale for 25% off. What is the sale price of the jacket?",
        "options": [
            "$60",
            "$64",
            "$55",
            "$70"
        ],
        "answer": 0,
        "explanation": "Discount amount = 25% of $80 = 0.25 · 80 = $20. Sale price = Original Price – Discount = $80 – $20 = $60 (or 80 · (1 – 0.25) = 80 · 0.75 = $60)."
    },
    {
        "id": 2,
        "section": "math",
        "topic": "Percentages",
        "text": "If a student answered 36 out of 45 questions correctly on a test, what percentage of the questions did the student answer correctly?",
        "options": [
            "75%",
            "80%",
            "85%",
            "90%"
        ],
        "answer": 1,
        "explanation": "Percentage = (36 / 45) · 100%. Simplifying 36/45 by dividing numerator and denominator by 9 gives 4/5 = 0.80 = 80%."
    },
    {
        "id": 3,
        "section": "math",
        "topic": "Percentages",
        "text": "A store increases the price of an item from $50 to $65. What is the percent increase in the price of the item?",
        "options": [
            "15%",
            "25%",
            "30%",
            "35%"
        ],
        "answer": 2,
        "explanation": "Percent increase = ((New Price – Old Price) / Old Price) · 100% = ((65 – 50) / 50) · 100% = (15 / 50) · 100% = 30%."
    },
    {
        "id": 4,
        "section": "math",
        "topic": "Percentages",
        "text": "What is 18% of 350?",
        "options": [
            "63",
            "54",
            "72",
            "45"
        ],
        "answer": 0,
        "explanation": "To calculate 18% of 350, convert the percentage into decimal form (0.18) and multiply by the base: 0.18 · 350 = 63."
    },
    {
        "id": 5,
        "section": "math",
        "topic": "Percentages",
        "text": "If 30% of a number n is 45, what is the value of n?",
        "options": [
            "135",
            "150",
            "120",
            "180"
        ],
        "answer": 1,
        "explanation": "0.30 · n = 45 => n = 45 / 0.30 = 450 / 3 = 150."
    },
    {
        "id": 6,
        "section": "math",
        "topic": "Percentages",
        "text": "An item costs $120. If an 8% sales tax is added, what is the total cost of the item?",
        "options": [
            "$128.00",
            "$129.60",
            "$130.00",
            "$132.40"
        ],
        "answer": 1,
        "explanation": "Tax amount = 0.08 · $120 = $9.60. Total cost = $120 + $9.60 = $129.60 (or $120 · 1.08 = $129.60)."
    },
    {
        "id": 7,
        "section": "math",
        "topic": "Percentages",
        "text": "A population of a town decreased from 25,000 to 22,500. What is the percent decrease?",
        "options": [
            "8%",
            "10%",
            "12%",
            "15%"
        ],
        "answer": 1,
        "explanation": "Decrease = 25,000 – 22,500 = 2,500. Percent decrease = (2,500 / 25,000) · 100% = 0.10 · 100% = 10%."
    },
    {
        "id": 8,
        "section": "math",
        "topic": "Percentages",
        "text": "A sweater originally costs $50. It is discounted by 20%, and then an additional 10% discount is applied to the sale price. What is the final price?",
        "options": [
            "$35.00",
            "$36.00",
            "$34.00",
            "$38.00"
        ],
        "answer": 1,
        "explanation": "Price after first discount = $50 · (1 – 0.20) = $50 · 0.80 = $40. Price after second discount = $40 · (1 – 0.10) = $40 · 0.90 = $36.00."
    },
    {
        "id": 9,
        "section": "math",
        "topic": "Percentages",
        "text": "In a class of 30 students, 18 are girls. What percentage of the class are boys?",
        "options": [
            "40%",
            "60%",
            "30%",
            "45%"
        ],
        "answer": 0,
        "explanation": "Number of boys = 30 – 18 = 12. Percentage of boys = (12 / 30) · 100% = (2/5) · 100% = 40%."
    },
    {
        "id": 10,
        "section": "math",
        "topic": "Percentages",
        "text": "If x is 40% of y, and y is 50% of z, what percentage of z is x?",
        "options": [
            "10%",
            "20%",
            "25%",
            "90%"
        ],
        "answer": 1,
        "explanation": "x = 0.40y and y = 0.50z => x = 0.40(0.50z) = 0.20z = 20% of z."
    },
    {
        "id": 11,
        "section": "math",
        "topic": "Percentages",
        "text": "A restaurant bill is $60. If you leave an 18% tip, what is the tip amount?",
        "options": [
            "$10.80",
            "$12.00",
            "$9.60",
            "$11.20"
        ],
        "answer": 0,
        "explanation": "To calculate an 18% tip on a $60 restaurant bill, multiply the bill amount by 0.18: Tip = 0.18 · $60 = $10.80."
    },
    {
        "id": 12,
        "section": "math",
        "topic": "Percentages",
        "text": "An investment of $1,000 earns 5% simple annual interest. How much total interest is earned after 3 years?",
        "options": [
            "$150",
            "$100",
            "$50",
            "$175"
        ],
        "answer": 0,
        "explanation": "Simple interest I = P · r · t = $1,000 · 0.05 · 3 = $150."
    },
    {
        "id": 13,
        "section": "math",
        "topic": "Percentages",
        "text": "The price of gas increased by 20% and then decreased by 20%. Compared to the original price, the final price is:",
        "options": [
            "4% lower",
            "The same",
            "4% higher",
            "2% lower"
        ],
        "answer": 0,
        "explanation": "Let original price = 100. After 20% increase = 100 · 1.20 = 120. After 20% decrease = 120 · 0.80 = 96. Final price is 4% lower than the original price 100."
    },
    {
        "id": 14,
        "section": "math",
        "topic": "Percentages",
        "text": "If 12 is what percent of 48?",
        "options": [
            "20%",
            "25%",
            "30%",
            "33.3%"
        ],
        "answer": 1,
        "explanation": "Percentage = (12 / 48) · 100% = (1/4) · 100% = 25%."
    },
    {
        "id": 15,
        "section": "math",
        "topic": "Percentages",
        "text": "A car dealer buys a car for $15,000 and sells it for $18,000. What is the dealer's profit percentage based on the purchase price?",
        "options": [
            "15%",
            "16.7%",
            "20%",
            "25%"
        ],
        "answer": 2,
        "explanation": "Profit = $18,000 – $15,000 = $3,000. Profit percentage = ($3,000 / $15,000) · 100% = (1/5) · 100% = 20%."
    },
    {
        "id": 16,
        "section": "math",
        "topic": "Percentages",
        "text": "What number increased by 20% equals 72?",
        "options": [
            "50",
            "60",
            "55",
            "64"
        ],
        "answer": 1,
        "explanation": "x · (1 + 0.20) = 72 => 1.20x = 72 => x = 72 / 1.20 = 60."
    },
    {
        "id": 17,
        "section": "math",
        "topic": "Percentages",
        "text": "A company’s revenue increased by 150%. If the original revenue was $200,000, what is the new revenue?",
        "options": [
            "$300,000",
            "$400,000",
            "$500,000",
            "$350,000"
        ],
        "answer": 2,
        "explanation": "Increase = 1.50 · $200,000 = $300,000. New revenue = $200,000 + $300,000 = $500,000 (or $200,000 · (1 + 1.50) = $500,000)."
    },
    {
        "id": 18,
        "section": "math",
        "topic": "Percentages",
        "text": "If 35% of a budget is $7,000, what is the total budget?",
        "options": [
            "$18,000",
            "$20,000",
            "$22,000",
            "$24,500"
        ],
        "answer": 1,
        "explanation": "0.35 · Total = $7,000 => Total = $7,000 / 0.35 = $20,000."
    },
    {
        "id": 19,
        "section": "math",
        "topic": "Percentages",
        "text": "A phone battery drops from 80% to 20% in 6 hours. On average, what percentage of full battery capacity does it lose per hour?",
        "options": [
            "8%",
            "10%",
            "12%",
            "15%"
        ],
        "answer": 1,
        "explanation": "Total percentage lost = 80% – 20% = 60%. Loss per hour = 60% / 6 = 10% per hour."
    },
    {
        "id": 20,
        "section": "math",
        "topic": "Percentages",
        "text": "If 25% of a number is equal to 40% of 50, what is the number?",
        "options": [
            "60",
            "70",
            "80",
            "90"
        ],
        "answer": 2,
        "explanation": "40% of 50 = 0.40 · 50 = 20. 25% of the number = 0.25 · x = 20 => x = 20 / 0.25 = 80."
    }
];

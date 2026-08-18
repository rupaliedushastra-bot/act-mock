// =============================================
// questions.js – Topic: sentence_structure
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Running through the park early in the morning, the sunrise was breathtaking.\n\nWhich of the following corrects the dangling modifier in the sentence above?",
        "options": [
            "Running through the park early in the morning, Maria found the sunrise breathtaking.",
            "Running through the park early in the morning, the sunrise took Maria's breath away.",
            "Early in the morning running through the park, the sunrise was breathtaking.",
            "The sunrise was breathtaking, running through the park early in the morning."
        ],
        "answer": 0,
        "explanation": "The introductory participial phrase 'Running through the park early in the morning' must modify the person doing the running ('Maria'), not 'the sunrise'. Placing 'Maria' immediately after the comma resolves the dangling modifier."
    },
    {
        "id": 2,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "The research team completed the field trials, they submitted their findings to the review committee.\n\nWhich correction fixes the comma splice?",
        "options": [
            "After the research team completed the field trials, they submitted their findings to the review committee.",
            "The research team completed the field trials, and submitted findings.",
            "Completing the field trials the research team submitted findings.",
            "The research team completed field trials, they then submitted findings."
        ],
        "answer": 0,
        "explanation": "Subordinating the first clause with 'After' creates a complex sentence that correctly connects the dependent clause to the independent clause without a comma splice."
    },
    {
        "id": 3,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which sentence demonstrates proper parallel structure?",
        "options": [
            "She enjoys hiking in the mountains, swimming in the ocean, and cycling through the countryside.",
            "She enjoys hiking in the mountains, to swim in the ocean, and cycling through the countryside.",
            "She enjoys to hike in the mountains, swimming in the ocean, and cycles through the countryside.",
            "She enjoys hiking in the mountains, swimming in the ocean, and to cycle through the countryside."
        ],
        "answer": 0,
        "explanation": "All three items in the list use the gerund (-ing) form: 'hiking...', 'swimming...', and 'cycling...', maintaining parallel grammatical structure."
    },
    {
        "id": 4,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Because the severe winter storm caused widespread power outages across the county.\n\nHow should this sentence fragment be corrected?",
        "options": [
            "Attach it to an independent clause: 'Because the severe winter storm caused widespread power outages across the county, local schools remained closed for two days.'",
            "Remove the period and add an exclamation mark",
            "Capitalize 'severe'",
            "No change needed, it is a complete sentence"
        ],
        "answer": 0,
        "explanation": "'Because...' introduces a dependent clause that cannot stand alone as a sentence. Attaching it to a main independent clause creates a complete, grammatically sound sentence."
    },
    {
        "id": 5,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Covered in thick layers of dust, the antique bookcase was discovered by the appraiser in the attic.\n\nIs the modifier used correctly?",
        "options": [
            "Yes, 'Covered in thick layers of dust' correctly modifies 'the antique bookcase'",
            "No, it modifies 'the appraiser'",
            "No, it modifies 'the attic'",
            "No, it is a dangling modifier"
        ],
        "answer": 0,
        "explanation": "The descriptive phrase 'Covered in thick layers of dust' correctly modifies the subject immediately following it, 'the antique bookcase'."
    },
    {
        "id": 6,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "The professor not only published a groundbreaking textbook but also ______ several international lectures.",
        "options": [
            "delivered",
            "delivering",
            "to deliver",
            "delivers"
        ],
        "answer": 0,
        "explanation": "Correlative conjunctions ('not only [verb]... but also [verb]') require parallel verb forms. Since 'published' is past tense, 'delivered' is required."
    },
    {
        "id": 7,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which sentence is a run-on (fused sentence) that needs correction?",
        "options": [
            "The laboratory was clean the scientists began the experiment immediately.",
            "Although the laboratory was clean, the scientists waited before starting.",
            "The laboratory was clean; therefore, the scientists began immediately.",
            "The laboratory was clean, and the scientists began the experiment immediately."
        ],
        "answer": 0,
        "explanation": "Choice A fuses two independent clauses ('The laboratory was clean' and 'the scientists began...') together with no punctuation or conjunction, forming a fused run-on sentence."
    },
    {
        "id": 8,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Tired from the long journey, the hotel bed was the most comfortable place David had ever seen.\n\nWhich edit corrects the modifier error?",
        "options": [
            "Tired from the long journey, David found the hotel bed to be the most comfortable place he had ever seen.",
            "Tired from the long journey, the hotel was welcoming to David.",
            "The hotel bed was comfortable, tired from the long journey.",
            "David's hotel bed was comfortable, tired from the journey."
        ],
        "answer": 0,
        "explanation": "'Tired from the long journey' describes David, not 'the hotel bed'. Putting 'David' immediately after the introductory phrase fixes the dangling modifier."
    },
    {
        "id": 9,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "The new software is efficient, reliable, and ______.",
        "options": [
            "cost-effective",
            "saves money",
            "it costs very little",
            "has low price"
        ],
        "answer": 0,
        "explanation": "'Efficient' and 'reliable' are adjectives; 'cost-effective' is an adjective that maintains parallel structure in the predicate."
    },
    {
        "id": 10,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which version corrects the misplaced modifier?\n\n'She served sandwiches to the children on paper plates.'",
        "options": [
            "She served sandwiches on paper plates to the children.",
            "On paper plates, the children ate sandwiches she served.",
            "She served the children sandwiches that were on paper plates.",
            "Sandwiches on paper plates were served by her to children."
        ],
        "answer": 0,
        "explanation": "In the original sentence, 'on paper plates' erroneously appears to modify 'the children'. Placing 'on paper plates' next to 'sandwiches' clarifies that the food was on the plates."
    },
    {
        "id": 11,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which of the following is a complete, grammatically correct sentence?",
        "options": [
            "Although the traffic was heavy, we arrived at the theater before the show started.",
            "While walking down the street on a sunny Tuesday afternoon.",
            "Since the company announced its new quarterly earnings report.",
            "Whenever the bell rings at the end of the school day."
        ],
        "answer": 0,
        "explanation": "Choice A contains both a dependent clause ('Although...') and a complete independent clause ('we arrived at the theater...'). The other options are sentence fragments."
    },
    {
        "id": 12,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "To succeed in college, good study habits must be practiced daily.\n\nWhich revision fixes the dangling modifier?",
        "options": [
            "To succeed in college, students must practice good study habits daily.",
            "To succeed in college, daily study habits are necessary.",
            "Practiced daily, good study habits will succeed in college.",
            "Good study habits must be practiced to succeed in college by students."
        ],
        "answer": 0,
        "explanation": "The infinitive phrase 'To succeed in college' requires an agent ('students') who will succeed, not 'good study habits'."
    },
    {
        "id": 13,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "The athlete trained rigorously, ate a balanced diet, and ______ eight hours every night.",
        "options": [
            "slept",
            "sleeping",
            "was sleeping",
            "to sleep"
        ],
        "answer": 0,
        "explanation": "Parallel structure requires past tense verbs: 'trained...', 'ate...', and 'slept...'."
    },
    {
        "id": 14,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which revision best connects these ideas without creating a run-on?\n\n'The storm was approaching. We secured the patio furniture.'",
        "options": [
            "As the storm was approaching, we secured the patio furniture.",
            "The storm was approaching, we secured the patio furniture.",
            "The storm was approaching we secured the patio furniture.",
            "Approaching was the storm, patio furniture was secured."
        ],
        "answer": 0,
        "explanation": "'As the storm was approaching, we secured the patio furniture' properly subordinates the first clause, creating a clear cause-and-effect complex sentence."
    },
    {
        "id": 15,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which sentence avoids faulty coordination?",
        "options": [
            "Because the weather was severe, the flight was delayed for three hours.",
            "The weather was severe, and the flight was delayed.",
            "The weather was severe, so therefore the flight was delayed.",
            "Being severe weather, the flight had a delay."
        ],
        "answer": 0,
        "explanation": "Using 'Because' correctly establishes the logical cause-and-effect relationship between the severe weather and the flight delay."
    },
    {
        "id": 16,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Walking into the bakery, the aroma of fresh bread filled the air.\n\nWhich revision corrects the dangling modifier?",
        "options": [
            "When I walked into the bakery, the aroma of fresh bread filled the air.",
            "Walking into the bakery, the fresh bread smelled wonderful.",
            "The aroma of fresh bread, walking into the bakery, filled the air.",
            "Filled with aroma, the bakery was walked into."
        ],
        "answer": 0,
        "explanation": "Turning the dangling participial phrase into a dependent clause with a subject ('When I walked into the bakery') eliminates the modifier error."
    },
    {
        "id": 17,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Neither the players nor the coach ______ satisfied with the referee's call.",
        "options": [
            "was",
            "were",
            "are",
            "have been"
        ],
        "answer": 0,
        "explanation": "With 'neither... nor', the verb agrees with the closer subject ('the coach', singular), requiring the singular verb 'was'."
    },
    {
        "id": 18,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which sentence contains a comma splice?",
        "options": [
            "The library closes at nine o'clock, we must finish our study session now.",
            "The library closes at nine o'clock; we must finish our study session now.",
            "Because the library closes at nine o'clock, we must finish our study session now.",
            "The library closes at nine o'clock, so we must finish our study session now."
        ],
        "answer": 0,
        "explanation": "Choice A joins two independent clauses with only a comma, which constitutes a comma splice."
    },
    {
        "id": 19,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "The committee discussed purchasing new computers, upgrading the server, and ______ the staff.",
        "options": [
            "training",
            "to train",
            "how to train",
            "trained"
        ],
        "answer": 0,
        "explanation": "Parallel structure requires a gerund ('training') to match 'purchasing' and 'upgrading'."
    },
    {
        "id": 20,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which revision best eliminates wordiness while preserving complete sentence structure?\n\n'Owing to the fact that there was an absence of sufficient evidence, the judge dismissed the case.'",
        "options": [
            "Due to a lack of sufficient evidence, the judge dismissed the case.",
            "Because evidence was absent and not sufficient, the judge dismissed the case.",
            "The judge's case dismissal happened because of insufficient evidence absence.",
            "In the absence of evidence being sufficient, the judge dismissed."
        ],
        "answer": 0,
        "explanation": "Choice A replaces the wordy 'Owing to the fact that there was an absence of' with the clean, concise phrase 'Due to a lack of sufficient evidence'."
    }
];

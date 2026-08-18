// =============================================
// act_questions1.js – ACT Practice Test 15
// Core ACT Format: English (50Q), Math (45Q), Reading (36Q)
// Total: 131 questions | Time: 125 minutes
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Choose the best way to combine these sentences:\n\"The museum opened a new exhibit. The exhibit features ancient Egyptian artifacts.\"",
        "options": [
            "Opening a new exhibit, ancient Egyptian artifacts are featured by the museum.",
            "The museum opened a new exhibit features ancient Egyptian artifacts.",
            "The museum opened a new exhibit, it features ancient Egyptian artifacts.",
            "The museum opened a new exhibit featuring ancient Egyptian artifacts."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"The museum opened a new exhibit featuring ancient Egyptian artifacts.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 2,
        "section": "english",
        "topic": "Punctuation",
        "text": "Which sentence correctly punctuates a direct address?",
        "options": [
            "Thank you Dr. Martinez for your guidance.",
            "Thank you Dr. Martinez, for your guidance.",
            "Thank you, Dr. Martinez for your guidance.",
            "Thank you, Dr. Martinez, for your guidance."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"Thank you, Dr. Martinez, for your guidance.\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"Thank you, Dr. Martinez, for your guidance.\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 3,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "The data shows that the new method is more effective then the old one.\n\nWhich correction should be made?",
        "options": [
            "then to the old one",
            "No change is needed",
            "than the old one",
            "then; the old one"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"than the old one\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 4,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which sentence correctly fixes the misplaced modifier?\n\"Walking down the street, the streetlights suddenly flickered off.\"",
        "options": [
            "Walking down the street suddenly, the streetlights flickered off.",
            "The streetlights, walking down the street, flickered off suddenly.",
            "As I walked down the street, the streetlights suddenly flickered off.",
            "No change is needed."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"As I walked down the street, the streetlights suddenly flickered off.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 5,
        "section": "english",
        "topic": "Style & Tone",
        "text": "Which revision best fixes the inconsistent tone in this sentence from a formal report?\n\"The quarterly earnings were totally awesome compared to last year's numbers.\"",
        "options": [
            "The quarterly earnings showed substantial improvement compared to last year's figures.",
            "No change is needed.",
            "OMG the earnings this quarter were amazing.",
            "The quarterly earnings were super great this year, you guys."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The quarterly earnings showed substantial improvement compared to last year's figures.\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 6,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "Which sentence would be most effective as a topic sentence for a paragraph about the benefits of bilingual education?",
        "options": [
            "This paragraph discusses bilingual education.",
            "Bilingual education offers cognitive and social advantages that extend well beyond language skills alone.",
            "Some schools teach more than one language.",
            "Language is a topic many people find interesting."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Bilingual education offers cognitive and social advantages that extend well beyond language skills alone.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 7,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Between you and I, I think the proposal needs more detail.\n\nWhich correction fixes the pronoun case error?",
        "options": [
            "Between yourself and I",
            "Between you and myself",
            "No change is needed",
            "Between you and me"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"Between you and me\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 8,
        "section": "english",
        "topic": "Style & Tone",
        "text": "Which revision best matches the formal register of an academic essay?\n\"A lot of researchers think the theory is kind of outdated now.\"",
        "options": [
            "Researchers, like, mostly think it's outdated, you know.",
            "Many researchers now consider the theory outdated.",
            "No change is needed.",
            "A whole bunch of researchers are like, this theory is old."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Many researchers now consider the theory outdated.\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 9,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which version avoids the comma splice?\n\"The lecture ran long, the students grew restless.\"",
        "options": [
            "No change is needed.",
            "The lecture ran long, however the students grew restless.",
            "The lecture ran long, the students; grew restless.",
            "The lecture ran long, so the students grew restless."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"The lecture ran long, so the students grew restless.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 10,
        "section": "english",
        "topic": "Punctuation",
        "text": "The professor recommended three books: a novel, a memoir, and a collection of essays.\n\nIs this sentence punctuated correctly?",
        "options": [
            "Yes, the colon correctly introduces the list.",
            "No, the colon should be a comma.",
            "No, a semicolon should replace the colon.",
            "No, no punctuation should follow \"books.\""
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Yes, the colon correctly introduces the list.\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"Yes, the colon correctly introduces the list.\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 11,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Me and him went to the store after practice.\n\nWhich correction fixes the pronoun error?",
        "options": [
            "Him and I went to the store after practice.",
            "Me and he went to the store after practice.",
            "He and I went to the store after practice.",
            "No change is needed."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"He and I went to the store after practice.\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 12,
        "section": "english",
        "topic": "Punctuation",
        "text": "Which sentence uses the semicolon correctly?",
        "options": [
            "The storm knocked out power across the city; and residents relied on generators.",
            "The storm knocked; out power across the city residents relied on generators.",
            "The storm knocked out power across the city; residents relied on generators for days.",
            "The storm; knocked out power across the city, residents relied on generators."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"The storm knocked out power across the city; residents relied on generators for days.\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"The storm knocked out power across the city; residents relied on generators for days.\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 13,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Less people attended the concert this year compared to last year.\n\nWhich correction should be made?",
        "options": [
            "Few people",
            "Fewer people",
            "No change is needed",
            "Lesser people"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Fewer people\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 14,
        "section": "english",
        "topic": "Style & Tone",
        "text": "Which word best fits a formal letter requesting a refund?",
        "options": [
            "Honestly, this product is total garbage, gimme my cash.",
            "I am writing to request a refund for the defective product.",
            "Yo, I need my money back for this broken thing.",
            "Hey, can you like, refund me or whatever."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"I am writing to request a refund for the defective product.\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 15,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Each employee must submit their timesheet by Friday, or they will not be paid on schedule.\n\nIn a context requiring formal, traditional agreement, which revision is most appropriate?",
        "options": [
            "Each employees must submit their timesheet by Friday.",
            "All employees must submit their timesheets by Friday, or they will not be paid on schedule.",
            "No change is needed.",
            "Each employee must submit they're timesheet by Friday."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"All employees must submit their timesheets by Friday, or they will not be paid on schedule.\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 16,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which option best fixes the faulty parallelism?\n\"The job requires strong communication skills, being able to manage time well, and to work in teams.\"",
        "options": [
            "No change is needed.",
            "The job requires strong communication skills, managing time well, and to work in teams.",
            "The job requires strong communication skills, good time management, and the ability to work in teams.",
            "The job requires strong communication, being able to manage time, and to work well."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"The job requires strong communication skills, good time management, and the ability to work in teams.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 17,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "A paragraph about a town's annual harvest festival would most benefit from which addition to engage readers?",
        "options": [
            "An unrelated paragraph about the writer's personal grocery list.",
            "A technical explanation of crop rotation methods.",
            "A long list of every vendor present at the festival for the past decade.",
            "A brief, vivid description of the festival's sights and sounds."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"A brief, vivid description of the festival's sights and sounds.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 18,
        "section": "english",
        "topic": "Style & Tone",
        "text": "Which choice best avoids wordiness?\n\"In spite of the fact that it was late, she continued to work on the report.\"",
        "options": [
            "In spite of it being late in the day, the report continued being worked on by her.",
            "Despite the lateness of the hour being what it was, she worked on.",
            "Although it was late, she continued working on the report.",
            "No change is needed."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Although it was late, she continued working on the report.\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 19,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Choose the most effective revision for sentence variety in a paragraph where every sentence currently begins with \"The\":\n\"The team practiced. The coach watched. The players improved.\"",
        "options": [
            "The team practiced; the coach watched; the players improved.",
            "The team practiced, the coach watched, the players improved.",
            "While the team practiced, the coach watched closely as the players improved.",
            "No change is needed."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"While the team practiced, the coach watched closely as the players improved.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 20,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which sentence avoids an awkward shift in subject?\n\"After finishing the marathon, a sense of accomplishment filled her.\"",
        "options": [
            "No change is needed.",
            "After finishing the marathon, she felt a sense of accomplishment.",
            "A sense of accomplishment, after finishing the marathon, filled.",
            "After finishing the marathon, accomplishment was felt."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"After finishing the marathon, she felt a sense of accomplishment.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 21,
        "section": "english",
        "topic": "Style & Tone",
        "text": "Which choice best maintains parallel structure?\n\"The new policy aims to reduce costs, improving efficiency, and to increase customer satisfaction.\"",
        "options": [
            "No change is needed.",
            "The new policy aims at reducing costs, to improve efficiency, and increase customer satisfaction.",
            "The new policy aims to reduce costs, improve efficiency, and increase customer satisfaction.",
            "The new policy aims to reduce costs, improving efficiency, and increasing customer satisfaction."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"The new policy aims to reduce costs, improve efficiency, and increase customer satisfaction.\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 22,
        "section": "english",
        "topic": "Style & Tone",
        "text": "In a formal cover letter, which underlined phrase should be revised for tone?\n\"I would be super pumped to join your team.\"",
        "options": [
            "I would be super excited, for real, to join your team.",
            "I would be enthusiastic to join your team.",
            "No change is needed.",
            "I would be thrilled, totally, to join your team."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"I would be enthusiastic to join your team.\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 23,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which sentence best uses subordination to show a cause-and-effect relationship?",
        "options": [
            "Because the factory adopted new safety protocols, accident rates dropped significantly.",
            "New safety protocols, the factory adopted, accident rates dropped.",
            "The factory adopted new safety protocols. Accident rates dropped significantly.",
            "The factory adopted new safety protocols, and, accident rates dropped."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Because the factory adopted new safety protocols, accident rates dropped significantly.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 24,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "An essay about renewable energy includes a paragraph with statistics on wind turbine efficiency. Where should this paragraph most logically be placed?",
        "options": [
            "Before the title of the essay.",
            "It does not matter where it is placed.",
            "After an introductory paragraph that establishes renewable energy as the essay's topic.",
            "At the very end, after the concluding paragraph."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"After an introductory paragraph that establishes renewable energy as the essay's topic.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 25,
        "section": "english",
        "topic": "Style & Tone",
        "text": "Which underlined word maintains the most consistent tone in an otherwise formal academic essay about economic policy?",
        "options": [
            "massive",
            "significant",
            "crazy",
            "huge"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"significant\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 26,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "PASSAGE I\n\nWith a life that spanned from a time when virtually no women could vote [1] time when women were fully accepted professionals, sculptor Mary Cassatt (1844–1926) [2] many worlds in her professional and personal career.\n\nChoose the best alternative for the underlined portion [1].",
        "options": [
            "bridging",
            "to a",
            "NO CHANGE",
            "for a"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"to a\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 27,
        "section": "english",
        "topic": "Punctuation",
        "text": "Which sentence correctly uses an em dash for emphasis?",
        "options": [
            "—The decision though difficult was ultimately the right one.",
            "The decision, though difficult was ultimately the right one—",
            "The decision though, difficult—was ultimately the right one.",
            "The decision—though difficult—was ultimately the right one."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"The decision—though difficult—was ultimately the right one.\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"The decision—though difficult—was ultimately the right one.\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 28,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "An essay's introduction currently begins with a dictionary definition of \"courage.\" A stronger alternative opening would be:",
        "options": [
            "Another, longer dictionary definition.",
            "A list of synonyms for courage.",
            "A statement that courage is hard to define.",
            "A brief anecdote illustrating an act of courage in a specific, vivid moment."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"A brief anecdote illustrating an act of courage in a specific, vivid moment.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 29,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "An essay about the history of jazz music opens with several paragraphs on its origins in New Orleans. Which sentence would best serve as an opening hook for the essay?",
        "options": [
            "Jazz is a type of music.",
            "In the early twentieth century, a new sound was taking shape in the streets of New Orleans.",
            "Many people enjoy listening to jazz.",
            "This essay will discuss jazz history."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"In the early twentieth century, a new sound was taking shape in the streets of New Orleans.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 30,
        "section": "english",
        "topic": "Style & Tone",
        "text": "Which choice eliminates unnecessary repetition?\n\"The report was clear, understandable, and easy to comprehend for all readers.\"",
        "options": [
            "The report was clear, understandable, easy, and simple to get for readers.",
            "The report was clear and easy to understand for all readers.",
            "The report, being clear and understandable, was easy to comprehend, clearly.",
            "No change is needed."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"The report was clear and easy to understand for all readers.\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 31,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "A writer is deciding whether to keep or delete a sentence about the history of paper-making in an essay focused on modern printing technology. The sentence should be:",
        "options": [
            "Deleted, because it does not directly relate to the essay's focus on modern technology.",
            "Kept, because all historical details are always relevant to any essay.",
            "Kept, because it makes the essay longer.",
            "Deleted, because historical information is never interesting to readers."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Deleted, because it does not directly relate to the essay's focus on modern technology.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 32,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "Which sentence would best conclude a persuasive essay arguing for increased funding for public transportation?",
        "options": [
            "Anyway, that's basically it about buses and trains.",
            "Investing in public transportation today will pay dividends for generations of commuters to come.",
            "Some people like buses more than cars.",
            "Public transportation exists in many cities."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Investing in public transportation today will pay dividends for generations of commuters to come.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 33,
        "section": "english",
        "topic": "Punctuation",
        "text": "Which choice correctly separates two independent clauses?",
        "options": [
            "The rain stopped the sun came out almost immediately.",
            "The rain, stopped the sun, came out almost immediately.",
            "The rain stopped, the sun came out almost immediately.",
            "The rain stopped; the sun came out almost immediately."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"The rain stopped; the sun came out almost immediately.\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"The rain stopped; the sun came out almost immediately.\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 34,
        "section": "english",
        "topic": "Punctuation",
        "text": "The recipe calls for the following ingredients flour, sugar, eggs, and butter.\n\nWhich punctuation mark should be added after \"following ingredients\"?",
        "options": [
            "a colon",
            "a comma",
            "a semicolon",
            "no punctuation is needed"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"a colon\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"a colon\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 35,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which choice eliminates the redundancy in this sentence?\n\"The final outcome of the negotiations was that both sides ultimately agreed to a compromise.\"",
        "options": [
            "The negotiations ended with both sides agreeing to a compromise.",
            "The final result, in the end, was a compromise being agreed to finally.",
            "In the end finally, both sides agreed to compromise at the end.",
            "The outcome that was final showed both sides ultimately reaching compromise."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The negotiations ended with both sides agreeing to a compromise.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 36,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "Which detail would be LEAST relevant to include in a paragraph specifically about the economic impact of a new highway?",
        "options": [
            "The increase in property values near the new highway exits.",
            "The number of jobs created during highway construction.",
            "Projected toll revenue over the next decade.",
            "The color of the construction workers' safety vests."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"The color of the construction workers' safety vests.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 37,
        "section": "english",
        "topic": "Style & Tone",
        "text": "Which version maintains a consistent, objective tone appropriate for a news article?",
        "options": [
            "OMG the city totally changed the policy on Tuesday!",
            "City officials, like, announced this huge policy thing on Tuesday.",
            "City officials announced the policy change on Tuesday.",
            "Officials announced some boring policy change, whatever."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"City officials announced the policy change on Tuesday.\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 38,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which version of this sentence is most concise without losing meaning?\n\"Due to the fact that it was thick fog, the outdoor concert was cancelled by the organizers.\"",
        "options": [
            "It being the case that it thick fog was present, the concert outdoors was cancelled.",
            "The organizers, due to the fog being thick, cancelled the concert that was outdoors.",
            "Because it was thick fog, the organizers cancelled the outdoor concert.",
            "Due to the fact of thick fog, the outdoor concert by the organizers was cancelled."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Because it was thick fog, the organizers cancelled the outdoor concert.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 39,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "A writer wants to emphasize the urgency of climate action in a concluding paragraph. Which sentence best achieves this goal?",
        "options": [
            "There are many opinions about the environment.",
            "The window for meaningful action is closing faster than many realize.",
            "Climate change is a topic some people discuss.",
            "This essay has been about climate change."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"The window for meaningful action is closing faster than many realize.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 40,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "If I would have known about the meeting, I would have attended.\n\nWhich correction fixes the verb form error?",
        "options": [
            "If I will have known about the meeting, I would attend.",
            "If I had known about the meeting, I would have attended.",
            "If I would know about the meeting, I would have attended.",
            "No change is needed."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"If I had known about the meeting, I would have attended.\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 41,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "She is one of the only students who has completed the assignment early.\n\nWhich correction fixes the agreement error?",
        "options": [
            "whom has completed",
            "who have completed",
            "who has complete",
            "No change is needed"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"who have completed\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 42,
        "section": "english",
        "topic": "Punctuation",
        "text": "Which sentence correctly uses quotation marks and punctuation together?",
        "options": [
            "She said, \"The results are ready,\" and handed me the folder.",
            "She said \"The results are ready\", and handed me the folder.",
            "She said, \"The results are ready\" and handed me the folder\".",
            "She said, \"The results are ready.\" and handed me the folder."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"She said, \"The results are ready,\" and handed me the folder.\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"She said, \"The results are ready,\" and handed me the folder.\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 43,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "The team of researchers have published their findings in a leading journal.\n\nWhich correction fixes the subject-verb agreement error?",
        "options": [
            "No change is needed",
            "are publishing",
            "were published",
            "has published"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"has published\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 44,
        "section": "english",
        "topic": "Punctuation",
        "text": "Which sentence correctly punctuates an introductory phrase?",
        "options": [
            "After the long meeting, everyone went home exhausted.",
            "After, the long meeting everyone went home exhausted.",
            "After the long meeting; everyone went home exhausted.",
            "After the long meeting everyone, went home exhausted."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"After the long meeting, everyone went home exhausted.\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"After the long meeting, everyone went home exhausted.\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 45,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "The amount of students attending the lecture surprised the professor.\n\nWhich correction should be made?",
        "options": [
            "The number of students",
            "No change is needed",
            "The amount of student",
            "An amount of students"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The number of students\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 46,
        "section": "english",
        "topic": "Style & Tone",
        "text": "Which underlined word choice best fits a scientific report describing experimental results?",
        "options": [
            "The data sort of hint at something.",
            "The data show a kind of really big connection.",
            "The data are basically showing a huge link, like, between things.",
            "The data indicate a statistically significant correlation."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"The data indicate a statistically significant correlation.\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 47,
        "section": "english",
        "topic": "Punctuation",
        "text": "The conference, scheduled for next month will be held in Chicago.\n\nWhich choice correctly punctuates the sentence?",
        "options": [
            "No change is needed.",
            "The conference scheduled, for next month will be held in Chicago.",
            "The conference, scheduled for next month, will be held in Chicago.",
            "The conference; scheduled for next month will be held in Chicago."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"The conference, scheduled for next month, will be held in Chicago.\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"The conference, scheduled for next month, will be held in Chicago.\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 48,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which revision best corrects this fragment?\n\"Because the bridge had been closed for repairs since early spring.\"",
        "options": [
            "Because the bridge had been; closed for repairs since early spring.",
            "The bridge had been closed for repairs since early spring.",
            "Because, the bridge had been closed for repairs since early spring.",
            "No change is needed."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"The bridge had been closed for repairs since early spring.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 49,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "Which sentence best supports a paragraph arguing that public libraries remain valuable in the digital age?",
        "options": [
            "Some people don't like going to libraries anymore.",
            "Libraries now offer free internet access, job-training workshops, and community programs alongside traditional book lending.",
            "Libraries are buildings that contain books.",
            "Books used to be the only thing libraries had."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Libraries now offer free internet access, job-training workshops, and community programs alongside traditional book lending.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 50,
        "section": "english",
        "topic": "Punctuation",
        "text": "Its important to check the cars oil level before a long road trip.\n\nWhich choice correctly fixes the apostrophe errors?",
        "options": [
            "It's important to check the cars oil level before a long road trip.",
            "Its' important to check the cars' oil level before a long road trip.",
            "It's important to check the car's oil level before a long road trip.",
            "No change is needed."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"It's important to check the car's oil level before a long road trip.\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"It's important to check the car's oil level before a long road trip.\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 51,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the midpoint of the segment connecting (–8, 10) and (4, –2)?",
        "options": [
            "(4, 4)",
            "(–2, 4)",
            "(2, 4)",
            "(–2, 2)"
        ],
        "answer": 1,
        "explanation": "Correct Answer: (–2, 4). Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields (–2, 4)."
    },
    {
        "id": 52,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the period of the function y = sin(x/2)?",
        "options": [
            "π",
            "π/2",
            "2π",
            "4π"
        ],
        "answer": 3,
        "explanation": "Correct Answer: 4π. Step-by-step solution: Use fundamental trigonometric definitions (sin = opp/hyp, cos = adj/hyp, tan = opp/adj) or trigonometric identities to simplify the expression, arriving at 4π."
    },
    {
        "id": 53,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "If 4x – 2 = x + 10, what is the value of x?",
        "options": [
            "6",
            "3",
            "4",
            "5"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 4. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 4 satisfies all conditions of the problem."
    },
    {
        "id": 54,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "What is the least common multiple of 6 and 14?",
        "options": [
            "36",
            "84",
            "28",
            "42"
        ],
        "answer": 3,
        "explanation": "Correct Answer: 42. Step-by-step solution: Set up the calculation using standard proportional reasoning, percentages, or order of operations. Evaluating the mathematical expression yields the exact result of 42."
    },
    {
        "id": 55,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What is the discriminant of the quadratic equation x² – 4x + 3 = 0?",
        "options": [
            "0",
            "8",
            "4",
            "2"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 4. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 4 satisfies all conditions of the problem."
    },
    {
        "id": 56,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "The interior angles of a triangle measure x, 2x, and 7x degrees. What is the value of x?",
        "options": [
            "24",
            "18",
            "15",
            "20"
        ],
        "answer": 1,
        "explanation": "Correct Answer: 18. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 18."
    },
    {
        "id": 57,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "A square has a perimeter of 40 cm. What is its area?",
        "options": [
            "100 cm²",
            "90 cm²",
            "120 cm²",
            "80 cm²"
        ],
        "answer": 0,
        "explanation": "Correct Answer: 100 cm². Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 100 cm²."
    },
    {
        "id": 58,
        "section": "math",
        "topic": "Trigonometry",
        "text": "If a right triangle has an angle of 30° and the side opposite that angle measures 5, what is the length of the hypotenuse?",
        "options": [
            "5",
            "8",
            "10",
            "5√3"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 10. Step-by-step solution: Use fundamental trigonometric definitions (sin = opp/hyp, cos = adj/hyp, tan = opp/adj) or trigonometric identities to simplify the expression, arriving at 10."
    },
    {
        "id": 59,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the distance between the points (0, 0) and (5, 12)?",
        "options": [
            "12",
            "15",
            "10",
            "13"
        ],
        "answer": 3,
        "explanation": "Correct Answer: 13. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 13."
    },
    {
        "id": 60,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "A car travels 200 miles in 4 hours. What is its average speed in miles per hour?",
        "options": [
            "50 mph",
            "60 mph",
            "70 mph",
            "40 mph"
        ],
        "answer": 0,
        "explanation": "Correct Answer: 50 mph. Step-by-step solution: Set up the calculation using standard proportional reasoning, percentages, or order of operations. Evaluating the mathematical expression yields the exact result of 50 mph."
    },
    {
        "id": 61,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "A cylinder has a radius of 5 cm and a height of 6 cm. What is its volume, in terms of π?",
        "options": [
            "150π cm³",
            "60π cm³",
            "250π cm³",
            "30π cm³"
        ],
        "answer": 0,
        "explanation": "Correct Answer: 150π cm³. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 150π cm³."
    },
    {
        "id": 62,
        "section": "math",
        "topic": "Trigonometry",
        "text": "A ladder leans against a wall, forming a 55° angle with the ground. If the ladder is 15 feet long, which expression gives the height where it touches the wall?",
        "options": [
            "15 cos(55°)",
            "15 tan(55°)",
            "15/sin(55°)",
            "15 sin(55°)"
        ],
        "answer": 3,
        "explanation": "Correct Answer: 15 sin(55°). Step-by-step solution: Use fundamental trigonometric definitions (sin = opp/hyp, cos = adj/hyp, tan = opp/adj) or trigonometric identities to simplify the expression, arriving at 15 sin(55°)."
    },
    {
        "id": 63,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Expand and simplify: (x + 4)(x – 2)",
        "options": [
            "x² – 2x – 8",
            "x² + 2x – 8",
            "x² + 6x – 8",
            "x² – 6x + 8"
        ],
        "answer": 1,
        "explanation": "Correct Answer: x² + 2x – 8. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that x² + 2x – 8 satisfies all conditions of the problem."
    },
    {
        "id": 64,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "A jar contains 50 marbles, of which 20% are blue. How many marbles are blue?",
        "options": [
            "12",
            "8",
            "10",
            "15"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 10. Step-by-step solution: Set up the calculation using standard proportional reasoning, percentages, or order of operations. Evaluating the mathematical expression yields the exact result of 10."
    },
    {
        "id": 65,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for x: 4(x + 3) = 5x – 2",
        "options": [
            "16",
            "12",
            "10",
            "14"
        ],
        "answer": 3,
        "explanation": "Correct Answer: 14. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 14 satisfies all conditions of the problem."
    },
    {
        "id": 66,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "A system of equations is given: y = 2x + 3 and y = –x + 15. What is the value of x at the point of intersection?",
        "options": [
            "5",
            "3",
            "4",
            "2"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 4. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 4 satisfies all conditions of the problem."
    },
    {
        "id": 67,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the slope of a line that is perpendicular to a line with slope –1/2?",
        "options": [
            "2",
            "–1/2",
            "1/2",
            "–2"
        ],
        "answer": 0,
        "explanation": "Correct Answer: 2. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 2."
    },
    {
        "id": 68,
        "section": "math",
        "topic": "Trigonometry",
        "text": "In a right triangle, the angle θ satisfies cos(θ) = 5/13. What is sin(θ), given the Pythagorean identity?",
        "options": [
            "8/13",
            "5/13",
            "1",
            "12/13"
        ],
        "answer": 3,
        "explanation": "Correct Answer: 12/13. Step-by-step solution: Use fundamental trigonometric definitions (sin = opp/hyp, cos = adj/hyp, tan = opp/adj) or trigonometric identities to simplify the expression, arriving at 12/13."
    },
    {
        "id": 69,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "A right triangle has legs of length 8 and 15. What is the length of the hypotenuse?",
        "options": [
            "16",
            "14",
            "17",
            "19"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 17. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 17."
    },
    {
        "id": 70,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "If g(x) = √(x + 4), what is the domain of g?",
        "options": [
            "x ≥ –4",
            "all real numbers",
            "x ≥ 4",
            "x ≤ –4"
        ],
        "answer": 0,
        "explanation": "Correct Answer: x ≥ –4. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that x ≥ –4 satisfies all conditions of the problem."
    },
    {
        "id": 71,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "What is the greatest common factor of 30 and 42?",
        "options": [
            "6",
            "15",
            "2",
            "3"
        ],
        "answer": 0,
        "explanation": "Correct Answer: 6. Step-by-step solution: Set up the calculation using standard proportional reasoning, percentages, or order of operations. Evaluating the mathematical expression yields the exact result of 6."
    },
    {
        "id": 72,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the equation of a line with slope –3 that passes through the point (0, 6)?",
        "options": [
            "y = 3x + 6",
            "y = 6x – 3",
            "y = –3x – 6",
            "y = –3x + 6"
        ],
        "answer": 3,
        "explanation": "Correct Answer: y = –3x + 6. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields y = –3x + 6."
    },
    {
        "id": 73,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "Two similar triangles have a scale factor of 1:4. If the smaller triangle has an area of 5 square units, what is the area of the larger triangle?",
        "options": [
            "100 sq units",
            "40 sq units",
            "20 sq units",
            "80 sq units"
        ],
        "answer": 3,
        "explanation": "Correct Answer: 80 sq units. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 80 sq units."
    },
    {
        "id": 74,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve the inequality: 5x – 6 > 24",
        "options": [
            "x > 5",
            "x > 30/5",
            "x > 6",
            "x < 6"
        ],
        "answer": 2,
        "explanation": "Correct Answer: x > 6. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that x > 6 satisfies all conditions of the problem."
    },
    {
        "id": 75,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "What is the value of |–12 + 4|?",
        "options": [
            "–16",
            "–8",
            "8",
            "16"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 8. Step-by-step solution: Set up the calculation using standard proportional reasoning, percentages, or order of operations. Evaluating the mathematical expression yields the exact result of 8."
    },
    {
        "id": 76,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What is the value of log₅(125)?",
        "options": [
            "2",
            "3",
            "5",
            "4"
        ],
        "answer": 1,
        "explanation": "Correct Answer: 3. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 3 satisfies all conditions of the problem."
    },
    {
        "id": 77,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Simplify: (5x³y²)(3x²y³)",
        "options": [
            "8x⁵y⁵",
            "15x⁵y⁵",
            "8x⁶y⁶",
            "15x⁶y⁶"
        ],
        "answer": 1,
        "explanation": "Correct Answer: 15x⁵y⁵. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 15x⁵y⁵ satisfies all conditions of the problem."
    },
    {
        "id": 78,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "A line has the equation 2x + 5y = 10. What is its y-intercept?",
        "options": [
            "2",
            "10",
            "1",
            "5"
        ],
        "answer": 0,
        "explanation": "Correct Answer: 2. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 2."
    },
    {
        "id": 79,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "If 4(x – 3) – 5 = 11, what is the value of x?",
        "options": [
            "5",
            "8",
            "6",
            "7"
        ],
        "answer": 3,
        "explanation": "Correct Answer: 7. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 7 satisfies all conditions of the problem."
    },
    {
        "id": 80,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the value of cos(90°)?",
        "options": [
            "1",
            "–1",
            "0",
            "undefined"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 0. Step-by-step solution: Use fundamental trigonometric definitions (sin = opp/hyp, cos = adj/hyp, tan = opp/adj) or trigonometric identities to simplify the expression, arriving at 0."
    },
    {
        "id": 81,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What is the sum of the roots of the equation x² – 10x + 21 = 0?",
        "options": [
            "21",
            "10",
            "7",
            "–10"
        ],
        "answer": 1,
        "explanation": "Correct Answer: 10. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 10 satisfies all conditions of the problem."
    },
    {
        "id": 82,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Factor completely: x² – 16",
        "options": [
            "(x – 4)²",
            "(x – 16)(x + 1)",
            "(x – 4)(x + 4)",
            "(x + 16)(x – 1)"
        ],
        "answer": 2,
        "explanation": "Correct Answer: (x – 4)(x + 4). Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that (x – 4)(x + 4) satisfies all conditions of the problem."
    },
    {
        "id": 83,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What is the vertex of the parabola y = (x – 5)² + 4?",
        "options": [
            "(5, 4)",
            "(5, –4)",
            "(4, 5)",
            "(–5, 4)"
        ],
        "answer": 0,
        "explanation": "Correct Answer: (5, 4). Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that (5, 4) satisfies all conditions of the problem."
    },
    {
        "id": 84,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the value of sin(60°)?",
        "options": [
            "√3/2",
            "1",
            "1/2",
            "√2/2"
        ],
        "answer": 0,
        "explanation": "Correct Answer: √3/2. Step-by-step solution: Use fundamental trigonometric definitions (sin = opp/hyp, cos = adj/hyp, tan = opp/adj) or trigonometric identities to simplify the expression, arriving at √3/2."
    },
    {
        "id": 85,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "A sector of a circle has a central angle of 60° and a radius of 6 cm. What is the area of the sector, in terms of π?",
        "options": [
            "12π cm²",
            "9π cm²",
            "3π cm²",
            "6π cm²"
        ],
        "answer": 3,
        "explanation": "Correct Answer: 6π cm². Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 6π cm²."
    },
    {
        "id": 86,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "A recipe requires 4/5 cup of sugar for 10 cookies. How much sugar is needed for 15 cookies, assuming a proportional increase?",
        "options": [
            "1 1/5 cups",
            "1 cup",
            "1 1/2 cups",
            "1 2/5 cups"
        ],
        "answer": 0,
        "explanation": "Correct Answer: 1 1/5 cups. Step-by-step solution: Set up the calculation using standard proportional reasoning, percentages, or order of operations. Evaluating the mathematical expression yields the exact result of 1 1/5 cups."
    },
    {
        "id": 87,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "A circle is centered at (4, –3) with a radius of 7. What is the equation of the circle?",
        "options": [
            "(x – 4)² + (y + 3)² = 7",
            "(x – 4)² – (y + 3)² = 49",
            "(x – 4)² + (y + 3)² = 49",
            "(x + 4)² + (y – 3)² = 49"
        ],
        "answer": 2,
        "explanation": "Correct Answer: (x – 4)² + (y + 3)² = 49. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields (x – 4)² + (y + 3)² = 49."
    },
    {
        "id": 88,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What is the inverse of the function f(x) = 2x – 4?",
        "options": [
            "f⁻¹(x) = (x/2) – 4",
            "f⁻¹(x) = (x + 4)/2",
            "f⁻¹(x) = 2x + 4",
            "f⁻¹(x) = (x – 4)/2"
        ],
        "answer": 1,
        "explanation": "Correct Answer: f⁻¹(x) = (x + 4)/2. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that f⁻¹(x) = (x + 4)/2 satisfies all conditions of the problem."
    },
    {
        "id": 89,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "Two lines, y = 4x + 1 and y = –1/4x – 3, are graphed on the same coordinate plane. What is true about these lines?",
        "options": [
            "They are perpendicular.",
            "They intersect but are not perpendicular.",
            "They are parallel.",
            "They are the same line."
        ],
        "answer": 0,
        "explanation": "Correct Answer: They are perpendicular.. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields They are perpendicular.."
    },
    {
        "id": 90,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for x: x/3 + 5 = 11",
        "options": [
            "15",
            "18",
            "12",
            "21"
        ],
        "answer": 1,
        "explanation": "Correct Answer: 18. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 18 satisfies all conditions of the problem."
    },
    {
        "id": 91,
        "section": "math",
        "topic": "Trigonometry",
        "text": "If cos(θ) = 0.5 and 0° < θ < 90°, what is θ?",
        "options": [
            "45°",
            "30°",
            "90°",
            "60°"
        ],
        "answer": 3,
        "explanation": "Correct Answer: 60°. Step-by-step solution: Use fundamental trigonometric definitions (sin = opp/hyp, cos = adj/hyp, tan = opp/adj) or trigonometric identities to simplify the expression, arriving at 60°."
    },
    {
        "id": 92,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "What is the volume of a rectangular box with length 4, width 3, and height 2?",
        "options": [
            "48",
            "12",
            "24",
            "9"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 24. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 24."
    },
    {
        "id": 93,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "If a is 3 more than four times b, and b = 5, what is the value of a?",
        "options": [
            "25",
            "23",
            "18",
            "28"
        ],
        "answer": 1,
        "explanation": "Correct Answer: 23. Step-by-step solution: Set up the calculation using standard proportional reasoning, percentages, or order of operations. Evaluating the mathematical expression yields the exact result of 23."
    },
    {
        "id": 94,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What is the value of x in the equation $5^x = 125$?",
        "options": [
            "3",
            "5",
            "4",
            "2"
        ],
        "answer": 0,
        "explanation": "Correct Answer: 3. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 3 satisfies all conditions of the problem."
    },
    {
        "id": 95,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "A bag contains red, blue, and green marbles in the ratio 2:1:3. If there are 60 marbles total, how many are blue?",
        "options": [
            "10",
            "30",
            "20",
            "5"
        ],
        "answer": 0,
        "explanation": "Correct Answer: 10. Step-by-step solution: Set up the calculation using standard proportional reasoning, percentages, or order of operations. Evaluating the mathematical expression yields the exact result of 10."
    },
    {
        "id": 96,
        "section": "reading",
        "topic": "Humanities",
        "text": "An essay on translation theory argues that no translation can perfectly capture a text's original meaning. The author's main claim suggests that translators must:",
        "options": [
            "Avoid translating poetry altogether",
            "Translate word-for-word with no flexibility",
            "Make interpretive choices that inevitably shape meaning",
            "Ignore the cultural context of the original text"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Make interpretive choices that inevitably shape meaning\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 97,
        "section": "reading",
        "topic": "Humanities",
        "text": "An essay on calligraphy traditions argues that the physical act of handwriting carries cultural meaning beyond communication. The author would most likely agree that:",
        "options": [
            "Handwriting is purely functional with no symbolic value",
            "The form of writing can carry as much meaning as its content",
            "Digital text has completely replaced the need for handwriting study",
            "Calligraphy has no connection to identity or culture"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"The form of writing can carry as much meaning as its content\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 98,
        "section": "reading",
        "topic": "Humanities",
        "text": "An essay on museum curation argues that the arrangement of artifacts shapes visitors' interpretation of history. The author's main point is that curation is:",
        "options": [
            "Solely about protecting fragile objects",
            "Irrelevant to how visitors understand exhibits",
            "A neutral, objective process with no influence on meaning",
            "An active interpretive act that can shape historical narrative"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"An active interpretive act that can shape historical narrative\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 99,
        "section": "reading",
        "topic": "Social Science",
        "text": "A passage discusses how social media algorithms shape political polarization. The author's central argument is most likely that:",
        "options": [
            "All users see identical content regardless of behavior",
            "Algorithms have no influence on user beliefs",
            "Polarization existed only before social media",
            "Algorithms can reinforce existing beliefs by limiting exposure to differing views"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"Algorithms can reinforce existing beliefs by limiting exposure to differing views\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 100,
        "section": "reading",
        "topic": "Humanities",
        "text": "An essay on the evolution of jazz argues that improvisation became central to the genre's identity. The author's tone toward improvisation can best be described as:",
        "options": [
            "Dismissive",
            "Appreciative",
            "Hostile",
            "Indifferent"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Appreciative\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 101,
        "section": "reading",
        "topic": "Humanities",
        "text": "An essay on modern poetry argues that free verse rejected traditional rhyme schemes to better capture natural speech patterns. The author's attitude toward free verse is best described as:",
        "options": [
            "Approving",
            "Indifferent",
            "Critical",
            "Confused"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Approving\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 102,
        "section": "reading",
        "topic": "Humanities",
        "text": "An essay on folk music traditions argues that oral storytelling preserved cultural history before written records. The author treats oral tradition as:",
        "options": [
            "Completely identical to written history",
            "A legitimate and valuable historical record",
            "An unreliable and inferior method of preservation",
            "A modern invention"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"A legitimate and valuable historical record\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 103,
        "section": "reading",
        "topic": "Literary Narrative",
        "text": "\"Even as a child, she had understood that some silences were louder than any shouting match could ever be.\"\n\nThis line most likely suggests that the character:",
        "options": [
            "Never experienced any family conflict",
            "Preferred loud environments",
            "Developed an early sensitivity to unspoken tension",
            "Grew up in a household with constant arguing"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Developed an early sensitivity to unspoken tension\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 104,
        "section": "reading",
        "topic": "Social Science",
        "text": "A passage compares consumer spending patterns before and after a major recession. The author primarily organizes the passage by:",
        "options": [
            "Avoiding any reference to data",
            "Listing unrelated anecdotes",
            "Presenting a chronological before-and-after comparison",
            "Focusing solely on one individual's spending habits"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Presenting a chronological before-and-after comparison\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 105,
        "section": "reading",
        "topic": "Literary Narrative",
        "text": "\"The city at night looked nothing like the city she remembered—brighter, louder, and somehow lonelier all at once.\"\n\nThis passage suggests the character's relationship with the city is best described as:",
        "options": [
            "Complex, marked by both familiarity and alienation",
            "One of total rejection",
            "Entirely positive and uncomplicated",
            "Completely indifferent"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Complex, marked by both familiarity and alienation\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 106,
        "section": "reading",
        "topic": "Natural Science",
        "text": "A passage on plate tectonics explains that the Pacific Ring of Fire experiences frequent seismic activity. According to the passage, this is primarily because:",
        "options": [
            "Earthquakes only occur near coastlines",
            "Multiple tectonic plate boundaries converge in that region",
            "Volcanic activity is unrelated to tectonic plates",
            "The ocean floor never moves"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Multiple tectonic plate boundaries converge in that region\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 107,
        "section": "reading",
        "topic": "Natural Science",
        "text": "A passage explains that fireflies use bioluminescence to signal mates in darkness by emitting light patterns and observing their responses. This process is best compared to:",
        "options": [
            "A type of camouflage",
            "A method of producing light",
            "A biological form of visual signaling method",
            "A way of storing food"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"A biological form of visual signaling method\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 108,
        "section": "reading",
        "topic": "Social Science",
        "text": "A passage discusses how remote work has reshaped expectations around office attendance since 2020. The author suggests that the shift has primarily:",
        "options": [
            "Made commuting more popular than before",
            "Changed how companies define productivity and presence",
            "Eliminated all in-person collaboration permanently",
            "Had no measurable effect on company culture"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Changed how companies define productivity and presence\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 109,
        "section": "reading",
        "topic": "Natural Science",
        "text": "A passage explains that coral bleaching occurs when corals expel the symbiotic algae living in their tissues. According to the passage, this expulsion is most directly triggered by:",
        "options": [
            "The presence of fish predators",
            "A surplus of nutrients",
            "Increased water temperatures",
            "A decrease in sunlight"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Increased water temperatures\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 110,
        "section": "reading",
        "topic": "Natural Science",
        "text": "A passage on glacial retreat notes that melting ice exposes darker rock and soil, which absorb more solar heat. This process is best described as:",
        "options": [
            "Unrelated to global temperature changes",
            "A process that has no effect on melting rates",
            "A phenomenon limited to tropical regions",
            "A feedback loop that accelerates further melting"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"A feedback loop that accelerates further melting\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 111,
        "section": "reading",
        "topic": "Literary Narrative",
        "text": "\"The garden had grown wild in his absence, vines creeping over the fence he had once kept so carefully trimmed.\"\n\nThis image most likely symbolizes:",
        "options": [
            "A sudden burst of plant growth due to rain",
            "The character's renewed interest in gardening",
            "Neglect and the passage of time",
            "The character's arrival at a brand-new home"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Neglect and the passage of time\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 112,
        "section": "reading",
        "topic": "Humanities",
        "text": "A passage on the history of the novel argues that the rise of the printing press directly enabled longer prose narratives to reach wider audiences. The author's main purpose is to:",
        "options": [
            "Explain a historical cause-and-effect relationship",
            "Describe the physical mechanics of a printing press",
            "Criticize the printing press",
            "Argue that novels existed before printing"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Explain a historical cause-and-effect relationship\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 113,
        "section": "reading",
        "topic": "Natural Science",
        "text": "A passage explains that deep ocean ecosystems near hydrothermal vents rely on chemosynthesis rather than photosynthesis. This distinction matters because:",
        "options": [
            "Those ecosystems require more sunlight than shallow ones",
            "Sunlight does not reach those depths",
            "Hydrothermal vents block all chemical reactions",
            "Chemosynthesis only occurs on land"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Sunlight does not reach those depths\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 114,
        "section": "reading",
        "topic": "Social Science",
        "text": "A passage examines the economic impact of automation on manufacturing jobs. The author most likely structures the passage to:",
        "options": [
            "Argue that automation has no economic effects",
            "Focus exclusively on historical manufacturing methods",
            "Weigh both the job losses and new opportunities created by automation",
            "Present only one perspective without acknowledging complexity"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Weigh both the job losses and new opportunities created by automation\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 115,
        "section": "reading",
        "topic": "Humanities",
        "text": "An essay on classical architecture notes that Greek columns followed strict proportional rules. The author suggests that these rules were primarily intended to:",
        "options": [
            "Achieve a sense of visual harmony and balance",
            "Reduce construction costs",
            "Make buildings collapse less often",
            "Confuse foreign visitors"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Achieve a sense of visual harmony and balance\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 116,
        "section": "reading",
        "topic": "Natural Science",
        "text": "A passage explains that vaccines work by training the immune system to recognize specific pathogens. According to the passage, this training primarily involves:",
        "options": [
            "Introducing a harmless form or piece of the pathogen",
            "Directly killing all bacteria in the body",
            "Preventing the immune system from functioning",
            "Removing the immune system's memory of past infections"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Introducing a harmless form or piece of the pathogen\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 117,
        "section": "reading",
        "topic": "Social Science",
        "text": "A passage examines how childhood access to libraries correlates with later academic achievement. The author most likely uses this correlation to argue for:",
        "options": [
            "Increased investment in public library access",
            "Eliminating school curricula entirely",
            "A direct, unrelated point about funding for sports",
            "Reducing public funding for libraries"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Increased investment in public library access\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 118,
        "section": "reading",
        "topic": "Social Science",
        "text": "A passage on global trade discusses how tariffs affect both domestic producers and consumers. The author likely concludes that tariffs:",
        "options": [
            "Have been proven completely ineffective in all cases",
            "Create trade-offs that benefit some groups while burdening others",
            "Benefit everyone equally with no downsides",
            "Only matter to large corporations"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Create trade-offs that benefit some groups while burdening others\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 119,
        "section": "reading",
        "topic": "Humanities",
        "text": "An essay on film history argues that the transition from silent films to \"talkies\" changed acting styles dramatically. The author supports this claim primarily by:",
        "options": [
            "Arguing that acting styles never changed",
            "Ignoring all examples from the era",
            "Describing specific changes in performance technique",
            "Focusing only on box office numbers"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Describing specific changes in performance technique\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 120,
        "section": "reading",
        "topic": "Social Science",
        "text": "A passage discusses how census data informs the allocation of government resources. The author's primary purpose is most likely to:",
        "options": [
            "Argue that census data should be abolished",
            "Explain the practical importance of accurate demographic data",
            "Focus only on the history of census-taking",
            "Criticize all forms of government data collection"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Explain the practical importance of accurate demographic data\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 121,
        "section": "reading",
        "topic": "Natural Science",
        "text": "A passage on bird migration explains that some species rely on magnetic fields to navigate. According to the passage, this ability is best described as:",
        "options": [
            "Limited only to nocturnal species",
            "An innate biological sense",
            "A learned behavior taught by parent birds",
            "A random and unreliable process"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"An innate biological sense\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 122,
        "section": "reading",
        "topic": "Literary Narrative",
        "text": "\"She laughed at the joke, though the sound felt hollow even to her own ears, as if it belonged to someone else entirely.\"\n\nThis detail most strongly suggests that the character:",
        "options": [
            "Is masking her true feelings",
            "Has never laughed before",
            "Dislikes the person who told the joke",
            "Genuinely finds the joke funny"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Is masking her true feelings\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 123,
        "section": "reading",
        "topic": "Natural Science",
        "text": "A passage explains that antibiotic resistance develops when bacteria are repeatedly exposed to sub-lethal doses of antibiotics. According to the passage, the primary mechanism behind this resistance is:",
        "options": [
            "A decrease in bacterial reproduction rates",
            "Bacteria intentionally avoiding antibiotics",
            "Random chance with no biological basis",
            "Natural selection favoring resistant bacterial strains"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"Natural selection favoring resistant bacterial strains\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 124,
        "section": "reading",
        "topic": "Social Science",
        "text": "A passage examines how access to microloans affected small business ownership among women in rural communities. The author most likely includes statistical data to:",
        "options": [
            "Replace the need for a clear thesis",
            "Support the argument with concrete evidence",
            "Entertain readers with unrelated numbers",
            "Confuse the central claim"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Support the argument with concrete evidence\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 125,
        "section": "reading",
        "topic": "Literary Narrative",
        "text": "\"The letter sat unopened on the table for three days, a small paper monument to everything he was afraid to know.\"\n\nThe phrase \"paper monument\" most likely suggests that the letter represents:",
        "options": [
            "A gift from a stranger",
            "A significant, emotionally weighted symbol",
            "A historical artifact",
            "A minor, unimportant object"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"A significant, emotionally weighted symbol\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 126,
        "section": "reading",
        "topic": "Literary Narrative",
        "text": "\"By the time the train pulled away, she realized she had said everything except the one thing she meant to say.\"\n\nThis ending most strongly conveys a sense of:",
        "options": [
            "Complete resolution and satisfaction",
            "Total indifference",
            "Joyful anticipation",
            "Missed opportunity and regret"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"Missed opportunity and regret\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 127,
        "section": "reading",
        "topic": "Literary Narrative",
        "text": "\"He answered every question carefully, choosing each word as though it might be weighed and measured later.\"\n\nThis detail suggests that the character is:",
        "options": [
            "Refusing to answer at all",
            "Speaking carelessly",
            "Angry at the person asking questions",
            "Being deliberate and cautious in conversation"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"Being deliberate and cautious in conversation\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 128,
        "section": "reading",
        "topic": "Literary Narrative",
        "text": "\"He stood at the threshold for a long moment before stepping inside, as if crossing into the house meant crossing into a version of himself he no longer recognized.\"\n\nThis sentence suggests that the character feels:",
        "options": [
            "Apprehensive about a personal change",
            "Excited to return home",
            "Completely unaffected by the house",
            "Eager to leave immediately"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Apprehensive about a personal change\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 129,
        "section": "reading",
        "topic": "Literary Narrative",
        "text": "\"The old fisherman's hands, weathered and cracked from decades at sea, moved with a precision that seemed at odds with their roughness, untangling the net as though it were silk.\"\n\nThis description primarily suggests that the fisherman:",
        "options": [
            "Possesses a practiced expertise despite physical wear",
            "Is new to fishing",
            "Has lost his skill due to age",
            "Dislikes his profession"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Possesses a practiced expertise despite physical wear\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 130,
        "section": "reading",
        "topic": "Social Science",
        "text": "A passage discusses how minimum wage increases affect small business hiring decisions. The author most likely presents this topic as:",
        "options": [
            "A settled issue with no disagreement among economists",
            "An issue unrelated to economics",
            "A purely historical topic with no modern relevance",
            "A complex issue with competing perspectives and trade-offs"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"A complex issue with competing perspectives and trade-offs\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    },
    {
        "id": 131,
        "section": "reading",
        "topic": "Natural Science",
        "text": "A passage explains that mutations in DNA can be either harmful, neutral, or beneficial depending on context. The author's tone toward mutation is best described as:",
        "options": [
            "Focused only on harmful effects",
            "Dismissive of its importance",
            "Balanced and explanatory",
            "Entirely negative"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Balanced and explanatory\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage."
    }
];

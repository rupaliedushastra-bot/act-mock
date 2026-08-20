// =============================================
// act_questions1.js – ACT Practice Test 1
// Core ACT Format: English (50Q), Math (45Q), Reading (36Q)
// Total: 131 questions
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "english",
        "topic": "Punctuation",
        "text": "The committee members, who had been meeting for three hours finally reached a consensus on the proposed budget.\n\nWhich of the following best corrects the punctuation error in the sentence above?",
        "options": [
            "The committee members, who had been meeting for three hours, finally reached a consensus on the proposed budget.",
            "The committee members who had been meeting for three hours, finally reached a consensus on the proposed budget.",
            "The committee members, who had been meeting for three hours finally, reached a consensus on the proposed budget.",
            "The committee members who had been meeting for three hours finally reached a consensus on the proposed budget."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The committee members, who had been meeting for three hours, finally reached a consensus on the proposed budget.\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"The committee members, who had been meeting for three hours, finally reached a consensus on the proposed budget.\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 2,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Neither the manager nor the employees was informed about the sudden change in policy.\n\nWhich correction should be made to the underlined verb?",
        "options": [
            "were",
            "has been",
            "is",
            "No change needed"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"were\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 3,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Running through the park early in the morning, the sunrise was breathtaking to Maria.\n\nWhich revision corrects the dangling modifier?",
        "options": [
            "Running through the park early in the morning, Maria found the sunrise breathtaking.",
            "Maria, running through the park early in the morning, the sunrise was breathtaking.",
            "The sunrise was breathtaking to Maria, running through the park early in the morning.",
            "Early in the morning, running through the park, the sunrise was breathtaking to Maria."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Running through the park early in the morning, Maria found the sunrise breathtaking.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 4,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "A student is writing an essay about climate change and wants to add a concluding sentence to a paragraph about rising sea levels. Which sentence best concludes the paragraph while maintaining a formal, evidence-based tone?",
        "options": [
            "These rising sea levels represent a measurable and accelerating threat to coastal populations worldwide.",
            "It's really scary how much the oceans are rising these days.",
            "Someone should definitely do something about all this water.",
            "Sea levels have always changed throughout history, so maybe it's not that big a deal."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"These rising sea levels represent a measurable and accelerating threat to coastal populations worldwide.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 5,
        "section": "english",
        "topic": "Style & Tone",
        "text": "Which of the following alternatives to the underlined portion would NOT be acceptable?\n\nThe scientist carefully documented her findings, recording every detail with precision.",
        "options": [
            "meticulously noted",
            "sloppily jotted down",
            "thoroughly recorded",
            "methodically logged"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"sloppily jotted down\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 6,
        "section": "english",
        "topic": "Punctuation",
        "text": "Which of the following punctuation choices best completes the sentence?\n\nAfter working at the lab for over a decade, Dr. Vance had collected thousands of samples; nevertheless, she remained excited by every new discovery.",
        "options": [
            "samples; nevertheless,",
            "samples, nevertheless,",
            "samples nevertheless",
            "samples: nevertheless"
        ],
        "answer": 0,
        "explanation": "A semicolon followed by a conjunctive adverb ('nevertheless') and a comma correctly joins two independent clauses."
    },
    {
        "id": 7,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Select the option that correctly satisfies subject-verb agreement in the sentence below.\n\nEach of the research assistants ______ responsible for logging their daily lab observations before leaving.",
        "options": [
            "are",
            "is",
            "were",
            "have been"
        ],
        "answer": 1,
        "explanation": "The indefinite pronoun 'Each' is singular and requires a singular verb ('is')."
    },
    {
        "id": 8,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which revision best corrects the comma splice in the sentence below?\n\nThe storm blew across the valley, power lines were knocked down in three counties.",
        "options": [
            "The storm blew across the valley power lines were knocked down in three counties.",
            "The storm blew across the valley; power lines were knocked down in three counties.",
            "The storm blew across the valley, and power lines, were knocked down in three counties.",
            "The storm blew across the valley power lines, were knocked down in three counties."
        ],
        "answer": 1,
        "explanation": "A semicolon properly connects two independent clauses without creating a run-on or comma splice."
    },
    {
        "id": 9,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "The author is considering adding the following sentence to the paragraph:\n\n'Solar panels convert sunlight directly into electricity using semiconductor materials.'\n\nShould the author make this addition to a paragraph discussing the history of renewable energy policy?",
        "options": [
            "Yes, because it provides essential technical detail about how solar energy works.",
            "Yes, because it explains why solar energy is superior to other forms of energy.",
            "No, because it strays from the paragraph's focus on policy development to describe a technical process.",
            "No, because solar panels are not relevant to renewable energy discussion."
        ],
        "answer": 2,
        "explanation": "The proposed addition introduces technical specifics about solar technology, which interrupts the paragraph's primary focus on energy policy history."
    },
    {
        "id": 10,
        "section": "english",
        "topic": "Punctuation",
        "text": "Which choice correctly punctuates the possessive noun in the sentence below?\n\nThe ______ enthusiasm for the community project was evident in their active participation.",
        "options": [
            "neighbors",
            "neighbor's",
            "neighbors'",
            "neighbors's"
        ],
        "answer": 2,
        "explanation": "The plural possessive form 'neighbors'' correctly indicates that the enthusiasm belongs to multiple neighbors."
    },
    {
        "id": 11,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Although the archival research took over five months to complete, the historian uncovered previously lost letters from the treaty negotiations.\n\nWhich of the following best describes the structural function of the underlined introductory clause?",
        "options": [
            "It serves as a dependent clause that establishes context for the independent main clause.",
            "It functions as an independent clause that can stand alone as a complete sentence.",
            "It is a misplaced modifier that incorrectly modifies the treaty.",
            "It forms a comma splice when joined with the main clause."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"It serves as a dependent clause that establishes context for the independent main clause.\". The clause begins with the subordinating conjunction 'Although' and contains a subject and verb, making it a dependent clause properly joined by a comma to the main clause."
    },
    {
        "id": 12,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Neither the principal nor the teachers ______ able to resolve the schedule conflict before the assembly.\n\nWhich verb choice correctly completes the sentence?",
        "options": [
            "were",
            "was",
            "is",
            "has been"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"were\". When subject elements are joined by 'neither... nor', the verb agrees in number with the closer subject noun ('teachers', which is plural)."
    },
    {
        "id": 13,
        "section": "english",
        "topic": "Transitions",
        "text": "The architectural team completed the structural foundation ahead of schedule; ______, subsequent material supply delays postponed the grand opening by two weeks.\n\nWhich transition word best connects the two clauses?",
        "options": [
            "nevertheless,",
            "similarly,",
            "for instance,",
            "in addition,"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"nevertheless,\". The second clause introduces an unexpected contrast/setback to the earlier success. 'Nevertheless' accurately conveys this contrasting relationship."
    },
    {
        "id": 14,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "A student is writing a paragraph about rising sea levels and wants a concluding sentence that maintains a formal, evidence-based tone. Which sentence best fits?",
        "options": [
            "These rising sea levels represent a measurable and accelerating threat to coastal populations worldwide.",
            "It's really scary how much the oceans are rising these days.",
            "Someone should definitely do something about all this water.",
            "Sea levels have always changed throughout history, so maybe it's not that big a deal."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"These rising sea levels represent a measurable and accelerating threat to coastal populations worldwide.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 15,
        "section": "english",
        "topic": "Style & Tone",
        "text": "The scientist carefully documented her findings, recording every detail with precision.\n\nWhich alternative to the underlined phrase \"recording every detail with precision\" would NOT be acceptable in this formal context?",
        "options": [
            "meticulously noting each detail",
            "sloppily jotting things down",
            "thoroughly recording each observation",
            "methodically logging every detail"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"sloppily jotting things down\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 16,
        "section": "english",
        "topic": "Punctuation",
        "text": "The hikers packed: water, energy bars, and a first aid kit before setting out.\n\nWhich choice correctly punctuates the sentence?",
        "options": [
            "The hikers packed water, energy bars, and a first aid kit before setting out.",
            "The hikers packed; water, energy bars, and a first aid kit before setting out.",
            "The hikers packed, water, energy bars, and a first aid kit before setting out.",
            "No change is needed."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The hikers packed water, energy bars, and a first aid kit before setting out.\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"The hikers packed water, energy bars, and a first aid kit before setting out.\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 17,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Each of the students were required to submit their project by Friday.\n\nWhich correction fixes the subject-verb agreement error?",
        "options": [
            "was required",
            "have been required",
            "are required",
            "No change is needed"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"was required\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 18,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Choose the option that best combines these two sentences without creating a run-on:\n\"The bridge was closed for repairs. Commuters had to take a longer route.\"",
        "options": [
            "Because the bridge was closed for repairs, commuters had to take a longer route.",
            "The bridge was closed for repairs commuters had to take a longer route.",
            "The bridge was closed for repairs, and, commuters had to take a longer route.",
            "The bridge being closed for repairs commuters had to take a longer route."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Because the bridge was closed for repairs, commuters had to take a longer route.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 19,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "A writer wants to add a transition sentence between a paragraph about the benefits of solar energy and one about its limitations. Which sentence works best?",
        "options": [
            "Despite these advantages, solar energy still faces several practical challenges.",
            "Solar energy is great and everyone should use it.",
            "In conclusion, solar power is the future of all energy production.",
            "Anyway, let's talk about something else now."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Despite these advantages, solar energy still faces several practical challenges.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 20,
        "section": "english",
        "topic": "Punctuation",
        "text": "My sister, whom I admire greatly graduated from medical school last spring.\n\nWhich choice corrects the sentence?",
        "options": [
            "My sister, whom I admire greatly, graduated from medical school last spring.",
            "My sister whom I admire greatly, graduated from medical school last spring.",
            "My sister, whom I admire greatly. Graduated from medical school last spring.",
            "My sister whom, I admire greatly graduated from medical school last spring."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"My sister, whom I admire greatly, graduated from medical school last spring.\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"My sister, whom I admire greatly, graduated from medical school last spring.\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 21,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "By the time the guests arrive, she will have cooked dinner for three hours already.\n\nWhich verb tense best replaces the underlined phrase \"will have cooked\" for logical consistency?",
        "options": [
            "will have been cooking",
            "cooks",
            "was cooking",
            "No change is needed"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"will have been cooking\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 22,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which version of this sentence is most concise without losing meaning?\n\"Due to the fact that it was raining heavily, the outdoor concert was cancelled by the organizers.\"",
        "options": [
            "Because it was raining heavily, the organizers cancelled the outdoor concert.",
            "Due to the fact of heavy rain, the outdoor concert by the organizers was cancelled.",
            "It being the case that it rained heavily, the concert outdoors was cancelled.",
            "The organizers, due to the rain being heavy, cancelled the concert that was outdoors."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Because it was raining heavily, the organizers cancelled the outdoor concert.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 23,
        "section": "english",
        "topic": "Style & Tone",
        "text": "Which underlined word maintains the most consistent tone in an otherwise formal academic essay about economic policy?",
        "options": [
            "significant",
            "huge",
            "massive",
            "crazy"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"significant\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 24,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "An essay about the history of jazz music opens with several paragraphs on its origins in New Orleans. Which sentence would best serve as an opening hook for the essay?",
        "options": [
            "In the early twentieth century, a new sound was taking shape in the streets of New Orleans.",
            "Jazz is a type of music.",
            "This essay will discuss jazz history.",
            "Many people enjoy listening to jazz."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"In the early twentieth century, a new sound was taking shape in the streets of New Orleans.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 25,
        "section": "english",
        "topic": "Punctuation",
        "text": "The recipe calls for the following ingredients flour, sugar, eggs, and butter.\n\nWhich punctuation mark should be added after \"following ingredients\"?",
        "options": [
            "a colon",
            "a semicolon",
            "a comma",
            "no punctuation is needed"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"a colon\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"a colon\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 26,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "The team of researchers have published their findings in a leading journal.\n\nWhich correction fixes the subject-verb agreement error?",
        "options": [
            "has published",
            "are publishing",
            "were published",
            "No change is needed"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"has published\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 27,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which choice eliminates the redundancy in this sentence?\n\"The final outcome of the negotiations was that both sides ultimately agreed to a compromise.\"",
        "options": [
            "The negotiations ended with both sides agreeing to a compromise.",
            "The outcome that was final showed both sides ultimately reaching compromise.",
            "In the end finally, both sides agreed to compromise at the end.",
            "The final result, in the end, was a compromise being agreed to finally."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The negotiations ended with both sides agreeing to a compromise.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 28,
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
        "id": 29,
        "section": "english",
        "topic": "Style & Tone",
        "text": "Which revision best fixes the inconsistent tone in this sentence from a formal report?\n\"The quarterly earnings were totally awesome compared to last year's numbers.\"",
        "options": [
            "The quarterly earnings showed substantial improvement compared to last year's figures.",
            "The quarterly earnings were super great this year, you guys.",
            "OMG the earnings this quarter were amazing.",
            "No change is needed."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The quarterly earnings showed substantial improvement compared to last year's figures.\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 30,
        "section": "english",
        "topic": "Punctuation",
        "text": "Its important to check the cars oil level before a long road trip.\n\nWhich choice correctly fixes the apostrophe errors?",
        "options": [
            "It's important to check the car's oil level before a long road trip.",
            "Its' important to check the cars' oil level before a long road trip.",
            "It's important to check the cars oil level before a long road trip.",
            "No change is needed."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"It's important to check the car's oil level before a long road trip.\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"It's important to check the car's oil level before a long road trip.\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 31,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Between you and I, I think the proposal needs more detail.\n\nWhich correction fixes the pronoun case error?",
        "options": [
            "Between you and me",
            "Between you and myself",
            "Between yourself and I",
            "No change is needed"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Between you and me\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 32,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Choose the best way to combine these sentences:\n\"The museum opened a new exhibit. The exhibit features ancient Egyptian artifacts.\"",
        "options": [
            "The museum opened a new exhibit featuring ancient Egyptian artifacts.",
            "The museum opened a new exhibit, it features ancient Egyptian artifacts.",
            "The museum opened a new exhibit features ancient Egyptian artifacts.",
            "Opening a new exhibit, ancient Egyptian artifacts are featured by the museum."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The museum opened a new exhibit featuring ancient Egyptian artifacts.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 33,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "Which sentence best supports a paragraph arguing that public libraries remain valuable in the digital age?",
        "options": [
            "Libraries now offer free internet access, job-training workshops, and community programs alongside traditional book lending.",
            "Books used to be the only thing libraries had.",
            "Some people don't like going to libraries anymore.",
            "Libraries are buildings that contain books."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Libraries now offer free internet access, job-training workshops, and community programs alongside traditional book lending.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 34,
        "section": "english",
        "topic": "Style & Tone",
        "text": "In a formal cover letter, which underlined phrase should be revised for tone?\n\"I would be super pumped to join your team.\"",
        "options": [
            "I would be enthusiastic to join your team.",
            "I would be thrilled, totally, to join your team.",
            "I would be super excited, for real, to join your team.",
            "No change is needed."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"I would be enthusiastic to join your team.\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 35,
        "section": "english",
        "topic": "Punctuation",
        "text": "The conference, scheduled for next month will be held in Chicago.\n\nWhich choice correctly punctuates the sentence?",
        "options": [
            "The conference, scheduled for next month, will be held in Chicago.",
            "The conference scheduled, for next month will be held in Chicago.",
            "The conference; scheduled for next month will be held in Chicago.",
            "No change is needed."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The conference, scheduled for next month, will be held in Chicago.\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"The conference, scheduled for next month, will be held in Chicago.\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 36,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "If I would have known about the meeting, I would have attended.\n\nWhich correction fixes the verb form error?",
        "options": [
            "If I had known about the meeting, I would have attended.",
            "If I would know about the meeting, I would have attended.",
            "If I will have known about the meeting, I would attend.",
            "No change is needed."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"If I had known about the meeting, I would have attended.\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 37,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which version avoids the comma splice?\n\"The lecture ran long, the students grew restless.\"",
        "options": [
            "The lecture ran long, so the students grew restless.",
            "The lecture ran long, the students; grew restless.",
            "The lecture ran long, however the students grew restless.",
            "No change is needed."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The lecture ran long, so the students grew restless.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 38,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "An essay about renewable energy includes a paragraph with statistics on wind turbine efficiency. Where should this paragraph most logically be placed?",
        "options": [
            "After an introductory paragraph that establishes renewable energy as the essay's topic.",
            "Before the title of the essay.",
            "At the very end, after the concluding paragraph.",
            "It does not matter where it is placed."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"After an introductory paragraph that establishes renewable energy as the essay's topic.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 39,
        "section": "english",
        "topic": "Style & Tone",
        "text": "Which choice best maintains parallel structure?\n\"The new policy aims to reduce costs, improving efficiency, and to increase customer satisfaction.\"",
        "options": [
            "The new policy aims to reduce costs, improve efficiency, and increase customer satisfaction.",
            "The new policy aims to reduce costs, improving efficiency, and increasing customer satisfaction.",
            "The new policy aims at reducing costs, to improve efficiency, and increase customer satisfaction.",
            "No change is needed."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The new policy aims to reduce costs, improve efficiency, and increase customer satisfaction.\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 40,
        "section": "english",
        "topic": "Punctuation",
        "text": "Which sentence uses the semicolon correctly?",
        "options": [
            "The storm knocked out power across the city; residents relied on generators for days.",
            "The storm knocked out power across the city; and residents relied on generators.",
            "The storm; knocked out power across the city, residents relied on generators.",
            "The storm knocked; out power across the city residents relied on generators."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The storm knocked out power across the city; residents relied on generators for days.\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"The storm knocked out power across the city; residents relied on generators for days.\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 41,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "She is one of the only students who has completed the assignment early.\n\nWhich correction fixes the agreement error?",
        "options": [
            "who have completed",
            "who has complete",
            "whom has completed",
            "No change is needed"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"who have completed\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 42,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Choose the most effective revision for sentence variety in a paragraph where every sentence currently begins with \"The\":\n\"The team practiced. The coach watched. The players improved.\"",
        "options": [
            "While the team practiced, the coach watched closely as the players improved.",
            "The team practiced, the coach watched, the players improved.",
            "The team practiced; the coach watched; the players improved.",
            "No change is needed."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"While the team practiced, the coach watched closely as the players improved.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 43,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "Which detail would be LEAST relevant to include in a paragraph specifically about the economic impact of a new highway?",
        "options": [
            "The number of jobs created during highway construction.",
            "The color of the construction workers' safety vests.",
            "The increase in property values near the new highway exits.",
            "Projected toll revenue over the next decade."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"The color of the construction workers' safety vests.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 44,
        "section": "english",
        "topic": "Style & Tone",
        "text": "Which underlined word choice best fits a scientific report describing experimental results?",
        "options": [
            "The data indicate a statistically significant correlation.",
            "The data show a kind of really big connection.",
            "The data are basically showing a huge link, like, between things.",
            "The data sort of hint at something."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The data indicate a statistically significant correlation.\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 45,
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
        "id": 46,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Each employee must submit their timesheet by Friday, or they will not be paid on schedule.\n\nIn a context requiring formal, traditional agreement, which revision is most appropriate?",
        "options": [
            "All employees must submit their timesheets by Friday, or they will not be paid on schedule.",
            "Each employee must submit they're timesheet by Friday.",
            "Each employees must submit their timesheet by Friday.",
            "No change is needed."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"All employees must submit their timesheets by Friday, or they will not be paid on schedule.\". This choice adheres strictly to standard American English grammatical conventions. It establishes proper subject-verb agreement in number and person, ensures correct pronoun case and antecedent reference, and maintains consistent verb tense throughout the sentence."
    },
    {
        "id": 47,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Which sentence correctly fixes the misplaced modifier?\n\"Walking down the street, the streetlights suddenly flickered off.\"",
        "options": [
            "As I walked down the street, the streetlights suddenly flickered off.",
            "Walking down the street suddenly, the streetlights flickered off.",
            "The streetlights, walking down the street, flickered off suddenly.",
            "No change is needed."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"As I walked down the street, the streetlights suddenly flickered off.\". This option corrects structural flaws such as run-on sentences, comma splices, or dangling/misplaced modifiers. It ensures syntactic completeness and creates a parallel grammatical construction across coordinating elements."
    },
    {
        "id": 48,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "A paragraph about a town's annual harvest festival would most benefit from which addition to engage readers?",
        "options": [
            "A brief, vivid description of the festival's sights and sounds.",
            "A long list of every vendor present at the festival for the past decade.",
            "An unrelated paragraph about the writer's personal grocery list.",
            "A technical explanation of crop rotation methods."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"A brief, vivid description of the festival's sights and sounds.\". This option best accomplishes the author's rhetorical goal by providing logical progression, precise transitional relationships, and cohesive paragraph organization that directly supports the central focus of the passage."
    },
    {
        "id": 49,
        "section": "english",
        "topic": "Style & Tone",
        "text": "Which choice best avoids wordiness?\n\"In spite of the fact that it was late, she continued to work on the report.\"",
        "options": [
            "Although it was late, she continued working on the report.",
            "In spite of it being late in the day, the report continued being worked on by her.",
            "Despite the lateness of the hour being what it was, she worked on.",
            "No change is needed."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Although it was late, she continued working on the report.\". This choice expresses the intended meaning most concisely and clearly, successfully eliminating redundant repetitions and wordy filler while maintaining an appropriate, formal academic tone."
    },
    {
        "id": 50,
        "section": "english",
        "topic": "Punctuation",
        "text": "The professor recommended three books: a novel, a memoir, and a collection of essays.\n\nIs this sentence punctuated correctly?",
        "options": [
            "Yes, the colon correctly introduces the list.",
            "No, a semicolon should replace the colon.",
            "No, the colon should be a comma.",
            "No, no punctuation should follow \"books.\""
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Yes, the colon correctly introduces the list.\". Standard English punctuation requires non-essential or parenthetical elements to be enclosed by paired punctuation (commas or dashes), while essential restrictive elements must not be separated. Choice \"Yes, the colon correctly introduces the list.\" provides grammatically correct clause boundaries and eliminates unnecessary or misplaced punctuation."
    },
    {
        "id": 51,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "A store is offering a 25% discount on all items. If a jacket originally costs $2,400, what is the sale price?",
        "options": [
            "$600",
            "$1,200",
            "$1,800",
            "$2,100"
        ],
        "answer": 2,
        "explanation": "Correct Answer: $1,800. Step-by-step solution: Set up the calculation using standard proportional reasoning, percentages, or order of operations. Evaluating the mathematical expression yields the exact result of $1,800."
    },
    {
        "id": 52,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "If 3x + 7 = 22, what is the value of x?",
        "options": [
            "3",
            "5",
            "7",
            "9"
        ],
        "answer": 1,
        "explanation": "Correct Answer: 5. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 5 satisfies all conditions of the problem."
    },
    {
        "id": 53,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What are the solutions to the equation x² – 5x + 6 = 0?",
        "options": [
            "x = 2 and x = 3",
            "x = –2 and x = –3",
            "x = 1 and x = 6",
            "x = –1 and x = –6"
        ],
        "answer": 0,
        "explanation": "Correct Answer: x = 2 and x = 3. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that x = 2 and x = 3 satisfies all conditions of the problem."
    },
    {
        "id": 54,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the slope of the line passing through the points (2, 5) and (6, 13)?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 1,
        "explanation": "Correct Answer: 2. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 2."
    },
    {
        "id": 55,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "A rectangle has a length of 12 cm and a width of 8 cm. What is the area of the rectangle?",
        "options": [
            "40 cm²",
            "80 cm²",
            "96 cm²",
            "120 cm²"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 96 cm². Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 96 cm²."
    },
    {
        "id": 56,
        "section": "math",
        "topic": "Trigonometry",
        "text": "In a right triangle, if sin(θ) = 3/5, what is cos(θ)?",
        "options": [
            "3/4",
            "4/5",
            "4/3",
            "5/3"
        ],
        "answer": 1,
        "explanation": "Correct Answer: 4/5. Step-by-step solution: Use fundamental trigonometric definitions (sin = opp/hyp, cos = adj/hyp, tan = opp/adj) or trigonometric identities to simplify the expression, arriving at 4/5."
    },
    {
        "id": 57,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "A recipe calls for 2.5 cups of flour to make 12 muffins. How many cups of flour are needed to make 36 muffins?",
        "options": [
            "5.0",
            "6.5",
            "7.5",
            "10.0"
        ],
        "answer": 2,
        "explanation": "Since 36 muffins is 3 times 12 muffins, multiply 2.5 cups by 3: 2.5 * 3 = 7.5 cups."
    },
    {
        "id": 58,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "If 4(y - 3) = 2y + 10, what is the value of y?",
        "options": [
            "7",
            "9",
            "11",
            "13"
        ],
        "answer": 2,
        "explanation": "Expand: 4y - 12 = 2y + 10. Subtract 2y: 2y - 12 = 10. Add 12: 2y = 22. Thus, y = 11."
    },
    {
        "id": 59,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What are the roots of the quadratic equation x² - 7x + 12 = 0?",
        "options": [
            "x = -3 and x = -4",
            "x = 3 and x = 4",
            "x = 2 and x = 6",
            "x = -2 and x = -6"
        ],
        "answer": 1,
        "explanation": "Factor x² - 7x + 12 as (x - 3)(x - 4) = 0. Solving gives x = 3 and x = 4."
    },
    {
        "id": 60,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "In a right triangle, the hypotenuse is 13 cm long and one leg is 5 cm long. What is the length of the other leg?",
        "options": [
            "8 cm",
            "10 cm",
            "12 cm",
            "14 cm"
        ],
        "answer": 2,
        "explanation": "Using the Pythagorean theorem: a² + 5² = 13² => a² + 25 = 169 => a² = 144 => a = 12 cm."
    },
    {
        "id": 61,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the midpoint of the line segment with endpoints $(-4, 6)$ and $(8, -2)$ in the standard $(x, y)$ coordinate plane?",
        "options": [
            "(2, 2)",
            "(4, 4)",
            "(6, 2)",
            "(2, 4)"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"(2, 2)\". The midpoint formula is $M = (\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}) = (\\frac{-4 + 8}{2}, \\frac{6 + (-2)}{2}) = (\\frac{4}{2}, \\frac{4}{2}) = (2, 2)$."
    },
    {
        "id": 62,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "A car travels 240 miles in 4 hours. At this constant rate, how many miles will it travel in 7 hours?",
        "options": [
            "420",
            "400",
            "380",
            "440"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"420\". The speed is $240 / 4 = 60$ mph. In 7 hours, the distance traveled is $60 \\times 7 = 420$ miles."
    },
    {
        "id": 63,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "If $4(2y - 3) = 5y + 6$, what is the value of $y$?",
        "options": [
            "6",
            "4",
            "8",
            "5"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"6\". Expanding gives $8y - 12 = 5y + 6 \\Rightarrow 3y = 18 \\Rightarrow y = 6$."
    },
    {
        "id": 64,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "A circle has a circumference of $16\\pi$ cm. What is the area of the circle, in square centimeters?",
        "options": [
            "64\\pi",
            "32\\pi",
            "16\\pi",
            "256\\pi"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"64\\pi\". Circumference $C = 2\\pi r = 16\\pi \\Rightarrow r = 8$. Area $A = \\pi r^2 = \\pi (8^2) = 64\\pi$ square centimeters."
    },
    {
        "id": 65,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What are the real solutions to the equation $2x^2 - 7x + 3 = 0$?",
        "options": [
            "x = 3 and x = 1/2",
            "x = -3 and x = -1/2",
            "x = 3 and x = -1/2",
            "x = 7 and x = 3"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"x = 3 and x = 1/2\". Factoring gives $(2x - 1)(x - 3) = 0 \\Rightarrow x = 1/2$ or $x = 3$."
    },
    {
        "id": 66,
        "section": "math",
        "topic": "Trigonometry",
        "text": "In a right triangle with acute angle $\\theta$, $\\tan(\\theta) = 3/4$. What is the value of $\\sin(\\theta)$?",
        "options": [
            "3/5",
            "4/5",
            "3/4",
            "5/3"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"3/5\". If opposite = 3 and adjacent = 4, the hypotenuse is $\\sqrt{3^2 + 4^2} = 5$. Thus $\\sin(\\theta) = 3/5$."
    },
    {
        "id": 67,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "What is 15% of 240?",
        "options": [
            "24",
            "32",
            "36",
            "48"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 36. Step-by-step solution: Set up the calculation using standard proportional reasoning, percentages, or order of operations. Evaluating the mathematical expression yields the exact result of 36."
    },
    {
        "id": 68,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Simplify: 4(x – 3) + 2x",
        "options": [
            "6x – 12",
            "6x – 3",
            "2x – 12",
            "6x + 12"
        ],
        "answer": 0,
        "explanation": "Correct Answer: 6x – 12. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 6x – 12 satisfies all conditions of the problem."
    },
    {
        "id": 69,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "If f(x) = 2x² – 3x + 1, what is f(2)?",
        "options": [
            "3",
            "5",
            "7",
            "9"
        ],
        "answer": 0,
        "explanation": "Correct Answer: 3. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 3 satisfies all conditions of the problem."
    },
    {
        "id": 70,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "A circle has a radius of 7 cm. What is its circumference, in terms of π?",
        "options": [
            "7π cm",
            "14π cm",
            "49π cm",
            "21π cm"
        ],
        "answer": 1,
        "explanation": "Correct Answer: 14π cm. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 14π cm."
    },
    {
        "id": 71,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "A recipe requires 2/3 cup of sugar for 12 cookies. How much sugar is needed for 18 cookies, assuming a proportional increase?",
        "options": [
            "3/4 cup",
            "1 cup",
            "1 1/3 cup",
            "1 1/2 cup"
        ],
        "answer": 1,
        "explanation": "Correct Answer: 1 cup. Step-by-step solution: Set up the calculation using standard proportional reasoning, percentages, or order of operations. Evaluating the mathematical expression yields the exact result of 1 cup."
    },
    {
        "id": 72,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for x: 2(x + 4) = 3x – 2",
        "options": [
            "6",
            "8",
            "10",
            "12"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 10. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 10 satisfies all conditions of the problem."
    },
    {
        "id": 73,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What is the value of x in the equation $2^x = 32$?",
        "options": [
            "4",
            "5",
            "6",
            "16"
        ],
        "answer": 1,
        "explanation": "Correct Answer: 5. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 5 satisfies all conditions of the problem."
    },
    {
        "id": 74,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the midpoint of the segment connecting (–2, 4) and (6, –8)?",
        "options": [
            "(2, –2)",
            "(4, –4)",
            "(2, 2)",
            "(–2, 2)"
        ],
        "answer": 0,
        "explanation": "Correct Answer: (2, –2). Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields (2, –2)."
    },
    {
        "id": 75,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "The interior angles of a triangle measure x, 2x, and 3x degrees. What is the value of x?",
        "options": [
            "20",
            "30",
            "36",
            "45"
        ],
        "answer": 1,
        "explanation": "Correct Answer: 30. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 30."
    },
    {
        "id": 76,
        "section": "math",
        "topic": "Trigonometry",
        "text": "If tan(θ) = 1 and 0° < θ < 90°, what is θ?",
        "options": [
            "30°",
            "45°",
            "60°",
            "90°"
        ],
        "answer": 1,
        "explanation": "Correct Answer: 45°. Step-by-step solution: Use fundamental trigonometric definitions (sin = opp/hyp, cos = adj/hyp, tan = opp/adj) or trigonometric identities to simplify the expression, arriving at 45°."
    },
    {
        "id": 77,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "What is the least common multiple of 8 and 12?",
        "options": [
            "16",
            "20",
            "24",
            "96"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 24. Step-by-step solution: Set up the calculation using standard proportional reasoning, percentages, or order of operations. Evaluating the mathematical expression yields the exact result of 24."
    },
    {
        "id": 78,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Factor completely: x² – 9",
        "options": [
            "(x – 3)(x + 3)",
            "(x – 9)(x + 1)",
            "(x – 3)²",
            "(x + 9)(x – 1)"
        ],
        "answer": 0,
        "explanation": "Correct Answer: (x – 3)(x + 3). Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that (x – 3)(x + 3) satisfies all conditions of the problem."
    },
    {
        "id": 79,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "A system of equations is given: y = 2x + 1 and y = –x + 7. What is the value of x at the point of intersection?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 1,
        "explanation": "Correct Answer: 2. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 2 satisfies all conditions of the problem."
    },
    {
        "id": 80,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the equation of a line with slope –2 that passes through the point (0, 5)?",
        "options": [
            "y = –2x + 5",
            "y = 2x + 5",
            "y = –2x – 5",
            "y = 5x – 2"
        ],
        "answer": 0,
        "explanation": "Correct Answer: y = –2x + 5. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields y = –2x + 5."
    },
    {
        "id": 81,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?",
        "options": [
            "9",
            "10",
            "12",
            "14"
        ],
        "answer": 1,
        "explanation": "Correct Answer: 10. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 10."
    },
    {
        "id": 82,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the value of sin(30°)?",
        "options": [
            "1/2",
            "√2/2",
            "√3/2",
            "1"
        ],
        "answer": 0,
        "explanation": "Correct Answer: 1/2. Step-by-step solution: Use fundamental trigonometric definitions (sin = opp/hyp, cos = adj/hyp, tan = opp/adj) or trigonometric identities to simplify the expression, arriving at 1/2."
    },
    {
        "id": 83,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "A car travels 240 miles in 4 hours. What is its average speed in miles per hour?",
        "options": [
            "40 mph",
            "50 mph",
            "60 mph",
            "70 mph"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 60 mph. Step-by-step solution: Set up the calculation using standard proportional reasoning, percentages, or order of operations. Evaluating the mathematical expression yields the exact result of 60 mph."
    },
    {
        "id": 84,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "If 5x – 3 = 2x + 12, what is the value of x?",
        "options": [
            "3",
            "4",
            "5",
            "6"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 5. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 5 satisfies all conditions of the problem."
    },
    {
        "id": 85,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "What is the discriminant of the quadratic equation x² + 4x + 4 = 0?",
        "options": [
            "0",
            "4",
            "8",
            "16"
        ],
        "answer": 0,
        "explanation": "Correct Answer: 0. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 0 satisfies all conditions of the problem."
    },
    {
        "id": 86,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the distance between the points (1, 2) and (4, 6)?",
        "options": [
            "3",
            "4",
            "5",
            "7"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 5. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 5."
    },
    {
        "id": 87,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "A square has a perimeter of 36 cm. What is its area?",
        "options": [
            "64 cm²",
            "72 cm²",
            "81 cm²",
            "144 cm²"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 81 cm². Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 81 cm²."
    },
    {
        "id": 88,
        "section": "math",
        "topic": "Trigonometry",
        "text": "In a right triangle, the angle θ satisfies cos(θ) = 0.6. What is sin(θ), given the Pythagorean identity?",
        "options": [
            "0.4",
            "0.6",
            "0.8",
            "1.0"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 0.8. Step-by-step solution: Use fundamental trigonometric definitions (sin = opp/hyp, cos = adj/hyp, tan = opp/adj) or trigonometric identities to simplify the expression, arriving at 0.8."
    },
    {
        "id": 89,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "What is the value of |–7 + 3|?",
        "options": [
            "4",
            "–4",
            "10",
            "–10"
        ],
        "answer": 0,
        "explanation": "Correct Answer: 4. Step-by-step solution: Set up the calculation using standard proportional reasoning, percentages, or order of operations. Evaluating the mathematical expression yields the exact result of 4."
    },
    {
        "id": 90,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Simplify: (3x²y)(2xy³)",
        "options": [
            "6x³y⁴",
            "5x³y⁴",
            "6x²y³",
            "5x²y³"
        ],
        "answer": 0,
        "explanation": "Correct Answer: 6x³y⁴. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that 6x³y⁴ satisfies all conditions of the problem."
    },
    {
        "id": 91,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "If g(x) = √(x + 5), what is the domain of g?",
        "options": [
            "x ≥ –5",
            "x ≤ –5",
            "x ≥ 5",
            "all real numbers"
        ],
        "answer": 0,
        "explanation": "Correct Answer: x ≥ –5. Step-by-step solution: Solve the algebraic equation or system by isolating the variable, expanding/factoring terms, or applying the quadratic formula. Substituting values confirms that x ≥ –5 satisfies all conditions of the problem."
    },
    {
        "id": 92,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "A line has the equation 2x + 3y = 12. What is its y-intercept?",
        "options": [
            "2",
            "3",
            "4",
            "6"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 4. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 4."
    },
    {
        "id": 93,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "What is the volume of a rectangular box with length 5, width 4, and height 3?",
        "options": [
            "12",
            "20",
            "60",
            "120"
        ],
        "answer": 2,
        "explanation": "Correct Answer: 60. Step-by-step solution: Apply relevant geometric theorems and formulas (such as the Pythagorean theorem, area/perimeter equations, slope m = Δy/Δx, or circle equations). Simplifying the geometric measurements yields 60."
    },
    {
        "id": 94,
        "section": "math",
        "topic": "Trigonometry",
        "text": "What is the period of the function y = sin(2x)?",
        "options": [
            "π",
            "2π",
            "π/2",
            "4π"
        ],
        "answer": 0,
        "explanation": "Correct Answer: π. Step-by-step solution: Use fundamental trigonometric definitions (sin = opp/hyp, cos = adj/hyp, tan = opp/adj) or trigonometric identities to simplify the expression, arriving at π."
    },
    {
        "id": 95,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "A jar contains 40 marbles, of which 30% are blue. How many marbles are blue?",
        "options": [
            "10",
            "12",
            "14",
            "16"
        ],
        "answer": 1,
        "explanation": "Correct Answer: 12. Step-by-step solution: Set up the calculation using standard proportional reasoning, percentages, or order of operations. Evaluating the mathematical expression yields the exact result of 12."
    },
    {
        "id": 96,
        "section": "reading",
        "topic": "Literary Narrative",
        "text": "Read the following passage and answer the question.\n\n\"Priya had always felt most at home in her grandmother's kitchen, where the scent of cardamom and cloves hung in the air like old memories. As she stirred the chai, she thought about how much had changed since she left her hometown—the city had made her efficient, ambitious, and somehow smaller.\"\n\nBased on the passage, the city has made Priya feel:",
        "options": [
            "More connected to her cultural roots",
            "More successful but somehow diminished",
            "Happier and more fulfilled",
            "Nostalgic but not regretful"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"More successful but somehow diminished\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE I — LITERARY NARRATIVE: Memory and Kitchen Traditions.\n\nPriya had always felt most at home in her grandmother's kitchen, where the scent of cardamom, crushed cloves, and simmered ginger hung in the air like old memories. As she stirred the simmering chai on the heavy brass stove, she thought about how much had changed since she left her hometown. The city had made her efficient, ambitious, and somehow smaller, hemmed in by calendar alerts and concrete towers.\n\nHere, time moved according to different metrics. Her grandmother did not use measuring spoons or timers; every pinch of turmeric was gauged by the palm of her hand, and the boiling milk was watched with patient, undivided attention.\n\n\"You rush everything, Priya,\" her grandmother remarked gently, wiping flour from the marble countertop. \"Food cooked with impatience nourishes the body, but it does nothing for the spirit.\"\n\nPriya paused, watching the swirling tea leaves settle. In her office three hundred miles away, speed was prized above all else; here, the deliberate repetition of ancient rituals offered a refuge from the frantic pace of modern life. She realized that what she sought was not merely a break from her routine, but a reconnection to the roots she had left behind."
    },
    {
        "id": 97,
        "section": "reading",
        "topic": "Social Science",
        "text": "A passage discusses how urbanization in the 20th century changed social structures. The author would most likely agree that urbanization:",
        "options": [
            "Had no significant effect on family structures",
            "Led to both opportunities and disruptions in community bonds",
            "Was entirely beneficial for economic development",
            "Should have been prevented to preserve traditional ways of life"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Led to both opportunities and disruptions in community bonds\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE II — SOCIAL SCIENCE: Urbanization, Transit Infrastructure, and Economic Mobility.\n\nThroughout the twentieth century, rapid urbanization fundamentally reorganized social structures and settlement patterns across the globe. As cities expanded outward into vast metropolitan regions, transportation networks became the central circulatory system determining economic opportunity.\n\nRecent demographic research demonstrates that access to reliable public transit directly influences employment stability and household income growth, particularly in suburban and outer-ring communities. When transit infrastructure is fragmented or unreliable, workers experience increased commute burdens, creating spatial mismatches between where affordable housing exists and where job growth is concentrated.\n\nUrban economists argue that investing in integrated regional transit—such as dedicated bus rapid transit corridors and commuter rail extensions—yields substantial multiplier effects. These investments reduce household transportation expenditures, lower carbon emissions, and facilitate greater labor market participation across diverse socioeconomic strata. Achieving sustainable metropolitan growth requires treating public transportation not as a secondary amenity, but as foundational civic infrastructure."
    },
    {
        "id": 98,
        "section": "reading",
        "topic": "Natural Science",
        "text": "According to a passage about photosynthesis, which of the following is the primary function of chlorophyll in plants?",
        "options": [
            "Transporting water from roots to leaves",
            "Absorbing sunlight to power the conversion of CO₂ into glucose",
            "Releasing oxygen as a byproduct of respiration",
            "Storing glucose for later energy use"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Absorbing sunlight to power the conversion of CO₂ into glucose\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE IV — NATURAL SCIENCE: Deep-Sea Hydrothermal Vent Ecosystems and Chemosynthesis.\n\nUntil the late 1970s, marine biologists believed that all living organisms ultimately depended on solar radiation and photosynthesis to sustain life. The discovery of hydrothermal vent systems along the volcanic spreading ridges of the ocean floor overturned this fundamental paradigm.\n\nLocated thousands of meters beneath the ocean surface in complete darkness, hydrothermal vents emit superheated mineral-rich fluids produced by subsurface magma. In the absence of sunlight, the foundation of these unique ecosystems is chemosynthetic bacteria. These specialized microbes oxidize toxic hydrogen sulfide, methane, and other dissolved minerals, converting geothermal chemical energy into organic matter.\n\nA diverse array of specialized organisms thrives in these extreme environments, including giant tube worms (Riftia pachyptila), vent crabs, and blind shrimp. The tube worms possess no mouth, digestive tract, or gut; instead, they host billions of symbiotic chemosynthetic bacteria within a specialized vascular organ called a trophosome. The study of hydrothermal vent ecology has profound implications for astrobiology, expanding our understanding of the extreme physical conditions under which life can arise and persist throughout the universe."
    },
    {
        "id": 99,
        "section": "reading",
        "topic": "Humanities",
        "text": "A passage about Renaissance art argues that the period represented a fundamental shift in how humans perceived themselves. The central claim of this passage is that:",
        "options": [
            "Religious themes disappeared from art entirely during this period",
            "Renaissance artists copied Greek and Roman styles without innovation",
            "Humanist ideas placed greater emphasis on individual achievement and experience",
            "The Church remained the sole patron of all significant artwork"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Humanist ideas placed greater emphasis on individual achievement and experience\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE III — HUMANITIES: The Creative Alchemy of Musical Improvisation and Cultural Dialogue.\n\nThe emergence of modern American music, particularly jazz, represents one of the most significant cultural dialogues of the twentieth century. At its core, jazz revolutionized musical performance by elevating improvisation from an ornamental embellishment to the primary vehicle of artistic expression.\n\nIn classical European traditions, the composer's written score was treated as an immutable blueprint, with performers striving for fidelity to the original text. Jazz inverted this dynamic. While musicians shared common harmonic frameworks and standard song structures, the ultimate measure of mastery was the soloist's capacity for spontaneous reinvention. Through call-and-response phrasing, rhythmic syncopation, and altered scale degrees, musicians engaged in an unscripted, real-time conversation with their ensemble peers.\n\nThis improvisational freedom challenged conventional boundaries between composer and performer. It demonstrated that art could be dynamic, ephemeral, and deeply communal—a living dialogue reflecting the tensions, resilience, and creative innovation of the modern urban experience."
    },
    {
        "id": 100,
        "section": "reading",
        "topic": "Literary Narrative",
        "text": "Read the passage excerpt below:\n\n'Elena watched the departure board change, each mechanical click echoing her anxiety. Five years abroad had transformed her into someone comfortable in foreign airports, yet returning home felt like stepping into an old photograph.'\n\nWhat does the passage imply about Elena's feelings regarding her return home?",
        "options": [
            "She feels entirely eager and unbothered by her return.",
            "She experiences a mixture of apprehension and nostalgia.",
            "She regrets having spent five years living abroad.",
            "She is afraid she will no longer recognize her family."
        ],
        "answer": 1,
        "explanation": "The mention of anxiety clicking like the board combined with stepping into an 'old photograph' indicates a blend of apprehension and nostalgic reflection.",
        "passage": "PASSAGE I — LITERARY NARRATIVE: Memory and Kitchen Traditions.\n\nPriya had always felt most at home in her grandmother's kitchen, where the scent of cardamom, crushed cloves, and simmered ginger hung in the air like old memories. As she stirred the simmering chai on the heavy brass stove, she thought about how much had changed since she left her hometown. The city had made her efficient, ambitious, and somehow smaller, hemmed in by calendar alerts and concrete towers.\n\nHere, time moved according to different metrics. Her grandmother did not use measuring spoons or timers; every pinch of turmeric was gauged by the palm of her hand, and the boiling milk was watched with patient, undivided attention.\n\n\"You rush everything, Priya,\" her grandmother remarked gently, wiping flour from the marble countertop. \"Food cooked with impatience nourishes the body, but it does nothing for the spirit.\"\n\nPriya paused, watching the swirling tea leaves settle. In her office three hundred miles away, speed was prized above all else; here, the deliberate repetition of ancient rituals offered a refuge from the frantic pace of modern life. She realized that what she sought was not merely a break from her routine, but a reconnection to the roots she had left behind."
    },
    {
        "id": 101,
        "section": "reading",
        "topic": "Social Science",
        "text": "A study on economic mobility suggests that access to public transportation directly influences employment rates in suburban areas.\n\nWhich of the following findings would most strongly support this conclusion?",
        "options": [
            "Areas with expanded bus networks experienced a 15% increase in local employment over three years.",
            "Suburban residents prefer driving private vehicles over taking public transit.",
            "City centers have higher job density than surrounding suburban regions.",
            "High-income households spend less on transit as a percentage of income."
        ],
        "answer": 0,
        "explanation": "A direct increase in employment following transit expansion strongly supports the claim that public transportation access boosts employment.",
        "passage": "PASSAGE II — SOCIAL SCIENCE: Urbanization, Transit Infrastructure, and Economic Mobility.\n\nThroughout the twentieth century, rapid urbanization fundamentally reorganized social structures and settlement patterns across the globe. As cities expanded outward into vast metropolitan regions, transportation networks became the central circulatory system determining economic opportunity.\n\nRecent demographic research demonstrates that access to reliable public transit directly influences employment stability and household income growth, particularly in suburban and outer-ring communities. When transit infrastructure is fragmented or unreliable, workers experience increased commute burdens, creating spatial mismatches between where affordable housing exists and where job growth is concentrated.\n\nUrban economists argue that investing in integrated regional transit—such as dedicated bus rapid transit corridors and commuter rail extensions—yields substantial multiplier effects. These investments reduce household transportation expenditures, lower carbon emissions, and facilitate greater labor market participation across diverse socioeconomic strata. Achieving sustainable metropolitan growth requires treating public transportation not as a secondary amenity, but as foundational civic infrastructure."
    },
    {
        "id": 102,
        "section": "reading",
        "topic": "Natural Science",
        "text": "Deep-sea hydrothermal vents emit mineral-rich water heated by subterranean magma, supporting unique ecosystems independent of sunlight.\n\nWhat is the primary energy source powering these ecosystems?",
        "options": [
            "Photosynthesis from surface algae",
            "Chemical energy derived from inorganic compounds (chemosynthesis)",
            "Thermal energy directly absorbed by plant cells",
            "Gravitational tidal energy from lunar movement"
        ],
        "answer": 1,
        "explanation": "Hydrothermal vent communities rely on chemosynthesis, where microbes convert mineral compounds into chemical energy in total darkness.",
        "passage": "PASSAGE IV — NATURAL SCIENCE: Deep-Sea Hydrothermal Vent Ecosystems and Chemosynthesis.\n\nUntil the late 1970s, marine biologists believed that all living organisms ultimately depended on solar radiation and photosynthesis to sustain life. The discovery of hydrothermal vent systems along the volcanic spreading ridges of the ocean floor overturned this fundamental paradigm.\n\nLocated thousands of meters beneath the ocean surface in complete darkness, hydrothermal vents emit superheated mineral-rich fluids produced by subsurface magma. In the absence of sunlight, the foundation of these unique ecosystems is chemosynthetic bacteria. These specialized microbes oxidize toxic hydrogen sulfide, methane, and other dissolved minerals, converting geothermal chemical energy into organic matter.\n\nA diverse array of specialized organisms thrives in these extreme environments, including giant tube worms (Riftia pachyptila), vent crabs, and blind shrimp. The tube worms possess no mouth, digestive tract, or gut; instead, they host billions of symbiotic chemosynthetic bacteria within a specialized vascular organ called a trophosome. The study of hydrothermal vent ecology has profound implications for astrobiology, expanding our understanding of the extreme physical conditions under which life can arise and persist throughout the universe."
    },
    {
        "id": 103,
        "section": "reading",
        "topic": "Humanities",
        "text": "Early 20th-century jazz musicians introduced improvisation into traditional structures, creating a dynamic dialogue between soloist and ensemble.\n\nAccording to the passage, what was a key contribution of early jazz musicians?",
        "options": [
            "Strictly adhering to traditional European musical notation",
            "Replacing all acoustic instruments with electronic synthesizers",
            "Blending spontaneous improvisation with structured ensemble playing",
            "Eliminating rhythm instruments from orchestral performances"
        ],
        "answer": 2,
        "explanation": "The text highlights how jazz introduced improvisation to interact dynamically with structured ensemble accompaniment.",
        "passage": "PASSAGE III — HUMANITIES: The Creative Alchemy of Musical Improvisation and Cultural Dialogue.\n\nThe emergence of modern American music, particularly jazz, represents one of the most significant cultural dialogues of the twentieth century. At its core, jazz revolutionized musical performance by elevating improvisation from an ornamental embellishment to the primary vehicle of artistic expression.\n\nIn classical European traditions, the composer's written score was treated as an immutable blueprint, with performers striving for fidelity to the original text. Jazz inverted this dynamic. While musicians shared common harmonic frameworks and standard song structures, the ultimate measure of mastery was the soloist's capacity for spontaneous reinvention. Through call-and-response phrasing, rhythmic syncopation, and altered scale degrees, musicians engaged in an unscripted, real-time conversation with their ensemble peers.\n\nThis improvisational freedom challenged conventional boundaries between composer and performer. It demonstrated that art could be dynamic, ephemeral, and deeply communal—a living dialogue reflecting the tensions, resilience, and creative innovation of the modern urban experience."
    },
    {
        "id": 104,
        "section": "reading",
        "topic": "Literary Narrative",
        "passage": "PASSAGE I — LITERARY NARRATIVE: Memory and Kitchen Traditions.\n\nPriya had always felt most at home in her grandmother's kitchen, where the scent of cardamom, crushed cloves, and simmered ginger hung in the air like old memories. As she stirred the simmering chai on the heavy brass stove, she thought about how much had changed since she left her hometown. The city had made her efficient, ambitious, and somehow smaller, hemmed in by calendar alerts and concrete towers.\n\nHere, time moved according to different metrics. Her grandmother did not use measuring spoons or timers; every pinch of turmeric was gauged by the palm of her hand, and the boiling milk was watched with patient, undivided attention.\n\n\"You rush everything, Priya,\" her grandmother remarked gently, wiping flour from the marble countertop. \"Food cooked with impatience nourishes the body, but it does nothing for the spirit.\"\n\nPriya paused, watching the swirling tea leaves settle. In her office three hundred miles away, speed was prized above all else; here, the deliberate repetition of ancient rituals offered a refuge from the frantic pace of modern life. She realized that what she sought was not merely a break from her routine, but a reconnection to the roots she had left behind.",
        "text": "The author's grandmother primarily gauges her cooking by:",
        "options": [
            "Sensory experience and hands-on intuition",
            "Precise mechanical timers and scale measurements",
            "Written recipes passed down in formal manuscripts",
            "Modern kitchen appliances and electronic gadgets"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Sensory experience and hands-on intuition\". The passage describes how the grandmother measured turmeric in the palm of her hand and watched the milk with undivided attention rather than using measuring spoons or timers."
    },
    {
        "id": 105,
        "section": "reading",
        "topic": "Social Science",
        "passage": "PASSAGE II — SOCIAL SCIENCE: Urbanization, Transit Infrastructure, and Economic Mobility.\n\nThroughout the twentieth century, rapid urbanization fundamentally reorganized social structures and settlement patterns across the globe. As cities expanded outward into vast metropolitan regions, transportation networks became the central circulatory system determining economic opportunity.\n\nRecent demographic research demonstrates that access to reliable public transit directly influences employment stability and household income growth, particularly in suburban and outer-ring communities. When transit infrastructure is fragmented or unreliable, workers experience increased commute burdens, creating spatial mismatches between where affordable housing exists and where job growth is concentrated.\n\nUrban economists argue that investing in integrated regional transit—such as dedicated bus rapid transit corridors and commuter rail extensions—yields substantial multiplier effects. These investments reduce household transportation expenditures, lower carbon emissions, and facilitate greater labor market participation across diverse socioeconomic strata. Achieving sustainable metropolitan growth requires treating public transportation not as a secondary amenity, but as foundational civic infrastructure.",
        "text": "According to the passage, spatial mismatch occurs when:",
        "options": [
            "Affordable housing is located far from areas of job growth with inadequate transit",
            "Cities build too many roads and eliminate all pedestrian zones",
            "Workers choose to live exclusively in city center high-rises",
            "Public transit fares are subsidized by local governments"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Affordable housing is located far from areas of job growth with inadequate transit\". The passage states that spatial mismatch happens when transit is fragmented and workers cannot easily reach job growth centers from affordable residential areas."
    },
    {
        "id": 106,
        "section": "reading",
        "topic": "Humanities",
        "passage": "PASSAGE III — HUMANITIES: The Creative Alchemy of Musical Improvisation and Cultural Dialogue.\n\nThe emergence of modern American music, particularly jazz, represents one of the most significant cultural dialogues of the twentieth century. At its core, jazz revolutionized musical performance by elevating improvisation from an ornamental embellishment to the primary vehicle of artistic expression.\n\nIn classical European traditions, the composer's written score was treated as an immutable blueprint, with performers striving for fidelity to the original text. Jazz inverted this dynamic. While musicians shared common harmonic frameworks and standard song structures, the ultimate measure of mastery was the soloist's capacity for spontaneous reinvention. Through call-and-response phrasing, rhythmic syncopation, and altered scale degrees, musicians engaged in an unscripted, real-time conversation with their ensemble peers.\n\nThis improvisational freedom challenged conventional boundaries between composer and performer. It demonstrated that art could be dynamic, ephemeral, and deeply communal—a living dialogue reflecting the tensions, resilience, and creative innovation of the modern urban experience.",
        "text": "In the passage, classical European musical performance is contrasted with jazz in that classical traditions:",
        "options": [
            "Emphasized strict fidelity to the composer's written score",
            "Rejected all formal harmonic structures and notation",
            "Relied entirely on spontaneous audience participation",
            "Were created exclusively for solo percussionists"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Emphasized strict fidelity to the composer's written score\". The author explains that in classical tradition, the written score was treated as an immutable blueprint, whereas jazz prioritized spontaneous improvisation."
    },
    {
        "id": 107,
        "section": "reading",
        "topic": "Natural Science",
        "passage": "PASSAGE IV — NATURAL SCIENCE: Deep-Sea Hydrothermal Vent Ecosystems and Chemosynthesis.\n\nUntil the late 1970s, marine biologists believed that all living organisms ultimately depended on solar radiation and photosynthesis to sustain life. The discovery of hydrothermal vent systems along the volcanic spreading ridges of the ocean floor overturned this fundamental paradigm.\n\nLocated thousands of meters beneath the ocean surface in complete darkness, hydrothermal vents emit superheated mineral-rich fluids produced by subsurface magma. In the absence of sunlight, the foundation of these unique ecosystems is chemosynthetic bacteria. These specialized microbes oxidize toxic hydrogen sulfide, methane, and other dissolved minerals, converting geothermal chemical energy into organic matter.\n\nA diverse array of specialized organisms thrives in these extreme environments, including giant tube worms (Riftia pachyptila), vent crabs, and blind shrimp. The tube worms possess no mouth, digestive tract, or gut; instead, they host billions of symbiotic chemosynthetic bacteria within a specialized vascular organ called a trophosome. The study of hydrothermal vent ecology has profound implications for astrobiology, expanding our understanding of the extreme physical conditions under which life can arise and persist throughout the universe.",
        "text": "The discovery of hydrothermal vent ecosystems was revolutionary because it demonstrated that:",
        "options": [
            "Complex ecosystems could thrive without solar energy via chemosynthesis",
            "All marine life requires direct sunlight to survive",
            "Volcanic activity eliminates all biological organisms in the ocean",
            "Photosynthesis is the only known method for creating organic matter"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Complex ecosystems could thrive without solar energy via chemosynthesis\". The passage highlights that finding life powered by chemosynthetic bacteria overturned the belief that all living organisms depended on solar radiation."
    },
    {
        "id": 108,
        "section": "reading",
        "topic": "Literary Narrative",
        "text": "\"The old fisherman's hands, weathered and cracked from decades at sea, moved with a precision that seemed at odds with their roughness, untangling the net as though it were silk.\"\n\nThis description primarily suggests that the fisherman:",
        "options": [
            "Has lost his skill due to age",
            "Possesses a practiced expertise despite physical wear",
            "Dislikes his profession",
            "Is new to fishing"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Possesses a practiced expertise despite physical wear\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE I — LITERARY NARRATIVE: Memory and Kitchen Traditions.\n\nPriya had always felt most at home in her grandmother's kitchen, where the scent of cardamom, crushed cloves, and simmered ginger hung in the air like old memories. As she stirred the simmering chai on the heavy brass stove, she thought about how much had changed since she left her hometown. The city had made her efficient, ambitious, and somehow smaller, hemmed in by calendar alerts and concrete towers.\n\nHere, time moved according to different metrics. Her grandmother did not use measuring spoons or timers; every pinch of turmeric was gauged by the palm of her hand, and the boiling milk was watched with patient, undivided attention.\n\n\"You rush everything, Priya,\" her grandmother remarked gently, wiping flour from the marble countertop. \"Food cooked with impatience nourishes the body, but it does nothing for the spirit.\"\n\nPriya paused, watching the swirling tea leaves settle. In her office three hundred miles away, speed was prized above all else; here, the deliberate repetition of ancient rituals offered a refuge from the frantic pace of modern life. She realized that what she sought was not merely a break from her routine, but a reconnection to the roots she had left behind."
    },
    {
        "id": 109,
        "section": "reading",
        "topic": "Social Science",
        "text": "A passage examines how access to microloans affected small business ownership among women in rural communities. The author most likely includes statistical data to:",
        "options": [
            "Entertain readers with unrelated numbers",
            "Support the argument with concrete evidence",
            "Confuse the central claim",
            "Replace the need for a clear thesis"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Support the argument with concrete evidence\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE II — SOCIAL SCIENCE: Urbanization, Transit Infrastructure, and Economic Mobility.\n\nThroughout the twentieth century, rapid urbanization fundamentally reorganized social structures and settlement patterns across the globe. As cities expanded outward into vast metropolitan regions, transportation networks became the central circulatory system determining economic opportunity.\n\nRecent demographic research demonstrates that access to reliable public transit directly influences employment stability and household income growth, particularly in suburban and outer-ring communities. When transit infrastructure is fragmented or unreliable, workers experience increased commute burdens, creating spatial mismatches between where affordable housing exists and where job growth is concentrated.\n\nUrban economists argue that investing in integrated regional transit—such as dedicated bus rapid transit corridors and commuter rail extensions—yields substantial multiplier effects. These investments reduce household transportation expenditures, lower carbon emissions, and facilitate greater labor market participation across diverse socioeconomic strata. Achieving sustainable metropolitan growth requires treating public transportation not as a secondary amenity, but as foundational civic infrastructure."
    },
    {
        "id": 110,
        "section": "reading",
        "topic": "Natural Science",
        "text": "A passage on plate tectonics explains that the Pacific Ring of Fire experiences frequent seismic activity. According to the passage, this is primarily because:",
        "options": [
            "The ocean floor never moves",
            "Multiple tectonic plate boundaries converge in that region",
            "Volcanic activity is unrelated to tectonic plates",
            "Earthquakes only occur near coastlines"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Multiple tectonic plate boundaries converge in that region\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE IV — NATURAL SCIENCE: Deep-Sea Hydrothermal Vent Ecosystems and Chemosynthesis.\n\nUntil the late 1970s, marine biologists believed that all living organisms ultimately depended on solar radiation and photosynthesis to sustain life. The discovery of hydrothermal vent systems along the volcanic spreading ridges of the ocean floor overturned this fundamental paradigm.\n\nLocated thousands of meters beneath the ocean surface in complete darkness, hydrothermal vents emit superheated mineral-rich fluids produced by subsurface magma. In the absence of sunlight, the foundation of these unique ecosystems is chemosynthetic bacteria. These specialized microbes oxidize toxic hydrogen sulfide, methane, and other dissolved minerals, converting geothermal chemical energy into organic matter.\n\nA diverse array of specialized organisms thrives in these extreme environments, including giant tube worms (Riftia pachyptila), vent crabs, and blind shrimp. The tube worms possess no mouth, digestive tract, or gut; instead, they host billions of symbiotic chemosynthetic bacteria within a specialized vascular organ called a trophosome. The study of hydrothermal vent ecology has profound implications for astrobiology, expanding our understanding of the extreme physical conditions under which life can arise and persist throughout the universe."
    },
    {
        "id": 111,
        "section": "reading",
        "topic": "Humanities",
        "text": "An essay on the evolution of jazz argues that improvisation became central to the genre's identity. The author's tone toward improvisation can best be described as:",
        "options": [
            "Dismissive",
            "Appreciative",
            "Indifferent",
            "Hostile"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Appreciative\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE III — HUMANITIES: The Creative Alchemy of Musical Improvisation and Cultural Dialogue.\n\nThe emergence of modern American music, particularly jazz, represents one of the most significant cultural dialogues of the twentieth century. At its core, jazz revolutionized musical performance by elevating improvisation from an ornamental embellishment to the primary vehicle of artistic expression.\n\nIn classical European traditions, the composer's written score was treated as an immutable blueprint, with performers striving for fidelity to the original text. Jazz inverted this dynamic. While musicians shared common harmonic frameworks and standard song structures, the ultimate measure of mastery was the soloist's capacity for spontaneous reinvention. Through call-and-response phrasing, rhythmic syncopation, and altered scale degrees, musicians engaged in an unscripted, real-time conversation with their ensemble peers.\n\nThis improvisational freedom challenged conventional boundaries between composer and performer. It demonstrated that art could be dynamic, ephemeral, and deeply communal—a living dialogue reflecting the tensions, resilience, and creative innovation of the modern urban experience."
    },
    {
        "id": 112,
        "section": "reading",
        "topic": "Literary Narrative",
        "text": "\"He stood at the threshold for a long moment before stepping inside, as if crossing into the house meant crossing into a version of himself he no longer recognized.\"\n\nThis sentence suggests that the character feels:",
        "options": [
            "Excited to return home",
            "Apprehensive about a personal change",
            "Completely unaffected by the house",
            "Eager to leave immediately"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Apprehensive about a personal change\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE I — LITERARY NARRATIVE: Memory and Kitchen Traditions.\n\nPriya had always felt most at home in her grandmother's kitchen, where the scent of cardamom, crushed cloves, and simmered ginger hung in the air like old memories. As she stirred the simmering chai on the heavy brass stove, she thought about how much had changed since she left her hometown. The city had made her efficient, ambitious, and somehow smaller, hemmed in by calendar alerts and concrete towers.\n\nHere, time moved according to different metrics. Her grandmother did not use measuring spoons or timers; every pinch of turmeric was gauged by the palm of her hand, and the boiling milk was watched with patient, undivided attention.\n\n\"You rush everything, Priya,\" her grandmother remarked gently, wiping flour from the marble countertop. \"Food cooked with impatience nourishes the body, but it does nothing for the spirit.\"\n\nPriya paused, watching the swirling tea leaves settle. In her office three hundred miles away, speed was prized above all else; here, the deliberate repetition of ancient rituals offered a refuge from the frantic pace of modern life. She realized that what she sought was not merely a break from her routine, but a reconnection to the roots she had left behind."
    },
    {
        "id": 113,
        "section": "reading",
        "topic": "Social Science",
        "text": "A passage discusses how remote work has reshaped expectations around office attendance since 2020. The author suggests that the shift has primarily:",
        "options": [
            "Eliminated all in-person collaboration permanently",
            "Changed how companies define productivity and presence",
            "Had no measurable effect on company culture",
            "Made commuting more popular than before"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Changed how companies define productivity and presence\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE II — SOCIAL SCIENCE: Urbanization, Transit Infrastructure, and Economic Mobility.\n\nThroughout the twentieth century, rapid urbanization fundamentally reorganized social structures and settlement patterns across the globe. As cities expanded outward into vast metropolitan regions, transportation networks became the central circulatory system determining economic opportunity.\n\nRecent demographic research demonstrates that access to reliable public transit directly influences employment stability and household income growth, particularly in suburban and outer-ring communities. When transit infrastructure is fragmented or unreliable, workers experience increased commute burdens, creating spatial mismatches between where affordable housing exists and where job growth is concentrated.\n\nUrban economists argue that investing in integrated regional transit—such as dedicated bus rapid transit corridors and commuter rail extensions—yields substantial multiplier effects. These investments reduce household transportation expenditures, lower carbon emissions, and facilitate greater labor market participation across diverse socioeconomic strata. Achieving sustainable metropolitan growth requires treating public transportation not as a secondary amenity, but as foundational civic infrastructure."
    },
    {
        "id": 114,
        "section": "reading",
        "topic": "Natural Science",
        "text": "A passage explains that coral bleaching occurs when corals expel the symbiotic algae living in their tissues. According to the passage, this expulsion is most directly triggered by:",
        "options": [
            "Increased water temperatures",
            "A decrease in sunlight",
            "The presence of fish predators",
            "A surplus of nutrients"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Increased water temperatures\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE IV — NATURAL SCIENCE: Deep-Sea Hydrothermal Vent Ecosystems and Chemosynthesis.\n\nUntil the late 1970s, marine biologists believed that all living organisms ultimately depended on solar radiation and photosynthesis to sustain life. The discovery of hydrothermal vent systems along the volcanic spreading ridges of the ocean floor overturned this fundamental paradigm.\n\nLocated thousands of meters beneath the ocean surface in complete darkness, hydrothermal vents emit superheated mineral-rich fluids produced by subsurface magma. In the absence of sunlight, the foundation of these unique ecosystems is chemosynthetic bacteria. These specialized microbes oxidize toxic hydrogen sulfide, methane, and other dissolved minerals, converting geothermal chemical energy into organic matter.\n\nA diverse array of specialized organisms thrives in these extreme environments, including giant tube worms (Riftia pachyptila), vent crabs, and blind shrimp. The tube worms possess no mouth, digestive tract, or gut; instead, they host billions of symbiotic chemosynthetic bacteria within a specialized vascular organ called a trophosome. The study of hydrothermal vent ecology has profound implications for astrobiology, expanding our understanding of the extreme physical conditions under which life can arise and persist throughout the universe."
    },
    {
        "id": 115,
        "section": "reading",
        "topic": "Humanities",
        "text": "A passage on the history of the novel argues that the rise of the printing press directly enabled longer prose narratives to reach wider audiences. The author's main purpose is to:",
        "options": [
            "Criticize the printing press",
            "Explain a historical cause-and-effect relationship",
            "Argue that novels existed before printing",
            "Describe the physical mechanics of a printing press"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Explain a historical cause-and-effect relationship\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE III — HUMANITIES: The Creative Alchemy of Musical Improvisation and Cultural Dialogue.\n\nThe emergence of modern American music, particularly jazz, represents one of the most significant cultural dialogues of the twentieth century. At its core, jazz revolutionized musical performance by elevating improvisation from an ornamental embellishment to the primary vehicle of artistic expression.\n\nIn classical European traditions, the composer's written score was treated as an immutable blueprint, with performers striving for fidelity to the original text. Jazz inverted this dynamic. While musicians shared common harmonic frameworks and standard song structures, the ultimate measure of mastery was the soloist's capacity for spontaneous reinvention. Through call-and-response phrasing, rhythmic syncopation, and altered scale degrees, musicians engaged in an unscripted, real-time conversation with their ensemble peers.\n\nThis improvisational freedom challenged conventional boundaries between composer and performer. It demonstrated that art could be dynamic, ephemeral, and deeply communal—a living dialogue reflecting the tensions, resilience, and creative innovation of the modern urban experience."
    },
    {
        "id": 116,
        "section": "reading",
        "topic": "Literary Narrative",
        "text": "\"She laughed at the joke, though the sound felt hollow even to her own ears, as if it belonged to someone else entirely.\"\n\nThis detail most strongly suggests that the character:",
        "options": [
            "Genuinely finds the joke funny",
            "Is masking her true feelings",
            "Has never laughed before",
            "Dislikes the person who told the joke"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Is masking her true feelings\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE I — LITERARY NARRATIVE: Memory and Kitchen Traditions.\n\nPriya had always felt most at home in her grandmother's kitchen, where the scent of cardamom, crushed cloves, and simmered ginger hung in the air like old memories. As she stirred the simmering chai on the heavy brass stove, she thought about how much had changed since she left her hometown. The city had made her efficient, ambitious, and somehow smaller, hemmed in by calendar alerts and concrete towers.\n\nHere, time moved according to different metrics. Her grandmother did not use measuring spoons or timers; every pinch of turmeric was gauged by the palm of her hand, and the boiling milk was watched with patient, undivided attention.\n\n\"You rush everything, Priya,\" her grandmother remarked gently, wiping flour from the marble countertop. \"Food cooked with impatience nourishes the body, but it does nothing for the spirit.\"\n\nPriya paused, watching the swirling tea leaves settle. In her office three hundred miles away, speed was prized above all else; here, the deliberate repetition of ancient rituals offered a refuge from the frantic pace of modern life. She realized that what she sought was not merely a break from her routine, but a reconnection to the roots she had left behind."
    },
    {
        "id": 117,
        "section": "reading",
        "topic": "Social Science",
        "text": "A passage compares consumer spending patterns before and after a major recession. The author primarily organizes the passage by:",
        "options": [
            "Listing unrelated anecdotes",
            "Presenting a chronological before-and-after comparison",
            "Avoiding any reference to data",
            "Focusing solely on one individual's spending habits"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Presenting a chronological before-and-after comparison\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE II — SOCIAL SCIENCE: Urbanization, Transit Infrastructure, and Economic Mobility.\n\nThroughout the twentieth century, rapid urbanization fundamentally reorganized social structures and settlement patterns across the globe. As cities expanded outward into vast metropolitan regions, transportation networks became the central circulatory system determining economic opportunity.\n\nRecent demographic research demonstrates that access to reliable public transit directly influences employment stability and household income growth, particularly in suburban and outer-ring communities. When transit infrastructure is fragmented or unreliable, workers experience increased commute burdens, creating spatial mismatches between where affordable housing exists and where job growth is concentrated.\n\nUrban economists argue that investing in integrated regional transit—such as dedicated bus rapid transit corridors and commuter rail extensions—yields substantial multiplier effects. These investments reduce household transportation expenditures, lower carbon emissions, and facilitate greater labor market participation across diverse socioeconomic strata. Achieving sustainable metropolitan growth requires treating public transportation not as a secondary amenity, but as foundational civic infrastructure."
    },
    {
        "id": 118,
        "section": "reading",
        "topic": "Natural Science",
        "text": "A passage on bird migration explains that some species rely on magnetic fields to navigate. According to the passage, this ability is best described as:",
        "options": [
            "A learned behavior taught by parent birds",
            "An innate biological sense",
            "A random and unreliable process",
            "Limited only to nocturnal species"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"An innate biological sense\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE IV — NATURAL SCIENCE: Deep-Sea Hydrothermal Vent Ecosystems and Chemosynthesis.\n\nUntil the late 1970s, marine biologists believed that all living organisms ultimately depended on solar radiation and photosynthesis to sustain life. The discovery of hydrothermal vent systems along the volcanic spreading ridges of the ocean floor overturned this fundamental paradigm.\n\nLocated thousands of meters beneath the ocean surface in complete darkness, hydrothermal vents emit superheated mineral-rich fluids produced by subsurface magma. In the absence of sunlight, the foundation of these unique ecosystems is chemosynthetic bacteria. These specialized microbes oxidize toxic hydrogen sulfide, methane, and other dissolved minerals, converting geothermal chemical energy into organic matter.\n\nA diverse array of specialized organisms thrives in these extreme environments, including giant tube worms (Riftia pachyptila), vent crabs, and blind shrimp. The tube worms possess no mouth, digestive tract, or gut; instead, they host billions of symbiotic chemosynthetic bacteria within a specialized vascular organ called a trophosome. The study of hydrothermal vent ecology has profound implications for astrobiology, expanding our understanding of the extreme physical conditions under which life can arise and persist throughout the universe."
    },
    {
        "id": 119,
        "section": "reading",
        "topic": "Humanities",
        "text": "An essay on classical architecture notes that Greek columns followed strict proportional rules. The author suggests that these rules were primarily intended to:",
        "options": [
            "Achieve a sense of visual harmony and balance",
            "Make buildings collapse less often",
            "Reduce construction costs",
            "Confuse foreign visitors"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Achieve a sense of visual harmony and balance\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE III — HUMANITIES: The Creative Alchemy of Musical Improvisation and Cultural Dialogue.\n\nThe emergence of modern American music, particularly jazz, represents one of the most significant cultural dialogues of the twentieth century. At its core, jazz revolutionized musical performance by elevating improvisation from an ornamental embellishment to the primary vehicle of artistic expression.\n\nIn classical European traditions, the composer's written score was treated as an immutable blueprint, with performers striving for fidelity to the original text. Jazz inverted this dynamic. While musicians shared common harmonic frameworks and standard song structures, the ultimate measure of mastery was the soloist's capacity for spontaneous reinvention. Through call-and-response phrasing, rhythmic syncopation, and altered scale degrees, musicians engaged in an unscripted, real-time conversation with their ensemble peers.\n\nThis improvisational freedom challenged conventional boundaries between composer and performer. It demonstrated that art could be dynamic, ephemeral, and deeply communal—a living dialogue reflecting the tensions, resilience, and creative innovation of the modern urban experience."
    },
    {
        "id": 120,
        "section": "reading",
        "topic": "Literary Narrative",
        "text": "\"The letter sat unopened on the table for three days, a small paper monument to everything he was afraid to know.\"\n\nThe phrase \"paper monument\" most likely suggests that the letter represents:",
        "options": [
            "A minor, unimportant object",
            "A significant, emotionally weighted symbol",
            "A historical artifact",
            "A gift from a stranger"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"A significant, emotionally weighted symbol\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE I — LITERARY NARRATIVE: Memory and Kitchen Traditions.\n\nPriya had always felt most at home in her grandmother's kitchen, where the scent of cardamom, crushed cloves, and simmered ginger hung in the air like old memories. As she stirred the simmering chai on the heavy brass stove, she thought about how much had changed since she left her hometown. The city had made her efficient, ambitious, and somehow smaller, hemmed in by calendar alerts and concrete towers.\n\nHere, time moved according to different metrics. Her grandmother did not use measuring spoons or timers; every pinch of turmeric was gauged by the palm of her hand, and the boiling milk was watched with patient, undivided attention.\n\n\"You rush everything, Priya,\" her grandmother remarked gently, wiping flour from the marble countertop. \"Food cooked with impatience nourishes the body, but it does nothing for the spirit.\"\n\nPriya paused, watching the swirling tea leaves settle. In her office three hundred miles away, speed was prized above all else; here, the deliberate repetition of ancient rituals offered a refuge from the frantic pace of modern life. She realized that what she sought was not merely a break from her routine, but a reconnection to the roots she had left behind."
    },
    {
        "id": 121,
        "section": "reading",
        "topic": "Social Science",
        "text": "A passage discusses how social media algorithms shape political polarization. The author's central argument is most likely that:",
        "options": [
            "Algorithms have no influence on user beliefs",
            "Algorithms can reinforce existing beliefs by limiting exposure to differing views",
            "All users see identical content regardless of behavior",
            "Polarization existed only before social media"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Algorithms can reinforce existing beliefs by limiting exposure to differing views\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE II — SOCIAL SCIENCE: Urbanization, Transit Infrastructure, and Economic Mobility.\n\nThroughout the twentieth century, rapid urbanization fundamentally reorganized social structures and settlement patterns across the globe. As cities expanded outward into vast metropolitan regions, transportation networks became the central circulatory system determining economic opportunity.\n\nRecent demographic research demonstrates that access to reliable public transit directly influences employment stability and household income growth, particularly in suburban and outer-ring communities. When transit infrastructure is fragmented or unreliable, workers experience increased commute burdens, creating spatial mismatches between where affordable housing exists and where job growth is concentrated.\n\nUrban economists argue that investing in integrated regional transit—such as dedicated bus rapid transit corridors and commuter rail extensions—yields substantial multiplier effects. These investments reduce household transportation expenditures, lower carbon emissions, and facilitate greater labor market participation across diverse socioeconomic strata. Achieving sustainable metropolitan growth requires treating public transportation not as a secondary amenity, but as foundational civic infrastructure."
    },
    {
        "id": 122,
        "section": "reading",
        "topic": "Natural Science",
        "text": "A passage explains that antibiotic resistance develops when bacteria are repeatedly exposed to sub-lethal doses of antibiotics. According to the passage, the primary mechanism behind this resistance is:",
        "options": [
            "Random chance with no biological basis",
            "Natural selection favoring resistant bacterial strains",
            "Bacteria intentionally avoiding antibiotics",
            "A decrease in bacterial reproduction rates"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Natural selection favoring resistant bacterial strains\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE IV — NATURAL SCIENCE: Deep-Sea Hydrothermal Vent Ecosystems and Chemosynthesis.\n\nUntil the late 1970s, marine biologists believed that all living organisms ultimately depended on solar radiation and photosynthesis to sustain life. The discovery of hydrothermal vent systems along the volcanic spreading ridges of the ocean floor overturned this fundamental paradigm.\n\nLocated thousands of meters beneath the ocean surface in complete darkness, hydrothermal vents emit superheated mineral-rich fluids produced by subsurface magma. In the absence of sunlight, the foundation of these unique ecosystems is chemosynthetic bacteria. These specialized microbes oxidize toxic hydrogen sulfide, methane, and other dissolved minerals, converting geothermal chemical energy into organic matter.\n\nA diverse array of specialized organisms thrives in these extreme environments, including giant tube worms (Riftia pachyptila), vent crabs, and blind shrimp. The tube worms possess no mouth, digestive tract, or gut; instead, they host billions of symbiotic chemosynthetic bacteria within a specialized vascular organ called a trophosome. The study of hydrothermal vent ecology has profound implications for astrobiology, expanding our understanding of the extreme physical conditions under which life can arise and persist throughout the universe."
    },
    {
        "id": 123,
        "section": "reading",
        "topic": "Humanities",
        "text": "An essay on folk music traditions argues that oral storytelling preserved cultural history before written records. The author treats oral tradition as:",
        "options": [
            "An unreliable and inferior method of preservation",
            "A legitimate and valuable historical record",
            "Completely identical to written history",
            "A modern invention"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"A legitimate and valuable historical record\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE III — HUMANITIES: The Creative Alchemy of Musical Improvisation and Cultural Dialogue.\n\nThe emergence of modern American music, particularly jazz, represents one of the most significant cultural dialogues of the twentieth century. At its core, jazz revolutionized musical performance by elevating improvisation from an ornamental embellishment to the primary vehicle of artistic expression.\n\nIn classical European traditions, the composer's written score was treated as an immutable blueprint, with performers striving for fidelity to the original text. Jazz inverted this dynamic. While musicians shared common harmonic frameworks and standard song structures, the ultimate measure of mastery was the soloist's capacity for spontaneous reinvention. Through call-and-response phrasing, rhythmic syncopation, and altered scale degrees, musicians engaged in an unscripted, real-time conversation with their ensemble peers.\n\nThis improvisational freedom challenged conventional boundaries between composer and performer. It demonstrated that art could be dynamic, ephemeral, and deeply communal—a living dialogue reflecting the tensions, resilience, and creative innovation of the modern urban experience."
    },
    {
        "id": 124,
        "section": "reading",
        "topic": "Literary Narrative",
        "text": "\"The garden had grown wild in his absence, vines creeping over the fence he had once kept so carefully trimmed.\"\n\nThis image most likely symbolizes:",
        "options": [
            "The character's renewed interest in gardening",
            "Neglect and the passage of time",
            "A sudden burst of plant growth due to rain",
            "The character's arrival at a brand-new home"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Neglect and the passage of time\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE I — LITERARY NARRATIVE: Memory and Kitchen Traditions.\n\nPriya had always felt most at home in her grandmother's kitchen, where the scent of cardamom, crushed cloves, and simmered ginger hung in the air like old memories. As she stirred the simmering chai on the heavy brass stove, she thought about how much had changed since she left her hometown. The city had made her efficient, ambitious, and somehow smaller, hemmed in by calendar alerts and concrete towers.\n\nHere, time moved according to different metrics. Her grandmother did not use measuring spoons or timers; every pinch of turmeric was gauged by the palm of her hand, and the boiling milk was watched with patient, undivided attention.\n\n\"You rush everything, Priya,\" her grandmother remarked gently, wiping flour from the marble countertop. \"Food cooked with impatience nourishes the body, but it does nothing for the spirit.\"\n\nPriya paused, watching the swirling tea leaves settle. In her office three hundred miles away, speed was prized above all else; here, the deliberate repetition of ancient rituals offered a refuge from the frantic pace of modern life. She realized that what she sought was not merely a break from her routine, but a reconnection to the roots she had left behind."
    },
    {
        "id": 125,
        "section": "reading",
        "topic": "Social Science",
        "text": "A passage examines the economic impact of automation on manufacturing jobs. The author most likely structures the passage to:",
        "options": [
            "Present only one perspective without acknowledging complexity",
            "Weigh both the job losses and new opportunities created by automation",
            "Argue that automation has no economic effects",
            "Focus exclusively on historical manufacturing methods"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Weigh both the job losses and new opportunities created by automation\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE II — SOCIAL SCIENCE: Urbanization, Transit Infrastructure, and Economic Mobility.\n\nThroughout the twentieth century, rapid urbanization fundamentally reorganized social structures and settlement patterns across the globe. As cities expanded outward into vast metropolitan regions, transportation networks became the central circulatory system determining economic opportunity.\n\nRecent demographic research demonstrates that access to reliable public transit directly influences employment stability and household income growth, particularly in suburban and outer-ring communities. When transit infrastructure is fragmented or unreliable, workers experience increased commute burdens, creating spatial mismatches between where affordable housing exists and where job growth is concentrated.\n\nUrban economists argue that investing in integrated regional transit—such as dedicated bus rapid transit corridors and commuter rail extensions—yields substantial multiplier effects. These investments reduce household transportation expenditures, lower carbon emissions, and facilitate greater labor market participation across diverse socioeconomic strata. Achieving sustainable metropolitan growth requires treating public transportation not as a secondary amenity, but as foundational civic infrastructure."
    },
    {
        "id": 126,
        "section": "reading",
        "topic": "Natural Science",
        "text": "A passage on glacial retreat notes that melting ice exposes darker rock and soil, which absorb more solar heat. This process is best described as:",
        "options": [
            "A feedback loop that accelerates further melting",
            "A process that has no effect on melting rates",
            "A phenomenon limited to tropical regions",
            "Unrelated to global temperature changes"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"A feedback loop that accelerates further melting\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE IV — NATURAL SCIENCE: Deep-Sea Hydrothermal Vent Ecosystems and Chemosynthesis.\n\nUntil the late 1970s, marine biologists believed that all living organisms ultimately depended on solar radiation and photosynthesis to sustain life. The discovery of hydrothermal vent systems along the volcanic spreading ridges of the ocean floor overturned this fundamental paradigm.\n\nLocated thousands of meters beneath the ocean surface in complete darkness, hydrothermal vents emit superheated mineral-rich fluids produced by subsurface magma. In the absence of sunlight, the foundation of these unique ecosystems is chemosynthetic bacteria. These specialized microbes oxidize toxic hydrogen sulfide, methane, and other dissolved minerals, converting geothermal chemical energy into organic matter.\n\nA diverse array of specialized organisms thrives in these extreme environments, including giant tube worms (Riftia pachyptila), vent crabs, and blind shrimp. The tube worms possess no mouth, digestive tract, or gut; instead, they host billions of symbiotic chemosynthetic bacteria within a specialized vascular organ called a trophosome. The study of hydrothermal vent ecology has profound implications for astrobiology, expanding our understanding of the extreme physical conditions under which life can arise and persist throughout the universe."
    },
    {
        "id": 127,
        "section": "reading",
        "topic": "Humanities",
        "text": "An essay on modern poetry argues that free verse rejected traditional rhyme schemes to better capture natural speech patterns. The author's attitude toward free verse is best described as:",
        "options": [
            "Critical",
            "Approving",
            "Confused",
            "Indifferent"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Approving\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE III — HUMANITIES: The Creative Alchemy of Musical Improvisation and Cultural Dialogue.\n\nThe emergence of modern American music, particularly jazz, represents one of the most significant cultural dialogues of the twentieth century. At its core, jazz revolutionized musical performance by elevating improvisation from an ornamental embellishment to the primary vehicle of artistic expression.\n\nIn classical European traditions, the composer's written score was treated as an immutable blueprint, with performers striving for fidelity to the original text. Jazz inverted this dynamic. While musicians shared common harmonic frameworks and standard song structures, the ultimate measure of mastery was the soloist's capacity for spontaneous reinvention. Through call-and-response phrasing, rhythmic syncopation, and altered scale degrees, musicians engaged in an unscripted, real-time conversation with their ensemble peers.\n\nThis improvisational freedom challenged conventional boundaries between composer and performer. It demonstrated that art could be dynamic, ephemeral, and deeply communal—a living dialogue reflecting the tensions, resilience, and creative innovation of the modern urban experience."
    },
    {
        "id": 128,
        "section": "reading",
        "topic": "Literary Narrative",
        "text": "\"He answered every question carefully, choosing each word as though it might be weighed and measured later.\"\n\nThis detail suggests that the character is:",
        "options": [
            "Speaking carelessly",
            "Being deliberate and cautious in conversation",
            "Refusing to answer at all",
            "Angry at the person asking questions"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Being deliberate and cautious in conversation\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE I — LITERARY NARRATIVE: Memory and Kitchen Traditions.\n\nPriya had always felt most at home in her grandmother's kitchen, where the scent of cardamom, crushed cloves, and simmered ginger hung in the air like old memories. As she stirred the simmering chai on the heavy brass stove, she thought about how much had changed since she left her hometown. The city had made her efficient, ambitious, and somehow smaller, hemmed in by calendar alerts and concrete towers.\n\nHere, time moved according to different metrics. Her grandmother did not use measuring spoons or timers; every pinch of turmeric was gauged by the palm of her hand, and the boiling milk was watched with patient, undivided attention.\n\n\"You rush everything, Priya,\" her grandmother remarked gently, wiping flour from the marble countertop. \"Food cooked with impatience nourishes the body, but it does nothing for the spirit.\"\n\nPriya paused, watching the swirling tea leaves settle. In her office three hundred miles away, speed was prized above all else; here, the deliberate repetition of ancient rituals offered a refuge from the frantic pace of modern life. She realized that what she sought was not merely a break from her routine, but a reconnection to the roots she had left behind."
    },
    {
        "id": 129,
        "section": "reading",
        "topic": "Social Science",
        "text": "A passage discusses how minimum wage increases affect small business hiring decisions. The author most likely presents this topic as:",
        "options": [
            "A settled issue with no disagreement among economists",
            "A complex issue with competing perspectives and trade-offs",
            "An issue unrelated to economics",
            "A purely historical topic with no modern relevance"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"A complex issue with competing perspectives and trade-offs\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE II — SOCIAL SCIENCE: Urbanization, Transit Infrastructure, and Economic Mobility.\n\nThroughout the twentieth century, rapid urbanization fundamentally reorganized social structures and settlement patterns across the globe. As cities expanded outward into vast metropolitan regions, transportation networks became the central circulatory system determining economic opportunity.\n\nRecent demographic research demonstrates that access to reliable public transit directly influences employment stability and household income growth, particularly in suburban and outer-ring communities. When transit infrastructure is fragmented or unreliable, workers experience increased commute burdens, creating spatial mismatches between where affordable housing exists and where job growth is concentrated.\n\nUrban economists argue that investing in integrated regional transit—such as dedicated bus rapid transit corridors and commuter rail extensions—yields substantial multiplier effects. These investments reduce household transportation expenditures, lower carbon emissions, and facilitate greater labor market participation across diverse socioeconomic strata. Achieving sustainable metropolitan growth requires treating public transportation not as a secondary amenity, but as foundational civic infrastructure."
    },
    {
        "id": 130,
        "section": "reading",
        "topic": "Natural Science",
        "text": "A passage explains that vaccines work by training the immune system to recognize specific pathogens. According to the passage, this training primarily involves:",
        "options": [
            "Introducing a harmless form or piece of the pathogen",
            "Removing the immune system's memory of past infections",
            "Directly killing all bacteria in the body",
            "Preventing the immune system from functioning"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Introducing a harmless form or piece of the pathogen\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE IV — NATURAL SCIENCE: Deep-Sea Hydrothermal Vent Ecosystems and Chemosynthesis.\n\nUntil the late 1970s, marine biologists believed that all living organisms ultimately depended on solar radiation and photosynthesis to sustain life. The discovery of hydrothermal vent systems along the volcanic spreading ridges of the ocean floor overturned this fundamental paradigm.\n\nLocated thousands of meters beneath the ocean surface in complete darkness, hydrothermal vents emit superheated mineral-rich fluids produced by subsurface magma. In the absence of sunlight, the foundation of these unique ecosystems is chemosynthetic bacteria. These specialized microbes oxidize toxic hydrogen sulfide, methane, and other dissolved minerals, converting geothermal chemical energy into organic matter.\n\nA diverse array of specialized organisms thrives in these extreme environments, including giant tube worms (Riftia pachyptila), vent crabs, and blind shrimp. The tube worms possess no mouth, digestive tract, or gut; instead, they host billions of symbiotic chemosynthetic bacteria within a specialized vascular organ called a trophosome. The study of hydrothermal vent ecology has profound implications for astrobiology, expanding our understanding of the extreme physical conditions under which life can arise and persist throughout the universe."
    },
    {
        "id": 131,
        "section": "reading",
        "topic": "Social Science",
        "text": "An essay on film history argues that the transition from silent films to \"talkies\" changed acting styles dramatically. The author supports this claim primarily by:",
        "options": [
            "Describing specific changes in performance technique",
            "Ignoring all examples from the era",
            "Focusing only on box office numbers",
            "Arguing that acting styles never changed"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Describing specific changes in performance technique\". Based directly on the passage context, this option accurately reflects the author's stated facts, central argument, tone, or legitimate textual inference. The competing answer choices are either unsupported by the text, introduce outside assumptions, or contradict details explicitly stated in the passage.",
        "passage": "PASSAGE II — SOCIAL SCIENCE: Urbanization, Transit Infrastructure, and Economic Mobility.\n\nThroughout the twentieth century, rapid urbanization fundamentally reorganized social structures and settlement patterns across the globe. As cities expanded outward into vast metropolitan regions, transportation networks became the central circulatory system determining economic opportunity.\n\nRecent demographic research demonstrates that access to reliable public transit directly influences employment stability and household income growth, particularly in suburban and outer-ring communities. When transit infrastructure is fragmented or unreliable, workers experience increased commute burdens, creating spatial mismatches between where affordable housing exists and where job growth is concentrated.\n\nUrban economists argue that investing in integrated regional transit—such as dedicated bus rapid transit corridors and commuter rail extensions—yields substantial multiplier effects. These investments reduce household transportation expenditures, lower carbon emissions, and facilitate greater labor market participation across diverse socioeconomic strata. Achieving sustainable metropolitan growth requires treating public transportation not as a secondary amenity, but as foundational civic infrastructure."
    }
];

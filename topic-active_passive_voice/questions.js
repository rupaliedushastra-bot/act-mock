// =============================================
// questions.js – Topic: active_passive_voice
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "english",
        "topic": "Active & Passive Voice",
        "text": "Which sentence is written in active voice?",
        "options": [
            "The book was read by the students.",
            "The students read the book.",
            "The book had been finished before noon.",
            "Reading was done by the class."
        ],
        "answer": 1,
        "explanation": "In an active voice sentence, the subject performs the action of the verb. In 'The students read the book,' the subject ('The students') directly performs the action ('read') on the object ('the book'). In contrast, the other choices use passive constructions with forms of 'to be' followed by past participles."
    },
    {
        "id": 2,
        "section": "english",
        "topic": "Active & Passive Voice",
        "text": "Rewrite the sentence in passive voice: 'The chef prepared the meal.'\n\nWhich of the following is the correct passive form?",
        "options": [
            "The chef was preparing the meal.",
            "The meal was prepared by the chef.",
            "The meal had the chef prepare it.",
            "A meal got the chef to prepare."
        ],
        "answer": 1,
        "explanation": "To convert active voice to passive voice, the direct object of the active sentence ('the meal') becomes the subject, the verb changes to a form of 'to be' plus the past participle ('was prepared'), and the original subject ('the chef') is introduced by the preposition 'by' ('by the chef')."
    },
    {
        "id": 3,
        "section": "english",
        "topic": "Active & Passive Voice",
        "text": "Which sentence is written in passive voice?",
        "options": [
            "Maria submitted the report on time.",
            "The committee approved the proposal.",
            "The new policy was announced by the director.",
            "Thomas completed the project ahead of schedule."
        ],
        "answer": 2,
        "explanation": "In 'The new policy was announced by the director,' the subject ('The new policy') receives the action ('was announced') rather than performing it, and the actor ('the director') is introduced in a prepositional phrase with 'by'. The other sentences are all in active voice."
    },
    {
        "id": 4,
        "section": "english",
        "topic": "Active & Passive Voice",
        "text": "In formal academic writing, which voice is generally preferred and why?",
        "options": [
            "Passive voice, because it hides the identity of the actor",
            "Active voice, because it is clearer and more direct",
            "Passive voice, because it always sounds more academic",
            "Active voice, because it uses longer sentences"
        ],
        "answer": 1,
        "explanation": "Active voice is generally preferred in formal and academic writing because it makes sentences clearer, more direct, and more vigorous by clearly identifying who or what is performing the action."
    },
    {
        "id": 5,
        "section": "english",
        "topic": "Point of View Consistency",
        "text": "Which sentence contains a point-of-view shift?",
        "options": [
            "If you want to succeed, you need to work hard.",
            "If someone wants to succeed, he or she needs to work hard.",
            "If someone wants to succeed, you need to work hard.",
            "Anyone who wants to succeed must work hard."
        ],
        "answer": 2,
        "explanation": "Choice C shifts point of view from third person ('someone') in the introductory clause to second person ('you') in the main clause. Consistent writing maintains the same perspective throughout the sentence."
    },
    {
        "id": 6,
        "section": "english",
        "topic": "Active & Passive Voice",
        "text": "Why is active voice preferred over passive voice in most writing?",
        "options": [
            "Active voice is always shorter and easier to spell.",
            "Active voice is more direct, clear, and engaging for the reader.",
            "Active voice is grammatically required in all English sentences.",
            "Active voice prevents any use of adjectives or adverbs."
        ],
        "answer": 1,
        "explanation": "Active voice emphasizes the agent performing the action, making sentences more direct, vigorous, and engaging, whereas passive voice can make sentences wordy and obscure the agent."
    },
    {
        "id": 7,
        "section": "english",
        "topic": "Point of View Consistency",
        "text": "Identify the sentence that maintains consistent third-person point of view:",
        "options": [
            "Students should study regularly if you want good grades.",
            "When a person travels abroad, you learn about new cultures.",
            "Athletes must train consistently if they wish to improve their performance.",
            "One should always be careful when you cross the street."
        ],
        "answer": 2,
        "explanation": "'Athletes must train consistently if they wish to improve their performance' consistently uses third-person plural pronouns ('Athletes', 'they', 'their'). The other choices inappropriately shift to second person ('you')."
    },
    {
        "id": 8,
        "section": "english",
        "topic": "Point of View Consistency",
        "text": "Choose the correct pronoun to complete the sentence without a shift in person:\n\n'When a student enters college, ______ must learn time management.'",
        "options": [
            "you",
            "he or she",
            "they",
            "we"
        ],
        "answer": 1,
        "explanation": "The singular third-person noun 'a student' requires a matching singular third-person pronoun, 'he or she' (or singular 'they' in modern usage, but 'he or she' is the standard singular formal option in ACT testing). Using 'you' creates an inappropriate second-person shift."
    },
    {
        "id": 9,
        "section": "english",
        "topic": "Point of View Consistency",
        "text": "Which revision corrects the point-of-view shift?\n\n'We walked into the museum, and then you could see the dinosaur exhibit.'",
        "options": [
            "We walked into the museum, and then you could see the dinosaur exhibit.",
            "We walked into the museum, and then we could see the dinosaur exhibit.",
            "You walked into the museum, and then we could see the dinosaur exhibit.",
            "We walked into the museum, and then one could see the dinosaur exhibit."
        ],
        "answer": 1,
        "explanation": "The original sentence awkwardly shifts from first-person plural ('We') to second-person ('you'). Revising to 'we could see' keeps the first-person plural perspective consistent throughout."
    },
    {
        "id": 10,
        "section": "english",
        "topic": "Active & Passive Voice",
        "text": "Which of the following sentences uses passive voice effectively and appropriately?",
        "options": [
            "A great speech was delivered by Dr. Martin Luther King Jr.",
            "The suspect was arrested shortly after midnight.",
            "The game was won by the home team with enthusiasm.",
            "The pie was eaten by the children quickly."
        ],
        "answer": 1,
        "explanation": "Passive voice is most appropriate when the actor is unknown, obvious, or less important than the recipient of the action. In 'The suspect was arrested shortly after midnight,' the focus is properly on the suspect, and it is understood that law enforcement performed the arrest."
    },
    {
        "id": 11,
        "section": "english",
        "topic": "Point of View Consistency",
        "text": "Which pronoun best maintains the third-person point of view in the sentence below?\n\n'If an applicant submits all required materials on time, ______ application will be processed first.'",
        "options": [
            "your",
            "his or her",
            "our",
            "their own"
        ],
        "answer": 1,
        "explanation": "'An applicant' is a singular third-person antecedent. The possessive pronoun 'his or her' maintains third-person agreement, whereas 'your' shifts to second person and 'our' shifts to first person."
    },
    {
        "id": 12,
        "section": "english",
        "topic": "Active & Passive Voice",
        "text": "Convert the following passive sentence into active voice:\n\n'The new bridge was designed by a team of international engineers.'",
        "options": [
            "The new bridge had been designed by engineers internationally.",
            "A team of international engineers designed the new bridge.",
            "Designing the new bridge was done by international engineers.",
            "The new bridge was in design by international engineers."
        ],
        "answer": 1,
        "explanation": "In active voice, the actor ('A team of international engineers') serves as the subject, followed by the active past-tense verb ('designed') and the direct object ('the new bridge')."
    },
    {
        "id": 13,
        "section": "english",
        "topic": "Active & Passive Voice",
        "text": "Which sentence is in active voice?",
        "options": [
            "The experiment was conducted under strict laboratory conditions.",
            "The results were verified by an independent research team.",
            "The researchers published their findings in a prestigious journal.",
            "A Nobel Prize was awarded to the lead scientist."
        ],
        "answer": 2,
        "explanation": "'The researchers published their findings in a prestigious journal' is active because the subject ('The researchers') actively performs the action ('published') on the object ('findings'). The other three options use passive constructions."
    },
    {
        "id": 14,
        "section": "english",
        "topic": "Point of View Consistency",
        "text": "Which of the following contains an unnecessary shift in person?",
        "options": [
            "When runners train for a marathon, they must build endurance gradually.",
            "If you visit the Grand Canyon, you should bring plenty of water.",
            "When one visits a historic monument, you should show proper respect.",
            "We prepared our gear carefully before we began the ascent."
        ],
        "answer": 2,
        "explanation": "Choice C inappropriately shifts from third person ('one') to second person ('you'). To maintain consistency, it should read: 'When one visits a historic monument, one should show proper respect' or 'When you visit... you should'."
    },
    {
        "id": 15,
        "section": "english",
        "topic": "Active & Passive Voice",
        "text": "Which of the following sentences contains passive voice?",
        "options": [
            "The storm damaged several coastal properties.",
            "The architect drew the blueprints in three dimensions.",
            "Several properties were damaged by the severe storm.",
            "The city council approved the construction plan."
        ],
        "answer": 2,
        "explanation": "'Several properties were damaged by the severe storm' uses the passive construction 'were damaged by'. The recipient of damage ('Several properties') is in the subject position."
    },
    {
        "id": 16,
        "section": "english",
        "topic": "Point of View Consistency",
        "text": "Choose the version that maintains consistent first-person plural point of view:\n\n'As ______ explored the cave, ______ noticed unusual rock formations.'",
        "options": [
            "we; you",
            "one; they",
            "we; we",
            "they; we"
        ],
        "answer": 2,
        "explanation": "First-person plural requires the pronoun 'we' in both clauses ('As we explored the cave, we noticed unusual rock formations'), ensuring uninterrupted point of view."
    },
    {
        "id": 17,
        "section": "english",
        "topic": "Active & Passive Voice",
        "text": "Identify the sentence where active voice makes the meaning stronger and clearer:",
        "options": [
            "The ball was kicked over the fence by David.",
            "David kicked the ball over the fence.",
            "Over the fence the ball was kicked by David.",
            "The kicking of the ball over the fence was done by David."
        ],
        "answer": 1,
        "explanation": "'David kicked the ball over the fence' is strong, concise, and direct because the subject ('David') immediately precedes the active verb ('kicked') and its direct object ('the ball')."
    },
    {
        "id": 18,
        "section": "english",
        "topic": "Active & Passive Voice",
        "text": "Which sentence correctly changes 'The dog chased the squirrel' into passive voice?",
        "options": [
            "The dog was chasing the squirrel.",
            "The squirrel was chased by the dog.",
            "The squirrel had chased the dog.",
            "The dog got the squirrel chased."
        ],
        "answer": 1,
        "explanation": "The direct object 'the squirrel' becomes the subject, the verb becomes 'was chased', and the original subject 'the dog' follows 'by': 'The squirrel was chased by the dog.'"
    },
    {
        "id": 19,
        "section": "english",
        "topic": "Point of View Consistency",
        "text": "Which revision best eliminates the second-person point-of-view shift in this sentence?\n\n'A student should always proofread essays before you submit them.'",
        "options": [
            "A student should always proofread essays before you submit them.",
            "A student should always proofread essays before he or she submits them.",
            "You should always proofread essays before a student submits them.",
            "A student should always proofread essays before one submits them."
        ],
        "answer": 1,
        "explanation": "'A student' is a singular third-person noun. Replacing 'you submit' with 'he or she submits' maintains third-person agreement throughout the sentence."
    },
    {
        "id": 20,
        "section": "english",
        "topic": "Active & Passive Voice",
        "text": "Which sentence demonstrates the active voice?",
        "options": [
            "A symphony was composed by Beethoven during his later years.",
            "Beethoven composed a symphony during his later years.",
            "During his later years, a symphony was composed by Beethoven.",
            "A symphony had been composed by Beethoven in his later years."
        ],
        "answer": 1,
        "explanation": "'Beethoven composed a symphony during his later years' places the creator ('Beethoven') as the active subject of the verb ('composed'), making it active voice."
    }
];

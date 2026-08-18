// =============================================
// questions.js – Topic: wordiness_redundancy
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Which version of the sentence is the most concise and effective?\n\n'Due to the fact that it was raining heavily, the outdoor event was cancelled.'",
        "options": [
            "Because it was raining heavily, the outdoor event was cancelled.",
            "Due to the fact that it was raining heavily, the outdoor event was cancelled.",
            "Owing to the heavy rain that was falling down, the outdoor event was cancelled.",
            "The outdoor event was cancelled as a direct result of the fact that rain was heavy."
        ],
        "answer": 0,
        "explanation": "'Because' replaces the wordy multi-word phrase 'Due to the fact that' with a single, clear causal conjunction."
    },
    {
        "id": 2,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Which phrase in the sentence is redundant?\n\n'The student repeated the same experiment again.'",
        "options": [
            "'repeated... again' — 'repeated' already means doing something again",
            "'the student'",
            "'the same experiment'",
            "'experiment'"
        ],
        "answer": 0,
        "explanation": "'Repeat' inherently means to perform or say something again, making the addition of 'again' redundant."
    },
    {
        "id": 3,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Which option eliminates the redundancy in: 'The two siblings collaborated together on the project.'?",
        "options": [
            "The two siblings collaborated on the project.",
            "The two siblings worked together in collaboration on the project.",
            "Both of the two siblings collaborated together.",
            "The siblings each collaborated together on the project."
        ],
        "answer": 0,
        "explanation": "'Collaborated' by definition means working together, so 'together' is redundant and should be deleted."
    },
    {
        "id": 4,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Which sentence is the least wordy and most direct?",
        "options": [
            "This technological innovation is unprecedented.",
            "This technological innovation is new and has not been seen before in earlier times.",
            "This technological innovation is a totally unprecedented new development.",
            "Being new, this technological innovation had never happened in previous history."
        ],
        "answer": 0,
        "explanation": "'Unprecedented' captures the entire meaning of 'new and never seen before' in a single, powerful word."
    },
    {
        "id": 5,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Identify the redundant phrase in this sentence:\n\n'The round circle was drawn carefully by the architect.'",
        "options": [
            "'round circle' — a circle is by definition always round",
            "'carefully by the architect'",
            "'was drawn'",
            "'The'"
        ],
        "answer": 0,
        "explanation": "A circle is geometrically defined as round, so the modifier 'round' is redundant."
    },
    {
        "id": 6,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Which option most concisely rewrites: 'At this point in time, the committee has not yet reached a final decision.'?",
        "options": [
            "Currently, the committee has not reached a decision.",
            "At this point in time, the committee has not yet reached a decision.",
            "As of now at this current moment, the committee has not decided.",
            "The committee has not yet decided, which is the case at this point in time."
        ],
        "answer": 0,
        "explanation": "'Currently' cleanly replaces the wordy cliches 'At this point in time' and 'As of now at this current moment'."
    },
    {
        "id": 7,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Which underlined phrase is wordy and should be replaced with a single adverb?\n\n'She spoke [in a loud manner] during the meeting.'",
        "options": [
            "'loudly'",
            "'in a loud manner'",
            "'loud mannered'",
            "'with loudness'"
        ],
        "answer": 0,
        "explanation": "The single adverb 'loudly' replaces the three-word prepositional phrase 'in a loud manner' with maximum conciseness."
    },
    {
        "id": 8,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Which option best eliminates wordiness in: 'The reason why the bridge was closed was because of the fact that it was structurally unsound.'?",
        "options": [
            "The bridge was closed because it was structurally unsound.",
            "The reason the bridge was closed was that it was structurally unsound.",
            "Due to the fact that it was unsafe, the bridge was closed for being unsound.",
            "The bridge's closure happened due to it being structurally unsafe and unsound."
        ],
        "answer": 0,
        "explanation": "'The bridge was closed because it was structurally unsound' eliminates the wordy double-causal construction 'The reason why... was because of the fact that'."
    },
    {
        "id": 9,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Which phrase is NOT redundant?",
        "options": [
            "unexpected obstacle",
            "past history",
            "unexpected surprise",
            "future predictions"
        ],
        "answer": 0,
        "explanation": "Obstacles can be expected or unexpected, so 'unexpected obstacle' is not redundant. In contrast, history is always in the past, surprises are always unexpected, and predictions always concern the future."
    },
    {
        "id": 10,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Select the most concise version of: 'The coach made the decision to cancel the practice for today.'",
        "options": [
            "The coach decided to cancel today's practice.",
            "The coach made the decision to cancel today's practice.",
            "The coach's decision was cancellation of today's practice.",
            "For today, the coach made a practice cancellation decision."
        ],
        "answer": 0,
        "explanation": "Changing the nominalization 'made the decision' to the active verb 'decided' streamlines the sentence."
    },
    {
        "id": 11,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Which sentence contains a redundancy that should be corrected?",
        "options": [
            "The annual salary is paid once per year.",
            "The professor published several books.",
            "They moved to a new city last spring.",
            "Her reaction surprised us."
        ],
        "answer": 0,
        "explanation": "'Annual' already means occurring once per year, making 'once per year' redundant."
    },
    {
        "id": 12,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Which phrase is wordy and can be replaced by the single conjunction 'although'?",
        "options": [
            "'in spite of the fact that'",
            "'on account of'",
            "'due to'",
            "'as well as'"
        ],
        "answer": 0,
        "explanation": "'In spite of the fact that' is a six-word wordy phrase that should be replaced by 'although' or 'even though'."
    },
    {
        "id": 13,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Identify the most concise and clear version of: 'She was of the opinion that the movie was boring.'",
        "options": [
            "She thought the movie was boring.",
            "She held the personal belief that the movie was boring to watch.",
            "In her opinion, she believed the movie was boring.",
            "The movie, in her opinion and belief, was a boring experience."
        ],
        "answer": 0,
        "explanation": "'She thought' is direct and concise, eliminating the pompous phrasing 'was of the opinion that'."
    },
    {
        "id": 14,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Which sentence is redundant because an absolute adjective is improperly modified?",
        "options": [
            "The painting was very unique.",
            "The soup was very hot.",
            "She was very tired after the hike.",
            "The class was very long."
        ],
        "answer": 0,
        "explanation": "'Unique' means one-of-a-kind (an absolute state); something cannot be 'very unique' or 'more unique'."
    },
    {
        "id": 15,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Choose the option that eliminates wordiness: 'In the event that it rains, the game will be postponed.'",
        "options": [
            "If it rains, the game will be postponed.",
            "In the event that rain occurs, the game will be postponed.",
            "Should it rain, the game may in that event be postponed.",
            "The game will be postponed in the event of rain occurring."
        ],
        "answer": 0,
        "explanation": "'If it rains' is the most concise and natural conditional clause, replacing 'In the event that it rains'."
    },
    {
        "id": 16,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Which of the following expressions contains a redundancy?",
        "options": [
            "All of the below are redundant",
            "old antique",
            "brief summary",
            "close proximity"
        ],
        "answer": 0,
        "explanation": "Antiques are by definition old, summaries are brief, and proximity means closeness; all three are redundant pairs."
    },
    {
        "id": 17,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Which sentence is wordy and should be revised for conciseness?",
        "options": [
            "Due to the fact that he was tired, he went to bed early.",
            "The report is due Friday.",
            "He ran the marathon in four hours.",
            "She borrowed the book from the library."
        ],
        "answer": 0,
        "explanation": "'Due to the fact that he was tired' should be revised to 'Because he was tired' for conciseness."
    },
    {
        "id": 18,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Which rewrite is the most concise for: 'The meeting was for the purpose of discussing the new budget proposal.'?",
        "options": [
            "The meeting discussed the new budget proposal.",
            "The meeting was held for purposes of budget discussion.",
            "The meeting's purpose was a budget proposal discussion.",
            "The purpose of the meeting was for new budget proposal discussions."
        ],
        "answer": 0,
        "explanation": "'The meeting discussed the new budget proposal' uses an active verb, cutting out all bureaucratic padding."
    },
    {
        "id": 19,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Which phrase in the sentence is redundant?\n\n'The free gift came with every purchase over $50.'",
        "options": [
            "'free gift' — gifts are by definition always free",
            "'every purchase'",
            "'over $50'",
            "'came with'"
        ],
        "answer": 0,
        "explanation": "A gift is by definition free; therefore, 'free gift' is a redundant phrase."
    },
    {
        "id": 20,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Select the most concise revision of: 'He is a person who always arrives at school on time.'",
        "options": [
            "He always arrives at school on time.",
            "He is a person that is always on time to school.",
            "Being a person, he always arrives on time at school.",
            "He is someone who is always on time, arriving at school."
        ],
        "answer": 0,
        "explanation": "'He always arrives at school on time' eliminates the useless empty filler 'He is a person who'."
    }
];

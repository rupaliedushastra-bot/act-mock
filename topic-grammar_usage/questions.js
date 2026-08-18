// =============================================
// questions.js – Topic: grammar_usage
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Neither the manager nor the employees ______ informed about the schedule change.",
        "options": [
            "was",
            "were",
            "is",
            "has been"
        ],
        "answer": 1,
        "explanation": "With correlative conjunctions like 'neither... nor', the verb agrees in number with the subject closer to it. Here, 'employees' is plural and closest to the verb, so the plural verb 'were' is required."
    },
    {
        "id": 2,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Each of the participants ______ required to submit a signed consent form.",
        "options": [
            "are",
            "is",
            "were",
            "have been"
        ],
        "answer": 1,
        "explanation": "The indefinite pronoun 'Each' is singular and acts as the subject of the sentence ('of the participants' is a prepositional phrase that does not affect subject-verb agreement). Therefore, the singular verb 'is' is correct."
    },
    {
        "id": 3,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "The committee ______ divided in their opinions on the new policy.",
        "options": [
            "was",
            "were",
            "is",
            "has been"
        ],
        "answer": 1,
        "explanation": "When a collective noun refers to members acting individually or holding conflicting views (indicated here by the plural pronoun 'their opinions'), it takes a plural verb: 'were divided'."
    },
    {
        "id": 4,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "She is one of those people who ______ always ready to help others.",
        "options": [
            "is",
            "are",
            "was",
            "has been"
        ],
        "answer": 1,
        "explanation": "In the construction 'one of those [plural noun] who', the relative pronoun 'who' refers to the plural noun 'people', requiring a plural verb: 'are'."
    },
    {
        "id": 5,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "The bouquet of yellow roses ______ on the dining table.",
        "options": [
            "sits",
            "sit",
            "are sitting",
            "were placed"
        ],
        "answer": 0,
        "explanation": "The subject of the sentence is the singular noun 'bouquet' (not the plural 'roses' in the prepositional phrase). A singular subject requires the singular verb 'sits'."
    },
    {
        "id": 6,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Either the professor or the teaching assistants ______ available during office hours.",
        "options": [
            "is",
            "was",
            "are",
            "has been"
        ],
        "answer": 2,
        "explanation": "In 'either... or' constructions, the verb agrees with the closer subject. 'Teaching assistants' is plural and adjacent to the verb, so the plural verb 'are' is correct."
    },
    {
        "id": 7,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Between you and ______, this decision makes no sense.",
        "options": [
            "I",
            "me",
            "myself",
            "mine"
        ],
        "answer": 1,
        "explanation": "'Between' is a preposition, and objects of prepositions must be in the objective case. 'Me' is the objective pronoun (not 'I', which is subjective)."
    },
    {
        "id": 8,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "The data collected from the field experiments ______ that the hypothesis is valid.",
        "options": [
            "suggests",
            "suggest",
            "is suggesting",
            "has suggested"
        ],
        "answer": 1,
        "explanation": "In formal and scientific contexts, 'data' is treated as a plural noun (plural of 'datum'), requiring the plural verb 'suggest'."
    },
    {
        "id": 9,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "He gave the award to Maya and ______.",
        "options": [
            "I",
            "me",
            "myself",
            "she"
        ],
        "answer": 1,
        "explanation": "'To' is a preposition, so its object must be in the objective case. Remove 'Maya and' to test: 'He gave the award to me' (not 'to I')."
    },
    {
        "id": 10,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "The number of applicants ______ significantly this year.",
        "options": [
            "has increased",
            "have increased",
            "are increasing",
            "were increased"
        ],
        "answer": 0,
        "explanation": "'The number' is singular and takes a singular verb ('has increased'), whereas 'a number of' is plural and takes a plural verb."
    },
    {
        "id": 11,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Neither of the two solutions ______ workable under current constraints.",
        "options": [
            "seem",
            "seems",
            "are",
            "have been"
        ],
        "answer": 1,
        "explanation": "'Neither' as a pronoun subject is singular and requires a singular verb: 'seems'."
    },
    {
        "id": 12,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "She spoke ______ than anyone else at the conference.",
        "options": [
            "more clearly",
            "clearlier",
            "clearer",
            "most clearly"
        ],
        "answer": 0,
        "explanation": "Adverbs ending in '-ly' form the comparative with 'more' ('more clearly'). 'Clearer' is an adjective comparative, not an adverb."
    },
    {
        "id": 13,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "The coach, along with his players, ______ celebrating the championship victory.",
        "options": [
            "were",
            "are",
            "was",
            "have been"
        ],
        "answer": 2,
        "explanation": "Parenthetical phrases introduced by 'along with', 'as well as', or 'together with' do not change the number of the subject. The singular subject 'The coach' requires the singular verb 'was'."
    },
    {
        "id": 14,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Whom did you invite to the party?\n\nIs the pronoun 'Whom' used correctly?",
        "options": [
            "Yes, because it serves as the direct object of 'invite'.",
            "No, it should be 'Who' because it is the subject.",
            "No, it should be 'Whose'.",
            "No, it should be 'Whoever'."
        ],
        "answer": 0,
        "explanation": "'Whom' is in the objective case and correctly functions as the direct object of the verb 'invite' (You did invite whom)."
    },
    {
        "id": 15,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Every student and teacher ______ expected to attend the assembly.",
        "options": [
            "are",
            "is",
            "were",
            "have been"
        ],
        "answer": 1,
        "explanation": "When subjects joined by 'and' are preceded by 'every' or 'each', the subject takes a singular verb: 'is expected'."
    },
    {
        "id": 16,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Physics ______ my favorite subject in high school.",
        "options": [
            "were",
            "are",
            "was",
            "have been"
        ],
        "answer": 2,
        "explanation": "Fields of study ending in '-s' (such as 'Physics', 'Mathematics', 'Economics') are singular and take singular verbs: 'was'."
    },
    {
        "id": 17,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "The dog wagged ______ tail excitedly when its owner arrived.",
        "options": [
            "it's",
            "its",
            "its'",
            "their"
        ],
        "answer": 1,
        "explanation": "'Its' is the possessive pronoun meaning 'belonging to it'. 'It's' is a contraction for 'it is' or 'it has'."
    },
    {
        "id": 18,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "She ran ______ than her competitor in the final lap.",
        "options": [
            "more fast",
            "faster",
            "fastest",
            "more faster"
        ],
        "answer": 1,
        "explanation": "The comparative form of the one-syllable adverb 'fast' is 'faster'."
    },
    {
        "id": 19,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Ten miles ______ a long distance to run without training.",
        "options": [
            "are",
            "is",
            "were",
            "have been"
        ],
        "answer": 1,
        "explanation": "Expressions of time, money, distance, or measurement that represent a single total unit take a singular verb: 'is'."
    },
    {
        "id": 20,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "If I ______ you, I would accept the job offer immediately.",
        "options": [
            "was",
            "were",
            "am",
            "have been"
        ],
        "answer": 1,
        "explanation": "In subjunctive mood expressing a hypothetical or contrary-to-fact condition, the past subjunctive 'were' is used for all persons ('If I were you')."
    }
];

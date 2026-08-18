// =============================================
// questions.js – Topic: transitions
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "english",
        "topic": "Transitions",
        "text": "Electric vehicles produce zero direct tailpipe emissions. ______, manufacturing their batteries requires significant energy and rare earth minerals.\n\nWhich transition word best connects these sentences?",
        "options": [
            "However",
            "Furthermore",
            "Therefore",
            "Similarly"
        ],
        "answer": 0,
        "explanation": "'However' correctly establishes the contrast between the environmental benefit of zero emissions and the environmental cost of battery production."
    },
    {
        "id": 2,
        "section": "english",
        "topic": "Transitions",
        "text": "The student studied diligently every evening for three months. ______, she achieved the highest score in the statewide competition.\n\nWhich transition best expresses this relationship?",
        "options": [
            "Consequently",
            "In contrast",
            "Nevertheless",
            "Otherwise"
        ],
        "answer": 0,
        "explanation": "'Consequently' signals a direct cause-and-effect outcome: diligent studying led directly to the top test score."
    },
    {
        "id": 3,
        "section": "english",
        "topic": "Transitions",
        "text": "The museum offers free admission on the first Sunday of every month. ______, it provides complimentary audio guides to all visitors.\n\nWhich transition word best adds information?",
        "options": [
            "In addition",
            "Instead",
            "Conversely",
            "On the other hand"
        ],
        "answer": 0,
        "explanation": "'In addition' appropriately adds another complementary benefit (free audio guides) to the initial perk (free admission)."
    },
    {
        "id": 4,
        "section": "english",
        "topic": "Transitions",
        "text": "Heavy fog rolled into the valley, reducing visibility to less than fifty feet. ______, airport officials grounded all departing flights.\n\nWhich transition word is most logical?",
        "options": [
            "As a result",
            "Meanwhile",
            "Nonetheless",
            "Conversely"
        ],
        "answer": 0,
        "explanation": "Grounding the flights was the direct result of the dense fog, so the causal transition 'As a result' is logically necessary."
    },
    {
        "id": 5,
        "section": "english",
        "topic": "Transitions",
        "text": "Ancient Greek democracy allowed citizens to vote directly on legislation. Roman republicanism, ______, relied on elected representatives to govern.",
        "options": [
            "in contrast",
            "for instance",
            "furthermore",
            "likewise"
        ],
        "answer": 0,
        "explanation": "'In contrast' highlights the fundamental structural difference between direct democracy (Greek) and representative republicanism (Roman)."
    },
    {
        "id": 6,
        "section": "english",
        "topic": "Transitions",
        "text": "The new library features thousands of print volumes. ______, it houses state-of-the-art digital media labs and study pods.\n\nWhich transition provides continuation?",
        "options": [
            "Moreover",
            "Despite this",
            "Nevertheless",
            "Regardless"
        ],
        "answer": 0,
        "explanation": "'Moreover' adds an additional technological enhancement that complements the library's traditional book collection."
    },
    {
        "id": 7,
        "section": "english",
        "topic": "Transitions",
        "text": "The forecast called for clear skies all weekend. ______, an unexpected coastal squall dumped three inches of rain on the festival.",
        "options": [
            "Nevertheless",
            "Thus",
            "In other words",
            "Therefore"
        ],
        "answer": 0,
        "explanation": "'Nevertheless' conveys a concession/contrast between the sunny forecast and the surprising torrential rain."
    },
    {
        "id": 8,
        "section": "english",
        "topic": "Transitions",
        "text": "The chef recommends using fresh herbs whenever possible. ______, dried herbs can be substituted if fresh ones are unavailable.",
        "options": [
            "However",
            "Therefore",
            "In fact",
            "Accordingly"
        ],
        "answer": 0,
        "explanation": "'However' introduces the alternative concession that dried herbs can be used if the ideal choice (fresh herbs) is not on hand."
    },
    {
        "id": 9,
        "section": "english",
        "topic": "Transitions",
        "text": "Many nocturnal animals rely on senses other than sight. Bats, ______, navigate through echolocation.",
        "options": [
            "for example",
            "however",
            "consequently",
            "nevertheless"
        ],
        "answer": 0,
        "explanation": "'For example' introduces bats as a specific, illustrative case of an animal using non-visual senses."
    },
    {
        "id": 10,
        "section": "english",
        "topic": "Transitions",
        "text": "Regular aerobic exercise strengthens the cardiovascular system. ______, it has been shown to reduce anxiety and elevate mood.",
        "options": [
            "Additionally",
            "On the contrary",
            "Otherwise",
            "Instead"
        ],
        "answer": 0,
        "explanation": "'Additionally' introduces another distinct health benefit of exercise (mental/emotional health) alongside cardiovascular fitness."
    },
    {
        "id": 11,
        "section": "english",
        "topic": "Transitions",
        "text": "The company failed to innovate in response to digital technology. ______, it was forced to declare bankruptcy after eighty years in business.",
        "options": [
            "Ultimately",
            "Conversely",
            "Meanwhile",
            "In contrast"
        ],
        "answer": 0,
        "explanation": "'Ultimately' denotes the final cumulative outcome of the company's long-term failure to innovate."
    },
    {
        "id": 12,
        "section": "english",
        "topic": "Transitions",
        "text": "A balanced diet provides essential vitamins and minerals. ______, it supplies the energy necessary for daily physical and cognitive activities.",
        "options": [
            "Furthermore",
            "Nevertheless",
            "Even so",
            "In contrast"
        ],
        "answer": 0,
        "explanation": "'Furthermore' connects two additive benefits of maintaining a balanced diet."
    },
    {
        "id": 13,
        "section": "english",
        "topic": "Transitions",
        "text": "The experiment yielded inconclusive data during the first trial. The research team, ______, refined their methodology and repeated the protocol.",
        "options": [
            "therefore",
            "however",
            "nevertheless",
            "instead"
        ],
        "answer": 0,
        "explanation": "'Therefore' logically links the inconclusive initial outcome to the researchers' rational response of refining and repeating the experiment."
    },
    {
        "id": 14,
        "section": "english",
        "topic": "Transitions",
        "text": "Some desert plants store water in thick fleshy stems. Other desert flora, ______, develop extensive root systems to reach deep groundwater.",
        "options": [
            "by comparison",
            "in conclusion",
            "for instance",
            "as a result"
        ],
        "answer": 0,
        "explanation": "'By comparison' highlights the alternative survival strategy used by other desert flora."
    },
    {
        "id": 15,
        "section": "english",
        "topic": "Transitions",
        "text": "The hike to the summit was steep and exhausting. The panoramic view from the peak, ______, made every step worthwhile.",
        "options": [
            "however",
            "furthermore",
            "similarly",
            "therefore"
        ],
        "answer": 0,
        "explanation": "'However' contrasts the fatigue of the difficult climb with the rewarding beauty of the final summit view."
    },
    {
        "id": 16,
        "section": "english",
        "topic": "Transitions",
        "text": "Volunteering at the animal shelter requires a weekly commitment. ______, volunteers must complete a mandatory orientation workshop.",
        "options": [
            "Additionally",
            "Consequently",
            "Otherwise",
            "Instead"
        ],
        "answer": 0,
        "explanation": "'Additionally' introduces another prerequisite requirement for prospective volunteers."
    },
    {
        "id": 17,
        "section": "english",
        "topic": "Transitions",
        "text": "The city council voted against the proposed shopping mall. ______, they approved funds to create a municipal nature preserve on the property.",
        "options": [
            "Instead",
            "Therefore",
            "Likewise",
            "For example"
        ],
        "answer": 0,
        "explanation": "'Instead' signals the alternative zoning decision adopted in place of the rejected shopping mall."
    },
    {
        "id": 18,
        "section": "english",
        "topic": "Transitions",
        "text": "Proper hydration enhances athletic endurance. ______, it facilitates muscle recovery and reduces post-workout soreness.",
        "options": [
            "Moreover",
            "Regardless",
            "In spite of this",
            "Conversely"
        ],
        "answer": 0,
        "explanation": "'Moreover' adds another physiological advantage of proper hydration during athletic training."
    },
    {
        "id": 19,
        "section": "english",
        "topic": "Transitions",
        "text": "The archaeological artifacts were extremely fragile. ______, excavators handled them exclusively with specialized tools and padded containers.",
        "options": [
            "For this reason",
            "Nevertheless",
            "Conversely",
            "On the other hand"
        ],
        "answer": 0,
        "explanation": "'For this reason' directly explains why the excavators exercised such delicate care when handling the fragile artifacts."
    },
    {
        "id": 20,
        "section": "english",
        "topic": "Transitions",
        "text": "The violin requires years of dedicated practice to master. ______, the cello demands rigorous physical and technical discipline.",
        "options": [
            "Similarly",
            "On the contrary",
            "However",
            "In contrast"
        ],
        "answer": 0,
        "explanation": "'Similarly' compares two string instruments that share the requirement of rigorous discipline and long-term practice."
    }
];

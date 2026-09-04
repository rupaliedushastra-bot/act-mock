// =============================================
// act_questions1.js – ACT Practice Test 2
// Core ACT Format: English (50Q), Math (45Q), Reading (36Q)
// Total: 131 questions
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "english",
        "topic": "Punctuation",
        "text": "The research team led by Dr. Aris Thorne, who had spent five weeks analyzing deep-sea hydrothermal emission in the Mariana Trench finally published their findings in a leading scientific journal.\n\nWhich of the following best corrects the punctuation in the sentence above?",
        "options": [
            "The research team led by Dr. Aris Thorne, who had spent five weeks analyzing deep-sea hydrothermal emission in the Mariana Trench, finally published their findings in a leading scientific journal.",
            "The research team led by Dr. Aris Thorne who had spent five weeks analyzing deep-sea hydrothermal emission in the Mariana Trench, finally published their findings in a leading scientific journal.",
            "The research team led by Dr. Aris Thorne, who had spent five weeks analyzing deep-sea hydrothermal emission in the Mariana Trench finally, published their findings in a leading scientific journal.",
            "The research team led by Dr. Aris Thorne who had spent five weeks analyzing deep-sea hydrothermal emission, in the Mariana Trench finally published their findings in a leading scientific journal."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The research team led by Dr. Aris Thorne, who had spent five weeks analyzing deep-sea hydrothermal emission in the Mariana Trench, finally published their findings in a leading scientific journal.\". The non-essential relative clause beginning with 'who had spent five weeks...' must be set off by paired commas."
    },
    {
        "id": 2,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Neither Dr. Aris Thorne nor the Mariana Research Division technicians was able to calibrate the submersible optical probe before the expedition began.\n\nWhich correction should be made to the underlined verb?",
        "options": [
            "is able to calibrate",
            "were able to calibrate",
            "was being able to calibrate",
            "No change needed"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"were able to calibrate\". With 'neither... nor', the verb agrees with the closer subject ('technicians', plural), requiring 'were'."
    },
    {
        "id": 3,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Examining the delicate structure of deep-sea hydrothermal emission through the submersible optical probe, the anomalous readings became immediately apparent to Dr. Aris Thorne.\n\nWhich revision best corrects the dangling modifier in the sentence?",
        "options": [
            "Through the submersible optical probe, examining the delicate structure of deep-sea hydrothermal emission, the anomalous readings became immediately apparent.",
            "The anomalous readings became immediately apparent, examining the delicate structure of deep-sea hydrothermal emission through the submersible optical probe.",
            "Examining the delicate structure of deep-sea hydrothermal emission through the submersible optical probe, Dr. Aris Thorne immediately noticed the anomalous readings.",
            "Dr. Aris Thorne, examining the delicate structure of deep-sea hydrothermal emission through the submersible optical probe, the anomalous readings became apparent."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Examining the delicate structure of deep-sea hydrothermal emission through the submersible optical probe, Dr. Aris Thorne immediately noticed the anomalous readings.\". The introductory participial phrase must modify the person performing the action (Dr. Aris Thorne), not 'the readings'."
    },
    {
        "id": 4,
        "section": "english",
        "topic": "Style & Tone",
        "text": "The initial hypothesis regarding deep-sea hydrothermal emission formulated by Dr. Aris Thorne was completely disproven by the latest measurements from the Mariana Trench.\n\nWhich alternative to the underlined portion would be LEAST acceptable in maintaining a formal academic tone?",
        "options": [
            "thoroughly refuted",
            "proven inaccurate",
            "rendered untenable",
            "totally shot down"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"totally shot down\". 'Totally shot down' is colloquial slang and undermines the formal register of an academic publication."
    },
    {
        "id": 5,
        "section": "english",
        "topic": "Transitions",
        "text": "The Mariana Research Division faced severe logistical obstacles in the Mariana Trench. [5], the researchers successfully deployed the submersible optical probe on schedule.\n\nWhich transition word or phrase best connects these two sentences?",
        "options": [
            "Nevertheless",
            "Consequently",
            "Furthermore",
            "Similarly"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Nevertheless\". 'Nevertheless' correctly signals a contrast between the severe obstacles and the successful deployment."
    },
    {
        "id": 6,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "The author wants to conclude a paragraph by highlighting the broader technological impact of marine astrophysics pioneered by Dr. Aris Thorne. Which choice best accomplishes this goal?",
        "options": [
            "Dr. Aris Thorne has presented these findings at several international academic symposia.",
            "By translating these observations into synthetic prototypes, industrial engineers can manufacture more resilient commercial materials.",
            "Securing institutional grant funding remains an essential step for laboratory expansion.",
            "Field research in remote environments requires careful logistical planning."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"By translating these observations into synthetic prototypes, industrial engineers can manufacture more resilient commercial materials.\". This option directly connects the specialized scientific findings to broader commercial and industrial applications."
    },
    {
        "id": 7,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "The final report presented by Dr. Aris Thorne contained a concise summary that was brief and to the point regarding deep-sea hydrothermal emission in the Mariana Trench.\n\nWhich revision best eliminates the redundancy in the sentence?",
        "options": [
            "The final report presented a concise summary that was brief and short of deep-sea hydrothermal emission.",
            "The final report presented a brief summary concise and to the point of deep-sea hydrothermal emission.",
            "The final report presented by Dr. Aris Thorne contained a concise summary of deep-sea hydrothermal emission in the Mariana Trench.",
            "The final report presented a summary that was concise, brief, and to the point."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"The final report presented by Dr. Aris Thorne contained a concise summary of deep-sea hydrothermal emission in the Mariana Trench.\". 'Concise summary' inherently means brief and to the point; adding extra qualifiers creates unnecessary redundancy."
    },
    {
        "id": 8,
        "section": "english",
        "topic": "Punctuation",
        "text": "The submersible optical probe recorded unprecedented fluctuations in the Mariana Trench the analytical software processed the telemetry in real time.\n\nWhich choice provides the correct punctuation between the two independent clauses?",
        "options": [
            "the Mariana Trench, the analytical",
            "the Mariana Trench the analytical",
            "the Mariana Trench: and the analytical",
            "the Mariana Trench; the analytical"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"the Mariana Trench; the analytical\". Two independent clauses without a coordinating conjunction must be separated by a semicolon."
    },
    {
        "id": 9,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Dr. Aris Thorne consulted with three international specialists from the Mariana Trench, all of [9] had extensive experience in marine astrophysics.\n\nWhich pronoun correctly completes the sentence?",
        "options": [
            "whom",
            "who",
            "which",
            "that"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"whom\". 'Whom' is the objective case pronoun required as the object of the preposition 'of'."
    },
    {
        "id": 10,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "The temperature dropped rapidly after dusk in the Mariana Trench, the Mariana Research Division had to calibrate the heating elements on the submersible optical probe.\n\nWhich choice best corrects the comma splice?",
        "options": [
            "The temperature dropped rapidly after dusk in the Mariana Trench the team had to calibrate the heating elements.",
            "The temperature dropped rapidly after dusk in the Mariana Trench, so the Mariana Research Division had to calibrate the heating elements on the submersible optical probe.",
            "Dropping rapidly after dusk the temperature in the Mariana Trench, the team calibrated the heating elements.",
            "The temperature dropped rapidly after dusk in the Mariana Trench, and so therefore the team calibrated the heating elements."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"The temperature dropped rapidly after dusk in the Mariana Trench, so the Mariana Research Division had to calibrate the heating elements on the submersible optical probe.\". A comma splice between two independent clauses is correctly repaired using a comma and coordinating conjunction ('so')."
    },
    {
        "id": 11,
        "section": "english",
        "topic": "Style & Tone",
        "text": "During the survey in the Mariana Trench, Dr. Aris Thorne collected a bunch of data points on deep-sea hydrothermal emission.\n\nWhich choice replaces the underlined phrase with the most precise and formal academic phrasing?",
        "options": [
            "a whole lot of",
            "tons of",
            "a substantial dataset of",
            "a massive heap of"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"a substantial dataset of\". 'A substantial dataset of' conveys academic precision, avoiding vague or informal colloquialisms."
    },
    {
        "id": 12,
        "section": "english",
        "topic": "Transitions",
        "text": "The filtration membrane on the submersible optical probe clogged due to fine sediment in the Mariana Trench. [12], the automated safety valve halted fluid intake immediately.\n\nWhich transition word best signals the logical relationship?",
        "options": [
            "Conversely",
            "Nonetheless",
            "In contrast",
            "Consequently"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"Consequently\". 'Consequently' correctly indicates that the safety valve action was a direct result of the clogged membrane."
    },
    {
        "id": 13,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "For the sake of logical flow in Dr. Aris Thorne's research log, where should a sentence describing the initial site preparation in the Mariana Trench be placed?",
        "options": [
            "At the beginning of the paragraph, before the discussion of data collection.",
            "At the very end of the essay after the conclusion.",
            "Between the analysis of results and the final summary.",
            "Nowhere, because site preparation is irrelevant to scientific research."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"At the beginning of the paragraph, before the discussion of data collection.\". Chronological logic requires site preparation to precede the collection and analysis of data."
    },
    {
        "id": 14,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Dr. Aris Thorne observed an unusual phenomenon that was rare and out of the ordinary while tracking deep-sea hydrothermal emission in the Mariana Trench.\n\nWhich choice is most concise without losing essential meaning?",
        "options": [
            "an unusual phenomenon that was rare in the Mariana Trench.",
            "an unusual phenomenon in the Mariana Trench.",
            "a rare phenomenon out of the ordinary in the Mariana Trench.",
            "an unusual, rare, and out of the ordinary phenomenon in the Mariana Trench."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"an unusual phenomenon in the Mariana Trench.\". 'An unusual phenomenon' fully captures the meaning without repetitive synonyms like 'rare' and 'out of the ordinary'."
    },
    {
        "id": 15,
        "section": "english",
        "topic": "Punctuation",
        "text": "The three [15] collective recommendations on marine astrophysics were compiled into the final project charter by Dr. Aris Thorne.\n\nWhich choice correctly indicates plural possession?",
        "options": [
            "institution's",
            "institutions",
            "institutions'",
            "institutions's"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"institutions'\". Plural nouns ending in 's' form the possessive by adding an apostrophe after the 's' ('institutions'')."
    },
    {
        "id": 16,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "When the telemetry gauge fluctuated in the Mariana Trench, Dr. Aris Thorne quickly [16] the auxiliary power switch on the submersible optical probe.\n\nWhich verb form maintains proper past tense consistency?",
        "options": [
            "activates",
            "has activated",
            "will activate",
            "activated"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"activated\". The past tense verb 'fluctuated' requires the parallel past tense 'activated' for narrative consistency."
    },
    {
        "id": 17,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "The protocol in the Mariana Trench required Dr. Aris Thorne to inspect the valves, [17], and document all telemetry in the official log.\n\nWhich choice maintains parallel grammatical structure?",
        "options": [
            "clean the optical sensors",
            "cleaning the optical sensors",
            "to have cleaned the optical sensors",
            "the optical sensors were cleaned"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"clean the optical sensors\". The infinitive structure 'to inspect..., [clean]..., and [document]...' requires base verb forms in parallel."
    },
    {
        "id": 18,
        "section": "english",
        "topic": "Style & Tone",
        "text": "The new spectral analysis conducted in the Mariana Trench [18] the presence of rare mineral compounds within deep-sea hydrothermal emission.\n\nWhich choice offers the most precise and descriptive vocabulary?",
        "options": [
            "showed up",
            "substantiated",
            "made clearish",
            "pointed at"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"substantiated\". 'Substantiated' is formal, accurate, and scientifically appropriate."
    },
    {
        "id": 19,
        "section": "english",
        "topic": "Transitions",
        "text": "The submersible optical probe mapped the core structure of deep-sea hydrothermal emission in the Mariana Trench. [19], it recorded ambient temperature and salinity gradients simultaneously.\n\nWhich transition word best adds supporting information?",
        "options": [
            "On the other hand",
            "In spite of this",
            "Furthermore",
            "Instead"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Furthermore\". 'Furthermore' signals the addition of supplementary data collected by the instrument."
    },
    {
        "id": 20,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "Which introductory sentence best establishes the central focus of a passage detailing Dr. Aris Thorne's breakthrough in marine astrophysics across the Mariana Trench?",
        "options": [
            "Many people enjoy reading about scientific discoveries during their leisure time.",
            "the Mariana Trench has a diverse geographical profile characterized by variable weather.",
            "Laboratory equipment is often manufactured by specialized technical firms.",
            "Recent advances in marine astrophysics have been accelerated by groundbreaking field methodologies pioneered by Dr. Aris Thorne."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"Recent advances in marine astrophysics have been accelerated by groundbreaking field methodologies pioneered by Dr. Aris Thorne.\". This sentence clearly introduces both the scientific discipline and the central role of the primary researcher."
    },
    {
        "id": 21,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Dr. Aris Thorne made adjustments to the submersible optical probe in the Mariana Trench [21] adverse atmospheric pressure.\n\nWhich choice is the most concise replacement for 'on account of the fact that there was'?",
        "options": [
            "because of",
            "on account of the fact that there was",
            "due to the circumstance where there was",
            "owing to the presence of the reality of"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"because of\". 'Because of' is the most direct and economical way to express causation."
    },
    {
        "id": 22,
        "section": "english",
        "topic": "Punctuation",
        "text": "The survey of deep-sea hydrothermal emission in the Mariana Trench yielded three critical artifacts [22] a brass sextant, an annotated navigational log, and a hand-drawn portolan chart.\n\nWhich punctuation mark correctly introduces the list following an independent clause?",
        "options": [
            "artifacts;",
            "artifacts:",
            "artifacts,",
            "artifacts"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"artifacts:\". A colon is used after an independent clause to introduce an elaborating list or explanation."
    },
    {
        "id": 23,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Each of the experimental samples collected by Dr. Aris Thorne from the Mariana Trench [23] cataloged in the Mariana Research Division database.\n\nWhich verb correctly completes the sentence?",
        "options": [
            "are",
            "were",
            "is",
            "have been"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"is\". 'Each' is a singular indefinite pronoun and requires the singular verb 'is'."
    },
    {
        "id": 24,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Because the physical conditions surrounding deep-sea hydrothermal emission in the Mariana Trench were more severe than anticipated. The submersible optical probe drifted off its planned trajectory.\n\nWhich revision eliminates the sentence fragment?",
        "options": [
            "Because the physical conditions surrounding deep-sea hydrothermal emission in the Mariana Trench were more severe than anticipated; the submersible optical probe drifted off its planned trajectory.",
            "Being that conditions were more severe than anticipated. The submersible optical probe drifted.",
            "The conditions being severe in the Mariana Trench. Causing the submersible optical probe to drift.",
            "Because the physical conditions surrounding deep-sea hydrothermal emission in the Mariana Trench were more severe than anticipated, the submersible optical probe drifted off its planned trajectory."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"Because the physical conditions surrounding deep-sea hydrothermal emission in the Mariana Trench were more severe than anticipated, the submersible optical probe drifted off its planned trajectory.\". Attaching the dependent clause ('Because the conditions...') to the independent clause resolves the fragment."
    },
    {
        "id": 25,
        "section": "english",
        "topic": "Style & Tone",
        "text": "All researchers assisting Dr. Aris Thorne in the Mariana Trench must strictly adhere [25] established safety regulations.\n\nWhich preposition completes the standard English idiom?",
        "options": [
            "to",
            "with",
            "at",
            "on"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"to\". The verb 'adhere' idiomatically pairs with the preposition 'to'."
    },
    {
        "id": 26,
        "section": "english",
        "topic": "Transitions",
        "text": "The Mariana Research Division documented several endemic specimens in the Mariana Trench. [26], they identified a unique manifestation of deep-sea hydrothermal emission never before recorded.\n\nWhich transition best introduces a specific example?",
        "options": [
            "In summary",
            "For instance",
            "Nevertheless",
            "Otherwise"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"For instance\". 'For instance' correctly introduces a concrete example of the endemic specimens mentioned."
    },
    {
        "id": 27,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "If Dr. Aris Thorne were to include a quantitative chart comparing measurements of deep-sea hydrothermal emission across the Mariana Trench, the primary rhetorical function would be to:",
        "options": [
            "distract the reader from ambiguities in the experimental methodology.",
            "prove that no further scientific investigation is necessary.",
            "provide empirical validation for the chemical trends described in the narrative.",
            "replace the qualitative descriptions with purely numeric indices."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"provide empirical validation for the chemical trends described in the narrative.\". Quantitative data serves to substantiate and empirically validate the qualitative observations."
    },
    {
        "id": 28,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "The autonomous submersible optical probe deployed in the Mariana Trench operates independently without human guidance on its own.\n\nWhich choice best eliminates repetitive phrasing?",
        "options": [
            "The autonomous submersible optical probe operates independently on its own without human guidance.",
            "Operating independently, the autonomous submersible optical probe guides itself on its own.",
            "The submersible optical probe operates autonomously, independently, and on its own.",
            "The autonomous submersible optical probe operates without human guidance."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"The autonomous submersible optical probe operates without human guidance.\". 'Operates without human guidance' directly explains the function without repeating 'autonomously', 'independently', and 'on its own'."
    },
    {
        "id": 29,
        "section": "english",
        "topic": "Punctuation",
        "text": "The field specimen of deep-sea hydrothermal emission—fragile from centuries of isolation in the Mariana Trench [29] was stabilized by Dr. Aris Thorne.\n\nWhich punctuation mark correctly closes the parenthetical insertion?",
        "options": [
            "isolation in the Mariana Trench—",
            "isolation in the Mariana Trench,",
            "isolation in the Mariana Trench;",
            "isolation in the Mariana Trench"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"isolation in the Mariana Trench—\". A parenthetical interruption opened with an em-dash must be closed with an em-dash."
    },
    {
        "id": 30,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Between the two calibration methods tested by Dr. Aris Thorne in the Mariana Trench, the second protocol demonstrated [30] analytical accuracy.\n\nWhich modifier form is grammatically correct?",
        "options": [
            "greatest",
            "greater",
            "most greatest",
            "more greater"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"greater\". When comparing exactly two items, the comparative form ('greater') is required, not the superlative ('greatest')."
    },
    {
        "id": 31,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "In the Mariana Trench, Dr. Aris Thorne only analyzed the data points gathered by the submersible optical probe.\n\nWhich placement of 'only' makes it clear that no other data points were analyzed?",
        "options": [
            "In the Mariana Trench, only Dr. Aris Thorne analyzed the data points gathered by the submersible optical probe.",
            "In the Mariana Trench, Dr. Aris Thorne analyzed the data points only gathered by the submersible optical probe.",
            "In the Mariana Trench, Dr. Aris Thorne analyzed only the data points gathered by the submersible optical probe.",
            "In the Mariana Trench, Dr. Aris Thorne analyzed the data points that only were gathered by the submersible optical probe."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"In the Mariana Trench, Dr. Aris Thorne analyzed only the data points gathered by the submersible optical probe.\". Placing 'only' immediately before 'the data points' unambiguously restricts the action to those specific data points."
    },
    {
        "id": 32,
        "section": "english",
        "topic": "Style & Tone",
        "text": "The Mariana Research Division specialists in the Mariana Trench [32] to verify the structural integrity of the submersible optical probe.\n\nWhich choice is best suited to contemporary professional writing?",
        "options": [
            "did strive mightily",
            "went forth",
            "soughteth",
            "endeavored"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"endeavored\". 'Endeavored' is professional and contemporary, avoiding archaic theatrical language."
    },
    {
        "id": 33,
        "section": "english",
        "topic": "Transitions",
        "text": "[33] the initial sensor calibrations in the Mariana Trench were delayed by inclement conditions, Dr. Aris Thorne's primary research objectives were fully met.\n\nWhich subordinating conjunction best indicates concession?",
        "options": [
            "Although",
            "Because",
            "Since",
            "Unless"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Although\". 'Although' introduces a concession clause, acknowledging the delay while highlighting overall success."
    },
    {
        "id": 34,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "Consider the phrase in Dr. Aris Thorne's summary: 'It is interesting and worth noting that deep-sea hydrothermal emission reacts dynamically to seasonal shifts in the Mariana Trench.'\n\nWhich revision most effectively improves directness?",
        "options": [
            "As a matter of interesting fact, deep-sea hydrothermal emission reacts dynamically to seasonal shifts in the Mariana Trench.",
            "deep-sea hydrothermal emission reacts dynamically to seasonal shifts in the Mariana Trench.",
            "Worth noting is the reality that deep-sea hydrothermal emission reacts dynamically in the Mariana Trench.",
            "It goes without saying that deep-sea hydrothermal emission reacts dynamically in the Mariana Trench."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"deep-sea hydrothermal emission reacts dynamically to seasonal shifts in the Mariana Trench.\". Deleting unnecessary throat-clearing phrases ('It is worth noting that...') makes the statement direct and authoritative."
    },
    {
        "id": 35,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "The Mariana Research Division decided to make an assessment of the safety protocols governing the Mariana Trench.\n\nWhich revision is the most concise and forceful?",
        "options": [
            "The Mariana Research Division decided to perform an assessment on the safety protocols in the Mariana Trench.",
            "The Mariana Research Division decided to conduct a process of assessment of safety in the Mariana Trench.",
            "The Mariana Research Division decided to assess the safety protocols governing the Mariana Trench.",
            "The Mariana Research Division decided to carry out the making of an assessment for the Mariana Trench."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"The Mariana Research Division decided to assess the safety protocols governing the Mariana Trench.\". Replacing the nominalized phrase 'make an assessment of' with the active verb 'assess' enhances clarity."
    },
    {
        "id": 36,
        "section": "english",
        "topic": "Punctuation",
        "text": "Dr. Aris Thorne discovered a dense [36] intricate network of crystalline features surrounding deep-sea hydrothermal emission in the Mariana Trench.\n\nWhich choice correctly punctuates coordinate adjectives?",
        "options": [
            "dense;",
            "dense",
            "dense and,",
            "dense,"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"dense,\". Coordinate adjectives ('dense' and 'intricate') modifying the same noun should be separated by a comma."
    },
    {
        "id": 37,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "If the submersible optical probe [37] capable of operating in the Mariana Trench indefinitely, Dr. Aris Thorne could record longitudinal data continuously.\n\nWhich verb form correctly expresses this hypothetical condition?",
        "options": [
            "were",
            "was",
            "is",
            "will be"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"were\". In contrary-to-fact conditional statements (subjunctive mood), 'were' is used regardless of the subject's number."
    },
    {
        "id": 38,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "The Mariana Research Division not only documented novel properties of deep-sea hydrothermal emission [38] expanded geophysical mapping across the Mariana Trench.\n\nWhich phrase correctly completes the correlative pair?",
        "options": [
            "and also",
            "but also",
            "as well as",
            "in addition to"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"but also\". 'Not only' must be paired with 'but also' for grammatical parallelism."
    },
    {
        "id": 39,
        "section": "english",
        "topic": "Style & Tone",
        "text": "A comprehensive geological survey of the Mariana Trench was conducted by Dr. Aris Thorne and the Mariana Research Division.\n\nWhich revision converts the sentence into direct active voice?",
        "options": [
            "Conducted by Dr. Aris Thorne and the Mariana Research Division was a comprehensive geological survey of the Mariana Trench.",
            "A comprehensive survey of the Mariana Trench had its conduction by Dr. Aris Thorne.",
            "Dr. Aris Thorne and the Mariana Research Division conducted a comprehensive geological survey of the Mariana Trench.",
            "There was a comprehensive geological survey of the Mariana Trench conducted by the team."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Dr. Aris Thorne and the Mariana Research Division conducted a comprehensive geological survey of the Mariana Trench.\". Active voice places the actors first, improving clarity and grammatical vigor."
    },
    {
        "id": 40,
        "section": "english",
        "topic": "Transitions",
        "text": "Dr. Aris Thorne mapped the outer perimeter of the Mariana Trench. [40], the team deployed the submersible optical probe into the central core.\n\nWhich transition best conveys sequential progression?",
        "options": [
            "Simultaneously",
            "Previously",
            "Nevertheless",
            "Subsequently"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"Subsequently\". 'Subsequently' indicates that the central deployment occurred after the perimeter mapping was complete."
    },
    {
        "id": 41,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "Which choice provides the most relevant detail to support Dr. Aris Thorne's claim that deep-sea hydrothermal emission represents an extreme biological habitat in the Mariana Trench?",
        "options": [
            "Ambient temperatures at the Mariana Trench reach critical extremes under pressures 150 times greater than baseline standard atmosphere.",
            "The research vessel is equipped with comfortable crew cabins and a modern navigation deck.",
            "Dr. Aris Thorne studied chemistry before specializing in marine astrophysics.",
            "Many scientific expeditions are documented in popular non-fiction periodicals."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Ambient temperatures at the Mariana Trench reach critical extremes under pressures 150 times greater than baseline standard atmosphere.\". Extreme physical measurements directly substantiate the claim of an extreme biological habitat."
    },
    {
        "id": 42,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "In the event that the primary sensor on the submersible optical probe fails in the Mariana Trench, the emergency beacon will engage.\n\nWhich word is the most concise replacement for 'In the event that'?",
        "options": [
            "In the circumstance where",
            "If",
            "Given the factual condition that",
            "Under the contingency wherein"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"If\". 'If' is the standard, concise equivalent of 'In the event that'."
    },
    {
        "id": 43,
        "section": "english",
        "topic": "Punctuation",
        "text": "Dr. Aris Thorne announced to the Mariana Research Division [43] \"Our preliminary telemetry confirms a major breakthrough regarding deep-sea hydrothermal emission.\"\n\nWhich choice correctly introduces the quotation?",
        "options": [
            "announced to the Mariana Research Division;",
            "announced to the Mariana Research Division:",
            "announced to the Mariana Research Division,",
            "announced to the Mariana Research Division"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"announced to the Mariana Research Division,\". A comma is conventionally used to introduce a direct quotation following a dialogue tag."
    },
    {
        "id": 44,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "When the submersible optical probe struck the basalt formation in the Mariana Trench, it sustained minor surface abrasions.\n\nWhich revision eliminates the ambiguous pronoun 'it'?",
        "options": [
            "When it struck the basalt formation in the Mariana Trench, the submersible optical probe cracked.",
            "Striking the basalt formation in the Mariana Trench, it sustained abrasions.",
            "The submersible optical probe and basalt collided in the Mariana Trench, and it was abraded.",
            "When the submersible optical probe struck the basalt formation in the Mariana Trench, the instrument sustained minor surface abrasions."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"When the submersible optical probe struck the basalt formation in the Mariana Trench, the instrument sustained minor surface abrasions.\". Specifying 'the instrument' clarifies which object sustained the abrasions."
    },
    {
        "id": 45,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "The telemetry stream from the Mariana Trench stopped abruptly the submersible optical probe battery had completely discharged.\n\nWhich choice correctly repairs the run-on sentence?",
        "options": [
            "The telemetry stream from the Mariana Trench stopped abruptly because the submersible optical probe battery had completely discharged.",
            "The telemetry stream from the Mariana Trench stopped abruptly, the battery had discharged.",
            "Stopping abruptly, the telemetry stream from the Mariana Trench the battery had discharged.",
            "The telemetry stream from the Mariana Trench stopped abruptly and so the battery had discharged."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The telemetry stream from the Mariana Trench stopped abruptly because the submersible optical probe battery had completely discharged.\". Using the subordinating conjunction 'because' establishes the causal relationship and eliminates the fused run-on."
    },
    {
        "id": 46,
        "section": "english",
        "topic": "Style & Tone",
        "text": "The data collected by Dr. Aris Thorne in the Mariana Trench revealed an astonishing, mind-boggling increase in the concentration of deep-sea hydrothermal emission.\n\nWhich replacement for the underlined phrase best maintains objective scientific neutrality?",
        "options": [
            "an unbelievable and crazy",
            "a statistically significant",
            "a super massive",
            "a shockingly wild"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"a statistically significant\". 'A statistically significant' provides precise scientific description without sensationalist hyperbole."
    },
    {
        "id": 47,
        "section": "english",
        "topic": "Transitions",
        "text": "Dr. Aris Thorne decided not to drill into the fragile geological crust in the Mariana Trench. [47], the Mariana Research Division utilized non-invasive acoustic mapping from a safe distance.\n\nWhich transition best presents this alternative approach?",
        "options": [
            "Furthermore",
            "Consequently",
            "Instead",
            "Likewise"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Instead\". 'Instead' correctly introduces the chosen alternative action following a rejected option."
    },
    {
        "id": 48,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "The author wants to ensure smooth cohesion between a paragraph describing fieldwork in the Mariana Trench and a paragraph detailing laboratory synthesis of deep-sea hydrothermal emission. Which sentence best bridges this transition?",
        "options": [
            "Laboratory experiments are often conducted in sterile cleanrooms.",
            "Many scientific discoveries occur unexpectedly during routine maintenance.",
            "the Mariana Trench is known for its challenging regional climate.",
            "Having gathered these pristine environmental samples in the Mariana Trench, Dr. Aris Thorne returned to the laboratory to synthesize artificial analogues."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"Having gathered these pristine environmental samples in the Mariana Trench, Dr. Aris Thorne returned to the laboratory to synthesize artificial analogues.\". This bridging sentence links the completion of fieldwork in the Mariana Trench directly to the laboratory synthesis phase."
    },
    {
        "id": 49,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Historical precedents from the past history of marine astrophysics guided Dr. Aris Thorne's safety protocols in the Mariana Trench.\n\nWhich revision removes redundant wording?",
        "options": [
            "Historical precedents in marine astrophysics guided Dr. Aris Thorne's safety protocols in the Mariana Trench.",
            "Past historical precedents from history guided protocols in the Mariana Trench.",
            "Precedents from past history guided protocols in the Mariana Trench.",
            "Historical precedents from earlier past history guided protocols in the Mariana Trench."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Historical precedents in marine astrophysics guided Dr. Aris Thorne's safety protocols in the Mariana Trench.\". 'Historical precedents' already denotes the past; 'from the past history' is redundant."
    },
    {
        "id": 50,
        "section": "english",
        "topic": "Punctuation",
        "text": "Dr. Aris Thorne utilized a state [50] the art submersible optical probe to analyze deep-sea hydrothermal emission in the Mariana Trench.\n\nWhich choice correctly punctuates the compound adjective before the noun?",
        "options": [
            "state of the art",
            "state-of-the-art",
            "state, of, the, art",
            "state-of the art"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"state-of-the-art\". Compound adjectives appearing before a noun must be hyphenated ('state-of-the-art submersible optical probe')."
    },
    {
        "id": 51,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "A science laboratory orders 24 precision micropipette tips priced at $4.05 per pack. If the supplier provides an educational discount of 10% on the entire order, what is the net total cost before tax?",
        "options": [
            "$87.48",
            "$97.20",
            "$82.62",
            "$106.92"
        ],
        "answer": 0,
        "explanation": "Total standard price = 24 × $4.05 = $97.20. Applying 10% discount: $97.20 × (1 &minus; 0.1) = $87.48."
    },
    {
        "id": 52,
        "section": "math",
        "topic": "Percentages",
        "text": "A regional wildlife reserve recorded an initial population of 390 migratory cranes. In year one, the population expanded by 14%, and in year two, seasonal conditions caused an 20% reduction from the new total. What was the population at the end of year two (rounded to the nearest integer)?",
        "options": [
            "293",
            "356",
            "445",
            "488"
        ],
        "answer": 1,
        "explanation": "Year 1 count: 390 × (1 + 0.14) = 444.6. Year 2 count: 444.6 × (1 &minus; 0.2) = 356."
    },
    {
        "id": 53,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Determine the real value of <i>x</i> that satisfies the equation: 7(<i>x</i> &minus; 4) = 34.",
        "options": [
            "4.29",
            "0.86",
            "8.86",
            "12.06"
        ],
        "answer": 2,
        "explanation": "Divide both sides by 7: <i>x</i> &minus; 4 = 34/7 &rArr; <i>x</i> = 4.86 + 4 = 8.86."
    },
    {
        "id": 54,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "What is the simplified numerical value of (16)<sup>3/2</sup>?",
        "options": [
            "256",
            "12",
            "16",
            "64"
        ],
        "answer": 3,
        "explanation": "(16)<sup>3/2</sup> = (&radic;16)<sup>3</sup> = (4)<sup>3</sup> = 64."
    },
    {
        "id": 55,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "Which equation represents the line in the standard coordinate plane that passes through (2, 9) and runs parallel to <i>y</i> = 5<i>x</i> &minus; 15?",
        "options": [
            "<i>y</i> = 5<i>x</i> &minus; 1",
            "<i>y</i> = &minus;5<i>x</i> &minus; 1",
            "<i>y</i> = 5<i>x</i> + 19",
            "<i>y</i> = (1/5)<i>x</i> + 7"
        ],
        "answer": 0,
        "explanation": "Parallel lines have identical slope <i>m</i> = 5. Using point-slope: <i>y</i> &minus; 9 = 5(<i>x</i> &minus; 2) &rArr; <i>y</i> = 5<i>x</i> &minus; 1."
    },
    {
        "id": 56,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "In a plane geometric construction, ray <i>PT</i> intersects line <i>RS</i> at point <i>P</i>. If &ang;<i>RPT</i> measures 49&deg;, what is the exact measure of adjacent angle &ang;<i>TPS</i>?",
        "options": [
            "49&deg;",
            "131&deg;",
            "64&deg;",
            "111&deg;"
        ],
        "answer": 1,
        "explanation": "Adjacent angles forming a linear pair sum to 180&deg;. &ang;<i>TPS</i> = 180&deg; &minus; 49&deg; = 131&deg;."
    },
    {
        "id": 57,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Find the unique solution pair (<i>x</i>, <i>y</i>) that satisfies the system:\n\n<i>x</i> + <i>y</i> = 11\n2<i>x</i> &minus; <i>y</i> = 7",
        "options": [
            "<i>x</i> = 8, <i>y</i> = 4",
            "<i>x</i> = 10, <i>y</i> = 4",
            "<i>x</i> = 6, <i>y</i> = 5",
            "<i>x</i> = &minus;6, <i>y</i> = 5"
        ],
        "answer": 2,
        "explanation": "Adding equations: 3<i>x</i> = 18 &rArr; <i>x</i> = 6. Then <i>y</i> = 11 &minus; 6 = 5."
    },
    {
        "id": 58,
        "section": "math",
        "topic": "Trigonometry",
        "text": "In right triangle &Delta;<i>PQR</i> with &ang;<i>Q</i> = 90&deg;, side <i>PQ</i> has length 11 and hypotenuse <i>PR</i> has length 31. What is the exact value of cos(&ang;<i>P</i>)?",
        "options": [
            "31/11",
            "&radic;(840)/31",
            "1",
            "11/31"
        ],
        "answer": 3,
        "explanation": "cos(&ang;<i>P</i>) = Adjacent / Hypotenuse = <i>PQ</i> / <i>PR</i> = 11/31."
    },
    {
        "id": 59,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "What is the median value of the sorted numerical collection: { 32, 36, 41, 48, 57, 70, 83 }?",
        "options": [
            "48",
            "36",
            "70",
            "83"
        ],
        "answer": 0,
        "explanation": "For an ordered dataset of 7 elements, the median is the 4th element: 48."
    },
    {
        "id": 60,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "A metallurgical alloy requires copper and zinc in a mass ratio of 5:8. If a foundry batch contains 90 kg of copper, how many kilograms of zinc must be blended?",
        "options": [
            "158 kg",
            "144 kg",
            "133 kg",
            "115 kg"
        ],
        "answer": 1,
        "explanation": "Ratio: 5/8 = 90/<i>z</i> &rArr; <i>z</i> = (8 × 90) / 5 = 144 kg."
    },
    {
        "id": 61,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Find the greatest common factor (GCF) of 348 and 522.",
        "options": [
            "174",
            "87",
            "348",
            "1044"
        ],
        "answer": 0,
        "explanation": "GCF(348, 522) = 87 × GCF(4, 6) = 87 × 2 = 174."
    },
    {
        "id": 62,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for <i>x</i> in the equation: 4<i>x</i> &minus; 88 = 3<i>x</i> + 158.",
        "options": [
            "70",
            "246",
            "176",
            "252"
        ],
        "answer": 1,
        "explanation": "4<i>x</i> &minus; 3<i>x</i> = 158 + 88 &rArr; <i>x</i> = 246."
    },
    {
        "id": 63,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "A rectangular courtyard has length 99 meters and width 165 meters. What is its total perimeter?",
        "options": [
            "16335 m",
            "264 m",
            "528 m",
            "540 m"
        ],
        "answer": 2,
        "explanation": "Perimeter = 2(Length + Width) = 2(99 + 165) = 528 m."
    },
    {
        "id": 64,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify the algebraic expression: (<i>y</i><sup>4</sup>)<sup>5</sup> &middot; <i>y</i><sup>4</sup>.",
        "options": [
            "<i>y</i><sup>27</sup>",
            "<i>y</i><sup>22</sup>",
            "<i>y</i><sup>48</sup>",
            "<i>y</i><sup>24</sup>"
        ],
        "answer": 3,
        "explanation": "(<i>y</i><sup>4</sup>)<sup>5</sup> = <i>y</i><sup>20</sup>. Multiplying by <i>y</i><sup>4</sup> gives <i>y</i><sup>24</sup>."
    },
    {
        "id": 65,
        "section": "math",
        "topic": "Trigonometry",
        "text": "In right triangle &Delta;<i>ABC</i>, acute angle &theta; has tan(&theta;) = 3/6. What is cot(&theta;)?",
        "options": [
            "6/3",
            "3/6",
            "1",
            "&minus;6/3"
        ],
        "answer": 0,
        "explanation": "cot(&theta;) = 1 / tan(&theta;) = 6/3."
    },
    {
        "id": 66,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "Determine the midpoint of the line segment joining (92, 166) and (100, 178).",
        "options": [
            "(100, 178)",
            "(96, 172)",
            "(94, 169)",
            "(98, 174)"
        ],
        "answer": 1,
        "explanation": "Midpoint = ((92 + 100)/2, (166 + 178)/2) = (96, 172)."
    },
    {
        "id": 67,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "If quadratic function <i>h</i>(<i>x</i>) = 3<i>x</i><sup>2</sup> &minus; 93, evaluate <i>h</i>(4).",
        "options": [
            "141",
            "-69",
            "-45",
            "-34"
        ],
        "answer": 2,
        "explanation": "<i>h</i>(4) = 3(4)<sup>2</sup> &minus; 93 = 3(16) &minus; 93 = 48 &minus; 93 = -45."
    },
    {
        "id": 68,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "A lottery drum contains numbered tokens from 1 through 114. If a single token is selected at random, what is the probability that it is divisible by 5?",
        "options": [
            "25/114",
            "1/114",
            "21/114",
            "22/114"
        ],
        "answer": 3,
        "explanation": "There are 22 multiples of 5 within 1 to 114. Probability = 22/114."
    },
    {
        "id": 69,
        "section": "math",
        "topic": "Percentages",
        "text": "A laboratory apparatus originally priced at $1900 is discounted by 17%. What is the discounted price?",
        "options": [
            "$1577.00",
            "$1710.00",
            "$1235.00",
            "$1900.00"
        ],
        "answer": 0,
        "explanation": "Discounted price = $1900 × (1 &minus; 0.17) = $1577.00."
    },
    {
        "id": 70,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "What is the area of a right triangle with base 192 mm and perpendicular height 348 mm?",
        "options": [
            "66816 mm<sup>2</sup>",
            "33408 mm<sup>2</sup>",
            "16704 mm<sup>2</sup>",
            "2160 mm<sup>2</sup>"
        ],
        "answer": 1,
        "explanation": "Area = (1/2) × base × height = (1/2) × 192 × 348 = 33408 mm<sup>2</sup>."
    },
    {
        "id": 71,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Solve the absolute value equation: |3<i>x</i> &minus; 291| = 528.",
        "options": [
            "<i>x</i> = 273",
            "<i>x</i> = -79",
            "<i>x</i> = 273 or <i>x</i> = -79",
            "<i>x</i> = &minus;273 or <i>x</i> = &minus;-79"
        ],
        "answer": 2,
        "explanation": "3<i>x</i> &minus; 291 = 528 &rArr; <i>x</i> = 273; 3<i>x</i> &minus; 291 = &minus;528 &rArr; <i>x</i> = -79."
    },
    {
        "id": 72,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "A circle in the standard coordinate plane has equation (<i>x</i> + 98)<sup>2</sup> + (<i>y</i> &minus; 178)<sup>2</sup> = 64516. What is its radius?",
        "options": [
            "64516 units",
            "101 units",
            "185 units",
            "254 units"
        ],
        "answer": 3,
        "explanation": "In (<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup>, the radius <i>r</i> = &radic;(64516) = 254 units."
    },
    {
        "id": 73,
        "section": "math",
        "topic": "Trigonometry",
        "text": "Convert the angle 1485&deg; into radian measure.",
        "options": [
            "33&pi;/4",
            "33&pi;/6",
            "4&pi;/34",
            "(1485/360)&pi;"
        ],
        "answer": 0,
        "explanation": "Radians = (Degrees × &pi;) / 180 = (1485&pi;) / 180 = 33&pi;/4."
    },
    {
        "id": 74,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "An arithmetic sequence has initial term <i>a</i><sub>1</sub> = 100 and common difference <i>d</i> = 5. What is the 10th term, <i>a</i><sub>10</sub>?",
        "options": [
            "137",
            "145",
            "157",
            "175"
        ],
        "answer": 1,
        "explanation": "<i>a</i><sub>10</sub> = <i>a</i><sub>1</sub> + (10 &minus; 1)<i>d</i> = 100 + 9(5) = 145."
    },
    {
        "id": 75,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Factor the quadratic binomial completely: <i>x</i><sup>2</sup> &minus; 11236.",
        "options": [
            "(<i>x</i> &minus; 106)<sup>2</sup>",
            "(<i>x</i> + 106)<sup>2</sup>",
            "(<i>x</i> &minus; 106)(<i>x</i> + 106)",
            "(<i>x</i> &minus; 212)(<i>x</i> + 2)"
        ],
        "answer": 2,
        "explanation": "Difference of squares: <i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup> = (<i>a</i> &minus; <i>b</i>)(<i>a</i> + <i>b</i>)."
    },
    {
        "id": 76,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "From a cohort of 14 researchers, how many distinct 2-person subcommittees can be formed?",
        "options": [
            "182",
            "28",
            "101",
            "91"
        ],
        "answer": 3,
        "explanation": "<i>C</i>(14, 2) = (14 × 13) / 2 = 91."
    },
    {
        "id": 77,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Simplify the complex number product: (4 + 2<i>i</i>)(3 &minus; <i>i</i>), where <i>i</i><sup>2</sup> = &minus;1.",
        "options": [
            "14 + 2<i>i</i>",
            "14 &minus; 7<i>i</i>",
            "20 + <i>i</i>",
            "12 &minus; 4<i>i</i>"
        ],
        "answer": 0,
        "explanation": "(4 + 2<i>i</i>)(3 &minus; <i>i</i>) = 12 &minus; 4<i>i</i> + 6<i>i</i> &minus; 2<i>i</i><sup>2</sup> = 14 + 2<i>i</i>."
    },
    {
        "id": 78,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "A solid geometric cone has a circular base radius of 5 cm and a height of 8 cm. What is its volume?",
        "options": [
            "166.8&pi; cm<sup>3</sup>",
            "66.7&pi; cm<sup>3</sup>",
            "33.4&pi; cm<sup>3</sup>",
            "80&pi; cm<sup>3</sup>"
        ],
        "answer": 1,
        "explanation": "Volume = (1/3)&pi;<i>r</i><sup>2</sup><i>h</i> = (1/3)&pi;(5)<sup>2</sup>(8) = 66.7&pi; cm<sup>3</sup>."
    },
    {
        "id": 79,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "If variable <i>u</i> is inversely proportional to <i>v</i>, and <i>u</i> = 210 when <i>v</i> = 3, what is <i>u</i> when <i>v</i> = 6?",
        "options": [
            "315",
            "53",
            "105",
            "525"
        ],
        "answer": 2,
        "explanation": "Inverse variation: <i>u</i> &middot; <i>v</i> = <i>k</i> &rArr; <i>k</i> = 210 × 3 = 630. When <i>v</i> = 6, <i>u</i> = 630 / 6 = 105."
    },
    {
        "id": 80,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the <i>x</i>-intercept of the linear equation 5<i>x</i> &minus; 2<i>y</i> = 1060?",
        "options": [
            "(0, 212)",
            "(424, 0)",
            "(&minus;212, 0)",
            "(212, 0)"
        ],
        "answer": 3,
        "explanation": "Set <i>y</i> = 0 &rArr; 5<i>x</i> = 1060 &rArr; <i>x</i> = 212. Intercept is (212, 0)."
    },
    {
        "id": 81,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify the radical product: &radic;(321) &middot; &radic;(1284).",
        "options": [
            "642",
            "1284",
            "428",
            "657"
        ],
        "answer": 0,
        "explanation": "&radic;(321 × 1284) = &radic;(412164) = 107 × 6 = 642."
    },
    {
        "id": 82,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Evaluate the logarithmic expression: log<sub>7</sub>(343).",
        "options": [
            "2",
            "3",
            "7",
            "4"
        ],
        "answer": 1,
        "explanation": "log<sub>7</sub>(7<sup>3</sup>) = 3."
    },
    {
        "id": 83,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "In a circle with radius 113 cm, calculate the area of a sector with a central angle of 60&deg;.",
        "options": [
            "5320.43&pi; cm<sup>2</sup>",
            "1064.09&pi; cm<sup>2</sup>",
            "2128.17&pi; cm<sup>2</sup>",
            "339&pi; cm<sup>2</sup>"
        ],
        "answer": 2,
        "explanation": "Sector Area = &pi;<i>r</i><sup>2</sup>(&theta;/360&deg;) = &pi;(113)<sup>2</sup>(60&deg;/360&deg;) = 2128.17&pi; cm<sup>2</sup>."
    },
    {
        "id": 84,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for <i>w</i> in the rational equation: <i>w</i>/5 + <i>w</i>/2 = 770.",
        "options": [
            "770",
            "550",
            "1540",
            "1100"
        ],
        "answer": 3,
        "explanation": "Common denominator: (2<i>w</i> + 5<i>w</i>)/10 = 7<i>w</i>/10 = 770 &rArr; <i>w</i> = 10 × 110 = 1100."
    },
    {
        "id": 85,
        "section": "math",
        "topic": "Trigonometry",
        "text": "If &theta; is an acute angle in test 2 with sin(&theta;) = 1/2, what is the value of cos(&theta;)?",
        "options": [
            "&radic;3/2",
            "1/2",
            "&radic;2/2",
            "1"
        ],
        "answer": 0,
        "explanation": "In a 30&deg;-60&deg;-90&deg; special triangle where sin(30&deg;) = 1/2, cos(30&deg;) = &radic;3/2."
    },
    {
        "id": 86,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "A sample container has 5 red beads, 6 blue beads, and 7 green beads. What is the probability of drawing a red bead?",
        "options": [
            "6/18",
            "5/18",
            "7/18",
            "1/18"
        ],
        "answer": 1,
        "explanation": "Probability = (Red beads) / (Total beads) = 5 / (5 + 6 + 7) = 5/18."
    },
    {
        "id": 87,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Determine the discriminant &Delta; for the quadratic equation 2<i>x</i><sup>2</sup> + 8<i>x</i> + 6 = 0.",
        "options": [
            "32",
            "112",
            "16",
            "2"
        ],
        "answer": 2,
        "explanation": "Discriminant &Delta; = <i>b</i><sup>2</sup> &minus; 4<i>ac</i> = 8<sup>2</sup> &minus; 4(2)(6) = 64 &minus; 48 = 16."
    },
    {
        "id": 88,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "Calculate the slope of the line passing through coordinates (4, 114) and (7, 129).",
        "options": [
            "1/5",
            "15",
            "3/7",
            "5"
        ],
        "answer": 3,
        "explanation": "Slope <i>m</i> = (129 &minus; 114) / (7 &minus; 4) = 15/3 = 5."
    },
    {
        "id": 89,
        "section": "math",
        "topic": "Percentages",
        "text": "What is 12% of 4240?",
        "options": [
            "508.8",
            "520.8",
            "500.8",
            "1908.0"
        ],
        "answer": 0,
        "explanation": "(12/100) × 4240 = 508.8."
    },
    {
        "id": 90,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "The hypotenuse of an isosceles right triangle is 464&radic;2 cm. What is the length of each leg?",
        "options": [
            "232 cm",
            "464 cm",
            "928 cm",
            "470 cm"
        ],
        "answer": 1,
        "explanation": "In a 45&deg;-45&deg;-90&deg; right triangle, Hypotenuse = Leg &middot; &radic;2 &rArr; Leg = 464 cm."
    },
    {
        "id": 91,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Evaluate the arithmetic expression: |&minus;468| &minus; |432| + |&minus;6|.",
        "options": [
            "56",
            "32",
            "42",
            "906"
        ],
        "answer": 2,
        "explanation": "468 &minus; 432 + 6 = 42."
    },
    {
        "id": 92,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Given <i>f</i>(<i>x</i>) = 2<i>x</i> + 5 and <i>g</i>(<i>x</i>) = 3<i>x</i>, evaluate the composite function <i>f</i>(<i>g</i>(4)).",
        "options": [
            "36",
            "18",
            "39",
            "29"
        ],
        "answer": 3,
        "explanation": "<i>g</i>(4) = 3(4) = 12. Then <i>f</i>(12) = 2(12) + 5 = 29."
    },
    {
        "id": 93,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for <i>z</i> in the linear relation: 6<i>z</i> &minus; 714 = 0.",
        "options": [
            "119",
            "123",
            "&minus;119",
            "0"
        ],
        "answer": 0,
        "explanation": "6<i>z</i> = 714 &rArr; <i>z</i> = 119."
    },
    {
        "id": 94,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "The arithmetic mean of four laboratory measurements is 170. If three of the values are 165, 175, and 168, what is the fourth value?",
        "options": [
            "178",
            "172",
            "164",
            "170"
        ],
        "answer": 1,
        "explanation": "Total sum required = 4 × (170) = 680. Fourth value = 680 &minus; 508 = 172."
    },
    {
        "id": 95,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "Which coordinate point lies on the line given by 3<i>x</i> + 2<i>y</i> = 377?",
        "options": [
            "(123, 7)",
            "(121, 11)",
            "(121, 7)",
            "(&minus;121, 7)"
        ],
        "answer": 2,
        "explanation": "3(121) + 2(7) = 363 + 14. The point (121, 7) satisfies the equation."
    },
    {
        "id": 96,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Clockmaker's Apprentice\"\n\nJulian spent his formative years inside the dimly lit workshop of Master Elias, where the ticking of two hundred timepieces formed a steady cadence. Unlike his impatient peers who saw clockmaking merely as tradecraft, Julian recognized the philosophical gravity of measuring fleeting moments. Each gear was forged with exacting temperance, polished until it reflected the subtle amber glow of kerosene lamps. When an ornate astronomical clock arrived from the Bavarian court, Elias entrusted the restoration entirely to Julian, testing not only his mechanical prowess but his ability to interpret the silent intentions of its original sixteenth-century maker.",
        "text": "Based on Passage I (\"The Clockmaker's Apprentice\"), the primary purpose of the text is to:",
        "options": [
            "criticize traditional approaches while advocating for immediate reform.",
            "examine the intricate relationship between the clockmaker's apprentice and its broader significance.",
            "provide a purely statistical timeline of historical events.",
            "argue that modern technological advancements have rendered past practices obsolete."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"examine the intricate relationship between the clockmaker's apprentice and its broader significance.\". The passage as a whole focuses on introducing and exploring the nuances and deeper meaning of \"The Clockmaker's Apprentice\"."
    },
    {
        "id": 97,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Clockmaker's Apprentice\"\n\nJulian spent his formative years inside the dimly lit workshop of Master Elias, where the ticking of two hundred timepieces formed a steady cadence. Unlike his impatient peers who saw clockmaking merely as tradecraft, Julian recognized the philosophical gravity of measuring fleeting moments. Each gear was forged with exacting temperance, polished until it reflected the subtle amber glow of kerosene lamps. When an ornate astronomical clock arrived from the Bavarian court, Elias entrusted the restoration entirely to Julian, testing not only his mechanical prowess but his ability to interpret the silent intentions of its original sixteenth-century maker.",
        "text": "According to the discussion in Passage I (\"The Clockmaker's Apprentice\"), which of the following is explicitly emphasized about the subject?",
        "options": [
            "It was achieved without significant labor or long-term dedication.",
            "It was largely rejected by contemporary experts during its initial phase.",
            "It requires meticulous attention to detail and a deep understanding of foundational principles.",
            "It relies exclusively on automated machinery rather than human expertise."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"It requires meticulous attention to detail and a deep understanding of foundational principles.\". The text provides specific narrative details showing the precision, dedication, and knowledge required."
    },
    {
        "id": 98,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Clockmaker's Apprentice\"\n\nJulian spent his formative years inside the dimly lit workshop of Master Elias, where the ticking of two hundred timepieces formed a steady cadence. Unlike his impatient peers who saw clockmaking merely as tradecraft, Julian recognized the philosophical gravity of measuring fleeting moments. Each gear was forged with exacting temperance, polished until it reflected the subtle amber glow of kerosene lamps. When an ornate astronomical clock arrived from the Bavarian court, Elias entrusted the restoration entirely to Julian, testing not only his mechanical prowess but his ability to interpret the silent intentions of its original sixteenth-century maker.",
        "text": "In the context of Passage I (\"The Clockmaker's Apprentice\"), the author's descriptive tone is best characterized as:",
        "options": [
            "dismissive and cynical.",
            "detached and uninterested.",
            "confrontational and hostile.",
            "reverent and analytical."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"reverent and analytical.\". The author treats the subject with serious appreciation and structured, thoughtful analysis."
    },
    {
        "id": 99,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Clockmaker's Apprentice\"\n\nJulian spent his formative years inside the dimly lit workshop of Master Elias, where the ticking of two hundred timepieces formed a steady cadence. Unlike his impatient peers who saw clockmaking merely as tradecraft, Julian recognized the philosophical gravity of measuring fleeting moments. Each gear was forged with exacting temperance, polished until it reflected the subtle amber glow of kerosene lamps. When an ornate astronomical clock arrived from the Bavarian court, Elias entrusted the restoration entirely to Julian, testing not only his mechanical prowess but his ability to interpret the silent intentions of its original sixteenth-century maker.",
        "text": "It can reasonably be inferred from the narrative presented in Passage I (\"The Clockmaker's Apprentice\") that:",
        "options": [
            "the underlying principles discussed have enduring value that transcends simple utility.",
            "the primary actors involved were unaware of the consequences of their actions.",
            "external economic conditions had no impact on the development of the field.",
            "the subject will likely lose relevance within the coming decade."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"the underlying principles discussed have enduring value that transcends simple utility.\". The narrative suggests that the true significance lies beyond immediate material or practical outcomes."
    },
    {
        "id": 100,
        "section": "reading",
        "topic": "Rhetorical Skills",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Clockmaker's Apprentice\"\n\nJulian spent his formative years inside the dimly lit workshop of Master Elias, where the ticking of two hundred timepieces formed a steady cadence. Unlike his impatient peers who saw clockmaking merely as tradecraft, Julian recognized the philosophical gravity of measuring fleeting moments. Each gear was forged with exacting temperance, polished until it reflected the subtle amber glow of kerosene lamps. When an ornate astronomical clock arrived from the Bavarian court, Elias entrusted the restoration entirely to Julian, testing not only his mechanical prowess but his ability to interpret the silent intentions of its original sixteenth-century maker.",
        "text": "The structural development of Passage I (\"The Clockmaker's Apprentice\") serves primarily to:",
        "options": [
            "open with a refutation of an established scientific consensus.",
            "establish context before exploring specific examples and deeper philosophical implications.",
            "present a chronological series of unrelated anecdotes.",
            "compare two equally viable opposing hypotheses."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"establish context before exploring specific examples and deeper philosophical implications.\". The passage begins by setting the scene and context, then proceeds to detail specific techniques or insights."
    },
    {
        "id": 101,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Clockmaker's Apprentice\"\n\nJulian spent his formative years inside the dimly lit workshop of Master Elias, where the ticking of two hundred timepieces formed a steady cadence. Unlike his impatient peers who saw clockmaking merely as tradecraft, Julian recognized the philosophical gravity of measuring fleeting moments. Each gear was forged with exacting temperance, polished until it reflected the subtle amber glow of kerosene lamps. When an ornate astronomical clock arrived from the Bavarian court, Elias entrusted the restoration entirely to Julian, testing not only his mechanical prowess but his ability to interpret the silent intentions of its original sixteenth-century maker.",
        "text": "In Passage I (\"The Clockmaker's Apprentice\"), the success or impact of the central endeavor is most directly attributed to:",
        "options": [
            "favorable political mandates enacted by municipal authorities.",
            "sheer chance and fortuitous external interventions.",
            "a harmonious blend of disciplined craft, historical knowledge, and perseverance.",
            "hasty improvisation under urgent time constraints."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"a harmonious blend of disciplined craft, historical knowledge, and perseverance.\". The text illustrates that mastery and lasting impact stem from deliberate discipline and deep understanding."
    },
    {
        "id": 102,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Clockmaker's Apprentice\"\n\nJulian spent his formative years inside the dimly lit workshop of Master Elias, where the ticking of two hundred timepieces formed a steady cadence. Unlike his impatient peers who saw clockmaking merely as tradecraft, Julian recognized the philosophical gravity of measuring fleeting moments. Each gear was forged with exacting temperance, polished until it reflected the subtle amber glow of kerosene lamps. When an ornate astronomical clock arrived from the Bavarian court, Elias entrusted the restoration entirely to Julian, testing not only his mechanical prowess but his ability to interpret the silent intentions of its original sixteenth-century maker.",
        "text": "The author's perspective toward the evolution of Passage I (\"The Clockmaker's Apprentice\") is best described as:",
        "options": [
            "skeptical of its claimed achievements.",
            "strictly neutral and reporting raw data.",
            "nostalgic yet dismissive of modern adaptations.",
            "deeply respectful of its heritage and nuanced complexities."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"deeply respectful of its heritage and nuanced complexities.\". The descriptive language emphasizes admiration for the precision, craft, and significance of the subject."
    },
    {
        "id": 103,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Clockmaker's Apprentice\"\n\nJulian spent his formative years inside the dimly lit workshop of Master Elias, where the ticking of two hundred timepieces formed a steady cadence. Unlike his impatient peers who saw clockmaking merely as tradecraft, Julian recognized the philosophical gravity of measuring fleeting moments. Each gear was forged with exacting temperance, polished until it reflected the subtle amber glow of kerosene lamps. When an ornate astronomical clock arrived from the Bavarian court, Elias entrusted the restoration entirely to Julian, testing not only his mechanical prowess but his ability to interpret the silent intentions of its original sixteenth-century maker.",
        "text": "The author of Passage I (\"The Clockmaker's Apprentice\") suggests that viewing the subject merely as a routine process would:",
        "options": [
            "overlook the profound cultural, ecological, or intellectual dimensions it embodies.",
            "lead to rapid efficiency improvements in industrial manufacturing.",
            "be the most accurate way to quantify its economic value.",
            "align perfectly with the original creator's stated philosophy."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"overlook the profound cultural, ecological, or intellectual dimensions it embodies.\". The author explicitly contrasts superficial or purely utilitarian views with deeper appreciation."
    },
    {
        "id": 104,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Clockmaker's Apprentice\"\n\nJulian spent his formative years inside the dimly lit workshop of Master Elias, where the ticking of two hundred timepieces formed a steady cadence. Unlike his impatient peers who saw clockmaking merely as tradecraft, Julian recognized the philosophical gravity of measuring fleeting moments. Each gear was forged with exacting temperance, polished until it reflected the subtle amber glow of kerosene lamps. When an ornate astronomical clock arrived from the Bavarian court, Elias entrusted the restoration entirely to Julian, testing not only his mechanical prowess but his ability to interpret the silent intentions of its original sixteenth-century maker.",
        "text": "Which statement best expresses the overarching conclusion presented in Passage I (\"The Clockmaker's Apprentice\")?",
        "options": [
            "Technological disruption inevitably erodes the value of all historical traditions.",
            "True mastery and understanding arise from honoring fundamental principles while engaging deeply with the work.",
            "Individual achievement is entirely dependent on institutional patronage.",
            "Theoretical models are vastly superior to empirical practice in every domain."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"True mastery and understanding arise from honoring fundamental principles while engaging deeply with the work.\". The concluding lines reflect on the broader significance of dedicated stewardship and deep comprehension."
    },
    {
        "id": 105,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Agriculture & Food Security\"\n\nContemporary urban planners increasingly recognize that rooftop farming and community micro-gardens provide vital social infrastructure alongside supplemental food production. By converting vacant metropolitan surfaces into productive agricultural space, cities mitigate the urban heat island effect while fostering community cohesion across diverse demographic neighborhoods.",
        "text": "Based on Passage II (\"Urban Agriculture & Food Security\"), the primary purpose of the text is to:",
        "options": [
            "criticize traditional approaches while advocating for immediate reform.",
            "provide a purely statistical timeline of historical events.",
            "examine the intricate relationship between urban agriculture & food security and its broader significance.",
            "argue that modern technological advancements have rendered past practices obsolete."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"examine the intricate relationship between urban agriculture & food security and its broader significance.\". The passage as a whole focuses on introducing and exploring the nuances and deeper meaning of \"Urban Agriculture & Food Security\"."
    },
    {
        "id": 106,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Agriculture & Food Security\"\n\nContemporary urban planners increasingly recognize that rooftop farming and community micro-gardens provide vital social infrastructure alongside supplemental food production. By converting vacant metropolitan surfaces into productive agricultural space, cities mitigate the urban heat island effect while fostering community cohesion across diverse demographic neighborhoods.",
        "text": "According to Passage II (\"Urban Agriculture & Food Security\"), which of the following is explicitly emphasized about urban agriculture?",
        "options": [
            "It was achieved without significant labor or long-term dedication.",
            "It provides vital social infrastructure and supplemental food production.",
            "It relies exclusively on automated machinery rather than human expertise.",
            "It requires meticulous attention to detail and a deep understanding of foundational principles."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"It provides vital social infrastructure and supplemental food production.\". The passage explicitly states that rooftop farming and community micro-gardens provide vital social infrastructure alongside supplemental food production."
    },
    {
        "id": 107,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Agriculture & Food Security\"\n\nContemporary urban planners increasingly recognize that rooftop farming and community micro-gardens provide vital social infrastructure alongside supplemental food production. By converting vacant metropolitan surfaces into productive agricultural space, cities mitigate the urban heat island effect while fostering community cohesion across diverse demographic neighborhoods.",
        "text": "In the context of Passage II (\"Urban Agriculture & Food Security\"), the author's descriptive tone is best characterized as:",
        "options": [
            "reverent and analytical.",
            "dismissive and cynical.",
            "detached and uninterested.",
            "confrontational and hostile."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"reverent and analytical.\". The author treats the subject with serious appreciation and structured, thoughtful analysis."
    },
    {
        "id": 108,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Agriculture & Food Security\"\n\nContemporary urban planners increasingly recognize that rooftop farming and community micro-gardens provide vital social infrastructure alongside supplemental food production. By converting vacant metropolitan surfaces into productive agricultural space, cities mitigate the urban heat island effect while fostering community cohesion across diverse demographic neighborhoods.",
        "text": "It can reasonably be inferred from the discussion presented in Passage II (\"Urban Agriculture & Food Security\") that:",
        "options": [
            "the primary actors involved were unaware of the consequences of their actions.",
            "urban agricultural practices address environmental concerns as well as community needs.",
            "external economic conditions had no impact on the development of the field.",
            "the subject will likely lose relevance within the coming decade."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"urban agricultural practices address environmental concerns as well as community needs.\". The passage notes that urban farming mitigates the urban heat island effect (environmental) and fosters community cohesion across neighborhoods (community)."
    },
    {
        "id": 109,
        "section": "reading",
        "topic": "Rhetorical Skills",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Agriculture & Food Security\"\n\nContemporary urban planners increasingly recognize that rooftop farming and community micro-gardens provide vital social infrastructure alongside supplemental food production. By converting vacant metropolitan surfaces into productive agricultural space, cities mitigate the urban heat island effect while fostering community cohesion across diverse demographic neighborhoods.",
        "text": "The structural development of Passage II (\"Urban Agriculture & Food Security\") serves primarily to:",
        "options": [
            "open with a refutation of an established scientific consensus.",
            "present a chronological series of unrelated anecdotes.",
            "establish context before exploring specific examples and deeper philosophical implications.",
            "compare two equally viable opposing hypotheses."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"establish context before exploring specific examples and deeper philosophical implications.\". The passage begins by setting the scene and context, then proceeds to detail specific techniques or insights."
    },
    {
        "id": 110,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Agriculture & Food Security\"\n\nContemporary urban planners increasingly recognize that rooftop farming and community micro-gardens provide vital social infrastructure alongside supplemental food production. By converting vacant metropolitan surfaces into productive agricultural space, cities mitigate the urban heat island effect while fostering community cohesion across diverse demographic neighborhoods.",
        "text": "In Passage II (\"Urban Agriculture & Food Security\"), the success or impact of the central endeavor is most directly attributed to:",
        "options": [
            "favorable political mandates enacted by municipal authorities.",
            "sheer chance and fortuitous external interventions.",
            "converting vacant metropolitan surfaces into productive agricultural space.",
            "a harmonious blend of disciplined craft, historical knowledge, and perseverance."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"converting vacant metropolitan surfaces into productive agricultural space.\". The passage explicitly attributes these benefits to converting vacant metropolitan surfaces into productive agricultural space."
    },
    {
        "id": 111,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Agriculture & Food Security\"\n\nContemporary urban planners increasingly recognize that rooftop farming and community micro-gardens provide vital social infrastructure alongside supplemental food production. By converting vacant metropolitan surfaces into productive agricultural space, cities mitigate the urban heat island effect while fostering community cohesion across diverse demographic neighborhoods.",
        "text": "The author's perspective toward the evolution of Passage II (\"Urban Agriculture & Food Security\") is best described as:",
        "options": [
            "deeply respectful of its heritage and nuanced complexities.",
            "strictly neutral and reporting informative civic data.",
            "skeptical of its claimed achievements.",
            "nostalgic yet dismissive of modern adaptations."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"strictly neutral and reporting informative civic data.\". The passage employs an informative and explanatory tone that objectively describes the positive roles of urban farming."
    },
    {
        "id": 112,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Agriculture & Food Security\"\n\nContemporary urban planners increasingly recognize that rooftop farming and community micro-gardens provide vital social infrastructure alongside supplemental food production. By converting vacant metropolitan surfaces into productive agricultural space, cities mitigate the urban heat island effect while fostering community cohesion across diverse demographic neighborhoods.",
        "text": "The author of Passage II (\"Urban Agriculture & Food Security\") suggests that viewing the subject merely as a routine process would:",
        "options": [
            "lead to rapid efficiency improvements in industrial manufacturing.",
            "overlook the profound cultural, ecological, or intellectual dimensions it embodies.",
            "be the most accurate way to quantify its economic value.",
            "align perfectly with the original creator's stated philosophy."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"overlook the profound cultural, ecological, or intellectual dimensions it embodies.\". The author explicitly contrasts superficial or purely utilitarian views with deeper appreciation."
    },
    {
        "id": 113,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Agriculture & Food Security\"\n\nContemporary urban planners increasingly recognize that rooftop farming and community micro-gardens provide vital social infrastructure alongside supplemental food production. By converting vacant metropolitan surfaces into productive agricultural space, cities mitigate the urban heat island effect while fostering community cohesion across diverse demographic neighborhoods.",
        "text": "Which statement best expresses the overarching conclusion presented in Passage II (\"Urban Agriculture & Food Security\")?",
        "options": [
            "Technological disruption inevitably erodes the value of all historical traditions.",
            "Individual achievement is entirely dependent on institutional patronage.",
            "Repurposing vacant urban spaces for agriculture provides both ecological relief and community cohesion.",
            "Theoretical models are vastly superior to empirical practice in every domain."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Repurposing vacant urban spaces for agriculture provides both ecological relief and community cohesion.\". The passage concludes that converting vacant urban spaces into agriculture mitigates the heat island effect and fosters community cohesion alongside supplemental food production."
    },
    {
        "id": 114,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Aesthetics of Renaissance Frescoes\"\n\nRenaissance fresco painting demanded an extraordinary synthesis of chemical expertise and artistic agility. Applying mineral pigments directly onto wet plaster (buon fresco) required the artist to execute each section within a single workday before the lime cured into an insoluble calcium carbonate matrix, permanently binding the pigment into the wall.",
        "text": "Based on Passage III (\"Aesthetics of Renaissance Frescoes\"), the primary purpose of the text is to:",
        "options": [
            "criticize traditional approaches while advocating for immediate reform.",
            "provide a purely statistical timeline of historical events.",
            "argue that modern technological advancements have rendered past practices obsolete.",
            "examine the intricate relationship between aesthetics of renaissance frescoes and its broader significance."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"examine the intricate relationship between aesthetics of renaissance frescoes and its broader significance.\". The passage as a whole focuses on introducing and exploring the nuances and deeper meaning of \"Aesthetics of Renaissance Frescoes\"."
    },
    {
        "id": 115,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Aesthetics of Renaissance Frescoes\"\n\nRenaissance fresco painting demanded an extraordinary synthesis of chemical expertise and artistic agility. Applying mineral pigments directly onto wet plaster (buon fresco) required the artist to execute each section within a single workday before the lime cured into an insoluble calcium carbonate matrix, permanently binding the pigment into the wall.",
        "text": "According to the discussion in Passage III (\"Aesthetics of Renaissance Frescoes\"), which of the following is explicitly emphasized about the subject?",
        "options": [
            "It requires meticulous attention to detail and a deep understanding of foundational principles.",
            "It was achieved without significant labor or long-term dedication.",
            "It was largely rejected by contemporary experts during its initial phase.",
            "It relies exclusively on automated machinery rather than human expertise."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"It requires meticulous attention to detail and a deep understanding of foundational principles.\". The text provides specific narrative details showing the precision, dedication, and knowledge required."
    },
    {
        "id": 116,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Aesthetics of Renaissance Frescoes\"\n\nRenaissance fresco painting demanded an extraordinary synthesis of chemical expertise and artistic agility. Applying mineral pigments directly onto wet plaster (buon fresco) required the artist to execute each section within a single workday before the lime cured into an insoluble calcium carbonate matrix, permanently binding the pigment into the wall.",
        "text": "In the context of Passage III (\"Aesthetics of Renaissance Frescoes\"), the author's descriptive tone is best characterized as:",
        "options": [
            "dismissive and cynical.",
            "reverent and analytical.",
            "detached and uninterested.",
            "confrontational and hostile."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"reverent and analytical.\". The author treats the subject with serious appreciation and structured, thoughtful analysis."
    },
    {
        "id": 117,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Aesthetics of Renaissance Frescoes\"\n\nRenaissance fresco painting demanded an extraordinary synthesis of chemical expertise and artistic agility. Applying mineral pigments directly onto wet plaster (buon fresco) required the artist to execute each section within a single workday before the lime cured into an insoluble calcium carbonate matrix, permanently binding the pigment into the wall.",
        "text": "It can reasonably be inferred from the narrative presented in Passage III (\"Aesthetics of Renaissance Frescoes\") that:",
        "options": [
            "the primary actors involved were unaware of the consequences of their actions.",
            "the rapid chemical curing of wet plaster created urgent time constraints for the artist.",
            "the underlying principles discussed have enduring value that transcends simple utility.",
            "the subject will likely lose relevance within the coming decade."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"the rapid chemical curing of wet plaster created urgent time constraints for the artist.\". The passage explains that the artist had to execute each section within a single workday before the lime cured into calcium carbonate."
    },
    {
        "id": 118,
        "section": "reading",
        "topic": "Rhetorical Skills",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Aesthetics of Renaissance Frescoes\"\n\nRenaissance fresco painting demanded an extraordinary synthesis of chemical expertise and artistic agility. Applying mineral pigments directly onto wet plaster (buon fresco) required the artist to execute each section within a single workday before the lime cured into an insoluble calcium carbonate matrix, permanently binding the pigment into the wall.",
        "text": "The structural development of Passage III (\"Aesthetics of Renaissance Frescoes\") serves primarily to:",
        "options": [
            "open with a refutation of an established scientific consensus.",
            "present a chronological series of unrelated anecdotes.",
            "compare two equally viable opposing hypotheses.",
            "establish context before exploring specific examples and deeper philosophical implications."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"establish context before exploring specific examples and deeper philosophical implications.\". The passage begins by setting the scene and context, then proceeds to detail specific techniques or insights."
    },
    {
        "id": 119,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Aesthetics of Renaissance Frescoes\"\n\nRenaissance fresco painting demanded an extraordinary synthesis of chemical expertise and artistic agility. Applying mineral pigments directly onto wet plaster (buon fresco) required the artist to execute each section within a single workday before the lime cured into an insoluble calcium carbonate matrix, permanently binding the pigment into the wall.",
        "text": "In Passage III (\"Aesthetics of Renaissance Frescoes\"), the success or impact of the central endeavor is most directly attributed to:",
        "options": [
            "a synthesis of chemical expertise and artistic agility within a strict timeframe.",
            "favorable political mandates enacted by municipal authorities.",
            "sheer chance and fortuitous external interventions.",
            "hasty improvisation under urgent time constraints."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"a synthesis of chemical expertise and artistic agility within a strict timeframe.\". The text illustrates that mastery and lasting impact in fresco painting stem from chemical knowledge and artistic agility executed before the plaster cures."
    },
    {
        "id": 120,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Aesthetics of Renaissance Frescoes\"\n\nRenaissance fresco painting demanded an extraordinary synthesis of chemical expertise and artistic agility. Applying mineral pigments directly onto wet plaster (buon fresco) required the artist to execute each section within a single workday before the lime cured into an insoluble calcium carbonate matrix, permanently binding the pigment into the wall.",
        "text": "The author's perspective toward the evolution of Passage III (\"Aesthetics of Renaissance Frescoes\") is best described as:",
        "options": [
            "skeptical of its claimed achievements.",
            "deeply respectful of its heritage and nuanced complexities.",
            "strictly neutral and reporting raw data.",
            "nostalgic yet dismissive of modern adaptations."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"deeply respectful of its heritage and nuanced complexities.\". The descriptive language emphasizes admiration for the precision, craft, and significance of the subject."
    },
    {
        "id": 121,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Aesthetics of Renaissance Frescoes\"\n\nRenaissance fresco painting demanded an extraordinary synthesis of chemical expertise and artistic agility. Applying mineral pigments directly onto wet plaster (buon fresco) required the artist to execute each section within a single workday before the lime cured into an insoluble calcium carbonate matrix, permanently binding the pigment into the wall.",
        "text": "The author of Passage III (\"Aesthetics of Renaissance Frescoes\") suggests that viewing the subject merely as a routine process would:",
        "options": [
            "lead to rapid efficiency improvements in industrial manufacturing.",
            "be the most accurate way to quantify its economic value.",
            "overlook the profound cultural, ecological, or intellectual dimensions it embodies.",
            "align perfectly with the original creator's stated philosophy."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"overlook the profound cultural, ecological, or intellectual dimensions it embodies.\". The author explicitly contrasts superficial or purely utilitarian views with deeper appreciation."
    },
    {
        "id": 122,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Aesthetics of Renaissance Frescoes\"\n\nRenaissance fresco painting demanded an extraordinary synthesis of chemical expertise and artistic agility. Applying mineral pigments directly onto wet plaster (buon fresco) required the artist to execute each section within a single workday before the lime cured into an insoluble calcium carbonate matrix, permanently binding the pigment into the wall.",
        "text": "Which statement best expresses the overarching conclusion presented in Passage III (\"Aesthetics of Renaissance Frescoes\")?",
        "options": [
            "Technological disruption inevitably erodes the value of all historical traditions.",
            "Individual achievement is entirely dependent on institutional patronage.",
            "Theoretical models are vastly superior to empirical practice in every domain.",
            "True mastery and understanding arise from honoring fundamental principles while engaging deeply with the work."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"True mastery and understanding arise from honoring fundamental principles while engaging deeply with the work.\". The concluding lines reflect on the broader significance of dedicated stewardship and deep comprehension."
    },
    {
        "id": 123,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Hydrothermal Vents & Chemosynthesis\"\n\nDiscovered along mid-ocean spreading ridges, deep-sea hydrothermal vents sustain thriving ecosystems completely independent of solar energy. Chemosynthetic bacteria oxidize hydrogen sulfide and methane emitted from mineral chimneys, forming the primary trophic foundation for giant tube worms, blind shrimp, and specialized crabs.",
        "text": "Based on Passage IV (\"Hydrothermal Vents & Chemosynthesis\"), the primary purpose of the text is to:",
        "options": [
            "examine the intricate relationship between hydrothermal vents & chemosynthesis and its broader significance.",
            "criticize traditional approaches while advocating for immediate reform.",
            "provide a purely statistical timeline of historical events.",
            "argue that modern technological advancements have rendered past practices obsolete."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"examine the intricate relationship between hydrothermal vents & chemosynthesis and its broader significance.\". The passage as a whole focuses on introducing and exploring the nuances and deeper meaning of \"Hydrothermal Vents & Chemosynthesis\"."
    },
    {
        "id": 124,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Hydrothermal Vents & Chemosynthesis\"\n\nDiscovered along mid-ocean spreading ridges, deep-sea hydrothermal vents sustain thriving ecosystems completely independent of solar energy. Chemosynthetic bacteria oxidize hydrogen sulfide and methane emitted from mineral chimneys, forming the primary trophic foundation for giant tube worms, blind shrimp, and specialized crabs.",
        "text": "According to the discussion in Passage IV (\"Hydrothermal Vents & Chemosynthesis\"), which of the following is explicitly emphasized about hydrothermal vent ecosystems?",
        "options": [
            "They were achieved without significant labor or long-term dedication.",
            "They sustain thriving biological communities completely independent of solar energy.",
            "They were largely rejected by contemporary experts during their initial phase.",
            "They rely exclusively on automated machinery rather than human expertise."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"They sustain thriving biological communities completely independent of solar energy.\". The passage explicitly states that deep-sea hydrothermal vents sustain thriving ecosystems completely independent of solar energy."
    },
    {
        "id": 125,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Hydrothermal Vents & Chemosynthesis\"\n\nDiscovered along mid-ocean spreading ridges, deep-sea hydrothermal vents sustain thriving ecosystems completely independent of solar energy. Chemosynthetic bacteria oxidize hydrogen sulfide and methane emitted from mineral chimneys, forming the primary trophic foundation for giant tube worms, blind shrimp, and specialized crabs.",
        "text": "In the context of Passage IV (\"Hydrothermal Vents & Chemosynthesis\"), the author's descriptive tone is best characterized as:",
        "options": [
            "dismissive and cynical.",
            "detached and uninterested.",
            "scientific and explanatory.",
            "confrontational and hostile."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"scientific and explanatory.\". The author uses objective, precise scientific terminology to explain how hydrothermal vents and chemosynthesis function."
    },
    {
        "id": 126,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Hydrothermal Vents & Chemosynthesis\"\n\nDiscovered along mid-ocean spreading ridges, deep-sea hydrothermal vents sustain thriving ecosystems completely independent of solar energy. Chemosynthetic bacteria oxidize hydrogen sulfide and methane emitted from mineral chimneys, forming the primary trophic foundation for giant tube worms, blind shrimp, and specialized crabs.",
        "text": "It can reasonably be inferred from the discussion presented in Passage IV (\"Hydrothermal Vents & Chemosynthesis\") that:",
        "options": [
            "the primary actors involved were unaware of the consequences of their actions.",
            "chemosynthetic oxidation replaces photosynthesis as the basis of the deep-sea food web.",
            "external economic conditions had no impact on the development of the field.",
            "the underlying principles discussed have enduring value that transcends simple utility."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"chemosynthetic oxidation replaces photosynthesis as the basis of the deep-sea food web.\". The passage establishes that chemosynthetic bacteria oxidizing mineral emissions form the primary trophic foundation in an ecosystem independent of solar energy."
    },
    {
        "id": 127,
        "section": "reading",
        "topic": "Rhetorical Skills",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Hydrothermal Vents & Chemosynthesis\"\n\nDiscovered along mid-ocean spreading ridges, deep-sea hydrothermal vents sustain thriving ecosystems completely independent of solar energy. Chemosynthetic bacteria oxidize hydrogen sulfide and methane emitted from mineral chimneys, forming the primary trophic foundation for giant tube worms, blind shrimp, and specialized crabs.",
        "text": "The structural development of Passage IV (\"Hydrothermal Vents & Chemosynthesis\") serves primarily to:",
        "options": [
            "establish context before exploring specific examples and deeper philosophical implications.",
            "open with a refutation of an established scientific consensus.",
            "present a chronological series of unrelated anecdotes.",
            "compare two equally viable opposing hypotheses."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"establish context before exploring specific examples and deeper philosophical implications.\". The passage begins by setting the scene and context, then proceeds to detail specific techniques or insights."
    },
    {
        "id": 128,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Hydrothermal Vents & Chemosynthesis\"\n\nDiscovered along mid-ocean spreading ridges, deep-sea hydrothermal vents sustain thriving ecosystems completely independent of solar energy. Chemosynthetic bacteria oxidize hydrogen sulfide and methane emitted from mineral chimneys, forming the primary trophic foundation for giant tube worms, blind shrimp, and specialized crabs.",
        "text": "In Passage IV (\"Hydrothermal Vents & Chemosynthesis\"), the sustenance of the ecosystem is most directly attributed to:",
        "options": [
            "chemosynthetic bacteria oxidizing chemicals emitted from mineral chimneys.",
            "a harmonious blend of disciplined craft, historical knowledge, and perseverance.",
            "favorable political mandates enacted by municipal authorities.",
            "hasty improvisation under urgent time constraints."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"chemosynthetic bacteria oxidizing chemicals emitted from mineral chimneys.\". The passage attributes the ecosystem's foundation directly to chemosynthetic bacteria oxidizing hydrogen sulfide and methane from mineral chimneys."
    },
    {
        "id": 129,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Hydrothermal Vents & Chemosynthesis\"\n\nDiscovered along mid-ocean spreading ridges, deep-sea hydrothermal vents sustain thriving ecosystems completely independent of solar energy. Chemosynthetic bacteria oxidize hydrogen sulfide and methane emitted from mineral chimneys, forming the primary trophic foundation for giant tube worms, blind shrimp, and specialized crabs.",
        "text": "The author's perspective toward the phenomenon in Passage IV (\"Hydrothermal Vents & Chemosynthesis\") is best described as:",
        "options": [
            "skeptical of its claimed achievements.",
            "strictly neutral and reporting scientific facts.",
            "deeply respectful of its heritage and nuanced complexities.",
            "nostalgic yet dismissive of modern adaptations."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"strictly neutral and reporting scientific facts.\". The passage is purely objective, factual, and informative, describing the natural biological and chemical mechanics without emotional commentary."
    },
    {
        "id": 130,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Hydrothermal Vents & Chemosynthesis\"\n\nDiscovered along mid-ocean spreading ridges, deep-sea hydrothermal vents sustain thriving ecosystems completely independent of solar energy. Chemosynthetic bacteria oxidize hydrogen sulfide and methane emitted from mineral chimneys, forming the primary trophic foundation for giant tube worms, blind shrimp, and specialized crabs.",
        "text": "The author of Passage IV (\"Hydrothermal Vents & Chemosynthesis\") suggests that viewing the subject merely as a routine process would:",
        "options": [
            "lead to rapid efficiency improvements in industrial manufacturing.",
            "be the most accurate way to quantify its economic value.",
            "align perfectly with the original creator's stated philosophy.",
            "overlook the profound cultural, ecological, or intellectual dimensions it embodies."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"overlook the profound cultural, ecological, or intellectual dimensions it embodies.\". The author explicitly contrasts superficial or purely utilitarian views with deeper appreciation."
    },
    {
        "id": 131,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Hydrothermal Vents & Chemosynthesis\"\n\nDiscovered along mid-ocean spreading ridges, deep-sea hydrothermal vents sustain thriving ecosystems completely independent of solar energy. Chemosynthetic bacteria oxidize hydrogen sulfide and methane emitted from mineral chimneys, forming the primary trophic foundation for giant tube worms, blind shrimp, and specialized crabs.",
        "text": "Which statement best expresses the overarching conclusion presented in Passage IV (\"Hydrothermal Vents & Chemosynthesis\")?",
        "options": [
            "Chemosynthetic bacteria form the essential trophic foundation supporting complex deep-sea animal life.",
            "True mastery and understanding arise from honoring fundamental principles while engaging deeply with the work.",
            "Individual achievement is entirely dependent on institutional patronage.",
            "Theoretical models are vastly superior to empirical practice in every domain."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Chemosynthetic bacteria form the essential trophic foundation supporting complex deep-sea animal life.\". The passage concludes that chemosynthetic bacteria form the primary trophic foundation supporting giant tube worms, blind shrimp, and specialized crabs."
    }
];

if (typeof window !== 'undefined') {
    window.ACT_QUESTIONS1 = ACT_QUESTIONS1;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ACT_QUESTIONS1;
}

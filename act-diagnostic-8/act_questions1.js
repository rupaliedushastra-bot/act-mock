// =============================================
// act_questions1.js – ACT Diagnostic Test 8
// Core ACT Format: English (50Q), Math (45Q), Reading (36Q)
// Total: 131 questions
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "english",
        "topic": "Punctuation",
        "text": "The research team led by Valeria Gomez, who had spent five weeks analyzing pyroclastic basalt deposits in the Andes finally published their findings in a leading scientific journal.\n\nWhich of the following best corrects the punctuation in the sentence above?",
        "options": [
            "The research team led by Valeria Gomez who had spent five weeks analyzing pyroclastic basalt deposits in the Andes, finally published their findings in a leading scientific journal.",
            "The research team led by Valeria Gomez, who had spent five weeks analyzing pyroclastic basalt deposits in the Andes finally, published their findings in a leading scientific journal.",
            "The research team led by Valeria Gomez who had spent five weeks analyzing pyroclastic basalt deposits, in the Andes finally published their findings in a leading scientific journal.",
            "The research team led by Valeria Gomez, who had spent five weeks analyzing pyroclastic basalt deposits in the Andes, finally published their findings in a leading scientific journal."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"The research team led by Valeria Gomez, who had spent five weeks analyzing pyroclastic basalt deposits in the Andes, finally published their findings in a leading scientific journal.\". The non-essential relative clause beginning with 'who had spent five weeks...' must be set off by paired commas."
    },
    {
        "id": 2,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Neither Valeria Gomez nor the Andean Geophysical Survey technicians was able to calibrate the infrasonic gas spectrometer before the expedition began.\n\nWhich correction should be made to the underlined verb?",
        "options": [
            "were able to calibrate",
            "is able to calibrate",
            "was being able to calibrate",
            "No change needed"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"were able to calibrate\". With 'neither... nor', the verb agrees with the closer subject ('technicians', plural), requiring 'were'."
    },
    {
        "id": 3,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Examining the delicate structure of pyroclastic basalt deposits through the infrasonic gas spectrometer, the anomalous readings became immediately apparent to Valeria Gomez.\n\nWhich revision best corrects the dangling modifier in the sentence?",
        "options": [
            "Through the infrasonic gas spectrometer, examining the delicate structure of pyroclastic basalt deposits, the anomalous readings became immediately apparent.",
            "Examining the delicate structure of pyroclastic basalt deposits through the infrasonic gas spectrometer, Valeria Gomez immediately noticed the anomalous readings.",
            "The anomalous readings became immediately apparent, examining the delicate structure of pyroclastic basalt deposits through the infrasonic gas spectrometer.",
            "Valeria Gomez, examining the delicate structure of pyroclastic basalt deposits through the infrasonic gas spectrometer, the anomalous readings became apparent."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Examining the delicate structure of pyroclastic basalt deposits through the infrasonic gas spectrometer, Valeria Gomez immediately noticed the anomalous readings.\". The introductory participial phrase must modify the person performing the action (Valeria Gomez), not 'the readings'."
    },
    {
        "id": 4,
        "section": "english",
        "topic": "Style & Tone",
        "text": "The initial hypothesis regarding pyroclastic basalt deposits formulated by Valeria Gomez was completely disproven by the latest measurements from the Andes.\n\nWhich alternative to the underlined portion would be LEAST acceptable in maintaining a formal academic tone?",
        "options": [
            "thoroughly refuted",
            "proven inaccurate",
            "totally shot down",
            "rendered untenable"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"totally shot down\". 'Totally shot down' is colloquial slang and undermines the formal register of an academic publication."
    },
    {
        "id": 5,
        "section": "english",
        "topic": "Transitions",
        "text": "The Andean Geophysical Survey faced severe logistical obstacles in the Andes. [5], the researchers successfully deployed the infrasonic gas spectrometer on schedule.\n\nWhich transition word or phrase best connects these two sentences?",
        "options": [
            "Consequently",
            "Furthermore",
            "Similarly",
            "Nevertheless"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"Nevertheless\". 'Nevertheless' correctly signals a contrast between the severe obstacles and the successful deployment."
    },
    {
        "id": 6,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "The author wants to conclude a paragraph by highlighting the broader technological impact of volcanology pioneered by Valeria Gomez. Which choice best accomplishes this goal?",
        "options": [
            "By translating these observations into synthetic prototypes, industrial engineers can manufacture more resilient commercial materials.",
            "Valeria Gomez has presented these findings at several international academic symposia.",
            "Securing institutional grant funding remains an essential step for laboratory expansion.",
            "Field research in remote environments requires careful logistical planning."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"By translating these observations into synthetic prototypes, industrial engineers can manufacture more resilient commercial materials.\". This option directly connects the specialized scientific findings to broader commercial and industrial applications."
    },
    {
        "id": 7,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "The final report presented by Valeria Gomez contained a concise summary that was brief and to the point regarding pyroclastic basalt deposits in the Andes.\n\nWhich revision best eliminates the redundancy in the sentence?",
        "options": [
            "The final report presented a concise summary that was brief and short of pyroclastic basalt deposits.",
            "The final report presented by Valeria Gomez contained a concise summary of pyroclastic basalt deposits in the Andes.",
            "The final report presented a brief summary concise and to the point of pyroclastic basalt deposits.",
            "The final report presented a summary that was concise, brief, and to the point."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"The final report presented by Valeria Gomez contained a concise summary of pyroclastic basalt deposits in the Andes.\". 'Concise summary' inherently means brief and to the point; adding extra qualifiers creates unnecessary redundancy."
    },
    {
        "id": 8,
        "section": "english",
        "topic": "Punctuation",
        "text": "The infrasonic gas spectrometer recorded unprecedented fluctuations in the Andes the analytical software processed the telemetry in real time.\n\nWhich choice provides the correct punctuation between the two independent clauses?",
        "options": [
            "the Andes, the analytical",
            "the Andes the analytical",
            "the Andes; the analytical",
            "the Andes: and the analytical"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"the Andes; the analytical\". Two independent clauses without a coordinating conjunction must be separated by a semicolon."
    },
    {
        "id": 9,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Valeria Gomez consulted with three international specialists from the Andes, all of [9] had extensive experience in volcanology.\n\nWhich pronoun correctly completes the sentence?",
        "options": [
            "who",
            "which",
            "that",
            "whom"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"whom\". 'Whom' is the objective case pronoun required as the object of the preposition 'of'."
    },
    {
        "id": 10,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "The temperature dropped rapidly after dusk in the Andes, the Andean Geophysical Survey had to calibrate the heating elements on the infrasonic gas spectrometer.\n\nWhich choice best corrects the comma splice?",
        "options": [
            "The temperature dropped rapidly after dusk in the Andes, so the Andean Geophysical Survey had to calibrate the heating elements on the infrasonic gas spectrometer.",
            "The temperature dropped rapidly after dusk in the Andes the team had to calibrate the heating elements.",
            "Dropping rapidly after dusk the temperature in the Andes, the team calibrated the heating elements.",
            "The temperature dropped rapidly after dusk in the Andes, and so therefore the team calibrated the heating elements."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The temperature dropped rapidly after dusk in the Andes, so the Andean Geophysical Survey had to calibrate the heating elements on the infrasonic gas spectrometer.\". A comma splice between two independent clauses is correctly repaired using a comma and coordinating conjunction ('so')."
    },
    {
        "id": 11,
        "section": "english",
        "topic": "Style & Tone",
        "text": "During the survey in the Andes, Valeria Gomez collected a bunch of data points on pyroclastic basalt deposits.\n\nWhich choice replaces the underlined phrase with the most precise and formal academic phrasing?",
        "options": [
            "a whole lot of",
            "a substantial dataset of",
            "tons of",
            "a massive heap of"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"a substantial dataset of\". 'A substantial dataset of' conveys academic precision, avoiding vague or informal colloquialisms."
    },
    {
        "id": 12,
        "section": "english",
        "topic": "Transitions",
        "text": "The filtration membrane on the infrasonic gas spectrometer clogged due to fine sediment in the Andes. [12], the automated safety valve halted fluid intake immediately.\n\nWhich transition word best signals the logical relationship?",
        "options": [
            "Conversely",
            "Nonetheless",
            "Consequently",
            "In contrast"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Consequently\". 'Consequently' correctly indicates that the safety valve action was a direct result of the clogged membrane."
    },
    {
        "id": 13,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "For the sake of logical flow in Valeria Gomez's research log, where should a sentence describing the initial site preparation in the Andes be placed?",
        "options": [
            "At the very end of the essay after the conclusion.",
            "Between the analysis of results and the final summary.",
            "Nowhere, because site preparation is irrelevant to scientific research.",
            "At the beginning of the paragraph, before the discussion of data collection."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"At the beginning of the paragraph, before the discussion of data collection.\". Chronological logic requires site preparation to precede the collection and analysis of data."
    },
    {
        "id": 14,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Valeria Gomez observed an unusual phenomenon that was rare and out of the ordinary while tracking pyroclastic basalt deposits in the Andes.\n\nWhich choice is most concise without losing essential meaning?",
        "options": [
            "an unusual phenomenon in the Andes.",
            "an unusual phenomenon that was rare in the Andes.",
            "a rare phenomenon out of the ordinary in the Andes.",
            "an unusual, rare, and out of the ordinary phenomenon in the Andes."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"an unusual phenomenon in the Andes.\". 'An unusual phenomenon' fully captures the meaning without repetitive synonyms like 'rare' and 'out of the ordinary'."
    },
    {
        "id": 15,
        "section": "english",
        "topic": "Punctuation",
        "text": "The three [15] collective recommendations on volcanology were compiled into the final project charter by Valeria Gomez.\n\nWhich choice correctly indicates plural possession?",
        "options": [
            "institution's",
            "institutions'",
            "institutions",
            "institutions's"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"institutions'\". Plural nouns ending in 's' form the possessive by adding an apostrophe after the 's' ('institutions'')."
    },
    {
        "id": 16,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "When the telemetry gauge fluctuated in the Andes, Valeria Gomez quickly [16] the auxiliary power switch on the infrasonic gas spectrometer.\n\nWhich verb form maintains proper past tense consistency?",
        "options": [
            "activates",
            "has activated",
            "activated",
            "will activate"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"activated\". The past tense verb 'fluctuated' requires the parallel past tense 'activated' for narrative consistency."
    },
    {
        "id": 17,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "The protocol in the Andes required Valeria Gomez to inspect the valves, [17], and document all telemetry in the official log.\n\nWhich choice maintains parallel grammatical structure?",
        "options": [
            "cleaning the optical sensors",
            "to have cleaned the optical sensors",
            "the optical sensors were cleaned",
            "clean the optical sensors"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"clean the optical sensors\". The infinitive structure 'to inspect..., [clean]..., and [document]...' requires base verb forms in parallel."
    },
    {
        "id": 18,
        "section": "english",
        "topic": "Style & Tone",
        "text": "The new spectral analysis conducted in the Andes [18] the presence of rare mineral compounds within pyroclastic basalt deposits.\n\nWhich choice offers the most precise and descriptive vocabulary?",
        "options": [
            "substantiated",
            "showed up",
            "made clearish",
            "pointed at"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"substantiated\". 'Substantiated' is formal, accurate, and scientifically appropriate."
    },
    {
        "id": 19,
        "section": "english",
        "topic": "Transitions",
        "text": "The infrasonic gas spectrometer mapped the core structure of pyroclastic basalt deposits in the Andes. [19], it recorded ambient temperature and salinity gradients simultaneously.\n\nWhich transition word best adds supporting information?",
        "options": [
            "On the other hand",
            "Furthermore",
            "In spite of this",
            "Instead"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Furthermore\". 'Furthermore' signals the addition of supplementary data collected by the instrument."
    },
    {
        "id": 20,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "Which introductory sentence best establishes the central focus of a passage detailing Valeria Gomez's breakthrough in volcanology across the Andes?",
        "options": [
            "Many people enjoy reading about scientific discoveries during their leisure time.",
            "the Andes has a diverse geographical profile characterized by variable weather.",
            "Recent advances in volcanology have been accelerated by groundbreaking field methodologies pioneered by Valeria Gomez.",
            "Laboratory equipment is often manufactured by specialized technical firms."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Recent advances in volcanology have been accelerated by groundbreaking field methodologies pioneered by Valeria Gomez.\". This sentence clearly introduces both the scientific discipline and the central role of the primary researcher."
    },
    {
        "id": 21,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Valeria Gomez made adjustments to the infrasonic gas spectrometer in the Andes [21] adverse atmospheric pressure.\n\nWhich choice is the most concise replacement for 'on account of the fact that there was'?",
        "options": [
            "on account of the fact that there was",
            "due to the circumstance where there was",
            "owing to the presence of the reality of",
            "because of"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"because of\". 'Because of' is the most direct and economical way to express causation."
    },
    {
        "id": 22,
        "section": "english",
        "topic": "Punctuation",
        "text": "The survey of pyroclastic basalt deposits in the Andes yielded three critical artifacts [22] a brass sextant, an annotated navigational log, and a hand-drawn portolan chart.\n\nWhich punctuation mark correctly introduces the list following an independent clause?",
        "options": [
            "artifacts:",
            "artifacts;",
            "artifacts,",
            "artifacts"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"artifacts:\". A colon is used after an independent clause to introduce an elaborating list or explanation."
    },
    {
        "id": 23,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Each of the experimental samples collected by Valeria Gomez from the Andes [23] cataloged in the Andean Geophysical Survey database.\n\nWhich verb correctly completes the sentence?",
        "options": [
            "are",
            "is",
            "were",
            "have been"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"is\". 'Each' is a singular indefinite pronoun and requires the singular verb 'is'."
    },
    {
        "id": 24,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Because the physical conditions surrounding pyroclastic basalt deposits in the Andes were more severe than anticipated. The infrasonic gas spectrometer drifted off its planned trajectory.\n\nWhich revision eliminates the sentence fragment?",
        "options": [
            "Because the physical conditions surrounding pyroclastic basalt deposits in the Andes were more severe than anticipated; the infrasonic gas spectrometer drifted off its planned trajectory.",
            "Being that conditions were more severe than anticipated. The infrasonic gas spectrometer drifted.",
            "Because the physical conditions surrounding pyroclastic basalt deposits in the Andes were more severe than anticipated, the infrasonic gas spectrometer drifted off its planned trajectory.",
            "The conditions being severe in the Andes. Causing the infrasonic gas spectrometer to drift."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Because the physical conditions surrounding pyroclastic basalt deposits in the Andes were more severe than anticipated, the infrasonic gas spectrometer drifted off its planned trajectory.\". Attaching the dependent clause ('Because the conditions...') to the independent clause resolves the fragment."
    },
    {
        "id": 25,
        "section": "english",
        "topic": "Style & Tone",
        "text": "All researchers assisting Valeria Gomez in the Andes must strictly adhere [25] established safety regulations.\n\nWhich preposition completes the standard English idiom?",
        "options": [
            "with",
            "at",
            "on",
            "to"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"to\". The verb 'adhere' idiomatically pairs with the preposition 'to'."
    },
    {
        "id": 26,
        "section": "english",
        "topic": "Transitions",
        "text": "The Andean Geophysical Survey documented several endemic specimens in the Andes. [26], they identified a unique manifestation of pyroclastic basalt deposits never before recorded.\n\nWhich transition best introduces a specific example?",
        "options": [
            "For instance",
            "In summary",
            "Nevertheless",
            "Otherwise"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"For instance\". 'For instance' correctly introduces a concrete example of the endemic specimens mentioned."
    },
    {
        "id": 27,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "If Valeria Gomez were to include a quantitative chart comparing measurements of pyroclastic basalt deposits across the Andes, the primary rhetorical function would be to:",
        "options": [
            "distract the reader from ambiguities in the experimental methodology.",
            "provide empirical validation for the chemical trends described in the narrative.",
            "prove that no further scientific investigation is necessary.",
            "replace the qualitative descriptions with purely numeric indices."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"provide empirical validation for the chemical trends described in the narrative.\". Quantitative data serves to substantiate and empirically validate the qualitative observations."
    },
    {
        "id": 28,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "The autonomous infrasonic gas spectrometer deployed in the Andes operates independently without human guidance on its own.\n\nWhich choice best eliminates repetitive phrasing?",
        "options": [
            "The autonomous infrasonic gas spectrometer operates independently on its own without human guidance.",
            "Operating independently, the autonomous infrasonic gas spectrometer guides itself on its own.",
            "The autonomous infrasonic gas spectrometer operates without human guidance.",
            "The infrasonic gas spectrometer operates autonomously, independently, and on its own."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"The autonomous infrasonic gas spectrometer operates without human guidance.\". 'Operates without human guidance' directly explains the function without repeating 'autonomously', 'independently', and 'on its own'."
    },
    {
        "id": 29,
        "section": "english",
        "topic": "Punctuation",
        "text": "The field specimen of pyroclastic basalt deposits—fragile from centuries of isolation in the Andes [29] was stabilized by Valeria Gomez.\n\nWhich punctuation mark correctly closes the parenthetical insertion?",
        "options": [
            "isolation in the Andes,",
            "isolation in the Andes;",
            "isolation in the Andes",
            "isolation in the Andes—"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"isolation in the Andes—\". A parenthetical interruption opened with an em-dash must be closed with an em-dash."
    },
    {
        "id": 30,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Between the two calibration methods tested by Valeria Gomez in the Andes, the second protocol demonstrated [30] analytical accuracy.\n\nWhich modifier form is grammatically correct?",
        "options": [
            "greater",
            "greatest",
            "most greatest",
            "more greater"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"greater\". When comparing exactly two items, the comparative form ('greater') is required, not the superlative ('greatest')."
    },
    {
        "id": 31,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "In the Andes, Valeria Gomez only analyzed the data points gathered by the infrasonic gas spectrometer.\n\nWhich placement of 'only' makes it clear that no other data points were analyzed?",
        "options": [
            "In the Andes, only Valeria Gomez analyzed the data points gathered by the infrasonic gas spectrometer.",
            "In the Andes, Valeria Gomez analyzed only the data points gathered by the infrasonic gas spectrometer.",
            "In the Andes, Valeria Gomez analyzed the data points only gathered by the infrasonic gas spectrometer.",
            "In the Andes, Valeria Gomez analyzed the data points that only were gathered by the infrasonic gas spectrometer."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"In the Andes, Valeria Gomez analyzed only the data points gathered by the infrasonic gas spectrometer.\". Placing 'only' immediately before 'the data points' unambiguously restricts the action to those specific data points."
    },
    {
        "id": 32,
        "section": "english",
        "topic": "Style & Tone",
        "text": "The Andean Geophysical Survey specialists in the Andes [32] to verify the structural integrity of the infrasonic gas spectrometer.\n\nWhich choice is best suited to contemporary professional writing?",
        "options": [
            "did strive mightily",
            "went forth",
            "endeavored",
            "soughteth"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"endeavored\". 'Endeavored' is professional and contemporary, avoiding archaic theatrical language."
    },
    {
        "id": 33,
        "section": "english",
        "topic": "Transitions",
        "text": "[33] the initial sensor calibrations in the Andes were delayed by inclement conditions, Valeria Gomez's primary research objectives were fully met.\n\nWhich subordinating conjunction best indicates concession?",
        "options": [
            "Because",
            "Since",
            "Unless",
            "Although"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"Although\". 'Although' introduces a concession clause, acknowledging the delay while highlighting overall success."
    },
    {
        "id": 34,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "Consider the phrase in Valeria Gomez's summary: 'It is interesting and worth noting that pyroclastic basalt deposits reacts dynamically to seasonal shifts in the Andes.'\n\nWhich revision most effectively improves directness?",
        "options": [
            "pyroclastic basalt deposits reacts dynamically to seasonal shifts in the Andes.",
            "As a matter of interesting fact, pyroclastic basalt deposits reacts dynamically to seasonal shifts in the Andes.",
            "Worth noting is the reality that pyroclastic basalt deposits reacts dynamically in the Andes.",
            "It goes without saying that pyroclastic basalt deposits reacts dynamically in the Andes."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"pyroclastic basalt deposits reacts dynamically to seasonal shifts in the Andes.\". Deleting unnecessary throat-clearing phrases ('It is worth noting that...') makes the statement direct and authoritative."
    },
    {
        "id": 35,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "The Andean Geophysical Survey decided to make an assessment of the safety protocols governing the Andes.\n\nWhich revision is the most concise and forceful?",
        "options": [
            "The Andean Geophysical Survey decided to perform an assessment on the safety protocols in the Andes.",
            "The Andean Geophysical Survey decided to assess the safety protocols governing the Andes.",
            "The Andean Geophysical Survey decided to conduct a process of assessment of safety in the Andes.",
            "The Andean Geophysical Survey decided to carry out the making of an assessment for the Andes."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"The Andean Geophysical Survey decided to assess the safety protocols governing the Andes.\". Replacing the nominalized phrase 'make an assessment of' with the active verb 'assess' enhances clarity."
    },
    {
        "id": 36,
        "section": "english",
        "topic": "Punctuation",
        "text": "Valeria Gomez discovered a dense [36] intricate network of crystalline features surrounding pyroclastic basalt deposits in the Andes.\n\nWhich choice correctly punctuates coordinate adjectives?",
        "options": [
            "dense;",
            "dense",
            "dense,",
            "dense and,"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"dense,\". Coordinate adjectives ('dense' and 'intricate') modifying the same noun should be separated by a comma."
    },
    {
        "id": 37,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "If the infrasonic gas spectrometer [37] capable of operating in the Andes indefinitely, Valeria Gomez could record longitudinal data continuously.\n\nWhich verb form correctly expresses this hypothetical condition?",
        "options": [
            "was",
            "is",
            "will be",
            "were"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"were\". In contrary-to-fact conditional statements (subjunctive mood), 'were' is used regardless of the subject's number."
    },
    {
        "id": 38,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "The Andean Geophysical Survey not only documented novel properties of pyroclastic basalt deposits [38] expanded geophysical mapping across the Andes.\n\nWhich phrase correctly completes the correlative pair?",
        "options": [
            "but also",
            "and also",
            "as well as",
            "in addition to"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"but also\". 'Not only' must be paired with 'but also' for grammatical parallelism."
    },
    {
        "id": 39,
        "section": "english",
        "topic": "Style & Tone",
        "text": "A comprehensive geological survey of the Andes was conducted by Valeria Gomez and the Andean Geophysical Survey.\n\nWhich revision converts the sentence into direct active voice?",
        "options": [
            "Conducted by Valeria Gomez and the Andean Geophysical Survey was a comprehensive geological survey of the Andes.",
            "Valeria Gomez and the Andean Geophysical Survey conducted a comprehensive geological survey of the Andes.",
            "A comprehensive survey of the Andes had its conduction by Valeria Gomez.",
            "There was a comprehensive geological survey of the Andes conducted by the team."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Valeria Gomez and the Andean Geophysical Survey conducted a comprehensive geological survey of the Andes.\". Active voice places the actors first, improving clarity and grammatical vigor."
    },
    {
        "id": 40,
        "section": "english",
        "topic": "Transitions",
        "text": "Valeria Gomez mapped the outer perimeter of the Andes. [40], the team deployed the infrasonic gas spectrometer into the central core.\n\nWhich transition best conveys sequential progression?",
        "options": [
            "Simultaneously",
            "Previously",
            "Subsequently",
            "Nevertheless"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Subsequently\". 'Subsequently' indicates that the central deployment occurred after the perimeter mapping was complete."
    },
    {
        "id": 41,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "Which choice provides the most relevant detail to support Valeria Gomez's claim that pyroclastic basalt deposits represents an extreme biological habitat in the Andes?",
        "options": [
            "The research vessel is equipped with comfortable crew cabins and a modern navigation deck.",
            "Valeria Gomez studied chemistry before specializing in volcanology.",
            "Many scientific expeditions are documented in popular non-fiction periodicals.",
            "Ambient temperatures at the Andes reach critical extremes under pressures 150 times greater than baseline standard atmosphere."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"Ambient temperatures at the Andes reach critical extremes under pressures 150 times greater than baseline standard atmosphere.\". Extreme physical measurements directly substantiate the claim of an extreme biological habitat."
    },
    {
        "id": 42,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "In the event that the primary sensor on the infrasonic gas spectrometer fails in the Andes, the emergency beacon will engage.\n\nWhich word is the most concise replacement for 'In the event that'?",
        "options": [
            "If",
            "In the circumstance where",
            "Given the factual condition that",
            "Under the contingency wherein"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"If\". 'If' is the standard, concise equivalent of 'In the event that'."
    },
    {
        "id": 43,
        "section": "english",
        "topic": "Punctuation",
        "text": "Valeria Gomez announced to the Andean Geophysical Survey [43] \"Our preliminary telemetry confirms a major breakthrough regarding pyroclastic basalt deposits.\"\n\nWhich choice correctly introduces the quotation?",
        "options": [
            "announced to the Andean Geophysical Survey;",
            "announced to the Andean Geophysical Survey,",
            "announced to the Andean Geophysical Survey:",
            "announced to the Andean Geophysical Survey"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"announced to the Andean Geophysical Survey,\". A comma is conventionally used to introduce a direct quotation following a dialogue tag."
    },
    {
        "id": 44,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "When the infrasonic gas spectrometer struck the basalt formation in the Andes, it sustained minor surface abrasions.\n\nWhich revision eliminates the ambiguous pronoun 'it'?",
        "options": [
            "When it struck the basalt formation in the Andes, the infrasonic gas spectrometer cracked.",
            "Striking the basalt formation in the Andes, it sustained abrasions.",
            "When the infrasonic gas spectrometer struck the basalt formation in the Andes, the instrument sustained minor surface abrasions.",
            "The infrasonic gas spectrometer and basalt collided in the Andes, and it was abraded."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"When the infrasonic gas spectrometer struck the basalt formation in the Andes, the instrument sustained minor surface abrasions.\". Specifying 'the instrument' clarifies which object sustained the abrasions."
    },
    {
        "id": 45,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "The telemetry stream from the Andes stopped abruptly the infrasonic gas spectrometer battery had completely discharged.\n\nWhich choice correctly repairs the run-on sentence?",
        "options": [
            "The telemetry stream from the Andes stopped abruptly, the battery had discharged.",
            "Stopping abruptly, the telemetry stream from the Andes the battery had discharged.",
            "The telemetry stream from the Andes stopped abruptly and so the battery had discharged.",
            "The telemetry stream from the Andes stopped abruptly because the infrasonic gas spectrometer battery had completely discharged."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"The telemetry stream from the Andes stopped abruptly because the infrasonic gas spectrometer battery had completely discharged.\". Using the subordinating conjunction 'because' establishes the causal relationship and eliminates the fused run-on."
    },
    {
        "id": 46,
        "section": "english",
        "topic": "Style & Tone",
        "text": "The data collected by Valeria Gomez in the Andes revealed an astonishing, mind-boggling increase in the concentration of pyroclastic basalt deposits.\n\nWhich replacement for the underlined phrase best maintains objective scientific neutrality?",
        "options": [
            "a statistically significant",
            "an unbelievable and crazy",
            "a super massive",
            "a shockingly wild"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"a statistically significant\". 'A statistically significant' provides precise scientific description without sensationalist hyperbole."
    },
    {
        "id": 47,
        "section": "english",
        "topic": "Transitions",
        "text": "Valeria Gomez decided not to drill into the fragile geological crust in the Andes. [47], the Andean Geophysical Survey utilized non-invasive acoustic mapping from a safe distance.\n\nWhich transition best presents this alternative approach?",
        "options": [
            "Furthermore",
            "Instead",
            "Consequently",
            "Likewise"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Instead\". 'Instead' correctly introduces the chosen alternative action following a rejected option."
    },
    {
        "id": 48,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "The author wants to ensure smooth cohesion between a paragraph describing fieldwork in the Andes and a paragraph detailing laboratory synthesis of pyroclastic basalt deposits. Which sentence best bridges this transition?",
        "options": [
            "Laboratory experiments are often conducted in sterile cleanrooms.",
            "Many scientific discoveries occur unexpectedly during routine maintenance.",
            "Having gathered these pristine environmental samples in the Andes, Valeria Gomez returned to the laboratory to synthesize artificial analogues.",
            "the Andes is known for its challenging regional climate."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Having gathered these pristine environmental samples in the Andes, Valeria Gomez returned to the laboratory to synthesize artificial analogues.\". This bridging sentence links the completion of fieldwork in the Andes directly to the laboratory synthesis phase."
    },
    {
        "id": 49,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Historical precedents from the past history of volcanology guided Valeria Gomez's safety protocols in the Andes.\n\nWhich revision removes redundant wording?",
        "options": [
            "Past historical precedents from history guided protocols in the Andes.",
            "Precedents from past history guided protocols in the Andes.",
            "Historical precedents from earlier past history guided protocols in the Andes.",
            "Historical precedents in volcanology guided Valeria Gomez's safety protocols in the Andes."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"Historical precedents in volcanology guided Valeria Gomez's safety protocols in the Andes.\". 'Historical precedents' already denotes the past; 'from the past history' is redundant."
    },
    {
        "id": 50,
        "section": "english",
        "topic": "Punctuation",
        "text": "Valeria Gomez utilized a state [50] the art infrasonic gas spectrometer to analyze pyroclastic basalt deposits in the Andes.\n\nWhich choice correctly punctuates the compound adjective before the noun?",
        "options": [
            "state-of-the-art",
            "state of the art",
            "state, of, the, art",
            "state-of the art"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"state-of-the-art\". Compound adjectives appearing before a noun must be hyphenated ('state-of-the-art infrasonic gas spectrometer')."
    },
    {
        "id": 51,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "A science laboratory orders 60 precision micropipette tips priced at $8.10 per pack. If the supplier provides an educational discount of 19% on the entire order, what is the net total cost before tax?",
        "options": [
            "$486.00",
            "$393.66",
            "$413.10",
            "$534.60"
        ],
        "answer": 1,
        "explanation": "Total standard price = 60 × $8.10 = $486.00. Applying 19% discount: $486.00 × (1 &minus; 0.19) = $393.66."
    },
    {
        "id": 52,
        "section": "math",
        "topic": "Percentages",
        "text": "A regional wildlife reserve recorded an initial population of 705 migratory cranes. In year one, the population expanded by 23%, and in year two, seasonal conditions caused an 20% reduction from the new total. What was the population at the end of year two (rounded to the nearest integer)?",
        "options": [
            "529",
            "867",
            "694",
            "881"
        ],
        "answer": 2,
        "explanation": "Year 1 count: 705 × (1 + 0.23) = 867.1. Year 2 count: 867.1 × (1 &minus; 0.2) = 694."
    },
    {
        "id": 53,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Determine the real value of <i>x</i> that satisfies the equation: 16(<i>x</i> &minus; 5) = 61.",
        "options": [
            "3.50",
            "-1.19",
            "12.01",
            "8.81"
        ],
        "answer": 3,
        "explanation": "Divide both sides by 16: <i>x</i> &minus; 5 = 61/16 &rArr; <i>x</i> = 3.81 + 5 = 8.81."
    },
    {
        "id": 54,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "What is the simplified numerical value of (169)<sup>3/2</sup>?",
        "options": [
            "2197",
            "28561",
            "39",
            "169"
        ],
        "answer": 0,
        "explanation": "(169)<sup>3/2</sup> = (&radic;169)<sup>3</sup> = (13)<sup>3</sup> = 2197."
    },
    {
        "id": 55,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "Which equation represents the line in the standard coordinate plane that passes through (11, 27) and runs parallel to <i>y</i> = 14<i>x</i> &minus; 15?",
        "options": [
            "<i>y</i> = &minus;14<i>x</i> &minus; 127",
            "<i>y</i> = 14<i>x</i> &minus; 127",
            "<i>y</i> = 14<i>x</i> + 37",
            "<i>y</i> = (1/14)<i>x</i> + 16"
        ],
        "answer": 1,
        "explanation": "Parallel lines have identical slope <i>m</i> = 14. Using point-slope: <i>y</i> &minus; 27 = 14(<i>x</i> &minus; 11) &rArr; <i>y</i> = 14<i>x</i> &minus; 127."
    },
    {
        "id": 56,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "In a plane geometric construction, ray <i>PT</i> intersects line <i>RS</i> at point <i>P</i>. If &ang;<i>RPT</i> measures 85&deg;, what is the exact measure of adjacent angle &ang;<i>TPS</i>?",
        "options": [
            "85&deg;",
            "100&deg;",
            "95&deg;",
            "75&deg;"
        ],
        "answer": 2,
        "explanation": "Adjacent angles forming a linear pair sum to 180&deg;. &ang;<i>TPS</i> = 180&deg; &minus; 85&deg; = 95&deg;."
    },
    {
        "id": 57,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Find the unique solution pair (<i>x</i>, <i>y</i>) that satisfies the system:\n\n<i>x</i> + <i>y</i> = 20\n2<i>x</i> &minus; <i>y</i> = 25",
        "options": [
            "<i>x</i> = 17, <i>y</i> = 4",
            "<i>x</i> = 10, <i>y</i> = 13",
            "<i>x</i> = &minus;15, <i>y</i> = 5",
            "<i>x</i> = 15, <i>y</i> = 5"
        ],
        "answer": 3,
        "explanation": "Adding equations: 3<i>x</i> = 45 &rArr; <i>x</i> = 15. Then <i>y</i> = 20 &minus; 15 = 5."
    },
    {
        "id": 58,
        "section": "math",
        "topic": "Trigonometry",
        "text": "In right triangle &Delta;<i>PQR</i> with &ang;<i>Q</i> = 90&deg;, side <i>PQ</i> has length 29 and hypotenuse <i>PR</i> has length 58. What is the exact value of cos(&ang;<i>P</i>)?",
        "options": [
            "29/58",
            "58/29",
            "&radic;(2523)/58",
            "1"
        ],
        "answer": 0,
        "explanation": "cos(&ang;<i>P</i>) = Adjacent / Hypotenuse = <i>PQ</i> / <i>PR</i> = 29/58."
    },
    {
        "id": 59,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "What is the median value of the sorted numerical collection: { 95, 99, 104, 111, 120, 133, 146 }?",
        "options": [
            "99",
            "111",
            "133",
            "146"
        ],
        "answer": 1,
        "explanation": "For an ordered dataset of 7 elements, the median is the 4th element: 111."
    },
    {
        "id": 60,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "A metallurgical alloy requires copper and zinc in a mass ratio of 14:26. If a foundry batch contains 630 kg of copper, how many kilograms of zinc must be blended?",
        "options": [
            "1184 kg",
            "1159 kg",
            "1170 kg",
            "655 kg"
        ],
        "answer": 2,
        "explanation": "Ratio: 14/26 = 630/<i>z</i> &rArr; <i>z</i> = (26 × 630) / 14 = 1170 kg."
    },
    {
        "id": 61,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Find the greatest common factor (GCF) of 816 and 1224.",
        "options": [
            "204",
            "408",
            "816",
            "2448"
        ],
        "answer": 1,
        "explanation": "GCF(816, 1224) = 204 × GCF(4, 6) = 204 × 2 = 408."
    },
    {
        "id": 62,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for <i>x</i> in the equation: 4<i>x</i> &minus; 205 = 3<i>x</i> + 311.",
        "options": [
            "106",
            "410",
            "516",
            "522"
        ],
        "answer": 2,
        "explanation": "4<i>x</i> &minus; 3<i>x</i> = 311 + 205 &rArr; <i>x</i> = 516."
    },
    {
        "id": 63,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "A rectangular courtyard has length 216 meters and width 318 meters. What is its total perimeter?",
        "options": [
            "68688 m",
            "534 m",
            "1080 m",
            "1068 m"
        ],
        "answer": 3,
        "explanation": "Perimeter = 2(Length + Width) = 2(216 + 318) = 1068 m."
    },
    {
        "id": 64,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify the algebraic expression: (<i>y</i><sup>13</sup>)<sup>14</sup> &middot; <i>y</i><sup>4</sup>.",
        "options": [
            "<i>y</i><sup>186</sup>",
            "<i>y</i><sup>189</sup>",
            "<i>y</i><sup>184</sup>",
            "<i>y</i><sup>372</sup>"
        ],
        "answer": 0,
        "explanation": "(<i>y</i><sup>13</sup>)<sup>14</sup> = <i>y</i><sup>182</sup>. Multiplying by <i>y</i><sup>4</sup> gives <i>y</i><sup>186</sup>."
    },
    {
        "id": 65,
        "section": "math",
        "topic": "Trigonometry",
        "text": "In right triangle &Delta;<i>ABC</i>, acute angle &theta; has tan(&theta;) = 12/15. What is cot(&theta;)?",
        "options": [
            "12/15",
            "15/12",
            "1",
            "&minus;15/12"
        ],
        "answer": 1,
        "explanation": "cot(&theta;) = 1 / tan(&theta;) = 15/12."
    },
    {
        "id": 66,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "Determine the midpoint of the line segment joining (209, 319) and (217, 331).",
        "options": [
            "(217, 331)",
            "(211, 322)",
            "(213, 325)",
            "(215, 327)"
        ],
        "answer": 2,
        "explanation": "Midpoint = ((209 + 217)/2, (319 + 331)/2) = (213, 325)."
    },
    {
        "id": 67,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "If quadratic function <i>h</i>(<i>x</i>) = 3<i>x</i><sup>2</sup> &minus; 210, evaluate <i>h</i>(4).",
        "options": [
            "258",
            "-186",
            "-151",
            "-162"
        ],
        "answer": 3,
        "explanation": "<i>h</i>(4) = 3(4)<sup>2</sup> &minus; 210 = 3(16) &minus; 210 = 48 &minus; 210 = -162."
    },
    {
        "id": 68,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "A lottery drum contains numbered tokens from 1 through 231. If a single token is selected at random, what is the probability that it is divisible by 5?",
        "options": [
            "46/231",
            "49/231",
            "1/231",
            "45/231"
        ],
        "answer": 0,
        "explanation": "There are 46 multiples of 5 within 1 to 231. Probability = 46/231."
    },
    {
        "id": 69,
        "section": "math",
        "topic": "Percentages",
        "text": "A laboratory apparatus originally priced at $4240 is discounted by 16%. What is the discounted price?",
        "options": [
            "$3816.00",
            "$3561.60",
            "$2756.00",
            "$4240.00"
        ],
        "answer": 1,
        "explanation": "Discounted price = $4240 × (1 &minus; 0.16) = $3561.60."
    },
    {
        "id": 70,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "What is the area of a right triangle with base 426 mm and perpendicular height 654 mm?",
        "options": [
            "278604 mm<sup>2</sup>",
            "69651 mm<sup>2</sup>",
            "139302 mm<sup>2</sup>",
            "4320 mm<sup>2</sup>"
        ],
        "answer": 2,
        "explanation": "Area = (1/2) × base × height = (1/2) × 426 × 654 = 139302 mm<sup>2</sup>."
    },
    {
        "id": 71,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Solve the absolute value equation: |3<i>x</i> &minus; 642| = 987.",
        "options": [
            "<i>x</i> = 543",
            "<i>x</i> = -115",
            "<i>x</i> = &minus;543 or <i>x</i> = &minus;-115",
            "<i>x</i> = 543 or <i>x</i> = -115"
        ],
        "answer": 3,
        "explanation": "3<i>x</i> &minus; 642 = 987 &rArr; <i>x</i> = 543; 3<i>x</i> &minus; 642 = &minus;987 &rArr; <i>x</i> = -115."
    },
    {
        "id": 72,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "A circle in the standard coordinate plane has equation (<i>x</i> + 215)<sup>2</sup> + (<i>y</i> &minus; 331)<sup>2</sup> = 180625. What is its radius?",
        "options": [
            "425 units",
            "180625 units",
            "218 units",
            "338 units"
        ],
        "answer": 0,
        "explanation": "In (<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup>, the radius <i>r</i> = &radic;(180625) = 425 units."
    },
    {
        "id": 73,
        "section": "math",
        "topic": "Trigonometry",
        "text": "Convert the angle 3240&deg; into radian measure.",
        "options": [
            "18&pi;/3",
            "18&pi;",
            "1&pi;/19",
            "(3240/360)&pi;"
        ],
        "answer": 1,
        "explanation": "Radians = (Degrees × &pi;) / 180 = (3240&pi;) / 180 = 18&pi;."
    },
    {
        "id": 74,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "An arithmetic sequence has initial term <i>a</i><sub>1</sub> = 217 and common difference <i>d</i> = 14. What is the 10th term, <i>a</i><sub>10</sub>?",
        "options": [
            "335",
            "355",
            "343",
            "427"
        ],
        "answer": 2,
        "explanation": "<i>a</i><sub>10</sub> = <i>a</i><sub>1</sub> + (10 &minus; 1)<i>d</i> = 217 + 9(14) = 343."
    },
    {
        "id": 75,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Factor the quadratic binomial completely: <i>x</i><sup>2</sup> &minus; 49729.",
        "options": [
            "(<i>x</i> &minus; 223)<sup>2</sup>",
            "(<i>x</i> + 223)<sup>2</sup>",
            "(<i>x</i> &minus; 446)(<i>x</i> + 2)",
            "(<i>x</i> &minus; 223)(<i>x</i> + 223)"
        ],
        "answer": 3,
        "explanation": "Difference of squares: <i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup> = (<i>a</i> &minus; <i>b</i>)(<i>a</i> + <i>b</i>)."
    },
    {
        "id": 76,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "From a cohort of 23 researchers, how many distinct 2-person subcommittees can be formed?",
        "options": [
            "253",
            "506",
            "46",
            "263"
        ],
        "answer": 0,
        "explanation": "<i>C</i>(23, 2) = (23 × 22) / 2 = 253."
    },
    {
        "id": 77,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Simplify the complex number product: (13 + 2<i>i</i>)(3 &minus; <i>i</i>), where <i>i</i><sup>2</sup> = &minus;1.",
        "options": [
            "41 &minus; -2<i>i</i>",
            "41 &minus; 7<i>i</i>",
            "47 + <i>i</i>",
            "39 &minus; 4<i>i</i>"
        ],
        "answer": 1,
        "explanation": "(13 + 2<i>i</i>)(3 &minus; <i>i</i>) = 39 &minus; 13<i>i</i> + 6<i>i</i> &minus; 2<i>i</i><sup>2</sup> = 41 + -7<i>i</i>."
    },
    {
        "id": 78,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "A solid geometric cone has a circular base radius of 14 cm and a height of 17 cm. What is its volume?",
        "options": [
            "2776.8&pi; cm<sup>3</sup>",
            "555.4&pi; cm<sup>3</sup>",
            "1110.7&pi; cm<sup>3</sup>",
            "476&pi; cm<sup>3</sup>"
        ],
        "answer": 2,
        "explanation": "Volume = (1/3)&pi;<i>r</i><sup>2</sup><i>h</i> = (1/3)&pi;(14)<sup>2</sup>(17) = 1110.7&pi; cm<sup>3</sup>."
    },
    {
        "id": 79,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "If variable <i>u</i> is inversely proportional to <i>v</i>, and <i>u</i> = 444 when <i>v</i> = 3, what is <i>u</i> when <i>v</i> = 6?",
        "options": [
            "666",
            "111",
            "1110",
            "222"
        ],
        "answer": 3,
        "explanation": "Inverse variation: <i>u</i> &middot; <i>v</i> = <i>k</i> &rArr; <i>k</i> = 444 × 3 = 1332. When <i>v</i> = 6, <i>u</i> = 1332 / 6 = 222."
    },
    {
        "id": 80,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the <i>x</i>-intercept of the linear equation 5<i>x</i> &minus; 2<i>y</i> = 2230?",
        "options": [
            "(446, 0)",
            "(0, 446)",
            "(892, 0)",
            "(&minus;446, 0)"
        ],
        "answer": 0,
        "explanation": "Set <i>y</i> = 0 &rArr; 5<i>x</i> = 2230 &rArr; <i>x</i> = 446. Intercept is (446, 0)."
    },
    {
        "id": 81,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify the radical product: &radic;(672) &middot; &radic;(2688).",
        "options": [
            "2688",
            "1344",
            "896",
            "1359"
        ],
        "answer": 1,
        "explanation": "&radic;(672 × 2688) = &radic;(1806336) = 224 × 6 = 1344."
    },
    {
        "id": 82,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Evaluate the logarithmic expression: log<sub>16</sub>(4096).",
        "options": [
            "2",
            "16",
            "3",
            "4"
        ],
        "answer": 2,
        "explanation": "log<sub>16</sub>(16<sup>3</sup>) = 3."
    },
    {
        "id": 83,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "In a circle with radius 230 cm, calculate the area of a sector with a central angle of 60&deg;.",
        "options": [
            "22041.67&pi; cm<sup>2</sup>",
            "4408.34&pi; cm<sup>2</sup>",
            "690&pi; cm<sup>2</sup>",
            "8816.67&pi; cm<sup>2</sup>"
        ],
        "answer": 3,
        "explanation": "Sector Area = &pi;<i>r</i><sup>2</sup>(&theta;/360&deg;) = &pi;(230)<sup>2</sup>(60&deg;/360&deg;) = 8816.67&pi; cm<sup>2</sup>."
    },
    {
        "id": 84,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for <i>w</i> in the rational equation: <i>w</i>/5 + <i>w</i>/2 = 1589.",
        "options": [
            "2270",
            "1589",
            "1135",
            "3178"
        ],
        "answer": 0,
        "explanation": "Common denominator: (2<i>w</i> + 5<i>w</i>)/10 = 7<i>w</i>/10 = 1589 &rArr; <i>w</i> = 10 × 227 = 2270."
    },
    {
        "id": 85,
        "section": "math",
        "topic": "Trigonometry",
        "text": "If &theta; is an acute angle in test 11 with sin(&theta;) = 1/2, what is the value of cos(&theta;)?",
        "options": [
            "1/2",
            "&radic;3/2",
            "&radic;2/2",
            "1"
        ],
        "answer": 1,
        "explanation": "In a 30&deg;-60&deg;-90&deg; special triangle where sin(30&deg;) = 1/2, cos(30&deg;) = &radic;3/2."
    },
    {
        "id": 86,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "A sample container has 14 red beads, 15 blue beads, and 16 green beads. What is the probability of drawing a red bead?",
        "options": [
            "15/45",
            "16/45",
            "14/45",
            "1/45"
        ],
        "answer": 2,
        "explanation": "Probability = (Red beads) / (Total beads) = 14 / (14 + 15 + 16) = 14/45."
    },
    {
        "id": 87,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Determine the discriminant &Delta; for the quadratic equation 2<i>x</i><sup>2</sup> + 8<i>x</i> + 15 = 0.",
        "options": [
            "-40",
            "184",
            "-70",
            "-56"
        ],
        "answer": 3,
        "explanation": "Discriminant &Delta; = <i>b</i><sup>2</sup> &minus; 4<i>ac</i> = 8<sup>2</sup> &minus; 4(2)(15) = 64 &minus; 120 = -56."
    },
    {
        "id": 88,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "Calculate the slope of the line passing through coordinates (4, 231) and (7, 246).",
        "options": [
            "5",
            "1/5",
            "15",
            "3/7"
        ],
        "answer": 0,
        "explanation": "Slope <i>m</i> = (246 &minus; 231) / (7 &minus; 4) = 15/3 = 5."
    },
    {
        "id": 89,
        "section": "math",
        "topic": "Percentages",
        "text": "What is 21% of 7300?",
        "options": [
            "1545.0",
            "1533.0",
            "1525.0",
            "3285.0"
        ],
        "answer": 1,
        "explanation": "(21/100) × 7300 = 1533.0."
    },
    {
        "id": 90,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "The hypotenuse of an isosceles right triangle is 932&radic;2 cm. What is the length of each leg?",
        "options": [
            "466 cm",
            "1864 cm",
            "932 cm",
            "938 cm"
        ],
        "answer": 2,
        "explanation": "In a 45&deg;-45&deg;-90&deg; right triangle, Hypotenuse = Leg &middot; &radic;2 &rArr; Leg = 932 cm."
    },
    {
        "id": 91,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Evaluate the arithmetic expression: |&minus;936| &minus; |738| + |&minus;6|.",
        "options": [
            "218",
            "194",
            "1680",
            "204"
        ],
        "answer": 3,
        "explanation": "936 &minus; 738 + 6 = 204."
    },
    {
        "id": 92,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Given <i>f</i>(<i>x</i>) = 2<i>x</i> + 5 and <i>g</i>(<i>x</i>) = 3<i>x</i>, evaluate the composite function <i>f</i>(<i>g</i>(13)).",
        "options": [
            "83",
            "90",
            "36",
            "93"
        ],
        "answer": 0,
        "explanation": "<i>g</i>(13) = 3(13) = 39. Then <i>f</i>(39) = 2(39) + 5 = 83."
    },
    {
        "id": 93,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for <i>z</i> in the linear relation: 6<i>z</i> &minus; 1416 = 0.",
        "options": [
            "240",
            "236",
            "&minus;236",
            "0"
        ],
        "answer": 1,
        "explanation": "6<i>z</i> = 1416 &rArr; <i>z</i> = 236."
    },
    {
        "id": 94,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "The arithmetic mean of four laboratory measurements is 287. If three of the values are 282, 292, and 285, what is the fourth value?",
        "options": [
            "295",
            "281",
            "289",
            "287"
        ],
        "answer": 2,
        "explanation": "Total sum required = 4 × (287) = 1148. Fourth value = 1148 &minus; 859 = 289."
    },
    {
        "id": 95,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "Which coordinate point lies on the line given by 3<i>x</i> + 2<i>y</i> = 728?",
        "options": [
            "(240, 7)",
            "(238, 11)",
            "(&minus;238, 7)",
            "(238, 7)"
        ],
        "answer": 3,
        "explanation": "3(238) + 2(7) = 714 + 14. The point (238, 7) satisfies the equation."
    },
    {
        "id": 96,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Midnight Conservatory\"\n\nThe municipal conservatory stood as an architectural triumph of Victorian ironwork and curved glass. Within its temperature-controlled chambers flourished rare tropical palms and carnivorous pitcher plants gathered from remote expeditions. For the resident horticulturist, maintenance of this fragile oasis was a continuous dialogue between delicate ecology and mechanical heating systems.",
        "text": "Based on Passage I (\"The Midnight Conservatory\"), the primary purpose of the text is to:",
        "options": [
            "examine the intricate relationship between the midnight conservatory and its broader significance.",
            "criticize traditional approaches while advocating for immediate reform.",
            "provide a purely statistical timeline of historical events.",
            "argue that modern technological advancements have rendered past practices obsolete."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"examine the intricate relationship between the midnight conservatory and its broader significance.\". The passage as a whole focuses on introducing and exploring the nuances and deeper meaning of \"The Midnight Conservatory\"."
    },
    {
        "id": 97,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Midnight Conservatory\"\n\nThe municipal conservatory stood as an architectural triumph of Victorian ironwork and curved glass. Within its temperature-controlled chambers flourished rare tropical palms and carnivorous pitcher plants gathered from remote expeditions. For the resident horticulturist, maintenance of this fragile oasis was a continuous dialogue between delicate ecology and mechanical heating systems.",
        "text": "According to the discussion in Passage I (\"The Midnight Conservatory\"), which of the following is explicitly emphasized about the subject?",
        "options": [
            "It was achieved without significant labor or long-term dedication.",
            "It requires meticulous attention to detail and a deep understanding of foundational principles.",
            "It was largely rejected by contemporary experts during its initial phase.",
            "It relies exclusively on automated machinery rather than human expertise."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"It requires meticulous attention to detail and a deep understanding of foundational principles.\". The text provides specific narrative details showing the precision, dedication, and knowledge required."
    },
    {
        "id": 98,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Midnight Conservatory\"\n\nThe municipal conservatory stood as an architectural triumph of Victorian ironwork and curved glass. Within its temperature-controlled chambers flourished rare tropical palms and carnivorous pitcher plants gathered from remote expeditions. For the resident horticulturist, maintenance of this fragile oasis was a continuous dialogue between delicate ecology and mechanical heating systems.",
        "text": "In the context of Passage I (\"The Midnight Conservatory\"), the author's descriptive tone is best characterized as:",
        "options": [
            "dismissive and cynical.",
            "detached and uninterested.",
            "reverent and analytical.",
            "confrontational and hostile."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"reverent and analytical.\". The author treats the subject with serious appreciation and structured, thoughtful analysis."
    },
    {
        "id": 99,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Midnight Conservatory\"\n\nThe municipal conservatory stood as an architectural triumph of Victorian ironwork and curved glass. Within its temperature-controlled chambers flourished rare tropical palms and carnivorous pitcher plants gathered from remote expeditions. For the resident horticulturist, maintenance of this fragile oasis was a continuous dialogue between delicate ecology and mechanical heating systems.",
        "text": "It can reasonably be inferred from the narrative presented in Passage I (\"The Midnight Conservatory\") that:",
        "options": [
            "the primary actors involved were unaware of the consequences of their actions.",
            "external economic conditions had no impact on the development of the field.",
            "the subject will likely lose relevance within the coming decade.",
            "the underlying principles discussed have enduring value that transcends simple utility."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"the underlying principles discussed have enduring value that transcends simple utility.\". The narrative suggests that the true significance lies beyond immediate material or practical outcomes."
    },
    {
        "id": 100,
        "section": "reading",
        "topic": "Rhetorical Skills",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Midnight Conservatory\"\n\nThe municipal conservatory stood as an architectural triumph of Victorian ironwork and curved glass. Within its temperature-controlled chambers flourished rare tropical palms and carnivorous pitcher plants gathered from remote expeditions. For the resident horticulturist, maintenance of this fragile oasis was a continuous dialogue between delicate ecology and mechanical heating systems.",
        "text": "The structural development of Passage I (\"The Midnight Conservatory\") serves primarily to:",
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
        "id": 101,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Midnight Conservatory\"\n\nThe municipal conservatory stood as an architectural triumph of Victorian ironwork and curved glass. Within its temperature-controlled chambers flourished rare tropical palms and carnivorous pitcher plants gathered from remote expeditions. For the resident horticulturist, maintenance of this fragile oasis was a continuous dialogue between delicate ecology and mechanical heating systems.",
        "text": "In Passage I (\"The Midnight Conservatory\"), the success or impact of the central endeavor is most directly attributed to:",
        "options": [
            "favorable political mandates enacted by municipal authorities.",
            "a harmonious blend of disciplined craft, historical knowledge, and perseverance.",
            "sheer chance and fortuitous external interventions.",
            "hasty improvisation under urgent time constraints."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"a harmonious blend of disciplined craft, historical knowledge, and perseverance.\". The text illustrates that mastery and lasting impact stem from deliberate discipline and deep understanding."
    },
    {
        "id": 102,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Midnight Conservatory\"\n\nThe municipal conservatory stood as an architectural triumph of Victorian ironwork and curved glass. Within its temperature-controlled chambers flourished rare tropical palms and carnivorous pitcher plants gathered from remote expeditions. For the resident horticulturist, maintenance of this fragile oasis was a continuous dialogue between delicate ecology and mechanical heating systems.",
        "text": "The author's perspective toward the evolution of Passage I (\"The Midnight Conservatory\") is best described as:",
        "options": [
            "skeptical of its claimed achievements.",
            "strictly neutral and reporting raw data.",
            "deeply respectful of its heritage and nuanced complexities.",
            "nostalgic yet dismissive of modern adaptations."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"deeply respectful of its heritage and nuanced complexities.\". The descriptive language emphasizes admiration for the precision, craft, and significance of the subject."
    },
    {
        "id": 103,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Midnight Conservatory\"\n\nThe municipal conservatory stood as an architectural triumph of Victorian ironwork and curved glass. Within its temperature-controlled chambers flourished rare tropical palms and carnivorous pitcher plants gathered from remote expeditions. For the resident horticulturist, maintenance of this fragile oasis was a continuous dialogue between delicate ecology and mechanical heating systems.",
        "text": "The author of Passage I (\"The Midnight Conservatory\") suggests that viewing the subject merely as a routine process would:",
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
        "id": 104,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Midnight Conservatory\"\n\nThe municipal conservatory stood as an architectural triumph of Victorian ironwork and curved glass. Within its temperature-controlled chambers flourished rare tropical palms and carnivorous pitcher plants gathered from remote expeditions. For the resident horticulturist, maintenance of this fragile oasis was a continuous dialogue between delicate ecology and mechanical heating systems.",
        "text": "Which statement best expresses the overarching conclusion presented in Passage I (\"The Midnight Conservatory\")?",
        "options": [
            "True mastery and understanding arise from honoring fundamental principles while engaging deeply with the work.",
            "Technological disruption inevitably erodes the value of all historical traditions.",
            "Individual achievement is entirely dependent on institutional patronage.",
            "Theoretical models are vastly superior to empirical practice in every domain."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"True mastery and understanding arise from honoring fundamental principles while engaging deeply with the work.\". The concluding lines reflect on the broader significance of dedicated stewardship and deep comprehension."
    },
    {
        "id": 105,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Mobility & Transportation Equity\"\n\nUrban transit infrastructure is inextricably linked with socioeconomic mobility. Communities with robust access to affordable, high-frequency bus and rail networks experience higher employment rates and improved educational access, highlighting the necessity of transportation equity in municipal budgeting.",
        "text": "Based on Passage II (\"Urban Mobility & Transportation Equity\"), the primary purpose of the text is to:",
        "options": [
            "criticize traditional approaches while advocating for immediate reform.",
            "examine the intricate relationship between urban mobility & transportation equity and its broader significance.",
            "provide a purely statistical timeline of historical events.",
            "argue that modern technological advancements have rendered past practices obsolete."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"examine the intricate relationship between urban mobility & transportation equity and its broader significance.\". The passage as a whole focuses on introducing and exploring the nuances and deeper meaning of \"Urban Mobility & Transportation Equity\"."
    },
    {
        "id": 106,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Mobility & Transportation Equity\"\n\nUrban transit infrastructure is inextricably linked with socioeconomic mobility. Communities with robust access to affordable, high-frequency bus and rail networks experience higher employment rates and improved educational access, highlighting the necessity of transportation equity in municipal budgeting.",
        "text": "According to the discussion in Passage II (\"Urban Mobility & Transportation Equity\"), which of the following is explicitly emphasized about the subject?",
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
        "id": 107,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Mobility & Transportation Equity\"\n\nUrban transit infrastructure is inextricably linked with socioeconomic mobility. Communities with robust access to affordable, high-frequency bus and rail networks experience higher employment rates and improved educational access, highlighting the necessity of transportation equity in municipal budgeting.",
        "text": "In the context of Passage II (\"Urban Mobility & Transportation Equity\"), the author's descriptive tone is best characterized as:",
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
        "id": 108,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Mobility & Transportation Equity\"\n\nUrban transit infrastructure is inextricably linked with socioeconomic mobility. Communities with robust access to affordable, high-frequency bus and rail networks experience higher employment rates and improved educational access, highlighting the necessity of transportation equity in municipal budgeting.",
        "text": "It can reasonably be inferred from the narrative presented in Passage II (\"Urban Mobility & Transportation Equity\") that:",
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
        "id": 109,
        "section": "reading",
        "topic": "Rhetorical Skills",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Mobility & Transportation Equity\"\n\nUrban transit infrastructure is inextricably linked with socioeconomic mobility. Communities with robust access to affordable, high-frequency bus and rail networks experience higher employment rates and improved educational access, highlighting the necessity of transportation equity in municipal budgeting.",
        "text": "The structural development of Passage II (\"Urban Mobility & Transportation Equity\") serves primarily to:",
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
        "id": 110,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Mobility & Transportation Equity\"\n\nUrban transit infrastructure is inextricably linked with socioeconomic mobility. Communities with robust access to affordable, high-frequency bus and rail networks experience higher employment rates and improved educational access, highlighting the necessity of transportation equity in municipal budgeting.",
        "text": "In Passage II (\"Urban Mobility & Transportation Equity\"), the success or impact of the central endeavor is most directly attributed to:",
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
        "id": 111,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Mobility & Transportation Equity\"\n\nUrban transit infrastructure is inextricably linked with socioeconomic mobility. Communities with robust access to affordable, high-frequency bus and rail networks experience higher employment rates and improved educational access, highlighting the necessity of transportation equity in municipal budgeting.",
        "text": "The author's perspective toward the evolution of Passage II (\"Urban Mobility & Transportation Equity\") is best described as:",
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
        "id": 112,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Mobility & Transportation Equity\"\n\nUrban transit infrastructure is inextricably linked with socioeconomic mobility. Communities with robust access to affordable, high-frequency bus and rail networks experience higher employment rates and improved educational access, highlighting the necessity of transportation equity in municipal budgeting.",
        "text": "The author of Passage II (\"Urban Mobility & Transportation Equity\") suggests that viewing the subject merely as a routine process would:",
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
        "id": 113,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Urban Mobility & Transportation Equity\"\n\nUrban transit infrastructure is inextricably linked with socioeconomic mobility. Communities with robust access to affordable, high-frequency bus and rail networks experience higher employment rates and improved educational access, highlighting the necessity of transportation equity in municipal budgeting.",
        "text": "Which statement best expresses the overarching conclusion presented in Passage II (\"Urban Mobility & Transportation Equity\")?",
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
        "id": 114,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Acoustic Design in Ancient Amphitheaters\"\n\nThe acoustic brilliance of Greco-Roman theaters, such as the amphitheater at Epidaurus, resulted from sophisticated geometric design and stone acoustic filtering. Stepped limestone seating rows effectively suppressed low-frequency background noise while amplifying high-frequency vocal consonants across vast open-air spaces.",
        "text": "Based on Passage III (\"Acoustic Design in Ancient Amphitheaters\"), the primary purpose of the text is to:",
        "options": [
            "criticize traditional approaches while advocating for immediate reform.",
            "provide a purely statistical timeline of historical events.",
            "examine the intricate relationship between acoustic design in ancient amphitheaters and its broader significance.",
            "argue that modern technological advancements have rendered past practices obsolete."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"examine the intricate relationship between acoustic design in ancient amphitheaters and its broader significance.\". The passage as a whole focuses on introducing and exploring the nuances and deeper meaning of \"Acoustic Design in Ancient Amphitheaters\"."
    },
    {
        "id": 115,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Acoustic Design in Ancient Amphitheaters\"\n\nThe acoustic brilliance of Greco-Roman theaters, such as the amphitheater at Epidaurus, resulted from sophisticated geometric design and stone acoustic filtering. Stepped limestone seating rows effectively suppressed low-frequency background noise while amplifying high-frequency vocal consonants across vast open-air spaces.",
        "text": "According to the discussion in Passage III (\"Acoustic Design in Ancient Amphitheaters\"), which of the following is explicitly emphasized about the subject?",
        "options": [
            "It was achieved without significant labor or long-term dedication.",
            "It was largely rejected by contemporary experts during its initial phase.",
            "It relies exclusively on automated machinery rather than human expertise.",
            "It requires meticulous attention to detail and a deep understanding of foundational principles."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"It requires meticulous attention to detail and a deep understanding of foundational principles.\". The text provides specific narrative details showing the precision, dedication, and knowledge required."
    },
    {
        "id": 116,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Acoustic Design in Ancient Amphitheaters\"\n\nThe acoustic brilliance of Greco-Roman theaters, such as the amphitheater at Epidaurus, resulted from sophisticated geometric design and stone acoustic filtering. Stepped limestone seating rows effectively suppressed low-frequency background noise while amplifying high-frequency vocal consonants across vast open-air spaces.",
        "text": "In the context of Passage III (\"Acoustic Design in Ancient Amphitheaters\"), the author's descriptive tone is best characterized as:",
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
        "id": 117,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Acoustic Design in Ancient Amphitheaters\"\n\nThe acoustic brilliance of Greco-Roman theaters, such as the amphitheater at Epidaurus, resulted from sophisticated geometric design and stone acoustic filtering. Stepped limestone seating rows effectively suppressed low-frequency background noise while amplifying high-frequency vocal consonants across vast open-air spaces.",
        "text": "It can reasonably be inferred from the narrative presented in Passage III (\"Acoustic Design in Ancient Amphitheaters\") that:",
        "options": [
            "the primary actors involved were unaware of the consequences of their actions.",
            "the underlying principles discussed have enduring value that transcends simple utility.",
            "external economic conditions had no impact on the development of the field.",
            "the subject will likely lose relevance within the coming decade."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"the underlying principles discussed have enduring value that transcends simple utility.\". The narrative suggests that the true significance lies beyond immediate material or practical outcomes."
    },
    {
        "id": 118,
        "section": "reading",
        "topic": "Rhetorical Skills",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Acoustic Design in Ancient Amphitheaters\"\n\nThe acoustic brilliance of Greco-Roman theaters, such as the amphitheater at Epidaurus, resulted from sophisticated geometric design and stone acoustic filtering. Stepped limestone seating rows effectively suppressed low-frequency background noise while amplifying high-frequency vocal consonants across vast open-air spaces.",
        "text": "The structural development of Passage III (\"Acoustic Design in Ancient Amphitheaters\") serves primarily to:",
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
        "id": 119,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Acoustic Design in Ancient Amphitheaters\"\n\nThe acoustic brilliance of Greco-Roman theaters, such as the amphitheater at Epidaurus, resulted from sophisticated geometric design and stone acoustic filtering. Stepped limestone seating rows effectively suppressed low-frequency background noise while amplifying high-frequency vocal consonants across vast open-air spaces.",
        "text": "In Passage III (\"Acoustic Design in Ancient Amphitheaters\"), the success or impact of the central endeavor is most directly attributed to:",
        "options": [
            "favorable political mandates enacted by municipal authorities.",
            "sheer chance and fortuitous external interventions.",
            "hasty improvisation under urgent time constraints.",
            "a harmonious blend of disciplined craft, historical knowledge, and perseverance."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"a harmonious blend of disciplined craft, historical knowledge, and perseverance.\". The text illustrates that mastery and lasting impact stem from deliberate discipline and deep understanding."
    },
    {
        "id": 120,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Acoustic Design in Ancient Amphitheaters\"\n\nThe acoustic brilliance of Greco-Roman theaters, such as the amphitheater at Epidaurus, resulted from sophisticated geometric design and stone acoustic filtering. Stepped limestone seating rows effectively suppressed low-frequency background noise while amplifying high-frequency vocal consonants across vast open-air spaces.",
        "text": "The author's perspective toward the evolution of Passage III (\"Acoustic Design in Ancient Amphitheaters\") is best described as:",
        "options": [
            "deeply respectful of its heritage and nuanced complexities.",
            "skeptical of its claimed achievements.",
            "strictly neutral and reporting raw data.",
            "nostalgic yet dismissive of modern adaptations."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"deeply respectful of its heritage and nuanced complexities.\". The descriptive language emphasizes admiration for the precision, craft, and significance of the subject."
    },
    {
        "id": 121,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Acoustic Design in Ancient Amphitheaters\"\n\nThe acoustic brilliance of Greco-Roman theaters, such as the amphitheater at Epidaurus, resulted from sophisticated geometric design and stone acoustic filtering. Stepped limestone seating rows effectively suppressed low-frequency background noise while amplifying high-frequency vocal consonants across vast open-air spaces.",
        "text": "The author of Passage III (\"Acoustic Design in Ancient Amphitheaters\") suggests that viewing the subject merely as a routine process would:",
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
        "id": 122,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE III: HUMANITIES\n\n\"Acoustic Design in Ancient Amphitheaters\"\n\nThe acoustic brilliance of Greco-Roman theaters, such as the amphitheater at Epidaurus, resulted from sophisticated geometric design and stone acoustic filtering. Stepped limestone seating rows effectively suppressed low-frequency background noise while amplifying high-frequency vocal consonants across vast open-air spaces.",
        "text": "Which statement best expresses the overarching conclusion presented in Passage III (\"Acoustic Design in Ancient Amphitheaters\")?",
        "options": [
            "Technological disruption inevitably erodes the value of all historical traditions.",
            "Individual achievement is entirely dependent on institutional patronage.",
            "True mastery and understanding arise from honoring fundamental principles while engaging deeply with the work.",
            "Theoretical models are vastly superior to empirical practice in every domain."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"True mastery and understanding arise from honoring fundamental principles while engaging deeply with the work.\". The concluding lines reflect on the broader significance of dedicated stewardship and deep comprehension."
    },
    {
        "id": 123,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Quantum Entanglement & Superposition\"\n\nQuantum entanglement occurs when pairs of particles become entangled such that the quantum state of each particle cannot be described independently of the other. Measuring the spin state of one entangled particle instantly determines the state of its counterpart, regardless of spatial separation.",
        "text": "Based on Passage IV (\"Quantum Entanglement & Superposition\"), the primary purpose of the text is to:",
        "options": [
            "criticize traditional approaches while advocating for immediate reform.",
            "provide a purely statistical timeline of historical events.",
            "argue that modern technological advancements have rendered past practices obsolete.",
            "examine the intricate relationship between quantum entanglement & superposition and its broader significance."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"examine the intricate relationship between quantum entanglement & superposition and its broader significance.\". The passage as a whole focuses on introducing and exploring the nuances and deeper meaning of \"Quantum Entanglement & Superposition\"."
    },
    {
        "id": 124,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Quantum Entanglement & Superposition\"\n\nQuantum entanglement occurs when pairs of particles become entangled such that the quantum state of each particle cannot be described independently of the other. Measuring the spin state of one entangled particle instantly determines the state of its counterpart, regardless of spatial separation.",
        "text": "According to the discussion in Passage IV (\"Quantum Entanglement & Superposition\"), which of the following is explicitly emphasized about the subject?",
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
        "id": 125,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Quantum Entanglement & Superposition\"\n\nQuantum entanglement occurs when pairs of particles become entangled such that the quantum state of each particle cannot be described independently of the other. Measuring the spin state of one entangled particle instantly determines the state of its counterpart, regardless of spatial separation.",
        "text": "In the context of Passage IV (\"Quantum Entanglement & Superposition\"), the author's descriptive tone is best characterized as:",
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
        "id": 126,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Quantum Entanglement & Superposition\"\n\nQuantum entanglement occurs when pairs of particles become entangled such that the quantum state of each particle cannot be described independently of the other. Measuring the spin state of one entangled particle instantly determines the state of its counterpart, regardless of spatial separation.",
        "text": "It can reasonably be inferred from the narrative presented in Passage IV (\"Quantum Entanglement & Superposition\") that:",
        "options": [
            "the primary actors involved were unaware of the consequences of their actions.",
            "external economic conditions had no impact on the development of the field.",
            "the underlying principles discussed have enduring value that transcends simple utility.",
            "the subject will likely lose relevance within the coming decade."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"the underlying principles discussed have enduring value that transcends simple utility.\". The narrative suggests that the true significance lies beyond immediate material or practical outcomes."
    },
    {
        "id": 127,
        "section": "reading",
        "topic": "Rhetorical Skills",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Quantum Entanglement & Superposition\"\n\nQuantum entanglement occurs when pairs of particles become entangled such that the quantum state of each particle cannot be described independently of the other. Measuring the spin state of one entangled particle instantly determines the state of its counterpart, regardless of spatial separation.",
        "text": "The structural development of Passage IV (\"Quantum Entanglement & Superposition\") serves primarily to:",
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
        "id": 128,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Quantum Entanglement & Superposition\"\n\nQuantum entanglement occurs when pairs of particles become entangled such that the quantum state of each particle cannot be described independently of the other. Measuring the spin state of one entangled particle instantly determines the state of its counterpart, regardless of spatial separation.",
        "text": "In Passage IV (\"Quantum Entanglement & Superposition\"), the success or impact of the central endeavor is most directly attributed to:",
        "options": [
            "a harmonious blend of disciplined craft, historical knowledge, and perseverance.",
            "favorable political mandates enacted by municipal authorities.",
            "sheer chance and fortuitous external interventions.",
            "hasty improvisation under urgent time constraints."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"a harmonious blend of disciplined craft, historical knowledge, and perseverance.\". The text illustrates that mastery and lasting impact stem from deliberate discipline and deep understanding."
    },
    {
        "id": 129,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Quantum Entanglement & Superposition\"\n\nQuantum entanglement occurs when pairs of particles become entangled such that the quantum state of each particle cannot be described independently of the other. Measuring the spin state of one entangled particle instantly determines the state of its counterpart, regardless of spatial separation.",
        "text": "The author's perspective toward the evolution of Passage IV (\"Quantum Entanglement & Superposition\") is best described as:",
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
        "id": 130,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Quantum Entanglement & Superposition\"\n\nQuantum entanglement occurs when pairs of particles become entangled such that the quantum state of each particle cannot be described independently of the other. Measuring the spin state of one entangled particle instantly determines the state of its counterpart, regardless of spatial separation.",
        "text": "The author of Passage IV (\"Quantum Entanglement & Superposition\") suggests that viewing the subject merely as a routine process would:",
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
        "id": 131,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Quantum Entanglement & Superposition\"\n\nQuantum entanglement occurs when pairs of particles become entangled such that the quantum state of each particle cannot be described independently of the other. Measuring the spin state of one entangled particle instantly determines the state of its counterpart, regardless of spatial separation.",
        "text": "Which statement best expresses the overarching conclusion presented in Passage IV (\"Quantum Entanglement & Superposition\")?",
        "options": [
            "Technological disruption inevitably erodes the value of all historical traditions.",
            "Individual achievement is entirely dependent on institutional patronage.",
            "Theoretical models are vastly superior to empirical practice in every domain.",
            "True mastery and understanding arise from honoring fundamental principles while engaging deeply with the work."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"True mastery and understanding arise from honoring fundamental principles while engaging deeply with the work.\". The concluding lines reflect on the broader significance of dedicated stewardship and deep comprehension."
    }
];

if (typeof window !== 'undefined') {
    window.ACT_QUESTIONS1 = ACT_QUESTIONS1;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ACT_QUESTIONS1;
}

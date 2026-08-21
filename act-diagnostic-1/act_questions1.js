// =============================================
// act_questions1.js – ACT Diagnostic Test 1
// Core ACT Format: English (50Q), Math (45Q), Reading (36Q)
// Total: 131 questions
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "english",
        "topic": "Punctuation",
        "text": "The research team led by Marcus Vance, who had spent five weeks analyzing modular timber dwellings in Copenhagen finally published their findings in a leading scientific journal.\n\nWhich of the following best corrects the punctuation in the sentence above?",
        "options": [
            "The research team led by Marcus Vance who had spent five weeks analyzing modular timber dwellings in Copenhagen, finally published their findings in a leading scientific journal.",
            "The research team led by Marcus Vance, who had spent five weeks analyzing modular timber dwellings in Copenhagen finally, published their findings in a leading scientific journal.",
            "The research team led by Marcus Vance, who had spent five weeks analyzing modular timber dwellings in Copenhagen, finally published their findings in a leading scientific journal.",
            "The research team led by Marcus Vance who had spent five weeks analyzing modular timber dwellings, in Copenhagen finally published their findings in a leading scientific journal."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"The research team led by Marcus Vance, who had spent five weeks analyzing modular timber dwellings in Copenhagen, finally published their findings in a leading scientific journal.\". The non-essential relative clause beginning with 'who had spent five weeks...' must be set off by paired commas."
    },
    {
        "id": 2,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Neither Marcus Vance nor the Nordic Design Institute technicians was able to calibrate the thermal imaging scanner before the expedition began.\n\nWhich correction should be made to the underlined verb?",
        "options": [
            "is able to calibrate",
            "was being able to calibrate",
            "No change needed",
            "were able to calibrate"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"were able to calibrate\". With 'neither... nor', the verb agrees with the closer subject ('technicians', plural), requiring 'were'."
    },
    {
        "id": 3,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Examining the delicate structure of modular timber dwellings through the thermal imaging scanner, the anomalous readings became immediately apparent to Marcus Vance.\n\nWhich revision best corrects the dangling modifier in the sentence?",
        "options": [
            "Examining the delicate structure of modular timber dwellings through the thermal imaging scanner, Marcus Vance immediately noticed the anomalous readings.",
            "Through the thermal imaging scanner, examining the delicate structure of modular timber dwellings, the anomalous readings became immediately apparent.",
            "The anomalous readings became immediately apparent, examining the delicate structure of modular timber dwellings through the thermal imaging scanner.",
            "Marcus Vance, examining the delicate structure of modular timber dwellings through the thermal imaging scanner, the anomalous readings became apparent."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Examining the delicate structure of modular timber dwellings through the thermal imaging scanner, Marcus Vance immediately noticed the anomalous readings.\". The introductory participial phrase must modify the person performing the action (Marcus Vance), not 'the readings'."
    },
    {
        "id": 4,
        "section": "english",
        "topic": "Style & Tone",
        "text": "The initial hypothesis regarding modular timber dwellings formulated by Marcus Vance was completely disproven by the latest measurements from Copenhagen.\n\nWhich alternative to the underlined portion would be LEAST acceptable in maintaining a formal academic tone?",
        "options": [
            "thoroughly refuted",
            "totally shot down",
            "proven inaccurate",
            "rendered untenable"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"totally shot down\". 'Totally shot down' is colloquial slang and undermines the formal register of an academic publication."
    },
    {
        "id": 5,
        "section": "english",
        "topic": "Transitions",
        "text": "The Nordic Design Institute faced severe logistical obstacles in Copenhagen. [5], the researchers successfully deployed the thermal imaging scanner on schedule.\n\nWhich transition word or phrase best connects these two sentences?",
        "options": [
            "Consequently",
            "Furthermore",
            "Nevertheless",
            "Similarly"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Nevertheless\". 'Nevertheless' correctly signals a contrast between the severe obstacles and the successful deployment."
    },
    {
        "id": 6,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "The author wants to conclude a paragraph by highlighting the broader technological impact of urban micro-architecture pioneered by Marcus Vance. Which choice best accomplishes this goal?",
        "options": [
            "Marcus Vance has presented these findings at several international academic symposia.",
            "Securing institutional grant funding remains an essential step for laboratory expansion.",
            "Field research in remote environments requires careful logistical planning.",
            "By translating these observations into synthetic prototypes, industrial engineers can manufacture more resilient commercial materials."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"By translating these observations into synthetic prototypes, industrial engineers can manufacture more resilient commercial materials.\". This option directly connects the specialized scientific findings to broader commercial and industrial applications."
    },
    {
        "id": 7,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "The final report presented by Marcus Vance contained a concise summary that was brief and to the point regarding modular timber dwellings in Copenhagen.\n\nWhich revision best eliminates the redundancy in the sentence?",
        "options": [
            "The final report presented by Marcus Vance contained a concise summary of modular timber dwellings in Copenhagen.",
            "The final report presented a concise summary that was brief and short of modular timber dwellings.",
            "The final report presented a brief summary concise and to the point of modular timber dwellings.",
            "The final report presented a summary that was concise, brief, and to the point."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The final report presented by Marcus Vance contained a concise summary of modular timber dwellings in Copenhagen.\". 'Concise summary' inherently means brief and to the point; adding extra qualifiers creates unnecessary redundancy."
    },
    {
        "id": 8,
        "section": "english",
        "topic": "Punctuation",
        "text": "The thermal imaging scanner recorded unprecedented fluctuations in Copenhagen the analytical software processed the telemetry in real time.\n\nWhich choice provides the correct punctuation between the two independent clauses?",
        "options": [
            "Copenhagen, the analytical",
            "Copenhagen; the analytical",
            "Copenhagen the analytical",
            "Copenhagen: and the analytical"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Copenhagen; the analytical\". Two independent clauses without a coordinating conjunction must be separated by a semicolon."
    },
    {
        "id": 9,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Marcus Vance consulted with three international specialists from Copenhagen, all of [9] had extensive experience in urban micro-architecture.\n\nWhich pronoun correctly completes the sentence?",
        "options": [
            "who",
            "which",
            "whom",
            "that"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"whom\". 'Whom' is the objective case pronoun required as the object of the preposition 'of'."
    },
    {
        "id": 10,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "The temperature dropped rapidly after dusk in Copenhagen, the Nordic Design Institute had to calibrate the heating elements on the thermal imaging scanner.\n\nWhich choice best corrects the comma splice?",
        "options": [
            "The temperature dropped rapidly after dusk in Copenhagen the team had to calibrate the heating elements.",
            "Dropping rapidly after dusk the temperature in Copenhagen, the team calibrated the heating elements.",
            "The temperature dropped rapidly after dusk in Copenhagen, and so therefore the team calibrated the heating elements.",
            "The temperature dropped rapidly after dusk in Copenhagen, so the Nordic Design Institute had to calibrate the heating elements on the thermal imaging scanner."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"The temperature dropped rapidly after dusk in Copenhagen, so the Nordic Design Institute had to calibrate the heating elements on the thermal imaging scanner.\". A comma splice between two independent clauses is correctly repaired using a comma and coordinating conjunction ('so')."
    },
    {
        "id": 11,
        "section": "english",
        "topic": "Style & Tone",
        "text": "During the survey in Copenhagen, Marcus Vance collected a bunch of data points on modular timber dwellings.\n\nWhich choice replaces the underlined phrase with the most precise and formal academic phrasing?",
        "options": [
            "a substantial dataset of",
            "a whole lot of",
            "tons of",
            "a massive heap of"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"a substantial dataset of\". 'A substantial dataset of' conveys academic precision, avoiding vague or informal colloquialisms."
    },
    {
        "id": 12,
        "section": "english",
        "topic": "Transitions",
        "text": "The filtration membrane on the thermal imaging scanner clogged due to fine sediment in Copenhagen. [12], the automated safety valve halted fluid intake immediately.\n\nWhich transition word best signals the logical relationship?",
        "options": [
            "Conversely",
            "Consequently",
            "Nonetheless",
            "In contrast"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Consequently\". 'Consequently' correctly indicates that the safety valve action was a direct result of the clogged membrane."
    },
    {
        "id": 13,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "For the sake of logical flow in Marcus Vance's research log, where should a sentence describing the initial site preparation in Copenhagen be placed?",
        "options": [
            "At the very end of the essay after the conclusion.",
            "Between the analysis of results and the final summary.",
            "At the beginning of the paragraph, before the discussion of data collection.",
            "Nowhere, because site preparation is irrelevant to scientific research."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"At the beginning of the paragraph, before the discussion of data collection.\". Chronological logic requires site preparation to precede the collection and analysis of data."
    },
    {
        "id": 14,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Marcus Vance observed an unusual phenomenon that was rare and out of the ordinary while tracking modular timber dwellings in Copenhagen.\n\nWhich choice is most concise without losing essential meaning?",
        "options": [
            "an unusual phenomenon that was rare in Copenhagen.",
            "a rare phenomenon out of the ordinary in Copenhagen.",
            "an unusual, rare, and out of the ordinary phenomenon in Copenhagen.",
            "an unusual phenomenon in Copenhagen."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"an unusual phenomenon in Copenhagen.\". 'An unusual phenomenon' fully captures the meaning without repetitive synonyms like 'rare' and 'out of the ordinary'."
    },
    {
        "id": 15,
        "section": "english",
        "topic": "Punctuation",
        "text": "The three [15] collective recommendations on urban micro-architecture were compiled into the final project charter by Marcus Vance.\n\nWhich choice correctly indicates plural possession?",
        "options": [
            "institutions'",
            "institution's",
            "institutions",
            "institutions's"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"institutions'\". Plural nouns ending in 's' form the possessive by adding an apostrophe after the 's' ('institutions'')."
    },
    {
        "id": 16,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "When the telemetry gauge fluctuated in Copenhagen, Marcus Vance quickly [16] the auxiliary power switch on the thermal imaging scanner.\n\nWhich verb form maintains proper past tense consistency?",
        "options": [
            "activates",
            "activated",
            "has activated",
            "will activate"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"activated\". The past tense verb 'fluctuated' requires the parallel past tense 'activated' for narrative consistency."
    },
    {
        "id": 17,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "The protocol in Copenhagen required Marcus Vance to inspect the valves, [17], and document all telemetry in the official log.\n\nWhich choice maintains parallel grammatical structure?",
        "options": [
            "cleaning the optical sensors",
            "to have cleaned the optical sensors",
            "clean the optical sensors",
            "the optical sensors were cleaned"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"clean the optical sensors\". The infinitive structure 'to inspect..., [clean]..., and [document]...' requires base verb forms in parallel."
    },
    {
        "id": 18,
        "section": "english",
        "topic": "Style & Tone",
        "text": "The new spectral analysis conducted in Copenhagen [18] the presence of rare mineral compounds within modular timber dwellings.\n\nWhich choice offers the most precise and descriptive vocabulary?",
        "options": [
            "showed up",
            "made clearish",
            "pointed at",
            "substantiated"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"substantiated\". 'Substantiated' is formal, accurate, and scientifically appropriate."
    },
    {
        "id": 19,
        "section": "english",
        "topic": "Transitions",
        "text": "The thermal imaging scanner mapped the core structure of modular timber dwellings in Copenhagen. [19], it recorded ambient temperature and salinity gradients simultaneously.\n\nWhich transition word best adds supporting information?",
        "options": [
            "Furthermore",
            "On the other hand",
            "In spite of this",
            "Instead"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Furthermore\". 'Furthermore' signals the addition of supplementary data collected by the instrument."
    },
    {
        "id": 20,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "Which introductory sentence best establishes the central focus of a passage detailing Marcus Vance's breakthrough in urban micro-architecture across Copenhagen?",
        "options": [
            "Many people enjoy reading about scientific discoveries during their leisure time.",
            "Recent advances in urban micro-architecture have been accelerated by groundbreaking field methodologies pioneered by Marcus Vance.",
            "Copenhagen has a diverse geographical profile characterized by variable weather.",
            "Laboratory equipment is often manufactured by specialized technical firms."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Recent advances in urban micro-architecture have been accelerated by groundbreaking field methodologies pioneered by Marcus Vance.\". This sentence clearly introduces both the scientific discipline and the central role of the primary researcher."
    },
    {
        "id": 21,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Marcus Vance made adjustments to the thermal imaging scanner in Copenhagen [21] adverse atmospheric pressure.\n\nWhich choice is the most concise replacement for 'on account of the fact that there was'?",
        "options": [
            "on account of the fact that there was",
            "due to the circumstance where there was",
            "because of",
            "owing to the presence of the reality of"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"because of\". 'Because of' is the most direct and economical way to express causation."
    },
    {
        "id": 22,
        "section": "english",
        "topic": "Punctuation",
        "text": "The survey of modular timber dwellings in Copenhagen yielded three critical artifacts [22] a brass sextant, an annotated navigational log, and a hand-drawn portolan chart.\n\nWhich punctuation mark correctly introduces the list following an independent clause?",
        "options": [
            "artifacts;",
            "artifacts,",
            "artifacts",
            "artifacts:"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"artifacts:\". A colon is used after an independent clause to introduce an elaborating list or explanation."
    },
    {
        "id": 23,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Each of the experimental samples collected by Marcus Vance from Copenhagen [23] cataloged in the Nordic Design Institute database.\n\nWhich verb correctly completes the sentence?",
        "options": [
            "is",
            "are",
            "were",
            "have been"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"is\". 'Each' is a singular indefinite pronoun and requires the singular verb 'is'."
    },
    {
        "id": 24,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "Because the physical conditions surrounding modular timber dwellings in Copenhagen were more severe than anticipated. The thermal imaging scanner drifted off its planned trajectory.\n\nWhich revision eliminates the sentence fragment?",
        "options": [
            "Because the physical conditions surrounding modular timber dwellings in Copenhagen were more severe than anticipated; the thermal imaging scanner drifted off its planned trajectory.",
            "Because the physical conditions surrounding modular timber dwellings in Copenhagen were more severe than anticipated, the thermal imaging scanner drifted off its planned trajectory.",
            "Being that conditions were more severe than anticipated. The thermal imaging scanner drifted.",
            "The conditions being severe in Copenhagen. Causing the thermal imaging scanner to drift."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Because the physical conditions surrounding modular timber dwellings in Copenhagen were more severe than anticipated, the thermal imaging scanner drifted off its planned trajectory.\". Attaching the dependent clause ('Because the conditions...') to the independent clause resolves the fragment."
    },
    {
        "id": 25,
        "section": "english",
        "topic": "Style & Tone",
        "text": "All researchers assisting Marcus Vance in Copenhagen must strictly adhere [25] established safety regulations.\n\nWhich preposition completes the standard English idiom?",
        "options": [
            "with",
            "at",
            "to",
            "on"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"to\". The verb 'adhere' idiomatically pairs with the preposition 'to'."
    },
    {
        "id": 26,
        "section": "english",
        "topic": "Transitions",
        "text": "The Nordic Design Institute documented several endemic specimens in Copenhagen. [26], they identified a unique manifestation of modular timber dwellings never before recorded.\n\nWhich transition best introduces a specific example?",
        "options": [
            "In summary",
            "Nevertheless",
            "Otherwise",
            "For instance"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"For instance\". 'For instance' correctly introduces a concrete example of the endemic specimens mentioned."
    },
    {
        "id": 27,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "If Marcus Vance were to include a quantitative chart comparing measurements of modular timber dwellings across Copenhagen, the primary rhetorical function would be to:",
        "options": [
            "provide empirical validation for the chemical trends described in the narrative.",
            "distract the reader from ambiguities in the experimental methodology.",
            "prove that no further scientific investigation is necessary.",
            "replace the qualitative descriptions with purely numeric indices."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"provide empirical validation for the chemical trends described in the narrative.\". Quantitative data serves to substantiate and empirically validate the qualitative observations."
    },
    {
        "id": 28,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "The autonomous thermal imaging scanner deployed in Copenhagen operates independently without human guidance on its own.\n\nWhich choice best eliminates repetitive phrasing?",
        "options": [
            "The autonomous thermal imaging scanner operates independently on its own without human guidance.",
            "The autonomous thermal imaging scanner operates without human guidance.",
            "Operating independently, the autonomous thermal imaging scanner guides itself on its own.",
            "The thermal imaging scanner operates autonomously, independently, and on its own."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"The autonomous thermal imaging scanner operates without human guidance.\". 'Operates without human guidance' directly explains the function without repeating 'autonomously', 'independently', and 'on its own'."
    },
    {
        "id": 29,
        "section": "english",
        "topic": "Punctuation",
        "text": "The field specimen of modular timber dwellings—fragile from centuries of isolation in Copenhagen [29] was stabilized by Marcus Vance.\n\nWhich punctuation mark correctly closes the parenthetical insertion?",
        "options": [
            "isolation in Copenhagen,",
            "isolation in Copenhagen;",
            "isolation in Copenhagen—",
            "isolation in Copenhagen"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"isolation in Copenhagen—\". A parenthetical interruption opened with an em-dash must be closed with an em-dash."
    },
    {
        "id": 30,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "Between the two calibration methods tested by Marcus Vance in Copenhagen, the second protocol demonstrated [30] analytical accuracy.\n\nWhich modifier form is grammatically correct?",
        "options": [
            "greatest",
            "most greatest",
            "more greater",
            "greater"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"greater\". When comparing exactly two items, the comparative form ('greater') is required, not the superlative ('greatest')."
    },
    {
        "id": 31,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "In Copenhagen, Marcus Vance only analyzed the data points gathered by the thermal imaging scanner.\n\nWhich placement of 'only' makes it clear that no other data points were analyzed?",
        "options": [
            "In Copenhagen, Marcus Vance analyzed only the data points gathered by the thermal imaging scanner.",
            "In Copenhagen, only Marcus Vance analyzed the data points gathered by the thermal imaging scanner.",
            "In Copenhagen, Marcus Vance analyzed the data points only gathered by the thermal imaging scanner.",
            "In Copenhagen, Marcus Vance analyzed the data points that only were gathered by the thermal imaging scanner."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"In Copenhagen, Marcus Vance analyzed only the data points gathered by the thermal imaging scanner.\". Placing 'only' immediately before 'the data points' unambiguously restricts the action to those specific data points."
    },
    {
        "id": 32,
        "section": "english",
        "topic": "Style & Tone",
        "text": "The Nordic Design Institute specialists in Copenhagen [32] to verify the structural integrity of the thermal imaging scanner.\n\nWhich choice is best suited to contemporary professional writing?",
        "options": [
            "did strive mightily",
            "endeavored",
            "went forth",
            "soughteth"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"endeavored\". 'Endeavored' is professional and contemporary, avoiding archaic theatrical language."
    },
    {
        "id": 33,
        "section": "english",
        "topic": "Transitions",
        "text": "[33] the initial sensor calibrations in Copenhagen were delayed by inclement conditions, Marcus Vance's primary research objectives were fully met.\n\nWhich subordinating conjunction best indicates concession?",
        "options": [
            "Because",
            "Since",
            "Although",
            "Unless"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Although\". 'Although' introduces a concession clause, acknowledging the delay while highlighting overall success."
    },
    {
        "id": 34,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "Consider the phrase in Marcus Vance's summary: 'It is interesting and worth noting that modular timber dwellings reacts dynamically to seasonal shifts in Copenhagen.'\n\nWhich revision most effectively improves directness?",
        "options": [
            "As a matter of interesting fact, modular timber dwellings reacts dynamically to seasonal shifts in Copenhagen.",
            "Worth noting is the reality that modular timber dwellings reacts dynamically in Copenhagen.",
            "It goes without saying that modular timber dwellings reacts dynamically in Copenhagen.",
            "modular timber dwellings reacts dynamically to seasonal shifts in Copenhagen."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"modular timber dwellings reacts dynamically to seasonal shifts in Copenhagen.\". Deleting unnecessary throat-clearing phrases ('It is worth noting that...') makes the statement direct and authoritative."
    },
    {
        "id": 35,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "The Nordic Design Institute decided to make an assessment of the safety protocols governing Copenhagen.\n\nWhich revision is the most concise and forceful?",
        "options": [
            "The Nordic Design Institute decided to assess the safety protocols governing Copenhagen.",
            "The Nordic Design Institute decided to perform an assessment on the safety protocols in Copenhagen.",
            "The Nordic Design Institute decided to conduct a process of assessment of safety in Copenhagen.",
            "The Nordic Design Institute decided to carry out the making of an assessment for Copenhagen."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"The Nordic Design Institute decided to assess the safety protocols governing Copenhagen.\". Replacing the nominalized phrase 'make an assessment of' with the active verb 'assess' enhances clarity."
    },
    {
        "id": 36,
        "section": "english",
        "topic": "Punctuation",
        "text": "Marcus Vance discovered a dense [36] intricate network of crystalline features surrounding modular timber dwellings in Copenhagen.\n\nWhich choice correctly punctuates coordinate adjectives?",
        "options": [
            "dense;",
            "dense,",
            "dense",
            "dense and,"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"dense,\". Coordinate adjectives ('dense' and 'intricate') modifying the same noun should be separated by a comma."
    },
    {
        "id": 37,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "If the thermal imaging scanner [37] capable of operating in Copenhagen indefinitely, Marcus Vance could record longitudinal data continuously.\n\nWhich verb form correctly expresses this hypothetical condition?",
        "options": [
            "was",
            "is",
            "were",
            "will be"
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"were\". In contrary-to-fact conditional statements (subjunctive mood), 'were' is used regardless of the subject's number."
    },
    {
        "id": 38,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "The Nordic Design Institute not only documented novel properties of modular timber dwellings [38] expanded geophysical mapping across Copenhagen.\n\nWhich phrase correctly completes the correlative pair?",
        "options": [
            "and also",
            "as well as",
            "in addition to",
            "but also"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"but also\". 'Not only' must be paired with 'but also' for grammatical parallelism."
    },
    {
        "id": 39,
        "section": "english",
        "topic": "Style & Tone",
        "text": "A comprehensive geological survey of Copenhagen was conducted by Marcus Vance and the Nordic Design Institute.\n\nWhich revision converts the sentence into direct active voice?",
        "options": [
            "Marcus Vance and the Nordic Design Institute conducted a comprehensive geological survey of Copenhagen.",
            "Conducted by Marcus Vance and the Nordic Design Institute was a comprehensive geological survey of Copenhagen.",
            "A comprehensive survey of Copenhagen had its conduction by Marcus Vance.",
            "There was a comprehensive geological survey of Copenhagen conducted by the team."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Marcus Vance and the Nordic Design Institute conducted a comprehensive geological survey of Copenhagen.\". Active voice places the actors first, improving clarity and grammatical vigor."
    },
    {
        "id": 40,
        "section": "english",
        "topic": "Transitions",
        "text": "Marcus Vance mapped the outer perimeter of Copenhagen. [40], the team deployed the thermal imaging scanner into the central core.\n\nWhich transition best conveys sequential progression?",
        "options": [
            "Simultaneously",
            "Subsequently",
            "Previously",
            "Nevertheless"
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Subsequently\". 'Subsequently' indicates that the central deployment occurred after the perimeter mapping was complete."
    },
    {
        "id": 41,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "Which choice provides the most relevant detail to support Marcus Vance's claim that modular timber dwellings represents an extreme biological habitat in Copenhagen?",
        "options": [
            "The research vessel is equipped with comfortable crew cabins and a modern navigation deck.",
            "Marcus Vance studied chemistry before specializing in urban micro-architecture.",
            "Ambient temperatures at Copenhagen reach critical extremes under pressures 150 times greater than baseline standard atmosphere.",
            "Many scientific expeditions are documented in popular non-fiction periodicals."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Ambient temperatures at Copenhagen reach critical extremes under pressures 150 times greater than baseline standard atmosphere.\". Extreme physical measurements directly substantiate the claim of an extreme biological habitat."
    },
    {
        "id": 42,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "In the event that the primary sensor on the thermal imaging scanner fails in Copenhagen, the emergency beacon will engage.\n\nWhich word is the most concise replacement for 'In the event that'?",
        "options": [
            "In the circumstance where",
            "Given the factual condition that",
            "Under the contingency wherein",
            "If"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"If\". 'If' is the standard, concise equivalent of 'In the event that'."
    },
    {
        "id": 43,
        "section": "english",
        "topic": "Punctuation",
        "text": "Marcus Vance announced to the Nordic Design Institute [43] \"Our preliminary telemetry confirms a major breakthrough regarding modular timber dwellings.\"\n\nWhich choice correctly introduces the quotation?",
        "options": [
            "announced to the Nordic Design Institute,",
            "announced to the Nordic Design Institute;",
            "announced to the Nordic Design Institute:",
            "announced to the Nordic Design Institute"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"announced to the Nordic Design Institute,\". A comma is conventionally used to introduce a direct quotation following a dialogue tag."
    },
    {
        "id": 44,
        "section": "english",
        "topic": "Grammar & Usage",
        "text": "When the thermal imaging scanner struck the basalt formation in Copenhagen, it sustained minor surface abrasions.\n\nWhich revision eliminates the ambiguous pronoun 'it'?",
        "options": [
            "When it struck the basalt formation in Copenhagen, the thermal imaging scanner cracked.",
            "When the thermal imaging scanner struck the basalt formation in Copenhagen, the instrument sustained minor surface abrasions.",
            "Striking the basalt formation in Copenhagen, it sustained abrasions.",
            "The thermal imaging scanner and basalt collided in Copenhagen, and it was abraded."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"When the thermal imaging scanner struck the basalt formation in Copenhagen, the instrument sustained minor surface abrasions.\". Specifying 'the instrument' clarifies which object sustained the abrasions."
    },
    {
        "id": 45,
        "section": "english",
        "topic": "Sentence Structure",
        "text": "The telemetry stream from Copenhagen stopped abruptly the thermal imaging scanner battery had completely discharged.\n\nWhich choice correctly repairs the run-on sentence?",
        "options": [
            "The telemetry stream from Copenhagen stopped abruptly, the battery had discharged.",
            "Stopping abruptly, the telemetry stream from Copenhagen the battery had discharged.",
            "The telemetry stream from Copenhagen stopped abruptly because the thermal imaging scanner battery had completely discharged.",
            "The telemetry stream from Copenhagen stopped abruptly and so the battery had discharged."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"The telemetry stream from Copenhagen stopped abruptly because the thermal imaging scanner battery had completely discharged.\". Using the subordinating conjunction 'because' establishes the causal relationship and eliminates the fused run-on."
    },
    {
        "id": 46,
        "section": "english",
        "topic": "Style & Tone",
        "text": "The data collected by Marcus Vance in Copenhagen revealed an astonishing, mind-boggling increase in the concentration of modular timber dwellings.\n\nWhich replacement for the underlined phrase best maintains objective scientific neutrality?",
        "options": [
            "an unbelievable and crazy",
            "a super massive",
            "a shockingly wild",
            "a statistically significant"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"a statistically significant\". 'A statistically significant' provides precise scientific description without sensationalist hyperbole."
    },
    {
        "id": 47,
        "section": "english",
        "topic": "Transitions",
        "text": "Marcus Vance decided not to drill into the fragile geological crust in Copenhagen. [47], the Nordic Design Institute utilized non-invasive acoustic mapping from a safe distance.\n\nWhich transition best presents this alternative approach?",
        "options": [
            "Instead",
            "Furthermore",
            "Consequently",
            "Likewise"
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"Instead\". 'Instead' correctly introduces the chosen alternative action following a rejected option."
    },
    {
        "id": 48,
        "section": "english",
        "topic": "Rhetorical Skills",
        "text": "The author wants to ensure smooth cohesion between a paragraph describing fieldwork in Copenhagen and a paragraph detailing laboratory synthesis of modular timber dwellings. Which sentence best bridges this transition?",
        "options": [
            "Laboratory experiments are often conducted in sterile cleanrooms.",
            "Having gathered these pristine environmental samples in Copenhagen, Marcus Vance returned to the laboratory to synthesize artificial analogues.",
            "Many scientific discoveries occur unexpectedly during routine maintenance.",
            "Copenhagen is known for its challenging regional climate."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"Having gathered these pristine environmental samples in Copenhagen, Marcus Vance returned to the laboratory to synthesize artificial analogues.\". This bridging sentence links the completion of fieldwork in Copenhagen directly to the laboratory synthesis phase."
    },
    {
        "id": 49,
        "section": "english",
        "topic": "Wordiness & Redundancy",
        "text": "Historical precedents from the past history of urban micro-architecture guided Marcus Vance's safety protocols in Copenhagen.\n\nWhich revision removes redundant wording?",
        "options": [
            "Past historical precedents from history guided protocols in Copenhagen.",
            "Precedents from past history guided protocols in Copenhagen.",
            "Historical precedents in urban micro-architecture guided Marcus Vance's safety protocols in Copenhagen.",
            "Historical precedents from earlier past history guided protocols in Copenhagen."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"Historical precedents in urban micro-architecture guided Marcus Vance's safety protocols in Copenhagen.\". 'Historical precedents' already denotes the past; 'from the past history' is redundant."
    },
    {
        "id": 50,
        "section": "english",
        "topic": "Punctuation",
        "text": "Marcus Vance utilized a state [50] the art thermal imaging scanner to analyze modular timber dwellings in Copenhagen.\n\nWhich choice correctly punctuates the compound adjective before the noun?",
        "options": [
            "state of the art",
            "state, of, the, art",
            "state-of the art",
            "state-of-the-art"
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"state-of-the-art\". Compound adjectives appearing before a noun must be hyphenated ('state-of-the-art thermal imaging scanner')."
    },
    {
        "id": 51,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "A science laboratory orders 32 precision micropipette tips priced at $4.95 per pack. If the supplier provides an educational discount of 12% on the entire order, what is the net total cost before tax?",
        "options": [
            "$158.40",
            "$134.64",
            "$139.39",
            "$174.24"
        ],
        "answer": 2,
        "explanation": "Total standard price = 32 × $4.95 = $158.40. Applying 12% discount: $158.40 × (1 &minus; 0.12) = $139.39."
    },
    {
        "id": 52,
        "section": "math",
        "topic": "Percentages",
        "text": "A regional wildlife reserve recorded an initial population of 460 migratory cranes. In year one, the population expanded by 16%, and in year two, seasonal conditions caused an 19% reduction from the new total. What was the population at the end of year two (rounded to the nearest integer)?",
        "options": [
            "345",
            "534",
            "575",
            "432"
        ],
        "answer": 3,
        "explanation": "Year 1 count: 460 × (1 + 0.16) = 533.6. Year 2 count: 533.6 × (1 &minus; 0.19) = 432."
    },
    {
        "id": 53,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Determine the real value of <i>x</i> that satisfies the equation: 9(<i>x</i> &minus; 2) = 40.",
        "options": [
            "6.44",
            "4.22",
            "2.44",
            "9.64"
        ],
        "answer": 0,
        "explanation": "Divide both sides by 9: <i>x</i> &minus; 2 = 40/9 &rArr; <i>x</i> = 4.44 + 2 = 6.44."
    },
    {
        "id": 54,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "What is the simplified numerical value of (36)<sup>3/2</sup>?",
        "options": [
            "1296",
            "216",
            "18",
            "36"
        ],
        "answer": 1,
        "explanation": "(36)<sup>3/2</sup> = (&radic;36)<sup>3</sup> = (6)<sup>3</sup> = 216."
    },
    {
        "id": 55,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "Which equation represents the line in the standard coordinate plane that passes through (4, 13) and runs parallel to <i>y</i> = 7<i>x</i> &minus; 15?",
        "options": [
            "<i>y</i> = &minus;7<i>x</i> &minus; 15",
            "<i>y</i> = 7<i>x</i> + 23",
            "<i>y</i> = 7<i>x</i> &minus; 15",
            "<i>y</i> = (1/7)<i>x</i> + 9"
        ],
        "answer": 2,
        "explanation": "Parallel lines have identical slope <i>m</i> = 7. Using point-slope: <i>y</i> &minus; 13 = 7(<i>x</i> &minus; 4) &rArr; <i>y</i> = 7<i>x</i> &minus; 15."
    },
    {
        "id": 56,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "In a plane geometric construction, ray <i>PT</i> intersects line <i>RS</i> at point <i>P</i>. If &ang;<i>RPT</i> measures 57&deg;, what is the exact measure of adjacent angle &ang;<i>TPS</i>?",
        "options": [
            "57&deg;",
            "72&deg;",
            "103&deg;",
            "123&deg;"
        ],
        "answer": 3,
        "explanation": "Adjacent angles forming a linear pair sum to 180&deg;. &ang;<i>TPS</i> = 180&deg; &minus; 57&deg; = 123&deg;."
    },
    {
        "id": 57,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Find the unique solution pair (<i>x</i>, <i>y</i>) that satisfies the system:\n\n<i>x</i> + <i>y</i> = 12\n2<i>x</i> &minus; <i>y</i> = 12",
        "options": [
            "<i>x</i> = 8, <i>y</i> = 4",
            "<i>x</i> = 10, <i>y</i> = 3",
            "<i>x</i> = 9, <i>y</i> = 6",
            "<i>x</i> = &minus;8, <i>y</i> = 4"
        ],
        "answer": 0,
        "explanation": "Adding equations: 3<i>x</i> = 24 &rArr; <i>x</i> = 8. Then <i>y</i> = 12 &minus; 8 = 4."
    },
    {
        "id": 58,
        "section": "math",
        "topic": "Trigonometry",
        "text": "In right triangle &Delta;<i>PQR</i> with &ang;<i>Q</i> = 90&deg;, side <i>PQ</i> has length 15 and hypotenuse <i>PR</i> has length 37. What is the exact value of cos(&ang;<i>P</i>)?",
        "options": [
            "37/15",
            "15/37",
            "&radic;(1144)/37",
            "1"
        ],
        "answer": 1,
        "explanation": "cos(&ang;<i>P</i>) = Adjacent / Hypotenuse = <i>PQ</i> / <i>PR</i> = 15/37."
    },
    {
        "id": 59,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "What is the median value of the sorted numerical collection: { 46, 50, 55, 62, 71, 84, 97 }?",
        "options": [
            "50",
            "84",
            "62",
            "97"
        ],
        "answer": 2,
        "explanation": "For an ordered dataset of 7 elements, the median is the 4th element: 62."
    },
    {
        "id": 60,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "A metallurgical alloy requires copper and zinc in a mass ratio of 7:12. If a foundry batch contains 168 kg of copper, how many kilograms of zinc must be blended?",
        "options": [
            "302 kg",
            "277 kg",
            "193 kg",
            "288 kg"
        ],
        "answer": 3,
        "explanation": "Ratio: 7/12 = 168/<i>z</i> &rArr; <i>z</i> = (12 × 168) / 7 = 288 kg."
    },
    {
        "id": 61,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Find the greatest common factor (GCF) of 452 and 678.",
        "options": [
            "113",
            "452",
            "226",
            "1356"
        ],
        "answer": 2,
        "explanation": "GCF(452, 678) = 113 × GCF(4, 6) = 113 × 2 = 226."
    },
    {
        "id": 62,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for <i>x</i> in the equation: 4<i>x</i> &minus; 114 = 3<i>x</i> + 192.",
        "options": [
            "78",
            "228",
            "312",
            "306"
        ],
        "answer": 3,
        "explanation": "4<i>x</i> &minus; 3<i>x</i> = 192 + 114 &rArr; <i>x</i> = 306."
    },
    {
        "id": 63,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "A rectangular courtyard has length 125 meters and width 199 meters. What is its total perimeter?",
        "options": [
            "648 m",
            "24875 m",
            "324 m",
            "660 m"
        ],
        "answer": 0,
        "explanation": "Perimeter = 2(Length + Width) = 2(125 + 199) = 648 m."
    },
    {
        "id": 64,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify the algebraic expression: (<i>y</i><sup>6</sup>)<sup>7</sup> &middot; <i>y</i><sup>4</sup>.",
        "options": [
            "<i>y</i><sup>49</sup>",
            "<i>y</i><sup>46</sup>",
            "<i>y</i><sup>44</sup>",
            "<i>y</i><sup>92</sup>"
        ],
        "answer": 1,
        "explanation": "(<i>y</i><sup>6</sup>)<sup>7</sup> = <i>y</i><sup>42</sup>. Multiplying by <i>y</i><sup>4</sup> gives <i>y</i><sup>46</sup>."
    },
    {
        "id": 65,
        "section": "math",
        "topic": "Trigonometry",
        "text": "In right triangle &Delta;<i>ABC</i>, acute angle &theta; has tan(&theta;) = 5/8. What is cot(&theta;)?",
        "options": [
            "5/8",
            "1",
            "8/5",
            "&minus;8/5"
        ],
        "answer": 2,
        "explanation": "cot(&theta;) = 1 / tan(&theta;) = 8/5."
    },
    {
        "id": 66,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "Determine the midpoint of the line segment joining (118, 200) and (126, 212).",
        "options": [
            "(126, 212)",
            "(120, 203)",
            "(124, 208)",
            "(122, 206)"
        ],
        "answer": 3,
        "explanation": "Midpoint = ((118 + 126)/2, (200 + 212)/2) = (122, 206)."
    },
    {
        "id": 67,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "If quadratic function <i>h</i>(<i>x</i>) = 3<i>x</i><sup>2</sup> &minus; 119, evaluate <i>h</i>(4).",
        "options": [
            "-71",
            "167",
            "-95",
            "-60"
        ],
        "answer": 0,
        "explanation": "<i>h</i>(4) = 3(4)<sup>2</sup> &minus; 119 = 3(16) &minus; 119 = 48 &minus; 119 = -71."
    },
    {
        "id": 68,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "A lottery drum contains numbered tokens from 1 through 140. If a single token is selected at random, what is the probability that it is divisible by 5?",
        "options": [
            "31/140",
            "28/140",
            "1/140",
            "27/140"
        ],
        "answer": 1,
        "explanation": "There are 28 multiples of 5 within 1 to 140. Probability = 28/140."
    },
    {
        "id": 69,
        "section": "math",
        "topic": "Percentages",
        "text": "A laboratory apparatus originally priced at $2420 is discounted by 19%. What is the discounted price?",
        "options": [
            "$2178.00",
            "$1573.00",
            "$1960.20",
            "$2420.00"
        ],
        "answer": 2,
        "explanation": "Discounted price = $2420 × (1 &minus; 0.19) = $1960.20."
    },
    {
        "id": 70,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "What is the area of a right triangle with base 244 mm and perpendicular height 416 mm?",
        "options": [
            "101504 mm<sup>2</sup>",
            "25376 mm<sup>2</sup>",
            "2640 mm<sup>2</sup>",
            "50752 mm<sup>2</sup>"
        ],
        "answer": 3,
        "explanation": "Area = (1/2) × base × height = (1/2) × 244 × 416 = 50752 mm<sup>2</sup>."
    },
    {
        "id": 71,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Solve the absolute value equation: |3<i>x</i> &minus; 369| = 630.",
        "options": [
            "<i>x</i> = 333 or <i>x</i> = -87",
            "<i>x</i> = 333",
            "<i>x</i> = -87",
            "<i>x</i> = &minus;333 or <i>x</i> = &minus;-87"
        ],
        "answer": 0,
        "explanation": "3<i>x</i> &minus; 369 = 630 &rArr; <i>x</i> = 333; 3<i>x</i> &minus; 369 = &minus;630 &rArr; <i>x</i> = -87."
    },
    {
        "id": 72,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "A circle in the standard coordinate plane has equation (<i>x</i> + 124)<sup>2</sup> + (<i>y</i> &minus; 212)<sup>2</sup> = 85264. What is its radius?",
        "options": [
            "85264 units",
            "292 units",
            "127 units",
            "219 units"
        ],
        "answer": 1,
        "explanation": "In (<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup>, the radius <i>r</i> = &radic;(85264) = 292 units."
    },
    {
        "id": 73,
        "section": "math",
        "topic": "Trigonometry",
        "text": "Convert the angle 1875&deg; into radian measure.",
        "options": [
            "125&pi;/14",
            "12&pi;/126",
            "125&pi;/12",
            "(1875/360)&pi;"
        ],
        "answer": 2,
        "explanation": "Radians = (Degrees × &pi;) / 180 = (1875&pi;) / 180 = 125&pi;/12."
    },
    {
        "id": 74,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "An arithmetic sequence has initial term <i>a</i><sub>1</sub> = 126 and common difference <i>d</i> = 7. What is the 10th term, <i>a</i><sub>10</sub>?",
        "options": [
            "181",
            "201",
            "231",
            "189"
        ],
        "answer": 3,
        "explanation": "<i>a</i><sub>10</sub> = <i>a</i><sub>1</sub> + (10 &minus; 1)<i>d</i> = 126 + 9(7) = 189."
    },
    {
        "id": 75,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Factor the quadratic binomial completely: <i>x</i><sup>2</sup> &minus; 17424.",
        "options": [
            "(<i>x</i> &minus; 132)(<i>x</i> + 132)",
            "(<i>x</i> &minus; 132)<sup>2</sup>",
            "(<i>x</i> + 132)<sup>2</sup>",
            "(<i>x</i> &minus; 264)(<i>x</i> + 2)"
        ],
        "answer": 0,
        "explanation": "Difference of squares: <i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup> = (<i>a</i> &minus; <i>b</i>)(<i>a</i> + <i>b</i>)."
    },
    {
        "id": 76,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "From a cohort of 16 researchers, how many distinct 2-person subcommittees can be formed?",
        "options": [
            "240",
            "120",
            "32",
            "130"
        ],
        "answer": 1,
        "explanation": "<i>C</i>(16, 2) = (16 × 15) / 2 = 120."
    },
    {
        "id": 77,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Simplify the complex number product: (6 + 2<i>i</i>)(3 &minus; <i>i</i>), where <i>i</i><sup>2</sup> = &minus;1.",
        "options": [
            "20 &minus; 5<i>i</i>",
            "26 + <i>i</i>",
            "20 + 0<i>i</i>",
            "18 &minus; 4<i>i</i>"
        ],
        "answer": 2,
        "explanation": "(6 + 2<i>i</i>)(3 &minus; <i>i</i>) = 18 &minus; 6<i>i</i> + 6<i>i</i> &minus; 2<i>i</i><sup>2</sup> = 20 + 0<i>i</i>."
    },
    {
        "id": 78,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "A solid geometric cone has a circular base radius of 7 cm and a height of 10 cm. What is its volume?",
        "options": [
            "408.3&pi; cm<sup>3</sup>",
            "81.7&pi; cm<sup>3</sup>",
            "140&pi; cm<sup>3</sup>",
            "163.3&pi; cm<sup>3</sup>"
        ],
        "answer": 3,
        "explanation": "Volume = (1/3)&pi;<i>r</i><sup>2</sup><i>h</i> = (1/3)&pi;(7)<sup>2</sup>(10) = 163.3&pi; cm<sup>3</sup>."
    },
    {
        "id": 79,
        "section": "math",
        "topic": "Ratios & Proportions",
        "text": "If variable <i>u</i> is inversely proportional to <i>v</i>, and <i>u</i> = 262 when <i>v</i> = 3, what is <i>u</i> when <i>v</i> = 6?",
        "options": [
            "131",
            "393",
            "66",
            "655"
        ],
        "answer": 0,
        "explanation": "Inverse variation: <i>u</i> &middot; <i>v</i> = <i>k</i> &rArr; <i>k</i> = 262 × 3 = 786. When <i>v</i> = 6, <i>u</i> = 786 / 6 = 131."
    },
    {
        "id": 80,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "What is the <i>x</i>-intercept of the linear equation 5<i>x</i> &minus; 2<i>y</i> = 1320?",
        "options": [
            "(0, 264)",
            "(264, 0)",
            "(528, 0)",
            "(&minus;264, 0)"
        ],
        "answer": 1,
        "explanation": "Set <i>y</i> = 0 &rArr; 5<i>x</i> = 1320 &rArr; <i>x</i> = 264. Intercept is (264, 0)."
    },
    {
        "id": 81,
        "section": "math",
        "topic": "Exponents & Radicals",
        "text": "Simplify the radical product: &radic;(399) &middot; &radic;(1596).",
        "options": [
            "1596",
            "532",
            "798",
            "813"
        ],
        "answer": 2,
        "explanation": "&radic;(399 × 1596) = &radic;(636804) = 133 × 6 = 798."
    },
    {
        "id": 82,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Evaluate the logarithmic expression: log<sub>9</sub>(729).",
        "options": [
            "2",
            "9",
            "4",
            "3"
        ],
        "answer": 3,
        "explanation": "log<sub>9</sub>(9<sup>3</sup>) = 3."
    },
    {
        "id": 83,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "In a circle with radius 139 cm, calculate the area of a sector with a central angle of 60&deg;.",
        "options": [
            "3220.17&pi; cm<sup>2</sup>",
            "8050.43&pi; cm<sup>2</sup>",
            "1610.09&pi; cm<sup>2</sup>",
            "417&pi; cm<sup>2</sup>"
        ],
        "answer": 0,
        "explanation": "Sector Area = &pi;<i>r</i><sup>2</sup>(&theta;/360&deg;) = &pi;(139)<sup>2</sup>(60&deg;/360&deg;) = 3220.17&pi; cm<sup>2</sup>."
    },
    {
        "id": 84,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for <i>w</i> in the rational equation: <i>w</i>/5 + <i>w</i>/2 = 952.",
        "options": [
            "952",
            "1360",
            "680",
            "1904"
        ],
        "answer": 1,
        "explanation": "Common denominator: (2<i>w</i> + 5<i>w</i>)/10 = 7<i>w</i>/10 = 952 &rArr; <i>w</i> = 10 × 136 = 1360."
    },
    {
        "id": 85,
        "section": "math",
        "topic": "Trigonometry",
        "text": "If &theta; is an acute angle in test 4 with sin(&theta;) = 1/2, what is the value of cos(&theta;)?",
        "options": [
            "1/2",
            "&radic;2/2",
            "&radic;3/2",
            "1"
        ],
        "answer": 2,
        "explanation": "In a 30&deg;-60&deg;-90&deg; special triangle where sin(30&deg;) = 1/2, cos(30&deg;) = &radic;3/2."
    },
    {
        "id": 86,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "A sample container has 7 red beads, 8 blue beads, and 9 green beads. What is the probability of drawing a red bead?",
        "options": [
            "8/24",
            "9/24",
            "1/24",
            "7/24"
        ],
        "answer": 3,
        "explanation": "Probability = (Red beads) / (Total beads) = 7 / (7 + 8 + 9) = 7/24."
    },
    {
        "id": 87,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Determine the discriminant &Delta; for the quadratic equation 2<i>x</i><sup>2</sup> + 8<i>x</i> + 8 = 0.",
        "options": [
            "0",
            "16",
            "128",
            "-14"
        ],
        "answer": 0,
        "explanation": "Discriminant &Delta; = <i>b</i><sup>2</sup> &minus; 4<i>ac</i> = 8<sup>2</sup> &minus; 4(2)(8) = 64 &minus; 64 = 0."
    },
    {
        "id": 88,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "Calculate the slope of the line passing through coordinates (4, 140) and (7, 155).",
        "options": [
            "1/5",
            "5",
            "15",
            "3/7"
        ],
        "answer": 1,
        "explanation": "Slope <i>m</i> = (155 &minus; 140) / (7 &minus; 4) = 15/3 = 5."
    },
    {
        "id": 89,
        "section": "math",
        "topic": "Percentages",
        "text": "What is 14% of 4920?",
        "options": [
            "700.8",
            "680.8",
            "688.8",
            "2214.0"
        ],
        "answer": 2,
        "explanation": "(14/100) × 4920 = 688.8."
    },
    {
        "id": 90,
        "section": "math",
        "topic": "Plane Geometry",
        "text": "The hypotenuse of an isosceles right triangle is 568&radic;2 cm. What is the length of each leg?",
        "options": [
            "284 cm",
            "1136 cm",
            "574 cm",
            "568 cm"
        ],
        "answer": 3,
        "explanation": "In a 45&deg;-45&deg;-90&deg; right triangle, Hypotenuse = Leg &middot; &radic;2 &rArr; Leg = 568 cm."
    },
    {
        "id": 91,
        "section": "math",
        "topic": "Pre-Algebra",
        "text": "Evaluate the arithmetic expression: |&minus;572| &minus; |500| + |&minus;6|.",
        "options": [
            "78",
            "92",
            "68",
            "1078"
        ],
        "answer": 0,
        "explanation": "572 &minus; 500 + 6 = 78."
    },
    {
        "id": 92,
        "section": "math",
        "topic": "Intermediate Algebra",
        "text": "Given <i>f</i>(<i>x</i>) = 2<i>x</i> + 5 and <i>g</i>(<i>x</i>) = 3<i>x</i>, evaluate the composite function <i>f</i>(<i>g</i>(6)).",
        "options": [
            "48",
            "41",
            "22",
            "51"
        ],
        "answer": 1,
        "explanation": "<i>g</i>(6) = 3(6) = 18. Then <i>f</i>(18) = 2(18) + 5 = 41."
    },
    {
        "id": 93,
        "section": "math",
        "topic": "Elementary Algebra",
        "text": "Solve for <i>z</i> in the linear relation: 6<i>z</i> &minus; 870 = 0.",
        "options": [
            "149",
            "&minus;145",
            "145",
            "0"
        ],
        "answer": 2,
        "explanation": "6<i>z</i> = 870 &rArr; <i>z</i> = 145."
    },
    {
        "id": 94,
        "section": "math",
        "topic": "Statistics & Probability",
        "text": "The arithmetic mean of four laboratory measurements is 196. If three of the values are 191, 201, and 194, what is the fourth value?",
        "options": [
            "204",
            "190",
            "196",
            "198"
        ],
        "answer": 3,
        "explanation": "Total sum required = 4 × (196) = 784. Fourth value = 784 &minus; 586 = 198."
    },
    {
        "id": 95,
        "section": "math",
        "topic": "Coordinate Geometry",
        "text": "Which coordinate point lies on the line given by 3<i>x</i> + 2<i>y</i> = 455?",
        "options": [
            "(147, 7)",
            "(149, 7)",
            "(147, 11)",
            "(&minus;147, 7)"
        ],
        "answer": 0,
        "explanation": "3(147) + 2(7) = 441 + 14. The point (147, 7) satisfies the equation."
    },
    {
        "id": 96,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Winter Crossing\"\n\nAs the vessel navigated the treacherous ice floes of the Labrador Sea, Captain Sterling stood vigilant upon the bridge. The navigation logs recorded unseasonably severe blizzards, yet the crew remained steadfast, motivated by Sterling's unwavering composure. Every groan of the timber hull reminded them of the ocean's unforgiving nature. In his private cabin, Sterling reread letters from the Arctic expedition committee, mindful that their mission would redraw polar maritime charts for generations to come.",
        "text": "Based on Passage I (\"The Winter Crossing\"), the primary purpose of the text is to:",
        "options": [
            "criticize traditional approaches while advocating for immediate reform.",
            "provide a purely statistical timeline of historical events.",
            "argue that modern technological advancements have rendered past practices obsolete.",
            "examine the intricate relationship between the winter crossing and its broader significance."
        ],
        "answer": 3,
        "explanation": "Correct Answer: \"examine the intricate relationship between the winter crossing and its broader significance.\". The passage as a whole focuses on introducing and exploring the nuances and deeper meaning of \"The Winter Crossing\"."
    },
    {
        "id": 97,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Winter Crossing\"\n\nAs the vessel navigated the treacherous ice floes of the Labrador Sea, Captain Sterling stood vigilant upon the bridge. The navigation logs recorded unseasonably severe blizzards, yet the crew remained steadfast, motivated by Sterling's unwavering composure. Every groan of the timber hull reminded them of the ocean's unforgiving nature. In his private cabin, Sterling reread letters from the Arctic expedition committee, mindful that their mission would redraw polar maritime charts for generations to come.",
        "text": "According to the discussion in Passage I (\"The Winter Crossing\"), which of the following is explicitly emphasized about the subject?",
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
        "id": 98,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Winter Crossing\"\n\nAs the vessel navigated the treacherous ice floes of the Labrador Sea, Captain Sterling stood vigilant upon the bridge. The navigation logs recorded unseasonably severe blizzards, yet the crew remained steadfast, motivated by Sterling's unwavering composure. Every groan of the timber hull reminded them of the ocean's unforgiving nature. In his private cabin, Sterling reread letters from the Arctic expedition committee, mindful that their mission would redraw polar maritime charts for generations to come.",
        "text": "In the context of Passage I (\"The Winter Crossing\"), the author's descriptive tone is best characterized as:",
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
        "id": 99,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Winter Crossing\"\n\nAs the vessel navigated the treacherous ice floes of the Labrador Sea, Captain Sterling stood vigilant upon the bridge. The navigation logs recorded unseasonably severe blizzards, yet the crew remained steadfast, motivated by Sterling's unwavering composure. Every groan of the timber hull reminded them of the ocean's unforgiving nature. In his private cabin, Sterling reread letters from the Arctic expedition committee, mindful that their mission would redraw polar maritime charts for generations to come.",
        "text": "It can reasonably be inferred from the narrative presented in Passage I (\"The Winter Crossing\") that:",
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
        "id": 100,
        "section": "reading",
        "topic": "Rhetorical Skills",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Winter Crossing\"\n\nAs the vessel navigated the treacherous ice floes of the Labrador Sea, Captain Sterling stood vigilant upon the bridge. The navigation logs recorded unseasonably severe blizzards, yet the crew remained steadfast, motivated by Sterling's unwavering composure. Every groan of the timber hull reminded them of the ocean's unforgiving nature. In his private cabin, Sterling reread letters from the Arctic expedition committee, mindful that their mission would redraw polar maritime charts for generations to come.",
        "text": "The structural development of Passage I (\"The Winter Crossing\") serves primarily to:",
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
        "id": 101,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Winter Crossing\"\n\nAs the vessel navigated the treacherous ice floes of the Labrador Sea, Captain Sterling stood vigilant upon the bridge. The navigation logs recorded unseasonably severe blizzards, yet the crew remained steadfast, motivated by Sterling's unwavering composure. Every groan of the timber hull reminded them of the ocean's unforgiving nature. In his private cabin, Sterling reread letters from the Arctic expedition committee, mindful that their mission would redraw polar maritime charts for generations to come.",
        "text": "In Passage I (\"The Winter Crossing\"), the success or impact of the central endeavor is most directly attributed to:",
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
        "id": 102,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Winter Crossing\"\n\nAs the vessel navigated the treacherous ice floes of the Labrador Sea, Captain Sterling stood vigilant upon the bridge. The navigation logs recorded unseasonably severe blizzards, yet the crew remained steadfast, motivated by Sterling's unwavering composure. Every groan of the timber hull reminded them of the ocean's unforgiving nature. In his private cabin, Sterling reread letters from the Arctic expedition committee, mindful that their mission would redraw polar maritime charts for generations to come.",
        "text": "The author's perspective toward the evolution of Passage I (\"The Winter Crossing\") is best described as:",
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
        "id": 103,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Winter Crossing\"\n\nAs the vessel navigated the treacherous ice floes of the Labrador Sea, Captain Sterling stood vigilant upon the bridge. The navigation logs recorded unseasonably severe blizzards, yet the crew remained steadfast, motivated by Sterling's unwavering composure. Every groan of the timber hull reminded them of the ocean's unforgiving nature. In his private cabin, Sterling reread letters from the Arctic expedition committee, mindful that their mission would redraw polar maritime charts for generations to come.",
        "text": "The author of Passage I (\"The Winter Crossing\") suggests that viewing the subject merely as a routine process would:",
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
        "id": 104,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE I: LITERARY NARRATIVE\n\n\"The Winter Crossing\"\n\nAs the vessel navigated the treacherous ice floes of the Labrador Sea, Captain Sterling stood vigilant upon the bridge. The navigation logs recorded unseasonably severe blizzards, yet the crew remained steadfast, motivated by Sterling's unwavering composure. Every groan of the timber hull reminded them of the ocean's unforgiving nature. In his private cabin, Sterling reread letters from the Arctic expedition committee, mindful that their mission would redraw polar maritime charts for generations to come.",
        "text": "Which statement best expresses the overarching conclusion presented in Passage I (\"The Winter Crossing\")?",
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
        "id": 105,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Sociolinguistics in Digital Spaces\"\n\nDigital communication platforms have accelerated the emergence of novel linguistic phenomena, from compressed syntax to dynamic lexical blending. Far from degrading language standards, sociolinguists observe that online discourse exhibits intricate morphological innovation and pragmatic nuance tailored to rapid multimodal exchange.",
        "text": "Based on Passage II (\"Sociolinguistics in Digital Spaces\"), the primary purpose of the text is to:",
        "options": [
            "examine the intricate relationship between sociolinguistics in digital spaces and its broader significance.",
            "criticize traditional approaches while advocating for immediate reform.",
            "provide a purely statistical timeline of historical events.",
            "argue that modern technological advancements have rendered past practices obsolete."
        ],
        "answer": 0,
        "explanation": "Correct Answer: \"examine the intricate relationship between sociolinguistics in digital spaces and its broader significance.\". The passage as a whole focuses on introducing and exploring the nuances and deeper meaning of \"Sociolinguistics in Digital Spaces\"."
    },
    {
        "id": 106,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Sociolinguistics in Digital Spaces\"\n\nDigital communication platforms have accelerated the emergence of novel linguistic phenomena, from compressed syntax to dynamic lexical blending. Far from degrading language standards, sociolinguists observe that online discourse exhibits intricate morphological innovation and pragmatic nuance tailored to rapid multimodal exchange.",
        "text": "According to the discussion in Passage II (\"Sociolinguistics in Digital Spaces\"), which of the following is explicitly emphasized about the subject?",
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
        "id": 107,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Sociolinguistics in Digital Spaces\"\n\nDigital communication platforms have accelerated the emergence of novel linguistic phenomena, from compressed syntax to dynamic lexical blending. Far from degrading language standards, sociolinguists observe that online discourse exhibits intricate morphological innovation and pragmatic nuance tailored to rapid multimodal exchange.",
        "text": "In the context of Passage II (\"Sociolinguistics in Digital Spaces\"), the author's descriptive tone is best characterized as:",
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
        "id": 108,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Sociolinguistics in Digital Spaces\"\n\nDigital communication platforms have accelerated the emergence of novel linguistic phenomena, from compressed syntax to dynamic lexical blending. Far from degrading language standards, sociolinguists observe that online discourse exhibits intricate morphological innovation and pragmatic nuance tailored to rapid multimodal exchange.",
        "text": "It can reasonably be inferred from the narrative presented in Passage II (\"Sociolinguistics in Digital Spaces\") that:",
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
        "id": 109,
        "section": "reading",
        "topic": "Rhetorical Skills",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Sociolinguistics in Digital Spaces\"\n\nDigital communication platforms have accelerated the emergence of novel linguistic phenomena, from compressed syntax to dynamic lexical blending. Far from degrading language standards, sociolinguists observe that online discourse exhibits intricate morphological innovation and pragmatic nuance tailored to rapid multimodal exchange.",
        "text": "The structural development of Passage II (\"Sociolinguistics in Digital Spaces\") serves primarily to:",
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
        "id": 110,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Sociolinguistics in Digital Spaces\"\n\nDigital communication platforms have accelerated the emergence of novel linguistic phenomena, from compressed syntax to dynamic lexical blending. Far from degrading language standards, sociolinguists observe that online discourse exhibits intricate morphological innovation and pragmatic nuance tailored to rapid multimodal exchange.",
        "text": "In Passage II (\"Sociolinguistics in Digital Spaces\"), the success or impact of the central endeavor is most directly attributed to:",
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
        "id": 111,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Sociolinguistics in Digital Spaces\"\n\nDigital communication platforms have accelerated the emergence of novel linguistic phenomena, from compressed syntax to dynamic lexical blending. Far from degrading language standards, sociolinguists observe that online discourse exhibits intricate morphological innovation and pragmatic nuance tailored to rapid multimodal exchange.",
        "text": "The author's perspective toward the evolution of Passage II (\"Sociolinguistics in Digital Spaces\") is best described as:",
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
        "id": 112,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Sociolinguistics in Digital Spaces\"\n\nDigital communication platforms have accelerated the emergence of novel linguistic phenomena, from compressed syntax to dynamic lexical blending. Far from degrading language standards, sociolinguists observe that online discourse exhibits intricate morphological innovation and pragmatic nuance tailored to rapid multimodal exchange.",
        "text": "The author of Passage II (\"Sociolinguistics in Digital Spaces\") suggests that viewing the subject merely as a routine process would:",
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
        "id": 113,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE II: SOCIAL SCIENCE\n\n\"Sociolinguistics in Digital Spaces\"\n\nDigital communication platforms have accelerated the emergence of novel linguistic phenomena, from compressed syntax to dynamic lexical blending. Far from degrading language standards, sociolinguists observe that online discourse exhibits intricate morphological innovation and pragmatic nuance tailored to rapid multimodal exchange.",
        "text": "Which statement best expresses the overarching conclusion presented in Passage II (\"Sociolinguistics in Digital Spaces\")?",
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
        "id": 114,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE III: HUMANITIES\n\n\"The Golden Age of Classical Polyphony\"\n\nThe development of complex polyphony during the late Renaissance represented a pinnacle of musical counterpoint. Composers like Palestrina interwove independent melodic lines into a harmonious choral texture, balancing intricate voice-leading rules with spiritual intelligibility.",
        "text": "Based on Passage III (\"The Golden Age of Classical Polyphony\"), the primary purpose of the text is to:",
        "options": [
            "criticize traditional approaches while advocating for immediate reform.",
            "examine the intricate relationship between the golden age of classical polyphony and its broader significance.",
            "provide a purely statistical timeline of historical events.",
            "argue that modern technological advancements have rendered past practices obsolete."
        ],
        "answer": 1,
        "explanation": "Correct Answer: \"examine the intricate relationship between the golden age of classical polyphony and its broader significance.\". The passage as a whole focuses on introducing and exploring the nuances and deeper meaning of \"The Golden Age of Classical Polyphony\"."
    },
    {
        "id": 115,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE III: HUMANITIES\n\n\"The Golden Age of Classical Polyphony\"\n\nThe development of complex polyphony during the late Renaissance represented a pinnacle of musical counterpoint. Composers like Palestrina interwove independent melodic lines into a harmonious choral texture, balancing intricate voice-leading rules with spiritual intelligibility.",
        "text": "According to the discussion in Passage III (\"The Golden Age of Classical Polyphony\"), which of the following is explicitly emphasized about the subject?",
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
        "id": 116,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE III: HUMANITIES\n\n\"The Golden Age of Classical Polyphony\"\n\nThe development of complex polyphony during the late Renaissance represented a pinnacle of musical counterpoint. Composers like Palestrina interwove independent melodic lines into a harmonious choral texture, balancing intricate voice-leading rules with spiritual intelligibility.",
        "text": "In the context of Passage III (\"The Golden Age of Classical Polyphony\"), the author's descriptive tone is best characterized as:",
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
        "id": 117,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE III: HUMANITIES\n\n\"The Golden Age of Classical Polyphony\"\n\nThe development of complex polyphony during the late Renaissance represented a pinnacle of musical counterpoint. Composers like Palestrina interwove independent melodic lines into a harmonious choral texture, balancing intricate voice-leading rules with spiritual intelligibility.",
        "text": "It can reasonably be inferred from the narrative presented in Passage III (\"The Golden Age of Classical Polyphony\") that:",
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
        "id": 118,
        "section": "reading",
        "topic": "Rhetorical Skills",
        "passage": "PASSAGE III: HUMANITIES\n\n\"The Golden Age of Classical Polyphony\"\n\nThe development of complex polyphony during the late Renaissance represented a pinnacle of musical counterpoint. Composers like Palestrina interwove independent melodic lines into a harmonious choral texture, balancing intricate voice-leading rules with spiritual intelligibility.",
        "text": "The structural development of Passage III (\"The Golden Age of Classical Polyphony\") serves primarily to:",
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
        "id": 119,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE III: HUMANITIES\n\n\"The Golden Age of Classical Polyphony\"\n\nThe development of complex polyphony during the late Renaissance represented a pinnacle of musical counterpoint. Composers like Palestrina interwove independent melodic lines into a harmonious choral texture, balancing intricate voice-leading rules with spiritual intelligibility.",
        "text": "In Passage III (\"The Golden Age of Classical Polyphony\"), the success or impact of the central endeavor is most directly attributed to:",
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
        "id": 120,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE III: HUMANITIES\n\n\"The Golden Age of Classical Polyphony\"\n\nThe development of complex polyphony during the late Renaissance represented a pinnacle of musical counterpoint. Composers like Palestrina interwove independent melodic lines into a harmonious choral texture, balancing intricate voice-leading rules with spiritual intelligibility.",
        "text": "The author's perspective toward the evolution of Passage III (\"The Golden Age of Classical Polyphony\") is best described as:",
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
        "id": 121,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE III: HUMANITIES\n\n\"The Golden Age of Classical Polyphony\"\n\nThe development of complex polyphony during the late Renaissance represented a pinnacle of musical counterpoint. Composers like Palestrina interwove independent melodic lines into a harmonious choral texture, balancing intricate voice-leading rules with spiritual intelligibility.",
        "text": "The author of Passage III (\"The Golden Age of Classical Polyphony\") suggests that viewing the subject merely as a routine process would:",
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
        "id": 122,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE III: HUMANITIES\n\n\"The Golden Age of Classical Polyphony\"\n\nThe development of complex polyphony during the late Renaissance represented a pinnacle of musical counterpoint. Composers like Palestrina interwove independent melodic lines into a harmonious choral texture, balancing intricate voice-leading rules with spiritual intelligibility.",
        "text": "Which statement best expresses the overarching conclusion presented in Passage III (\"The Golden Age of Classical Polyphony\")?",
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
        "id": 123,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Exoplanet Atmospheric Spectroscopy\"\n\nAstronomers analyze atmospheric compositions of distant exoplanets through transit transmission spectroscopy. As a planet passes in front of its host star, chemical elements in its atmosphere absorb specific wavelengths of starlight, leaving distinct spectral fingerprints that reveal water vapor, methane, and carbon dioxide.",
        "text": "Based on Passage IV (\"Exoplanet Atmospheric Spectroscopy\"), the primary purpose of the text is to:",
        "options": [
            "criticize traditional approaches while advocating for immediate reform.",
            "provide a purely statistical timeline of historical events.",
            "examine the intricate relationship between exoplanet atmospheric spectroscopy and its broader significance.",
            "argue that modern technological advancements have rendered past practices obsolete."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"examine the intricate relationship between exoplanet atmospheric spectroscopy and its broader significance.\". The passage as a whole focuses on introducing and exploring the nuances and deeper meaning of \"Exoplanet Atmospheric Spectroscopy\"."
    },
    {
        "id": 124,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Exoplanet Atmospheric Spectroscopy\"\n\nAstronomers analyze atmospheric compositions of distant exoplanets through transit transmission spectroscopy. As a planet passes in front of its host star, chemical elements in its atmosphere absorb specific wavelengths of starlight, leaving distinct spectral fingerprints that reveal water vapor, methane, and carbon dioxide.",
        "text": "According to the discussion in Passage IV (\"Exoplanet Atmospheric Spectroscopy\"), which of the following is explicitly emphasized about the subject?",
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
        "id": 125,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Exoplanet Atmospheric Spectroscopy\"\n\nAstronomers analyze atmospheric compositions of distant exoplanets through transit transmission spectroscopy. As a planet passes in front of its host star, chemical elements in its atmosphere absorb specific wavelengths of starlight, leaving distinct spectral fingerprints that reveal water vapor, methane, and carbon dioxide.",
        "text": "In the context of Passage IV (\"Exoplanet Atmospheric Spectroscopy\"), the author's descriptive tone is best characterized as:",
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
        "id": 126,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Exoplanet Atmospheric Spectroscopy\"\n\nAstronomers analyze atmospheric compositions of distant exoplanets through transit transmission spectroscopy. As a planet passes in front of its host star, chemical elements in its atmosphere absorb specific wavelengths of starlight, leaving distinct spectral fingerprints that reveal water vapor, methane, and carbon dioxide.",
        "text": "It can reasonably be inferred from the narrative presented in Passage IV (\"Exoplanet Atmospheric Spectroscopy\") that:",
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
        "id": 127,
        "section": "reading",
        "topic": "Rhetorical Skills",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Exoplanet Atmospheric Spectroscopy\"\n\nAstronomers analyze atmospheric compositions of distant exoplanets through transit transmission spectroscopy. As a planet passes in front of its host star, chemical elements in its atmosphere absorb specific wavelengths of starlight, leaving distinct spectral fingerprints that reveal water vapor, methane, and carbon dioxide.",
        "text": "The structural development of Passage IV (\"Exoplanet Atmospheric Spectroscopy\") serves primarily to:",
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
        "id": 128,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Exoplanet Atmospheric Spectroscopy\"\n\nAstronomers analyze atmospheric compositions of distant exoplanets through transit transmission spectroscopy. As a planet passes in front of its host star, chemical elements in its atmosphere absorb specific wavelengths of starlight, leaving distinct spectral fingerprints that reveal water vapor, methane, and carbon dioxide.",
        "text": "In Passage IV (\"Exoplanet Atmospheric Spectroscopy\"), the success or impact of the central endeavor is most directly attributed to:",
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
        "id": 129,
        "section": "reading",
        "topic": "Style & Tone",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Exoplanet Atmospheric Spectroscopy\"\n\nAstronomers analyze atmospheric compositions of distant exoplanets through transit transmission spectroscopy. As a planet passes in front of its host star, chemical elements in its atmosphere absorb specific wavelengths of starlight, leaving distinct spectral fingerprints that reveal water vapor, methane, and carbon dioxide.",
        "text": "The author's perspective toward the evolution of Passage IV (\"Exoplanet Atmospheric Spectroscopy\") is best described as:",
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
        "id": 130,
        "section": "reading",
        "topic": "Inference",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Exoplanet Atmospheric Spectroscopy\"\n\nAstronomers analyze atmospheric compositions of distant exoplanets through transit transmission spectroscopy. As a planet passes in front of its host star, chemical elements in its atmosphere absorb specific wavelengths of starlight, leaving distinct spectral fingerprints that reveal water vapor, methane, and carbon dioxide.",
        "text": "The author of Passage IV (\"Exoplanet Atmospheric Spectroscopy\") suggests that viewing the subject merely as a routine process would:",
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
        "id": 131,
        "section": "reading",
        "topic": "Main Idea",
        "passage": "PASSAGE IV: NATURAL SCIENCE\n\n\"Exoplanet Atmospheric Spectroscopy\"\n\nAstronomers analyze atmospheric compositions of distant exoplanets through transit transmission spectroscopy. As a planet passes in front of its host star, chemical elements in its atmosphere absorb specific wavelengths of starlight, leaving distinct spectral fingerprints that reveal water vapor, methane, and carbon dioxide.",
        "text": "Which statement best expresses the overarching conclusion presented in Passage IV (\"Exoplanet Atmospheric Spectroscopy\")?",
        "options": [
            "Technological disruption inevitably erodes the value of all historical traditions.",
            "Individual achievement is entirely dependent on institutional patronage.",
            "True mastery and understanding arise from honoring fundamental principles while engaging deeply with the work.",
            "Theoretical models are vastly superior to empirical practice in every domain."
        ],
        "answer": 2,
        "explanation": "Correct Answer: \"True mastery and understanding arise from honoring fundamental principles while engaging deeply with the work.\". The concluding lines reflect on the broader significance of dedicated stewardship and deep comprehension."
    }
];

if (typeof window !== 'undefined') {
    window.ACT_QUESTIONS1 = ACT_QUESTIONS1;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ACT_QUESTIONS1;
}

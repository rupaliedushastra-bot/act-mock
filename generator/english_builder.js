// generator/english_builder.js
// Generates 50 completely unique ACT English questions per test (Q1-Q50)

function generateEnglishQuestions(testIndex) {
    const questions = [];
    const seed = testIndex * 31 + 17;

    const testThemes = [
        { name: "Dr. Aris Thorne", field: "marine astrophysics", obj: "deep-sea hydrothermal emission", loc: "the Mariana Trench", tool: "submersible optical probe", team: "Mariana Research Division" },
        { name: "Elena Rostova", field: "paleobotany", obj: "fossilized fern spores", loc: "the Siberian tundra", tool: "polarized digital microscope", team: "Siberian Botanical Survey" },
        { name: "Marcus Vance", field: "urban micro-architecture", obj: "modular timber dwellings", loc: "Copenhagen", tool: "thermal imaging scanner", team: "Nordic Design Institute" },
        { name: "Dr. Chloe Lin", field: "computational linguistics", obj: "ancient phonetic scripts", loc: "Oxford", tool: "neural decipherment algorithm", team: "Linguistic Heritage Consortium" },
        { name: "Captain Sterling", field: "polar oceanography", obj: "sub-ice volcanic vents", loc: "the Weddell Sea", tool: "acoustic echo sounder", team: "Antarctic Maritime Crew" },
        { name: "Nadia Farouk", field: "materials science", obj: "graphene aerogel filters", loc: "Munich", tool: "spectroscopic mass analyzer", team: "Bavarian Materials Lab" },
        { name: "Julian Becker", field: "classical restoration", obj: "Renaissance tempera panels", loc: "Florence", tool: "infrared reflectography sensor", team: "Florentine Guild" },
        { name: "Dr. Maya Patel", field: "epigenetic genomics", obj: "cellular methylation switches", loc: "Boston", tool: "fluorescence gene sequencer", team: "Genomic Medicine Group" },
        { name: "Samuel O'Connor", field: "acoustic engineering", obj: "resonant amphitheater arches", loc: "Athens", tool: "laser doppler vibrometer", team: "Hellenic Acoustic Society" },
        { name: "Valeria Gomez", field: "volcanology", obj: "pyroclastic basalt deposits", loc: "the Andes", tool: "infrasonic gas spectrometer", team: "Andean Geophysical Survey" },
        { name: "Dr. Henrik Lind", field: "quantum cryptography", obj: "entangled photon relays", loc: "Stockholm", tool: "interferometric detector", team: "Stockholm Quantum Cluster" },
        { name: "Amina Al-Mansoor", field: "desert hydrology", obj: "ancient subterranean qanats", loc: "Oman", tool: "ground-penetrating radar", team: "Arabian Hydro-Heritage Team" },
        { name: "Thomas Wright", field: "historical cartography", obj: "sixteenth-century portolan charts", loc: "Lisbon", tool: "multispectral archival camera", team: "Lusitanian Archive Unit" },
        { name: "Dr. Simone Dubois", field: "mycology", obj: "subterranean fungal communication", loc: "the Black Forest", tool: "micro-electrode array", team: "Black Forest Ecology Network" }
    ];

    const ctx = testThemes[(testIndex - 2) % testThemes.length];

    const itemBuilders = [
        // 1: Non-essential relative clauses
        () => ({
            topic: "Punctuation",
            text: `The research team led by ${ctx.name}, who had spent five weeks analyzing ${ctx.obj} in ${ctx.loc} finally published their findings in a leading scientific journal.\n\nWhich of the following best corrects the punctuation in the sentence above?`,
            ans: `The research team led by ${ctx.name}, who had spent five weeks analyzing ${ctx.obj} in ${ctx.loc}, finally published their findings in a leading scientific journal.`,
            dist: [
                `The research team led by ${ctx.name} who had spent five weeks analyzing ${ctx.obj} in ${ctx.loc}, finally published their findings in a leading scientific journal.`,
                `The research team led by ${ctx.name}, who had spent five weeks analyzing ${ctx.obj} in ${ctx.loc} finally, published their findings in a leading scientific journal.`,
                `The research team led by ${ctx.name} who had spent five weeks analyzing ${ctx.obj}, in ${ctx.loc} finally published their findings in a leading scientific journal.`
            ],
            exp: `The non-essential relative clause beginning with 'who had spent five weeks...' must be set off by paired commas.`
        }),
        // 2: Subject-verb agreement with neither/nor
        () => ({
            topic: "Grammar & Usage",
            text: `Neither ${ctx.name} nor the ${ctx.team} technicians was able to calibrate the ${ctx.tool} before the expedition began.\n\nWhich correction should be made to the underlined verb?`,
            ans: `were able to calibrate`,
            dist: [`is able to calibrate`, `was being able to calibrate`, `No change needed`],
            exp: `With 'neither... nor', the verb agrees with the closer subject ('technicians', plural), requiring 'were'.`
        }),
        // 3: Dangling participial modifier
        () => ({
            topic: "Sentence Structure",
            text: `Examining the delicate structure of ${ctx.obj} through the ${ctx.tool}, the anomalous readings became immediately apparent to ${ctx.name}.\n\nWhich revision best corrects the dangling modifier in the sentence?`,
            ans: `Examining the delicate structure of ${ctx.obj} through the ${ctx.tool}, ${ctx.name} immediately noticed the anomalous readings.`,
            dist: [
                `Through the ${ctx.tool}, examining the delicate structure of ${ctx.obj}, the anomalous readings became immediately apparent.`,
                `The anomalous readings became immediately apparent, examining the delicate structure of ${ctx.obj} through the ${ctx.tool}.`,
                `${ctx.name}, examining the delicate structure of ${ctx.obj} through the ${ctx.tool}, the anomalous readings became apparent.`
            ],
            exp: `The introductory participial phrase must modify the person performing the action (${ctx.name}), not 'the readings'.`
        }),
        // 4: Formal register vs colloquial slang
        () => ({
            topic: "Style & Tone",
            text: `The initial hypothesis regarding ${ctx.obj} formulated by ${ctx.name} was completely disproven by the latest measurements from ${ctx.loc}.\n\nWhich alternative to the underlined portion would be LEAST acceptable in maintaining a formal academic tone?`,
            ans: `totally shot down`,
            dist: [`thoroughly refuted`, `proven inaccurate`, `rendered untenable`],
            exp: `'Totally shot down' is colloquial slang and undermines the formal register of an academic publication.`
        }),
        // 5: Contrastive transition
        () => ({
            topic: "Transitions",
            text: `The ${ctx.team} faced severe logistical obstacles in ${ctx.loc}. [5], the researchers successfully deployed the ${ctx.tool} on schedule.\n\nWhich transition word or phrase best connects these two sentences?`,
            ans: `Nevertheless`,
            dist: [`Consequently`, `Furthermore`, `Similarly`],
            exp: `'Nevertheless' correctly signals a contrast between the severe obstacles and the successful deployment.`
        }),
        // 6: Concluding sentence for rhetorical purpose
        () => ({
            topic: "Rhetorical Skills",
            text: `The author wants to conclude a paragraph by highlighting the broader technological impact of ${ctx.field} pioneered by ${ctx.name}. Which choice best accomplishes this goal?`,
            ans: `By translating these observations into synthetic prototypes, industrial engineers can manufacture more resilient commercial materials.`,
            dist: [
                `${ctx.name} has presented these findings at several international academic symposia.`,
                `Securing institutional grant funding remains an essential step for laboratory expansion.`,
                `Field research in remote environments requires careful logistical planning.`
            ],
            exp: `This option directly connects the specialized scientific findings to broader commercial and industrial applications.`
        }),
        // 7: Eliminating pleonasm
        () => ({
            topic: "Wordiness & Redundancy",
            text: `The final report presented by ${ctx.name} contained a concise summary that was brief and to the point regarding ${ctx.obj} in ${ctx.loc}.\n\nWhich revision best eliminates the redundancy in the sentence?`,
            ans: `The final report presented by ${ctx.name} contained a concise summary of ${ctx.obj} in ${ctx.loc}.`,
            dist: [
                `The final report presented a concise summary that was brief and short of ${ctx.obj}.`,
                `The final report presented a brief summary concise and to the point of ${ctx.obj}.`,
                `The final report presented a summary that was concise, brief, and to the point.`
            ],
            exp: `'Concise summary' inherently means brief and to the point; adding extra qualifiers creates unnecessary redundancy.`
        }),
        // 8: Semicolon joining independent clauses
        () => ({
            topic: "Punctuation",
            text: `The ${ctx.tool} recorded unprecedented fluctuations in ${ctx.loc} the analytical software processed the telemetry in real time.\n\nWhich choice provides the correct punctuation between the two independent clauses?`,
            ans: `${ctx.loc}; the analytical`,
            dist: [`${ctx.loc}, the analytical`, `${ctx.loc} the analytical`, `${ctx.loc}: and the analytical`],
            exp: `Two independent clauses without a coordinating conjunction must be separated by a semicolon.`
        }),
        // 9: Pronoun case (who vs whom)
        () => ({
            topic: "Grammar & Usage",
            text: `${ctx.name} consulted with three international specialists from ${ctx.loc}, all of [9] had extensive experience in ${ctx.field}.\n\nWhich pronoun correctly completes the sentence?`,
            ans: `whom`,
            dist: [`who`, `which`, `that`],
            exp: `'Whom' is the objective case pronoun required as the object of the preposition 'of'.`
        }),
        // 10: Comma splice revision
        () => ({
            topic: "Sentence Structure",
            text: `The temperature dropped rapidly after dusk in ${ctx.loc}, the ${ctx.team} had to calibrate the heating elements on the ${ctx.tool}.\n\nWhich choice best corrects the comma splice?`,
            ans: `The temperature dropped rapidly after dusk in ${ctx.loc}, so the ${ctx.team} had to calibrate the heating elements on the ${ctx.tool}.`,
            dist: [
                `The temperature dropped rapidly after dusk in ${ctx.loc} the team had to calibrate the heating elements.`,
                `Dropping rapidly after dusk the temperature in ${ctx.loc}, the team calibrated the heating elements.`,
                `The temperature dropped rapidly after dusk in ${ctx.loc}, and so therefore the team calibrated the heating elements.`
            ],
            exp: `A comma splice between two independent clauses is correctly repaired using a comma and coordinating conjunction ('so').`
        }),
        // 11: Vague colloquialism
        () => ({
            topic: "Style & Tone",
            text: `During the survey in ${ctx.loc}, ${ctx.name} collected a bunch of data points on ${ctx.obj}.\n\nWhich choice replaces the underlined phrase with the most precise and formal academic phrasing?`,
            ans: `a substantial dataset of`,
            dist: [`a whole lot of`, `tons of`, `a massive heap of`],
            exp: `'A substantial dataset of' conveys academic precision, avoiding vague or informal colloquialisms.`
        }),
        // 12: Cause-and-effect transition
        () => ({
            topic: "Transitions",
            text: `The filtration membrane on the ${ctx.tool} clogged due to fine sediment in ${ctx.loc}. [12], the automated safety valve halted fluid intake immediately.\n\nWhich transition word best signals the logical relationship?`,
            ans: `Consequently`,
            dist: [`Conversely`, `Nonetheless`, `In contrast`],
            exp: `'Consequently' correctly indicates that the safety valve action was a direct result of the clogged membrane.`
        }),
        // 13: Logical sentence placement
        () => ({
            topic: "Rhetorical Skills",
            text: `For the sake of logical flow in ${ctx.name}'s research log, where should a sentence describing the initial site preparation in ${ctx.loc} be placed?`,
            ans: `At the beginning of the paragraph, before the discussion of data collection.`,
            dist: [
                `At the very end of the essay after the conclusion.`,
                `Between the analysis of results and the final summary.`,
                `Nowhere, because site preparation is irrelevant to scientific research.`
            ],
            exp: `Chronological logic requires site preparation to precede the collection and analysis of data.`
        }),
        // 14: Synonym redundancy
        () => ({
            topic: "Wordiness & Redundancy",
            text: `${ctx.name} observed an unusual phenomenon that was rare and out of the ordinary while tracking ${ctx.obj} in ${ctx.loc}.\n\nWhich choice is most concise without losing essential meaning?`,
            ans: `an unusual phenomenon in ${ctx.loc}.`,
            dist: [
                `an unusual phenomenon that was rare in ${ctx.loc}.`,
                `a rare phenomenon out of the ordinary in ${ctx.loc}.`,
                `an unusual, rare, and out of the ordinary phenomenon in ${ctx.loc}.`
            ],
            exp: `'An unusual phenomenon' fully captures the meaning without repetitive synonyms like 'rare' and 'out of the ordinary'.`
        }),
        // 15: Possessive apostrophe
        () => ({
            topic: "Punctuation",
            text: `The three [15] collective recommendations on ${ctx.field} were compiled into the final project charter by ${ctx.name}.\n\nWhich choice correctly indicates plural possession?`,
            ans: `institutions'`,
            dist: [`institution's`, `institutions`, `institutions's`],
            exp: `Plural nouns ending in 's' form the possessive by adding an apostrophe after the 's' ('institutions'').`
        }),
        // 16: Verb tense consistency
        () => ({
            topic: "Grammar & Usage",
            text: `When the telemetry gauge fluctuated in ${ctx.loc}, ${ctx.name} quickly [16] the auxiliary power switch on the ${ctx.tool}.\n\nWhich verb form maintains proper past tense consistency?`,
            ans: `activated`,
            dist: [`activates`, `has activated`, `will activate`],
            exp: `The past tense verb 'fluctuated' requires the parallel past tense 'activated' for narrative consistency.`
        }),
        // 17: Parallel structure in series
        () => ({
            topic: "Sentence Structure",
            text: `The protocol in ${ctx.loc} required ${ctx.name} to inspect the valves, [17], and document all telemetry in the official log.\n\nWhich choice maintains parallel grammatical structure?`,
            ans: `clean the optical sensors`,
            dist: [`cleaning the optical sensors`, `to have cleaned the optical sensors`, `the optical sensors were cleaned`],
            exp: `The infinitive structure 'to inspect..., [clean]..., and [document]...' requires base verb forms in parallel.`
        }),
        // 18: Precise verb choice
        () => ({
            topic: "Style & Tone",
            text: `The new spectral analysis conducted in ${ctx.loc} [18] the presence of rare mineral compounds within ${ctx.obj}.\n\nWhich choice offers the most precise and descriptive vocabulary?`,
            ans: `substantiated`,
            dist: [`showed up`, `made clearish`, `pointed at`],
            exp: `'Substantiated' is formal, accurate, and scientifically appropriate.`
        }),
        // 19: Additive transition
        () => ({
            topic: "Transitions",
            text: `The ${ctx.tool} mapped the core structure of ${ctx.obj} in ${ctx.loc}. [19], it recorded ambient temperature and salinity gradients simultaneously.\n\nWhich transition word best adds supporting information?`,
            ans: `Furthermore`,
            dist: [`On the other hand`, `In spite of this`, `Instead`],
            exp: `'Furthermore' signals the addition of supplementary data collected by the instrument.`
        }),
        // 20: Introductory sentence evaluation
        () => ({
            topic: "Rhetorical Skills",
            text: `Which introductory sentence best establishes the central focus of a passage detailing ${ctx.name}'s breakthrough in ${ctx.field} across ${ctx.loc}?`,
            ans: `Recent advances in ${ctx.field} have been accelerated by groundbreaking field methodologies pioneered by ${ctx.name}.`,
            dist: [
                `Many people enjoy reading about scientific discoveries during their leisure time.`,
                `${ctx.loc} has a diverse geographical profile characterized by variable weather.`,
                `Laboratory equipment is often manufactured by specialized technical firms.`
            ],
            exp: `This sentence clearly introduces both the scientific discipline and the central role of the primary researcher.`
        }),
        // 21: Streamlining prepositions
        () => ({
            topic: "Wordiness & Redundancy",
            text: `${ctx.name} made adjustments to the ${ctx.tool} in ${ctx.loc} [21] adverse atmospheric pressure.\n\nWhich choice is the most concise replacement for 'on account of the fact that there was'?`,
            ans: `because of`,
            dist: [`on account of the fact that there was`, `due to the circumstance where there was`, `owing to the presence of the reality of`],
            exp: `'Because of' is the most direct and economical way to express causation.`
        }),
        // 22: Colon introducing explanation
        () => ({
            topic: "Punctuation",
            text: `The survey of ${ctx.obj} in ${ctx.loc} yielded three critical artifacts [22] a brass sextant, an annotated navigational log, and a hand-drawn portolan chart.\n\nWhich punctuation mark correctly introduces the list following an independent clause?`,
            ans: `artifacts:`,
            dist: [`artifacts;`, `artifacts,`, `artifacts`],
            exp: `A colon is used after an independent clause to introduce an elaborating list or explanation.`
        }),
        // 23: Indefinite pronouns with singular verbs
        () => ({
            topic: "Grammar & Usage",
            text: `Each of the experimental samples collected by ${ctx.name} from ${ctx.loc} [23] cataloged in the ${ctx.team} database.\n\nWhich verb correctly completes the sentence?`,
            ans: `is`,
            dist: [`are`, `were`, `have been`],
            exp: `'Each' is a singular indefinite pronoun and requires the singular verb 'is'.`
        }),
        // 24: Fixing fragments
        () => ({
            topic: "Sentence Structure",
            text: `Because the physical conditions surrounding ${ctx.obj} in ${ctx.loc} were more severe than anticipated. The ${ctx.tool} drifted off its planned trajectory.\n\nWhich revision eliminates the sentence fragment?`,
            ans: `Because the physical conditions surrounding ${ctx.obj} in ${ctx.loc} were more severe than anticipated, the ${ctx.tool} drifted off its planned trajectory.`,
            dist: [
                `Because the physical conditions surrounding ${ctx.obj} in ${ctx.loc} were more severe than anticipated; the ${ctx.tool} drifted off its planned trajectory.`,
                `Being that conditions were more severe than anticipated. The ${ctx.tool} drifted.`,
                `The conditions being severe in ${ctx.loc}. Causing the ${ctx.tool} to drift.`
            ],
            exp: `Attaching the dependent clause ('Because the conditions...') to the independent clause resolves the fragment.`
        }),
        // 25: Idiomatic preposition
        () => ({
            topic: "Style & Tone",
            text: `All researchers assisting ${ctx.name} in ${ctx.loc} must strictly adhere [25] established safety regulations.\n\nWhich preposition completes the standard English idiom?`,
            ans: `to`,
            dist: [`with`, `at`, `on`],
            exp: `The verb 'adhere' idiomatically pairs with the preposition 'to'.`
        }),
        // 26: Exemplification transition
        () => ({
            topic: "Transitions",
            text: `The ${ctx.team} documented several endemic specimens in ${ctx.loc}. [26], they identified a unique manifestation of ${ctx.obj} never before recorded.\n\nWhich transition best introduces a specific example?`,
            ans: `For instance`,
            dist: [`In summary`, `Nevertheless`, `Otherwise`],
            exp: `'For instance' correctly introduces a concrete example of the endemic specimens mentioned.`
        }),
        // 27: Evaluating statistical evidence
        () => ({
            topic: "Rhetorical Skills",
            text: `If ${ctx.name} were to include a quantitative chart comparing measurements of ${ctx.obj} across ${ctx.loc}, the primary rhetorical function would be to:`,
            ans: `provide empirical validation for the chemical trends described in the narrative.`,
            dist: [
                `distract the reader from ambiguities in the experimental methodology.`,
                `prove that no further scientific investigation is necessary.`,
                `replace the qualitative descriptions with purely numeric indices.`
            ],
            exp: `Quantitative data serves to substantiate and empirically validate the qualitative observations.`
        }),
        // 28: Circular definitions
        () => ({
            topic: "Wordiness & Redundancy",
            text: `The autonomous ${ctx.tool} deployed in ${ctx.loc} operates independently without human guidance on its own.\n\nWhich choice best eliminates repetitive phrasing?`,
            ans: `The autonomous ${ctx.tool} operates without human guidance.`,
            dist: [
                `The autonomous ${ctx.tool} operates independently on its own without human guidance.`,
                `Operating independently, the autonomous ${ctx.tool} guides itself on its own.`,
                `The ${ctx.tool} operates autonomously, independently, and on its own.`
            ],
            exp: `'Operates without human guidance' directly explains the function without repeating 'autonomously', 'independently', and 'on its own'.`
        }),
        // 29: Parenthetical dashes
        () => ({
            topic: "Punctuation",
            text: `The field specimen of ${ctx.obj}—fragile from centuries of isolation in ${ctx.loc} [29] was stabilized by ${ctx.name}.\n\nWhich punctuation mark correctly closes the parenthetical insertion?`,
            ans: `isolation in ${ctx.loc}—`,
            dist: [`isolation in ${ctx.loc},`, `isolation in ${ctx.loc};`, `isolation in ${ctx.loc}`],
            exp: `A parenthetical interruption opened with an em-dash must be closed with an em-dash.`
        }),
        // 30: Comparative vs Superlative
        () => ({
            topic: "Grammar & Usage",
            text: `Between the two calibration methods tested by ${ctx.name} in ${ctx.loc}, the second protocol demonstrated [30] analytical accuracy.\n\nWhich modifier form is grammatically correct?`,
            ans: `greater`,
            dist: [`greatest`, `most greatest`, `more greater`],
            exp: `When comparing exactly two items, the comparative form ('greater') is required, not the superlative ('greatest').`
        }),
        // 31: Misplaced modifier (only)
        () => ({
            topic: "Sentence Structure",
            text: `In ${ctx.loc}, ${ctx.name} only analyzed the data points gathered by the ${ctx.tool}.\n\nWhich placement of 'only' makes it clear that no other data points were analyzed?`,
            ans: `In ${ctx.loc}, ${ctx.name} analyzed only the data points gathered by the ${ctx.tool}.`,
            dist: [
                `In ${ctx.loc}, only ${ctx.name} analyzed the data points gathered by the ${ctx.tool}.`,
                `In ${ctx.loc}, ${ctx.name} analyzed the data points only gathered by the ${ctx.tool}.`,
                `In ${ctx.loc}, ${ctx.name} analyzed the data points that only were gathered by the ${ctx.tool}.`
            ],
            exp: `Placing 'only' immediately before 'the data points' unambiguously restricts the action to those specific data points.`
        }),
        // 32: Avoiding archaic phrasing
        () => ({
            topic: "Style & Tone",
            text: `The ${ctx.team} specialists in ${ctx.loc} [32] to verify the structural integrity of the ${ctx.tool}.\n\nWhich choice is best suited to contemporary professional writing?`,
            ans: `endeavored`,
            dist: [`did strive mightily`, `went forth`, `soughteth`],
            exp: `'Endeavored' is professional and contemporary, avoiding archaic theatrical language.`
        }),
        // 33: Concession transition
        () => ({
            topic: "Transitions",
            text: `[33] the initial sensor calibrations in ${ctx.loc} were delayed by inclement conditions, ${ctx.name}'s primary research objectives were fully met.\n\nWhich subordinating conjunction best indicates concession?`,
            ans: `Although`,
            dist: [`Because`, `Since`, `Unless`],
            exp: `'Although' introduces a concession clause, acknowledging the delay while highlighting overall success.`
        }),
        // 34: Deleting redundant introductory clauses
        () => ({
            topic: "Rhetorical Skills",
            text: `Consider the phrase in ${ctx.name}'s summary: 'It is interesting and worth noting that ${ctx.obj} reacts dynamically to seasonal shifts in ${ctx.loc}.'\n\nWhich revision most effectively improves directness?`,
            ans: `${ctx.obj} reacts dynamically to seasonal shifts in ${ctx.loc}.`,
            dist: [
                `As a matter of interesting fact, ${ctx.obj} reacts dynamically to seasonal shifts in ${ctx.loc}.`,
                `Worth noting is the reality that ${ctx.obj} reacts dynamically in ${ctx.loc}.`,
                `It goes without saying that ${ctx.obj} reacts dynamically in ${ctx.loc}.`
            ],
            exp: `Deleting unnecessary throat-clearing phrases ('It is worth noting that...') makes the statement direct and authoritative.`
        }),
        // 35: Nominalization reduction
        () => ({
            topic: "Wordiness & Redundancy",
            text: `The ${ctx.team} decided to make an assessment of the safety protocols governing ${ctx.loc}.\n\nWhich revision is the most concise and forceful?`,
            ans: `The ${ctx.team} decided to assess the safety protocols governing ${ctx.loc}.`,
            dist: [
                `The ${ctx.team} decided to perform an assessment on the safety protocols in ${ctx.loc}.`,
                `The ${ctx.team} decided to conduct a process of assessment of safety in ${ctx.loc}.`,
                `The ${ctx.team} decided to carry out the making of an assessment for ${ctx.loc}.`
            ],
            exp: `Replacing the nominalized phrase 'make an assessment of' with the active verb 'assess' enhances clarity.`
        }),
        // 36: Coordinate adjectives
        () => ({
            topic: "Punctuation",
            text: `${ctx.name} discovered a dense [36] intricate network of crystalline features surrounding ${ctx.obj} in ${ctx.loc}.\n\nWhich choice correctly punctuates coordinate adjectives?`,
            ans: `dense,`,
            dist: [`dense;`, `dense`, `dense and,`],
            exp: `Coordinate adjectives ('dense' and 'intricate') modifying the same noun should be separated by a comma.`
        }),
        // 37: Subjunctive mood
        () => ({
            topic: "Grammar & Usage",
            text: `If the ${ctx.tool} [37] capable of operating in ${ctx.loc} indefinitely, ${ctx.name} could record longitudinal data continuously.\n\nWhich verb form correctly expresses this hypothetical condition?`,
            ans: `were`,
            dist: [`was`, `is`, `will be`],
            exp: `In contrary-to-fact conditional statements (subjunctive mood), 'were' is used regardless of the subject's number.`
        }),
        // 38: Correlative conjunctions
        () => ({
            topic: "Sentence Structure",
            text: `The ${ctx.team} not only documented novel properties of ${ctx.obj} [38] expanded geophysical mapping across ${ctx.loc}.\n\nWhich phrase correctly completes the correlative pair?`,
            ans: `but also`,
            dist: [`and also`, `as well as`, `in addition to`],
            exp: `'Not only' must be paired with 'but also' for grammatical parallelism.`
        }),
        // 39: Active voice directness
        () => ({
            topic: "Style & Tone",
            text: `A comprehensive geological survey of ${ctx.loc} was conducted by ${ctx.name} and the ${ctx.team}.\n\nWhich revision converts the sentence into direct active voice?`,
            ans: `${ctx.name} and the ${ctx.team} conducted a comprehensive geological survey of ${ctx.loc}.`,
            dist: [
                `Conducted by ${ctx.name} and the ${ctx.team} was a comprehensive geological survey of ${ctx.loc}.`,
                `A comprehensive survey of ${ctx.loc} had its conduction by ${ctx.name}.`,
                `There was a comprehensive geological survey of ${ctx.loc} conducted by the team.`
            ],
            exp: `Active voice places the actors first, improving clarity and grammatical vigor.`
        }),
        // 40: Sequential transition
        () => ({
            topic: "Transitions",
            text: `${ctx.name} mapped the outer perimeter of ${ctx.loc}. [40], the team deployed the ${ctx.tool} into the central core.\n\nWhich transition best conveys sequential progression?`,
            ans: `Subsequently`,
            dist: [`Simultaneously`, `Previously`, `Nevertheless`],
            exp: `'Subsequently' indicates that the central deployment occurred after the perimeter mapping was complete.`
        }),
        // 41: Supporting detail selection
        () => ({
            topic: "Rhetorical Skills",
            text: `Which choice provides the most relevant detail to support ${ctx.name}'s claim that ${ctx.obj} represents an extreme biological habitat in ${ctx.loc}?`,
            ans: `Ambient temperatures at ${ctx.loc} reach critical extremes under pressures 150 times greater than baseline standard atmosphere.`,
            dist: [
                `The research vessel is equipped with comfortable crew cabins and a modern navigation deck.`,
                `${ctx.name} studied chemistry before specializing in ${ctx.field}.`,
                `Many scientific expeditions are documented in popular non-fiction periodicals.`
            ],
            exp: `Extreme physical measurements directly substantiate the claim of an extreme biological habitat.`
        }),
        // 42: Deleting filler phrases
        () => ({
            topic: "Wordiness & Redundancy",
            text: `In the event that the primary sensor on the ${ctx.tool} fails in ${ctx.loc}, the emergency beacon will engage.\n\nWhich word is the most concise replacement for 'In the event that'?`,
            ans: `If`,
            dist: [`In the circumstance where`, `Given the factual condition that`, `Under the contingency wherein`],
            exp: `'If' is the standard, concise equivalent of 'In the event that'.`
        }),
        // 43: Direct quotations and commas
        () => ({
            topic: "Punctuation",
            text: `${ctx.name} announced to the ${ctx.team} [43] "Our preliminary telemetry confirms a major breakthrough regarding ${ctx.obj}."\n\nWhich choice correctly introduces the quotation?`,
            ans: `announced to the ${ctx.team},`,
            dist: [`announced to the ${ctx.team};`, `announced to the ${ctx.team}:`, `announced to the ${ctx.team}`],
            exp: `A comma is conventionally used to introduce a direct quotation following a dialogue tag.`
        }),
        // 44: Ambiguous pronoun resolution
        () => ({
            topic: "Grammar & Usage",
            text: `When the ${ctx.tool} struck the basalt formation in ${ctx.loc}, it sustained minor surface abrasions.\n\nWhich revision eliminates the ambiguous pronoun 'it'?`,
            ans: `When the ${ctx.tool} struck the basalt formation in ${ctx.loc}, the instrument sustained minor surface abrasions.`,
            dist: [
                `When it struck the basalt formation in ${ctx.loc}, the ${ctx.tool} cracked.`,
                `Striking the basalt formation in ${ctx.loc}, it sustained abrasions.`,
                `The ${ctx.tool} and basalt collided in ${ctx.loc}, and it was abraded.`
            ],
            exp: `Specifying 'the instrument' clarifies which object sustained the abrasions.`
        }),
        // 45: Run-on sentence fix
        () => ({
            topic: "Sentence Structure",
            text: `The telemetry stream from ${ctx.loc} stopped abruptly the ${ctx.tool} battery had completely discharged.\n\nWhich choice correctly repairs the run-on sentence?`,
            ans: `The telemetry stream from ${ctx.loc} stopped abruptly because the ${ctx.tool} battery had completely discharged.`,
            dist: [
                `The telemetry stream from ${ctx.loc} stopped abruptly, the battery had discharged.`,
                `Stopping abruptly, the telemetry stream from ${ctx.loc} the battery had discharged.`,
                `The telemetry stream from ${ctx.loc} stopped abruptly and so the battery had discharged.`
            ],
            exp: `Using the subordinating conjunction 'because' establishes the causal relationship and eliminates the fused run-on.`
        }),
        // 46: Analytical vs hyperbolic tone
        () => ({
            topic: "Style & Tone",
            text: `The data collected by ${ctx.name} in ${ctx.loc} revealed an astonishing, mind-boggling increase in the concentration of ${ctx.obj}.\n\nWhich replacement for the underlined phrase best maintains objective scientific neutrality?`,
            ans: `a statistically significant`,
            dist: [`an unbelievable and crazy`, `a super massive`, `a shockingly wild`],
            exp: `'A statistically significant' provides precise scientific description without sensationalist hyperbole.`
        }),
        // 47: Alternative transition
        () => ({
            topic: "Transitions",
            text: `${ctx.name} decided not to drill into the fragile geological crust in ${ctx.loc}. [47], the ${ctx.team} utilized non-invasive acoustic mapping from a safe distance.\n\nWhich transition best presents this alternative approach?`,
            ans: `Instead`,
            dist: [`Furthermore`, `Consequently`, `Likewise`],
            exp: `'Instead' correctly introduces the chosen alternative action following a rejected option.`
        }),
        // 48: Paragraph cohesion
        () => ({
            topic: "Rhetorical Skills",
            text: `The author wants to ensure smooth cohesion between a paragraph describing fieldwork in ${ctx.loc} and a paragraph detailing laboratory synthesis of ${ctx.obj}. Which sentence best bridges this transition?`,
            ans: `Having gathered these pristine environmental samples in ${ctx.loc}, ${ctx.name} returned to the laboratory to synthesize artificial analogues.`,
            dist: [
                `Laboratory experiments are often conducted in sterile cleanrooms.`,
                `Many scientific discoveries occur unexpectedly during routine maintenance.`,
                `${ctx.loc} is known for its challenging regional climate.`
            ],
            exp: `This bridging sentence links the completion of fieldwork in ${ctx.loc} directly to the laboratory synthesis phase.`
        }),
        // 49: Redundant time expressions
        () => ({
            topic: "Wordiness & Redundancy",
            text: `Historical precedents from the past history of ${ctx.field} guided ${ctx.name}'s safety protocols in ${ctx.loc}.\n\nWhich revision removes redundant wording?`,
            ans: `Historical precedents in ${ctx.field} guided ${ctx.name}'s safety protocols in ${ctx.loc}.`,
            dist: [
                `Past historical precedents from history guided protocols in ${ctx.loc}.`,
                `Precedents from past history guided protocols in ${ctx.loc}.`,
                `Historical precedents from earlier past history guided protocols in ${ctx.loc}.`
            ],
            exp: `'Historical precedents' already denotes the past; 'from the past history' is redundant.`
        }),
        // 50: Compound adjective hyphenation
        () => ({
            topic: "Punctuation",
            text: `${ctx.name} utilized a state [50] the art ${ctx.tool} to analyze ${ctx.obj} in ${ctx.loc}.\n\nWhich choice correctly punctuates the compound adjective before the noun?`,
            ans: `state-of-the-art`,
            dist: [`state of the art`, `state, of, the, art`, `state-of the art`],
            exp: `Compound adjectives appearing before a noun must be hyphenated ('state-of-the-art ${ctx.tool}').`
        })
    ];

    for (let qId = 1; qId <= 50; qId++) {
        const builder = itemBuilders[qId - 1];
        const item = builder();

        const ansIdx = (seed + qId) % 4;
        const options = [...item.dist];
        options.splice(ansIdx, 0, item.ans);

        questions.push({
            id: qId,
            section: "english",
            topic: item.topic,
            text: item.text,
            options: options,
            answer: ansIdx,
            explanation: `Correct Answer: "${item.ans}". ${item.exp}`
        });
    }

    return questions;
}

module.exports = { generateEnglishQuestions };

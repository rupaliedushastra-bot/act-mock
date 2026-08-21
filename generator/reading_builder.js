// generator/reading_builder.js
// Generates 36 unique ACT Reading questions per test (Q96-Q131 across 4 distinct passages)

const PASSAGE_THEMES = [
    {
        category: "Literary Narrative",
        titles: [
            "The Clockmaker's Apprentice", "Shadows of the Orchard", "The Winter Crossing", 
            "The Weaver of Lyon", "Echoes from the Harbour", "The Glassblower's Daughter", 
            "Memoirs of the Highlands", "The River Cartographer", "The Botanist's Journal", 
            "The Midnight Conservatory", "Whispers of the Stone Mason", "The Violinist of Prague", 
            "The Lantern Keeper", "Footsteps on the Cobblestone"
        ],
        texts: [
            "Julian spent his formative years inside the dimly lit workshop of Master Elias, where the ticking of two hundred timepieces formed a steady cadence. Unlike his impatient peers who saw clockmaking merely as tradecraft, Julian recognized the philosophical gravity of measuring fleeting moments. Each gear was forged with exacting temperance, polished until it reflected the subtle amber glow of kerosene lamps. When an ornate astronomical clock arrived from the Bavarian court, Elias entrusted the restoration entirely to Julian, testing not only his mechanical prowess but his ability to interpret the silent intentions of its original sixteenth-century maker.",
            "The orchard in late autumn possessed a solemn beauty that Clara had not appreciated in her youth. Rows of heritage apple trees stood silhouetted against the gray Appalachian sky, their gnarled branches laden with the final harvest. Her grandfather had planted every sapling by hand in the aftermath of the drought, creating a resilient ecosystem through grafting and soil cultivation. Walking down the tractor path, Clara realized that the estate's value lay not in its real estate appraisal, but in the generational stewardship embedded within the fertile earth.",
            "As the vessel navigated the treacherous ice floes of the Labrador Sea, Captain Sterling stood vigilant upon the bridge. The navigation logs recorded unseasonably severe blizzards, yet the crew remained steadfast, motivated by Sterling's unwavering composure. Every groan of the timber hull reminded them of the ocean's unforgiving nature. In his private cabin, Sterling reread letters from the Arctic expedition committee, mindful that their mission would redraw polar maritime charts for generations to come.",
            "In the historic silk quarter of Lyon, Madame Laurent operated the wooden loom with rhythmic grace. While industrial steam engines were rapidly transforming urban textile mills, her workshop preserved the delicate Jacquard weaving tradition. Her fingers deftly corrected tension irregularities in crimson and gold silk strands. For Laurent, fabric was not a commodity of mass production, but a living tapestry chronicling the artistic heritage of French artisans.",
            "The morning fog rolled across the fishing harbour of Bristol, enshrouding the masts of wooden schooners. Samuel, a retired dockmaster, watched the young fishermen prepare their nets with a practiced eye. Over four decades, he had witnessed the transformation of the waterfront from a quiet maritime village into a bustling hub of international commerce. Yet beneath the roar of diesel engines, the ancient rhythm of the tide remained sovereign.",
            "Inside the glassworks of Murano, Elena rotated the iron blowpipe with steady precision. The molten silica glowed radiant orange in the furnace mouth before taking form under her breath. Venetian masters had guarded these chemical formulas for centuries, utilizing cobalt and manganese to achieve unrivaled luminosity. Elena's modern sculptures paid homage to classical Renaissance silhouettes while embracing bold asymmetrical contours.",
            "The Scottish Highlands stretched endlessly beneath a canopy of mist, where Malcolm led his small flock across the heather-covered slopes. Life in the glen demanded resilience against the biting northern winds. Traditional crofting methods, passed through oral storytelling rather than written manuals, taught him how to read weather changes from the flight patterns of golden eagles and the shifting colors of cloud banks.",
            "Maps had always been more than geography to Arthur; they were portraits of human exploration. Sitting at his drafting table surrounded by brass compasses and sepia ink bottles, he traced the meandering course of the Amazon tributaries surveyed in the 1890s. Every contour line represented months of rigorous field surveying through dense rainforest canopy.",
            "Dr. Evelyn Vance recorded her botanical observations in leather-bound notebooks beneath the humid canopy of the Monteverde cloud forest. Epiphytic orchids clung to moss-draped branches, creating aerial gardens that hosted endemic amphibians. Her meticulous watercolor sketches captured fleeting morphological details before specimens succumbed to tropical humidity.",
            "The municipal conservatory stood as an architectural triumph of Victorian ironwork and curved glass. Within its temperature-controlled chambers flourished rare tropical palms and carnivorous pitcher plants gathered from remote expeditions. For the resident horticulturist, maintenance of this fragile oasis was a continuous dialogue between delicate ecology and mechanical heating systems.",
            "Master Mason Thomas examined the limestone block destined for the cathedral's flying buttress. Decades of chisel work had taught him that stone was not inert matter, but a dynamic medium with hidden grain and stress lines. Fitting the keystone into the soaring arch required millimetric precision to ensure the structural equilibrium of the sanctuary.",
            "In the vaulted rehearsal hall of Prague, violinist Dominik tuned his instrument before the evening concerto. The resonant spruce top, carved by a master luthier in 1740, carried the acoustic warmth of nearly three centuries. Playing the intricate passages of Dvořák, Dominik felt himself becoming a vessel for melodies composed when the city's cobblestones were still young.",
            "Perched atop the granite headland, the lighthouse lamp rotated silently, casting its sweeping beam across the churning Atlantic surf. For keeper Donald, vigilance was a sacred trust. Automatic electric relays had replaced whale oil lamps, but the essential responsibility of safeguarding maritime lives against treacherous shoals remained unchanged.",
            "Walking through the historic alleys of Bruges in the quiet hours before dawn, Marcus listened to the echoes of his own footsteps against ancient granite. The gabled facades reflected centuries of Hanseatic merchant history, their weathered brickwork bearing silent witness to the rise and fall of medieval trading dynasties."
        ]
    },
    {
        category: "Social Science",
        titles: [
            "Urban Agriculture & Food Security", "The Evolution of Trade Currencies", "Sociolinguistics in Digital Spaces",
            "Cognitive Biases in Public Policy", "The Architecture of Early Settlements", "Economic Resilience in Craft Guilds",
            "Demographic Shifts & Labor Markets", "The Social Dynamics of Ancient Agora", "Psychology of Collective Memory",
            "Urban Mobility & Transportation Equity", "The Economics of Renewable Transition", "Anthropology of Maritime Communities",
            "Sociology of Technological Adoption", "Historic Preservation vs Modern Growth"
        ],
        texts: [
            "Contemporary urban planners increasingly recognize that rooftop farming and community micro-gardens provide vital social infrastructure alongside supplemental food production. By converting vacant metropolitan surfaces into productive agricultural space, cities mitigate the urban heat island effect while fostering community cohesion across diverse demographic neighborhoods.",
            "The historical transition from commodity barter systems to standardized coinage transformed ancient commerce by reducing transaction friction. Early Mediterranean mints marked silver and bronze ingots with civic seals, guaranteeing weight and purity, which in turn enabled long-distance maritime trade and capital accumulation.",
            "Digital communication platforms have accelerated the emergence of novel linguistic phenomena, from compressed syntax to dynamic lexical blending. Far from degrading language standards, sociolinguists observe that online discourse exhibits intricate morphological innovation and pragmatic nuance tailored to rapid multimodal exchange.",
            "Behavioral economics demonstrates that public policy decisions are frequently shaped by heuristic cognitive shortcuts, including loss aversion and status quo bias. Recognizing these psychological inclinations allows institutional designers to craft regulatory frameworks that nudge individuals toward optimal civic and financial outcomes.",
            "Archaeological investigations of early Neolithic settlements reveal sophisticated spatial planning long before the rise of monumental urban centers. Communal granaries, defensive enclosures, and egalitarian domestic layouts reflect collective governance mechanisms adapted to pastoral and agricultural unpredictability.",
            "Medieval craft guilds functioned not merely as economic cartels, but as comprehensive social welfare institutions. By enforcing rigorous apprenticeship standards, standardizing product quality, and providing mutual aid pensions to widows and injured artisans, guilds fostered long-term socio-economic stability.",
            "Modern demographic aging in industrialized nations is fundamentally reshaping labor supply, pension sustainability, and healthcare infrastructure. Economists suggest that mitigating workforce shortages will require policies promoting lifelong workforce education, flexible retirement models, and productivity-enhancing automation.",
            "In the ancient Greek polis, the agora served as the epicenter of commercial, political, and philosophical life. Open civic squares facilitated democratic deliberation and public debate, demonstrating how spatial architecture directly influences political participation and civic engagement.",
            "Collective memory represents the shared pool of knowledge and information in the memories of two or more members of a social group. Cultural institutions, historical commemorations, and public monuments play a crucial role in constructing national identities and transmitting historical narratives across generations.",
            "Urban transit infrastructure is inextricably linked with socioeconomic mobility. Communities with robust access to affordable, high-frequency bus and rail networks experience higher employment rates and improved educational access, highlighting the necessity of transportation equity in municipal budgeting.",
            "The global transition toward decentralized renewable energy grids involves complex economic realignments. While initial capital expenditures for photovoltaic and wind infrastructure are substantial, the declining marginal cost of renewable generation offers long-term price stability against fossil fuel market volatility.",
            "Coastal fishing communities have historically developed intricate customary marine tenure systems. Through community-enforced seasonal closures and gear restrictions, artisanal fishers maintained sustainable harvesting levels without top-down bureaucratic intervention.",
            "The diffusion of technological innovations within social systems follows predictable S-curve adoption trajectories. Early adopters play a pivotal role in validating utility, whereas late-stage adoption depends primarily on infrastructural ubiquity and perceived institutional support.",
            "Municipal planners in historic cities grapple with balancing architectural preservation and modern housing density demands. Successful zoning frameworks integrate adaptive reuse of historic facades with modern interior retrofitting, preserving cultural heritage without stifling urban vitality."
        ]
    },
    {
        category: "Humanities",
        titles: [
            "Aesthetics of Renaissance Frescoes", "The Philosophy of Architectural Form", "The Golden Age of Classical Polyphony",
            "Literary Realism & 19th Century Society", "The Expressive Language of Sculpture", "The Hermeneutics of Translation",
            "Romanticism & the Sublime in Landscape", "Philosophy of Mind in Antiquity", "The Cultural Semiotics of Theater",
            "Acoustic Design in Ancient Amphitheaters", "The Evolution of Woodcut Printmaking", "Modernist Poetry & Urban Disillusion",
            "The Art of Japanese Tea Aesthetics", "Mythology & Epic Storytelling"
        ],
        texts: [
            "Renaissance fresco painting demanded an extraordinary synthesis of chemical expertise and artistic agility. Applying mineral pigments directly onto wet plaster (buon fresco) required the artist to execute each section within a single workday before the lime cured into an insoluble calcium carbonate matrix, permanently binding the pigment into the wall.",
            "Architectural theorists have long argued that structural form should articulate internal spatial function. From Gothic flying buttresses that openly celebrated gravitational thrust to twentieth-century modernism's dictum that 'form follows function,' architectural history reflects an ongoing dialogue between aesthetic elegance and engineering honesty.",
            "The development of complex polyphony during the late Renaissance represented a pinnacle of musical counterpoint. Composers like Palestrina interwove independent melodic lines into a harmonious choral texture, balancing intricate voice-leading rules with spiritual intelligibility.",
            "Nineteenth-century literary realism emerged as a direct artistic reaction against the idealized sentimentalism of romantic fiction. Authors like Balzac and George Eliot employed panoramic social analysis, portraying characters shaped by economic realities, class constraints, and institutional pressures.",
            "Sculpture engages with physical space in a manner distinct from two-dimensional visual arts. By inviting the viewer to traverse its circumference, sculpted stone and bronze orchestrate shifting perspectives of light, shadow, and kinetic tension across three dimensions.",
            "The act of literary translation is never a mechanical substitution of vocabulary, but a profound cultural hermeneutic. Translators must weigh fidelity to the original syntax against the poetic resonance and idiom of the target language, navigating inevitable losses and creative reinventions.",
            "Romantic landscape painters sought to evoke the 'Sublime'—an overwhelming aesthetic sensation combining awe, wonder, and existential insignificance in the presence of untamed nature. Towering alpine peaks, churning sea tempests, and vast ruins served as visual metaphors for the limits of human reason.",
            "Ancient philosophical inquiries into consciousness laid the groundwork for modern epistemology. Plato's allegory of the cave and Aristotle's treatise on the soul examined the boundary between sensory perception and rational contemplation, questioning whether human knowledge reflects objective reality or subjective illusion.",
            "Classical dramatic performance functioned as a communal ritual of moral and political interrogation. Through tragic catharsis, audiences confronted fundamental dilemmas regarding divine justice, civic duty, and the limits of individual agency.",
            "The acoustic brilliance of Greco-Roman theaters, such as the amphitheater at Epidaurus, resulted from sophisticated geometric design and stone acoustic filtering. Stepped limestone seating rows effectively suppressed low-frequency background noise while amplifying high-frequency vocal consonants across vast open-air spaces.",
            "The sixteenth-century rise of relief printmaking democratized visual culture throughout Europe. Master printmakers like Albrecht Dürer utilized fine parallel hatching and cross-hatching to render dramatic tonal depth and textures in woodcut prints, producing thousands of affordable impressions.",
            "Modernist poetry of the early twentieth century broke decisively with classical meter and romantic optimism. Confronting the fragmentation of industrial cities and the trauma of global warfare, poets utilized fractured imagery, polyphonic voices, and juxtaposition to convey modern psychological alienation.",
            "The traditional Japanese tea ceremony (chanoyu) embodies the aesthetic philosophy of wabi-sabi—finding profound tranquility and beauty in imperfection, simplicity, and natural impermanence. Every utensil, architectural beam, and seasonal flower arrangement is curated to foster mindfulness and quiet hospitality.",
            "Epic poetry across world cultures preserves foundational cultural mythologies and ethical codes. From the Epic of Gilgamesh to Homer's Odyssey, heroic journeys dramatize humanity's struggle against mortality, fate, and cosmic disorder."
        ]
    },
    {
        category: "Natural Science",
        titles: [
            "Hydrothermal Vents & Chemosynthesis", "CRISPR & Epigenetic Regulation", "Exoplanet Atmospheric Spectroscopy",
            "Mycorrhizal Fungal Communication", "Dark Matter & Gravitational Lensing", "Neuroplasticity & Synaptic Pruning",
            "Glacial Ice Cores & Paleoclimatology", "Bioluminescence in Deep-Sea Fauna", "Plate Tectonics & Mantle Plumes",
            "Quantum Entanglement & Superposition", "Avian Magnetoreception & Migration", "Photosystem II & Solar Fuel Synthesis",
            "Viral Vectors & Gene Therapy", "Symbiotic Micro-Biomes & Human Health"
        ],
        texts: [
            "Discovered along mid-ocean spreading ridges, deep-sea hydrothermal vents sustain thriving ecosystems completely independent of solar energy. Chemosynthetic bacteria oxidize hydrogen sulfide and methane emitted from mineral chimneys, forming the primary trophic foundation for giant tube worms, blind shrimp, and specialized crabs.",
            "Epigenetic mechanisms modify gene expression patterns without altering underlying DNA nucleotide sequences. DNA methylation and histone acetylation act as cellular switches, allowing organisms to dynamically regulate physiological responses to environmental stressors and developmental cues.",
            "Astronomers analyze atmospheric compositions of distant exoplanets through transit transmission spectroscopy. As a planet passes in front of its host star, chemical elements in its atmosphere absorb specific wavelengths of starlight, leaving distinct spectral fingerprints that reveal water vapor, methane, and carbon dioxide.",
            "Underground mycorrhizal networks establish vast symbiotic partnerships between fungal mycelium and forest trees. Through these subterranean channels, plants exchange photosynthetic carbon for fungal phosphorus and nitrogen, while transmitting biochemical warning signals regarding insect pest infestations.",
            "Although dark matter does not interact with electromagnetic radiation, its gravitational presence is mapped through gravitational lensing. The immense mass of distant galaxy clusters warps spacetime, bending the trajectory of light rays originating from background galaxies into characteristic arc-like distortions.",
            "The human brain exhibits lifelong neuroplasticity through synaptic remodeling and activity-dependent pruning. Frequently stimulated neural pathways are strengthened through long-term potentiation, while inactive connections are systematically dismantled, optimizing cognitive efficiency and motor skill acquisition.",
            "Antarctic and Greenland ice cores provide an unbroken geochemical record of Earth's atmosphere spanning hundreds of thousands of years. Trapped air bubbles preserve ancient atmospheric greenhouse gas concentrations, while stable oxygen isotope ratios in ice crystals reveal past global temperature variations.",
            "Bioluminescence in marine organisms is catalyzed by the oxidation of luciferin in the presence of the enzyme luciferase. In the bathypelagic ocean zone, species utilize bioluminescent flashes and photophore patterns for predator evasion, conspecific recognition, and prey attraction.",
            "Geological mantle plumes originate near the core-mantle boundary, ascending as buoyant thermal diapirs through the Earth's mantle. As plumes decompress beneath oceanic crust, they generate persistent volcanic hotspot chains like the Hawaiian-Emperor seamount system.",
            "Quantum entanglement occurs when pairs of particles become entangled such that the quantum state of each particle cannot be described independently of the other. Measuring the spin state of one entangled particle instantly determines the state of its counterpart, regardless of spatial separation.",
            "Migratory birds navigate across continents by detecting Earth's magnetic field through specialized cryptochrome proteins in their retinas. This quantum magnetoreception mechanism enables avian species to perceive subtle magnetic inclination angles as visual patterns of light and shadow.",
            "In oxygenic photosynthesis, the multisubunit protein complex Photosystem II splits water molecules into oxygen, protons, and electrons using absorbed solar photons. Deciphering the catalytic manganese-calcium cluster of Photosystem II provides a biological blueprint for artificial solar fuel cells.",
            "Recombinant adeno-associated viral vectors have revolutionized clinical gene therapy. Engineered to deliver functional therapeutic genes into target tissues without pathogenic replication, viral vectors offer promising interventions for monogenic genetic disorders.",
            "The human gastrointestinal tract harbors trillions of symbiotic microorganisms that coordinate nutrient metabolism, synthesize essential vitamins, and regulate immune system maturation. Dysbiosis in gut microbiome composition has been linked to metabolic, autoimmune, and neurological conditions."
        ]
    }
];

function generateReadingQuestions(testIndex) {
    const questions = [];
    const seed = testIndex * 11 + 7;

    const pIdx = (testIndex - 2) % 14;

    const p1 = PASSAGE_THEMES[0]; // Lit
    const p2 = PASSAGE_THEMES[1]; // Social Sci
    const p3 = PASSAGE_THEMES[2]; // Humanities
    const p4 = PASSAGE_THEMES[3]; // Natural Sci

    const passages = [
        { category: p1.category, title: p1.titles[pIdx], text: p1.texts[pIdx], qStart: 96, qEnd: 104, numRoman: 'I' },
        { category: p2.category, title: p2.titles[pIdx], text: p2.texts[pIdx], qStart: 105, qEnd: 113, numRoman: 'II' },
        { category: p3.category, title: p3.titles[pIdx], text: p3.texts[pIdx], qStart: 114, qEnd: 122, numRoman: 'III' },
        { category: p4.category, title: p4.titles[pIdx], text: p4.texts[pIdx], qStart: 123, qEnd: 131, numRoman: 'IV' }
    ];

    passages.forEach((p) => {
        const fullPassageText = `PASSAGE ${p.numRoman}: ${p.category.toUpperCase()}\n\n"${p.title}"\n\n${p.text}`;

        const questionTemplates = [
            {
                type: "Main Idea",
                topic: "Main Idea",
                text: `Based on Passage ${p.numRoman} ("${p.title}"), the primary purpose of the text is to:`,
                ans: `examine the intricate relationship between ${p.title.toLowerCase()} and its broader significance.`,
                dist: [
                    `criticize traditional approaches while advocating for immediate reform.`,
                    `provide a purely statistical timeline of historical events.`,
                    `argue that modern technological advancements have rendered past practices obsolete.`
                ],
                exp: `The passage as a whole focuses on introducing and exploring the nuances and deeper meaning of "${p.title}".`
            },
            {
                type: "Specific Detail",
                topic: "Inference",
                text: `According to the discussion in Passage ${p.numRoman} ("${p.title}"), which of the following is explicitly emphasized about the subject?`,
                ans: `It requires meticulous attention to detail and a deep understanding of foundational principles.`,
                dist: [
                    `It was achieved without significant labor or long-term dedication.`,
                    `It was largely rejected by contemporary experts during its initial phase.`,
                    `It relies exclusively on automated machinery rather than human expertise.`
                ],
                exp: `The text provides specific narrative details showing the precision, dedication, and knowledge required.`
            },
            {
                type: "Vocabulary in Context",
                topic: "Style & Tone",
                text: `In the context of Passage ${p.numRoman} ("${p.title}"), the author's descriptive tone is best characterized as:`,
                ans: `reverent and analytical.`,
                dist: [
                    `dismissive and cynical.`,
                    `detached and uninterested.`,
                    `confrontational and hostile.`
                ],
                exp: `The author treats the subject with serious appreciation and structured, thoughtful analysis.`
            },
            {
                type: "Inference",
                topic: "Inference",
                text: `It can reasonably be inferred from the narrative presented in Passage ${p.numRoman} ("${p.title}") that:`,
                ans: `the underlying principles discussed have enduring value that transcends simple utility.`,
                dist: [
                    `the primary actors involved were unaware of the consequences of their actions.`,
                    `external economic conditions had no impact on the development of the field.`,
                    `the subject will likely lose relevance within the coming decade.`
                ],
                exp: `The narrative suggests that the true significance lies beyond immediate material or practical outcomes.`
            },
            {
                type: "Paragraph Function",
                topic: "Rhetorical Skills",
                text: `The structural development of Passage ${p.numRoman} ("${p.title}") serves primarily to:`,
                ans: `establish context before exploring specific examples and deeper philosophical implications.`,
                dist: [
                    `open with a refutation of an established scientific consensus.`,
                    `present a chronological series of unrelated anecdotes.`,
                    `compare two equally viable opposing hypotheses.`
                ],
                exp: `The passage begins by setting the scene and context, then proceeds to detail specific techniques or insights.`
            },
            {
                type: "Cause & Effect",
                topic: "Inference",
                text: `In Passage ${p.numRoman} ("${p.title}"), the success or impact of the central endeavor is most directly attributed to:`,
                ans: `a harmonious blend of disciplined craft, historical knowledge, and perseverance.`,
                dist: [
                    `favorable political mandates enacted by municipal authorities.`,
                    `sheer chance and fortuitous external interventions.`,
                    `hasty improvisation under urgent time constraints.`
                ],
                exp: `The text illustrates that mastery and lasting impact stem from deliberate discipline and deep understanding.`
            },
            {
                type: "Author Stance",
                topic: "Style & Tone",
                text: `The author's perspective toward the evolution of Passage ${p.numRoman} ("${p.title}") is best described as:`,
                ans: `deeply respectful of its heritage and nuanced complexities.`,
                dist: [
                    `skeptical of its claimed achievements.`,
                    `strictly neutral and reporting raw data.`,
                    `nostalgic yet dismissive of modern adaptations.`
                ],
                exp: `The descriptive language emphasizes admiration for the precision, craft, and significance of the subject.`
            },
            {
                type: "Comparative/Context",
                topic: "Inference",
                text: `The author of Passage ${p.numRoman} ("${p.title}") suggests that viewing the subject merely as a routine process would:`,
                ans: `overlook the profound cultural, ecological, or intellectual dimensions it embodies.`,
                dist: [
                    `lead to rapid efficiency improvements in industrial manufacturing.`,
                    `be the most accurate way to quantify its economic value.`,
                    `align perfectly with the original creator's stated philosophy.`
                ],
                exp: `The author explicitly contrasts superficial or purely utilitarian views with deeper appreciation.`
            },
            {
                type: "Synthesis/Conclusion",
                topic: "Main Idea",
                text: `Which statement best expresses the overarching conclusion presented in Passage ${p.numRoman} ("${p.title}")?`,
                ans: `True mastery and understanding arise from honoring fundamental principles while engaging deeply with the work.`,
                dist: [
                    `Technological disruption inevitably erodes the value of all historical traditions.`,
                    `Individual achievement is entirely dependent on institutional patronage.`,
                    `Theoretical models are vastly superior to empirical practice in every domain.`
                ],
                exp: `The concluding lines reflect on the broader significance of dedicated stewardship and deep comprehension.`
            }
        ];

        for (let q = 0; q < 9; q++) {
            const qId = p.qStart + q;
            const tpl = questionTemplates[q];
            const ansIdx = (seed + qId) % 4;
            const options = [...tpl.dist];
            options.splice(ansIdx, 0, tpl.ans);

            questions.push({
                id: qId,
                section: "reading",
                topic: tpl.topic,
                passage: fullPassageText,
                text: tpl.text,
                options: options,
                answer: ansIdx,
                explanation: `Correct Answer: "${tpl.ans}". ${tpl.exp}`
            });
        }
    });

    return questions;
}

module.exports = { generateReadingQuestions };

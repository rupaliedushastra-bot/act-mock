// =============================================
// questions.js – Topic: inference
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'When the expedition finally reached the summit ridge, the wind died down unexpectedly, leaving an eerie silence that no one had anticipated.' It can be reasonably inferred from this passage that:",
        "options": [
            "The climbers were disappointed by the silence",
            "High winds had been a persistent feature of the ascent until that moment",
            "The climbers were unprepared for summit conditions",
            "The weather was completely calm throughout the entire expedition"
        ],
        "answer": 1,
        "explanation": "The passage notes that the wind died down 'unexpectedly' and created an 'eerie silence that no one had anticipated,' directly implying that strong winds had been constantly present and expected during the ascent."
    },
    {
        "id": 2,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'Unlike his earlier works, which celebrated industrial progress, the author's late novels portrayed factory towns with muted melancholy.' The passage most strongly suggests that:",
        "options": [
            "The author grew more critical or nuanced about industrialization over time",
            "The author stopped writing about urban settings entirely",
            "The author became more optimistic in his old age",
            "The author's early works were completely ignored by readers"
        ],
        "answer": 0,
        "explanation": "Contrasting earlier celebration with later 'muted melancholy' directly indicates that the author's perspective on industrialization shifted toward skepticism, critique, or sorrow over time."
    },
    {
        "id": 3,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'Although several candidates claimed credit for the economic turnaround, data showed that consumer confidence had begun rebounding six months before any new policies took effect.' It can be inferred that:",
        "options": [
            "The candidates' policies were solely responsible for the turnaround",
            "The economic recovery may have occurred independently of the candidates' policies",
            "Consumer confidence always falls after new policies take effect",
            "Economic turnaround was entirely fabricated by media"
        ],
        "answer": 1,
        "explanation": "Because consumer confidence started improving six months before any policy implementation, the turnaround began prior to the policies, indicating the recovery was driven by independent economic factors."
    },
    {
        "id": 4,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'Dr. Rivera noted that while the initial trials showed promising results, identical experiments conducted at lower temperatures yielded inconclusive outcomes.' The author implies that:",
        "options": [
            "The experiment's success is dependent on temperature conditions",
            "Dr. Rivera falsified the original trial results",
            "Lower temperatures always enhance chemical reactions",
            "Dr. Rivera decided to abandon the research project"
        ],
        "answer": 0,
        "explanation": "The fact that results were promising in the initial trials but inconclusive at lower temperatures demonstrates that temperature is a critical controlling variable influencing the outcome."
    },
    {
        "id": 5,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'The town council approved the park renovation only after residents gathered over 2,000 signatures in protest of the original commercial zoning plan.' It can be inferred that:",
        "options": [
            "The town council always preferred building a park",
            "Civic activism played a decisive role in shifting the council's zoning decision",
            "Residents were indifferent to how the vacant land was used",
            "The commercial development was completed ahead of schedule"
        ],
        "answer": 1,
        "explanation": "The council approved the renovation 'only after' a 2,000-signature citizen protest against commercial development, showing that grassroots community activism directly influenced the policy change."
    },
    {
        "id": 6,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'Archaeologists found fish bones and net sinkers in deep inland settlements that lacked any nearby rivers or lakes.' The evidence most strongly suggests that:",
        "options": [
            "The inland inhabitants engaged in long-distance trade or travel with coastal or riverine communities",
            "Fish were native to desert regions in ancient times",
            "Inland settlers had no contact with neighboring groups",
            "The artifacts were accidentally dropped by modern tourists"
        ],
        "answer": 0,
        "explanation": "Finding aquatic tools and fish remains far from water bodies indicates that inland settlers acquired marine goods through trade networks or travel to coastal/riverine regions."
    },
    {
        "id": 7,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'While early critics dismissed her minimalist compositions as simplistic, modern scholars view them as pioneering precursors to ambient music.' It can be inferred that:",
        "options": [
            "Critical evaluation of her work has become substantially more positive and appreciative over time",
            "Her compositions have lost all relevance in modern music",
            "Early critics understood her artistic genius better than modern scholars",
            "She altered her musical style to please critics"
        ],
        "answer": 0,
        "explanation": "The transition from early dismissal as 'simplistic' to modern praise as 'pioneering precursors' demonstrates a significant positive shift in how scholars evaluate her work."
    },
    {
        "id": 8,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'The nocturnal primates possess exceptionally large eyes relative to their skull size and possess retinae dominated almost exclusively by rod cells.' The passage implies that these primates:",
        "options": [
            "Are adapted for optimal vision in low-light environments",
            "Have superior daytime color perception",
            "Cannot navigate in the dark",
            "Hunt exclusively during midday hours"
        ],
        "answer": 0,
        "explanation": "Large eyes and rod-dominated retinas are biological adaptations specifically evolved to maximize light capture for night vision in nocturnal species."
    },
    {
        "id": 9,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'Sales of electric vehicles spiked in regions that enacted municipal tax rebates and expanded public charging grids.' This observation suggests that:",
        "options": [
            "Financial incentives and accessible infrastructure encourage consumer adoption of new technologies",
            "Electric vehicles are universally preferred regardless of price",
            "Municipal rebates have no measurable effect on buyer behavior",
            "Gasoline-powered vehicles are completely obsolete"
        ],
        "answer": 0,
        "explanation": "The correlation between policy incentives (rebates, charging networks) and increased EV sales demonstrates that affordability and convenience motivate consumer adoption."
    },
    {
        "id": 10,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'Despite widespread predictions that the new bridge would alleviate traffic, congestion on the surrounding arterial roads increased by 15% within a year.' The author most likely implies that:",
        "options": [
            "New transportation infrastructure can induce additional traffic demand rather than simply reduce congestion",
            "The bridge was poorly constructed and closed to vehicles",
            "Traffic congestion can always be solved by building more roads",
            "Commuters completely stopped driving after the bridge opened"
        ],
        "answer": 0,
        "explanation": "The unexpected rise in congestion despite added capacity reflects the phenomenon of induced demand, where new infrastructure attracts more total vehicular volume."
    },
    {
        "id": 11,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'The archival letters were written in a guarded, formal tone, in stark contrast to the lively, informal voice found in the author’s published memoirs.' It can be reasonably inferred that:",
        "options": [
            "The author tailored tone and voice depending on the audience and medium",
            "The author was illiterate when writing the letters",
            "The memoirs were written by a ghostwriter",
            "The letters were intended for public publication"
        ],
        "answer": 0,
        "explanation": "The clear contrast between formal private letters and lively public memoirs implies the writer deliberately adapted stylistic tone based on purpose and audience."
    },
    {
        "id": 12,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'Tree ring analysis revealed an abrupt series of extremely narrow rings spanning two consecutive decades in the mid-sixth century.' The passage implies that this period was characterized by:",
        "options": [
            "Unfavorable environmental conditions such as prolonged drought or severe cold that restricted growth",
            "Optimal growth conditions and abundant rainfall",
            "A complete absence of seasonal changes",
            "Rapid expansion of forest boundaries"
        ],
        "answer": 0,
        "explanation": "Narrow tree rings indicate minimal cambium growth during stressful environmental conditions, such as severe droughts, prolonged cold, or adverse climate anomalies."
    },
    {
        "id": 13,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'The software update was rolled back within 24 hours after enterprise clients reported frequent database synchronization failures.' It can be inferred that:",
        "options": [
            "The update introduced critical bugs that disrupted normal business operations",
            "The update was universally praised by all corporate clients",
            "The development team decided to discontinue the entire software product",
            "Enterprise clients were eager to keep the new features"
        ],
        "answer": 0,
        "explanation": "A swift rollback following severe database synchronization failures indicates that the release contained critical defects that interfered with essential workflows."
    },
    {
        "id": 14,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'Although the island was uninhabited when discovered by European explorers, archaeologists uncovered stone terracing and pottery fragments dating back over a millennium.' The passage suggests that:",
        "options": [
            "The island had previously supported human settlements prior to its abandonment",
            "The European explorers were the first humans to ever set foot on the island",
            "Stone terracing occurs naturally through geological weathering",
            "The pottery was created by native wildlife"
        ],
        "answer": 0,
        "explanation": "The presence of human-made agricultural terracing and ancient pottery on an empty island proves it was inhabited by human populations in the past before being abandoned."
    },
    {
        "id": 15,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'Researchers found that plants exposed to elevated acoustic vibrations produced nectar with a 20% higher sugar concentration within minutes of pollinator sound playback.' It can be inferred that:",
        "options": [
            "Plants possess sensory mechanisms capable of responding dynamically to acoustic environmental cues",
            "Acoustic vibrations have no impact on floral biology",
            "Plants produce nectar only when silence is maintained",
            "Pollinators avoid flowers that produce sweeter nectar"
        ],
        "answer": 0,
        "explanation": "A rapid increase in sugar concentration triggered by pollinator sound playback indicates an active, real-time physiological response to sound waves."
    },
    {
        "id": 16,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'While previous historians attributed the empire's decline solely to foreign invasions, recent climate records show that a severe, multi-decade megadrought coincided precisely with the collapse of agricultural output.' The author implies that:",
        "options": [
            "Environmental factors played a major role in the empire's vulnerability and collapse",
            "Foreign invasions were the only cause of historical collapse",
            "Climate records are irrelevant to historical analysis",
            "The empire had no agricultural economy"
        ],
        "answer": 0,
        "explanation": "By connecting the collapse to newly discovered megadrought data, the author suggests ecological hardship weakened the empire and contributed substantially to its decline."
    },
    {
        "id": 17,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'The novel’s protagonist frequently hesitates before speaking in public, yet delivers effortlessly eloquent speeches when addressing his close family circle.' This detail suggests that the protagonist:",
        "options": [
            "Experiences social anxiety in formal or unfamiliar public settings but feels secure among loved ones",
            "Lacks command of spoken language entirely",
            "Dislikes his family members intensely",
            "Prefers public speaking to private conversations"
        ],
        "answer": 0,
        "explanation": "Hesitation in public paired with eloquence in intimate family settings reveals that his conversational ease depends on emotional comfort and familiar surroundings."
    },
    {
        "id": 18,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'The company ceased manufacturing incandescent bulbs only after state regulations banned their sale in favor of energy-efficient LEDs.' It can be inferred that:",
        "options": [
            "Government regulation served as the primary catalyst for the company's manufacturing transition",
            "The company voluntarily eliminated incandescent bulbs before anyone else",
            "LED bulbs were unpopular and rejected by consumers",
            "Incandescent bulbs consumed less electricity than LEDs"
        ],
        "answer": 0,
        "explanation": "The manufacturer's shift occurred 'only after' state bans took effect, indicating legislative mandates forced the transition away from incandescent lighting."
    },
    {
        "id": 19,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'Deep-sea submersibles exploring volcanic vents discovered diverse ecosystems thriving in complete darkness, obtaining energy from mineral-rich chemical fluids rather than sunlight.' It can be inferred that:",
        "options": [
            "Biological life can sustain complex food webs through chemosynthesis without solar energy",
            "All living organisms on Earth depend directly on photosynthesis for survival",
            "Volcanic vents prevent any biological life from existing",
            "Sunlight easily penetrates to the deepest ocean trenches"
        ],
        "answer": 0,
        "explanation": "Thriving hydrothermal vent ecosystems reliant on mineral fluids prove that chemosynthesis can sustain biological communities completely independent of sunlight."
    },
    {
        "id": 20,
        "section": "reading",
        "topic": "Inference",
        "text": "Passage excerpt: 'The painter kept his signature off the front of his canvas, inscribing it only on the rear wooden stretcher bars.' The artist’s practice suggests a desire to:",
        "options": [
            "Minimize visual distractions on the painted surface and preserve aesthetic purity",
            "Prevent anyone from ever discovering who painted the work",
            "Conceal his artwork from the public",
            "Disown the artwork completely"
        ],
        "answer": 0,
        "explanation": "Placing the signature on the back stretcher bars keeps the visual composition unblemished by text or markings, prioritizing the integrity of the artwork itself."
    }
];

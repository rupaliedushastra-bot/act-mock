// =============================================
// questions.js – Topic: main_idea
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "reading",
        "topic": "Main Idea",
        "text": "A passage discusses how urban green spaces lower city temperatures, improve mental health, and provide wildlife habitats. Which of the following best states the main idea?",
        "options": [
            "City parks are expensive to maintain.",
            "Urban green spaces offer multifaceted environmental, psychological, and ecological benefits.",
            "Wildlife cannot survive in modern urban centers.",
            "High temperatures are the only problem facing cities today."
        ],
        "answer": 1,
        "explanation": "The passage connects multiple distinct advantages of parks (temperature reduction, psychological health, biodiversity), making Choice B the comprehensive main idea."
    },
    {
        "id": 2,
        "section": "reading",
        "topic": "Main Idea",
        "text": "An article examines the transition from fossil fuels to renewable energy, noting both technological breakthroughs and storage infrastructure challenges. What is the central thesis?",
        "options": [
            "Renewable energy is impossible to implement.",
            "Fossil fuels will remain the only viable power source.",
            "Transitioning to renewable energy offers great promise but requires overcoming significant technological and logistical hurdles.",
            "Battery storage technology has reached its theoretical limit."
        ],
        "answer": 2,
        "explanation": "The article balances the promise of renewables with the practical infrastructure hurdles, making Choice C the accurate summary of the central thesis."
    },
    {
        "id": 3,
        "section": "reading",
        "topic": "Main Idea",
        "text": "A passage explores how sleep deprivation impairs cognitive performance, weakens the immune system, and increases emotional reactivity. What is the author's primary purpose?",
        "options": [
            "To explain how critical adequate sleep is for comprehensive physical, mental, and emotional health",
            "To argue that humans sleep too many hours each night",
            "To describe the chemical structure of sleep medications",
            "To criticize workplace productivity standards"
        ],
        "answer": 0,
        "explanation": "By outlining the severe multi-system consequences of sleep loss, the author's primary goal is to emphasize the essential role of sleep in overall human health."
    },
    {
        "id": 4,
        "section": "reading",
        "topic": "Main Idea",
        "text": "An essay analyzes the rise of social media platforms and argues that while they enhance connectivity, they also foster polarization and reduce attention spans. Which sentence best summarizes the main idea?",
        "options": [
            "Social media platforms have only negative impacts on human society.",
            "Social media has revolutionized global communication, presenting both valuable connections and serious psychological and social challenges.",
            "People have completely stopped reading long books.",
            "Online connectivity is less popular today than a decade ago."
        ],
        "answer": 1,
        "explanation": "Choice B captures both the positive connectivity and the negative side effects (polarization, shortened attention) discussed throughout the essay."
    },
    {
        "id": 5,
        "section": "reading",
        "topic": "Main Idea",
        "text": "A passage describes how deep-sea coral reefs survive in cold, dark waters and support rich biodiversity despite facing threats from bottom trawling. The main focus of the passage is:",
        "options": [
            "The ecological significance of deep-sea corals and the anthropogenic threats endangering them",
            "The economic profitability of deep-sea fishing trawlers",
            "The reasons why tropical corals are superior to deep corals",
            "The history of submarine vessel engineering"
        ],
        "answer": 0,
        "explanation": "The passage centers on the biological richness of deep-sea corals and emphasizes the urgent human activities (trawling) threatening their survival."
    },
    {
        "id": 6,
        "section": "reading",
        "topic": "Main Idea",
        "text": "A text outlines the history of the printing press and demonstrates how it democratized literacy, challenged religious monopolies, and fueled scientific progress. The primary argument is that:",
        "options": [
            "The printing press was a transformative technology that revolutionized knowledge dissemination and social structures",
            "Movable type was an unprofitable invention",
            "Literacy was widespread before the invention of the printing press",
            "Manuscripts handwritten by monks were more accurate than printed books"
        ],
        "answer": 0,
        "explanation": "The text highlights the far-reaching societal, intellectual, and religious consequences of printing, demonstrating its role as a revolutionary catalyst in history."
    },
    {
        "id": 7,
        "section": "reading",
        "topic": "Main Idea",
        "text": "A scientific overview discusses CRISPR gene-editing technology, explaining its potential to cure genetic disorders alongside ethical concerns regarding germline modifications. Which statement best captures the main idea?",
        "options": [
            "CRISPR offers groundbreaking medical potential but raises profound ethical dilemmas that demand careful regulation",
            "Gene editing has been completely banned worldwide",
            "Genetic diseases have all been eradicated by CRISPR",
            "CRISPR has no practical applications outside agriculture"
        ],
        "answer": 0,
        "explanation": "The passage balances the immense medical promise of CRISPR with the ethical challenges of human genetic engineering."
    },
    {
        "id": 8,
        "section": "reading",
        "topic": "Main Idea",
        "text": "An essay argues that bilingualism enhances executive brain function, delays dementia onset, and fosters cross-cultural empathy. What is the central message?",
        "options": [
            "Learning a second language confers significant cognitive, neurological, and social advantages",
            "Bilingualism creates confusion and impairs native language fluency",
            "Only young children are capable of learning multiple languages",
            "All schools should teach exactly the same language worldwide"
        ],
        "answer": 0,
        "explanation": "The essay focuses on demonstrating the broad cognitive and social benefits associated with proficiency in multiple languages."
    },
    {
        "id": 9,
        "section": "reading",
        "topic": "Main Idea",
        "text": "A passage discusses the decline of pollinator populations, identifying pesticide overuse, habitat loss, and climate shifts as key drivers threatening global food security. The main theme is:",
        "options": [
            "Pollinator declines stem from multiple human-induced pressures and pose serious risks to global agriculture",
            "Bees are the only organisms responsible for plant pollination",
            "Pesticides have no impact on pollinator health",
            "Global food production has increased because pollinators are disappearing"
        ],
        "answer": 0,
        "explanation": "The passage ties anthropogenic environmental factors directly to pollinator loss and warns of downstream food security impacts."
    },
    {
        "id": 10,
        "section": "reading",
        "topic": "Main Idea",
        "text": "An article examines minimalism as a lifestyle movement, explaining that reducing material possessions can decrease stress, increase financial freedom, and clarify personal values. What is the main thesis?",
        "options": [
            "Adopting a minimalist lifestyle can lead to greater psychological well-being and intentional living",
            "Minimalism is an impossible lifestyle for modern families",
            "Owning possessions is the only path to happiness",
            "Minimalism is exclusively about interior decorating"
        ],
        "answer": 0,
        "explanation": "The article highlights how intentional reduction of physical clutter enhances psychological peace and purposeful living."
    },
    {
        "id": 11,
        "section": "reading",
        "topic": "Main Idea",
        "text": "A text analyzes the architectural design of Roman aqueducts, detailing their gradient engineering, cultural impact on public sanitation, and enduring physical legacy. What is the main idea?",
        "options": [
            "Roman aqueducts exemplified sophisticated civil engineering that transformed public health and urban life",
            "Aqueducts were built exclusively for decorative purposes",
            "Roman engineers did not understand basic physics or gravity",
            "Water was unavailable in Roman cities until modern times"
        ],
        "answer": 0,
        "explanation": "The passage focuses on the technical mastery and broad urban health benefits delivered by Roman aqueduct infrastructure."
    },
    {
        "id": 12,
        "section": "reading",
        "topic": "Main Idea",
        "text": "An essay examines the psychology of decision fatigue, explaining that making repeated choices depletes willpower and leads to suboptimal judgments later in the day. The main takeaway is that:",
        "options": [
            "Decision-making capacity is a finite cognitive resource that requires management and pacing",
            "People make better choices when exhausted",
            "Decision fatigue does not affect professionals",
            "Human willpower is limitless and never degrades"
        ],
        "answer": 0,
        "explanation": "The author shows that mental energy for decision-making is finite, making mindful pacing essential for sustained high-quality choices."
    },
    {
        "id": 13,
        "section": "reading",
        "topic": "Main Idea",
        "text": "A passage explores the history of jazz music, emphasizing how it synthesized African rhythmic traditions, European harmonic structures, and African-American blues into a distinctly American art form. The main idea is that:",
        "options": [
            "Jazz developed as a unique cultural synthesis of diverse musical traditions rooted in the African-American experience",
            "Jazz rejected all influences from European harmony",
            "Jazz was invented by classical European composers",
            "Jazz remained unchanged throughout the twentieth century"
        ],
        "answer": 0,
        "explanation": "The passage emphasizes the intercultural fusion and African-American cultural roots that created the distinct musical genre of jazz."
    },
    {
        "id": 14,
        "section": "reading",
        "topic": "Main Idea",
        "text": "An environmental article describes ocean acidification, showing how increased atmospheric carbon dioxide dissolves into seawater, lowering pH and threatening shellfish calcification. What is the central thesis?",
        "options": [
            "Rising carbon emissions cause ocean acidification that critically endangers marine ecosystems and shellfish",
            "Ocean chemistry remains unaffected by atmospheric gases",
            "Acidic seawater is beneficial for coral reef growth",
            "Marine calcification is unrelated to ocean pH"
        ],
        "answer": 0,
        "explanation": "The article establishes the cause-and-effect relationship between carbon emissions, ocean pH reduction, and marine calcification threats."
    },
    {
        "id": 15,
        "section": "reading",
        "topic": "Main Idea",
        "text": "A literary critique argues that Mary Shelley's Frankenstein is not merely a horror tale, but a profound warning against unchecked scientific hubris and societal neglect of creation. The main idea is:",
        "options": [
            "Frankenstein functions primarily as a philosophical commentary on scientific ethics and social responsibility",
            "Frankenstein was written solely for commercial entertainment",
            "Shelley praised the scientist for abandoning his monster",
            "The novel has no relevance to modern bioethics"
        ],
        "answer": 0,
        "explanation": "The critique elevates the novel beyond a simple horror story, interpreting it as an enduring moral critique of reckless scientific ambition."
    },
    {
        "id": 16,
        "section": "reading",
        "topic": "Main Idea",
        "text": "A history passage discusses the Silk Road, demonstrating how it fostered not only trade in luxury goods, but also the transmission of religions, technologies, and artistic styles across Eurasia. What is the main point?",
        "options": [
            "The Silk Road was a vital conduit for comprehensive cultural, intellectual, and economic exchange across civilizations",
            "The Silk Road carried only raw silk and spices",
            "Trade along the Silk Road caused the isolation of Asian nations",
            "The Silk Road was a single paved highway connecting Rome to China"
        ],
        "answer": 0,
        "explanation": "The author stresses that the Silk Road was far more than an economic trade route; it was a major engine of cultural and technological cross-pollination."
    },
    {
        "id": 17,
        "section": "reading",
        "topic": "Main Idea",
        "text": "An economic essay reviews universal basic income (UBI) experiments, highlighting poverty reduction and health improvements while addressing fiscal sustainability concerns. The central theme is:",
        "options": [
            "UBI presents tangible socio-economic benefits alongside complex challenges regarding funding and long-term economic scalability",
            "UBI has failed in every country where it was tested",
            "UBI completely eliminates the need for taxation",
            "Universal basic income is universally accepted without controversy"
        ],
        "answer": 0,
        "explanation": "The essay provides a balanced synthesis of UBI's documented social benefits and its substantial macroeconomic and fiscal questions."
    },
    {
        "id": 18,
        "section": "reading",
        "topic": "Main Idea",
        "text": "A passage details how fungi form underground mycorrhizal networks that exchange nutrients between trees and facilitate forest communication. The main concept is that:",
        "options": [
            "Forests operate as interconnected, cooperative biological systems facilitated by mycorrhizal fungal networks",
            "Trees compete aggressively with no cooperation",
            "Fungi act exclusively as parasitic destroyers of trees",
            "Soil nutrients cannot be transferred between plants"
        ],
        "answer": 0,
        "explanation": "The passage illustrates the symbiotic, communicative subterranean fungal web that unites individual trees into a collaborative ecosystem."
    },
    {
        "id": 19,
        "section": "reading",
        "topic": "Main Idea",
        "text": "A psychology article discusses neuroplasticity, revealing that the brain continues to reorganize synaptic connections and learn new skills throughout adulthood. What is the central idea?",
        "options": [
            "The human brain retains the capacity for structural adaptation, learning, and recovery across the entire lifespan",
            "Brain development ceases completely after childhood",
            "Adult brains cannot recover from any neurological trauma",
            "Learning is impossible past the age of thirty"
        ],
        "answer": 0,
        "explanation": "The article dispels the myth of the static adult brain by showcasing lifelong neuroplasticity, adaptability, and learning capability."
    },
    {
        "id": 20,
        "section": "reading",
        "topic": "Main Idea",
        "text": "A passage discusses the history of the Apollo space program, emphasizing how international geopolitical competition drove unprecedented technological innovation and national unity. The main idea is that:",
        "options": [
            "The space race channeled Cold War rivalry into remarkable technological advancements and historic human achievements",
            "The Apollo program had no impact on technological development",
            "Space exploration was conducted with complete international harmony",
            "Geopolitical tension always halts scientific progress"
        ],
        "answer": 0,
        "explanation": "The text explains how intense Cold War rivalry catalyzed national mobilization, resulting in rapid engineering breakthroughs and the historic Moon landings."
    }
];

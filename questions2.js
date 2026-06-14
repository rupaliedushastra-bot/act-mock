// =============================================
// Digital SAT – Practice Exam 2
// Module 1: English (27Q) + Math (22Q) = 49 Questions
// Module 2: English (27Q) + Math (22Q) = 49 Questions
// Total: 98 Questions
// answers: 0=A, 1=B, 2=C, 3=D
// fill-in: isFillIn:true, fillAnswer:'value'
// =============================================

// ── MODULE 1: English (RW) ────────────────────
const E2_RW_M1 = [
  {
    id:1, section:'rw', module:1,
    text:'Threatened species are plants and animals that are ____________ become endangered within the foreseeable future throughout all or a significant portion of its range. According to the former Attorney General Loretta Lynch, "We all have a responsibility to protect endangered species, both for their sake and for the sake of our own future generations."\n\nWhich choice completes the text with the most logical and precise word or phrase?',
    options:['definitely going to','inevitably bound to','probably able to','likely to'],
    answer:3, topic:'Words in Context'
  },
  {
    id:2, section:'rw', module:1,
    text:'It is important for clinical trials to have participants of ____________ ages, sexes, races, and ethnicities. When research involves a group of people who are similar, the findings may not apply to or benefit everyone.\n\nWhich choice completes the text with the most logical and precise word?',
    options:['consistent','different','similar','conflicting'],
    answer:1, topic:'Words in Context'
  },
  {
    id:3, section:'rw', module:1,
    text:'Hurricanes Irma and Maria highlighted the challenges for Federal agencies that rely on residential addresses to supply services in Puerto Rico. Relief efforts during the 2017 hurricane season were ____________ by the absence of an island-wide system of addressing and the lack of physical addresses for approximately one-third of the island.\n\nWhich choice completes the text with the most logical and precise word?',
    options:['hampered','assisted','enhanced','enlightened'],
    answer:0, topic:'Words in Context'
  },
  {
    id:4, section:'rw', module:1,
    text:'The following excerpt is adapted from A Short History of the World by H. G. Wells (1922).\n\nThe telescope reveals to us in various parts of the heavens luminous spiral clouds of matter, the spiral nebula, which appear to be in rotation about a center. It is ____________ by many astronomers that the Sun and its planets were once such a spiral, and that their matter has undergone concentration into its present form.\n\nWhich choice completes the text with the most logical and precise word?',
    options:['ordered','supposed','undermined','required'],
    answer:1, topic:'Words in Context'
  },
  {
    id:5, section:'rw', module:1,
    text:'The rapidly rising river was another element of danger. It was a fearful sight to see the ____________ flood plunging by, bearing great trees and logs of driftwood on its muddy surface many feet above the ground.\n\nWhich choice completes the text with the most logical and precise word?',
    options:['deceitful','placid','sluggish','relentless'],
    answer:3, topic:'Words in Context'
  },
  {
    id:6, section:'rw', module:1,
    text:'The Box Tree Moth is an invasive pest that can significantly damage and potentially kill boxwood (Buxus species) plants if left unchecked. The insect is native to East Asia and has become a serious invasive pest in Europe, where it continues to spread. The caterpillars feed mostly on boxwood, and heavy infestations can ____________ host plants. Once the leaves are gone, larvae consume the bark, leading to plant death.\n\nWhich choice completes the text with the most logical and precise word?',
    options:['defoliate','embark','empower','engender'],
    answer:0, topic:'Words in Context'
  },
  {
    id:7, section:'rw', module:1,
    text:'Non-chronological storytelling is not new to modern novels and films; in the Odyssey, for example, Homer uses flashbacks to ____________ earlier scenes in Odysseus\' adventures.\n\nWhich choice completes the text with the most logical and precise word?',
    options:['recount','reuse','reinstate','rescind'],
    answer:2, topic:'Words in Context'
  },
  {
    id:8, section:'rw', module:1,
    text:'The following passage is adapted from an article on the USGS Volcano Hazards Program website.\n\nUSGS scientists monitor over 160 active and potentially active volcanoes in the United States. Most of these volcanoes are located in Alaska, a state where eruptions occur almost every year. The rest of the volcanoes are located throughout the American West, and in Hawaii. Since there are on average between 50 and 60 volcanoes that erupt each year somewhere on Earth (about one every week), some of Earth\'s volcanoes may actually erupt within a few days or hours of each other, possibly suggesting a cause-and-effect relationship between eruptions. Upon closer inspection, however, the eruptions are almost always preceded by very different build-up periods in terms of time (days to weeks to months to years) and type of activity (earthquakes, ground deformation, gas emissions, and small eruptions).\n\nWhich choice best describes the function of the last sentence in the overall structure of the text?',
    options:[
      'It states a hypothesis that is contradicted by evidence provided earlier in the text.',
      'It presents a generalization that is exemplified by the discussion of the volcanoes in Hawaii.',
      'It offers an alternative explanation to a speculative relationship referred to earlier in the text.',
      'It provides context that clarifies why volcanoes are preceded by different build-up periods.'
    ],
    answer:2, topic:'Craft and Structure'
  },
  {
    id:9, section:'rw', module:1,
    text:'The following is an excerpt from a National Institutes of Health article titled "Genetics."\n\nAll living things evolved from a common ancestor. Therefore, humans, animals, and other organisms share many of the same genes, and the molecules made from them function in similar ways.\n\nScientists have found many genes that have been preserved through millions of years of evolution and are present in a range of organisms living today. They can study these preserved genes and compare the genomes of different species to uncover similarities and differences that improve their understanding of how human genes function and are controlled. This knowledge helps researchers develop new strategies to treat and prevent human disease. Scientists also study the genes of bacteria, viruses, and fungi for solutions to prevent or treat infection. Increasingly, these studies are offering insight into how microbes on and in the body affect our health, sometimes in beneficial ways.\n\nWhich choice poses a question that can be answered by the information in the text?',
    options:[
      'Why do scientists study the genes of organisms other than human beings?',
      'What genes do humans share with bacteria, fungi, and viruses?',
      'How do genes function to treat and prevent human disease?',
      'How do researchers preserve the genes of organisms that no longer exist today?'
    ],
    answer:0, topic:'Information and Ideas'
  },
  {
    id:10, section:'rw', module:1,
    text:'To get a grasp of the complex interactions between living things, we can start by looking at a simple linear food chain: sun, dandelion, rabbit, and hawk. Sunlight is converted into chemical energy by green plants. Part of that energy is captured by herbivorous insects and vertebrates when they eat the plants. Carnivores then eat herbivores. In reality, however, the flow of energy through an ecosystem is more like a web. Species share energy back and forth in subtle ways. If we consider other relationships (for example, plants that provide cover and nesting habitats to animals; insects, birds, and bats that pollinate flowers; rodents that disperse seeds; animals that require shade created by plants; and so on), our web approaches a symbol of what nature is really like.\n\nWhich choice best explains the difference between a linear and a web-like representation of the food chain?',
    options:[
      'A linear representation expresses a more complex relationship while a web representation expresses a simpler relationship.',
      'A linear representation expresses an inorganic relationship while a web representation expresses an organic relationship.',
      'A linear representation expresses a non-human relationship while a web representation expresses a human-to-human relationship.',
      'A linear representation expresses a relationship in a straight line while a web representation expresses a multi-directional relationship.'
    ],
    answer:3, topic:'Information and Ideas'
  },
  {
    id:11, section:'rw', module:1,
    image:'assets/images/exam2/rw1_q11_gender_pay_chart.png',
    text:'The gender pay gap is greater for women in certain sectors. For example, in the following graph, among workers who were self-employed, women earned an estimated 69 cents for every dollar earned by men. In private, for-profit companies, women earned an estimated 78 cents for every dollar earned by men. In government agencies and non-profit organizations, women earned an estimated 85 cents for every dollar earned by men. The gender pay gap also varied by level of education.\n\nWhich choice most effectively uses data from the chart that supports information in the text?',
    options:[
      'Postsecondary female teachers had a higher median income than that of male chefs and head cooks.',
      'Male truck drivers had a higher median income than that of female child care workers.',
      'Except in the field of education, females earned less than males in every occupation listed on the graph.',
      'The smallest salary gap between males and females was in financial management occupations.'
    ],
    answer:1, topic:'Information and Ideas'
  },
  {
    id:12, section:'rw', module:1,
    image:'assets/images/exam2/rw1_q12_population_table.png',
    text:'According to the data on the chart, as the estimated world population increases, the number of years estimated to add 1 billion people ____________.\n\nWhich choice most effectively uses data from the chart to complete the sentence?',
    options:['decreases sharply','decreases and then increases slightly','increases sharply','increases and then decreases slightly'],
    answer:1, topic:'Information and Ideas'
  },
  {
    id:13, section:'rw', module:1,
    text:'The following excerpt is adapted from The Wiley-Blackwell Companion to Sociology, edited by George Ritzer (Wiley-Blackwell).\n\nRitzer (2009) has recently argued that the focus on either production or consumption has always been misplaced and that all acts always involve both. That is, all acts of production and consumption are fundamentally acts of "prosumption." The assembly-line worker is always consuming all sorts of things (parts, energy, tools) in the process of production, and conversely the consumer in, for example, a fast-food restaurant is always producing (garnishes for a sandwich, soft drinks from the self-serve dispenser, the disposal of debris derived from the meal). This suggests a dramatic reorientation of theorizing about the economy away from production or consumption and in the direction of "prosumption."\n\nAccording to the text, what does Ritzer argue is the difference between production and consumption?',
    options:[
      'Production is creating, and consumption is using.',
      'Production is recent, and consumption is historical.',
      'Production is permanent, and consumption is temporary.',
      'They are opposite sides of the same spectrum.'
    ],
    answer:3, topic:'Information and Ideas'
  },
  {
    id:14, section:'rw', module:1,
    text:'The following poem was written by American poet Walt Whitman (1868).\n\nA noiseless patient spider,\nI mark\'d where on a little promontory it stood isolated,\nMark\'d how to explore the vacant vast surrounding,\nIt launch\'d forth filament, filament, filament, out of itself,\nEver unreeling them, ever tirelessly speeding them.\n\nAnd you O my soul where you stand,\nSurrounded, detached, in measureless oceans of space,\nCeaselessly musing, venturing, throwing, seeking the spheres to connect them,\nTill the bridge you will need be form\'d, till the ductile anchor hold,\nTill the gossamer thread you fling catch somewhere, O my soul.\n\nWhich of the following best describes the structure of the poem?',
    options:[
      'The first stanza is metaphorical, and the second stanza is literal.',
      'The first stanza admires the spider, and the second stanza reviles the spider.',
      'The first stanza is literal, and the second stanza is philosophical.',
      'The first stanza presents the spider as repulsive, and the second stanza personifies the spider.'
    ],
    answer:2, topic:'Craft and Structure'
  },
  {
    id:15, section:'rw', module:1,
    text:'The following passage is adapted from the Library of the Best American Literature, by William W. Birdsall and Rufus M. Jones (1897).\n\nIn his personality, his wide range of themes, his learning, and his wonderful power of telling stories in song, Henry Wadsworth Longfellow stood in his day and still stands easily in front of all other poets who have enriched American literature. <u>Admitting that he was not rugged and elemental like Bryant and did not possess the latter\'s feelings for the colossal features of wild scenery, that he was not profoundly thoughtful and transcendental like Emerson, that he was not so earnestly and passionately sympathetic as Whittier, nevertheless he was our first artist in poetry.</u> Bryant, Emerson, and Whittier commanded but a few stops of the grand instrument upon which they played; Longfellow understood perfectly all its capabilities.\n\nWhich choice best describes the function of the underlined sentence in the text as a whole?',
    options:[
      'It anticipates a possible criticism of Longfellow and answers it with a bold declaration.',
      'It affirms qualities that dismiss Longfellow from the ranks of great American poets.',
      'It provides specific examples to illustrate Longfellow\'s superiority to Bryant in depicting wild scenery.',
      'It illustrates a unique transcendent quality of Longfellow\'s poetry.'
    ],
    answer:0, topic:'Craft and Structure'
  },
  {
    id:16, section:'rw', module:1,
    text:'The following passage is an excerpt from GRE For Dummies, 8th edition, by Ron Woldoff and Joe Kraynak (Wiley).\n\nA key study has shown that the organic matter content of a soil can be altered to a depth of 10 cm or more by intense campfire heat. As much as 90 percent of the original organic matter may be oxidized in the top 1.3 cm of soil. In the surface 10 cm, the loss of organic matter may reach 50 percent if the soil is dry and the temperature exceeds 250 degrees. <u>The loss of organic matter reduces soil fertility and water-holding capacity and renders the soil more susceptible to compaction and erosion.</u>\n\nWhich of the following best describes the function of the underlined sentence in the text as a whole?',
    options:[
      'It elaborates on an example of organic matter as a measure of soil fertility.',
      'It explains the methodology used to determine soil fertility and water-holding capacity.',
      'It calls attention to the harmful effects of a common occurrence in campgrounds.',
      'It offers a solution to an unfortunate result of the increase in the popularity of camping.'
    ],
    answer:2, topic:'Craft and Structure'
  },
  {
    id:17, section:'rw', module:1,
    image:'assets/images/exam2/rw1_q17_beaver_cycle.png',
    text:'Land managers throughout the Puget Sound region are investing large sums of money and other resources to improve salmon habitat in streams and rivers. In the last 15 years, King County ecologists and land managers have seen a pattern of beavers colonizing these restoration sites anywhere from immediately to within 2 to 5 years of finishing a restoration project. Frequently, the beavers extensively browse newly planted vegetation. They have also built dams at some sites that flooded adjacent properties. Beaver colonization is now expected following construction of restoration projects along streams and rivers in King County, where restoration sites are usually also close to roads, culverts, farms, orchards, lawns, and houses. At the end of the summer, ____________.\n\nWhich choice most effectively uses information from the graphic and the text to complete the sentence?',
    options:[
      'beavers begin their mating season and mark their territory in preparation for giving birth.',
      'beavers build scent-mounds around the perimeter of their territory to indicate that a certain location is spoken for.',
      'properties located near beaver colonies will experience an increase in flooding as adolescent beavers join dam-building efforts.',
      'newly planted vegetation will flourish as beavers enter a period of hibernation and consume less food than usual.'
    ],
    answer:2, topic:'Information and Ideas'
  },
  {
    id:18, section:'rw', module:1,
    text:'Passage 1 is an excerpt from Novel Plant Bioresources by Gurib Fakim (Wiley). Passage 2 is an excerpt from Biology For Dummies, 2nd Edition, by Rene Kratz and Donna Siegfried (also published by Wiley).\n\nText 1\nThe loss in biodiversity could have effects beyond just the loss of individual species. Living things are connected to each other and their environment in how they obtain food and other resources necessary for survival. If one species depends on another for food, for example, then the loss of a prey species can cause a decline in the predator species.\n\nText 2\nBiodiversity increases the chance that at least some living things will survive in the face of large changes in the environment, which is why protecting it is crucial. The combined effect of various human actions in Earth\'s ecosystems is reducing the planet\'s biodiversity. In fact, the rate of extinctions is increasing along with the size of the human population. No one knows for certain how extensive the loss of species due to human impacts will ultimately be, but there\'s no question that human practices such as hunting and farming have already caused numerous species to become extinct.\n\nWith which of the following statements would both the writer of Text 1 and the writer of Text 2 agree?',
    options:[
      'Reliance on a small number of food sources is a problem now and may become more severe in the future.',
      'Extinction of species is a naturally occurring process and is independent of human intervention.',
      'The key to maintaining an adequate food supply is reducing the planet\'s biodiversity.',
      'Reducing the number of predator species is crucial to protecting human food supplies.'
    ],
    answer:0, topic:'Information and Ideas'
  },
  {
    id:19, section:'rw', module:1,
    text:'A century ago, a bird called the passenger pigeon lived in North America. There were so many passenger pigeons that people often saw great flocks of ____________ overhead containing thousands, even millions, of birds. Today, there is not a single one left. What happened? The passenger pigeon became extinct. All living passenger pigeons disappeared from the earth entirely.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options:['those who were','them flying','they were flying','whom were able to fly'],
    answer:1, topic:'Standard English Conventions'
  },
  {
    id:20, section:'rw', module:1,
    text:'At the end of each year, a revised figure of U.S. population estimates ____________ to update the short-term projections for the population clock. Once the updated series of monthly projections is completed, the daily population clock values are derived by interpolation.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options:['are used','is used','are being used','used'],
    answer:1, topic:'Standard English Conventions'
  },
  {
    id:21, section:'rw', module:1,
    text:'English Gothic architecture has been usually subdivided into three periods or stages of ____________ early stage, occupying the 13th century, is known as Early English.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options:['advancement, the','advancement; in the','advancement in the','advancement: The'],
    answer:3, topic:'Standard English Conventions'
  },
  {
    id:22, section:'rw', module:1,
    text:'Polar bears\' seasonal movements are driven by regional ice dynamics and can be quite extensive. Most polar bears remain with the pack ice as it recedes north during the summer melting season; ____________ along Alaska\'s Beaufort Sea coast, some polar bears also come on land to rest until shore-fast ice begins to develop along the coast in late fall and the pack ice advances south, once again providing them with a suitable platform for hunting seals.\n\nWhich choice completes the text with the most logical transition?',
    options:['however,','similarly,','consequently,','moreover,'],
    answer:0, topic:'Standard English Conventions'
  },
  {
    id:23, section:'rw', module:1,
    text:'Charlie hated driving home in a snowstorm. He was afraid his vision was impaired by the blowing snow and the wildly waving windshield wipers. Then, his worst fears were realized. While taking a few seconds to clean his glasses, ____________ skidded off the highway.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options:[
      'his car suddenly lurched to the left and',
      'Charlie\'s car suddenly swerved and',
      'his heart pounded wildly as he',
      'Charlie had to clutch the wheel quickly as his car'
    ],
    answer:1, topic:'Standard English Conventions'
  },
  {
    id:24, section:'rw', module:1,
    text:'The rivalry between tennis great Monica Seles and Steffi Graf began at the French Open Tournament in 1989. Their match in the semifinals ____________ eagerly watched by fans all over the world. Monica Seles was only 16 years old; Steffi Graf had the advantage in years and experience, and her wins in their first few matches established her strength. It was in their fourth encounter that Seles finally defeated the more established Graf.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options:['were','is','was','are'],
    answer:2, topic:'Standard English Conventions'
  },
  {
    id:25, section:'rw', module:1,
    text:'The Nez Percé National Historic Trail ranges from the ____________ incised Columbia River Plateau, across the Continental Divide and a succession of ranges, canyons, and valleys, through forests and plains, across thermal areas and major rivers. The Trail winds through some of the most rugged and spectacular scenery in western America.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options:['deeply','deep','deeper','deepest'],
    answer:1, topic:'Standard English Conventions'
  },
  {
    id:26, section:'rw', module:1,
    text:'While researching a topic, a student has taken the following notes:\n• An organism\'s complete set of DNA is called its genome. Virtually every single cell in the body contains a complete copy of the approximately 3 billion DNA base pairs, or letters, that make up the human genome.\n• With its four-letter language, DNA contains the information needed to build the entire human body.\n• A gene traditionally refers to the unit of DNA that carries the instructions for making a specific protein or set of proteins.\n• The human genome is a complete set of nucleic acid sequences for humans, encoded as DNA within the 23 chromosome pairs in cell nuclei and in a small DNA molecule found within individual mitochondria.\n• Unlocking the genetic code allows scientists to assess an individual\'s genetic susceptibility to specific diseases, to diagnose genetic disorders, and to formulate new drugs.\n• Proteins make up body structures like organs and tissue, as well as control chemical reactions and carry signals between cells. If a cell\'s DNA is mutated, an abnormal protein may be produced, which can disrupt the body\'s usual processes and lead to a disease such as cancer.\n\nThe student wants to emphasize the aim of the research study. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options:[
      'Each of the estimated 20,000 to 25,000 genes in the human genome codes for an average of three proteins.',
      'Understanding the structure and function of DNA and unlocking an individual\'s genetic code has helped scientists revolutionize the investigation of disease pathways.',
      'Abnormal proteins caused by mutated DNA can be the source of life-threatening diseases such as cancer.',
      'By mapping the human genome, scientists can obtain a complete set of nucleic acid sequences.'
    ],
    answer:1, topic:'Rhetorical Synthesis'
  },
  {
    id:27, section:'rw', module:1,
    text:'While researching a topic, a student has taken the following notes:\n\n| River Name | Countries | Outlet | Length in Miles |\n|---|---|---|---|\n| Amazon | Peru, Brazil | Atlantic Ocean | 3,900 |\n| Congo | Zaire, Congo, Angola | Atlantic Ocean | 3,900 |\n| Missouri-Mississippi | U.S. | Gulf of Mexico | 3,990 |\n| Nile | Uganda, Sudan, Egypt | Mediterranean Sea | 4,160 |\n| Huang He (Yellow R.) | China | Gulf of Bohai | 2,800 |\n\nThe student wants to compare the lengths of the two longest rivers. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options:[
      'While the Nile River in Egypt, Uganda, and Sudan is the longest river in the world, the Huang He River empties into the Gulf of Bohai.',
      'The five longest rivers in the world are the Amazon, the Congo, the Missouri-Mississippi, the Nile, and the Huang He.',
      'Of the five longest rivers in the world, two have their outlets in the Atlantic Ocean, while three others have their outlets in smaller bodies of water.',
      'At 4,160 miles, the longest river in the world is the Nile River, while the Missouri-Mississippi in the U.S. is the second longest at 3,990 miles long.'
    ],
    answer:3, topic:'Rhetorical Synthesis'
  }
];

// ── MODULE 1: Math ────────────────────────────
const E2_MATH_M1 = [
  {
    id:28, section:'math', module:1,
    text:'If 2a + 3b = 17 and 2a + b = 3, then a + b =',
    options:['1','5','7','10'],
    answer:1, topic:'Algebra'
  },
  {
    id:29, section:'math', module:1,
    text:'A bicycle has a front wheel radius of 15 inches. If the bicycle wheel travels 10 revolutions, how far has a point on the outside of the wheel traveled, in inches?',
    options:['10π','30π','300π','450π'],
    answer:2, topic:'Geometry'
  },
  {
    id:30, section:'math', module:1,
    text:'If p and q are positive integers, then (5⁻ᵖ)(5^(q+1))^p is equivalent to',
    options:['5^(pq+p)','5^pq','5^(pq-p)','5^(q+1)'],
    answer:1, topic:'Advanced Math'
  },
  {
    id:31, section:'math', module:1,
    text:'In a set of five positive whole numbers, the mode is 90 and the average (arithmetic mean) is 80. Which of the following statements is false?',
    options:[
      'The number 90 appears two, three, or four times in the set.',
      'The number 240 cannot appear in the set.',
      'The number 80 must appear exactly once in the set.',
      'The five numbers must have a sum of 400.'
    ],
    answer:2, topic:'Problem Solving & Data'
  },
  {
    id:32, section:'math', module:1,
    text:'In a triangle, the second side is 3 centimeters longer than the first side. The length of the third side is 5 centimeters less than twice the length of the first side. If the perimeter is 34 centimeters, find the length, in centimeters, of the longest side.',
    options:['3','9','12','13'],
    answer:3, topic:'Algebra'
  },
  {
    id:33, section:'math', module:1,
    text:'Melvin, Chris, Enoch, Dave, Carey, Mike, Dan, and Peter are choosing dorm rooms for college. Each room holds four people. They have the following requirements:\nI. Mike and Melvin refuse to live together.\nII. Enoch will live with Chris or Carey (or possibly both).\nIII. If Dave and Dan live together, Peter will live with them.\n\nWhen rooms are chosen, Melvin, Carey, and Dan live together. Which of the following groups must live in the other room?',
    options:['Chris, Dave, and Mike','Chris, Mike, and Peter','Dave, Enoch, and Peter','Dave, Mike, and Peter'],
    answer:3, topic:'Problem Solving & Data'
  },
  {
    id:34, section:'math', module:1,
    text:'If the distance from Springfield to Watertown is 13 miles and the distance from Watertown to Pleasantville is 24 miles, then the distance from Pleasantville to Springfield in miles could not be',
    options:['10','11','13','24'],
    answer:0, topic:'Geometry'
  },
  {
    id:35, section:'math', module:1,
    text:'In a certain game, there are only two ways to score points; one way is worth 3 points, and the other is worth 5 points. If Brandon\'s total score is 61, which of the following could be the number of 3-point scores that Brandon had?',
    options:['10','11','12','13'],
    answer:1, topic:'Problem Solving & Data'
  },
  {
    id:36, section:'math', module:1,
    text:'Which of the following complex numbers is equal to (2 − 3i) − (4i² + 5i) for i² = −1?',
    options:['6 + 2i','6 − 2i','6 − 8i','6 − 12i'],
    answer:0, topic:'Advanced Math'
  },
  {
    id:37, section:'math', module:1,
    text:'If the square of x is 12 less than the product of x and 5, which of the following expressions could be used to solve for x?',
    options:['x² = 5x − 12','x² = 12 − 5x','2x = 12 − 5x','2x = 5x − 12'],
    answer:0, topic:'Advanced Math'
  },
  {
    id:38, section:'math', module:1,
    text:'If 2y − c = 3c, then y =',
    options:['c/2','c','3c/2','2c'],
    answer:3, topic:'Algebra'
  },
  {
    id:39, section:'math', module:1,
    text:'The solution set to the equation |3x − 1| = 7 is',
    options:['{2}','{2, 2/3}','{−2, 2/3}','{−2, 8/3}'],
    answer:3, topic:'Advanced Math'
  },
  {
    id:40, section:'math', module:1,
    image:'assets/images/exam2/math1_q13_graph.png',
    text:'If this graph represents f(x), then the number of solutions to the equation f(x) = 1 is',
    options:['zero','one','two','three'],
    answer:2, topic:'Advanced Math'
  },
  {
    id:41, section:'math', module:1,
    text:'A square with an area of 25 is changed into a rectangle with an area of 24 by increasing the width and reducing the length. If the length was reduced by 2, by how much was the width increased?',
    options:['2','3','4','5'],
    answer:0, topic:'Algebra'
  },
  {
    id:42, section:'math', module:1,
    image:'assets/images/exam2/math1_q14_triangle_bac.png',
    text:'In triangle BAC shown, what is sin B?',
    options:['5/13','12/13','5/12','13/5'],
    answer:1, topic:'Geometry'
  },
  {
    id:43, section:'math', module:1,
    image:'assets/images/exam2/math1_q15_triangle.png',
    text:'In triangle ABC above, if sin B = 12/13 and cos B = 5/13, what is tan C?',
    options:['5/13','12/13','5/12','12/5'],
    answer:3, topic:'Geometry'
  },
  {
    id:44, section:'math', module:1,
    text:'Samira took four exams. Her scores on the first three were 89, 85, and 90. If her average (arithmetic mean) of all four exams was 90, what did she get on the fourth exam?',
    options:['90','92','94','96'],
    answer:3, topic:'Problem Solving & Data',
    isFillIn:true, fillAnswer:'96'
  },
  {
    id:45, section:'math', module:1,
    text:'If p > 0 and the distance between the points (4, −1) and (−2, p) is 10, find p.',
    options:['5','7','8','10'],
    answer:1, topic:'Geometry',
    isFillIn:true, fillAnswer:'7'
  },
  {
    id:46, section:'math', module:1,
    text:'If a − b = 8 and ab = 10, find a² + b².',
    options:['74','84','94','104'],
    answer:1, topic:'Advanced Math',
    isFillIn:true, fillAnswer:'84'
  },
  {
    id:47, section:'math', module:1,
    image:'assets/images/exam2/math1_q19_pyramid.png',
    text:'The preceding pyramid has a square base of length 10 centimeters and a height of 12 centimeters. Determine the total surface area of all five faces, in square centimeters.',
    options:['200','260','360','460'],
    answer:2, topic:'Geometry',
    isFillIn:true, fillAnswer:'360'
  },
  {
    id:48, section:'math', module:1,
    text:'If a > 0, which of the following statements must be true?\n(A) a² > a\n(B) a > 1/a\n(C) 2a > a\n(D) 1/a < 1',
    options:['a² > a','a > 1/a','2a > a','1/a < 1'],
    answer:2, topic:'Algebra'
  },
  {
    id:49, section:'math', module:1,
    image:'assets/images/exam2/math1_q21_parallel_lines.png',
    text:'In this diagram, AF ∥ ED, GB ∥ EF, and AG = GF. What is the length of AB?',
    options:['18','16','12','8'],
    answer:3, topic:'Geometry'
  },
  {
    id:50, section:'math', module:1,
    image:'assets/images/exam2/math1_q22_angle_p43.png',
    text:'In the preceding drawing, what is 5(sin θ)?',
    options:['3','4','5','3/5'],
    answer:0, topic:'Geometry',
    isFillIn:true, fillAnswer:'3'
  }
];

// ── MODULE 2: English (RW) ────────────────────
const E2_RW_M2 = [
  {
    id:51, section:'rw', module:2,
    text:'The paintings of Salvador Dali, the renowned surrealist artist, are immediately recognizable for their bizarre images and technical precision. He created highly personal paintings that broke with tradition and ____________ optical illusions.\n\nWhich choice completes the text with the most logical and precise word?',
    options:['featured','overwhelmed','discredited','renewed'],
    answer:0, topic:'Words in Context'
  },
  {
    id:52, section:'rw', module:2,
    text:'Two particularly useful ____________ of the timing of spring events are the first leaf dates and the first bloom dates of two flowering plants: lilacs and honeysuckles. These plants have an easily monitored flowering season, a relatively high survival rate, and a large geographic distribution.\n\nWhich choice completes the text with the most logical and precise word?',
    options:['effects','varieties','species','indicators'],
    answer:3, topic:'Words in Context'
  },
  {
    id:53, section:'rw', module:2,
    text:'Eighteenth-century stories of the strange appearance and behavior of an unidentified creature left naturalists ____________ as to what could fit its seemingly catch-all characteristics. The strange animal captured the imagination of scientists who did not know how to classify the duck-billed platypus. We now know that the platypus is a monotreme, an ancient type of mammal that lays eggs.\n\nWhich choice completes the text with the most logical and precise word?',
    options:['mystified','delighted','settled','confident'],
    answer:0, topic:'Words in Context'
  },
  {
    id:54, section:'rw', module:2,
    text:'Comparative genomics is directly related to evolution because all living things share a common ancestor. By using computer tools to examine genes that have remained the same in many organisms over millions of years, researchers can ____________ signals that control how genes work.\n\nWhich choice completes the text with the most logical and precise word?',
    options:['disrupt','locate','question','influence'],
    answer:1, topic:'Words in Context'
  },
  {
    id:55, section:'rw', module:2,
    text:'The Antiquities Act of 1906 was inspired by the need to ____________ ancient American Indian ruins in the southwestern United States during the 19th-century push to open the country\'s western frontier. One hundred years after its enactment, the Antiquities Act remains one of the nation\'s most important conservation laws.\n\nWhich choice completes the text with the most logical and precise word?',
    options:['raze','reconfigure','safeguard','complete'],
    answer:2, topic:'Words in Context'
  },
  {
    id:56, section:'rw', module:2,
    text:'The rather pedestrian plot of the film was elevated by its ____________ cinematography; the magnificent panoramas of the African veldt were photographed in stunning clarity and breathtaking beauty.\n\nWhich choice completes the text with the most logical and precise word?',
    options:['ordinary','abundant','exquisite','banal'],
    answer:2, topic:'Words in Context'
  },
  {
    id:57, section:'rw', module:2,
    text:'The following excerpt is adapted from Punch: Volume 118, Nos. 3052–3077.\n\n"Assuredly," I said. "We don\'t take enough advice, in my opinion — just as we don\'t take enough exercise or wholesome food. It is too much the fashion to ask advice and not take it. But if we modelled our lives on the disinterested opinion of other people, and availed ourselves of the combined judgment of our fellows, the world would be both happier and wiser in many directions. And if men knew when they were invited to express an opinion that it was no mere conventional piece of civility or empty compliment which prompted us to ask their criticism, consider how they would put their best powers forward."\n\nWhich of the following best expresses the primary claim of the speaker in the passage?',
    options:[
      'It is far healthier to follow one\'s personal inclination than to accept the opinions of others.',
      'The primary qualities that allow society to function are civility and good judgment in interpersonal interactions.',
      'Advice that is not requested should never be offered.',
      'Our lives would be improved if we were to seek and heed the objective opinions of others.'
    ],
    answer:3, topic:'Craft and Structure'
  },
  {
    id:58, section:'rw', module:2,
    text:'The following excerpt is from Bedouins by James Huneker (1920).\n\nSome years ago in Paris I saw and heard Mary Garden sing La Traviata. The singing was superlative; she then boasted a coloratura style that would surprise those who now only know her vocalization. <u>It was, however, the conception and acting that intrigued me.</u> Originality stamped both. The death scene was of unusual poignancy; evidently the young American had been spying upon Bernhardt and Duse.*\n\n*Sarah Bernhardt and Eleonora Giulia Amalia Duse were famous actresses of the late 19th century.\n\nWhich choice best states the function of the underlined sentence in the overall structure of the text?',
    options:[
      'To offer a criticism of the singer\'s performance',
      'To provide objectivity to an analysis of the singer\'s acting ability',
      'To indicate the qualities that fascinated the writer',
      'To praise the coloratura style of the singer'
    ],
    answer:2, topic:'Craft and Structure'
  },
  {
    id:59, section:'rw', module:2,
    text:'The following text is adapted from Democracy in America by Alexis de Tocqueville (1835).\n\nThe settlers who established themselves on the shores of New England all belonged to the more independent, knowledgeable, and skilled classes of their native country. Their union on the soil of America at once presented the singular phenomenon of a society containing neither lords nor common people, neither rich nor poor. These men possessed, in proportion to their number, a greater mass of intelligence than is to be found in any European nation of our own time. All, without a single exception, ____________.\n\nWhich choice most logically completes the text?',
    options:[
      'had received a good education, and many of them were known in Europe for their talents and their acquirements.',
      'belonged to the aristocracy and thus had been provided with the best tutors and instructors.',
      'had been either indentured servants in Europe or had been poor, so the New World offered them the opportunity to escape a life of servitude.',
      'had a natural affinity for the menial jobs required by the new settlements and put their physical prowess to good use as they attempted to carve a home out of the wilderness.'
    ],
    answer:0, topic:'Information and Ideas'
  },
  {
    id:60, section:'rw', module:2,
    text:'The following text is an excerpt from A Brief History of the Olympic Games by David C. Young (Wiley).\n\n"Victory by speed of foot is honored above all." Those are the words of Xenophanes, a 6th century B.C.E. philosopher who objected to athletes and their popularity. The phrase "speed of foot" may recall the words expressed in Homer\'s Odyssey stressing the glory which an athlete may win "with his hands or with his feet." The shortest foot race, the stade, was one length of the stadium track, the practical equivalent of our 200-meter dash (actually, only 192.27 meters at Olympia, the site of the original Olympic games). Greek tradition held that this 200-meter race was the first and only event held at the first Olympiad in 776 B.C.E.\n\nWhich of the following best states the purpose of the quotations in the text?',
    options:[
      'To offer conflicting opinions',
      'To establish an authoritative tone',
      'To invite the reader to conduct further research',
      'To give a sense of Greek literary style'
    ],
    answer:1, topic:'Craft and Structure'
  },
  {
    id:61, section:'rw', module:2,
    text:'The following passage is adapted from the Library of the Best American Literature, by William W. Birdsall and Rufus M. Jones (1897).\n\nAs a poet Poe ranks among the most original in the world. He is preeminently a poet of the imagination. He brings into his poetry all the weirdness, subtlety, artistic detail and facility in coloring which give the charm to his prose stories, and to these he adds a musical flow of language which has never been equalled. To him poetry was music, and there was no poetry that was not musical. For poetic harmony he has had no equal certainly in America, if, indeed, in the world. Admirers of his poems are almost sure to read them over and over again, each time finding new forms of beauty or charm in them, and the reader abandons himself to a current of melodious fancy that soothes and charms like distant music at night, or the rippling of a nearby, but unseen, brook. As one of his biographers has written, ____________\n\nWhich of the following quotations most logically and effectively completes the text?',
    options:[
      '"I never heard a voice so musical as his. It was full of the sweetest melody. No one who heard his recitation of the \'Raven\' will ever forget the beauty and pathos with which this recitation was rendered."',
      '"The images which he creates are vague and illusive."',
      '"The artful ingenuity with which he works up the details of his plot, and minute attention to the smallest illustrative particular, give his tales a vivid interest from which no reader can escape."',
      '"The scenes of gloom and terror which he loves to depict, the forms of horror to which he gives almost actual life, render his mastery over the reader most exciting and absorbing."'
    ],
    answer:0, topic:'Information and Ideas'
  },
  {
    id:62, section:'rw', module:2,
    text:'The following passage is adapted from A Practical Guide to Scientific Data Analysis by David J. Livingstone (Wiley-Blackwell).\n\nStatistics is often concerned with the treatment of a small number of samples which have been drawn from a much larger population. Each of these samples may be described by one or more variables which have been measured or calculated for that sample. For each variable there exists a population of samples. It is the properties of populations of variables that allow the assignment of probabilities, for example, ____________\n\nWhich choice completes the text with the most logical example?',
    options:[
      'all the characteristics of the sample that remain constant throughout the population.',
      'the total number of a population from which the samples have been chosen.',
      'the likelihood that the variable will fall into a particular range and the assessment of significance.',
      'the exact number of all the occurrences of a particular set of circumstances within a population.'
    ],
    answer:2, topic:'Information and Ideas'
  },
  {
    id:63, section:'rw', module:2,
    image:'assets/images/exam2/rw2_q13_tomato_chart.png',
    text:'Mr. Burns, concerned about the growth of his tomato plants in his garden, decides to conduct an experiment to test several recommended fertilizers to determine which one, if any, he should use to protect his plants from infestation. He uses three different fertilizers on his plants and measures them after four weeks to determine the most effective fertilizer. At the end of four weeks, Mr. Burns is pleased with the growth of Plant 5 but is puzzled by the results for Plant 3.\n\nWhich of the following would explain the discrepancy in the results of Mr. Burns\' experiment?',
    options:[
      'Mr. Burns used an automatic watering system that ensured the tomato plants received water at 5:00 a.m. and 5:00 p.m. each day.',
      'Mr. Burns planted the tomatoes in five different areas of his yard to protect them from overcrowding.',
      'Mr. Burns purchased tomato plants identical in size and type of tomato at the beginning of his experiment.',
      'Mr. Burns applied the fertilizer once a week in equal quantities.'
    ],
    answer:1, topic:'Information and Ideas'
  },
  {
    id:64, section:'rw', module:2,
    text:'The following passage is an excerpt from Biology For Dummies, 2nd Edition, by Rene Fester Kratz, PhD, and Donna Rae Siegfried (Wiley).\n\nThe cuticle is a layer of cells found on the top surfaces of a plant\'s leaves. It lets light pass into the leaf but protects the leaf from losing water. Many plants have cuticles that contain waxes that resist the movement of water into and out of a leaf, <u>much like wax on your car keeps water off the paint.</u> Guard cells are found on the bottom of a plant\'s leaves, near a stomate, a tiny opening that you can\'t see with your naked eye. (An individual opening is called a stomate, or stoma; several openings are called stomates, or stomata.)\n\nWhich of the choices describes the function of the underlined portion of the text?',
    options:[
      'It clarifies a function by using an analogy.',
      'It refutes an assertion in the first part of the sentence.',
      'It provides an example that is expanded upon in the next sentence.',
      'It indicates another function of the cuticle layer of cells in a plant.'
    ],
    answer:0, topic:'Craft and Structure'
  },
  {
    id:65, section:'rw', module:2,
    text:'The following passage is adapted from Dendroclimatic Studies: Tree Growth and Climate Change in Northern Forests, by Rosanne D\'Arrigo, Nicole Davi, Gordon Jacoby, Rob Wilson, and Greg Wiles (Wiley-Blackwell).\n\nThe science of dendroclimatology evolved from the need to understand past and present climate variability as well as the factors impacting tree growth and climate response on a range of spatial and vascular scales. Determination of how climate has varied in the past is also critically important for evaluating the sensitivity of the Earth\'s climate system to both natural and anthropogenic forces. <u>Yet instrumental observations are limited in length and spatial coverage, particularly in many remote, far-northern regions, where station records may only span a few decades.</u> Overcoming these limitations requires high-resolution, precisely dated proxy data archives, like tree rings, so that we may derive a long-term perspective for conditions during the recent anthropogenic era, during which profound and rapid changes are now taking place.\n\nWhich of the choices describes the function of the underlined portion of the text?',
    options:[
      'It summarizes the results of a study.',
      'It offers an example of how observations can assist by providing eyewitness evidence.',
      'It describes a shortcoming of a method of scientific investigation.',
      'It presents a central finding in the science of dendroclimatology.'
    ],
    answer:2, topic:'Craft and Structure'
  },
  {
    id:66, section:'rw', module:2,
    text:'The following excerpt is from Life on the Mississippi by Mark Twain (1883). The writer is recalling the time he spent as an assistant pilot on a steamboat.\n\nNow when I had mastered the language of this water and had come to know every trifling feature that bordered the great river as familiarly as I knew the letters of the alphabet, I had made a valuable acquisition. But I had lost something, too. I had lost something which could never be restored to me while I lived. All the grace, the beauty, the poetry had gone out of the majestic river! I still keep in mind a certain wonderful sunset which I witnessed when steamboating was new to me. A broad expanse of the river was turned to blood; in the middle distance the red hue brightened into gold, through which a solitary log came floating, black and conspicuous; in one place a long, slanting mark lay sparkling upon the water; in another the surface was broken by boiling, tumbling rings, that were as many-tinted as an opal . . .\n\nWhich choice best states the main idea of the text?',
    options:[
      'The writer is training to become a pilot because he wants to spend his days simply appreciating nature.',
      'The writer has gained technical knowledge of the river as a pilot but has lost an appreciation of its beauty.',
      'The beauty of the river hides a danger that an unsuspecting pilot might miss.',
      'Now that he has spent more time on the river, the writer is inspired to create a poem about his steamboat travels.'
    ],
    answer:1, topic:'Craft and Structure'
  },
  {
    id:67, section:'rw', module:2,
    image:'assets/images/exam2/rw2_q17_auto_table.png',
    text:'An automobile starts from rest and travels along a straight road. Point A is the starting point; Point E is the stopping point.\n\nWhich of the following choices is true based on the information in the chart?',
    options:[
      'During Interval B − C, the automobile is traveling at a constant speed.',
      'The automobile travels the farthest during Interval C − D.',
      'At the end of Interval D − E, the automobile is both stationary and farthest from the starting point.',
      'The automobile travels at the greatest speed during Interval A − B.'
    ],
    answer:3, topic:'Information and Ideas'
  },
  {
    id:68, section:'rw', module:2,
    image:'assets/images/exam2/rw2_q18_plants_table.png',
    text:'A conservation botanist studied the plants growing in an abandoned field. Once a year for 3 years, they checked the number of plants of each variety. Their results are indicated in the chart below.\n\nWhich choice is supported by the information in the chart?',
    options:[
      'Little Bluestem and Canada Goldenrod compete with one another for resources.',
      'All the plants are negatively impacted by climate change.',
      'Little Bluestem and Path Rush have similar life spans.',
      'Plant populations are replacing one another.'
    ],
    answer:3, topic:'Information and Ideas'
  },
  {
    id:69, section:'rw', module:2,
    text:'Listening to ____________ about flight delays, inaccurate train schedules, poorly maintained rental cars, and unsafe pedestrian pathways, it is rather tempting to stay home and cuddle up on the couch with a good book.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options:['traveler\'s stories\'','travelers\' stories','travelers stories','travelers\' story\'s'],
    answer:1, topic:'Standard English Conventions'
  },
  {
    id:70, section:'rw', module:2,
    text:'Inherit the Wind, a play by Jerome Lawrence and Robert E. Lee, is a fictionalized account of the famous Scopes "Monkey" trial in which the famous ____________ "what happened in a schoolroom of your town has unloosed a wicked attack from the big cities of the North!"\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options:[
      'attorney, Matthew Brady, claims to have come because,',
      'attorney Matthew Brady claims to have come because',
      'attorney, Matthew Brady, claims to have come because',
      'attorney Matthew Brady claims to have come, because'
    ],
    answer:1, topic:'Standard English Conventions'
  },
  {
    id:71, section:'rw', module:2,
    text:'The following passage is adapted from The Life of Ludwig van Beethoven by Alexander Wheelock Thayer (1921).\n\nIt is a family tradition that Louis van Beethoven, owing to some financial difficulties, secretly left his father\'s house at an early age and never saw it again. Gifted with a good voice and well educated musically, ____________ and applied for a vacant position as tenor, receiving it on November 2, 1731. A few days later the young man of 18 years was appointed substitute for three months for the singing master who had fallen ill.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options:[
      'it was the city of Louvain he first went to',
      'the city of Louvain was where he went',
      'Louvain was the destination where he went',
      'he first went to the city of Louvain'
    ],
    answer:3, topic:'Standard English Conventions'
  },
  {
    id:72, section:'rw', module:2,
    text:'The following was adapted from an article titled "Women in the Civil Rights Movement Historic Context Statement and AACRN Listing Guidance" on the National Park Service website.\n\nSeptima Poinsette Clark, the daughter of a formerly enslaved father and a free-born mother, was born in 1898 and raised in Charleston, South Carolina. After graduating from the Avery Normal Institute in 1916, Clark began her career as a teacher. Black teachers were not allowed to teach in the Charleston public schools ____________ found themselves teaching in rural, underfunded schools. After Clark joined the Charleston branch of the National Association for the Advancement of Colored People (NAACP), she began to get more involved in social justice issues.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options:['system, though; most','system, though, most','system; though. Most','system, though most,'],
    answer:1, topic:'Standard English Conventions'
  },
  {
    id:73, section:'rw', module:2,
    text:'Adult monarch butterflies are large and conspicuous, with bright orange wings surrounded by a black border and covered with black veins. The black border has a double row of white spots, present on the upper side of the wings. Adult monarchs are sexually dimorphic, with males having a narrower arrangement of veins and scent patches. The bright coloring of a monarch serves ____________ to predators that eating them can be toxic.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options:['to warn','as a warning','by warning','and it is a warning'],
    answer:1, topic:'Standard English Conventions'
  },
  {
    id:74, section:'rw', module:2,
    text:'Consumers are eagerly leasing and purchasing electric cars because these cars cause no air pollution, make little or no noise, and ____________.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options:['gas is not used for fuel.','they aren\'t using gas for fuel.','use no gas.','they don\'t use gas.'],
    answer:2, topic:'Standard English Conventions'
  },
  {
    id:75, section:'rw', module:2,
    text:'The birds of New Zealand had no natural predators, ____________ wings became unnecessary, and many varieties, including the kiwi and the kakapo parrot, became flightless.\n\nWhich choice completes the text with the most logical transition?',
    options:['predators, when','predators, but,','predators; therefore,','predators; nonetheless,'],
    answer:2, topic:'Standard English Conventions'
  },
  {
    id:76, section:'rw', module:2,
    text:'While researching a topic, a student has taken the following notes:\n• Robert Frost wrote the poem "Nothing Gold Can Stay" (1923), about how quickly things in nature fade.\n• Frost often wrote about scenes from rural life in New England.\n• The poem was published in a collection called New Hampshire the same year (1923), which would later win the 1924 Pulitzer Prize.\n• In "Nothing Gold Can Stay," Frost applies the images of nature to larger themes such as the passage of time.\n• Frost draws a parallel from nature to the short-lived quality of beauty, youth, and life.\n\nThe student wants to create a statement that will introduce the poet and his major themes to an audience unfamiliar with Robert Frost. Which choice most effectively uses information from the notes to accomplish this task?',
    options:[
      'Pulitzer Prize–winning poet Robert Frost often uses nature images from rural New England to express themes about nature and human existence.',
      'Robert Frost wrote "Nothing Gold Can Stay" in 1923, and the collection of poems that it was published in won a Pulitzer Prize.',
      '"Nothing Gold Can Stay," written by Robert Frost in 1923, is about the fleeting quality of nature, youth, and time.',
      'Robert Frost, who wrote many poems, is famous for his poems about life and nature.'
    ],
    answer:0, topic:'Rhetorical Synthesis'
  },
  {
    id:77, section:'rw', module:2,
    text:'While researching a topic, a student has taken the following notes:\n• The first book of the Harry Potter series by J.K. Rowling was published in 1997.\n• The series consists of seven books and has sold more than 500 million copies worldwide.\n• The books have been translated into 80 languages.\n• The series was adapted into an eight-film franchise that grossed over $7.7 billion globally.\n• J.K. Rowling is now one of the most recognized authors in the world.\n\nThe student wants to emphasize the global reach and commercial success of the Harry Potter franchise. Which choice most effectively accomplishes this goal?',
    options:[
      'J.K. Rowling\'s Harry Potter series, which began in 1997, became a global phenomenon, selling over 500 million books in 80 languages and generating over $7.7 billion in film revenue.',
      'Harry Potter was first published in 1997 and went on to become a series of seven books.',
      'J.K. Rowling is one of the most recognized authors in the world because of her Harry Potter series.',
      'The Harry Potter films were adapted from the book series and grossed billions of dollars.'
    ],
    answer:0, topic:'Rhetorical Synthesis'
  }
];

// ── MODULE 2: Math ────────────────────────────
const E2_MATH_M2 = [
  {
    id:78, section:'math', module:2,
    image:'assets/images/exam2/math2_q1_parallel_angles.png',
    text:'In the preceding diagram, x = 70° and y = 30°. The sum a + b + z equals',
    options:['90°','100°','120°','180°'],
    answer:1, topic:'Geometry'
  },
  {
    id:79, section:'math', module:2,
    text:'y = 20x + 25\n\nThe preceding equation models the total cost y, in dollars, that a sports shop charges a customer to rent a pair of skis for x days. The total cost consists of a flat fee plus a charge per day. When the equation is graphed in the xy-plane, what does the y-intercept of the graph represent in terms of the model?',
    options:['Total daily charges of $45','A flat fee of $25','A charge per day of $20','A charge per day of $25'],
    answer:1, topic:'Algebra'
  },
  {
    id:80, section:'math', module:2,
    image:'assets/images/exam2/math2_q3_parabola_options.png',
    text:'The above graph represents a function, f(x). Which of the following graphs could represent f(x + 4)?',
    options:['Graph A','Graph B','Graph C','Graph D'],
    answer:0, topic:'Advanced Math'
  },
  {
    id:81, section:'math', module:2,
    image:'assets/images/exam2/math2_q4_triangle_lmj.png',
    text:'In the diagram above, the measure of side j is',
    options:['7','7√2','7√3','14'],
    answer:0, topic:'Geometry'
  },
  {
    id:82, section:'math', module:2,
    text:'A cylindrical glass containing ice cubes is filled to the very top with iced tea. The base of the glass is 20 square centimeters and the height is 10 cm. If 78 cubic centimeters of iced tea is needed to fill the glass to the top, which of the following is closest to the total volume of ice cubes in the glass?',
    options:['22','78','122','145'],
    answer:2, topic:'Geometry'
  },
  {
    id:83, section:'math', module:2,
    text:'Max has three hours to study for his tests the next day. He decides to spend k percent of this time studying for math. Which of the following represents the number of minutes he will spend studying for math?',
    options:['k/300','3k/100','100k/180','180k/100'],
    answer:3, topic:'Algebra'
  },
  {
    id:84, section:'math', module:2,
    image:'assets/images/exam2/math2_q7_rectangles.png',
    text:'Given that ABCD and BDEF are rectangles, find the shaded area in this diagram.',
    options:['24','16√5','20','8√5'],
    answer:0, topic:'Geometry'
  },
  {
    id:85, section:'math', module:2,
    text:'A 26-inch-diameter bicycle wheel rotates a half turn. What is the exact distance traveled, in inches, of the logo printed on the edge of the wheel?',
    options:['26π','13π','6.5π','3.25π'],
    answer:1, topic:'Geometry'
  },
  {
    id:86, section:'math', module:2,
    text:'p(t) = 20,000(2)^(t/4)\n\nThe preceding equation represents the population of a yeast culture, p, for t weeks after the population was seeded. What is the population after 8 weeks?',
    options:['10,000','20,000','40,000','160,000'],
    answer:3, topic:'Advanced Math'
  },
  {
    id:87, section:'math', module:2,
    text:'A certain radioactive element has a half-life of 20 years. Thus, a sample of 100 grams deposited in 1980 would have decayed to 50 grams by 2000 and to 25 grams by 2020. How much of this sample would remain in 2100?',
    options:['25/16 grams','25/8 grams','25/4 grams','25/2 grams'],
    answer:1, topic:'Advanced Math'
  },
  {
    id:88, section:'math', module:2,
    text:'A circle in the xy-plane has the equation (x − 4)² + (y − 1)² = 9. Which of the following points lies in the interior of the circle?',
    options:['(−4, 1)','(−1, 1)','(0, 0)','(4, −1)'],
    answer:3, topic:'Geometry'
  },
  {
    id:89, section:'math', module:2,
    image:'assets/images/exam2/math2_q12_line_qp.png',
    text:'In this figure, the slope of line ℓ is −1/3, and M is the midpoint of the line PQ. What are the coordinates of Point P?',
    options:['(8, −1)','(9, −1)','(10, −2)','(11, −2)'],
    answer:3, topic:'Algebra'
  },
  {
    id:90, section:'math', module:2,
    text:'If ab = n, b + c = x, and n ≠ 0, which of the following must equal n?',
    options:['ax + c','ax − c','a(x − c)','x(a − c)'],
    answer:2, topic:'Algebra'
  },
  {
    id:91, section:'math', module:2,
    text:'The number g is divisible by 3 but not by 9. Which of the following could be the remainder when 7g is divided by 9?',
    options:['0','2','4','6'],
    answer:3, topic:'Problem Solving & Data'
  },
  {
    id:92, section:'math', module:2,
    text:'Darren receives $15 an hour for his afterschool job but gets paid 1½ times this rate for each hour he works on a weekend. If he worked 18 hours one week and received $315, how many of these hours did he work during the weekend?',
    options:['3','4','6','8'],
    answer:2, topic:'Algebra',
    isFillIn:true, fillAnswer:'6'
  },
  {
    id:93, section:'math', module:2,
    text:'In a school survey, 40% of all students chose history as their favorite subject; 25% chose English; and 14 students chose some other subject as their favorite. How many students were surveyed?',
    options:['28','35','40','56'],
    answer:2, topic:'Problem Solving & Data',
    isFillIn:true, fillAnswer:'40'
  },
  {
    id:94, section:'math', module:2,
    text:'If √|x + 3| = 3 and x ≥ 0, what is the value of x?',
    options:['3','6','9','12'],
    answer:1, topic:'Advanced Math',
    isFillIn:true, fillAnswer:'6'
  },
  {
    id:95, section:'math', module:2,
    text:'y = x² − 2x + 6\ny = 2x + 3\n\nIf the ordered pair (x, y) satisfies the preceding system of equations, what is one possible value of x?',
    options:['1','3','5','7'],
    answer:1, topic:'Advanced Math',
    isFillIn:true, fillAnswer:'1 or 3'
  },
  {
    id:96, section:'math', module:2,
    text:'To rent a private party room in a restaurant, there is a fixed cost plus an additional fee per person. If the cost of a party of 8 is $270 and the cost of a party of 10 is $320, find the cost, in dollars, of a party of 18.',
    options:['450','470','490','520'],
    answer:3, topic:'Algebra',
    isFillIn:true, fillAnswer:'520'
  },
  {
    id:97, section:'math', module:2,
    text:'The volume of a gas, V, in cubic centimeters (cc), is directly proportional to its temperature, T, in Kelvins (K). If a gas has a volume of 31.5 cc at 210 K, then its volume at 300 K would be',
    options:['121.5 cc','49 cc','45 cc','22.05 cc'],
    answer:2, topic:'Algebra'
  },
  {
    id:98, section:'math', module:2,
    image:'assets/images/exam2/math2_q21_scatter.png',
    text:'If the data in the preceding scatter plot were approximated by a linear function, the line would come closest to which pair of points?',
    options:['A and B','A and C','B and C','C and D'],
    answer:1, topic:'Problem Solving & Data'
  },
  // {
  //   id:99, section:'math', module:2,
  //   text:'Siva invested $1,200 into two accounts. One account yields 5 percent simple annual interest, and the other yields 7 percent simple annual interest. If after exactly one year, the two investments yielded a total of $74 in interest, how much, in dollars, was invested into the account earning 5 percent interest? Ignore the dollar sign when placing your answer.',
  //   options:['400','500','600','700'],
  //   answer:1, topic:'Algebra',
  //   isFillIn:true, fillAnswer:'500'
  // }
];

// ── Combine all questions for Exam 2 ──────────
const QUESTIONS2 = [...E2_RW_M1, ...E2_MATH_M1, ...E2_RW_M2, ...E2_MATH_M2];

// ── Module config for Exam 2 (2 modules only) ─
const MODULE_MAP2 = {
  1: { id:1, label:'Module 1 – English & Math', timeMin:67, startIdx:0,  count:49 },
  2: { id:2, label:'Module 2 – English & Math', timeMin:67, startIdx:49, count:50 },
};

// ── Topic Map ─────────────────────────────────
const TOPIC_MAP2 = {
  'Words in Context':           { name: 'Words in Context',           questions: QUESTIONS2.filter(q=>q.topic==='Words in Context').map(q=>q.id) },
  'Craft and Structure':        { name: 'Craft and Structure',        questions: QUESTIONS2.filter(q=>q.topic==='Craft and Structure').map(q=>q.id) },
  'Information and Ideas':      { name: 'Information and Ideas',      questions: QUESTIONS2.filter(q=>q.topic==='Information and Ideas').map(q=>q.id) },
  'Standard English Conventions':{ name: 'Standard English Conventions', questions: QUESTIONS2.filter(q=>q.topic==='Standard English Conventions').map(q=>q.id) },
  'Rhetorical Synthesis':       { name: 'Rhetorical Synthesis',       questions: QUESTIONS2.filter(q=>q.topic==='Rhetorical Synthesis').map(q=>q.id) },
  'Algebra':                    { name: 'Algebra',                    questions: QUESTIONS2.filter(q=>q.topic==='Algebra').map(q=>q.id) },
  'Advanced Math':              { name: 'Advanced Math',              questions: QUESTIONS2.filter(q=>q.topic==='Advanced Math').map(q=>q.id) },
  'Problem Solving & Data':     { name: 'Problem Solving & Data',     questions: QUESTIONS2.filter(q=>q.topic==='Problem Solving & Data').map(q=>q.id) },
  'Geometry':                   { name: 'Geometry',                   questions: QUESTIONS2.filter(q=>q.topic==='Geometry').map(q=>q.id) },
};

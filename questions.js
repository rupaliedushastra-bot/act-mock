// =============================================
// Digital SAT – Practice Exam 1
// Section 1: Reading & Writing (Module 1: 27 Qs, Module 2: 27 Qs)
// Section 2: Math (Module 1: 22 Qs, Module 2: 22 Qs)
// Total: 98 Questions
// answers: 0=A, 1=B, 2=C, 3=D
// fill-in answers stored as strings in fillAnswer
// =============================================

// ── SECTION 1: Reading & Writing ─────────────
const RW_MODULE1 = [
  {
    id: 1, section: 'rw', module: 1,
    text: 'First Woman tells the tale of Callie Rodriguez, the first woman to explore the Moon. While Callie is a fictional character, the first female astronaut and person of color will soon set foot on the Moon — an historic milestone and part of upcoming NASA Artemis missions. Through a series of graphic novels and digital platforms, First Woman aims to ________ audiences and inspire the next generation of explorers who will return to the Moon.\n\nWhich choice completes the text with the most logical and precise word or phrase?',
    options: ['anticipate', 'captivate', 'decimate', 'peruse'],
    answer: 1, topic: 'Words in Context'
  },
  {
    id: 2, section: 'rw', module: 1,
    text: 'Modern communication has evolved to the point that door-to-door mail delivery is practically ____________; that is, as out-of-date as having your mail delivered today by a mailman in a horse-drawn cart.\n\nWhich choice completes the text with the most logical and precise word or phrase?',
    options: ['practical', 'unexpected', 'obsolete', 'insular'],
    answer: 2, topic: 'Words in Context'
  },
  {
    id: 3, section: 'rw', module: 1,
    text: 'Poets use the beauty of nature and its quickly changing seasons to make a statement about the futility of protesting change. They compare human lives to the evanescence of spring, ___________ their brief existences with the permanence of the giant boulders that dot the vast landscape.\n\nWhich choice completes the text with the most logical and precise word or phrase?',
    options: ['opposing', 'contrasting', 'relating', 'observing'],
    answer: 1, topic: 'Words in Context'
  },
  {
    id: 4, section: 'rw', module: 1,
    text: 'Loss of forested areas poses an increasing threat to the integrity of the nation\'s natural resources. As these areas are fragmented and disappear, so do the benefits they provide. By providing economic incentives to landowners to keep their forests as forests, we can ___________ sustainable forest management and support strong markets for forest products.\n\nWhich choice completes the text with the most logical and precise word or phrase?',
    options: ['access', 'determine', 'enrich', 'encourage'],
    answer: 3, topic: 'Words in Context'
  },
  {
    id: 5, section: 'rw', module: 1,
    text: 'American bison once numbered 60 million in North America, with the population anchored in what is now the central United States. Many Indigenous cultures, especially in areas where the species was most abundant, developed strong ties with bison and relied upon them for sustenance, shelter, and cultural and religious practices. In the 19th century, bison were nearly driven to extinction through uncontrolled hunting and a U.S. policy of eradication tied to intentional harm against and control of Tribes. By 1889, only a few hundred wild bison remained. The __________ of bison contributed to the decline of healthy grassland ecosystems and, eventually, to the Dust Bowl in the 1930s.\n\nWhich choice completes the text with the most logical and precise word or phrase?',
    options: ['persecution', 'enhancement', 'identification', 'persistence'],
    answer: 0, topic: 'Words in Context'
  },
  {
    id: 6, section: 'rw', module: 1,
    text: 'The following text is an excerpt from Labour Policy — False and True by Lynden Macassey (1922).\n\nOur great industrial difficulty, under modern conditions, is to combine human development with human work, and persuade people to be industrious. Formerly, people worked to benefit themselves; now, they are apt to refrain from working for fear they may benefit others. The injury to employers from such a course is evident; but the detriment to the workers themselves is less obvious, and the __________ effect on the community is seldom realized.\n\nWhich choice completes the text with the most logical and precise word or phrase?',
    options: ['beneficial', 'common', 'inconclusive', 'calamitous'],
    answer: 3, topic: 'Words in Context'
  },
  {
    id: 7, section: 'rw', module: 1,
    text: 'The following text is an excerpt from Daughter of the Sky: The Story of Amelia Earhart by Paul L. Briand Jr. (1960). In this scene, Amelia Earhart, formerly a social worker, is being interviewed to be the first woman to fly across the Atlantic.\n\n"The demure Boston social worker survived the examination. Recalling the experience, Amelia said later: \'I found myself in a curious situation. If they did not like me at all or found me wanting in too many respects, I would be deprived of the trip. If they liked me too well, they might be loath to drown me. It was, therefore, necessary for me to maintain an attitude of impenetrable mediocrity. Apparently I did, because I was chosen.\'"\n\nTo what quality does Amelia Earhart attribute her success in the interview?',
    options: ['her blazing courage', 'her innate curiosity', 'her opaque ordinariness', 'her demure respectfulness'],
    answer: 2, topic: 'Craft and Structure'
  },
  {
    id: 8, section: 'rw', module: 1,
    text: 'Honey bees are not native to the New World; they were brought here from Europe in the 1500s and 1600s by colonists. But many of our crops also came from the Old World and evolved in the same places as honey bees. Native pollinators exist in the United States, but honey bees are more prolific and easier to manage, especially on a commercial level for pollination of a wide variety of crops. <u>Almonds, for example, are almost completely dependent on honey bees for pollination.</u> In California, the almond industry makes use of almost three-quarters of all managed honeybee colonies in the United States brought from all over the country during one short window of time in January and February each year.\n\nWhich of the following best describes the function of the underlined sentence in the text as a whole?',
    options: [
      'It makes an assertion that the next sentence develops.',
      'It provides a specific detail that supports the writer\'s central claim.',
      'It identifies a crop that is native to Southern California.',
      'It provides an example of a crop that is not dependent on pollination by honey bees.'
    ],
    answer: 1, topic: 'Craft and Structure'
  },
  {
    id: 9, section: 'rw', module: 1,
    text: 'The following excerpt contains the concluding lines from Sonnet 73 by William Shakespeare. The speaker of the poem directly addresses someone he loves.\n\nIn me thou see\'st the glowing of such fire,\nThat on the ashes of his youth doth lie\nAs the deathbed whereon it must expire,\nConsumed with that which it was nourished by.\nThis thou perceivest, which makes thy love more strong.\nTo love that well which thou must leave ere long.\n\nWhich of the following best expresses the speaker\'s claim about his lover\'s reaction to his words?',
    options: [
      'You see that I will soon die, and that understanding makes you love me more.',
      'You will be quickly consumed by the fires of passion and will cease to love me.',
      'Your love for me will fade away and die when I am no longer in your presence.',
      'Your youth prevents you from understanding the significance of true love and you will leave me.'
    ],
    answer: 0, topic: 'Craft and Structure'
  },
  {
    id: 10, section: 'rw', module: 1,
    text: 'Carbon is the basic building block of forests. Trees naturally absorb carbon dioxide (CO₂) through the process of photosynthesis and store it as carbon. That carbon gets locked in the trunks, roots, and leaves of trees and is deposited in surrounding soils for long periods of time. Carbon dioxide (CO₂) is the most pervasive greenhouse gas (GHG) driving rising global temperatures, so forests play a critical role in moderating CO₂ and reducing the impact of climate change.\n\nWhich of the following would provide the strongest counterargument to the claim in this passage?',
    options: [
      'At several points in history, global average temperatures have been warmer than those currently observed.',
      'Atmospheric CO₂ levels positively correlate to average global temperatures and are currently at the highest levels ever recorded.',
      'Climate is always changing, and the changes in the past century are not any more dramatic than those in previous centuries.',
      'Climate changes like rising sea levels are unrelated to greenhouse gas emissions.'
    ],
    answer: 2, topic: 'Information and Ideas'
  },
  {
    id: 11, section: 'rw', module: 1,
    text: 'Secretary of the Interior Deb Haaland made history by becoming the first Native American to serve as a U.S. cabinet secretary. Her life story is a legacy of firsts. After running for New Mexico Lieutenant Governor in 2014, Secretary Haaland became the first Native American woman to be elected to lead a state party. She is one of the first Native American women to serve in Congress and her family has a history of public service: Her father served as a 30-year combat Marine, and her mother is a Navy veteran who served as a federal employee for 25 years at the Bureau of Indian Affairs.\n\nWhich choice concludes the paragraph most effectively?',
    options: [
      'At the age of 28, Haaland enrolled at the University of New Mexico (UNM) where she earned a Bachelor\'s degree in English and later earned her J.D. from UNM Law School.',
      'Secretary Haaland grew up in a military family; her father was a 30-year combat Marine, and, as a military child, she attended 13 public schools before graduating from Highland High School in Albuquerque.',
      'Secretary Haaland ran her own small business producing and canning Pueblo Salsa, served as a tribal administrator at San Felipe Pueblo, and became the first woman elected to the Laguna Development Corporation Board of Directors.',
      'As a 35th-generation New Mexican and member of the Pueblo of Laguna, Secretary Haaland has broken barriers and her achievements have opened the doors of opportunity for future generations.'
    ],
    answer: 3, topic: 'Information and Ideas'
  },
  {
    id: 12, section: 'rw', module: 1,
    text: 'While phosphorus is a naturally occurring and essential nutrient for plants and animals, too much of it can cause explosive growth of aquatic plants and algae. This can lead to a variety of water quality problems, including low dissolved oxygen concentrations, which can cause fish kills and harm other aquatic life. A major concern with phosphorus in lakes is a toxic blue-green algae bloom that can cause the lake to be closed to recreation and private landowners.\n\nWhich of the following statements by conservation or health experts best support the claim in the passage?',
    options: [
      '"Habitat loss, fragmentation, and degradation are some of the primary factors in the decline of native species."',
      '"This project seeks to preserve and restore the ecosystems through partnerships between government and private sources. Let\'s get it started."',
      '"High levels of phosphorus are detrimental to both people and wildlife — just a couple licks of contaminated water can be lethal for pets; it\'s pretty bad stuff."',
      '"Phosphorus plays key roles in regulation of gene transcription, activation of enzymes, maintenance of normal pH in extracellular fluid, and intracellular energy storage."'
    ],
    answer: 2, topic: 'Information and Ideas'
  },
  {
    id: 13, section: 'rw', module: 1,
    text: 'The following excerpt is from O Pioneers! by Willa Cather (1913).\n\nOf all the bewildering things about a new country, the absence of human landmarks is one of the most depressing and disheartening. The houses were small and were usually tucked away in low places; you did not see them until you came directly upon them. Most of them were built of the sod itself, and were only the inescapable ground in another form. The roads were but faint tracks in the grass, and the fields were scarcely noticeable. The record of the plow was insignificant, like the feeble scratches on stone left by prehistoric races, so indeterminate that they may, after all, be only the markings of glaciers, and not a record of human strivings.\n\nThe comparison between the plowed fields and "the feeble scratches on stone left by prehistoric races" serves which of the following functions in the text?',
    options: [
      'To introduce the idea of human weakness',
      'To show that this settlement has a long history',
      'To describe the effects of glaciers',
      'To emphasize the primitive quality of the farming'
    ],
    answer: 3, topic: 'Craft and Structure'
  },
  {
    id: 14, section: 'rw', module: 1,
    image: 'assets/images/rw_m1_q14_map.png',
    text: 'The map represents the change in the number of students who experienced homelessness in school years 2018–2019 and 2020–2021. However, various factors impact data on students who experienced homelessness, making it important to consider recent decreases within the context of longer-term trends. For example, states that experience major natural disasters such as hurricanes and flooding typically identify a larger number of students as homeless in the school year when the disaster occurs.\n\nBased on the information in the text and in the map, which of the following might account for the decrease in homeless students in certain states in the years immediately after a natural disaster like a hurricane?',
    options: [
      'During a natural disaster, many students move from their home state to another state and remain homeless in their new location.',
      'In certain states that are subject to frequent hurricanes, many students are unable to return to homes that were destroyed and cannot be rebuilt.',
      'During the year the disaster occurs, many students find themselves homeless and the number of homeless students rises; within the next year, however, many of these students obtain housing.',
      'A factor that impacted student homelessness was a decrease in student enrollment overall during the COVID-19 pandemic.'
    ],
    answer: 2, topic: 'Information and Ideas'
  },
  {
    id: 15, section: 'rw', module: 1,
    text: 'The following passage is an excerpt from Biology For Dummies, 2nd Edition, by Rene Kratz and Donna Siegfried (Wiley).\n\nSome species, called keystone species, are so connected with other organisms in their environment that their extinction changes the entire composition of species in the area. As biodiversity decreases, keystone species may die out, causing a ripple effect that leads to the loss of many more species. If biodiversity gets too low, then the future of life itself becomes threatened. An example of a keystone species is the purple sea star, which lives on the northwest Pacific coast of the United States. Purple sea stars prey on mussels in the intertidal zone. When the sea stars are present, they keep the mussel population in check, allowing a great diversity of other marine animals to live in the intertidal zone. If the sea stars are removed from the intertidal zone, however, the mussels take over, and many species of marine animals disappear from the environment.\n\nThe text implies which of the following about large populations of mussels?',
    options: [
      'They become keystone species in their environment.',
      'They may displace other species.',
      'They do not compete for food with purple sea stars.',
      'They are a major cause of extinctions.'
    ],
    answer: 1, topic: 'Information and Ideas'
  },
  {
    id: 16, section: 'rw', module: 1,
    text: 'About a century ago, in August 1914, what participants called "The Great War" and, ironically, "The War to End All Wars," __________. We know this conflict as World War I, one of the bloodiest periods in human history. When it ended in 1918, about 9 million soldiers were dead and the health of 7 million more was permanently disabled.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['begun', 'had began', 'has begun', 'had begun'],
    answer: 3, topic: 'Standard English Conventions'
  },
  {
    id: 17, section: 'rw', module: 1,
    text: 'After working on the construction of his dream go-kart for seven months, David decided to test it out. He took it to the top of the hill in his neighborhood park. Turning around to greet his friends as they arrived for the inaugural run, he momentarily let go of the tethers. The runaway go-kart sped down the __________ momentum as it careened out of control.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['hill; gaining', 'hill. Gaining', 'hill, gaining', 'hill gaining'],
    answer: 2, topic: 'Standard English Conventions'
  },
  {
    id: 18, section: 'rw', module: 1,
    text: 'In 1859, Thomas Austin, an Australian who enjoyed hunting, released 24 rabbits on his land. The hunter stated that "introduction of a few rabbits could do little harm" and "might provide a touch of home." He liked to hunt. Before this time, __________ some domestic rabbits in Australia, mostly in cages or other enclosures. With a moderate climate, the wild rabbits bred all year round. Soon Australia had a rabbit problem with more than 200 million rabbits overrunning the land.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options: [
      'there had been',
      'there has been',
      'there was being',
      'there were been'
    ],
    answer: 0, topic: 'Standard English Conventions'
  },
  {
    id: 19, section: 'rw', module: 1,
    text: 'Named in honor of the __________ from the 1804 Lewis and Clark Expedition who guided them through the Shoshone homeland, Sacajawea Peak stands at 9,838 feet. The first recorded ascent of the peak in the Bitterroot Mountains of Montana was in 1898.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options: [
      'Shoshone guide',
      'Shoshone guide, Sacajawea,',
      'Shoshone guide; Sacajawea,',
      'Shoshone guide — Sacajawea —'
    ],
    answer: 1, topic: 'Standard English Conventions'
  },
  {
    id: 20, section: 'rw', module: 1,
    text: 'The NASA Juno mission, launched in August of 2011, reached Jupiter in July 2016. Juno takes pictures and records data about Jupiter\'s atmosphere and magnetic field. NASA releases the raw images for the public to download, and citizen scientists from around the world __________ them into stunning works of art.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['transform', 'transforms', 'has transformed', 'is transforming'],
    answer: 0, topic: 'Standard English Conventions'
  },
  {
    id: 21, section: 'rw', module: 1,
    text: 'The view from the top of the mountain was breathtaking. __________ looking out over the sweeping expanse of pine trees and distant peaks, we felt a sense of peace and wonder that we had rarely experienced in our busy urban lives.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['Because', 'As', 'While', 'Although'],
    answer: 2, topic: 'Standard English Conventions'
  },
  {
    id: 22, section: 'rw', module: 1,
    text: 'The NASA Juno mission provided new data about Jupiter. Researchers studying the data found that the planet\'s atmosphere is far more complex than previously thought. The Great Red Spot, a centuries-old storm __________ larger than Earth, has been shrinking, and scientists are eager to understand why.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['that is once', 'once', 'that was once', 'once was'],
    answer: 2, topic: 'Standard English Conventions'
  },
  {
    id: 23, section: 'rw', module: 1,
    text: 'Architect I. M. Pei is celebrated for his brilliant designs that have become attractions in themselves. __________ the Louvre Pyramid in Paris, France, has become one of the most recognizable structures in the world, blending modernity with the historic palace that surrounds it.\n\nWhich choice completes the text with the most logical transition?',
    options: ['On the contrary,', 'For example,', 'As a result,', 'However,'],
    answer: 1, topic: 'Standard English Conventions'
  },
  {
    id: 24, section: 'rw', module: 1,
    text: 'While researching a topic, a student has taken the following notes:\n• Elizabeth Blackwell was the first woman to receive a medical degree in the United States, in 1849.\n• She applied to multiple medical schools before being accepted at Geneva Medical College.\n• Male students at Geneva Medical College voted to admit her as a joke, not expecting her to attend.\n• She graduated first in her class.\n• Blackwell founded the New York Infirmary for Indigent Women and Children, where she trained other women to become nurses and doctors.\n\nThe student wants to emphasize the distinguishing qualities of Elizabeth Blackwell. Which choice most effectively accomplishes this goal?',
    options: [
      'Although she lived in Medieval times, Hildegard of Bingen was a trailblazer who created a path for Elizabeth Blackwell to follow.',
      'Without the intervention of the males in her medical school class at Geneva Medical College, Elizabeth Blackwell would never have become the first female physician in the U.S.',
      'Following a path first blazed by Hildegard of Bingen, Elizabeth Blackwell overcame gender discrimination with courage and determination and established the place of women as professional healthcare providers.',
      'By admitting Elizabeth Blackwell, Geneva Medical College took the first steps toward establishing a place for women in the practice of medicine.'
    ],
    answer: 2, topic: 'Rhetorical Synthesis'
  },
  {
    id: 25, section: 'rw', module: 1,
    text: 'The value of Paramhansa Yogananda\'s Autobiography of a Yogi as a spiritual text lies in its __________ presentation of Eastern philosophy to a Western audience. The book introduced countless readers to meditation, yoga, and the concept of self-realization.\n\nWhich choice completes the text with the most logical and precise word or phrase?',
    options: ['confusing', 'hostile', 'accessible', 'scholarly'],
    answer: 2, topic: 'Words in Context'
  },
  {
    id: 26, section: 'rw', module: 1,
    text: 'While researching a topic, a student has taken the following notes:\n• The density of Jupiter is 1.326 g/cm³.\n• Jupiter is larger than any other planet in the solar system.\n• The stripes and swirls on the surface of Jupiter are cold, windy clouds of ammonia and water.\n• The density of Saturn is 0.687 g/cm³.\n• Saturn has the most complicated rings — primarily chunks of ice — of any planet.\n• Saturn is a massive ball made mostly of hydrogen and helium.\n\nThe student wants to compare the size of the two planets. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: [
      'Some of the planets in the solar system like Jupiter and Saturn are mostly composed of gases.',
      'Both Saturn and Jupiter have distinctive surface features which have been captured in images taken by NASA spacecraft.',
      'Although both Saturn and Jupiter are composed of similar gases, Jupiter is bigger and denser than Saturn.',
      'Saturn\'s rings are composed mostly of chunks of ice while Jupiter\'s distinctive stripes and swirls are clouds.'
    ],
    answer: 2, topic: 'Rhetorical Synthesis'
  },
  {
    id: 27, section: 'rw', module: 1,
    text: 'While researching a topic, a student has taken the following notes:\n• An enormous crash near Johannesburg, South Africa, created the Vredefort crater, presently about 9 miles in diameter.\n• Based on physical evidence, scientists postulate that what was likely an asteroid crashed into Earth about 2 billion years ago.\n• Scientists speculate that the crater was originally much larger and that erosion has made it difficult to estimate its original size.\n• Scientists study the crater to gain new insights into the environments of early Earth because it provides invaluable information about the past.\n• Scientists try to simulate the impacts of such events on Earth to determine their effects in the past and the future.\n\nThe student wants to create a statement of the significance of the findings obtained from the study of the Vredefort crater. Which choice most effectively accomplishes the student\'s goal?',
    options: [
      'The discovery of the Vredefort crater was a great boon to scientists because it happened about 2 billion years ago.',
      'The Vredefort crater is important to scientists in that it preserves an almost continuous record of Earth\'s history.',
      'Because of their work on the Vredefort crater, scientists can simulate impact events on Earth and other planets.',
      'The team studying the crater has used a modern approach to obtain new insights into the environment of early Earth.'
    ],
    answer: 1, topic: 'Rhetorical Synthesis'
  }
];

const RW_MODULE2 = [
  {
    id: 28, section: 'rw', module: 2,
    text: 'Fungus beetles thrive in moist conditions where they feed on the mold that forms in these environments. Because their food is readily available and easily accessed, they are quite _________ and seldom move more than a foot or two in any direction.\n\nWhich choice completes the text with the most logical and precise word?',
    options: ['sociable', 'fragile', 'sedentary', 'scarce'],
    answer: 2, topic: 'Words in Context'
  },
  {
    id: 29, section: 'rw', module: 2,
    text: 'Biodiversity increases the chance that at least some living things will survive in the face of large changes in the environment, which is why protecting it is __________. The combined effect of various human actions in Earth\'s ecosystems is reducing the planet\'s biodiversity. In fact, the rate of extinctions is increasing along with the size of the human population. No one knows for certain how extensive the loss of species due to human impacts will ultimately be, but there\'s no question that human practices such as hunting and farming have already caused numerous species to become extinct.\n\nWhich choice completes the text with the most logical and precise word?',
    options: ['crucial', 'unimportant', 'reliable', 'inadequate'],
    answer: 0, topic: 'Words in Context'
  },
  {
    id: 30, section: 'rw', module: 2,
    text: 'In their various industries, the Egyptians made use of gold, silver, bronze, metallic iron, and copper, and their oxides, manganese, cobalt, alum, cinnabar, indigo, madder, brass, white lead, and lampblack. There is clear evidence that they smelted iron ore as early as 3400 b.c.e., maintaining a blast by means of leather tread-bellows. They also __________ temper the metal, and to make helmets, swords, lance-points, ploughs, tools, and other implements of iron.\n\nWhich choice completes the text with the most logical and precise word?',
    options: ['refused to', 'were reluctant to', 'contrived to', 'grew to'],
    answer: 2, topic: 'Words in Context'
  },
  {
    id: 31, section: 'rw', module: 2,
    text: 'Clouds are an important area of research on Mars (and on Earth, too) because of their feedback on the climate — they can reflect incoming sunlight, which has a cooling effect, and _________ the planet\'s outgoing infrared radiation, which has a warming effect. In fact, clouds may have played a crucial role in sustaining a warm atmosphere on early Mars, enabling liquid water to flow and carve out channels we see in the geology today.\n\nWhich choice completes the text with the most logical and precise word?',
    options: ['monitor', 'absorb', 'characterize', 'interpret'],
    answer: 1, topic: 'Words in Context'
  },
  {
    id: 32, section: 'rw', module: 2,
    text: 'The Streamflow Monitoring Using Computer Vision Machine Learning project will develop a lower-cost method to quantify streamflow that can be used by states, tribes, and other organizations. This approach can supplement the current methods — that is, deployment of hydrological measurement equipment (stream gauges) that is costly and __________ specialized expertise. This user-friendly alternative relies on continuous photo imagery and machine learning to estimate streamflow.\n\nWhich choice completes the text with the most logical and precise word?',
    options: ['requires', 'prefers', 'portrays', 'predicts'],
    answer: 0, topic: 'Words in Context'
  },
  {
    id: 33, section: 'rw', module: 2,
    text: 'In 1884, a conference in Washington, D.C., agreed to establish a single "prime" meridian (0° longitude), passing through Greenwich. This was for both longitude and timekeeping. This 0° meridian divides the Eastern from the Western Hemisphere. Today, one can visit the Royal Observatory and straddle this 0° meridian with one foot in each hemisphere. The location of this prime meridian is __________, meaning it could be chosen to be anywhere.\n\nWhich choice completes the text with the most logical and precise word?',
    options: ['specific', 'dynamic', 'dubious', 'arbitrary'],
    answer: 3, topic: 'Words in Context'
  },
  {
    id: 34, section: 'rw', module: 2,
    text: 'The following is an excerpt from Charles Darwin\'s On the Origin of Species (1859).\n\nA struggle for existence inevitably follows from the high rate at which all organic beings tend to increase. Every being, which during its natural lifetime produces several eggs or seeds, must suffer destruction during some period of its life, and during some season or occasional year; otherwise, on the principle of geometrical increase, its numbers would quickly become so inordinately great that no country could support the product. <u>Hence, as more individuals are produced than can possibly survive, there must in every case be a struggle for existence, either one individual with another of the same species, or with the individuals of distinct species, or with the physical conditions of life.</u>\n\nWhich choice best describes the function of the underlined portion in the text as a whole?',
    options: [
      'It gives a specific example to support the generalization in the first sentence.',
      'It posits a new idea to counter a previously accepted conclusion.',
      'It provides further details about the particular species referred to earlier in the text.',
      'It draws a logical conclusion from the information in the previous sentences.'
    ],
    answer: 3, topic: 'Craft and Structure'
  },
  {
    id: 35, section: 'rw', module: 2,
    text: 'Non-native species are plants and animals living in areas where they do not naturally exist. "Non-native species" and "invasive species" cannot be used interchangeably. <u>Many commonly grown fruits and vegetables are not native to the U.S. For example, tomatoes and hot peppers originated from South America, while lettuce was first grown by the Egyptians.</u> Domestic cows are non-native to North America and were introduced as a food source and considered to be a beneficial organism in an agricultural setting.\n\nWhich choice best describes the function of the underlined portion in the text as a whole?',
    options: [
      'It clarifies by elaborating on terms used in the previous sentence.',
      'It offers a specific example of a fruit and vegetable to support the generalization in the previous sentence.',
      'It notes an exception to the terms used in the previous sentence.',
      'It presents a counterclaim to the assertion in the first sentence.'
    ],
    answer: 0, topic: 'Craft and Structure'
  },
  {
    id: 36, section: 'rw', module: 2,
    text: 'The following text is adapted from Bohemians of the Latin Quarter by Henri Murger (1888).\n\nThe dinner took place at a Provencal restaurant in the Rue Dauphine, celebrated for its literary waiters and its "Ayoli" [a sauce similar to mayonnaise]. As it was necessary to leave room for the supper, they ate and drank in moderation. The acquaintance, begun the evening before between Colline and Schaunard and later on with Marcel, became more intimate; each of the young fellows hoisted the flag of his artistic opinions, and all four recognized that they had like courage and similar hopes. Talking and arguing they perceived that their sympathies were akin, that they had all the same knack in that chaff which amuses without hurting, and that the virtues of youth had not left a vacant spot in their heart, easily stirred by the sight of the narration of anything noble.\n\nAccording to the text, what is true of the "young fellows?"',
    options: [
      'They each arrived in Paris from a different country.',
      'They expressed very diverse opinions about art and their own aspirations.',
      'They shared similar views on life, and their natures were very much alike.',
      'They argued and disagreed strongly about the virtues of youth and nobility.'
    ],
    answer: 2, topic: 'Craft and Structure'
  },
  {
    id: 37, section: 'rw', module: 2,
    text: 'The following excerpt is from the U.S. Fish & Wildlife Services online article, "Leave it to Beaver: Partners Collaborate on Beaver Dam Analog Project."\n\nHistorically, Thompson Creek meandered through the lower watershed; but over a century ago, it was straightened to accommodate for agriculture, helping to reduce flooding for farmers. While the straightened channel was beneficial to the farmers, it had less desirable impacts on watershed health. The straighter, less natural flow path increased the speed of the water, led to the erosion of the bank, and transported more sediment and pollutants downstream into Newman Lake. This incision of the creek has also caused a disconnection between the creek and its surrounding floodplains, which has allowed for the dominance of reed canary grass in the area, a non-native species that outcompetes more diverse and beneficial vegetation.\n\nWhich choice best states the main purpose of the text?',
    options: [
      'To summarize the results of a study of erosion in Newman Lake.',
      'To present a specific example of the positive impact of straightening Thompson Creek.',
      'To explain an unintended but undesirable effect of human intervention.',
      'To speculate on the effects of competition between native grasses and non-native species.'
    ],
    answer: 2, topic: 'Craft and Structure'
  },
  {
    id: 38, section: 'rw', module: 2,
    text: 'Concerned about lack of awareness of certain health issues among students in the school system, the City School Superintendent decided to track the number of schools that provided health education in each grade of secondary school. Based on the data in the graph, he concluded that most schools in the district were consistently providing a health education course in all grades of secondary school.\n\nWhich choice describes data that weakens the Superintendent\'s conclusion?',
    options: [
      'All schools offered students some health education in every grade from 6 through 12.',
      'Fewer schools offered students in grades 10 through 12 a health education course than they offered students in grades 6 through 9.',
      'More schools offered students a health education course in grade 9 than in grade 6.',
      'No schools offered a health education course to students in grades 1 through 5.'
    ],
    answer: 1, topic: 'Information and Ideas'
  },
  {
    id: 39, section: 'rw', module: 2,
    text: 'Veterinarians who study animal behavior have entered a relatively new area of study. In earlier times, what was going on inside an animal\'s mind was not a concern. The Greek philosopher Aristotle (384–322 b.c.e.) said that animals couldn\'t think. French philosopher Rene Descartes (1596–1650 c.e.) compared the cry of an animal to the squeak of a clock spring, a mechanical reaction. Even in the modern era, animal behaviorists are reluctant to commit to the existence of complex emotions in animals for fear of being accused of anthropomorphism, ascribing human traits to nonhuman beings, and are belittled for being "unscientific" when they refer to an animal\'s inner life.\n\nWhich of the following quotes most logically supports the claim in the last sentence of the text?',
    options: [
      'Scientist Philip Low says, "If you ask my colleagues whether animals have emotions and thoughts, many will drop their voices or change the subject."',
      'Scientist Philip Low says, "My cat meows plaintively every time I leave the house."',
      'Scientist Philip Low says, "Every day we learn more about animals\' cognitive abilities, their emotional capacities, and their moral lives."',
      'Scientist Philip Low says, "Animal behavior can be easily explained in terms of the stimulus-response theory."'
    ],
    answer: 0, topic: 'Information and Ideas'
  },
  {
    id: 40, section: 'rw', module: 2,
    text: 'The following text is an excerpt from "Sound and Sense," a poem by Alexander Pope (1688–1744).\n\nTrue ease in writing comes from art, not chance,\nAs those move easiest who have learned to dance.\n\'Tis not enough no harshness gives offense,\nThe sound must seem an echo to the sense;\nSoft is the strain when Zephyr* gently blows,\nAnd the smooth stream in smoother numbers flows;\n\n*God of the west wind\n\nWhich choice makes a statement with which the poet would most likely agree?',
    options: [
      'Writing, like dance, arises from natural talent.',
      'Writing should be focused on content rather than sound.',
      'A writer must listen to and respond to the harshness in nature.',
      'It is possible to become a skilled writer through hard work.'
    ],
    answer: 3, topic: 'Craft and Structure'
  },
  {
    id: 41, section: 'rw', module: 2,
    text: 'Charles Dickens\'s novel Great Expectations tells the story of Pip, a poor orphan in mid-19th century England. An unexpected encounter with a convict results in a dramatic change in Pip\'s life. He becomes wealthy, deserts his old friends, and ultimately learns that he has lost more than he has gained.\n\nWhich quotation from Great Expectations most effectively illustrates the claim?',
    options: [
      '"The broken heart. You think you will die, but you just keep living, day after day after terrible day."',
      '"Pause you who read this, and think for a moment of the long chain of iron or gold, of thorns or flowers, that would never have bound you, but for the formation of the first link on one memorable day."',
      '"There was a long hard time when I kept far from me, the remembrance, of what I had thrown away when I was quite ignorant of its worth. But, since my duty has not been incompatible with the admission of that remembrance, I have given it a place in my heart."',
      '"I looked at the stars, and considered how awful it would be for a man to turn his face up to them as he froze to death, and see no help or pity in all the glittering multitude."'
    ],
    answer: 2, topic: 'Craft and Structure'
  },
  {
    id: 42, section: 'rw', module: 2,
    text: 'The following excerpt is from the 2022 Study Update from the Agricultural Health Study (AHS).\n\nIn some previous studies, agricultural work and occupational pesticide use have been associated with increased rates of renal cell carcinoma (RCC), the most common form of kidney cancer. However, few of those studies had investigated links to specific pesticides. Researchers evaluated associations with 38 pesticides, including one labeled 2,4,5-T, that were relatively commonly used at enrollment among pesticide applicators in the Agricultural Health Study, 308 individuals who developed RCC during follow-up until 2015. They hypothesized that certain pesticides and other agricultural exposure might influence the development of kidney disease and kidney cancer.\n\nWhich of the findings, if true, would directly support the researchers\' hypothesis?',
    options: [
      'Farmers and agricultural workers face health risks from work-related injuries at a rate of 18 deaths per 100,000 workers.',
      'Farmers and agricultural workers face stress from environmental factors, such as droughts, floods, wildfires, pests, and diseases affecting crops and livestock.',
      'Farmers and agricultural workers who use methods of organic food production (avoiding artificial fertilizers and pesticides) were less likely to report incidences of cancer.',
      'Farmers and agricultural workers who use the herbicide 2,4,5-T were three times more likely to develop RCC compared with those who never used this product.'
    ],
    answer: 3, topic: 'Information and Ideas'
  },
  {
    id: 43, section: 'rw', module: 2,
    text: 'A branch of the Nez Percé tribe from the Pacific Northwest refused to be relocated to a reservation and attempted to flee to Canada. The U.S. Cavalry pursued them and forced them to return. In 1877, Chief Joseph of the Nez Percé tribe surrendered to General Oliver O. Howard. The following text is an excerpt from his speech.\n\n"If the white man wants to live in peace with the Indian he can live in peace. There need be no trouble. Treat all men alike. Give them all an even chance to live and grow. All men were made by the same Great Spirit Chief. They are all brothers. The earth is the mother of all people, and all people should have equal rights upon it. You might as well expect all rivers to run backward as that any man who was born a free man should be contented penned up and denied liberty to go where he pleases."\n\nWhich choice best expresses the main idea of Chief Joseph\'s speech?',
    options: [
      'The Native American people had settled this land long before the arrival of the Europeans and deserve to have their land returned to them.',
      'Freedom is the natural state of every man, and every man deserves the right to live his life fairly and equally.',
      'Freedom should be available to all men and women, as long as they obey the laws that govern their society.',
      'Although they have lost this battle, the Native Americans will continue to fight for control of their land and their rivers.'
    ],
    answer: 1, topic: 'Information and Ideas'
  },
  {
    id: 44, section: 'rw', module: 2,
    image: 'assets/images/rw_m2_q17_climate_graph.png',
    text: 'Lowess smoothing (Locally Weighted Scatterplot Smoothing) is a tool used in data analysis that creates a smooth line through a time plot or scatter plot to help you see a relationship between variables and predict trends.\n\nAmong environmental scientists, there is a strong consensus that global surface temperatures have increased in recent decades and that the trend is caused by human-induced emissions of greenhouse gases. The extra energy that results from human activities has warmed the atmosphere, ocean, and land, and widespread and rapid changes in the atmosphere, ocean, cryosphere, and biosphere have occurred. The actual warming of temperatures is something they say they can document. In fact, according to an intergovernmental panel on climate change, the scientific evidence that points to climate change is undeniable.\n\nWhich of the following findings, if true, would appear to weaken the conclusion of the intergovernmental panel?',
    options: [
      'The global mean sea levels have doubled compared to the 20th-century trend of 1.6 mm per year, and this is accelerating slightly every year.',
      'The increased heat in the atmosphere from greenhouse gas emissions has been absorbed by the oceans, with the top 700 meters of ocean showing warming of more than 0.4°F since 1969.',
      'Core measures of the Arctic ice show that it has increased in volume since 2012 — by 50 percent in 2012 alone.',
      'Tracking global atmospheric temperatures since the 1800s, scientists point to a steady rise with a stronger period in the 1970s, a lull in the 1990s, and a return to the rising pattern in the 2000s.'
    ],
    answer: 2, topic: 'Information and Ideas'
  },
  {
    id: 45, section: 'rw', module: 2,
    text: 'Habitat protection afforded by the Endangered Species Act, the federal government\'s banning of the insecticide DDT, and conservation actions taken by the American public have helped bald eagles make a remarkable recovery. Bald eagle sightings are now a common occurrence in many parts of the country. When America adopted the bald eagle as the national symbol in 1782, anecdotal accounts stated that the country may have had as many as 100,000 nesting eagles. The first major decline of the species probably began in the mid to late 1800s, coinciding with the decline of waterfowl, shorebirds, and other prey. Although they primarily eat fish and carrion, bald eagles used to be considered marauders that preyed on chickens, lambs, and domestic livestock. ______________ large raptors were shot in an effort to eliminate a perceived threat.\n\nWhich of the following completes the text with the most logical transition?',
    options: ['Consequently, the', 'Nonetheless, the', 'For instance, the', 'In addition, the'],
    answer: 0, topic: 'Standard English Conventions'
  },
  {
    id: 46, section: 'rw', module: 2,
    text: 'A tornado is a narrow, violently rotating column of air __________ from a thunderstorm to the ground. Because wind is invisible, it is hard to see a tornado unless it forms a condensation funnel made up of water droplets, dust, and debris. Tornadoes can be among the most violent phenomena of all atmospheric storms we experience.\n\nWhich of the following completes the text so that it conforms to the conventions of Standard English?',
    options: ['that extend', 'by which it extends', 'that extends', 'in which it extends'],
    answer: 2, topic: 'Standard English Conventions'
  },
  {
    id: 47, section: 'rw', module: 2,
    text: 'Many behavioral studies about the role of play in developing a cat\'s predatory skills conclude that play is not necessary for the cat to be a successful hunter. The evidence for this conclusion lies in studies of cats that are reared in isolation; __________ they have no opportunity to engage in playful activities with other cats.\n\nWhich of the following completes the text with the most logical transition?',
    options: ['thus,', 'similarly', 'although', 'in reality,'],
    answer: 3, topic: 'Standard English Conventions'
  },
  {
    id: 48, section: 'rw', module: 2,
    text: 'Some sugars used by manufacturers in foods and drinks that you buy may be different from what you traditionally think of as sugar, like sucrose or table sugar. These sugars meet the chemical definition of a __________ metabolized, or used by your body, differently than traditional sugars like sucrose.\n\nWhich of the following completes the text so that it conforms to the conventions of Standard English?',
    options: ['sugar, which they are', 'sugar, so it is', 'sugar, and it is', 'sugar, but they are'],
    answer: 3, topic: 'Standard English Conventions'
  },
  {
    id: 49, section: 'rw', module: 2,
    text: 'When I was growing up, my family always went to a lake in the Adirondack Mountains for a week of camping. My brothers and __________ would spend hours fishing, swimming, and searching for tadpoles in the lake.\n\nWhich of the following completes the text so that it conforms to the conventions of Standard English?',
    options: ['we', 'me', 'I', 'them'],
    answer: 2, topic: 'Standard English Conventions'
  },
  {
    id: 50, section: 'rw', module: 2,
    text: 'The faculty committee investigating the accident in the chemistry lab was less concerned about why the experiment was conducted than in whether _________ conducted with all safety precautions in place.\n\nWhich of the following completes the text so that it conforms to the conventions of Standard English?',
    options: ['they were', 'they was', 'it were', 'it was'],
    answer: 3, topic: 'Standard English Conventions'
  },
  {
    id: 51, section: 'rw', module: 2,
    text: 'The first edition of the Green Book, a listing of lodgings, restaurants, and businesses that were safe for Black travelers, was published by postal employee Victor Green and his wife in 1936. Timing is important to understanding its __________ started the publication within an established context of protest and social action by African Americans eager to push back against discrimination.\n\nWhich of the following completes the text so that it conforms to the conventions of Standard English?',
    options: ['success; Green', 'success, for which Green', 'success was: Green', 'success. The reason was because Green'],
    answer: 0, topic: 'Standard English Conventions'
  },
  {
    id: 52, section: 'rw', module: 2,
    text: 'Our planet Earth is composed of several layers. Each layer has a unique density (density = mass/volume). Scientists believe that all planets formed on the basis of __________ the layering of Earth is a result of gravitational pull. The densest layer (inner core) is at the center and the least dense layer (crust) is the outermost layer. The atmosphere, composed of gases, can technically be considered a layer as well and is obviously lighter than the crust.\n\nWhich of the following completes the text with the most logical transition?',
    options: ['gravity; therefore,', 'gravity; however,', 'gravity, but', 'gravity; instead,'],
    answer: 0, topic: 'Standard English Conventions'
  },
  {
    id: 53, section: 'rw', module: 2,
    text: 'While researching a topic, a student has taken the following notes:\n• Robert Frost wrote the poem "Nothing Gold Can Stay" (1923), about how quickly things in nature fade.\n• Frost often wrote about scenes from rural life in New England.\n• The poem was published in a collection called New Hampshire the same year (1923), which would later win the 1924 Pulitzer Prize.\n• In "Nothing Gold Can Stay," Frost applies the images of nature to larger themes such as the passage of time.\n• Frost draws a parallel from nature to the short-lived quality of beauty, youth, and life.\n\nThe student wants to create a statement that will introduce the poet and his major themes to an audience unfamiliar with Robert Frost. Which choice most effectively uses information from the notes to accomplish this task?',
    options: [
      'Pulitzer Prize–winning poet Robert Frost often uses nature images from rural New England to express themes about nature and human existence.',
      'Robert Frost wrote "Nothing Gold Can Stay" in 1923, and the collection of poems that it was published in won a Pulitzer Prize.',
      '"Nothing Gold Can Stay," written by Robert Frost in 1923, is about the fleeting quality of nature, youth, and time.',
      'Robert Frost, who wrote many poems, is famous for his poems about life and nature.'
    ],
    answer: 0, topic: 'Rhetorical Synthesis'
  },
  {
    id: 54, section: 'rw', module: 2,
    text: 'While researching a topic, a student has taken the following notes:\n• A recent study compared the nutritional profiles of organic and conventionally grown produce.\n• Researchers found no consistent differences in vitamins or minerals between organic and conventional crops.\n• However, organic produce had significantly lower pesticide residue levels.\n• Some consumers prefer organic food for environmental and health reasons.\n• Conventional produce is generally less expensive than organic.\n\nThe student wants to summarize the key trade-off consumers face when choosing between organic and conventional produce. Which choice most effectively accomplishes this goal?',
    options: [
      'Organic and conventional produce are nutritionally equivalent, but organic produce costs more and has lower pesticide residues.',
      'Conventional produce contains more pesticides than organic produce, making it a health risk.',
      'Organic produce is always the better choice because it is grown without synthetic pesticides.',
      'Because they have the same nutritional content, consumers have no reason to choose organic over conventional produce.'
    ],
    answer: 0, topic: 'Rhetorical Synthesis'
  }
];

// ── SECTION 2: Math Module 1 ──────────────────
const MATH_MODULE1 = [
  {
    id: 55, section: 'math', module: 3,
    text: 'In the xy-coordinate plane, what is the area of the rectangle with opposite vertices at (−3, −1) and (3, 1)?',
    options: ['3', '6', '9', '12'],
    answer: 3, topic: 'Geometry'
  },
  {
    id: 56, section: 'math', module: 3,
    image: 'assets/images/math_m1_q2_venn.png',
    text: 'The following Venn diagram shows the ice-cream flavor choice of 36 children at an ice-cream party. Each child could choose vanilla ice cream, chocolate ice cream, both, or neither. What percent of the children had chocolate ice cream only?',
    options: ['10%', '25%', '50%', '75%'],
    answer: 1, topic: 'Problem Solving & Data'
  },
  {
    id: 57, section: 'math', module: 3,
    text: 'If 4/5 of a number is 24, what is 1/5 of the number?',
    options: ['5', '6', '8', '18'],
    answer: 1, topic: 'Algebra'
  },
  {
    id: 58, section: 'math', module: 3,
    text: 'The formula below is used in finance to compute A, the payment Amount per period, where P is the initial Principal, or loan amount, r is the interest rate per period, and n is the total number of payments per period.\n\nA = P · r(1+r)ⁿ / [(1+r)ⁿ − 1]\n\nWhich of the following correctly gives P in terms of A, n, and r?',
    options: [
      'P = A · r(1+r)ⁿ / [(1+r)ⁿ − 1]',
      'P = A · [(1+r)ⁿ − 1] / [r(1+r)ⁿ]',
      'P = A · r(1+r)ⁿ−1 / [(1+r)ⁿ]',
      'P = A · (1+r)ⁿ / [r(1+r)ⁿ − 1]'
    ],
    answer: 1, topic: 'Algebra'
  },
  {
    id: 59, section: 'math', module: 3,
    text: 'A circle in the xy-coordinate plane has a center of (2, 5) and a radius of 3. Which of the following is an equation of the circle?',
    options: [
      '(x − 2)² + (y − 5)² = 9',
      '(x − 2)² + (y − 5)² = 3',
      '(x + 2)² − (y + 5)² = 9',
      '(x + 2)² − (y + 5)² = 3'
    ],
    answer: 0, topic: 'Geometry'
  },
  {
    id: 60, section: 'math', module: 3,
    image: 'assets/images/math_m1_q6_abcd_graph.png',
    text: 'In the figure above, ABCD is a square and points B, C, and O lie on the graph of y = x²/k, where k is a constant. If the area of the square is 36, what is the value of k?',
    options: ['1.5', '3', '4.5', '6'],
    answer: 1, topic: 'Advanced Math'
  },
  {
    id: 61, section: 'math', module: 3,
    text: 'How much greater than t − 5 is t + 2?',
    options: ['2', '4', '5', '7'],
    answer: 3, topic: 'Algebra'
  },
  {
    id: 62, section: 'math', module: 3,
    text: 'f(x) = x³ − 4x\ng(x) = x² + x − 2\n\nWhich of the following expressions is equivalent to f(x)/g(x), for x > 2?',
    options: ['(x − 2) / [x(x − 1)]', '(x − 1) / [x(x − 2)]', 'x(x − 1) / (x − 2)', 'x(x − 2) / (x − 1)'],
    answer: 3, topic: 'Advanced Math'
  },
  {
    id: 63, section: 'math', module: 3,
    image: 'assets/images/math_m1_q9_parabola.png',
    text: 'In the parabola above, the vertex is at (3, −1). Which of the following are x-coordinates of two points on this parabola whose y-coordinates are equal?',
    options: ['1 and 5', '1 and 6', '2 and 5', '2 and 6'],
    answer: 0, topic: 'Advanced Math'
  },
  {
    id: 64, section: 'math', module: 3,
    text: 'The price of a television was first decreased by 10 percent and then increased by 20 percent. The final price was what percent of the initial price?',
    options: ['88%', '90%', '98%', '108%'],
    answer: 3, topic: 'Problem Solving & Data'
  },
  {
    id: 65, section: 'math', module: 3,
    text: 'In the xy-plane, the center of a circle has coordinates (−2, 4). If one endpoint of a diameter of the circle is (−2, 1), what are the coordinates of the other endpoint of this diameter?',
    options: ['(−5, 4)', '(−2, 6)', '(−2, 7)', '(1, 4)'],
    answer: 2, topic: 'Geometry'
  },
  {
    id: 66, section: 'math', module: 3,
    text: 'If 3n/2p = 4/3, what is the value of n/p?',
    options: ['2', '1', '9/8', '8/9'],
    answer: 3, topic: 'Algebra'
  },
  {
    id: 67, section: 'math', module: 3,
    image: 'assets/images/math_m1_q13_squares_circles.png',
    text: 'Square ABCD is divided into nine equal squares, five of which have circles inscribed in them. If AB = 6, what is the total shaded area?',
    options: ['24 − 10π', '24 − 5π', '36 − 10π', '36 − 5π'],
    answer: 3, topic: 'Geometry'
  },
  {
    id: 68, section: 'math', module: 3,
    text: 'In the xy-plane, line l passes through (−1, 3) and is parallel to the line 4x + 2y = k. If line l passes through the point (p, −p), what is the value of p?',
    options: ['−2', '−1', '1', '2'],
    answer: 0, topic: 'Algebra'
  },
  {
    id: 69, section: 'math', module: 3,
    text: 'y = x² − 2x + 3\ny = −3x + 5\n\nHow many solutions are there to the system of equations above?',
    options: [
      'The answer cannot be determined with the information given.',
      'There are no solutions.',
      'There is exactly one solution.',
      'There are exactly two solutions.'
    ],
    answer: 3, topic: 'Advanced Math'
  },
  {
    id: 70, section: 'math', module: 3,
    text: 'Find the smallest even number divisible by 3, 5, and 7.',
    options: ['105', '210', '315', '420'],
    answer: 1, topic: 'Problem Solving & Data',
    isFillIn: true, fillAnswer: '210'
  },
  {
    id: 71, section: 'math', module: 3,
    text: 'A certain fraction is equivalent to 2/3. If the fraction\'s denominator is 12 less than twice its numerator, find the denominator of the fraction.',
    options: ['12', '24', '36', '48'],
    answer: 1, topic: 'Algebra',
    isFillIn: true, fillAnswer: '24'
  },
  {
    id: 72, section: 'math', module: 3,
    text: 'If p > 0 and p² = 3p + 40, what is the value of p?',
    options: ['5', '8', '10', '12'],
    answer: 1, topic: 'Advanced Math',
    isFillIn: true, fillAnswer: '8'
  },
  {
    id: 73, section: 'math', module: 3,
    text: 'If x² − 3x = 50 and x² + 5x = 12, what is the value of x² + x?',
    options: ['28', '31', '34', '38'],
    answer: 1, topic: 'Advanced Math',
    isFillIn: true, fillAnswer: '31'
  },
  {
    id: 74, section: 'math', module: 3,
    image: 'assets/images/math_m1_q20_nested_squares.png',
    text: 'In the preceding figure, each shape is a square. BC has length 4, and CD has length 7. Points A, K, and G all lie in the same line. Find the length of DE.',
    options: ['10', '11', '11.5', '12.25'],
    answer: 1, topic: 'Geometry',
    isFillIn: false
  },
  {
    id: 75, section: 'math', module: 3,
    text: 'Which values of x satisfy both functions f(x) = 3 and f(x) = x² + 2?',
    options: ['−1 and 0', '−1 and 1', '0 and 1', 'There are no values of x which satisfy both functions.'],
    answer: 1, topic: 'Advanced Math'
  },
  {
    id: 76, section: 'math', module: 3,
    text: 'If xy = 120, and 1/x + 1/y = 1/4, find x + y.',
    options: ['20', '24', '30', '36'],
    answer: 2, topic: 'Algebra',
    isFillIn: true, fillAnswer: '30'
  }
];

// ── SECTION 2: Math Module 2 ──────────────────
const MATH_MODULE2 = [
  {
    id: 77, section: 'math', module: 4,
    image: 'assets/images/math_m2_q1_graph.png',
    text: 'The preceding figure shows the graph of y = f(x) from x = −3 to x = 4. For what value of x in this interval does the function f attain its minimum value?',
    options: ['2', '1', '0', '−2'],
    answer: 0, topic: 'Advanced Math'
  },
  {
    id: 78, section: 'math', module: 4,
    image: 'assets/images/math_m2_q2_numberline.png',
    text: 'Which point on the preceding number line best represents the product of x and y?',
    options: ['A', 'B', 'C', 'D'],
    answer: 0, topic: 'Algebra'
  },
  {
    id: 79, section: 'math', module: 4,
    image: 'assets/images/math_m2_q3_graph.png',
    text: 'The graph of y = f(x) is shown above. If f(3) = k, which of the following is the value of f(k)?',
    options: ['−1', '−1/2', '0', '1/2'],
    answer: 3, topic: 'Advanced Math'
  },
  {
    id: 80, section: 'math', module: 4,
    text: 'If −1 < x < 0, which of the following statements must be true?\n\nI.  x > x/2\nII. x² > x\nIII. x³ > x²',
    options: ['I only', 'II only', 'I and II only', 'II and III only'],
    answer: 1, topic: 'Algebra'
  },
  {
    id: 81, section: 'math', module: 4,
    image: 'assets/images/math_m2_q5_garden.png',
    text: 'A gardener is building a fence to enclose their garden and divide it in half, as shown in the preceding figure. The fourth side of the garden is adjacent to their house, so it does not require fencing. The total area of the garden is 2,400 square feet. In terms of x, how many feet of fencing does the gardener require?',
    options: ['2,400 − 3x', 'x + 2,400/x', '3x + 2,400/x', '3x + 1,200/x'],
    answer: 2, topic: 'Algebra'
  },
  {
    id: 82, section: 'math', module: 4,
    text: 'An equilateral triangle has vertices at (−1, 1) and (5, 1). Which of the following could be the coordinates of the third vertex?',
    options: ['(2, −5)', '(2, 1 − 3√3)', '(2, 3√3)', '(3√3, 1)'],
    answer: 2, topic: 'Geometry'
  },
  {
    id: 83, section: 'math', module: 4,
    text: 'x² + y² − 4x − 6y + 12 = 0\n\nIn the xy-plane, the graph of the preceding equation is a circle. Which of the following is the radius of the circle?',
    options: ['4', '3', '2', '1'],
    answer: 3, topic: 'Geometry'
  },
  {
    id: 84, section: 'math', module: 4,
    text: 'The office supply store offers pens in two different boxes: one containing 6 pens and the other containing 12 pens. If Maria orders 28 boxes for a total of 204 pens, how many boxes of 12 pens are in the order?',
    options: ['6', '8', '10', '12'],
    answer: 0, topic: 'Problem Solving & Data'
  },
  {
    id: 85, section: 'math', module: 4,
    text: 'The cell count of a certain lab culture increased from 19,000 in Week 3 to 41,000 in Week 6. Assuming that the cell count increased at a constant rate, which of the following linear functions f best models the cell count, in thousands of cells, t weeks after Week 3?',
    options: [
      'f(t) = (3/22)t − 19',
      'f(t) = (22/3)t − 19',
      'f(t) = (3/22)t + 19',
      'f(t) = (22/3)t + 19'
    ],
    answer: 3, topic: 'Algebra'
  },
  {
    id: 86, section: 'math', module: 4,
    text: 'The preceding table defines a linear function.\n\n| k    | 1  | 2  | 3 | 4 | 5  | 6  |\n|------|----|----|---|---|----|----|----|\n| f(k) | 15 | 11 | 7 | n | −1 | −5 |\n\nWhat is the value of n?',
    options: ['1', '2', '3', '4'],
    answer: 2, topic: 'Algebra',
    isFillIn: true, fillAnswer: '3'
  },
  {
    id: 87, section: 'math', module: 4,
    text: 'When the number m is multiplied by 5, the result is the same as when 6 is subtracted from m. What is the value of 8m?',
    options: ['−12', '−6', '−3/2', '3'],
    answer: 0, topic: 'Algebra'
  },
  {
    id: 88, section: 'math', module: 4,
    image: 'assets/images/math_m2_q12_line.png',
    text: 'The coordinates of point P in the preceding figure are (a, b), where |b| > |a|. Which of the following could be the slope of PQ?',
    options: ['−3', '−1/2', '1/2', '3/2'],
    answer: 3, topic: 'Algebra'
  },
  {
    id: 89, section: 'math', module: 4,
    image: 'assets/images/math_m2_q13_graphs.png',
    text: 'The graph of y = g(x) is shown above. Which of the following could be the graph of y = g(x − 1)?',
    options: ['Graph A', 'Graph B', 'Graph C', 'Graph D'],
    answer: 0, topic: 'Advanced Math'
  },
  {
    id: 90, section: 'math', module: 4,
    text: 'In the xy-plane, lines p and q are perpendicular. If line p contains the points (−2, 2) and (2, 1), and line q contains the points (−2, 4) and (k, 0), what is the value of k?',
    options: ['−3', '−2', '−1', '0'],
    answer: 0, topic: 'Algebra'
  },
  {
    id: 91, section: 'math', module: 4,
    text: 'If x² − y² = 39 and x − y = 3, what is the value of y?',
    options: ['4', '5', '6', '7'],
    answer: 1, topic: 'Advanced Math',
    isFillIn: true, fillAnswer: '5'
  },
  {
    id: 92, section: 'math', module: 4,
    image: 'assets/images/math_m2_q16_angle.png',
    text: 'What is the value of x in the preceding figure?',
    options: ['35', '40', '70', '105'],
    answer: 2, topic: 'Geometry',
    isFillIn: true, fillAnswer: '70'
  },
  {
    id: 93, section: 'math', module: 4,
    text: 'Six times a number is the same as the number added to 6. What is the number?',
    options: ['1', '6/5', '6/7', '7/6'],
    answer: 1, topic: 'Algebra',
    isFillIn: true, fillAnswer: '6/5'
  },
  {
    id: 94, section: 'math', module: 4,
    image: 'assets/images/math_m2_q19_triangle.png',
    text: 'In the right triangle shown above, if angle θ = 30°, what is sin θ?',
    options: ['1/4', '1/2', '√3/2', '√3'],
    answer: 1, topic: 'Geometry',
    isFillIn: true, fillAnswer: '.5 or 1/2'
  },
  {
    id: 95, section: 'math', module: 4,
    text: 'A circle lies in the xy-coordinate plane. If the circle is centered at (−3, 17) and touches the y-axis at one point only, what is the diameter of the circle?',
    options: ['3', '6', '9', '17'],
    answer: 1, topic: 'Geometry',
    isFillIn: true, fillAnswer: '6'
  },
  {
    id: 96, section: 'math', module: 4,
    image: 'assets/images/math_m2_q21_numberlines.png',
    text: 'Which of the following represents all values of x that satisfy this inequality: 7 ≥ −2x + 3?',
    options: ['Number line A', 'Number line B', 'Number line C', 'Number line D'],
    answer: 0, topic: 'Algebra'
  },
  {
    id: 97, section: 'math', module: 4,
    text: 'If $1,000 invested at i percent simple annual interest yields $200 over a 2-year period, how much interest would the $1,000 investment yield if the i percent interest were compounded annually over the 2-year period?',
    options: ['$200', '$205', '$210', '$220'],
    answer: 2, topic: 'Problem Solving & Data',
    isFillIn: true, fillAnswer: '210'
  },
  {
    id: 98, section: 'math', module: 4,
    text: 'If a − (1/2)b = −8 and a = 1/2, what is the value of b?',
    options: ['15', '17', '19', '21'],
    answer: 1, topic: 'Algebra',
    isFillIn: true, fillAnswer: '17'
  }
];

// ── Combine all questions ─────────────────────
const QUESTIONS = [...RW_MODULE1, ...RW_MODULE2, ...MATH_MODULE1, ...MATH_MODULE2];

// ── Answer Key ────────────────────────────────
const ANSWER_KEY = QUESTIONS.map(q => ({
  id: q.id,
  answer: q.answer,
  fillAnswer: q.fillAnswer || null
}));

// ── Section / Module Map ──────────────────────
const MODULE_MAP = {
  1: { name: 'Reading & Writing – Module 1', section: 'Reading & Writing', timeMin: 32, questions: RW_MODULE1.map(q => q.id) },
  2: { name: 'Reading & Writing – Module 2', section: 'Reading & Writing', timeMin: 32, questions: RW_MODULE2.map(q => q.id) },
  3: { name: 'Math – Module 1',              section: 'Math',             timeMin: 35, questions: MATH_MODULE1.map(q => q.id) },
  4: { name: 'Math – Module 2',              section: 'Math',             timeMin: 35, questions: MATH_MODULE2.map(q => q.id) }
};

// ── Topic Map ─────────────────────────────────
const TOPIC_MAP = {
  'Words in Context':           { name: 'Words in Context',           questions: QUESTIONS.filter(q => q.topic === 'Words in Context').map(q => q.id) },
  'Craft and Structure':        { name: 'Craft and Structure',        questions: QUESTIONS.filter(q => q.topic === 'Craft and Structure').map(q => q.id) },
  'Information and Ideas':      { name: 'Information and Ideas',      questions: QUESTIONS.filter(q => q.topic === 'Information and Ideas').map(q => q.id) },
  'Standard English Conventions':{ name: 'Standard English Conventions', questions: QUESTIONS.filter(q => q.topic === 'Standard English Conventions').map(q => q.id) },
  'Rhetorical Synthesis':       { name: 'Rhetorical Synthesis',       questions: QUESTIONS.filter(q => q.topic === 'Rhetorical Synthesis').map(q => q.id) },
  'Algebra':                    { name: 'Algebra',                    questions: QUESTIONS.filter(q => q.topic === 'Algebra').map(q => q.id) },
  'Advanced Math':              { name: 'Advanced Math',              questions: QUESTIONS.filter(q => q.topic === 'Advanced Math').map(q => q.id) },
  'Problem Solving & Data':     { name: 'Problem Solving & Data',     questions: QUESTIONS.filter(q => q.topic === 'Problem Solving & Data').map(q => q.id) },
  'Geometry':                   { name: 'Geometry',                   questions: QUESTIONS.filter(q => q.topic === 'Geometry').map(q => q.id) }
};

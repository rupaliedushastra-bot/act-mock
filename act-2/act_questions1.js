// =============================================
// act_questions1.js – ACT Practice Test 1
// Original practice questions written for EduQuest
// Sections: English (75Q), Math (60Q), Reading (40Q), Science (40Q)
// Total: 215 questions | Time: 175 minutes
// =============================================

const ACT_QUESTIONS1 = [

    // ══════════════════════════════════════════
    // SECTION 1: ENGLISH (75 questions, 45 min)
    // Topics: Punctuation, Grammar & Usage,
    //         Sentence Structure, Rhetorical Skills, Style & Tone
    // ══════════════════════════════════════════

    { id: 1, section: 'english', topic: 'Punctuation',
      text: `The committee members, who had been meeting for three hours finally reached a consensus on the proposed budget.

Which choice best corrects the punctuation error?`,
      options: [
        'The committee members, who had been meeting for three hours, finally reached a consensus on the proposed budget.',
        'The committee members who had been meeting for three hours, finally reached a consensus on the proposed budget.',
        'The committee members, who had been meeting for three hours finally, reached a consensus on the proposed budget.',
        'The committee members who had been meeting, for three hours finally reached a consensus on the proposed budget.'
      ], answer: 0 },

    { id: 2, section: 'english', topic: 'Grammar & Usage',
      text: `Neither the manager nor the employees was informed about the sudden change in policy.

Which correction should be made to the underlined verb "was"?`,
      options: ['were', 'has been', 'is', 'No change is needed'], answer: 0 },

    { id: 3, section: 'english', topic: 'Sentence Structure',
      text: `Running through the park early in the morning, the sunrise was breathtaking to Maria.

Which revision corrects the dangling modifier?`,
      options: [
        'Running through the park early in the morning, Maria found the sunrise breathtaking.',
        'Maria, running through the park early in the morning, the sunrise was breathtaking.',
        'The sunrise was breathtaking to Maria, running through the park early in the morning.',
        'Early in the morning, running through the park, the sunrise was breathtaking to Maria.'
      ], answer: 0 },

    { id: 4, section: 'english', topic: 'Rhetorical Skills',
      text: `A student is writing a paragraph about rising sea levels and wants a concluding sentence that maintains a formal, evidence-based tone. Which sentence best fits?`,
      options: [
        'These rising sea levels represent a measurable and accelerating threat to coastal populations worldwide.',
        "It's really scary how much the oceans are rising these days.",
        'Someone should definitely do something about all this water.',
        "Sea levels have always changed throughout history, so maybe it's not that big a deal."
      ], answer: 0 },

    { id: 5, section: 'english', topic: 'Style & Tone',
      text: `The scientist carefully documented her findings, recording every detail with precision.

Which alternative to the underlined phrase "recording every detail with precision" would NOT be acceptable in this formal context?`,
      options: ['meticulously noting each detail', 'sloppily jotting things down', 'thoroughly recording each observation', 'methodically logging every detail'], answer: 1 },

    { id: 6, section: 'english', topic: 'Punctuation',
      text: `The hikers packed: water, energy bars, and a first aid kit before setting out.

Which choice correctly punctuates the sentence?`,
      options: [
        'The hikers packed water, energy bars, and a first aid kit before setting out.',
        'The hikers packed; water, energy bars, and a first aid kit before setting out.',
        'The hikers packed, water, energy bars, and a first aid kit before setting out.',
        'No change is needed.'
      ], answer: 0 },

    { id: 7, section: 'english', topic: 'Grammar & Usage',
      text: `Each of the students were required to submit their project by Friday.

Which correction fixes the subject-verb agreement error?`,
      options: ['was required', 'have been required', 'are required', 'No change is needed'], answer: 0 },

    { id: 8, section: 'english', topic: 'Sentence Structure',
      text: `Choose the option that best combines these two sentences without creating a run-on:
"The bridge was closed for repairs. Commuters had to take a longer route."`,
      options: [
        'Because the bridge was closed for repairs, commuters had to take a longer route.',
        'The bridge was closed for repairs commuters had to take a longer route.',
        'The bridge was closed for repairs, and, commuters had to take a longer route.',
        'The bridge being closed for repairs commuters had to take a longer route.'
      ], answer: 0 },

    { id: 9, section: 'english', topic: 'Rhetorical Skills',
      text: `A writer wants to add a transition sentence between a paragraph about the benefits of solar energy and one about its limitations. Which sentence works best?`,
      options: [
        'Despite these advantages, solar energy still faces several practical challenges.',
        'Solar energy is great and everyone should use it.',
        'In conclusion, solar power is the future of all energy production.',
        'Anyway, let\'s talk about something else now.'
      ], answer: 0 },

    { id: 10, section: 'english', topic: 'Punctuation',
      text: `My sister, whom I admire greatly graduated from medical school last spring.

Which choice corrects the sentence?`,
      options: [
        'My sister, whom I admire greatly, graduated from medical school last spring.',
        'My sister whom I admire greatly, graduated from medical school last spring.',
        'My sister, whom I admire greatly. Graduated from medical school last spring.',
        'My sister whom, I admire greatly graduated from medical school last spring.'
      ], answer: 0 },

    { id: 11, section: 'english', topic: 'Grammar & Usage',
      text: `By the time the guests arrive, she will have cooked dinner for three hours already.

Which verb tense best replaces the underlined phrase "will have cooked" for logical consistency?`,
      options: ['will have been cooking', 'cooks', 'was cooking', 'No change is needed'], answer: 0 },

    { id: 12, section: 'english', topic: 'Sentence Structure',
      text: `Which version of this sentence is most concise without losing meaning?
"Due to the fact that it was raining heavily, the outdoor concert was cancelled by the organizers."`,
      options: [
        'Because it was raining heavily, the organizers cancelled the outdoor concert.',
        'Due to the fact of heavy rain, the outdoor concert by the organizers was cancelled.',
        'It being the case that it rained heavily, the concert outdoors was cancelled.',
        'The organizers, due to the rain being heavy, cancelled the concert that was outdoors.'
      ], answer: 0 },

    { id: 13, section: 'english', topic: 'Style & Tone',
      text: `Which underlined word maintains the most consistent tone in an otherwise formal academic essay about economic policy?`,
      options: ['significant', 'huge', 'massive', 'crazy'], answer: 0 },

    { id: 14, section: 'english', topic: 'Rhetorical Skills',
      text: `An essay about the history of jazz music opens with several paragraphs on its origins in New Orleans. Which sentence would best serve as an opening hook for the essay?`,
      options: [
        'In the early twentieth century, a new sound was taking shape in the streets of New Orleans.',
        'Jazz is a type of music.',
        'This essay will discuss jazz history.',
        'Many people enjoy listening to jazz.'
      ], answer: 0 },

    { id: 15, section: 'english', topic: 'Punctuation',
      text: `The recipe calls for the following ingredients flour, sugar, eggs, and butter.

Which punctuation mark should be added after "following ingredients"?`,
      options: ['a colon', 'a semicolon', 'a comma', 'no punctuation is needed'], answer: 0 },

    { id: 16, section: 'english', topic: 'Grammar & Usage',
      text: `The team of researchers have published their findings in a leading journal.

Which correction fixes the subject-verb agreement error?`,
      options: ['has published', 'are publishing', 'were published', 'No change is needed'], answer: 0 },

    { id: 17, section: 'english', topic: 'Sentence Structure',
      text: `Which choice eliminates the redundancy in this sentence?
"The final outcome of the negotiations was that both sides ultimately agreed to a compromise."`,
      options: [
        'The negotiations ended with both sides agreeing to a compromise.',
        'The outcome that was final showed both sides ultimately reaching compromise.',
        'In the end finally, both sides agreed to compromise at the end.',
        'The final result, in the end, was a compromise being agreed to finally.'
      ], answer: 0 },

    { id: 18, section: 'english', topic: 'Rhetorical Skills',
      text: `A writer is deciding whether to keep or delete a sentence about the history of paper-making in an essay focused on modern printing technology. The sentence should be:`,
      options: [
        'Deleted, because it does not directly relate to the essay\'s focus on modern technology.',
        'Kept, because all historical details are always relevant to any essay.',
        'Kept, because it makes the essay longer.',
        'Deleted, because historical information is never interesting to readers.'
      ], answer: 0 },

    { id: 19, section: 'english', topic: 'Style & Tone',
      text: `Which revision best fixes the inconsistent tone in this sentence from a formal report?
"The quarterly earnings were totally awesome compared to last year's numbers."`,
      options: [
        'The quarterly earnings showed substantial improvement compared to last year\'s figures.',
        'The quarterly earnings were super great this year, you guys.',
        'OMG the earnings this quarter were amazing.',
        'No change is needed.'
      ], answer: 0 },

    { id: 20, section: 'english', topic: 'Punctuation',
      text: `Its important to check the cars oil level before a long road trip.

Which choice correctly fixes the apostrophe errors?`,
      options: ["It's important to check the car's oil level before a long road trip.", "Its' important to check the cars' oil level before a long road trip.", "It's important to check the cars oil level before a long road trip.", 'No change is needed.'], answer: 0 },

    { id: 21, section: 'english', topic: 'Grammar & Usage',
      text: `Between you and I, I think the proposal needs more detail.

Which correction fixes the pronoun case error?`,
      options: ['Between you and me', 'Between you and myself', 'Between yourself and I', 'No change is needed'], answer: 0 },

    { id: 22, section: 'english', topic: 'Sentence Structure',
      text: `Choose the best way to combine these sentences:
"The museum opened a new exhibit. The exhibit features ancient Egyptian artifacts."`,
      options: [
        'The museum opened a new exhibit featuring ancient Egyptian artifacts.',
        'The museum opened a new exhibit, it features ancient Egyptian artifacts.',
        'The museum opened a new exhibit features ancient Egyptian artifacts.',
        'Opening a new exhibit, ancient Egyptian artifacts are featured by the museum.'
      ], answer: 0 },

    { id: 23, section: 'english', topic: 'Rhetorical Skills',
      text: `Which sentence best supports a paragraph arguing that public libraries remain valuable in the digital age?`,
      options: [
        'Libraries now offer free internet access, job-training workshops, and community programs alongside traditional book lending.',
        'Books used to be the only thing libraries had.',
        'Some people don\'t like going to libraries anymore.',
        'Libraries are buildings that contain books.'
      ], answer: 0 },

    { id: 24, section: 'english', topic: 'Style & Tone',
      text: `In a formal cover letter, which underlined phrase should be revised for tone?
"I would be super pumped to join your team."`,
      options: [
        'I would be enthusiastic to join your team.',
        'I would be thrilled, totally, to join your team.',
        'I would be super excited, for real, to join your team.',
        'No change is needed.'
      ], answer: 0 },

    { id: 25, section: 'english', topic: 'Punctuation',
      text: `The conference, scheduled for next month will be held in Chicago.

Which choice correctly punctuates the sentence?`,
      options: [
        'The conference, scheduled for next month, will be held in Chicago.',
        'The conference scheduled, for next month will be held in Chicago.',
        'The conference; scheduled for next month will be held in Chicago.',
        'No change is needed.'
      ], answer: 0 },

    { id: 26, section: 'english', topic: 'Grammar & Usage',
      text: `If I would have known about the meeting, I would have attended.

Which correction fixes the verb form error?`,
      options: ['If I had known about the meeting, I would have attended.', 'If I would know about the meeting, I would have attended.', 'If I will have known about the meeting, I would attend.', 'No change is needed.'], answer: 0 },

    { id: 27, section: 'english', topic: 'Sentence Structure',
      text: `Which version avoids the comma splice?
"The lecture ran long, the students grew restless."`,
      options: [
        'The lecture ran long, so the students grew restless.',
        'The lecture ran long, the students; grew restless.',
        'The lecture ran long, however the students grew restless.',
        'No change is needed.'
      ], answer: 0 },

    { id: 28, section: 'english', topic: 'Rhetorical Skills',
      text: `An essay about renewable energy includes a paragraph with statistics on wind turbine efficiency. Where should this paragraph most logically be placed?`,
      options: [
        'After an introductory paragraph that establishes renewable energy as the essay\'s topic.',
        'Before the title of the essay.',
        'At the very end, after the concluding paragraph.',
        'It does not matter where it is placed.'
      ], answer: 0 },

    { id: 29, section: 'english', topic: 'Style & Tone',
      text: `Which choice best maintains parallel structure?
"The new policy aims to reduce costs, improving efficiency, and to increase customer satisfaction."`,
      options: [
        'The new policy aims to reduce costs, improve efficiency, and increase customer satisfaction.',
        'The new policy aims to reduce costs, improving efficiency, and increasing customer satisfaction.',
        'The new policy aims at reducing costs, to improve efficiency, and increase customer satisfaction.',
        'No change is needed.'
      ], answer: 0 },

    { id: 30, section: 'english', topic: 'Punctuation',
      text: `Which sentence uses the semicolon correctly?`,
      options: [
        'The storm knocked out power across the city; residents relied on generators for days.',
        'The storm knocked out power across the city; and residents relied on generators.',
        'The storm; knocked out power across the city, residents relied on generators.',
        'The storm knocked; out power across the city residents relied on generators.'
      ], answer: 0 },

    { id: 31, section: 'english', topic: 'Grammar & Usage',
      text: `She is one of the only students who has completed the assignment early.

Which correction fixes the agreement error?`,
      options: ['who have completed', 'who has complete', 'whom has completed', 'No change is needed'], answer: 0 },

    { id: 32, section: 'english', topic: 'Sentence Structure',
      text: `Choose the most effective revision for sentence variety in a paragraph where every sentence currently begins with "The":
"The team practiced. The coach watched. The players improved."`,
      options: [
        'While the team practiced, the coach watched closely as the players improved.',
        'The team practiced, the coach watched, the players improved.',
        'The team practiced; the coach watched; the players improved.',
        'No change is needed.'
      ], answer: 0 },

    { id: 33, section: 'english', topic: 'Rhetorical Skills',
      text: `Which detail would be LEAST relevant to include in a paragraph specifically about the economic impact of a new highway?`,
      options: [
        'The number of jobs created during highway construction.',
        'The color of the construction workers\' safety vests.',
        'The increase in property values near the new highway exits.',
        'Projected toll revenue over the next decade.'
      ], answer: 1 },

    { id: 34, section: 'english', topic: 'Style & Tone',
      text: `Which underlined word choice best fits a scientific report describing experimental results?`,
      options: ['The data indicate a statistically significant correlation.', 'The data show a kind of really big connection.', 'The data are basically showing a huge link, like, between things.', 'The data sort of hint at something.'], answer: 0 },

    { id: 35, section: 'english', topic: 'Punctuation',
      text: `Which sentence correctly uses quotation marks and punctuation together?`,
      options: [
        'She said, "The results are ready," and handed me the folder.',
        'She said "The results are ready", and handed me the folder.',
        'She said, "The results are ready" and handed me the folder".',
        'She said, "The results are ready." and handed me the folder.'
      ], answer: 0 },

    { id: 36, section: 'english', topic: 'Grammar & Usage',
      text: `Each employee must submit their timesheet by Friday, or they will not be paid on schedule.

In a context requiring formal, traditional agreement, which revision is most appropriate?`,
      options: [
        'All employees must submit their timesheets by Friday, or they will not be paid on schedule.',
        'Each employee must submit they\'re timesheet by Friday.',
        'Each employees must submit their timesheet by Friday.',
        'No change is needed.'
      ], answer: 0 },

    { id: 37, section: 'english', topic: 'Sentence Structure',
      text: `Which sentence correctly fixes the misplaced modifier?
"Walking down the street, the streetlights suddenly flickered off."`,
      options: [
        'As I walked down the street, the streetlights suddenly flickered off.',
        'Walking down the street suddenly, the streetlights flickered off.',
        'The streetlights, walking down the street, flickered off suddenly.',
        'No change is needed.'
      ], answer: 0 },

    { id: 38, section: 'english', topic: 'Rhetorical Skills',
      text: `A paragraph about a town's annual harvest festival would most benefit from which addition to engage readers?`,
      options: [
        'A brief, vivid description of the festival\'s sights and sounds.',
        'A long list of every vendor present at the festival for the past decade.',
        'An unrelated paragraph about the writer\'s personal grocery list.',
        'A technical explanation of crop rotation methods.'
      ], answer: 0 },

    { id: 39, section: 'english', topic: 'Style & Tone',
      text: `Which choice best avoids wordiness?
"In spite of the fact that it was late, she continued to work on the report."`,
      options: [
        'Although it was late, she continued working on the report.',
        'In spite of it being late in the day, the report continued being worked on by her.',
        'Despite the lateness of the hour being what it was, she worked on.',
        'No change is needed.'
      ], answer: 0 },

    { id: 40, section: 'english', topic: 'Punctuation',
      text: `The professor recommended three books: a novel, a memoir, and a collection of essays.

Is this sentence punctuated correctly?`,
      options: ['Yes, the colon correctly introduces the list.', 'No, a semicolon should replace the colon.', 'No, the colon should be a comma.', 'No, no punctuation should follow "books."'], answer: 0 },

    { id: 41, section: 'english', topic: 'Grammar & Usage',
      text: `The data shows that the new method is more effective then the old one.

Which correction should be made?`,
      options: ['than the old one', 'then to the old one', 'then; the old one', 'No change is needed'], answer: 0 },

    { id: 42, section: 'english', topic: 'Sentence Structure',
      text: `Which revision best corrects this fragment?
"Because the bridge had been closed for repairs since early spring."`,
      options: [
        'The bridge had been closed for repairs since early spring.',
        'Because, the bridge had been closed for repairs since early spring.',
        'Because the bridge had been; closed for repairs since early spring.',
        'No change is needed.'
      ], answer: 0 },

    { id: 43, section: 'english', topic: 'Rhetorical Skills',
      text: `Which sentence would best conclude a persuasive essay arguing for increased funding for public transportation?`,
      options: [
        'Investing in public transportation today will pay dividends for generations of commuters to come.',
        'Anyway, that\'s basically it about buses and trains.',
        'Public transportation exists in many cities.',
        'Some people like buses more than cars.'
      ], answer: 0 },

    { id: 44, section: 'english', topic: 'Style & Tone',
      text: `Which version maintains a consistent, objective tone appropriate for a news article?`,
      options: [
        'City officials announced the policy change on Tuesday.',
        'City officials, like, announced this huge policy thing on Tuesday.',
        'OMG the city totally changed the policy on Tuesday!',
        'Officials announced some boring policy change, whatever.'
      ], answer: 0 },

    { id: 45, section: 'english', topic: 'Punctuation',
      text: `Which sentence correctly punctuates a direct address?`,
      options: ['Thank you, Dr. Martinez, for your guidance.', 'Thank you Dr. Martinez for your guidance.', 'Thank you, Dr. Martinez for your guidance.', 'Thank you Dr. Martinez, for your guidance.'], answer: 0 },

    { id: 46, section: 'english', topic: 'Grammar & Usage',
      text: `Me and him went to the store after practice.

Which correction fixes the pronoun error?`,
      options: ['He and I went to the store after practice.', 'Him and I went to the store after practice.', 'Me and he went to the store after practice.', 'No change is needed.'], answer: 0 },

    { id: 47, section: 'english', topic: 'Sentence Structure',
      text: `Which option best fixes the faulty parallelism?
"The job requires strong communication skills, being able to manage time well, and to work in teams."`,
      options: [
        'The job requires strong communication skills, good time management, and the ability to work in teams.',
        'The job requires strong communication skills, managing time well, and to work in teams.',
        'The job requires strong communication, being able to manage time, and to work well.',
        'No change is needed.'
      ], answer: 0 },

    { id: 48, section: 'english', topic: 'Rhetorical Skills',
      text: `A writer wants to emphasize the urgency of climate action in a concluding paragraph. Which sentence best achieves this goal?`,
      options: [
        'The window for meaningful action is closing faster than many realize.',
        'Climate change is a topic some people discuss.',
        'There are many opinions about the environment.',
        'This essay has been about climate change.'
      ], answer: 0 },

    { id: 49, section: 'english', topic: 'Style & Tone',
      text: `Which choice eliminates unnecessary repetition?
"The report was clear, understandable, and easy to comprehend for all readers."`,
      options: [
        'The report was clear and easy to understand for all readers.',
        'The report was clear, understandable, easy, and simple to get for readers.',
        'The report, being clear and understandable, was easy to comprehend, clearly.',
        'No change is needed.'
      ], answer: 0 },

    { id: 50, section: 'english', topic: 'Punctuation',
      text: `Which sentence correctly uses an em dash for emphasis?`,
      options: [
        'The decision—though difficult—was ultimately the right one.',
        'The decision, though difficult was ultimately the right one—',
        '—The decision though difficult was ultimately the right one.',
        'The decision though, difficult—was ultimately the right one.'
      ], answer: 0 },

    { id: 51, section: 'english', topic: 'Grammar & Usage',
      text: `The amount of students attending the lecture surprised the professor.

Which correction should be made?`,
      options: ['The number of students', 'The amount of student', 'An amount of students', 'No change is needed'], answer: 0 },

    { id: 52, section: 'english', topic: 'Sentence Structure',
      text: `Which sentence avoids an awkward shift in subject?
"After finishing the marathon, a sense of accomplishment filled her."`,
      options: [
        'After finishing the marathon, she felt a sense of accomplishment.',
        'After finishing the marathon, accomplishment was felt.',
        'A sense of accomplishment, after finishing the marathon, filled.',
        'No change is needed.'
      ], answer: 0 },

    { id: 53, section: 'english', topic: 'Rhetorical Skills',
      text: `Which sentence would be most effective as a topic sentence for a paragraph about the benefits of bilingual education?`,
      options: [
        'Bilingual education offers cognitive and social advantages that extend well beyond language skills alone.',
        'Some schools teach more than one language.',
        'This paragraph discusses bilingual education.',
        'Language is a topic many people find interesting.'
      ], answer: 0 },

    { id: 54, section: 'english', topic: 'Style & Tone',
      text: `Which revision best matches the formal register of an academic essay?
"A lot of researchers think the theory is kind of outdated now."`,
      options: [
        'Many researchers now consider the theory outdated.',
        'A whole bunch of researchers are like, this theory is old.',
        'Researchers, like, mostly think it\'s outdated, you know.',
        'No change is needed.'
      ], answer: 0 },

    { id: 55, section: 'english', topic: 'Punctuation',
      text: `Which choice correctly separates two independent clauses?`,
      options: [
        'The rain stopped; the sun came out almost immediately.',
        'The rain stopped, the sun came out almost immediately.',
        'The rain stopped the sun came out almost immediately.',
        'The rain, stopped the sun, came out almost immediately.'
      ], answer: 0 },

    { id: 56, section: 'english', topic: 'Grammar & Usage',
      text: `Less people attended the concert this year compared to last year.

Which correction should be made?`,
      options: ['Fewer people', 'Lesser people', 'Few people', 'No change is needed'], answer: 0 },

    { id: 57, section: 'english', topic: 'Sentence Structure',
      text: `Which sentence best uses subordination to show a cause-and-effect relationship?`,
      options: [
        'Because the factory adopted new safety protocols, accident rates dropped significantly.',
        'The factory adopted new safety protocols. Accident rates dropped significantly.',
        'The factory adopted new safety protocols, and, accident rates dropped.',
        'New safety protocols, the factory adopted, accident rates dropped.'
      ], answer: 0 },

    { id: 58, section: 'english', topic: 'Rhetorical Skills',
      text: `An essay's introduction currently begins with a dictionary definition of "courage." A stronger alternative opening would be:`,
      options: [
        'A brief anecdote illustrating an act of courage in a specific, vivid moment.',
        'Another, longer dictionary definition.',
        'A list of synonyms for courage.',
        'A statement that courage is hard to define.'
      ], answer: 0 },

    { id: 59, section: 'english', topic: 'Style & Tone',
      text: `Which word best fits a formal letter requesting a refund?`,
      options: ['I am writing to request a refund for the defective product.', 'Yo, I need my money back for this broken thing.', 'Honestly, this product is total garbage, gimme my cash.', 'Hey, can you like, refund me or whatever.'], answer: 0 },

    { id: 60, section: 'english', topic: 'Punctuation',
      text: `Which sentence correctly punctuates an introductory phrase?`,
      options: [
        'After the long meeting, everyone went home exhausted.',
        'After the long meeting everyone, went home exhausted.',
        'After, the long meeting everyone went home exhausted.',
        'After the long meeting; everyone went home exhausted.'
      ], answer: 0 },

    { id: 61, section: 'english', topic: 'Grammar & Usage',
      text: `She speaks more eloquenter than her predecessor did.

Which correction should be made?`,
      options: ['more eloquently', 'most eloquenter', 'eloquently more', 'No change is needed'], answer: 0 },

    { id: 62, section: 'english', topic: 'Sentence Structure',
      text: `Which version avoids an unclear pronoun reference?
"When the manager spoke to the intern, he seemed nervous."`,
      options: [
        'When the manager spoke to the intern, the intern seemed nervous.',
        'When the manager spoke to him, he seemed nervous to him.',
        'He seemed nervous when the manager spoke to him, the intern.',
        'No change is needed.'
      ], answer: 0 },

    { id: 63, section: 'english', topic: 'Rhetorical Skills',
      text: `Which supporting detail would most strengthen a paragraph arguing that urban green spaces improve mental health?`,
      options: [
        'A cited study showing reduced stress hormone levels among city-dwellers with regular park access.',
        'A description of the writer\'s favorite color of grass.',
        'An unrelated note about the price of city parking.',
        'A list of park opening hours.'
      ], answer: 0 },

    { id: 64, section: 'english', topic: 'Style & Tone',
      text: `Which sentence avoids an inappropriate shift from formal to informal language mid-paragraph?`,
      options: [
        'The committee carefully reviewed each proposal before reaching its decision.',
        'The committee carefully reviewed each proposal, and then they were like, "let\'s do this one."',
        'The committee, after going over stuff, picked one.',
        'After much deliberation, the committee was all in on one proposal, no cap.'
      ], answer: 0 },

    { id: 65, section: 'english', topic: 'Punctuation',
      text: `Which sentence correctly uses parentheses?`,
      options: [
        'The experiment (conducted over six weeks) produced unexpected results.',
        'The experiment, (conducted over six weeks) produced unexpected results.',
        'The experiment conducted (over six weeks, produced) unexpected results.',
        'The experiment conducted over six weeks) produced (unexpected results.'
      ], answer: 0 },

    { id: 66, section: 'english', topic: 'Grammar & Usage',
      text: `By next year, the construction project will be completed for over a decade.

Which correction fixes the verb tense error?`,
      options: ['will have been completed', 'is completed', 'was completing', 'No change is needed'], answer: 0 },

    { id: 67, section: 'english', topic: 'Sentence Structure',
      text: `Which choice best eliminates the wordy construction?
"It is important that all employees should make sure that they arrive on time."`,
      options: [
        'All employees should arrive on time.',
        'It is important and necessary that employees make sure to arrive on time.',
        'Employees should make sure that they should arrive on time, which is important.',
        'No change is needed.'
      ], answer: 0 },

    { id: 68, section: 'english', topic: 'Rhetorical Skills',
      text: `Which sentence would most effectively transition from a paragraph about a problem to one proposing a solution?`,
      options: [
        'Fortunately, several practical solutions have emerged in recent years.',
        'Anyway, here\'s another paragraph.',
        'That was a problem. Moving on.',
        'Problems are common in many areas of life.'
      ], answer: 0 },

    { id: 69, section: 'english', topic: 'Style & Tone',
      text: `Which version best fits the tone of a scholarship application essay?`,
      options: [
        'My experience volunteering at the clinic deepened my commitment to community health.',
        'Volunteering at the clinic was pretty cool, ngl.',
        'I did some volunteering, it was fine I guess.',
        'The clinic thing was lit, taught me stuff.'
      ], answer: 0 },

    { id: 70, section: 'english', topic: 'Punctuation',
      text: `Which sentence is punctuated correctly?`,
      options: [
        'The award, given annually, recognizes outstanding achievement in science.',
        'The award given annually, recognizes outstanding achievement, in science.',
        'The award, given annually recognizes, outstanding achievement in science.',
        'The award given, annually recognizes outstanding, achievement in science.'
      ], answer: 0 },

    { id: 71, section: 'english', topic: 'Grammar & Usage',
      text: `The committee, along with several advisors, are reviewing the proposal.

Which correction fixes the agreement error?`,
      options: ['is reviewing', 'were reviewing', 'have reviewed', 'No change is needed'], answer: 0 },

    { id: 72, section: 'english', topic: 'Sentence Structure',
      text: `Which choice best fixes the inconsistent verb tense?
"She finishes her homework, then went outside to play."`,
      options: [
        'She finished her homework, then went outside to play.',
        'She finishes her homework, then goes outside to play.',
        'She finished her homework, then go outside to play.',
        'Either A or B would be acceptable.'
      ], answer: 3 },

    { id: 73, section: 'english', topic: 'Rhetorical Skills',
      text: `Which sentence would be least appropriate to include in a formal research paper on renewable energy policy?`,
      options: [
        'Government incentives have accelerated adoption of solar technology since 2015.',
        'Honestly, solar panels are just super cool to look at.',
        'Several studies cited in this paper support a correlation between subsidies and adoption rates.',
        'Policy analysts have identified three key barriers to widespread adoption.'
      ], answer: 1 },

    { id: 74, section: 'english', topic: 'Style & Tone',
      text: `Which sentence best maintains an objective, analytical tone in a literary analysis essay?`,
      options: [
        'The author\'s use of repetition emphasizes the protagonist\'s growing isolation.',
        'The author totally nails the isolation vibe with repetition, it\'s great.',
        'I love how repetitive this part is, so good.',
        'This part is super sad because of all the repeating words.'
      ], answer: 0 },

    { id: 75, section: 'english', topic: 'Punctuation',
      text: `Which sentence correctly punctuates a series containing internal commas?`,
      options: [
        'The relay team included runners from Ohio; Austin, Texas; and Reno, Nevada.',
        'The relay team included runners from Ohio, Austin, Texas, and Reno, Nevada.',
        'The relay team included runners from Ohio: Austin, Texas: and Reno, Nevada.',
        'The relay team included runners from Ohio, Austin Texas, and Reno Nevada.'
      ], answer: 0 },

    // ══════════════════════════════════════════
    // SECTION 2: MATH (60 questions, 60 min)
    // Topics: Pre-Algebra, Elementary Algebra, Intermediate Algebra,
    //         Coordinate Geometry, Plane Geometry, Trigonometry
    // ══════════════════════════════════════════

    { id: 76, section: 'math', topic: 'Pre-Algebra',
      text: `A store is offering a 25% discount on all items. If a jacket originally costs $80, what is the sale price?`,
      options: ['$20', '$40', '$60', '$70'], answer: 2 },

    { id: 77, section: 'math', topic: 'Elementary Algebra',
      text: `If 3x + 7 = 22, what is the value of x?`,
      options: ['3', '5', '7', '9'], answer: 1 },

    { id: 78, section: 'math', topic: 'Intermediate Algebra',
      text: `What are the solutions to the equation x² – 5x + 6 = 0?`,
      options: ['x = 2 and x = 3', 'x = –2 and x = –3', 'x = 1 and x = 6', 'x = –1 and x = –6'], answer: 0 },

    { id: 79, section: 'math', topic: 'Coordinate Geometry',
      text: `What is the slope of the line passing through the points (2, 5) and (6, 13)?`,
      options: ['1', '2', '3', '4'], answer: 1 },

    { id: 80, section: 'math', topic: 'Plane Geometry',
      text: `A rectangle has a length of 12 cm and a width of 8 cm. What is the area of the rectangle?`,
      options: ['40 cm²', '80 cm²', '96 cm²', '120 cm²'], answer: 2 },

    { id: 81, section: 'math', topic: 'Trigonometry',
      text: `In a right triangle, if sin(θ) = 3/5, what is cos(θ)?`,
      options: ['3/4', '4/5', '4/3', '5/3'], answer: 1 },

    { id: 82, section: 'math', topic: 'Pre-Algebra',
      text: `What is 15% of 240?`,
      options: ['24', '32', '36', '48'], answer: 2 },

    { id: 83, section: 'math', topic: 'Elementary Algebra',
      text: `Simplify: 4(x – 3) + 2x`,
      options: ['6x – 12', '6x – 3', '2x – 12', '6x + 12'], answer: 0 },

    { id: 84, section: 'math', topic: 'Intermediate Algebra',
      text: `If f(x) = 2x² – 3x + 1, what is f(2)?`,
      options: ['3', '5', '7', '9'], answer: 0 },

    { id: 85, section: 'math', topic: 'Plane Geometry',
      text: `A circle has a radius of 7 cm. What is its circumference, in terms of π?`,
      options: ['7π cm', '14π cm', '49π cm', '21π cm'], answer: 1 },

    { id: 86, section: 'math', topic: 'Pre-Algebra',
      text: `A recipe requires 2/3 cup of sugar for 12 cookies. How much sugar is needed for 18 cookies, assuming a proportional increase?`,
      options: ['3/4 cup', '1 cup', '1 1/3 cup', '1 1/2 cup'], answer: 1 },

    { id: 87, section: 'math', topic: 'Elementary Algebra',
      text: `Solve for x: 2(x + 4) = 3x – 2`,
      options: ['6', '8', '10', '12'], answer: 1 },

    { id: 88, section: 'math', topic: 'Intermediate Algebra',
      text: `What is the value of x in the equation 2^x = 32?`,
      options: ['4', '5', '6', '16'], answer: 1 },

    { id: 89, section: 'math', topic: 'Coordinate Geometry',
      text: `What is the midpoint of the segment connecting (–2, 4) and (6, –8)?`,
      options: ['(2, –2)', '(4, –4)', '(2, 2)', '(–2, 2)'], answer: 0 },

    { id: 90, section: 'math', topic: 'Plane Geometry',
      text: `The interior angles of a triangle measure x, 2x, and 3x degrees. What is the value of x?`,
      options: ['20', '30', '36', '45'], answer: 1 },

    { id: 91, section: 'math', topic: 'Trigonometry',
      text: `If tan(θ) = 1 and 0° < θ < 90°, what is θ?`,
      options: ['30°', '45°', '60°', '90°'], answer: 1 },

    { id: 92, section: 'math', topic: 'Pre-Algebra',
      text: `What is the least common multiple of 8 and 12?`,
      options: ['16', '20', '24', '96'], answer: 2 },

    { id: 93, section: 'math', topic: 'Elementary Algebra',
      text: `Factor completely: x² – 9`,
      options: ['(x – 3)(x + 3)', '(x – 9)(x + 1)', '(x – 3)²', '(x + 9)(x – 1)'], answer: 0 },

    { id: 94, section: 'math', topic: 'Intermediate Algebra',
      text: `A system of equations is given: y = 2x + 1 and y = –x + 7. What is the value of x at the point of intersection?`,
      options: ['1', '2', '3', '4'], answer: 1 },

    { id: 95, section: 'math', topic: 'Coordinate Geometry',
      text: `What is the equation of a line with slope –2 that passes through the point (0, 5)?`,
      options: ['y = –2x + 5', 'y = 2x + 5', 'y = –2x – 5', 'y = 5x – 2'], answer: 0 },

    { id: 96, section: 'math', topic: 'Plane Geometry',
      text: `A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?`,
      options: ['9', '10', '12', '14'], answer: 1 },

    { id: 97, section: 'math', topic: 'Trigonometry',
      text: `What is the value of sin(30°)?`,
      options: ['1/2', '√2/2', '√3/2', '1'], answer: 0 },

    { id: 98, section: 'math', topic: 'Pre-Algebra',
      text: `A car travels 240 miles in 4 hours. What is its average speed in miles per hour?`,
      options: ['40 mph', '50 mph', '60 mph', '70 mph'], answer: 2 },

    { id: 99, section: 'math', topic: 'Elementary Algebra',
      text: `If 5x – 3 = 2x + 12, what is the value of x?`,
      options: ['3', '4', '5', '6'], answer: 2 },

    { id: 100, section: 'math', topic: 'Intermediate Algebra',
      text: `What is the discriminant of the quadratic equation x² + 4x + 4 = 0?`,
      options: ['0', '4', '8', '16'], answer: 0 },

    { id: 101, section: 'math', topic: 'Coordinate Geometry',
      text: `What is the distance between the points (1, 2) and (4, 6)?`,
      options: ['3', '4', '5', '7'], answer: 2 },

    { id: 102, section: 'math', topic: 'Plane Geometry',
      text: `A square has a perimeter of 36 cm. What is its area?`,
      options: ['64 cm²', '72 cm²', '81 cm²', '144 cm²'], answer: 2 },

    { id: 103, section: 'math', topic: 'Trigonometry',
      text: `In a right triangle, the angle θ satisfies cos(θ) = 0.6. What is sin(θ), given the Pythagorean identity?`,
      options: ['0.4', '0.6', '0.8', '1.0'], answer: 2 },

    { id: 104, section: 'math', topic: 'Pre-Algebra',
      text: `What is the value of |–7 + 3|?`,
      options: ['4', '–4', '10', '–10'], answer: 0 },

    { id: 105, section: 'math', topic: 'Elementary Algebra',
      text: `Simplify: (3x²y)(2xy³)`,
      options: ['6x³y⁴', '5x³y⁴', '6x²y³', '5x²y³'], answer: 0 },

    { id: 106, section: 'math', topic: 'Intermediate Algebra',
      text: `If g(x) = √(x + 5), what is the domain of g?`,
      options: ['x ≥ –5', 'x ≤ –5', 'x ≥ 5', 'all real numbers'], answer: 0 },

    { id: 107, section: 'math', topic: 'Coordinate Geometry',
      text: `A line has the equation 2x + 3y = 12. What is its y-intercept?`,
      options: ['2', '3', '4', '6'], answer: 2 },

    { id: 108, section: 'math', topic: 'Plane Geometry',
      text: `What is the volume of a rectangular box with length 5, width 4, and height 3?`,
      options: ['12', '20', '60', '120'], answer: 2 },

    { id: 109, section: 'math', topic: 'Trigonometry',
      text: `What is the period of the function y = sin(2x)?`,
      options: ['π', '2π', 'π/2', '4π'], answer: 0 },

    { id: 110, section: 'math', topic: 'Pre-Algebra',
      text: `A jar contains 40 marbles, of which 30% are blue. How many marbles are blue?`,
      options: ['10', '12', '14', '16'], answer: 1 },

    { id: 111, section: 'math', topic: 'Elementary Algebra',
      text: `Solve for x: x/4 + 3 = 9`,
      options: ['12', '18', '24', '36'], answer: 1 },

    { id: 112, section: 'math', topic: 'Intermediate Algebra',
      text: `What is the sum of the roots of the equation x² – 6x + 8 = 0?`,
      options: ['4', '6', '8', '–6'], answer: 1 },

    { id: 113, section: 'math', topic: 'Coordinate Geometry',
      text: `Two lines, y = 3x + 2 and y = 3x – 5, are graphed on the same coordinate plane. What is true about these lines?`,
      options: ['They are parallel.', 'They are perpendicular.', 'They intersect at one point.', 'They are the same line.'], answer: 0 },

    { id: 114, section: 'math', topic: 'Plane Geometry',
      text: `A sector of a circle has a central angle of 90° and a radius of 4 cm. What is the area of the sector, in terms of π?`,
      options: ['2π cm²', '4π cm²', '8π cm²', '16π cm²'], answer: 1 },

    { id: 115, section: 'math', topic: 'Trigonometry',
      text: `If a right triangle has an angle of 60° and the side opposite that angle measures 6√3, what is the length of the hypotenuse?`,
      options: ['6', '9', '12', '6√3'], answer: 2 },

    { id: 116, section: 'math', topic: 'Pre-Algebra',
      text: `What is the greatest common factor of 36 and 48?`,
      options: ['6', '8', '12', '24'], answer: 2 },

    { id: 117, section: 'math', topic: 'Elementary Algebra',
      text: `Expand and simplify: (x + 5)(x – 2)`,
      options: ['x² + 3x – 10', 'x² – 3x – 10', 'x² + 7x – 10', 'x² – 7x + 10'], answer: 0 },

    { id: 118, section: 'math', topic: 'Intermediate Algebra',
      text: `What is the inverse of the function f(x) = 3x – 6?`,
      options: ['f⁻¹(x) = (x + 6)/3', 'f⁻¹(x) = (x – 6)/3', 'f⁻¹(x) = 3x + 6', 'f⁻¹(x) = (x/3) – 6'], answer: 0 },

    { id: 119, section: 'math', topic: 'Coordinate Geometry',
      text: `What is the slope of a line that is perpendicular to a line with slope 2/3?`,
      options: ['2/3', '–2/3', '3/2', '–3/2'], answer: 3 },

    { id: 120, section: 'math', topic: 'Plane Geometry',
      text: `A cylinder has a radius of 3 cm and a height of 10 cm. What is its volume, in terms of π?`,
      options: ['30π cm³', '60π cm³', '90π cm³', '300π cm³'], answer: 2 },

    { id: 121, section: 'math', topic: 'Trigonometry',
      text: `What is the value of cos(0°)?`,
      options: ['0', '1', '–1', 'undefined'], answer: 1 },

    { id: 122, section: 'math', topic: 'Pre-Algebra',
      text: `A bag contains red, blue, and green marbles in the ratio 2:3:5. If there are 50 marbles total, how many are blue?`,
      options: ['10', '15', '20', '25'], answer: 1 },

    { id: 123, section: 'math', topic: 'Elementary Algebra',
      text: `If 2(x – 1) – 3 = 5, what is the value of x?`,
      options: ['4', '5', '6', '7'], answer: 1 },

    { id: 124, section: 'math', topic: 'Intermediate Algebra',
      text: `What is the value of log₂(32)?`,
      options: ['4', '5', '6', '16'], answer: 1 },

    { id: 125, section: 'math', topic: 'Coordinate Geometry',
      text: `A circle is centered at (3, –2) with a radius of 5. What is the equation of the circle?`,
      options: ['(x – 3)² + (y + 2)² = 25', '(x + 3)² + (y – 2)² = 25', '(x – 3)² + (y + 2)² = 5', '(x – 3)² – (y + 2)² = 25'], answer: 0 },

    { id: 126, section: 'math', topic: 'Plane Geometry',
      text: `Two similar triangles have a scale factor of 3:5. If the smaller triangle has an area of 18 square units, what is the area of the larger triangle?`,
      options: ['30 sq units', '40 sq units', '50 sq units', '54 sq units'], answer: 2 },

    { id: 127, section: 'math', topic: 'Trigonometry',
      text: `A ladder leans against a wall, forming a 70° angle with the ground. If the ladder is 10 feet long, which expression gives the height where it touches the wall?`,
      options: ['10 sin(70°)', '10 cos(70°)', '10 tan(70°)', '10/sin(70°)'], answer: 0 },

    { id: 128, section: 'math', topic: 'Pre-Algebra',
      text: `If a is 4 more than twice b, and b = 6, what is the value of a?`,
      options: ['10', '14', '16', '20'], answer: 1 },

    { id: 129, section: 'math', topic: 'Elementary Algebra',
      text: `Solve the inequality: 3x – 5 > 10`,
      options: ['x > 5', 'x < 5', 'x > 15/3', 'x > 3'], answer: 0 },

    { id: 130, section: 'math', topic: 'Intermediate Algebra',
      text: `What is the vertex of the parabola y = (x – 3)² + 2?`,
      options: ['(3, 2)', '(–3, 2)', '(3, –2)', '(2, 3)'], answer: 0 },

    { id: 131, section: 'math', topic: 'Coordinate Geometry',
      text: `A line passes through (–1, 2) and (3, 2). What type of line is it?`,
      options: ['horizontal', 'vertical', 'diagonal with positive slope', 'diagonal with negative slope'], answer: 0 },

    { id: 132, section: 'math', topic: 'Plane Geometry',
      text: `A trapezoid has parallel sides of length 8 and 12, and a height of 5. What is its area?`,
      options: ['40', '50', '60', '100'], answer: 1 },

    { id: 133, section: 'math', topic: 'Trigonometry',
      text: `What is the amplitude of the function y = 4cos(x)?`,
      options: ['1', '2', '4', '8'], answer: 2 },

    { id: 134, section: 'math', topic: 'Pre-Algebra',
      text: `A number increased by 20% equals 96. What is the original number?`,
      options: ['76', '78', '80', '84'], answer: 2 },

    { id: 135, section: 'math', topic: 'Elementary Algebra',
      text: `If 4x + 2y = 16 and y = 2x, what is the value of x?`,
      options: ['1', '2', '3', '4'], answer: 1 },

    // ══════════════════════════════════════════
    // SECTION 3: READING (40 questions, 35 min)
    // Topics: Literary Narrative, Social Science, Humanities, Natural Science
    // ══════════════════════════════════════════

    { id: 136, section: 'reading', topic: 'Literary Narrative',
      text: `Read the following passage and answer the question.

"Priya had always felt most at home in her grandmother's kitchen, where the scent of cardamom and cloves hung in the air like old memories. As she stirred the chai, she thought about how much had changed since she left her hometown—the city had made her efficient, ambitious, and somehow smaller."

Based on the passage, the city has made Priya feel:`,
      options: ['More connected to her cultural roots', 'More successful but somehow diminished', 'Happier and more fulfilled', 'Nostalgic but not regretful'], answer: 1 },

    { id: 137, section: 'reading', topic: 'Social Science',
      text: `A passage discusses how urbanization in the 20th century changed social structures. The author would most likely agree that urbanization:`,
      options: ['Had no significant effect on family structures', 'Led to both opportunities and disruptions in community bonds', 'Was entirely beneficial for economic development', 'Should have been prevented to preserve traditional ways of life'], answer: 1 },

    { id: 138, section: 'reading', topic: 'Natural Science',
      text: `According to a passage about photosynthesis, which of the following is the primary function of chlorophyll in plants?`,
      options: ['Transporting water from roots to leaves', 'Absorbing sunlight to power the conversion of CO₂ into glucose', 'Releasing oxygen as a byproduct of respiration', 'Storing glucose for later energy use'], answer: 1 },

    { id: 139, section: 'reading', topic: 'Humanities',
      text: `A passage about Renaissance art argues that the period represented a fundamental shift in how humans perceived themselves. The central claim of this passage is that:`,
      options: ['Religious themes disappeared from art entirely during this period', 'Renaissance artists copied Greek and Roman styles without innovation', 'Humanist ideas placed greater emphasis on individual achievement and experience', 'The Church remained the sole patron of all significant artwork'], answer: 2 },

    { id: 140, section: 'reading', topic: 'Literary Narrative',
      text: `"The old fisherman's hands, weathered and cracked from decades at sea, moved with a precision that seemed at odds with their roughness, untangling the net as though it were silk."

This description primarily suggests that the fisherman:`,
      options: ['Has lost his skill due to age', 'Possesses a practiced expertise despite physical wear', 'Dislikes his profession', 'Is new to fishing'], answer: 1 },

    { id: 141, section: 'reading', topic: 'Social Science',
      text: `A passage examines how access to microloans affected small business ownership among women in rural communities. The author most likely includes statistical data to:`,
      options: ['Entertain readers with unrelated numbers', 'Support the argument with concrete evidence', 'Confuse the central claim', 'Replace the need for a clear thesis'], answer: 1 },

    { id: 142, section: 'reading', topic: 'Natural Science',
      text: `A passage on plate tectonics explains that the Pacific Ring of Fire experiences frequent seismic activity. According to the passage, this is primarily because:`,
      options: ['The ocean floor never moves', 'Multiple tectonic plate boundaries converge in that region', 'Volcanic activity is unrelated to tectonic plates', 'Earthquakes only occur near coastlines'], answer: 1 },

    { id: 143, section: 'reading', topic: 'Humanities',
      text: `An essay on the evolution of jazz argues that improvisation became central to the genre's identity. The author's tone toward improvisation can best be described as:`,
      options: ['Dismissive', 'Appreciative', 'Indifferent', 'Hostile'], answer: 1 },

    { id: 144, section: 'reading', topic: 'Literary Narrative',
      text: `"He stood at the threshold for a long moment before stepping inside, as if crossing into the house meant crossing into a version of himself he no longer recognized."

This sentence suggests that the character feels:`,
      options: ['Excited to return home', 'Apprehensive about a personal change', 'Completely unaffected by the house', 'Eager to leave immediately'], answer: 1 },

    { id: 145, section: 'reading', topic: 'Social Science',
      text: `A passage discusses how remote work has reshaped expectations around office attendance since 2020. The author suggests that the shift has primarily:`,
      options: ['Eliminated all in-person collaboration permanently', 'Changed how companies define productivity and presence', 'Had no measurable effect on company culture', 'Made commuting more popular than before'], answer: 1 },

    { id: 146, section: 'reading', topic: 'Natural Science',
      text: `A passage explains that coral bleaching occurs when corals expel the symbiotic algae living in their tissues. According to the passage, this expulsion is most directly triggered by:`,
      options: ['Increased water temperatures', 'A decrease in sunlight', 'The presence of fish predators', 'A surplus of nutrients'], answer: 0 },

    { id: 147, section: 'reading', topic: 'Humanities',
      text: `A passage on the history of the novel argues that the rise of the printing press directly enabled longer prose narratives to reach wider audiences. The author's main purpose is to:`,
      options: ['Criticize the printing press', 'Explain a historical cause-and-effect relationship', 'Argue that novels existed before printing', 'Describe the physical mechanics of a printing press'], answer: 1 },

    { id: 148, section: 'reading', topic: 'Literary Narrative',
      text: `"She laughed at the joke, though the sound felt hollow even to her own ears, as if it belonged to someone else entirely."

This detail most strongly suggests that the character:`,
      options: ['Genuinely finds the joke funny', 'Is masking her true feelings', 'Has never laughed before', 'Dislikes the person who told the joke'], answer: 1 },

    { id: 149, section: 'reading', topic: 'Social Science',
      text: `A passage compares consumer spending patterns before and after a major recession. The author primarily organizes the passage by:`,
      options: ['Listing unrelated anecdotes', 'Presenting a chronological before-and-after comparison', 'Avoiding any reference to data', 'Focusing solely on one individual\'s spending habits'], answer: 1 },

    { id: 150, section: 'reading', topic: 'Natural Science',
      text: `A passage on bird migration explains that some species rely on magnetic fields to navigate. According to the passage, this ability is best described as:`,
      options: ['A learned behavior taught by parent birds', 'An innate biological sense', 'A random and unreliable process', 'Limited only to nocturnal species'], answer: 1 },

    { id: 151, section: 'reading', topic: 'Humanities',
      text: `An essay on classical architecture notes that Greek columns followed strict proportional rules. The author suggests that these rules were primarily intended to:`,
      options: ['Achieve a sense of visual harmony and balance', 'Make buildings collapse less often', 'Reduce construction costs', 'Confuse foreign visitors'], answer: 0 },

    { id: 152, section: 'reading', topic: 'Literary Narrative',
      text: `"The letter sat unopened on the table for three days, a small paper monument to everything he was afraid to know."

The phrase "paper monument" most likely suggests that the letter represents:`,
      options: ['A minor, unimportant object', 'A significant, emotionally weighted symbol', 'A historical artifact', 'A gift from a stranger'], answer: 1 },

    { id: 153, section: 'reading', topic: 'Social Science',
      text: `A passage discusses how social media algorithms shape political polarization. The author's central argument is most likely that:`,
      options: ['Algorithms have no influence on user beliefs', 'Algorithms can reinforce existing beliefs by limiting exposure to differing views', 'All users see identical content regardless of behavior', 'Polarization existed only before social media'], answer: 1 },

    { id: 154, section: 'reading', topic: 'Natural Science',
      text: `A passage explains that antibiotic resistance develops when bacteria are repeatedly exposed to sub-lethal doses of antibiotics. According to the passage, the primary mechanism behind this resistance is:`,
      options: ['Random chance with no biological basis', 'Natural selection favoring resistant bacterial strains', 'Bacteria intentionally avoiding antibiotics', 'A decrease in bacterial reproduction rates'], answer: 1 },

    { id: 155, section: 'reading', topic: 'Humanities',
      text: `An essay on folk music traditions argues that oral storytelling preserved cultural history before written records. The author treats oral tradition as:`,
      options: ['An unreliable and inferior method of preservation', 'A legitimate and valuable historical record', 'Completely identical to written history', 'A modern invention'], answer: 1 },

    { id: 156, section: 'reading', topic: 'Literary Narrative',
      text: `"The garden had grown wild in his absence, vines creeping over the fence he had once kept so carefully trimmed."

This image most likely symbolizes:`,
      options: ['The character\'s renewed interest in gardening', 'Neglect and the passage of time', 'A sudden burst of plant growth due to rain', 'The character\'s arrival at a brand-new home'], answer: 1 },

    { id: 157, section: 'reading', topic: 'Social Science',
      text: `A passage examines the economic impact of automation on manufacturing jobs. The author most likely structures the passage to:`,
      options: ['Present only one perspective without acknowledging complexity', 'Weigh both the job losses and new opportunities created by automation', 'Argue that automation has no economic effects', 'Focus exclusively on historical manufacturing methods'], answer: 1 },

    { id: 158, section: 'reading', topic: 'Natural Science',
      text: `A passage on glacial retreat notes that melting ice exposes darker rock and soil, which absorb more solar heat. This process is best described as:`,
      options: ['A feedback loop that accelerates further melting', 'A process that has no effect on melting rates', 'A phenomenon limited to tropical regions', 'Unrelated to global temperature changes'], answer: 0 },

    { id: 159, section: 'reading', topic: 'Humanities',
      text: `An essay on modern poetry argues that free verse rejected traditional rhyme schemes to better capture natural speech patterns. The author's attitude toward free verse is best described as:`,
      options: ['Critical', 'Approving', 'Confused', 'Indifferent'], answer: 1 },

    { id: 160, section: 'reading', topic: 'Literary Narrative',
      text: `"He answered every question carefully, choosing each word as though it might be weighed and measured later."

This detail suggests that the character is:`,
      options: ['Speaking carelessly', 'Being deliberate and cautious in conversation', 'Refusing to answer at all', 'Angry at the person asking questions'], answer: 1 },

    { id: 161, section: 'reading', topic: 'Social Science',
      text: `A passage discusses how minimum wage increases affect small business hiring decisions. The author most likely presents this topic as:`,
      options: ['A settled issue with no disagreement among economists', 'A complex issue with competing perspectives and trade-offs', 'An issue unrelated to economics', 'A purely historical topic with no modern relevance'], answer: 1 },

    { id: 162, section: 'reading', topic: 'Natural Science',
      text: `A passage explains that vaccines work by training the immune system to recognize specific pathogens. According to the passage, this training primarily involves:`,
      options: ['Introducing a harmless form or piece of the pathogen', 'Removing the immune system\'s memory of past infections', 'Directly killing all bacteria in the body', 'Preventing the immune system from functioning'], answer: 0 },

    { id: 163, section: 'reading', topic: 'Humanities',
      text: `An essay on film history argues that the transition from silent films to "talkies" changed acting styles dramatically. The author supports this claim primarily by:`,
      options: ['Describing specific changes in performance technique', 'Ignoring all examples from the era', 'Focusing only on box office numbers', 'Arguing that acting styles never changed'], answer: 0 },

    { id: 164, section: 'reading', topic: 'Literary Narrative',
      text: `"The city at night looked nothing like the city she remembered—brighter, louder, and somehow lonelier all at once."

This passage suggests the character's relationship with the city is best described as:`,
      options: ['Entirely positive and uncomplicated', 'Complex, marked by both familiarity and alienation', 'Completely indifferent', 'One of total rejection'], answer: 1 },

    { id: 165, section: 'reading', topic: 'Social Science',
      text: `A passage on global trade discusses how tariffs affect both domestic producers and consumers. The author likely concludes that tariffs:`,
      options: ['Benefit everyone equally with no downsides', 'Create trade-offs that benefit some groups while burdening others', 'Have been proven completely ineffective in all cases', 'Only matter to large corporations'], answer: 1 },

    { id: 166, section: 'reading', topic: 'Natural Science',
      text: `A passage explains that deep ocean ecosystems near hydrothermal vents rely on chemosynthesis rather than photosynthesis. This distinction matters because:`,
      options: ['Sunlight does not reach those depths', 'Those ecosystems require more sunlight than shallow ones', 'Chemosynthesis only occurs on land', 'Hydrothermal vents block all chemical reactions'], answer: 0 },

    { id: 167, section: 'reading', topic: 'Humanities',
      text: `An essay on museum curation argues that the arrangement of artifacts shapes visitors' interpretation of history. The author's main point is that curation is:`,
      options: ['A neutral, objective process with no influence on meaning', 'An active interpretive act that can shape historical narrative', 'Irrelevant to how visitors understand exhibits', 'Solely about protecting fragile objects'], answer: 1 },

    { id: 168, section: 'reading', topic: 'Literary Narrative',
      text: `"Even as a child, she had understood that some silences were louder than any shouting match could ever be."

This line most likely suggests that the character:`,
      options: ['Grew up in a household with constant arguing', 'Developed an early sensitivity to unspoken tension', 'Never experienced any family conflict', 'Preferred loud environments'], answer: 1 },

    { id: 169, section: 'reading', topic: 'Social Science',
      text: `A passage discusses how census data informs the allocation of government resources. The author's primary purpose is most likely to:`,
      options: ['Argue that census data should be abolished', 'Explain the practical importance of accurate demographic data', 'Criticize all forms of government data collection', 'Focus only on the history of census-taking'], answer: 1 },

    { id: 170, section: 'reading', topic: 'Natural Science',
      text: `A passage explains that mutations in DNA can be either harmful, neutral, or beneficial depending on context. The author's tone toward mutation is best described as:`,
      options: ['Entirely negative', 'Balanced and explanatory', 'Dismissive of its importance', 'Focused only on harmful effects'], answer: 1 },

    { id: 171, section: 'reading', topic: 'Humanities',
      text: `An essay on calligraphy traditions argues that the physical act of handwriting carries cultural meaning beyond communication. The author would most likely agree that:`,
      options: ['Handwriting is purely functional with no symbolic value', 'The form of writing can carry as much meaning as its content', 'Digital text has completely replaced the need for handwriting study', 'Calligraphy has no connection to identity or culture'], answer: 1 },

    { id: 172, section: 'reading', topic: 'Literary Narrative',
      text: `"By the time the train pulled away, she realized she had said everything except the one thing she meant to say."

This ending most strongly conveys a sense of:`,
      options: ['Complete resolution and satisfaction', 'Missed opportunity and regret', 'Joyful anticipation', 'Total indifference'], answer: 1 },

    { id: 173, section: 'reading', topic: 'Social Science',
      text: `A passage examines how childhood access to libraries correlates with later academic achievement. The author most likely uses this correlation to argue for:`,
      options: ['Reducing public funding for libraries', 'Increased investment in public library access', 'Eliminating school curricula entirely', 'A direct, unrelated point about funding for sports'], answer: 1 },

    { id: 174, section: 'reading', topic: 'Natural Science',
      text: `A passage explains that bats use echolocation to navigate in darkness by emitting sound waves and interpreting their echoes. This process is best compared to:`,
      options: ['A biological form of sonar', 'A type of camouflage', 'A method of producing light', 'A way of storing food'], answer: 0 },

    { id: 175, section: 'reading', topic: 'Humanities',
      text: `An essay on translation theory argues that no translation can perfectly capture a text's original meaning. The author's main claim suggests that translators must:`,
      options: ['Avoid translating poetry altogether', 'Make interpretive choices that inevitably shape meaning', 'Translate word-for-word with no flexibility', 'Ignore the cultural context of the original text'], answer: 1 },

    // ══════════════════════════════════════════
    // SECTION 4: SCIENCE (40 questions, 35 min)
    // Topics: Data Representation, Research Summaries, Conflicting Viewpoints
    // ══════════════════════════════════════════

    { id: 176, section: 'science', topic: 'Data Representation',
      text: `A table shows the temperature (°C) and dissolved oxygen (mg/L) in a lake at different depths:

Depth 0m: 25°C, 8.2 mg/L
Depth 5m: 20°C, 9.1 mg/L
Depth 10m: 15°C, 10.4 mg/L
Depth 15m: 10°C, 11.8 mg/L

Based on the data, as depth increases, dissolved oxygen levels:`,
      options: ['Decrease as temperature decreases', 'Increase as temperature decreases', 'Remain constant regardless of temperature', 'Decrease as temperature increases'], answer: 1 },

    { id: 177, section: 'science', topic: 'Research Summaries',
      text: `Scientists conducted an experiment to test the effect of fertilizer concentration on plant growth. Plants were grown with 0%, 1%, 2%, and 4% fertilizer solutions. The 2% solution produced the tallest plants, while the 4% solution showed stunted growth. This suggests that:`,
      options: ['More fertilizer always leads to better plant growth', 'Plants grow best without any fertilizer', 'There is an optimal fertilizer concentration beyond which growth is inhibited', 'The experiment was inconclusive'], answer: 2 },

    { id: 178, section: 'science', topic: 'Conflicting Viewpoints',
      text: `Two scientists debate the cause of bee colony collapse disorder. Scientist A argues pesticide use is the primary cause. Scientist B argues that parasitic mites are the primary cause. Both scientists would likely agree that:`,
      options: ['Pesticides have no effect on bee populations', 'Parasitic mites are harmless to bees', 'Bee colony collapse is a serious ecological concern', 'The problem has been completely solved'], answer: 2 },

    { id: 179, section: 'science', topic: 'Data Representation',
      text: `A graph shows the relationship between hours of sunlight and crop yield for three crop varieties (A, B, C). Variety A peaks at 6 hours, Variety B peaks at 8 hours, and Variety C peaks at 10 hours of sunlight. If a farmer wants to maximize yield with 8 hours of sunlight per day, which variety should they plant?`,
      options: ['Variety A', 'Variety B', 'Variety C', 'All varieties perform equally at 8 hours'], answer: 1 },

    { id: 180, section: 'science', topic: 'Research Summaries',
      text: `Researchers tested reaction times of participants under three conditions: well-rested, mildly sleep-deprived, and severely sleep-deprived. Average reaction time increased steadily across the three groups. This trend supports the conclusion that:`,
      options: ['Sleep deprivation has no effect on reaction time', 'Increased sleep deprivation correlates with slower reaction time', 'Reaction time is unrelated to cognitive function', 'Severely sleep-deprived participants had the fastest reaction times'], answer: 1 },

    { id: 181, section: 'science', topic: 'Conflicting Viewpoints',
      text: `Two geologists disagree about the formation of a canyon. Geologist 1 attributes it primarily to glacial erosion. Geologist 2 attributes it primarily to river erosion over millions of years. A piece of evidence that would support Geologist 2's view over Geologist 1's would be:`,
      options: ['The presence of glacial till deposits at the canyon rim', 'Smooth, U-shaped canyon walls typical of ice movement', 'A V-shaped canyon profile consistent with water-carved features', 'Evidence of permanent ice cover in the region\'s history'], answer: 2 },

    { id: 182, section: 'science', topic: 'Data Representation',
      text: `A table shows reaction rate (mol/L/s) at varying catalyst concentrations:

0% catalyst: 0.02
1% catalyst: 0.08
2% catalyst: 0.15
3% catalyst: 0.21

Based on this data, increasing catalyst concentration:`,
      options: ['Decreases reaction rate', 'Has no effect on reaction rate', 'Increases reaction rate', 'Stops the reaction entirely'], answer: 2 },

    { id: 183, section: 'science', topic: 'Research Summaries',
      text: `A study compared plant growth under red light, blue light, and white light. Plants under blue light grew the shortest but had the thickest stems. Plants under red light grew tallest but had thinner stems. This data suggests that light wavelength:`,
      options: ['Has no measurable effect on plant growth patterns', 'Influences both height and stem structure differently', 'Only affects stem color, not growth', 'Causes identical growth patterns regardless of color'], answer: 1 },

    { id: 184, section: 'science', topic: 'Conflicting Viewpoints',
      text: `Two astronomers disagree about the primary cause of a star's unusual dimming pattern. Astronomer 1 argues it is due to an orbiting exoplanet. Astronomer 2 argues it is due to dust clouds in the star's debris disk. Which observation would best support Astronomer 1's hypothesis?`,
      options: ['A regular, periodic dimming pattern matching an orbital period', 'An irregular dimming pattern with no consistent timing', 'Evidence of significant dust accumulation near the star', 'No measurable dimming at all'], answer: 0 },

    { id: 185, section: 'science', topic: 'Data Representation',
      text: `A graph plots pH level against the rate of an enzyme-catalyzed reaction. The reaction rate is highest at pH 7 and decreases sharply at pH 4 and pH 10. This indicates that the enzyme:`,
      options: ['Functions equally well at all pH levels', 'Has an optimal pH range near neutral', 'Works best in highly acidic conditions', 'Works best in highly basic conditions'], answer: 1 },

    { id: 186, section: 'science', topic: 'Research Summaries',
      text: `In an experiment testing insulation materials, Material X reduced heat loss by 40%, Material Y by 60%, and Material Z by 25%, compared to no insulation. Based on this data, which material would be most effective for reducing home heating costs?`,
      options: ['Material X', 'Material Y', 'Material Z', 'All materials are equally effective'], answer: 1 },

    { id: 187, section: 'science', topic: 'Conflicting Viewpoints',
      text: `Two nutritionists disagree about the health effects of a high-protein diet. Nutritionist 1 claims it supports muscle growth with minimal risk. Nutritionist 2 claims it places excessive strain on kidney function over time. A long-term study tracking kidney function in high-protein dieters would primarily help resolve this disagreement by:`,
      options: ['Measuring muscle mass changes only', 'Providing direct evidence about kidney health outcomes', 'Testing diets unrelated to protein intake', 'Focusing solely on short-term effects'], answer: 1 },

    { id: 188, section: 'science', topic: 'Data Representation',
      text: `A table shows the boiling point of a solution as solute concentration increases:

0 mol/L: 100.0°C
0.5 mol/L: 100.5°C
1.0 mol/L: 101.0°C
1.5 mol/L: 101.5°C

Based on this trend, the boiling point of the solution:`,
      options: ['Decreases as solute concentration increases', 'Remains constant regardless of concentration', 'Increases as solute concentration increases', 'Is unrelated to solute concentration'], answer: 2 },

    { id: 189, section: 'science', topic: 'Research Summaries',
      text: `Researchers studied the effect of exercise frequency on resting heart rate over 12 weeks. Participants who exercised 5 days/week showed the greatest decrease in resting heart rate, while those who exercised 1 day/week showed minimal change. This supports the conclusion that:`,
      options: ['Exercise frequency has no relationship to heart rate', 'More frequent exercise is associated with greater cardiovascular adaptation', 'Resting heart rate cannot be changed through exercise', 'Only intense exercise affects heart rate'], answer: 1 },

    { id: 190, section: 'science', topic: 'Conflicting Viewpoints',
      text: `Two ecologists disagree about the main threat to a wetland ecosystem. Ecologist 1 points to agricultural runoff as the primary cause of algae blooms. Ecologist 2 points to rising water temperatures as the primary cause. Both ecologists would likely agree that:`,
      options: ['Algae blooms pose no risk to the wetland ecosystem', 'Multiple environmental factors can affect ecosystem health', 'Agricultural runoff has no measurable effects on water quality', 'Temperature changes are unrelated to ecosystem function'], answer: 1 },

    { id: 191, section: 'science', topic: 'Data Representation',
      text: `A graph shows population size of a rabbit population over 10 years, with a sharp decline beginning in year 6 coinciding with the introduction of a predator species. This data most strongly suggests that the predator's introduction:`,
      options: ['Had no effect on the rabbit population', 'Likely contributed to the rabbit population decline', 'Caused the rabbit population to increase', 'Is unrelated to any change in population size'], answer: 1 },

    { id: 192, section: 'science', topic: 'Research Summaries',
      text: `An experiment tested the conductivity of three metal wires (copper, aluminum, iron) at the same length and thickness. Copper showed the highest conductivity, followed by aluminum, then iron. Based on this data, which wire would be most efficient for minimizing energy loss in electrical transmission?`,
      options: ['Copper', 'Aluminum', 'Iron', 'All three are equally efficient'], answer: 0 },

    { id: 193, section: 'science', topic: 'Conflicting Viewpoints',
      text: `Two climatologists disagree about the primary driver of a specific region's increased drought frequency. Climatologist 1 attributes it to shifting ocean currents. Climatologist 2 attributes it to deforestation altering local rainfall patterns. Evidence that deforestation in the region preceded the drought increase would primarily support:`,
      options: ['Climatologist 1\'s hypothesis', 'Climatologist 2\'s hypothesis', 'Neither hypothesis', 'Both hypotheses equally, with no distinction'], answer: 1 },

    { id: 194, section: 'science', topic: 'Data Representation',
      text: `A table compares the density of four unknown liquids relative to water (density = 1.0 g/mL):

Liquid A: 0.92 g/mL
Liquid B: 1.15 g/mL
Liquid C: 0.78 g/mL
Liquid D: 1.05 g/mL

If all four liquids are mixed in a container and allowed to settle without mixing, which liquid would float on top?`,
      options: ['Liquid A', 'Liquid B', 'Liquid C', 'Liquid D'], answer: 2 },

    { id: 195, section: 'science', topic: 'Research Summaries',
      text: `A study exposed seedlings to varying durations of darkness before measuring stem elongation. Seedlings kept in complete darkness for 7 days grew significantly taller, but paler, stems compared to seedlings exposed to normal light cycles. This phenomenon is best explained by:`,
      options: ['Plants growing taller in darkness to search for light, while lacking chlorophyll production', 'Light having no effect on plant growth patterns', 'Darkness causing plants to stop growing entirely', 'Pale stems being unrelated to light exposure'], answer: 0 },

    { id: 196, section: 'science', topic: 'Conflicting Viewpoints',
      text: `Two paleontologists disagree about whether a particular dinosaur species was a fast or slow runner. Paleontologist 1 cites long, slender leg bones as evidence of speed. Paleontologist 2 cites the animal's large body mass as evidence against fast movement. This disagreement primarily stems from differing interpretations of:`,
      options: ['Identical fossil evidence interpreted through different anatomical models', 'Two completely separate and unrelated fossil specimens', 'Data that has no bearing on locomotion', 'A topic neither paleontologist has studied'], answer: 0 },

    { id: 197, section: 'science', topic: 'Data Representation',
      text: `A graph plots the half-life decay of a radioactive isotope, showing that 100g decays to 50g after 10 years, and to 25g after 20 years. Based on this pattern, how much of the original sample would remain after 30 years?`,
      options: ['0g', '6.25g', '12.5g', '20g'], answer: 2 },

    { id: 198, section: 'science', topic: 'Research Summaries',
      text: `Researchers measured the effect of caffeine intake on sleep latency (time to fall asleep). Participants who consumed caffeine within 6 hours of bedtime took significantly longer to fall asleep than those who avoided caffeine. This finding supports the hypothesis that:`,
      options: ['Caffeine has no effect on sleep latency', 'Caffeine consumption close to bedtime delays sleep onset', 'Caffeine improves sleep quality when consumed before bed', 'Sleep latency is unrelated to dietary intake'], answer: 1 },

    { id: 199, section: 'science', topic: 'Conflicting Viewpoints',
      text: `Two engineers disagree about the best material for a bridge support beam. Engineer 1 favors steel for its tensile strength. Engineer 2 favors reinforced concrete for its cost-effectiveness and compressive strength. Both engineers would likely agree that:`,
      options: ['Material choice has no effect on a bridge\'s structural integrity', 'Both strength and cost are important considerations in material selection', 'Steel and concrete have identical properties', 'Bridge supports require no load-bearing analysis'], answer: 1 },

    { id: 200, section: 'science', topic: 'Data Representation',
      text: `A table shows the germination rate of seeds at different soil moisture levels:

10% moisture: 15% germination
30% moisture: 65% germination
50% moisture: 90% germination
70% moisture: 55% germination

Based on this data, the optimal soil moisture range for germination appears to be:`,
      options: ['Around 10%', 'Around 30%', 'Around 50%', 'Around 70%'], answer: 2 },

    { id: 201, section: 'science', topic: 'Research Summaries',
      text: `A study tracked antibody levels in patients following a vaccine booster. Antibody concentration peaked at 4 weeks post-vaccination and gradually declined over the following 6 months but remained above the baseline threshold. This data suggests that the booster provided:`,
      options: ['No measurable immune response', 'A temporary immune boost followed by sustained, though declining, protection', 'Permanent immunity with no decline', 'An immune response that disappeared immediately'], answer: 1 },

    { id: 202, section: 'science', topic: 'Conflicting Viewpoints',
      text: `Two chemists disagree about the most efficient method for purifying a contaminated water sample. Chemist 1 advocates for distillation. Chemist 2 advocates for reverse osmosis filtration. A factor that would favor Chemist 2's method in a large-scale, energy-conscious operation is:`,
      options: ['Distillation requiring less energy than filtration', 'Reverse osmosis generally requiring less energy input than distillation at scale', 'Both methods being identical in energy requirements', 'Filtration being incapable of removing dissolved salts'], answer: 1 },

    { id: 203, section: 'science', topic: 'Data Representation',
      text: `A graph shows that as elevation increases, atmospheric pressure decreases in a roughly linear pattern, dropping from 101 kPa at sea level to about 70 kPa at 3,000 meters. Based on this trend, atmospheric pressure at 6,000 meters would most likely be:`,
      options: ['About 90 kPa', 'About 70 kPa', 'About 50 kPa', 'About 101 kPa'], answer: 2 },

    { id: 204, section: 'science', topic: 'Research Summaries',
      text: `An experiment compared the corrosion rate of iron nails in saltwater, freshwater, and distilled water over 14 days. Nails in saltwater corroded fastest, followed by freshwater, with distilled water showing the least corrosion. This pattern suggests that corrosion rate is most strongly influenced by:`,
      options: ['Water temperature alone', 'Dissolved ion/salt concentration in the water', 'The shape of the nail', 'The presence of light'], answer: 1 },

    { id: 205, section: 'science', topic: 'Conflicting Viewpoints',
      text: `Two marine biologists disagree about why a fish population in a bay has declined. Biologist 1 attributes it to overfishing. Biologist 2 attributes it to declining water quality from industrial runoff. Data showing that fish populations declined even in areas with fishing bans would primarily support:`,
      options: ['Biologist 1\'s hypothesis', 'Biologist 2\'s hypothesis', 'Neither hypothesis', 'Both hypotheses equally'], answer: 1 },

    { id: 206, section: 'science', topic: 'Data Representation',
      text: `A table shows the relationship between wire thickness (gauge) and electrical resistance:

Thin wire: high resistance
Medium wire: moderate resistance
Thick wire: low resistance

Based on this trend, increasing wire thickness:`,
      options: ['Increases resistance', 'Decreases resistance', 'Has no effect on resistance', 'Eliminates resistance entirely'], answer: 1 },

    { id: 207, section: 'science', topic: 'Research Summaries',
      text: `Researchers tested the effect of soil pH on the availability of a specific nutrient to plants. Nutrient availability was highest at pH 6.5 and dropped significantly at both pH 5.0 and pH 8.0. This suggests that nutrient uptake in this case is:`,
      options: ['Unrelated to soil pH', 'Optimal within a specific, narrow pH range', 'Best in highly acidic soil only', 'Best in highly alkaline soil only'], answer: 1 },

    { id: 208, section: 'science', topic: 'Conflicting Viewpoints',
      text: `Two physicists disagree about the interpretation of an unexpected particle decay observed in an experiment. Physicist 1 argues it indicates a new, undiscovered particle. Physicist 2 argues it is consistent with known particles and likely measurement error. Repeating the experiment under identical conditions and observing the same decay pattern would most strongly support:`,
      options: ['Physicist 1\'s hypothesis, since the result was reproducible rather than a one-time error', 'Physicist 2\'s hypothesis, automatically and without further testing', 'Neither hypothesis, since repetition proves nothing', 'A conclusion unrelated to either physicist\'s claim'], answer: 0 },

    { id: 209, section: 'science', topic: 'Data Representation',
      text: `A graph shows that bacterial colony size doubles every 20 minutes under ideal conditions, starting from 100 cells. After 1 hour, the colony size would be approximately:`,
      options: ['200 cells', '400 cells', '800 cells', '1,600 cells'], answer: 2 },

    { id: 210, section: 'science', topic: 'Research Summaries',
      text: `A study examined the effect of music tempo on workout performance. Participants who exercised while listening to fast-tempo music completed more repetitions than those listening to slow-tempo music or no music. This finding suggests that:`,
      options: ['Music tempo has no effect on physical performance', 'Faster music tempo may enhance physical exertion or motivation', 'Slow music improves performance more than fast music', 'Silence improves performance more than any music'], answer: 1 },

    { id: 211, section: 'science', topic: 'Conflicting Viewpoints',
      text: `Two soil scientists disagree about the best method for restoring degraded farmland. Scientist 1 recommends crop rotation. Scientist 2 recommends synthetic fertilizer application. Both scientists would likely agree that:`,
      options: ['Degraded soil has no impact on crop yields', 'Restoring soil health is important for sustainable agriculture', 'Crop rotation and fertilizers produce identical long-term results', 'Soil restoration is unnecessary for farming success'], answer: 1 },

    { id: 212, section: 'science', topic: 'Data Representation',
      text: `A table compares the melting points of four substances:

Substance W: 0°C
Substance X: 80°C
Substance Y: 660°C
Substance Z: 1538°C

Which substance would remain solid at room temperature (approximately 22°C) but melt before reaching 100°C?`,
      options: ['Substance W', 'Substance X', 'Substance Y', 'Substance Z'], answer: 1 },

    { id: 213, section: 'science', topic: 'Research Summaries',
      text: `An experiment tested whether seed coat thickness affects germination time. Seeds with thick coats took an average of 18 days to germinate, while seeds with thin coats took an average of 6 days. This suggests that seed coat thickness:`,
      options: ['Has no relationship to germination time', 'Is positively associated with longer germination time', 'Is associated with faster germination', 'Prevents germination entirely'], answer: 1 },

    { id: 214, section: 'science', topic: 'Conflicting Viewpoints',
      text: `Two volcanologists disagree about whether a dormant volcano poses an imminent eruption risk. Volcanologist 1 points to recent increases in seismic activity as a warning sign. Volcanologist 2 argues that similar seismic patterns occurred previously without eruption. A factor that would help resolve this disagreement is:`,
      options: ['Ignoring all seismic data going forward', 'Comparing current gas emission and ground deformation data to historical pre-eruption patterns', 'Assuming no eruption is possible since one hasn\'t happened recently', 'Disregarding the volcano\'s eruption history entirely'], answer: 1 },

    { id: 215, section: 'science', topic: 'Data Representation',
      text: `A graph shows the relationship between exercise duration and blood lactate levels, with lactate rising sharply after 20 minutes of high-intensity exercise. This pattern most likely indicates that, after 20 minutes:`,
      options: ['The body fully meets its energy demands using oxygen alone', 'The body increasingly relies on anaerobic metabolism, producing lactate as a byproduct', 'Lactate production stops entirely', 'Exercise intensity has no relationship to lactate levels'], answer: 1 },

];

// ── ACT Section Configuration ─────────────────────
const ACT_SECTIONS = [
    {
        id: 'english',
        label: 'English',
        questionCount: 75,
        timeMinutes: 45,
        color: '#1a56db',
        colorLight: 'rgba(26, 86, 219, 0.15)',
        description: 'Grammar, Punctuation, Rhetorical Skills'
    },
    {
        id: 'math',
        label: 'Math',
        questionCount: 60,
        timeMinutes: 60,
        color: '#059669',
        colorLight: 'rgba(5, 150, 105, 0.15)',
        description: 'Algebra, Geometry, Trigonometry'
    },
    {
        id: 'reading',
        label: 'Reading',
        questionCount: 40,
        timeMinutes: 35,
        color: '#7c3aed',
        colorLight: 'rgba(124, 58, 237, 0.15)',
        description: 'Literary Narrative, Social Science, Humanities, Natural Science'
    },
    {
        id: 'science',
        label: 'Science',
        questionCount: 40,
        timeMinutes: 35,
        color: '#d97706',
        colorLight: 'rgba(217, 119, 6, 0.15)',
        description: 'Data Representation, Research Summaries, Conflicting Viewpoints'
    }
];

// ── ACT Scoring Table (Raw Score → Scale Score 1-36) ─────────────
// Each section scored 1-36, composite = average of 4 sections
const ACT_SCALE_TABLE = {
    english: [
        1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 18, 19, 20,
        21, 21, 22, 23, 24, 24, 25, 25, 26, 27, 27, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35, 35, 36, 36, 36,
        36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36
    ],
    math: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 22, 23, 24, 25, 26, 26, 27, 28, 28, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35, 35, 36, 36, 36, 36, 36, 36
    ],
    reading: [
        1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
        27, 28, 29, 30, 31, 32, 33, 34, 35, 36
    ],
    science: [
        1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 32, 33, 34, 35, 36, 36
    ]
};

function getACTSectionScore(sectionId, rawScore) {
    const table = ACT_SCALE_TABLE[sectionId];
    if (!table) return 1;
    const idx = Math.min(rawScore, table.length - 1);
    return table[idx] || 1;
}

function getACTCompositeScore(sectionScores) {
    const scores = Object.values(sectionScores);
    if (scores.length === 0) return 1;
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    return Math.round(avg);
}

// =============================================
// questions.js – Topic: punctuation
// ACT Topic Test
// =============================================

const ACT_QUESTIONS1 = [
    {
        "id": 1,
        "section": "english",
        "topic": "Punctuation",
        "text": "The committee members, who had been meeting for three hours finally reached a consensus on the proposed budget.\n\nWhich of the following best corrects the punctuation error?",
        "options": [
            "The committee members, who had been meeting for three hours, finally reached a consensus on the proposed budget.",
            "The committee members who had been meeting for three hours, finally reached a consensus on the proposed budget.",
            "The committee members, who had been meeting for three hours finally, reached a consensus on the proposed budget.",
            "The committee members who had been meeting for three hours finally reached a consensus on the proposed budget."
        ],
        "answer": 0,
        "explanation": "The non-restrictive relative clause 'who had been meeting for three hours' provides supplementary detail about 'The committee members' and must be set off with a pair of commas on both sides."
    },
    {
        "id": 2,
        "section": "english",
        "topic": "Punctuation",
        "text": "She packed everything she needed for the hiking trip; boots, a water bottle, a trail map, and a first-aid kit.\n\nWhich punctuation mark should replace the semicolon?",
        "options": [
            "a colon",
            "a comma",
            "a dash",
            "no punctuation"
        ],
        "answer": 0,
        "explanation": "A colon is used after an independent clause ('She packed everything she needed for the hiking trip') to introduce a list or series ('boots, a water bottle...'). A semicolon is incorrect because it must connect two independent clauses."
    },
    {
        "id": 3,
        "section": "english",
        "topic": "Punctuation",
        "text": "The concert was cancelled due to heavy rain, however, the organizers promised to reschedule.\n\nWhich correction fixes the comma splice?",
        "options": [
            "The concert was cancelled due to heavy rain; however, the organizers promised to reschedule.",
            "The concert was cancelled due to heavy rain however the organizers promised to reschedule.",
            "The concert was cancelled due to heavy rain, however the organizers promised to reschedule.",
            "The concert was cancelled, due to heavy rain, however, the organizers promised to reschedule."
        ],
        "answer": 0,
        "explanation": "When linking two independent clauses with a conjunctive adverb like 'however', use a semicolon before the conjunctive adverb and a comma after it: '; however,'."
    },
    {
        "id": 4,
        "section": "english",
        "topic": "Punctuation",
        "text": "The three students backpacks were left in the cafeteria after practice.\n\nWhich is the correct possessive form?",
        "options": [
            "students' backpacks",
            "student's backpacks",
            "students backpacks'",
            "students's backpacks"
        ],
        "answer": 0,
        "explanation": "Because the backpacks belong to multiple students (plural 'students'), the plural possessive is formed by adding an apostrophe after the 's': 'students' backpacks'."
    },
    {
        "id": 5,
        "section": "english",
        "topic": "Punctuation",
        "text": "Although the storm knocked out power across the city the hospital backup generators functioned perfectly.\n\nWhere should a comma be inserted?",
        "options": [
            "After 'city'",
            "After 'storm'",
            "After 'generators'",
            "After 'power'"
        ],
        "answer": 0,
        "explanation": "A comma must separate a dependent introductory adverbial clause ('Although the storm knocked out power across the city') from the main independent clause."
    },
    {
        "id": 6,
        "section": "english",
        "topic": "Punctuation",
        "text": "Dr. Chen's groundbreaking research on renewable energy, won the prestigious international award.\n\nWhich edit corrects the punctuation?",
        "options": [
            "Remove the comma after 'energy'",
            "Add a comma after 'research'",
            "Change the comma after 'energy' to a semicolon",
            "No change is needed"
        ],
        "answer": 0,
        "explanation": "Never place a single comma between a subject ('Dr. Chen's groundbreaking research on renewable energy') and its main verb ('won'). Removing the unnecessary comma restores standard syntax."
    },
    {
        "id": 7,
        "section": "english",
        "topic": "Punctuation",
        "text": "The novel was thrilling, suspenseful, and kept the reader guessing until the final chapter.\n\nIs the sentence punctuated correctly for parallel structure?",
        "options": [
            "No, 'kept the reader guessing' is a verb phrase that breaks parallel structure with the adjectives 'thrilling' and 'suspenseful'",
            "Yes, the commas are placed correctly",
            "No, the comma before 'and' should be removed",
            "No, semicolons should separate the items"
        ],
        "answer": 0,
        "explanation": "In a series, items must be grammatically parallel. 'Thrilling' and 'suspenseful' are adjectives, so the third item should also be an adjective (e.g., 'unpredictable') rather than a verb phrase."
    },
    {
        "id": 8,
        "section": "english",
        "topic": "Punctuation",
        "text": "My favorite author, Toni Morrison wrote several masterpiece novels about the African American experience.\n\nWhich correction is necessary?",
        "options": [
            "Either add a comma after 'Morrison' or remove the comma after 'author'",
            "Change the comma to a semicolon",
            "Remove the word 'author'",
            "Add a period after 'author'"
        ],
        "answer": 0,
        "explanation": "If 'Toni Morrison' is restrictive (essential to identify which author), no commas are used ('My favorite author Toni Morrison wrote...'). If non-restrictive, two commas must enclose it ('My favorite author, Toni Morrison, wrote...'). A single comma is grammatically incorrect."
    },
    {
        "id": 9,
        "section": "english",
        "topic": "Punctuation",
        "text": "The cake recipe calls for flour, sugar, butter, and vanilla extract; however, cocoa powder is optional.\n\nIs the punctuation in this sentence correct?",
        "options": [
            "Yes, the list uses commas correctly and the semicolon before 'however' properly joins the two independent clauses",
            "No, the semicolon should be a comma",
            "No, the comma before 'however' should be a colon",
            "No, commas in the list should be semicolons"
        ],
        "answer": 0,
        "explanation": "The sentence correctly employs serial commas for the list and a semicolon followed by a comma ('; however,') to connect two full independent clauses."
    },
    {
        "id": 10,
        "section": "english",
        "topic": "Punctuation",
        "text": "The dog wagged its tail when its' owner walked through the door.\n\nWhich edit corrects the punctuation error?",
        "options": [
            "Change 'its'' to 'its'",
            "Change 'its' tail' to 'it's tail'",
            "Change 'its'' to 'it's'",
            "No change needed"
        ],
        "answer": 0,
        "explanation": "'Its'' is never a valid word in English. The possessive pronoun meaning 'belonging to it' is 'its' (no apostrophe)."
    },
    {
        "id": 11,
        "section": "english",
        "topic": "Punctuation",
        "text": "She visited three European capitals last summer London, Paris, and Rome.\n\nWhich punctuation mark is needed after 'summer'?",
        "options": [
            "A colon",
            "A semicolon",
            "A period",
            "No punctuation"
        ],
        "answer": 0,
        "explanation": "A colon is appropriate after an independent clause ('She visited three European capitals last summer') to introduce the specific list of capitals."
    },
    {
        "id": 12,
        "section": "english",
        "topic": "Punctuation",
        "text": "The astronomer discovered a new comet, and she immediately reported the coordinates to the observatory.\n\nIs the comma before 'and' correct?",
        "options": [
            "Yes, a comma is required before a coordinating conjunction (FANBOYS) joining two independent clauses",
            "No, commas should never precede 'and'",
            "No, the comma should be replaced by a semicolon",
            "No, a colon should be used"
        ],
        "answer": 0,
        "explanation": "When a coordinating conjunction ('and') links two complete independent clauses, a comma before the conjunction is standard grammar."
    },
    {
        "id": 13,
        "section": "english",
        "topic": "Punctuation",
        "text": "The students books were arranged neatly on the library shelves.\n\nIf the books belong to one student, which form is correct?",
        "options": [
            "student's",
            "students'",
            "students",
            "students's"
        ],
        "answer": 0,
        "explanation": "For a singular possessor ('student'), form the possessive by adding an apostrophe and 's': 'student's books'."
    },
    {
        "id": 14,
        "section": "english",
        "topic": "Punctuation",
        "text": "The scientist who discovered the cure received a Nobel Prize.\n\nDoes this sentence require commas around 'who discovered the cure'?",
        "options": [
            "No, because the clause is restrictive (essential to identify which scientist)",
            "Yes, two commas are required",
            "Yes, a comma is needed only before 'who'",
            "Yes, a comma is needed only after 'cure'"
        ],
        "answer": 0,
        "explanation": "'Who discovered the cure' is a restrictive relative clause essential for defining which scientist is being discussed, so commas should not be used."
    },
    {
        "id": 15,
        "section": "english",
        "topic": "Punctuation",
        "text": "Paris France, Tokyo Japan, and Cairo Egypt were the conference locations.\n\nHow should this list be punctuated?",
        "options": [
            "Paris, France; Tokyo, Japan; and Cairo, Egypt",
            "Paris France; Tokyo Japan; and Cairo Egypt",
            "Paris, France, Tokyo, Japan, and Cairo, Egypt",
            "Paris; France, Tokyo; Japan, and Cairo; Egypt"
        ],
        "answer": 0,
        "explanation": "When items in a series contain internal commas (city, country), semicolons must be used as the major delimiters separating the items."
    },
    {
        "id": 16,
        "section": "english",
        "topic": "Punctuation",
        "text": "The company announced a new CEO, a former executive from a rival firm.\n\nHow is the appositive phrase 'a former executive from a rival firm' punctuated?",
        "options": [
            "Correctly set off by a comma at the end of the sentence",
            "Incorrectly, it needs a semicolon",
            "Incorrectly, it needs parentheses and a period",
            "Incorrectly, commas cannot be used with appositives"
        ],
        "answer": 0,
        "explanation": "An appositive phrase at the end of a sentence providing explanatory information about a preceding noun ('CEO') is correctly set off with a comma."
    },
    {
        "id": 17,
        "section": "english",
        "topic": "Punctuation",
        "text": "The weather was frigid—temperatures hovered near zero—yet the marathon runners lined up with enthusiasm.\n\nAre the em dashes used correctly?",
        "options": [
            "Yes, a pair of em dashes correctly sets off an emphatic parenthetical interruption",
            "No, em dashes can never be used in pairs",
            "No, commas must always be used instead of dashes",
            "No, dashes cannot appear in compound sentences"
        ],
        "answer": 0,
        "explanation": "A pair of em dashes is used to emphasize a parenthetical thought or striking internal detail within a sentence."
    },
    {
        "id": 18,
        "section": "english",
        "topic": "Punctuation",
        "text": "It was a cold, rainy, and windy afternoon in November.\n\nIs the coordinate adjective punctuation correct?",
        "options": [
            "Yes, coordinate adjectives modifying the noun 'afternoon' are separated by commas",
            "No, no commas should appear between adjectives",
            "No, the comma before 'and' is prohibited",
            "No, semicolons must separate adjectives"
        ],
        "answer": 0,
        "explanation": "Coordinate adjectives ('cold', 'rainy', 'windy') independently modify the noun 'afternoon' and are correctly separated by commas."
    },
    {
        "id": 19,
        "section": "english",
        "topic": "Punctuation",
        "text": "I wanted to attend the lecture, but I had a prior engagement.\n\nWhich rule explains the comma before 'but'?",
        "options": [
            "A comma is used before a coordinating conjunction that joins two independent clauses",
            "A comma is used after every preposition",
            "A comma is used before every conjunction in English",
            "A comma is optional in all compound sentences"
        ],
        "answer": 0,
        "explanation": "'I wanted to attend the lecture' and 'I had a prior engagement' are both independent clauses joined by 'but', requiring a preceding comma."
    },
    {
        "id": 20,
        "section": "english",
        "topic": "Punctuation",
        "text": "Which sentence uses quotation marks and dialogue punctuation correctly according to standard American rules?",
        "options": [
            "\"The experiment was a complete success,\" the scientist announced.",
            "\"The experiment was a complete success\", the scientist announced.",
            "\"The experiment was a complete success\" the scientist announced.",
            "\"The experiment was a complete success.\", the scientist announced."
        ],
        "answer": 0,
        "explanation": "In American English typographical rules, commas and periods go inside quotation marks: '\"...success,\"'."
    }
];

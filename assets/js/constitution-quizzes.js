/**
 * @fileoverview
 * This file contains the quiz data for the LegalHelp Constitution page.
 * Quizzes are structured by the ID of the Constitution chapter/section they relate to.
 * Each quiz contains questions, options, correct answer index, and an explanation.
 */

export const quizzes = {
    // Quiz for the Preamble
    'preamble': {
        title: "Preamble to the Constitution",
        description: "Test your understanding of the foundational principles of the South African Constitution.",
        questions: [
            {
                question: "What is one of the key values the Republic of South Africa is founded on, according to the Preamble?",
                options: [
                    "Economic prosperity only",
                    "Human dignity, equality, and human rights",
                    "Military strength",
                    "Dominance of one cultural group"
                ],
                answer: 1,
                explanation: "The Preamble explicitly states that the Republic is founded on values such as human dignity, the achievement of equality, and the advancement of human rights and freedoms."
            },
            {
                question: "The Preamble acknowledges the injustices of the past. What does it aim to do regarding these divisions?",
                options: [
                    "Ignore them completely",
                    "Heal the divisions and establish a society based on democratic values",
                    "Recreate the divisions in a new form",
                    "Punish past generations indefinitely"
                ],
                answer: 1,
                explanation: "A core aim mentioned is to 'Heal the divisions of the past and establish a society based on democratic values, social justice and fundamental human rights'."
            },
            {
                question: "Who adopts the Constitution as the supreme law of the Republic?",
                options: [
                    "The President alone",
                    "A select group of lawyers",
                    "The people of South Africa, through their freely elected representatives",
                    "International organizations"
                ],
                answer: 2,
                explanation: "The Preamble begins with 'We, the people of South Africa...' and states that 'We therefore, through our freely elected representatives, adopt this Constitution...'"
            }
        ]
    },
    // Quiz for Chapter 1: Founding Provisions
    'chapter1': {
        title: "Chapter 1: Founding Provisions",
        description: "Test your knowledge of the basic principles that define South Africa as a state.",
        questions: [
            {
                question: "According to Section 1, South Africa is one, sovereign, democratic state founded on which principle?",
                options: [
                    "A monarchy",
                    "Non-racialism and non-sexism",
                    "A communist state",
                    "An authoritarian state"
                ],
                answer: 1,
                explanation: "Section 1(b) states that South Africa is founded on 'Non-racialism and non-sexism'."
            },
            {
                question: "What does Section 2 of the Constitution declare about the Constitution itself?",
                options: [
                    "It is merely a guideline",
                    "It is the supreme law of the Republic",
                    "It can be ignored by any law",
                    "It applies only to the government"
                ],
                answer: 1,
                explanation: "Section 2 explicitly states: 'This Constitution is the supreme law of the Republic; law or conduct inconsistent with it is invalid, and the obligations imposed by it must be fulfilled.'"
            }
        ]
    },
    // Quiz for Chapter 2: Bill of Rights (general chapter quiz)
    'chapter2': {
        title: "Chapter 2: Bill of Rights",
        description: "Assess your understanding of the fundamental human rights enshrined in the Constitution.",
        questions: [
            {
                question: "Which of the following is NOT one of the democratic values affirmed by the Bill of Rights in Section 7?",
                options: [
                    "Human dignity",
                    "Equality",
                    "Freedom",
                    "Absolute governmental power"
                ],
                answer: 3,
                explanation: "Section 7(1) states: 'This Bill of Rights... affirms the democratic values of human dignity, equality and freedom.' Absolute governmental power is contrary to these values."
            },
            {
                question: "According to Section 9 (Equality), against whom may the state NOT unfairly discriminate?",
                options: [
                    "Only against citizens",
                    "Only against specific ethnic groups",
                    "Anyone on grounds like race, gender, sexual orientation, disability, etc.",
                    "Only against juristic persons"
                ],
                answer: 2,
                explanation: "Section 9(3) provides a comprehensive list of grounds on which the state may not unfairly discriminate, covering a wide range of personal attributes."
            },
            {
                question: "Section 11 states that everyone has the right to what?",
                options: [
                    "Unlimited wealth",
                    "Life",
                    "Free travel internationally",
                    "A luxurious lifestyle"
                ],
                answer: 1,
                explanation: "Section 11 simply and profoundly states: 'Everyone has the right to life.'"
            }
        ]
    },
    // Quiz for a specific section, e.g., Section 9: Equality
    'section9': {
        title: "Section 9: Equality",
        description: "A focused quiz on the principle of equality in the South African Constitution.",
        questions: [
            {
                question: "What does Section 9(1) of the Constitution guarantee regarding equality?",
                options: [
                    "Equality only for specific races",
                    "Equality before the law and equal protection/benefit of the law",
                    "Equality in income only",
                    "Equality in political parties only"
                ],
                answer: 1,
                explanation: "Section 9(1) states: 'Everyone is equal before the law and has the right to equal protection and benefit of the law.'"
            },
            {
                question: "Which of these is NOT explicitly listed as a ground for unfair discrimination in Section 9(3)?",
                options: [
                    "Age",
                    "Religion",
                    "Political affiliation (unless based on specific lawful limitations)",
                    "Disability"
                ],
                answer: 2,
                explanation: "While political affiliation might be related to discrimination, Section 9(3) lists: 'race, gender, sex, pregnancy, marital status, ethnic or social origin, colour, sexual orientation, age, disability, religion, conscience, belief, culture, language and birth.' Political affiliation is not on this specific list, though other laws might cover it."
            }
        ]
    }
};

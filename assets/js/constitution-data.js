/**
 * @fileoverview
 * This file contains the structured data for the South African Constitution
 * and related supporting documents. It is designed to be easily searchable
 * and navigable by the application's front-end.
 */

// Structure for the South African Constitution data
// Each chapter contains sections, and each section has its content.
export const constitutionContent = [
    {
        id: "chapter1",
        title: "Chapter 1: Founding Provisions",
        sections: [
            {
                id: "section1",
                title: "Section 1: Republic of South Africa",
                content: `The Republic of South Africa is one, sovereign, democratic state founded on the following values:
                <br>
                (a) Human dignity, the achievement of equality and the advancement of human rights and freedoms.
                <br>
                (b) Non-racialism and non-sexism.
                <br>
                (c) Supremacy of the constitution and the rule of law.
                <br>
                (d) Universal adult suffrage, a national common voters roll, regular elections and a multi-party system of democratic government, to ensure accountability, responsiveness and openness.`
            },
            {
                id: "section2",
                title: "Section 2: Supremacy of Constitution",
                content: `This Constitution is the supreme law of the Republic; law or conduct inconsistent with it is invalid, and the obligations imposed by it must be fulfilled.`
            },
            {
                id: "section3",
                title: "Section 3: Citizenship",
                content: `(1) There is a common South African citizenship.
                <br>
                (2) All citizens are equally entitled to the rights, privileges and benefits of citizenship and are equally subject to the duties and responsibilities of citizenship.
                <br>
                (3) National legislation must provide for the acquisition, loss and restoration of citizenship.`
            }
            // Add more sections for Chapter 1
        ]
    },
    {
        id: "chapter2",
        title: "Chapter 2: Bill of Rights",
        sections: [
            {
                id: "section7",
                title: "Section 7: Rights",
                content: `(1) This Bill of Rights is a cornerstone of democracy in South Africa. It enshrines the rights of all people in our country and affirms the democratic values of human dignity, equality and freedom.
                <br>
                (2) The state must respect, protect, promote and fulfil the rights in the Bill of Rights.
                <br>
                (3) The rights in the Bill of Rights are subject to the limitations contained or referred to in section 36, or elsewhere in the Bill.`
            },
            {
                id: "section9",
                title: "Section 9: Equality",
                content: `(1) Everyone is equal before the law and has the right to equal protection and benefit of the law.
                <br>
                (2) Equality includes the full and equal enjoyment of all rights and freedoms. To promote the achievement of equality, legislative and other measures designed to protect or advance persons, or categories of persons, disadvantaged by unfair discrimination may be taken.
                <br>
                (3) The state may not unfairly discriminate directly or indirectly against anyone on one or more grounds, including race, gender, sex, pregnancy, marital status, ethnic or social origin, colour, sexual orientation, age, disability, religion, conscience, belief, culture, language and birth.
                <br>
                (4) National legislation must be enacted to prevent or prohibit unfair discrimination.
                <br>
                (5) Discrimination on one or more of the grounds listed in subsection (3) is unfair unless it is established that the discrimination is fair.`
            },
            // Add more sections for Chapter 2 and other chapters
        ]
    },
    // Add more chapters as needed
];

// Structure for Supporting Documents
export const supportingDocuments = [
    {
        id: "first-amendment-2000",
        title: "Constitution First Amendment Act of 2000",
        type: "amendment",
        date: "2000-05-12",
        description: "Details the first amendment to the 1996 Constitution, focusing on changes to local government structures.",
        url: "assets/documents/amendments/first_amendment_2000.pdf" // Placeholder URL
    },
    {
        id: "drafters-notes-bill-of-rights",
        title: "Drafting Notes: Chapter 2 - Bill of Rights",
        type: "drafting",
        date: "1995-10-20",
        description: "Early discussions and considerations during the drafting of the Bill of Rights.",
        url: "assets/documents/drafting/bill_of_rights_notes.pdf" // Placeholder URL
    },
    {
        id: "certification-judgment-cct19-96",
        title: "Certification of the Constitution of the Republic of South Africa, 1996 (CCT 19/96)",
        type: "challenge",
        date: "1996-09-06",
        description: "The Constitutional Court's judgment on the certification of the 1996 Constitution.",
        url: "https://www.saflii.org/za/cases/ZACC/1996/23.html" // Actual SAFLLI URL
    },
    {
        id: "interim-constitution-1993",
        title: "Interim Constitution of South Africa (Act 200 of 1993)",
        type: "previous",
        date: "1993-12-22",
        description: "The first democratic constitution of South Africa, serving as a transitional document.",
        url: "assets/documents/previous/interim_constitution_1993.pdf" // Placeholder URL
    },
    {
        id: "freedom-charter-1955",
        title: "The Freedom Charter (1955)",
        type: "contributing",
        date: "1955-06-26",
        description: "A statement of core principles of the South African Congress Alliance, advocating for a non-racial and democratic South Africa, influencing the 1996 Constitution.",
        url: "https://www.sahistory.org.za/archive/freedom-charter-1955" // SA History Online URL
    },
    // Add more supporting documents as needed
];

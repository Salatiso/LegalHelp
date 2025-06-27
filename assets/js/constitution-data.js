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
        pdfUrl: "https://www.justice.gov.za/legislation/constitution/SAConstitution-web-eng.pdf", // Link to full Constitution PDF for the entire chapter
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
            },
            {
                id: "section4",
                title: "Section 4: National anthem",
                content: `The national anthem of the Republic is Nkosi Sikelel' iAfrika, Morena Boloka Sechaba sa Heso, and Die Stem van Suid-Afrika.`
            }
            // Add more sections for Chapter 1
        ]
    },
    {
        id: "chapter2",
        title: "Chapter 2: Bill of Rights",
        pdfUrl: "https://www.justice.gov.za/legislation/constitution/SAConstitution-web-eng.pdf", // Link to full Constitution PDF for the entire chapter
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
                id: "section8",
                title: "Section 8: Application",
                content: `(1) The Bill of Rights applies to all law, and binds the legislature, the executive, the judiciary and all organs of state.
                <br>
                (2) A provision of the Bill of Rights binds a natural or a juristic person if, and to the extent that, it is applicable, taking into account the nature of the right and the nature of any duty imposed by the right.
                <br>
                (3) When applying a provision of the Bill of Rights to a natural or juristic person in terms of subsection (2), a court -
                <br>
                (a) must apply, or if necessary develop, the common law to the extent that legislation does not give effect to that right; and
                <br>
                (b) may develop rules of the common law to limit the right, provided that the limitation is in accordance with section 36 (1).
                <br>
                (4) A juristic person is entitled to the rights in the Bill of Rights to the extent required by the nature of the rights and the nature of that juristic person.`
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
            {
                id: "section10",
                title: "Section 10: Human Dignity",
                content: `Everyone has inherent dignity and the right to have their dignity respected and protected.`
            },
            {
                id: "section11",
                title: "Section 11: Life",
                content: `Everyone has the right to life.`
            },
            {
                id: "section12",
                title: "Section 12: Freedom and Security of the Person",
                content: `(1) Everyone has the right to freedom and security of the person, which includes the right—
                <br>
                (a) not to be deprived of freedom arbitrarily or without just cause;
                <br>
                (b) not to be detained without trial;
                <br>
                (c) to be free from all forms of violence from either public or private sources;
                <br>
                (d) not to be tortured in any way; and
                <br>
                (e) not to be treated in a cruel, inhuman or degrading way.
                <br>
                (2) Everyone has the right to bodily and psychological integrity, which includes the right—
                <br>
                (a) to make decisions concerning reproduction;
                <br>
                (b) to security in and control over their body; and
                <br>
                (c) not to be subjected to medical or scientific experiments without their informed consent.`
            }
            // Add more sections for Chapter 2 and other chapters
        ]
    },
    {
        id: "chapter3",
        title: "Chapter 3: Co-operative Government",
        pdfUrl: "https://www.justice.gov.za/legislation/constitution/SAConstitution-web-eng.pdf",
        sections: [
            {
                id: "section40",
                title: "Section 40: Government of the Republic",
                content: `(1) The Republic of South Africa is one, sovereign, democratic state in which government is constituted as national, provincial and local spheres of government which are distinctive, interdependent and interrelated.`
            },
            {
                id: "section41",
                title: "Section 41: Principles of Co-operative Government and Intergovernmental Relations",
                content: `(1) All spheres of government and all organs of state within each sphere must—
                <br>
                (a) preserve the peace, national unity and the indivisibility of the Republic;
                <br>
                (b) secure the well-being of the people of the Republic;
                <br>
                (c) provide effective, transparent, accountable and coherent government for the Republic as a whole;
                <br>
                (d) be loyal to the Constitution, the Republic and its people;
                <br>
                (e) respect the constitutional status, institutions, powers and functions of government in the other spheres;
                <br>
                (f) not assume any power or function except those conferred on them in terms of the Constitution;
                <br>
                (g) exercise their powers and perform their functions in a manner that does not encroach on the geographical, functional or institutional integrity of government in another sphere; and
                <br>
                (h) co-operate with one another in mutual trust and good faith by—
                <br>
                (i) fostering friendly relations;
                <br>
                (ii) assisting and supporting one another;
                <br>
                (iii) informing one another of, and consulting one another on, matters of common interest;
                <br>
                (iv) co-ordinating their actions and legislation with one another;
                <br>
                (v) adhering to agreed procedures; and
                <br>
                (vi) avoiding legal proceedings against each other.`
            }
        ]
    }
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
        description: "Early discussions and considerations during the drafting of the Bill of Rights, highlighting key debates and decisions.",
        url: "assets/documents/drafting/bill_of_rights_notes.pdf" // Placeholder URL
    },
    {
        id: "certification-judgment-cct19-96",
        title: "Certification of the Constitution of the Republic of South Africa, 1996 (CCT 19/96)",
        type: "challenge",
        date: "1996-09-06",
        description: "The Constitutional Court's judgment on the certification of the 1996 Constitution, affirming its compliance with constitutional principles.",
        url: "https://www.saflii.org/za/cases/ZACC/1996/23.html" // Actual SAFLLI URL
    },
    {
        id: "interim-constitution-1993",
        title: "Interim Constitution of South Africa (Act 200 of 1993)",
        type: "previous",
        date: "1993-12-22",
        description: "The first democratic constitution of South Africa, serving as a transitional document and laying the groundwork for the 1996 Constitution.",
        url: "assets/documents/previous/interim_constitution_1993.pdf" // Placeholder URL
    },
    {
        id: "freedom-charter-1955",
        title: "The Freedom Charter (1955)",
        type: "contributing",
        date: "1955-06-26",
        description: "A statement of core principles of the South African Congress Alliance, advocating for a non-racial and democratic South Africa, significantly influencing the 1996 Constitution.",
        url: "https://www.sahistory.org.za/archive/freedom-charter-1955" // SA History Online URL
    },
    {
        id: "constitutional-court-handbook",
        title: "Constitutional Court Handbook: A Citizen's Guide",
        type: "handbook",
        date: "2018-03-15",
        description: "An accessible guide explaining the role of the Constitutional Court and how it interprets the Constitution.",
        url: "assets/documents/handbooks/cc_handbook.pdf" // Placeholder URL
    },
    {
        id: "parliamentary-debate-billa-rights-1996",
        title: "Parliamentary Debate: Final Bill of Rights Adoption (1996)",
        type: "debate",
        date: "1996-05-08",
        description: "Records of the parliamentary debates leading to the final adoption of the Bill of Rights in the 1996 Constitution.",
        url: "assets/documents/debates/bill_of_rights_debate_1996.pdf" // Placeholder URL
    },
    {
        id: "academic-article-property-rights",
        title: "Academic Article: Property Rights in the New Dispensation",
        type: "article",
        date: "2010-11-01",
        description: "A scholarly analysis of the interpretation and evolution of property rights under the South African Constitution.",
        url: "assets/documents/articles/property_rights_article.pdf" // Placeholder URL
    },
    {
        id: "public-consultation-land-reform-2018",
        title: "Report on Public Consultations: Land Reform (2018)",
        type: "public_consultation",
        date: "2018-12-05",
        description: "Summary of public submissions and discussions regarding proposed land reform policies and constitutional amendments.",
        url: "assets/documents/public_consultations/land_reform_2018.pdf" // Placeholder URL
    }
];

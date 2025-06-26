/**
 * @fileoverview
 * This file contains the data for the "Journey of South African Law" interactive timeline.
 * It will be populated with comprehensive historical information on legal systems,
 * with a focus on their evolution in South Africa.
 *
 * Structure:
 * Each object in the array represents a significant event or period.
 * - date: The year or period of the event (e.g., "3000 BC", "1652 AD").
 * - event: A concise title for the event.
 * - details: A detailed explanation of the event's legal significance and impact.
 * - primarySource: A URL or description of a primary source related to the event.
 * - secondarySource: A URL or description of a reputable secondary source for further reading.
 */

export const verticalTimelineData = [
    {
        date: "c. 3000 BC",
        event: "Emergence of Early Legal Systems",
        details: "The earliest known formal legal codes, such as the Code of Ur-Nammu and later the Code of Hammurabi, laid foundations for written law, concepts of justice, and societal order in ancient Mesopotamia. These systems often reflected a 'lex talionis' (eye for an eye) principle and covered areas like property, contracts, and family law. While not directly linked to South African law, they represent fundamental human efforts to formalize legal principles.",
        primarySource: "Code of Hammurabi (ancient tablet inscriptions)",
        secondarySource: "https://en.wikipedia.org/wiki/Code_of_Hammurabi"
    },
    {
        date: "c. 500 BC - 530 AD",
        event: "Roman Law Development",
        details: "Roman law, from the Twelve Tables to the Corpus Juris Civilis (Justinian's Code), developed sophisticated principles of private law, public law, and international law. Its systematic approach to legal reasoning and codification profoundly influenced European continental law, which later formed the basis of Roman-Dutch law. This extensive body of law forms a crucial ancestor to the modern South African legal system.",
        primarySource: "Corpus Juris Civilis (Justinian's Code)",
        secondarySource: "https://en.wikipedia.org/wiki/Roman_law"
    },
    {
        date: "c. 1000 AD - 1600 AD",
        event: "Khoisan Customary Law",
        details: "Before European settlement, various indigenous communities in Southern Africa, including the Khoisan, had well-established customary legal systems. These systems were often oral, communally based, and focused on restoration, reconciliation, and maintaining social harmony rather than punitive justice. Disputes were typically resolved through consensus-building processes led by elders or chiefs. Aspects of customary law continue to be recognized within the modern South African legal framework.",
        primarySource: "Oral traditions and anthropological records (historical and ongoing research)",
        secondarySource: "https://www.sahistory.org.za/article/indigenous-law-south-africa"
    },
    {
        date: "1652 AD",
        event: "Arrival of Roman-Dutch Law in South Africa",
        details: "With the establishment of the Dutch East India Company (VOC) settlement at the Cape, Roman-Dutch law was formally introduced to South Africa. This legal system, a blend of Roman law and indigenous Germanic customs, became the foundational common law of the Cape Colony. It covered aspects of property, contract, succession, and criminal law, and was applied to the diverse inhabitants of the colony, though often adapted and enforced differently based on race and status.",
        primarySource: "VOC Charters and early Cape legal records",
        secondarySource: "https://www.sahistory.org.za/article/roman-dutch-law"
    },
    {
        date: "1806 AD",
        event: "British Occupation and English Law Influence",
        details: "The permanent British occupation of the Cape in 1806 brought significant English legal influence. While Roman-Dutch law remained the common law, English procedural law, rules of evidence, and certain substantive laws (like company law and commercial law) were gradually introduced. This led to a 'hybrid' legal system, a unique blend of Roman-Dutch common law and English statutory and procedural law, which still characterises South African law today.",
        primarySource: "British Proclamations and Cape Ordinances (early 19th Century)",
        secondarySource: "https://www.gov.za/about-sa/legal-system"
    },
    {
        date: "1910 AD",
        event: "Union of South Africa and Codification of Racial Laws",
        details: "The formation of the Union of South Africa consolidated four colonies into a single state. While this brought a unified legal system, it also laid the groundwork for systematic racial segregation through legislation like the Natives Land Act of 1913, which dispossessed black South Africans of land. The period saw the formalization of discriminatory laws that would later become the basis of apartheid.",
        primarySource: "South Africa Act, 1909; Natives Land Act, 1913",
        secondarySource: "https://www.sahistory.org.za/article/south-africa-act-1909"
    },
    {
        date: "1948 AD - 1994 AD",
        event: "Apartheid Legislation and Resistance",
        details: "The National Party's ascent to power in 1948 ushered in the era of Apartheid, a system of institutionalized racial segregation and discrimination enforced by law. Legislation such as the Population Registration Act, Group Areas Act, and Pass Laws controlled every aspect of life based on race. This period also saw intense legal and political resistance both domestically and internationally, leading to landmark trials and human rights activism.",
        primarySource: "Various Apartheid Acts (e.g., Group Areas Act, Suppression of Communism Act)",
        secondarySource: "https://www.sahistory.org.za/article/apartheid-legislation-1948-1994"
    },
    {
        date: "1993 AD",
        event: "Interim Constitution Adopted",
        details: "Following intensive negotiations, the interim Constitution (Act 200 of 1993) was adopted. This transitional document marked the formal end of apartheid, established universal adult suffrage, and introduced a Bill of Rights as the supreme law for the first time. It laid the foundation for the first democratic elections and the drafting of a final constitution.",
        primarySource: "Constitution of the Republic of South Africa, Act 200 of 1993",
        secondarySource: "https://www.constitutionalcourt.org.za/site/thecourt/history.html"
    },
    {
        date: "1996 AD",
        event: "Final Constitution Promulgated",
        details: "The Constitution of the Republic of South Africa, 1996, was adopted on 8 May 1996 and came into effect on 4 February 1997. It is one of the most progressive constitutions in the world, enshrining extensive socio-economic rights, establishing independent state institutions to support democracy, and confirming the supremacy of the Constitution. It represents the culmination of a long struggle for a just and democratic legal order.",
        primarySource: "Constitution of the Republic of South Africa, 1996",
        secondarySource: "https://www.justice.gov.za/legislation/constitution/SAConstitution-web-eng.pdf"
    },
    {
        date: "Ongoing",
        event: "Constitutional Jurisprudence and Amendments",
        details: "Since 1996, the South African Constitution has been continually interpreted and applied by the Constitutional Court and other courts, shaping jurisprudence in areas like land reform, socio-economic rights, and customary law. Amendments have been made to address evolving societal needs and clarify constitutional provisions, demonstrating the living nature of the supreme law. Challenges to laws and governmental conduct continue to strengthen the rule of law.",
        primarySource: "Constitutional Court judgments (e.g., from SAFLLI.org), Constitutional Amendments",
        secondarySource: "https://www.constitutionalcourt.org.za/"
    },
    // Add more significant events as they emerge from your research.
];

/**
 * @fileoverview
 * This file contains the JavaScript logic for the LegalHelp Constitution page.
 * It handles constitution search, section display via tabs and search,
 * supporting document filtering, and the interactive historical timeline.
 */

import { constitutionContent, supportingDocuments } from './constitution-data.js';
import { verticalTimelineData } from './history-data.js';

// --- DOM Elements ---
const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
const startExploringButton = document.getElementById('start-exploring-button');

const constitutionSearchInput = document.getElementById('constitution-search-input');
const constitutionTabsContainer = document.getElementById('constitution-tabs');
const constitutionDisplayArea = document.getElementById('constitution-display-area');
const constitutionSectionTitle = document.getElementById('constitution-section-title');
const constitutionSectionContent = document.getElementById('constitution-section-content');
const printConstitutionButton = document.getElementById('print-constitution-button');

const documentSearchInput = document.getElementById('document-search-input');
const documentTypeFilter = document.getElementById('document-type-filter');
const supportingDocumentsList = document.getElementById('supporting-documents-list');

const timelineScroller = document.getElementById('timeline-scroller');
const timelineModal = document.getElementById('timeline-modal');
const modalTitle = document.getElementById('modal-title');
const modalDetails = document.getElementById('modal-details');
const modalPrimarySource = document.getElementById('modal-primary-source');
const modalSecondarySource = document.getElementById('modal-secondary-source');
const closeModalBtn = document.querySelector('.modal-close');

let activeChapterId = 'preamble'; // Keep track of the currently active chapter tab

// --- Initialization on DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', async () => {
    // Load Sidebar (assuming main.js or a dedicated function handles this)
    try {
        const response = await fetch('header.html');
        if (response.ok) {
            const html = await response.text();
            sidebarPlaceholder.innerHTML = html;
        } else {
            console.error('Failed to load header.html:', response.statusText);
        }
    } catch (error) {
        console.error('Error loading header.html:', error);
    }

    populateConstitutionTabs();
    displayConstitutionContent('preamble'); // Display preamble by default
    renderSupportingDocuments(supportingDocuments); // Display all documents initially
    createVerticalTimeline();

    // --- Event Listeners ---
    startExploringButton.addEventListener('click', () => {
        // Scroll to the interactive viewer section smoothly
        constitutionSearchInput.scrollIntoView({ behavior: 'smooth' });
    });

    constitutionSearchInput.addEventListener('input', handleConstitutionSearch);
    printConstitutionButton.addEventListener('click', printCurrentSection);

    documentSearchInput.addEventListener('input', handleDocumentSearch);
    documentTypeFilter.addEventListener('change', handleDocumentFilter);

    // Modal close functionality
    if (timelineModal) {
        closeModalBtn.addEventListener('click', () => timelineModal.classList.remove('visible'));
        timelineModal.addEventListener('click', (e) => {
            if (e.target === timelineModal) {
                timelineModal.classList.remove('visible');
            }
        });
    }
});


// --- Constitution Viewer Functions ---

/**
 * Populates the tab navigation with constitution chapters.
 */
function populateConstitutionTabs() {
    constitutionTabsContainer.innerHTML = ''; // Clear existing tabs

    // Add Preamble as the first tab (hardcoded in structure but dynamic in display)
    const preambleTab = document.createElement('a');
    preambleTab.href = "#";
    preambleTab.className = 'tab-link';
    preambleTab.dataset.chapterId = 'preamble';
    preambleTab.innerHTML = '<p>Preamble</p>';
    preambleTab.addEventListener('click', (e) => {
        e.preventDefault();
        displayConstitutionContent('preamble');
    });
    constitutionTabsContainer.appendChild(preambleTab);

    // Add other chapters dynamically
    constitutionContent.forEach(chapter => {
        const tab = document.createElement('a');
        tab.href = "#";
        tab.className = 'tab-link tab-link-inactive'; // Inactive by default
        tab.dataset.chapterId = chapter.id;
        tab.innerHTML = `<p>${chapter.title}</p>`;
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            displayConstitutionContent(chapter.id);
        });
        constitutionTabsContainer.appendChild(tab);
    });
}

/**
 * Displays content for a specific chapter or section.
 * Handles both chapter-level and individual section display.
 * @param {string} id - The ID of the chapter or section to display.
 * @param {string} [highlightQuery=''] - Optional query to highlight in the content.
 */
function displayConstitutionContent(id, highlightQuery = '') {
    let contentHtml = '';
    let titleText = '';

    // Deactivate all tabs first
    document.querySelectorAll('.tab-link').forEach(tab => {
        tab.classList.remove('tab-link-active');
        tab.classList.add('tab-link-inactive');
    });

    // Handle Preamble
    if (id === 'preamble') {
        titleText = "Preamble";
        contentHtml = `
            <p>We, the people of South Africa, recognise the injustices of our past; honour those who suffered for justice and freedom in our land; respect those who have worked to build and develop our country; and believe that South Africa belongs to all who live in it, united in our diversity.</p>
            <p>We therefore, through our freely elected representatives, adopt this Constitution as the supreme law of the Republic so as to –</p>
            <ul class="list-disc list-inside ml-4">
                <li>Heal the divisions of the past and establish a society based on democratic values, social justice and fundamental human rights;</li>
                <li>Lay the foundations for a democratic and open society in which government is based on the will of the people and every citizen is equally protected by law;</li>
                <li>Improve the quality of life of all citizens and free the potential of each person; and</li>
                <li>Build a united and democratic South Africa able to take its rightful place as a sovereign state in the family of nations.</li>
            </ul>
            <p>May God protect our people. <br>Nkosi Sikelel' iAfrika. Morena boloka setjhaba sa heso. <br>God seën Suid-Afrika. God bless South Africa. <br>Mudzimu fhatutshedza Afurika. Hosi katekisa Afrika.</p>
        `;
        document.querySelector(`.tab-link[data-chapter-id="preamble"]`).classList.remove('tab-link-inactive');
        document.querySelector(`.tab-link[data-chapter-id="preamble"]`).classList.add('tab-link-active');
        activeChapterId = 'preamble';
    } else {
        // Find chapter or section
        let foundItem = null;
        let isChapter = false;

        // Check if ID is a chapter
        const chapter = constitutionContent.find(c => c.id === id);
        if (chapter) {
            foundItem = chapter;
            isChapter = true;
            titleText = chapter.title;
            contentHtml = `<p>This is the overview for <strong>${chapter.title}</strong>. Below are its sections:</p><ul class="list-disc list-inside ml-4 mt-4">`;
            chapter.sections.forEach(section => {
                contentHtml += `<li><a href="#" class="text-blue-400 hover:underline view-section-link" data-section-id="${section.id}">${section.title}</a></li>`;
            });
            contentHtml += `</ul>`;

            document.querySelector(`.tab-link[data-chapter-id="${id}"]`).classList.remove('tab-link-inactive');
            document.querySelector(`.tab-link[data-chapter-id="${id}"]`).classList.add('tab-link-active');
            activeChapterId = id;

        } else {
            // If not a chapter, search for a specific section
            for (const chap of constitutionContent) {
                const section = chap.sections.find(s => s.id === id);
                if (section) {
                    foundItem = section;
                    titleText = `${chap.title} - ${section.title}`;
                    contentHtml = section.content;

                    // Activate the parent chapter's tab
                    document.querySelector(`.tab-link[data-chapter-id="${chap.id}"]`).classList.remove('tab-link-inactive');
                    document.querySelector(`.tab-link[data-chapter-id="${chap.id}"]`).classList.add('tab-link-active');
                    activeChapterId = chap.id;
                    break;
                }
            }
        }

        if (!foundItem) {
            titleText = "Content Not Found";
            contentHtml = "<p>The requested Constitution content could not be found. Please try another selection or search term.</p>";
        }
    }

    constitutionSectionTitle.textContent = titleText;
    constitutionSectionContent.innerHTML = highlightMatches(contentHtml, highlightQuery);

    // Add event listeners for dynamically created section links (if any)
    document.querySelectorAll('.view-section-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = e.target.dataset.sectionId;
            displayConstitutionContent(sectionId);
        });
    });

    // Clear search input if content is displayed via tab/link
    if (highlightQuery === '') {
        constitutionSearchInput.value = '';
    }
}


/**
 * Handles the search input for the Constitution content.
 */
function handleConstitutionSearch() {
    const query = constitutionSearchInput.value.toLowerCase().trim();
    if (query.length < 3) {
        displayConstitutionContent(activeChapterId); // Go back to active chapter if search is too short/empty
        return;
    }

    let searchResults = [];
    constitutionContent.forEach(chapter => {
        chapter.sections.forEach(section => {
            const sectionText = (section.title + " " + section.content).toLowerCase();
            if (sectionText.includes(query)) {
                searchResults.push({
                    chapterTitle: chapter.title,
                    sectionTitle: section.title,
                    content: section.content, // Pass original content for highlighting later
                    id: section.id,
                    chapterId: chapter.id
                });
            }
        });
    });

    // Also search in Preamble if exists
    const preambleText = constitutionSectionContent.dataset.preambleContent ? constitutionSectionContent.dataset.preambleContent.toLowerCase() : '';
    const preambleMatch = preambleText.includes(query);
    if (preambleMatch && constitutionSectionTitle.textContent.includes("Preamble")) {
        // If preamble is currently displayed and matches, just highlight
        displayConstitutionContent('preamble', query);
        return;
    } else if (preambleMatch) {
        // If preamble matches but is not currently displayed, add it to results
        searchResults.unshift({ // Add to the beginning
            chapterTitle: "Preamble",
            sectionTitle: "Preamble",
            content: `We, the people of South Africa, recognise the injustices of our past; honour those who suffered for justice and freedom in our land; respect those who have worked to build and develop our country; and believe that South Africa belongs to all who live in it, united in our diversity.
            We therefore, through our freely elected representatives, adopt this Constitution as the supreme law of the Republic so as to –
            Heal the divisions of the past and establish a society based on democratic values, social justice and fundamental human rights;
            Lay the foundations for a democratic and open society in which government is based on the will of the people and every citizen is equally protected by law;
            Improve the quality of life of all citizens and free the potential of each person; and
            Build a united and democratic South Africa able to take its rightful place as a sovereign state in the family of nations.
            May God protect our people. Nkosi Sikelel' iAfrika. Morena boloka setjhaba sa heso. God seën Suid-Afrika. God bless South Africa. Mudzimu fhatutshedza Afurika. Hosi katekisa Afrika.`,
            id: 'preamble',
            chapterId: 'preamble'
        });
    }

    renderConstitutionSearchResults(searchResults, query);
}


/**
 * Renders the search results for constitution content.
 * @param {Array} results - Array of search result objects.
 * @param {string} query - The search query to highlight.
 */
function renderConstitutionSearchResults(results, query) {
    // Deactivate all tabs
    document.querySelectorAll('.tab-link').forEach(tab => {
        tab.classList.remove('tab-link-active');
        tab.classList.add('tab-link-inactive');
    });

    constitutionSectionTitle.textContent = `Search Results for "${query}"`;
    if (results.length === 0) {
        constitutionSectionContent.innerHTML = `<p class="text-gray-300">No sections found matching your search for "<strong>${query}</strong>".</p>`;
        return;
    }

    let html = '';
    results.forEach(result => {
        const displayedContent = result.content; // Use full content for display
        html += `
            <div class="mb-6 p-4 bg-gray-700 rounded-lg border border-gray-600 shadow-md">
                <h3 class="text-xl font-bold text-blue-300">
                    ${result.chapterTitle} - ${result.sectionTitle}
                </h3>
                <p class="text-gray-300 text-sm mt-2 line-clamp-3">${highlightMatches(displayedContent, query)}</p>
                <button class="text-teal-400 hover:underline text-sm mt-2 view-section-button" data-section-id="${result.id}">Read Full Section</button>
            </div>
        `;
    });
    constitutionSectionContent.innerHTML = html;

    // Add event listeners to "Read Full Section" buttons
    document.querySelectorAll('.view-section-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const sectionId = event.target.dataset.sectionId;
            displayConstitutionContent(sectionId); // Display the full section
            constitutionSearchInput.value = ''; // Clear search input after navigating
        });
    });
}

/**
 * Highlights all occurrences of a query within a given text.
 * @param {string} text - The original text.
 * @param {string} query - The search query.
 * @returns {string} The text with highlighted matches.
 */
function highlightMatches(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="bg-yellow-400 text-gray-900 rounded px-1 font-semibold">$1</span>');
}

/**
 * Triggers the browser's print functionality for the current constitution section.
 */
function printCurrentSection() {
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print Constitution Section</title>');
    printWindow.document.write('<style>');
    printWindow.document.write(`
        body { font-family: 'Open Sans', sans-serif; margin: 20px; color: #000; }
        h1, h2, h3 { font-family: 'Roboto Slab', serif; color: #000; }
        h1 { font-size: 2em; text-align: center; margin-bottom: 20px; }
        h2 { font-size: 1.5em; margin-top: 1.5em; margin-bottom: 0.5em; }
        p { line-height: 1.6; margin-bottom: 1em; }
        ul { list-style: disc; margin-left: 20px; }
        strong { font-weight: bold; }
        .highlight { background-color: #ffff00; } /* Basic yellow highlight for print */
    `);
    printWindow.document.write('</style></head><body>');
    printWindow.document.write(`<h1>${constitutionSectionTitle.textContent}</h1>`);
    printWindow.document.write('<div class="content">');
    printWindow.document.write(constitutionSectionContent.innerHTML);
    printWindow.document.write('</div></body></html>');
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
}


// --- Supporting Documents Functions ---

/**
 * Renders the list of supporting documents based on filters and search.
 * @param {Array} docs - Array of document objects to render.
 */
function renderSupportingDocuments(docs) {
    supportingDocumentsList.innerHTML = ''; // Clear previous documents

    if (docs.length === 0) {
        supportingDocumentsList.innerHTML = '<p class="text-gray-400 col-span-full">No documents found matching your criteria.</p>';
        return;
    }

    docs.forEach(doc => {
        const docCard = document.createElement('div');
        docCard.className = 'doc-card'; // Use the new card class
        docCard.innerHTML = `
            <div class="doc-card-image-placeholder">
                <i class="fas fa-file-alt"></i> <!-- Generic file icon -->
            </div>
            <div>
                <h3 class="text-base font-medium leading-normal text-blue-300">${doc.title}</h3>
                <p class="text-sm font-normal leading-normal text-gray-400">Type: ${doc.type.charAt(0).toUpperCase() + doc.type.slice(1)} | Date: ${doc.date}</p>
                <p class="text-gray-300 text-sm mt-1">${doc.description}</p>
                <a href="${doc.url}" class="text-teal-400 hover:underline text-sm mt-2 block" target="_blank" rel="noopener noreferrer">View Document <i class="fas fa-external-link-alt ml-1"></i></a>
            </div>
        `;
        supportingDocumentsList.appendChild(docCard);
    });
}

/**
 * Handles search input for supporting documents.
 */
function handleDocumentSearch() {
    const query = documentSearchInput.value.toLowerCase();
    const filteredType = documentTypeFilter.value;

    const filteredDocs = supportingDocuments.filter(doc => {
        const matchesQuery = doc.title.toLowerCase().includes(query) ||
                             doc.description.toLowerCase().includes(query);
        const matchesType = filteredType === '' || doc.type === filteredType;
        return matchesQuery && matchesType;
    });

    renderSupportingDocuments(filteredDocs);
}

/**
 * Handles filter change for supporting documents.
 */
function handleDocumentFilter() {
    handleDocumentSearch(); // Re-run search with new filter
}

// --- Vertical Timeline Functions (Adapted from Flamea) ---

/**
 * Populates the vertical timeline with data from history-data.js.
 */
function createVerticalTimeline() {
    if (!timelineScroller || typeof verticalTimelineData === 'undefined') {
        console.error("Timeline scroller or verticalTimelineData not found for vertical timeline.");
        return;
    }

    timelineScroller.innerHTML = ''; // Clear any existing placeholders

    verticalTimelineData.forEach(item => {
        const point = document.createElement('div');
        point.className = 'timeline-point';
        point.innerHTML = `<div class="timeline-dot"></div><div class="timeline-content"><div class="date">${item.date}</div><div class="event">${item.event}</div></div>`;

        point.addEventListener('click', () => {
            modalTitle.textContent = `${item.date}: ${item.event}`;
            modalDetails.innerHTML = `<p>${item.details}</p>`;

            // Handle primary source link
            modalPrimarySource.innerHTML = item.primarySource.startsWith('http')
                ? `<a href="${item.primarySource}" target="_blank" rel="noopener noreferrer" class="text-teal-400 hover:underline">${new URL(item.primarySource).hostname}</a>`
                : item.primarySource;

            // Handle secondary source link
            modalSecondarySource.innerHTML = item.secondarySource.startsWith('http')
                ? `<a href="${item.secondarySource}" target="_blank" rel="noopener noreferrer" class="text-teal-400 hover:underline">${new URL(item.secondarySource).hostname}</a>`
                : item.secondarySource;

            timelineModal.classList.add('visible');
        });
        timelineScroller.appendChild(point);
    });
}

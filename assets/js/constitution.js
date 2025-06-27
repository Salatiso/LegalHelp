/**
 * @fileoverview
 * This file contains the JavaScript logic for the LegalHelp Constitution page.
 * It handles constitution search, section display via tabs and search,
 * supporting document filtering, the interactive vertical historical timeline,
 * and the new quiz functionality.
 */

import { constitutionContent, supportingDocuments } from './constitution-data.js';
import { verticalTimelineData } from './history-data.js';
import { quizzes } from './constitution-quizzes.js';

// --- DOM Elements ---
const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
const startExploringButton = document.getElementById('start-exploring-button');
const constitutionViewerSection = document.getElementById('constitution-viewer-section'); // Section to scroll to

const constitutionSearchInput = document.getElementById('constitution-search-input');
const constitutionTabsContainer = document.getElementById('constitution-tabs');
const constitutionDisplayArea = document.getElementById('constitution-display-area');
const constitutionSectionTitle = document.getElementById('constitution-section-title');
const constitutionSectionContent = document.getElementById('constitution-section-content');
const printConstitutionButton = document.getElementById('print-constitution-button');
const viewPdfButton = document.getElementById('view-pdf-button');
const takeQuizButton = document.getElementById('take-quiz-button');

const documentSearchInput = document.getElementById('document-search-input');
const documentTypeFilter = document.getElementById('document-type-filter');
const supportingDocumentsList = document.getElementById('supporting-documents-list');

const timelineScrollerVertical = document.getElementById('timeline-scroller-vertical'); // Corrected ID for vertical timeline
const timelineModal = document.getElementById('timeline-modal');
const modalTitle = document.getElementById('modal-title');
const modalDetails = document.getElementById('modal-details');
const modalPrimarySource = document.getElementById('modal-primary-source');
const modalSecondarySource = document.getElementById('modal-secondary-source');
const closeModalBtn = document.querySelector('.modal-close');

// Quiz Modal Elements
const quizModal = document.getElementById('quiz-modal');
const quizModalCloseBtn = document.getElementById('quiz-modal-close');
const quizTitle = document.getElementById('quiz-title');
const quizContainer = document.getElementById('quiz-container');
const nextQuestionButton = document.getElementById('next-question-button');
const restartQuizButton = document.getElementById('restart-quiz-button');

let activeChapterId = 'preamble'; // Keep track of the currently active chapter tab
let currentQuiz = null;
let currentQuestionIndex = 0;
let userScore = 0;
let selectedAnswer = null; // To store the user's selected option in quiz

// --- Initialization on DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', async () => {
    // Load Sidebar
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
    createVerticalTimeline(); // Call the vertical timeline function

    // --- Event Listeners ---
    startExploringButton.addEventListener('click', () => {
        constitutionViewerSection.scrollIntoView({ behavior: 'smooth' });
    });

    constitutionSearchInput.addEventListener('input', handleConstitutionSearch);
    printConstitutionButton.addEventListener('click', printCurrentSection);
    viewPdfButton.addEventListener('click', handleViewPdf); // New PDF button listener
    takeQuizButton.addEventListener('click', handleTakeQuiz); // New Quiz button listener

    documentSearchInput.addEventListener('input', handleDocumentSearch);
    documentTypeFilter.addEventListener('change', handleDocumentFilter);

    // Timeline Modal close functionality
    if (timelineModal) {
        closeModalBtn.addEventListener('click', () => timelineModal.classList.remove('visible'));
        timelineModal.addEventListener('click', (e) => {
            if (e.target === timelineModal) {
                timelineModal.classList.remove('visible');
            }
        });
    }

    // Quiz Modal close functionality
    if (quizModal) {
        quizModalCloseBtn.addEventListener('click', () => quizModal.classList.remove('visible'));
        quizModal.addEventListener('click', (e) => {
            if (e.target === quizModal) {
                quizModal.classList.remove('visible');
            }
        });
        nextQuestionButton.addEventListener('click', handleNextQuestion);
        restartQuizButton.addEventListener('click', handleRestartQuiz);
    }
});


// --- Constitution Viewer Functions ---

/**
 * Populates the tab navigation with constitution chapters.
 */
function populateConstitutionTabs() {
    constitutionTabsContainer.innerHTML = ''; // Clear existing tabs

    // Add Preamble as the first tab
    const preambleTab = document.createElement('a');
    preambleTab.href = "#";
    preambleTab.className = 'tab-link';
    preambleTab.dataset.chapterId = 'preamble';
    preambleTab.textContent = 'Preamble'; // Use textContent for plain text
    preambleTab.addEventListener('click', (e) => {
        e.preventDefault();
        displayConstitutionContent('preamble');
    });
    constitutionTabsContainer.appendChild(preambleTab);

    // Add other chapters dynamically
    constitutionContent.forEach(chapter => {
        const tab = document.createElement('a');
        tab.href = "#";
        tab.className = 'tab-link tab-link-inactive';
        tab.dataset.chapterId = chapter.id;
        tab.textContent = chapter.title; // Use textContent for plain text
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
 * Also manages visibility of the 'Take Quiz' button.
 * @param {string} id - The ID of the chapter or section to display.
 * @param {string} [highlightQuery=''] - Optional query to highlight in the content.
 */
function displayConstitutionContent(id, highlightQuery = '') {
    let contentHtml = '';
    let titleText = '';
    let currentSectionQuizId = null; // To check if a quiz exists for this section

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
        currentSectionQuizId = 'preamble'; // Check for preamble quiz
    } else {
        // Find chapter or section
        let foundItem = null;

        // Check if ID is a chapter
        const chapter = constitutionContent.find(c => c.id === id);
        if (chapter) {
            foundItem = chapter;
            titleText = chapter.title;
            contentHtml = `<p class="text-gray-300 mb-4">This is the overview for <strong>${chapter.title}</strong>. Below are its sections:</p><ul class="list-disc list-inside ml-4 mt-4">`;
            chapter.sections.forEach(section => {
                contentHtml += `<li><a href="#" class="text-indigo-400 hover:underline view-section-link" data-section-id="${section.id}">${section.title}</a></li>`;
            });
            contentHtml += `</ul>`;

            document.querySelector(`.tab-link[data-chapter-id="${id}"]`).classList.remove('tab-link-inactive');
            document.querySelector(`.tab-link[data-chapter-id="${id}"]`).classList.add('tab-link-active');
            activeChapterId = id;
            currentSectionQuizId = id; // Check for chapter quiz

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
                    currentSectionQuizId = section.id; // Check for specific section quiz
                    break;
                }
            }
        }

        if (!foundItem) {
            titleText = "Content Not Found";
            contentHtml = "<p class='text-gray-300'>The requested Constitution content could not be found. Please try another selection or search term.</p>";
        }
    }

    constitutionSectionTitle.textContent = titleText;
    constitutionSectionContent.innerHTML = highlightMatches(contentHtml, highlightQuery);

    // Update PDF button href based on the current chapter/section
    const currentPdfUrl = constitutionContent.find(c => c.id === activeChapterId)?.pdfUrl || '#'; // Get PDF URL from chapter
    viewPdfButton.href = currentPdfUrl;
    viewPdfButton.style.display = (currentPdfUrl !== '#') ? 'flex' : 'none'; // Show/hide PDF button

    // Show/hide Quiz button based on whether a quiz exists for the current section/chapter
    if (quizzes[currentSectionQuizId]) {
        takeQuizButton.style.display = 'flex';
        takeQuizButton.dataset.quizId = currentSectionQuizId;
    } else {
        takeQuizButton.style.display = 'none';
        takeQuizButton.removeAttribute('data-quiz-id');
    }


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

    // Check Preamble
    const preambleContent = `We, the people of South Africa, recognise the injustices of our past; honour those who suffered for justice and freedom in our land; respect those who have worked to build and develop our country; and believe that South Africa belongs to all who live in it, united in our diversity.
    We therefore, through our freely elected representatives, adopt this Constitution as the supreme law of the Republic so as to –
    Heal the divisions of the past and establish a society based on democratic values, social justice and fundamental human rights;
    Lay the foundations for a democratic and open society in which government is based on the will of the people and every citizen is equally protected by law;
    Improve the quality of life of all citizens and free the potential of each person; and
    Build a united and democratic South Africa able to take its rightful place as a sovereign state in the family of nations.
    May God protect our people. Nkosi Sikelel' iAfrika. Morena boloka setjhaba sa heso. God seën Suid-Afrika. God bless South Africa. Mudzimu fhatutshedza Afurika. Hosi katekisa Afrika.`;

    if (preambleContent.toLowerCase().includes(query)) {
        searchResults.push({
            chapterTitle: "Preamble",
            sectionTitle: "Preamble",
            content: preambleContent,
            id: 'preamble',
            chapterId: 'preamble'
        });
    }

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
                <h3 class="text-xl font-bold text-indigo-300">
                    ${result.chapterTitle} - ${result.sectionTitle}
                </h3>
                <p class="text-gray-300 text-sm mt-2 line-clamp-3">${highlightMatches(displayedContent, query)}</p>
                <button class="text-indigo-400 hover:underline text-sm mt-2 view-section-button" data-section-id="${result.id}">Read Full Section</button>
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
    // Escape special characters in query to prevent regex errors
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
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

/**
 * Handles the click event for the View PDF button.
 * Opens the relevant Constitution PDF.
 */
function handleViewPdf() {
    // The href is already set in displayConstitutionContent, just need to ensure it's a valid link
    if (viewPdfButton.href && viewPdfButton.href !== window.location.href + '#') { // Check if it's not just '#'
        window.open(viewPdfButton.href, '_blank');
    } else {
        console.warn('No specific PDF URL available for this section.');
        // Optionally, display a message to the user that PDF is not available for this section
    }
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
                <h3 class="text-base font-semibold leading-normal text-indigo-300">${doc.title}</h3>
                <p class="text-sm font-normal leading-normal text-gray-400">Type: ${doc.type.charAt(0).toUpperCase() + doc.type.slice(1)} | Date: ${doc.date}</p>
                <p class="text-gray-300 text-sm flex-grow">${doc.description}</p>
                <a href="${doc.url}" class="text-indigo-400 hover:underline text-sm mt-2 block" target="_blank" rel="noopener noreferrer">View Document <i class="fas fa-external-link-alt ml-1"></i></a>
            </div>
        `;
        supportingDocumentsList.appendChild(docCard);
    });
}

/**
 * Handles search input for supporting documents.
 */
function handleDocumentSearch() {
    const query = documentSearchInput.value.toLowerCase().trim();
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

// --- Vertical Timeline Functions ---

/**
 * Populates the vertical timeline with data from history-data.js.
 */
function createVerticalTimeline() {
    if (!timelineScrollerVertical || typeof verticalTimelineData === 'undefined') {
        console.error("Timeline scroller or verticalTimelineData not found for vertical timeline.");
        return;
    }

    timelineScrollerVertical.innerHTML = ''; // Clear any existing placeholders

    verticalTimelineData.forEach(item => {
        const point = document.createElement('div');
        point.className = 'timeline-point';
        point.innerHTML = `<div class="timeline-dot"></div><div class="timeline-content"><div class="date">${item.date}</div><div class="event">${item.event}</div></div>`;

        point.addEventListener('click', () => {
            modalTitle.textContent = `${item.date}: ${item.event}`;
            modalDetails.innerHTML = `<p>${item.details}</p>`;

            // Handle primary source link
            modalPrimarySource.innerHTML = item.primarySource.startsWith('http')
                ? `<a href="${item.primarySource}" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:underline">${new URL(item.primarySource).hostname}</a>`
                : item.primarySource;

            // Handle secondary source link
            modalSecondarySource.innerHTML = item.secondarySource.startsWith('http')
                ? `<a href="${item.secondarySource}" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:underline">${new URL(item.secondarySource).hostname}</a>`
                : item.secondarySource;

            timelineModal.classList.add('visible');
        });
        timelineScrollerVertical.appendChild(point);
    });
}

// --- Quiz Functions ---

/**
 * Initiates a quiz for the currently displayed section.
 */
function handleTakeQuiz() {
    const quizId = takeQuizButton.dataset.quizId;
    currentQuiz = quizzes[quizId];

    if (!currentQuiz) {
        console.error(`Quiz for ID "${quizId}" not found.`);
        return;
    }

    currentQuestionIndex = 0;
    userScore = 0;
    selectedAnswer = null; // Reset selection

    quizModal.classList.add('visible');
    nextQuestionButton.textContent = 'Next Question';
    nextQuestionButton.style.display = 'block';
    restartQuizButton.style.display = 'none';

    displayQuizQuestion();
}

/**
 * Displays the current quiz question.
 */
function displayQuizQuestion() {
    if (currentQuestionIndex < currentQuiz.questions.length) {
        const questionData = currentQuiz.questions[currentQuestionIndex];
        quizTitle.textContent = `Quiz: ${currentQuiz.title} (Question ${currentQuestionIndex + 1} of ${currentQuiz.questions.length})`;
        quizContainer.innerHTML = `
            <p class="text-lg font-semibold mb-4">${questionData.question}</p>
            <div id="quiz-options" class="flex flex-col gap-3">
                ${questionData.options.map((option, index) => `
                    <button class="quiz-option" data-option-index="${index}">
                        ${option}
                    </button>
                `).join('')}
            </div>
            <div id="quiz-feedback" class="mt-4 text-center hidden"></div>
        `;

        document.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', handleOptionSelect);
        });

        // Reset next button state
        nextQuestionButton.disabled = true;
        nextQuestionButton.classList.add('opacity-50', 'cursor-not-allowed');
        selectedAnswer = null;
    } else {
        // Quiz finished
        quizTitle.textContent = `Quiz: ${currentQuiz.title} - Results`;
        quizContainer.innerHTML = `
            <p class="text-xl font-bold text-center text-indigo-300 mb-4">Quiz Completed!</p>
            <p class="text-lg text-center">You scored: ${userScore} out of ${currentQuiz.questions.length}</p>
            <div id="quiz-summary" class="mt-4 text-center"></div>
        `;
        nextQuestionButton.style.display = 'none';
        restartQuizButton.style.display = 'block';

        // Optionally, add a summary of correct/incorrect answers
        const summaryDiv = document.getElementById('quiz-summary');
        currentQuiz.questions.forEach((q, i) => {
            const resultClass = q.userAnswer === q.answer ? 'text-green-400' : 'text-red-400';
            summaryDiv.innerHTML += `<p class="${resultClass}">${i + 1}. ${q.question} <br> <em>Your answer: ${q.options[q.userAnswer]}, Correct: ${q.options[q.answer]}</em></p>`;
        });
    }
}

/**
 * Handles user selecting an option in the quiz.
 * @param {Event} event - The click event.
 */
function handleOptionSelect(event) {
    if (selectedAnswer !== null) return; // Prevent changing answer after selection

    const selectedOptionButton = event.target;
    selectedAnswer = parseInt(selectedOptionButton.dataset.optionIndex);
    const feedbackDiv = document.getElementById('quiz-feedback');
    const currentQuestionData = currentQuiz.questions[currentQuestionIndex];

    // Disable all options and remove hover effects
    document.querySelectorAll('.quiz-option').forEach(button => {
        button.disabled = true;
        button.classList.remove('hover:bg-gray-600');
    });

    selectedOptionButton.classList.add('selected'); // Highlight selected

    currentQuestionData.userAnswer = selectedAnswer; // Store user's answer

    if (selectedAnswer === currentQuestionData.answer) {
        userScore++;
        selectedOptionButton.classList.add('correct');
        feedbackDiv.innerHTML = `<p class="text-green-400 font-semibold">Correct! <i class="fas fa-check-circle"></i></p><p class="text-gray-300 text-sm mt-1">${currentQuestionData.explanation}</p>`;
    } else {
        selectedOptionButton.classList.add('incorrect');
        // Highlight the correct answer as well
        document.querySelector(`.quiz-option[data-option-index="${currentQuestionData.answer}"]`).classList.add('correct');
        feedbackDiv.innerHTML = `<p class="text-red-400 font-semibold">Incorrect. <i class="fas fa-times-circle"></i></p><p class="text-gray-300 text-sm mt-1">${currentQuestionData.explanation}</p>`;
    }

    feedbackDiv.classList.remove('hidden');
    nextQuestionButton.disabled = false;
    nextQuestionButton.classList.remove('opacity-50', 'cursor-not-allowed');
}

/**
 * Advances to the next quiz question or ends the quiz.
 */
function handleNextQuestion() {
    if (selectedAnswer === null && currentQuestionIndex < currentQuiz.questions.length) {
        // User must select an answer before proceeding, unless it's the end of quiz
        return;
    }
    currentQuestionIndex++;
    displayQuizQuestion();
}

/**
 * Restarts the current quiz.
 */
function handleRestartQuiz() {
    handleTakeQuiz(); // Simply call handleTakeQuiz again to restart
}


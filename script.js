// 1. Quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

// 2. Variables for tracking
let words = [];
let wordIndex = 0;
let startTime;

// 3. Get UI elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

// 4. Event listener for the start button
document.getElementById("start").addEventListener("click", function() {
    // Get a random quote
    let quoteIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[quoteIndex];

    // Split quote into words
    words = quote.split(' ');

    // Reset word index
    wordIndex = 0;

    // Start the timer
    startTime = Date.now();

    // Update UI
    quoteElement.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');

    // Highlight the first word correctly
    quoteElement.querySelector('span').classList.add('highlight');

    // Clear message
    messageElement.innerText = '';

    // Reset input
    typedValueElement.value = '';
    typedValueElement.focus();
});

// 5. Event listener for typing
typedValueElement.addEventListener('input', function() {
    // Get current word and input value
    let currentWord = words[wordIndex];
    let typedValue = typedValueElement.value;

    // If completed correctly
    if (typedValue === currentWord && wordIndex === words.length - 1) {
        const elapsedTime = (Date.now() - startTime) / 1000;
        messageElement.innerText = `Congratulations! You completed the game in ${elapsedTime} seconds.`;
    } 
    // If word is completed (space pressed)
    else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        typedValueElement.value = ''; // Clear input field
        wordIndex++; // Move to next word

        // Remove highlight from all words
        quoteElement.querySelectorAll('span').forEach(span => span.classList.remove('highlight'));

        // Highlight the new word
        if (wordIndex < words.length) {
            quoteElement.querySelectorAll('span')[wordIndex].classList.add('highlight');
        }
    } 
    // If input is correct so far
    else if (currentWord.startsWith(typedValue)) {
        typedValueElement.classList.remove('error');
    } 
    // If input is incorrect
    else {
        typedValueElement.classList.add('error');
    }
});

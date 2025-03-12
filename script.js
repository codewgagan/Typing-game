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

// 2. array for storing the words
let words = [];
// stores the index of the word the player is typing
let wordIndex = 0;
// default value for starttime
let startTime = Date.now();

// 3. Grab UI elements
let quoteElement = document.getElementById('quote');
let messageElement = document.getElementById('message');
let typedValueElement = document.getElementById('typed-value');

// 4. Add evenet listener to the start button

document.getElementById("start").addEventListener("click", function(){
    // get a random quote
    // put the quote into array of words
    // reset the word index for tracking
})



// 5. UI updates
// create an array of span elements so we can get a class
// convert into string nad set as innerHTML on quote display(we use join methos)
// Hightlight the first word
// clear prior messages
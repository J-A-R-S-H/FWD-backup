// JavaScript String Data Type v1.0
// by: Michael Whyte
// c. 2019

// Grab all the output paragraphs
const p01 = document.getElementById('p-01');
const p02 = document.getElementById('p-02');
const p03 = document.getElementById('p-03');
const p04 = document.getElementById('p-04');
const p05 = document.getElementById('p-05');
const p06 = document.getElementById('p-06');
const p07 = document.getElementById('p-07');
const dynamicListContainer = document.getElementById('dynamic-list-container');


// JavaScript Strings

// Single and Double Quotes
// - Single Quotes or double quotes are treated the same
//   in JavaScript
const bear1 = 'Polar Bear';
const bear2 = "Grizzly Bear";
// Output
p01.innerHTML = bear1;
p02.innerHTML = bear2;

// Escaping Special Characters in Strings using "\"
//const movieLine = 'The Terminator said "I'll be back!"'; // Error
const movieLine = 'The Terminator said "I\'ll be back!"'; 
// Output
p03.innerHTML = movieLine;

// Concatenating Strings
// - To concatenate strings means to add two or more 
//   strings together
// - JavaScript does not know grammar. JavaScript will
//   not add spaces between words
const firstname = 'Joe';
const lastname = 'Smith';
// Concatentate 
//const fullname = firstname + lastname; // -> JoeSmith -> probably incorrect
const fullname = firstname + ' ' + lastname; // -> Joe Smith -> Correct!
// Output
p04.innerHTML = fullname;

// Template Strings
// - Template strings are written with the "`" (back tick) character
// - Template strings allow variables inside strings
// - Template strings allow you to perform scripting operations inside a string
// - Template strings retain spacing formationg

// Regular Template String
const capitalOfBC = `Victoria`;
// Output
p05.innerHTML = capitalOfBC;

// Output a Variable Inside a Template String
p06.innerHTML = `The capital of British Columbia is ${capitalOfBC}.`;


// Run JavaScript code from within a string
const subTotal = 23.57;
const tax = 0.05; 

p07.innerHTML = `Total: $${(subTotal + (subTotal * tax)).toFixed(2)}`;

// Maintaining String Spacing Formatting with Template Strings
const listOfFruits = 
`<ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
</ul>`;
// Output
dynamicListContainer.innerHTML = listOfFruits;



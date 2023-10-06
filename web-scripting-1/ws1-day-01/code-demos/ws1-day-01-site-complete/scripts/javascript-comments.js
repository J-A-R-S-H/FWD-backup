// JavaScript Comments v1.0
// by: Michael Whyte
// c. 2019

// JavaScript Comments

// Single Line Comments

// This is a single line comment

// Multi-line Comments...

/* 

- This is a multiline comment...
- Everything side the comment tags is
considered a comment

*/

/* 

*** Comments are public, do not put personal
information in comments ***

*/

// Grab the button from the document
const btn = document.getElementById('btn-change-text');
// Grab the paragraph with the ID of "special"
const txt = document.getElementById('special');
// Add a click event listener to the
// button
btn.addEventListener('click', function(){
    // Change the text of the "special" paragraph
    // to "Hello World" by setting the "innerHTML"
    // property
    txt.innerHTML = '<strong>Remember: </strong>JavaScript comments are public!';
});
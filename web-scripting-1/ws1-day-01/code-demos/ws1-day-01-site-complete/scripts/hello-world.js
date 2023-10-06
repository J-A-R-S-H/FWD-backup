// Hello World v1.0
// by: Michael Whyte
// c. 2019

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
    txt.innerHTML = 'Hello World!';
});
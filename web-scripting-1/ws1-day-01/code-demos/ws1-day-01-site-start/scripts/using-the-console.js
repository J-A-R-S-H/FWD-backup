// Using the Console v1.0
// by: Michael Whyte
// c. 2019

// Use console.log() to display text

// Use console.log() to display variable values
const foo = 23;

// Use console.log() to display text with a 
// variable
// Option 1

// Option 2

// Option 3


// Generic variable
let bar = 52;

// Grab the button from the document
const btn = document.getElementById('btn');
// Add a click event listener to the
// button
btn.addEventListener('click', function(){
    // For demo purposes...change the value of bar here
    bar = 28;
    // Output the value of bar
    console.log('The value of bar is:', bar); // Outputs: 28
});
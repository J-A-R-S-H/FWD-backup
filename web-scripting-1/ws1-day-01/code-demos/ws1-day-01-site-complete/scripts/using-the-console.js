// Using the Console v1.0
// by: Michael Whyte
// c. 2019

// Use console.log() to display text
console.log('Hello from JavaScript!!!');
// Use console.log() to display variable values
const foo = 23;
console.log(foo) // Outputs: 23
// Use console.log() to display text with a 
// variable
// Option 1
console.log('The value of foo is:', foo);
// Option 2
console.log('The value of foo is: ' + foo);
// Option 3
console.log(`The value of foo is: ${foo}`);

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
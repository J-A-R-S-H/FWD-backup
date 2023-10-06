// JavaScript String Numbers v1.0
// by: Michael Whyte
// c. 2019

// Grab the form
const form = document.getElementById('add-numbers-form');
// Grab the number inputs
const num1Input = document.getElementById('num-01');
const num2Input = document.getElementById('num-02');
// Grab the output paragraphs
const p01 = document.getElementById('p-01');
const p02 = document.getElementById('p-02');
const p03 = document.getElementById('p-03');
const p04 = document.getElementById('p-04');
const p05 = document.getElementById('p-05');


// JavaScript String Numbers
// - Most data that your script receives from the HTML document 
//   will be a string. This even includes inputs with a number
//   input type
// - Since the numbers come back as strings, performing the 
//   addition math operation will produce usually unintended
//   results
// - To fix this we can use various JavaScript string conversion
//   methods.
// -- parseFloat()
// --- converts a floating point (number with decimals) or an integer 
//     (whole number) string number to a number
// ---- If you are 100% sure your numbers will be integers (whole numbers)
// ---- then use parseInt()
// -- parseInt()
// --- converts a whole string number into a number
// ---- Use this method if you are sure the numbers will be integers
// ---- If you pass in a floating point string number to the parseInt()
//      method then the decimals will be removed
// -- Multiply by 1 '12'*1
// --- When you multiply a string number by 1 the JavaScript will convert
//     the string to a number
// -- Prepend the "+" before the number
// --- JavaScript will convert string numbers that are prepended with 

// Capture and process the form data
// - We learn more about how to process form data in a future lesson
form.addEventListener('submit', function(e){

    // Prevent form from refreshing the page
    e.preventDefault();

    // Get the number input values by getting the "value"
    // properties of the inputs
    // *** Note these will be strings
    let num1 = num1Input.value;
    let num2 = num2Input.value;

    // Add the numbers...

    // Incorrect -> the numbers will be concatenated and not added mathematically
    //p01.innerHTML; 

    // Use parseFloat() - For floating point or integers
    p02.innerHTML;

    // Use parseInt() - for integers
    p03.innerHTML;

    // Use the multiply by 1 method
    p04.innerHTML;

    // Use the prepend the "+" character method
    p05.innerHTML;

});

     








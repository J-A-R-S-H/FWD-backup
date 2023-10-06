// JavaScript Variables v1.0
// by: Michael Whyte
// c. 2019

// Grab our output paragraphs
const p01 = document.getElementById('p-01');
const p02 = document.getElementById('p-02');
const p03 = document.getElementById('p-03');


// JavaScript Variables

// Declaring a variable with the "var" keyword
// - Use var for legacy scripts
var userAge = 23;

// Declaring variables with the "let" keyword
// - Use let if your variable will change in value
let pet = 'cat';
pet = 'dog';

// Declaring variables with the "const" keyword
// - Use const if your variable's value will not 
//   change
const manitobaCapitalCity = 'Winnipeg';
// The code below will cause an error
// manitobaCapitalCity = 'Brandon';

// Output the above variables to the page
p01.innerHTML = userAge;
p02.innerHTML = pet;
p03.innerHTML = manitobaCapitalCity;

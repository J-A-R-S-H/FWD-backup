// JavaScript Boolean Data Type v1.0
// by: Michael Whyte
// c. 2019

// Grab the output paragraphs
const p01 = document.getElementById('p-01');

// Booleans
// Booleans return two values:
// - true
// - false

// Booleans are useful in combination with 
// conditional statements

// Below we will output a different message 
// depending "if" whether the value of the 
// boolean variable of "userCanVote" equals true or false

const userCanVote = true;

// Conditional "if" statement
// - We will have a lesson on conditional statements in
//   a future lesson
if(userCanVote == true){
    p01.innerHTML = 'The user can vote.';
}else {
    p02.innerHTML = 'The user cannot vote.';
}

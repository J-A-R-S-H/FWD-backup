// Paragraph Outputs
const p1 = document.getElementById('p-01');
const p2 = document.getElementById('p-02');
const p3 = document.getElementById('p-03');

// Beware of writing a 
// single "=" in your if 
// statements...this will
// always result in a true value
let pet = 'dog';

// Incorrect code
if(pet = 'cat'){
// ERROR ^ ERROR
    p1.innerHTML = 'Pet is a dog...';
}

// Regular Equivalence -> "=="
// Tests for value only
const num1 = '3';
const num2 = 3;

if(num1 == num2){
    p2.innerHTML = 'num1 is equal to num2';
}else {
    p2.innerHTML = 'num1 is NOT equal to num2';
}

// Strict equivalence -> "==="
// Tests for value and data type
if(num1 === num2){
    p3.innerHTML = 'num1 is equal to num2';
}else {
    p3.innerHTML = 'num1 is NOT equal to num2';
}
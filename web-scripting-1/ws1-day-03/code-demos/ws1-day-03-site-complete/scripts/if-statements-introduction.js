// Paragraph Outputs
const p1 = document.getElementById('p-01');
const p2 = document.getElementById('p-02');
const p3 = document.getElementById('p-03');

// if Statement Examples

// Basic if Statement
const fruit = 'apple';

if(fruit == 'apple'){
    p1.innerHTML = 'Apple!';
}

// if with an else if
const age = 67;

if(age < 19){
    p2.innerHTML = 'User is a minor';
}else if(age > 64){
    p2.innerHTML = 'User is a senior';
}

// if with an else if and an else
const userGuess = 7;
const magicNumber = 9;

if(userGuess > magicNumber){
    p3.innerHTML = 'Your guess is too high.';
}else if(userGuess < magicNumber){
    p3.innerHTML = 'Your guess is too low';
}else{
    p3.innerHTML = 'You guessed correctly!';
}


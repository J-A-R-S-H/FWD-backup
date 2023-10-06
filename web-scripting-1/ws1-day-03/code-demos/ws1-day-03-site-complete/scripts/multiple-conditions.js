// Paragraph Outputs
const p1 = document.getElementById('p-01');
const p2 = document.getElementById('p-02');
const p3 = document.getElementById('p-03');

// Testing OR Conditons
const age = 67;

if(age < 13 || age > 64){
    p1.innerHTML = 'Child or Senior discount applied';
}

// Testing AND Conditions
const user1 = 'Arnold';
const pw1 = 123;

if(user1 === 'Arnold' && pw1 === 123){
    p2.innerHTML = 'Arnold is a valid user';
}

// Testing Multiple Conditions
const user2 = 'Eve';
const pw2 = 789;
const userAge = 27;

if( (user2 === 'Eve' || user2 === 'Adele') && pw2 == 789){
    p3.innerHTML = 'The user is valid';
}
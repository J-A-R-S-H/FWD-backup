// Window Prompt Method v1.0
// by: Michael Whyte
// c. 2019

// Grab the button
const btn = document.getElementById('btn');
// Grab the output paragraph
const out = document.getElementById('p-01');


btn.addEventListener('click', function(){
    
    // window.prompt() or just prompt() works as well
    // Store the returned value from the prompt() method in the 
    // username variable
    const username = prompt('What is your name?', 'Enter name...');
    // Output the returned data from the prompt() method
    out.innerHTML = `Hello ${username}!`;

});
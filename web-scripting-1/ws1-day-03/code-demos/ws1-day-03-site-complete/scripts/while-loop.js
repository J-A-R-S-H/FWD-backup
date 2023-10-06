const out  = document.getElementById('out');
const p1   = document.getElementById('p-01');
const p2   = document.getElementById('p-02');
const btn1 = document.getElementById('btn-01');
const btn2 = document.getElementById('btn-02');

const colors = ['red', 'green', 'blue'];
const colorsLength = colors.length;

let html = '<ul>';

let counter = 0;

while(counter < colorsLength){
    html += `<li>${colors[counter]}</li>`;
    counter++;
}

html += '</ul>';

out.innerHTML = html;

btn1.addEventListener('click', function(){
    
    let user = prompt('What is your name?');

    while(user == null || user.trim() == ''){
        user = prompt('Please enter a name...');
    }

    p1.innerHTML = `Hello ${user}.`;

});

btn2.addEventListener('click', function(){
    
    let user;

    do{
        user = prompt('Please enter a name...');
    }while(user == null || user.trim() == '')
    
    p2.innerHTML = `Hello ${user}.`;

});

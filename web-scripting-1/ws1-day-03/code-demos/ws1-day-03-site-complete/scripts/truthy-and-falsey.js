// Paragraph Outputs
const p1 = document.getElementById('p-01');
const p2 = document.getElementById('p-02');

// Testing Truthy
const catName = 'Fluffy';

if(catName){
    p1.innerHTML = 'Cat has a name.';
}

// Testing Falsey
const pw = null;

if(!pw){
    p2.innerHTML = 'Password not set.';
}
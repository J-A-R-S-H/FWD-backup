// Buttons - Not Part of Demo
// Buttons
const btnSelectRows = document.getElementById('select-tr');
const btnSelectBoxes = document.getElementById('select-boxes');
const btnAddBox = document.getElementById('add-box');
// Elements
let tr; // add value later...
let box; // add value later...

// Selecting Elements

// Query Selector
btnSelectRows.addEventListener('click', function(){
    tr = document.querySelector('tr');
    // Console.log the row
    console.log(tr);
    tr.style.backgroundColor = '#ffcffb';
});

// Query Selector All
btnSelectBoxes.addEventListener('click', function(){
    box = document.querySelectorAll('.box');
    // Console.log the number of boxes
    console.log('Boxes:', box.length);
    box.forEach(function(item){
        item.style.backgroundColor = '#ffcffb';
    });
});
// Click the "Add Box" button to add a box and then 
// check the number of box elements selected
// *** The function to add boxes is at the bottom of
// this script...we will cover this functionality 
// in a future demo
btnAddBox.addEventListener('click', function(){
    addBox();
    // Console.log the number of boxesx
    console.log('Boxes:', box.length);
    // The below code will not work...we either have to select
    // again...with querySelectorAll or select new box
    // with querySelector
    singleBox = document.querySelector('.box:last-of-type');
    singleBox.style.backgroundColor = '#ffcffb';
});


// Not Part of this demo...
// ...Just used to demo the live selection
// Will cover creating elements at a later
// time
const boxRow01 = document.getElementById('box-row-01')
function addBox() {
    const nodeBox = document.createElement('DIV');
    nodeBox.classList.add('box');
    boxRow01.appendChild(nodeBox);
}
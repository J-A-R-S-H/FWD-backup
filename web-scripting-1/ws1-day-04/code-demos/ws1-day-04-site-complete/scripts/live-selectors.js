// Buttons - Not Part of Demo
// Buttons
const btnSelectRows = document.getElementById('select-tr');
const btnAddRow = document.getElementById('add-tr');
const btnSelectBoxes = document.getElementById('select-boxes');
const btnAddBox = document.getElementById('add-box');
// Elements
let tr; // add value later...
let box; // add value later...

// Selecting Elements

// Live DOM Selectors
// - These selectors are "Live"
// - This means their selections are updated
//   dynamically when the DOM is updated
// Live Selectors
// - document.getElementsByTagName()
// - document.getElementsByClassName()

// Select all the table rows using getElementsByTagName()
btnSelectRows.addEventListener('click', function(){
    tr = document.getElementsByTagName('tr');
    // Console.log the number of rows
    console.log('Table Rows:', tr.length);
    // forEach is not available on these live DOM
    // selectors...use a spread to convert the element
    // to an array...and then use forEach()
    trArray = [...tr];
    trArray.forEach(function(item){
        item.style.backgroundColor = '#ffcffb';
    });
});
// Click the "Add Row" button to add a row and then 
// check the number of tr row elements selected
// *** The function to add rows is at the bottom of
// this script...we will cover this functionality 
// in a future demo
btnAddRow.addEventListener('click', function(){
    addTableRow();
    // Console.log the number of rows
    console.log('Table Rows:', tr.length);
    // Add the pink color to the last row
    tr[tr.length - 1].style.backgroundColor = '#ffcffb';
});

// Select all the boxes using getElementsByClassName()
btnSelectBoxes.addEventListener('click', function(){
    box = document.getElementsByClassName('box');
    // Console.log the number of boxes
    console.log('Boxes:', box.length);
    // forEach is not available on these live DOM
    // selectors...use a spread to convert the element
    // to an array...and then use forEach()
    boxArray = [...box];
    boxArray.forEach(function(item){
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
    // Add the pink color to the last box
    box[box.length - 1].style.backgroundColor = '#ffcffb';
});




// Not Part of this demo...
// ...Just used to demo the live selection
// Will cover creating elements at a later
// time
const demoTable = document.getElementById('demo-table')
function addTableRow() {
    const nodeTr = document.createElement('TR');
    let nodeTd = document.createElement('TD');
    let nodeText = document.createTextNode('Stuff');
    nodeTd.appendChild(nodeText);
    nodeTr.appendChild(nodeTd);
    nodeTd = document.createElement('TD');
    nodeText = document.createTextNode('Stuff');
    nodeTd.appendChild(nodeText);
    nodeTr.appendChild(nodeTd);
    demoTable.appendChild(nodeTr);
}
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
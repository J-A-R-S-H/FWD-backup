// JSON Introduction

// HTML Elements
const btn = document.getElementById('btn-01');
const out = document.getElementById('data-output');
const spinner = new Image();
spinner.src = 'images/spinner.gif';
spinner.alt = 'Loading';
const endPoint = 'data/json/people-short-list.json';

btn.addEventListener('click', function(){

    // Remove any existing HTML on the output div
    out.innerHTML = '';
    // Insert a spinner while the data loads
    out.appendChild(spinner);

    

});

// Create List
// - Creates an HTML List from an array
function listMaker(arr, listType = 'ul'){
    const list = document.createElement(listType);
    arr.forEach(item => {
        const li = document.createElement('li');
        const txt = document.createTextNode(item);
        li.appendChild(txt);
        list.appendChild(li);
    });
    return list;
}

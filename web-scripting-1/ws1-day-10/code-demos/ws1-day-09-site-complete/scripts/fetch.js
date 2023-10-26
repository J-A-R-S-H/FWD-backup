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


    fetch(endPoint)
        .then(function(response){
            if(response.ok){
                return response.json();
            }
            throw new Error('Network response was not ok');
        })
        .then(function(data){
            // Extract all the peoples names
            const names = data.map(person => person.name);
            const namesAsHTMLList = listMaker(names, 'ol');
            // Remove the spinner
            out.innerHTML = '';
            out.appendChild(namesAsHTMLList);
        })
        .catch(function(error){
            out.innerHTML = `<p>${error}. Please try again.</p>`;
        });

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

// JSON Introduction

// HTML Elements
const btn = document.getElementById('btn-01');
const out = document.getElementById('data-output');
const spinner = new Image();
spinner.src = 'images/spinner.gif';
spinner.alt = 'Loading';
const endPoint = 'data/json/people-short-lis1t.json';

btn.addEventListener("click", function () {

    out.innerHTML = ""
    out.appendChild(spinner)

    fetch(endPoint)
        .then(function (res) {

            if (res.ok) {
                return res.json();
            }

            throw new Error("Network response was not ok");

        })

        .then(function (data) {

            const names = data.map(person => person.name)

            const namesList = listMaker(names)

            out.innerHTML = ""

            out.appendChild(namesList)

        })

        .catch(function (err) {
            out.innerHTML = `<p>${err}. Please Try Again`
        })

})





function listMaker(arr, listType = 'ul') {
    const list = document.createElement(listType);
    arr.forEach(item => {
        const li = document.createElement('li');
        const txt = document.createTextNode(item);
        li.appendChild(txt);
        list.appendChild(li);
    });

    return list;

}

// JSON Introduction

// HTML Elements
const btn = document.getElementById('btn-01');
const out = document.getElementById('data-output');
const spinner = new Image();
spinner.src = 'images/spinner.gif';
spinner.alt = 'Loading';
const endPoint = 'data/json/people-short-list.json';

btn.addEventListener("click", function () {

    out.innerHTML = ""
    out.appendChild(spinner)

    fetch(endPoint)
        .then(function (res) {

            if (res.ok) {
                return res.json();
            }

        })

        .then(function (data) {

            console.log(data[2].name)

        })

})

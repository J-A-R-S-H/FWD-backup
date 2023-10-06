const out = document.getElementById('out');

const colors = ['red', 'green', 'blue'];

let html = '<ul>';

colors.forEach(function(item){
    html += `<li>${item}</li>`;
});

html += '</ul>';

out.innerHTML = html;

// forEach with querySelectorAll
const specialElements = document.querySelectorAll('.special');

specialElements.forEach(function(el){
    el.style.border = '2px solid red';
});

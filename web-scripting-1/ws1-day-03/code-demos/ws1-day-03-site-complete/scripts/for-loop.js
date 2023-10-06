// For Loops

const out = document.getElementById('out');

const colors = ['red', 'green', 'blue'];

let html = '<ul>';

for(let i = 0, l = colors.length; i < l; i++){
    html += `<li>${colors[i]}</li>`;
}

html += '</ul>';

out.innerHTML = html;

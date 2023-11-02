const form = document.getElementById('basic-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    // The following code modified from code found at:
    //
    // https://www.w3schools.com/jsref/met_node_appendchild.asp
    //
    const el = document.createElement('P');
    const text = document.createTextNode('Thanks for filling in the form!');
    el.appendChild(text);
    document.getElementById('s-01').appendChild(el);
});
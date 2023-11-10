// Responsive Menu - Dropdown
const body = document.body;
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', openMenu);
hamburger.addEventListener('mousedown', function(e){
    e.preventDefault();
});

function openMenu(){
    body.classList.toggle('show');
}
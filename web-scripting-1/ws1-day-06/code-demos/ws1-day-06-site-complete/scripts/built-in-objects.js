// Built In Objects

// HTML Elements
const ihOut = document.getElementById('ih-out');
const iwOut = document.getElementById('iw-out');
const ostOut = document.getElementById('ost-db-02');
const btn = document.getElementById('btn');
const db02 = document.getElementById('demo-box-02');

// Add a window resize event listener on the window
window.addEventListener('resize', function(){
    ihOut.innerHTML = window.innerHeight;
    iwOut.innerHTML = window.innerWidth;
});

// Add a click event listener to the button
btn.addEventListener('click', function(){
    ostOut.innerHTML = db02.offsetTop;
});
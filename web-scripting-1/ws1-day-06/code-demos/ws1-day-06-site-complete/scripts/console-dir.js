// Built In Objects

// HTML Elements
const btn = document.getElementById('btn');
const db02 = document.getElementById('demo-box-01');
const cars = ['Hyundai', 'Toyota', 'Volkswagen'];

// Add a click event listener to the button
btn.addEventListener('click', function(){
    // Window object
    console.dir(window);
    // Document object
    console.dir(document);
    // The properties and methods of the cars array
    console.dir(cars);
    // The properties and methods of the demo-box-02 element
    console.dir(db02);
});
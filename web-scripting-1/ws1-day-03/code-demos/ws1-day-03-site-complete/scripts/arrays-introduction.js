// Paragraph Outputs
const p1 = document.getElementById('p-01');
const p2 = document.getElementById('p-02');

// Arrays
const cars = [];
cars[0] = 'Toyota';
cars[1] = 'BMW';
cars[2] = 'Hyundai';

const fruits = ['Apples', 'Bananas', 'Oranges'];
fruits[1] = 'Blueberries';

p1.innerHTML = cars[0];

p2.innerHTML = fruits.length;

fruits.push('Orange');


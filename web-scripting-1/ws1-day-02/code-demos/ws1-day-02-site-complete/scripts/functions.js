const p1  = document.getElementById('p-01');
const p2  = document.getElementById('p-02');
const p3  = document.getElementById('p-03');
const p4  = document.getElementById('p-04');
const btn = document.getElementById('btn');

// Function expressions must be declared before
// using them
const addNumbers = function(num1, num2){
    return num1 + num2;
}

p1.innerHTML = addNumbers(3, 5);
p2.innerHTML = genRanNum(17, 52);
p3.innerHTML = cube(23);

btn.addEventListener('click', function(){
    p4.innerHTML = calcTip(48.00)
});


// Function Declarations are hoisted
// Code modified from:
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function genRanNum(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function cube(num){
    return num * num * num;
}

function calcTip(bill, tipRate = 0.15){
    if(typeof bill != 'number'){
        return 'Not a valid amount';
    }
    return ((bill * tipRate) + bill).toFixed(2);
}

// Primitives are passed by value
let x = 23;

function increment(x){
    // x here is a completely 
    // separate variable to the x 
    // variable declared above...
    x = x + 1;
}

console.log(x);
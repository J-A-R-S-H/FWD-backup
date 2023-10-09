// JavaScript Objects

// HTML Elements
const catNameOut = document.getElementById('cat-name');
const catBreedOut = document.getElementById('cat-breed');
const catEatOut = document.getElementById('cat-eat');
const catDrinkOut = document.getElementById('cat-drink');
const catSpeakOut = document.getElementById('cat-speak');
const btn01 = document.getElementById('btn-01');

// The following code modified from code
// found at https://github.com/wesbos/es6.io

// Extending classes

// Master Animal Class
class Animal {
	
	constructor(name) {
	  this.name = name;
	  this.thirst = 100;
	  this.belly = [];
	}
	
	drink() {
	  this.thirst -= 10;
	  return this.thirst;
	}
	
	eat(food) {
	  this.belly.push(food);
	  return this.belly;
	}

}

// Cat class that extends the
// Master Animal Class


// Event Listeners for outputting the playing cards object data
btn01.addEventListener('click', function(){
//    catNameOut.innerHTML = jazz.name;
//    catBreedOut.innerHTML = jazz.breed;
//    catEatOut.innerHTML = jazz.eat('salmon');
//    catDrinkOut.innerHTML = jazz.drink();
//    catSpeakOut.innerHTML = jazz.meow(3);
});



// Cat Manager

// Game HTML Elements
const catSelector = document.querySelector('.cat-selector');
const catImages = document.querySelectorAll('.cat-image-container img');
const catNameCreator = document.querySelector('.cat-name-creator');
const catNameForm = catNameCreator.querySelector('form');
const catNameInput = document.getElementById('cat-name');
const gameboard = document.querySelector('.gameboard-container');
const btnControls = document.querySelectorAll('.game-controls button');
const btnPlayAgain = document.getElementById('btn-play-again');

// Game HTML Elements Object
const gameHTMLElementsForCat = {
    name: document.querySelector('.cat-name-output h3'),
    image: {
        cat: document.querySelector('.cat-image-output'),
        grimReaper: document.querySelector('.grim-reaper-image-output')
    },
    button: {
        playAgain: btnPlayAgain
    },
    stat: {
        hunger: document.getElementById('hunger-out'),
        thirst: document.getElementById('thirst-out'),
        love: document.getElementById('love-out')
    },
    message: {
        hunger: document.getElementById('message-out-hunger'),
        thirst: document.getElementById('message-out-thirst'),
        love: document.getElementById('message-out-love')
    }
}

// Game State Variables
let petCatImage;

// Game Object
let petCat;

// Cat Love Messages
/*
- "I'm well loved... 😸"
- "I need some love! 🐱"
- "I feel unloved, please pet me! 😿"
- "I'm going to ignore you now! 😼"
- "I'M DISOWNING YOU! 😾"
*/

// Cat Class
class Cat {
    constructor(name) {
        // You can add additional parameters or
        // modify this parameter for this 
        // constructor function...

        // Feel free to add addtional properties...
        // or edit these properties...
        this.name = name;
        this.hunger = 10;
        this.thirst = 10;
        this.happiness = 10;
    }

    // The following are the base
    // required methods...
    // Feel free to add additional
    // methods...

    feed(food) {

        // The above "food" parameter
        // is optional. Feel free to
        // remove it...

        // This method will change
        // the hunger points output
        // and the hunger message
        // output

    }

    drink(water) {

        // The above "water" parameter
        // is optional. Feel free to
        // remove it...

        // This method will change
        // the thirst points output
        // and the thirst message
        // output

    }

    love(pet) {

        // The above "pet" parameter
        // is optional. Feel free to
        // remove it...

        // This method will change
        // the love points output
        // and the love message
        // output

    }

}

// Game Event Handlers
catImages.forEach(catImage => catImage.addEventListener('click', selectCat));

function selectCat() {

    // This function will probably need
    // additional code...

    catSelector.style.display = 'none';
    catNameCreator.style.display = 'block';

}

catNameForm.addEventListener('submit', startGame);

function startGame(e) {

    e.preventDefault();

    const catName = catNameInput.value;
    catNameInput.value = '';

    // This function will probably need 
    // additional code...

    catNameCreator.style.display = 'none';
    gameboard.style.display = 'block';

}

btnControls.forEach(function (btn) {

    btn.addEventListener('click', function () {
        // Control buttons event handler code
        // goes here...
    });

});

btnPlayAgain.addEventListener('click', function () {
    // Play Again button event handler code
    // goes here...
});





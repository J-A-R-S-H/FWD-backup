// JavaScript Objects

// HTML Elements
const p01Number = document.getElementById('p-01-number');
const p01Name = document.getElementById('p-01-name');
const p01Hand = document.getElementById('p-01-hand');
const p02Number = document.getElementById('p-02-number');
const p02Name = document.getElementById('p-02-name');
const p02Hand = document.getElementById('p-02-hand');
const btn01 = document.getElementById('btn-01');
const bnt02 = document.getElementById('btn-02');

// Create a deck of playing cards object
const deck = {

    // Deck Properties
	image: 'images/playing-card-back.png',
	
	type: 'French',
	
    cards: ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'],
    
    // Deck Methods

    // Based on this stackoverflow Q & A:
    // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    shuffle: function(){
        let j, x, i;
        for (i = this.cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = x;
        }
        return this.cards;
    },

    dealCard: function(){
        const card = this.cards.shift();
        return card === undefined ? 'No more cards' : card;
    }
	
}

deck.shuffle();

// Create a master Player object
const Player = {
    init: function(num, name){
		this.number = num;
		this.name = name;
		this.hand = [];	
	},
	
	getCard: function(){
        const card = deck.dealCard();
        if(card === 'No more cards'){
            return this.hand;
        }else {
            this.hand.push(card);	
		    return this.hand;
        }	
	}		
}

// Create instances of the Player object
const player01 = Object.create(Player);
// Set the players initial values
player01.init(1,'James');
// Create instances of the Player objec
const player02 = Object.create(Player);
// Set the players inital values
player02.init(2, 'Katherine');


// Event Listeners for outputting the playing cards object data
btn01.addEventListener('click', function(){
    p01Number.innerHTML = player01.number;
    p01Name.innerHTML = player01.name;
    p01Hand.innerHTML = player01.getCard();
});

bnt02.addEventListener('click', function(){
    p02Number.innerHTML = player02.number;
    p02Name.innerHTML = player02.name;
    p02Hand.innerHTML = player02.getCard();
});



// Code from this stackoverflow Q & A:
// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
/* 

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */

/*
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
*/

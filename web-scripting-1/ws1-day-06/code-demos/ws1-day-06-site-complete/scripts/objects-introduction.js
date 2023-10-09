// JavaScript Objects

// HTML Elements
const cardTypeOut = document.getElementById('card-type');
const cardImageOut = document.getElementById('card-image');
const cardSingleOut = document.getElementById('card-single');
const shuffleOut = document.getElementById('shuffle');
const dealOut = document.getElementById('deal');
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

// Event Listeners for outputting the playing cards object data
btn01.addEventListener('click', function(){
    cardTypeOut.innerHTML = deck.type;
    cardImageOut.innerHTML = `<img src="${deck.image}" alt="Playing card">`;
    cardSingleOut.innerHTML = deck.cards[10];
});

bnt02.addEventListener('click', function(){
    shuffleOut.innerHTML = deck.shuffle();
    dealOut.innerHTML = deck.dealCard();
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

// JavaScript Objects

// HTML Elements
const cardTypeOut = document.getElementById('card-type');
const cardImageOut = document.getElementById('card-image');
const cardSingleOut = document.getElementById('card-single');
const shuffleOut = document.getElementById('shuffle');
const dealOut = document.getElementById('deal');
const btn01 = document.getElementById('btn-01');
const bnt02 = document.getElementById('btn-02');



// Event Listeners for outputting the playing cards object data
btn01.addEventListener('click', function(){

});

bnt02.addEventListener('click', function(){
    
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

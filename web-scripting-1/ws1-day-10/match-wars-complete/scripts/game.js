// Match Wars - v2.0.0
// by: Michael Whyte
// Year: 2023

// Game Class
class Game {

    constructor(devMode = false, cheatMode = false){

        this.stats = new Stats();
        this.soundGuy = new SoundGuy();
        this.cards = cards;
        this._setUpElements();
        this._setUpCards();
        this._setUpGameStates();
        this._setUpEvents();
        this._placeCards(this.cards, this.el.cards);
        this.winMatchNumber = this.el.cards.length / 2;
        
        if(devMode){
            cheatMode === true ? this._devMode(true) : this._devMode();
        }

    }

    _setUpElements(){

        this.el = {};
        this.el.startGamePopUp = $('#start-game-pop-up');
        this.el.btnStartGame = $('#btn-start-game');
        this.el.gameScreen = $('#game-screen');
        this.el.cards = $('.card');
        this.el.popUpBoxWin = $('#end-game-pop-up-win');
        this.el.btnEndGame = $('#btn-end-game');
        this.el.btnPlayAgainYes = $('#btn-play-again-yes');
        this.el.btnPlayAgainNo = $('#btn-play-again-no');

    }

    _setUpEvents(){

        this.el.btnStartGame.on('click', _ => this._startGame());
        this.el.startGamePopUp.on('transitionend', _ => this._startGame(true) );
        this.el.cards.on('click', e => this._clickCard(e));
        this.el.btnEndGame.on('click', _ => this._resetGame(true));
        this.el.btnPlayAgainYes.on('click', _ => this._resetGame());
        this.el.btnPlayAgainNo.on('click', _ => this._cancelPlayAgain());
        this.el.popUpBoxWin.on('transitionend', _ => this._popUpBoxWinTransitionEnd());

    }

    _setUpCards(){

        this.cards = cards;
        this.openCards = [];

    }

    _setUpGameStates(){

        this.clickCounter = 1;
        this.preventOpeningCards = false;

    }

    _startGame(showGameBoard = false){

        if(showGameBoard === false){
            this.el.startGamePopUp.addClass('fade-out');
        }else {
            this.el.startGamePopUp.addClass('hide');
            this.el.gameScreen.addClass('fade-in');
        }

        this._placeCards(this.cards, this.el.cards);

    }

    _clickCard(e){

        // Get the first ancestor of the element that
        // triggered this event that has a class 
        // of "card"
        const el = $(e.target).closest('.card');

        // Kill the function if the preventClicks flag is true
        // or the element has a class of 'open'
        if( this.preventOpeningCards === true || el.hasClass('open') ){
            // return will kill the function
            return;
        }

        // If we make it past the fast fail gate above...then
        // we know the click was valid...process it
        el.addClass('open');

        // Play door open sound effect
        this.soundGuy.playDoor(); 

        // Add the opened card to the openCards array
        this.openCards.push(el);

        if(this.clickCounter == 2){
            this.clickCounter = 1;
            this._isMatched(this.openCards[0], this.openCards[1])
            if(this.stats.matches === this.winMatchNumber){
                // Get a reference to 'this'...
                const that = this;
                // run the end game method after a small delay
                setTimeout(function(){ 
                    that._endGame(true);
                }, 500);
            }
            return;
        }

        // Add one to the clickCounter...only if this was
        // the first card revealed
        this.clickCounter++;

    }

    _isMatched(card1, card2){

        this.openCards = [];
        this.stats.setTurns();

        // Test if cards match
        if(card1.data('number') === card2.data('number')){
            // Update the match counter
            card1.addClass('matched');
            card2.addClass('matched');
            this.stats.setMatches();
            return;
        }

        // If we make it this far..then the cards
        // do not match...

        // Get a reference to 'this'
        const that = this;
        // Set the preventClicks flag to 
        // true...to prevent quick clicking
        // and revealing of other cards
        this.preventOpeningCards = true;

        // Add a small delay before hiding the
        // cards so that the user has a chance 
        // to look at the cards
        setTimeout(function(){
            card1.removeClass('open');
            card2.removeClass('open');

            // Restore the ability to click
            // by changing the preventClicks flag
            // to false after the open door 
            // transition ends...

            // Note: we just listen for the end
            // transition on one of the cards
            // because both cards animate at
            // approximately the same time...
            card1.one('transitionend', function(){
                that.preventOpeningCards = false;
            });
        }, 700);

    }

    _endGame(){

        this.el.popUpBoxWin.addClass('show'); 
        this.soundGuy.playGameWin();

    }

    // Shuffle Cards
    // based on this stackoverflow Q&A:
    // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    _shuffleCards(cards){

        let j, x, i;
        for (i = cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = cards[i];
            cards[i] = cards[j];
            cards[j] = x;
        }

        return cards;

    }

    _placeCards(cards, cardsEl){

        cards = this._shuffleCards(cards);
        cardsEl.each(function(i){
            $(this).data('number', cards[i].number);
            $(this).find('.card-image img')
                .attr({
                    src: cards[i].path,
                    alt: cards[i].alt
                });
        });

    }

    _resetGame(endGameBtnClicked = false){
        
        if(endGameBtnClicked === false){
            this.el.popUpBoxWin.addClass('hide');
        }else {
           if(this.el.popUpBoxWin.hasClass('hide')){
            this.el.removeClass('hide');
           } 
        }
        
        this.soundGuy.stopGameWin();
        this.stats.reset();
        this.clickCounter = 1;
        this.openCards = [];
        const that = this;
        this.el.cards.filter('.open').removeClass('open').last().one('transitionend', function(){
            that.preventOpeningCards = false;
            that._placeCards(that.cards, that.el.cards);
        });

    }

    _cancelPlayAgain(){

        this.preventOpeningCards = true;
        this.el.popUpBoxWin.addClass('hide');
        this.soundGuy.stopGameWin();

    }

    _popUpBoxWinTransitionEnd(){
        if(this.el.popUpBoxWin.hasClass('hide')){
            this.el.popUpBoxWin.removeClass('show hide');
        }
    }

    _devMode(cheat = false){

        this.el.startGamePopUp.css('display', 'none');
        this.el.gameScreen.css({
            transition: 'none',
            opacity: 1
        });

        if(cheat === true){
            this.winMatchNumber = 1;
        } 

    }

}

// Game Stats Class
class Stats {

    constructor(){

        this.turns = 0;
        this.turnsOutput = $('#turn-output');
        this.matches = 0;
        this.matchesOutput = $('#match-output');
        
    }

    reset(){

        this.turns = 0;
        this.matches = 0;
        this.turnsOutput.html('00');
        this.matchesOutput.html('00');

    }

    // Output and set number of turns
    setTurns(){

        this.turns++;
        this.turns < 10 ? this.turnsOutput.html(`0${this.turns}`) : this.turnsOutput.html(this.turns);
    
    }

    // Output and set number of matches
    setMatches(){

        this.matches++;
        this.matches < 10 ? this.matchesOutput.html(`0${this.matches}`) : this.matchesOutput.html(this.matches);
    
    }

}

// Game SoundGuy Class
class SoundGuy {

    constructor(){

        this.door01 = $('#sfx-door-open-close-01')[0];
        this.door02 = $('#sfx-door-open-close-01')[0];
        this.gameWin = $('#music-end-game-win');
        this.currentDoor = 1;

    }

    playDoor(){

        if(this.currentDoor === 1){
            this.door02.currentTime = 0;
            this.door02.play();
            this.currentDoor = 2;
        }else {
            this.door01.currentTime = 0;
            this.door01.play();
            this.currentDoor = 1;
        }

    }

    playGameWin(){

        this._fadeInTrack(this.gameWin, 1000);

    }

    stopGameWin(){
        this._fadeOutTrack(this.gameWin);
    }

    _fadeInTrack(track, fadeTime = 2000){

        track[0].volume = 0.0;
        track[0].loop = true;
        track[0].currentTime = 0;
        track[0].play();
        track.animate({volume: 1}, fadeTime);

    }

    _fadeOutTrack(track, fadeTime = 2000){
        track.animate({volume: 0}, fadeTime, function(){
            track[0].pause();
        });
    }

}

// Create an instance of the 
// Game class
let game = new Game();


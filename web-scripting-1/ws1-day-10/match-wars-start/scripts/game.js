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

        this._placeCards();

    }

    _clickCard(e){

        console.log('click card...')

    }

    _isMatched(){

        console.log('is matched...')

    }

    _endGame(){

        console.log('end game...')

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

    _placeCards(){

        console.log('place cards...')

    }

    _resetGame(){
        
        console.log('reset game...')

    }

    _cancelPlayAgain(){

        console.log('cancel play again...');

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


// Store the element with an id of "slide" in the variable "mainSlide" 
const mainSlide = document.getElementById('slide');

// store the element with an id of "btn02"
// in the variable "btn02"
const btn = document.getElementById('btn');

// Set the number of slides
const numberOfSlides = 7;

// Set an initial value for the ranNum
let lastRanNum = 0;

// create an array of kitten images
const kittenImages = createImages(numberOfSlides, 'kittens/kittens-0');

console.log(kittenImages);

// attach onclick event to btn02 and run
// changePictureAndDescription function
btn.addEventListener('click', changePicture);

// function to change the picture to a different picture
function changePicture(){
		
    let ranNum = Math.floor( Math.random() * numberOfSlides );
	
    // keep looping while the lastRanNum is equal to 
	// ranNum
	while(lastRanNum === ranNum){
		ranNum = Math.floor( Math.random() * numberOfSlides );
	}
	
	lastRanNum = ranNum;
	
	// set the "src" value of the "mainSlide" image to the value
	// stored in kittenImages[randomValue].src
	mainSlide.src = kittenImages[lastRanNum].src;

}

// function to create images
function createImages(num, imgName){

    const arr = [];

    for(let i = 1; i <= num; i++){
        const image = new Image();
        
        image.src = `images/${imgName}${i}.jpg`;
                
        // insert the new image into the kittenImages array
        // by using the push() method. The push() method
        // inserts a new item into an array. 
        arr.push(image);
    }

    return arr;

}

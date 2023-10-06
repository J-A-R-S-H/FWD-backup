const slideimg = document.querySelector("#slide")
const turnCwBtn = document.querySelector("#btn-turn-clockwise")
const turnCounterCwBtn = document.querySelector("#btn-turn-counter-clockwise")


let numberofSlides = 34
let counter = 0

function passthroughImages(numberofImages, imageName) {
    const imageList = []

    for (let i = 1; i <= numberofImages; i++) {
        const img = new Image()
        img.src = `images/${imageName}-${i}.jpg`;
        imageList.push(img)
    }
    return imageList
}

const slides = passthroughImages(numberofSlides, "bike")


function turnCW() {
    counter++

    if (counter === numberofSlides) {
        counter = 0;
    }

    slideimg.src = slides[counter].src
}


function turnCounterCW() {
    counter--

    if (counter < 0) {
        counter = numberofSlides - 1;
    }
    slideimg.src = slides[counter].src

}

turnCwBtn.addEventListener("click", turnCW)
turnCounterCwBtn.addEventListener("click", turnCounterCW)
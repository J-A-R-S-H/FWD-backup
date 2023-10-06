const slidesCntrl = document.querySelector("#slide")
const rotateCwBtn = document.querySelector("#btn-rotate-clockwise")
const rotateCounterCwBtn = document.querySelector("#btn-rotate-counter-clockwise")
let rotating = "false"
let rotationIntervals = null


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

const rotateSlides = passthroughImages(numberofSlides, "bike")


function rotateCW() {
    counter++

    if (counter === numberofSlides) {
        counter = 0;
    }
    slidesCntrl.src = rotateSlides[counter].src
}


function rotateCounterCW() {
    counter--

    if (counter < 0) {
        counter = numberofSlides - 1;
    }
    slidesCntrl.src = rotateSlides[counter].src
}


function startRotation(directionalInput) {
    if (!rotating) {
        rotationIntervals = setInterval(() => {
            rotating = true
            if (directionalInput === "clockwise") {
                rotateCW()
            } else {
                rotateCounterCW()
            }
        }, 100)
    }
}


function stopRotation() {
    if (rotating) {
        rotating = false
        clearInterval(rotationIntervals)
    }
}

rotateCwBtn.addEventListener("mousedown", () => startRotation("clockwise"))
rotateCounterCwBtn.addEventListener("mousedown", () => startRotation("counter-clockwise"))


rotateCwBtn.addEventListener("mouseup", stopRotation)
rotateCounterCwBtn.addEventListener("mouseup", stopRotation)
rotateCwBtn.addEventListener("mouseleave", stopRotation)
rotateCounterCwBtn.addEventListener("mouseleave", stopRotation)


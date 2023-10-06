const slidesCntrl = document.querySelector("#slide")
let numberofSlides = 34
let counter = 0
let isMouseDown = false
let initialX;

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

slidesCntrl.addEventListener("mousedown", function (event) {
    event.preventDefault()
    isMouseDown = true
    initialX = event.clientX
})




slidesCntrl.addEventListener("mousemove", (event) => {
    if (isMouseDown) {
        const currentX = event.clientX
        const movementX = currentX - initialX

        if (movementX > 0) {
            handlerightMovement()
        }
        else if (movementX < 0) {
            handleLeftMovement()
        }

        initialX = currentX
    }
})

slidesCntrl.addEventListener("mouseup", () => {
    isMouseDown = false
})
slidesCntrl.addEventListener("mouseleave", () => {
    isMouseDown = false
})


function handleLeftMovement() {
    counter++

    if (counter === numberofSlides) {
        counter = 0;
    }
    slidesCntrl.src = rotateSlides[counter].src


    console.log("left")
}

function handlerightMovement() {
    counter--
    if (counter < 0) {
        counter = numberofSlides - 1;
    }
    slidesCntrl.src = rotateSlides[counter].src

    console.log("right")
}
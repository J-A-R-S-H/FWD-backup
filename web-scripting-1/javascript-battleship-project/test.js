"use strict"

const gridSizeSelector = document.querySelectorAll("button");
const gameBoardContainer = document.querySelector(".gameboard-container")
const singlePlayerSelect = document.querySelector(".single-player")
const splashContainer = document.querySelector(".splash-container")
const gridSelectionPage = document.querySelector(".grid-selection-page")

singlePlayerSelect.addEventListener("click", () => {

    splashContainer.style.display = "none"
    gridSelectionPage.style.display = "grid"

})

let selectedSize
gridSizeSelector.forEach((el) => {

    el.addEventListener("click", () => {
        console.log("does this even work")
        selectedSize = parseInt(el.dataset.value);
        //console.log(selectedSize)
        generateBoard("#00AAFF", "player", "grid-player")
        gridSelectionPage.style.display = "none"
        //getGridSize(selectedSize)
    });
})

console.log(selectedSize)

function getGridSize() {
    console.log(selectedSize)
}


function generateBoard(color, side, classesContainer) {
    const generatedgameBoardContainer = document.createElement("div")
    generatedgameBoardContainer.classList.add("game-board")
    generatedgameBoardContainer.style.gridTemplateColumns = `repeat(${selectedSize}, 1fr)`
    generatedgameBoardContainer.style.backgroundColor = color
    generatedgameBoardContainer.id = side
    generatedgameBoardContainer.classList.add(classesContainer)

    for (let i = 0; i < selectedSize * selectedSize; i++) {
        const gridCell = document.createElement("div")
        gridCell.classList.add("grid-cell")
        gridCell.id = i
        generatedgameBoardContainer.append(gridCell)
    }

    gameBoardContainer.append(generatedgameBoardContainer)
}

function asdfa() {
}
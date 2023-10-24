"use strict"

const gridSizeSelector = document.querySelectorAll("img");
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
        selectedSize = el.getAttribute("data-value");
        console.log(selectedSize)
        generateBoard("#00AAFF", "player", "grid-player", selectedSize)
        generateBoard("#00AAFF", "computer", "grid-computer", selectedSize)

        getGridSize(selectedSize)
    });
})

console.log(selectedSize)

function getGridSize() {
    console.log(selectedSize)
}


function generateBoard(color, side, classesContainer, gridSelected) {
    const generatedgameBoardContainer = document.createElement("div")
    generatedgameBoardContainer.classList.add("game-board")
    generatedgameBoardContainer.style.backgroundColor = color
    generatedgameBoardContainer.id = side
    generatedgameBoardContainer.classList.add(classesContainer)

    for (let i = 0; i < gridSelected * gridSelected; i++) {
        const gridCell = document.createElement("div")
        gridCell.classList.add("grid-cell")
        gridCell.id = i
        generatedgameBoardContainer.append(gridCell)
    }

    gameBoardContainer.append(generatedgameBoardContainer)
}
"use strict"

const gridSizeSelector = document.querySelectorAll("img");
const gameBoardContainer = document.querySelector(".gameboard-container")
const singlePlayerSelect = document.querySelector(".single-player")
const splashContainer = document.querySelector(".splash-container")
const gridSelectionPage = document.querySelector(".grid-selection-page")
const gridText = document.querySelector("#grid-text")

singlePlayerSelect.addEventListener("click", () => {

    splashContainer.remove()
    gridSelectionPage.style.display = "grid"
    gridText.style.display = "flex"


})

let selectedSize
gridSizeSelector.forEach((el) => {

    el.addEventListener("click", () => {
        console.log("does this even work")
        gridSelectionPage.classList.toggle("reverse-scale")
        selectedSize = parseInt(el.dataset.value);

        gridSelectionPage.addEventListener("animationend", () => {

            generateBoard("#00AAFF", "player", "grid-player")
            gridSelectionPage.style.display = "none"
            startShipPlacement(); // Start ship placement immediately

        })
        //console.log(selectedSize)
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



function startShipPlacement() {
    // Add event listeners to grid cells for ship placement and hover effects
    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((cell) => {
        cell.addEventListener("click", handleShipPlacement);
        cell.addEventListener("mouseover", handleCellHover);
        cell.addEventListener("mouseout", handleCellHover);
    });
}

// Function to handle ship placement
function handleShipPlacement(event) {
    // Add your ship placement logic here
    // You can change the background color or add a ship image to the selected cell
}

// Function to handle hover effects
function handleCellHover(event) {
    if (event.type === "mouseover") {
        // Apply hover effect, e.g., change the cell's background color
        event.target.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    } else if (event.type === "mouseout") {
        // Remove hover effect
        event.target.style.backgroundColor = "";
    }
}
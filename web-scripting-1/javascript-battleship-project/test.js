const gridSizeSelector = document.querySelectorAll("button");
const gameBoardContainer = document.querySelector(".gameboard-container")

gridSizeSelector.forEach((el) => {

    el.addEventListener("click", () => {
        console.log("does this even work")
        const selectedSize = el.value;
        console.log(selectedSize)
        generateBoard("#00AAFF", "player", "grid-player", selectedSize)
        generateBoard("#00AAFF", "computer", "grid-computer", selectedSize)

    });

})

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
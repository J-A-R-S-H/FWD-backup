const rotateBtn = document.querySelector("#rotate-btn")
const shipContainer = document.querySelector(".ship-container")
const gameBoardContainer = document.querySelector(".gameboard-container")

let rotationShip = 0

function rotateShips() {
    const optionShips = Array.from(shipContainer.children)

    rotationShip = rotationShip === 0 ? 90 : 0 //too cool
    optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${rotationShip}deg)`)

}

rotateBtn.addEventListener("click", rotateShips)


const width = 10

function generateBoard(color) {
    const generatedgameBoardContainer = document.createElement("div")
    generatedgameBoardContainer.classList.add("game-board")
    generatedgameBoardContainer.style.backgroundColor = color

    gameBoardContainer.append(generatedgameBoardContainer)
}
generateBoard("yellow")
generateBoard("pink")
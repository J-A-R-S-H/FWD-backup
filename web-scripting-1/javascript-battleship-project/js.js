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

function generateBoard(color, side) {
    const generatedgameBoardContainer = document.createElement("div")
    generatedgameBoardContainer.classList.add("game-board")
    generatedgameBoardContainer.style.backgroundColor = color
    generatedgameBoardContainer.id = side

    for (let i = 0; i < width * width; i++) {
        const gridCell = document.createElement("div")
        gridCell.classList.add("grid-cell")
        gridCell.id = i
        generatedgameBoardContainer.append(gridCell)
    }

    gameBoardContainer.append(generatedgameBoardContainer)
}
generateBoard("yellow", "player1")
generateBoard("pink", "computer")

//Creating Ships
class Ship {
    constructor(name, length) {
        this.name = name
        this.length = length
    }
}

const submarine = new Ship("submarine", 2)
const destroyer = new Ship("destroyer", 3)
const heavyCruiser = new Ship("heavy-cruiser", 4)
const battleship = new Ship("battleship", 5)
const aircraftCarrier = new Ship("aircraft-carrier", 6)

const ships = [destroyer, submarine, heavyCruiser, battleship, aircraftCarrier]

function addShipPiece(ship) {
    const allGridCellsComp = document.querySelectorAll("#computer div")
    let randomBoolean = Math.random() < 0.5
    let isHorizontal = randomBoolean
    let randomStartIndex = Math.floor(Math.random() * width * width)

    // let validStart = isHorizontal ? randomStartIndex <= width * width - ship.length
    let shipBlocks = []
    for (let i = 0; i < ship.length; i++) {
        if (isHorizontal) {
            shipBlocks.push(allGridCellsComp[Number(randomStartIndex) + i])
        }
        else {
            shipBlocks.push(allGridCellsComp[Number(randomStartIndex) + i * width])
        }
    }

    shipBlocks.forEach(el => {
        console.log(el)

        el.classList.add(ship.name, "taken")
    })





}

// const testBtn = document.querySelector("#test-btn")
// testBtn.addEventListener("click", () => {


//     ships.forEach(ship => addShipPiece(ship))

// })



const rotateBtn = document.querySelector("#rotate-btn")
const shipContainer = document.querySelector(".shipContainer")
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
let notDropped

function addShipPiece(user, ship, startid) {
    const allGridCellsComp = document.querySelectorAll(`#${user} div`)
    let randomBoolean = Math.random() < 0.5
    let isHorizontal = user === "player" ? rotationShip === 0 : randomBoolean
    let randomStartIndex = Math.floor(Math.random() * width * width)

    let startIndex = startid ? startid : randomStartIndex;

    let validStart = isHorizontal ? startIndex <= width * width - ship.length ? startIndex :
        width * width - ship.length :
        //handle Vertical
        startIndex <= width * width - width * ship.length ? startIndex :
            startIndex - ship.length * width + width

    let shipBlocks = []
    for (let i = 0; i < ship.length; i++) {
        if (isHorizontal) {
            shipBlocks.push(allGridCellsComp[Number(validStart) + i])
        }
        else {
            shipBlocks.push(allGridCellsComp[Number(validStart) + i * width])
        }
    }

    let valid
    if (isHorizontal) {
        valid = shipBlocks.every((_shipBlock, index) =>
            shipBlocks[0].id % width !== width - (shipBlocks.length - (index + 1)))
    }
    else {
        shipBlocks.every((_shipBlock, index) =>
            valid = shipBlocks[0].index < 90 + (width * index + 1))
    }

    const notTaken = shipBlocks.every(shipBlock => !shipBlock.classList.contains("taken"))

    if (valid && notTaken) {


        shipBlocks.forEach(el => {
            console.log(el)

            el.classList.add(ship.name, "taken")
        })
    }
    else {
        if (user === "computer") addShipPiece(user, ship)

        if (user === "player") notDropped = true


    }

}

const testBtn = document.querySelector("#test-btn")
testBtn.addEventListener("click", () => {


    ships.forEach(ship => addShipPiece("computer", ship))

})


//drag player ships

let draggedShip
const optionShips = Array.from(shipContainer.children)
optionShips.forEach(optionShip => optionShip.addEventListener("dragstart", dragStartShips))


const allPlayerBlocks = document.querySelectorAll("#player div")
allPlayerBlocks.forEach(playerBlock => {
    playerBlock.addEventListener("dragover", dragOver)
    playerBlock.addEventListener("drop", dropPlaceShip)
})

function dragStartShips(e) {
    notDropped = false
    draggedShip = e.target
}

function dragOver(e) {
    notDropped = false
    e.preventDefault()

}

function dropPlaceShip(e) {
    const startid = e.target.id
    const ship = ships[draggedShip.id]
    addShipPiece("player", ship, startid)
    if (!notDropped) {
        draggedShip.remove()
    }
}
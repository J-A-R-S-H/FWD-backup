const rotateBtn = document.querySelector("#rotate-btn")
const shipContainer = document.querySelector(".shipContainer")
const gameBoardContainer = document.querySelector(".gameboard-container")
const startBtn = document.querySelector("#start-btn")
const checkDisplay = document.querySelector("#check")
const turnDisplay = document.querySelector("#turn-display")

let rotationShip = 0

function rotateShips() {
    const optionShips = Array.from(shipContainer.children)

    rotationShip = rotationShip === 0 ? 90 : 0
    optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${rotationShip}deg)`)

}

rotateBtn.addEventListener("click", rotateShips)


const width = 11
function generateBoard(color, side, classesContainer) {
    const generatedgameBoardContainer = document.createElement("div")
    generatedgameBoardContainer.classList.add("game-board")
    generatedgameBoardContainer.style.backgroundColor = color
    generatedgameBoardContainer.id = side
    generatedgameBoardContainer.classList.add(classesContainer)


    for (let i = 0; i < width * width; i++) {
        const gridCell = document.createElement("div")
        gridCell.classList.add("grid-cell")
        gridCell.id = i
        generatedgameBoardContainer.append(gridCell)
    }

    gameBoardContainer.append(generatedgameBoardContainer)
}
generateBoard("#00AAFF", "player", "grid-player")
generateBoard("#00AAFF", "computer", "grid-computer")

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

function getValidity(allGridCellsComp, isHorizontal, startIndex, ship) {
    let validStart = isHorizontal ? startIndex <= width * width - ship.length ? startIndex :
        width * width - ship.length :
        //handle Vertical
        startIndex <= width * width - width * ship.length ? startIndex :
            startIndex - ship.length * width + width
    console.log(ship.length)
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
            valid = shipBlocks[0].id < 90 + (width * index + 1))
        console.log(valid)
    }

    const notTaken = shipBlocks.every(shipBlock => !shipBlock.classList.contains("taken"))

    return { shipBlocks, valid, notTaken }
}


function addShipPiece(user, ship, startid) {
    const allGridCellsComp = document.querySelectorAll(`#${user} div`)
    let randomBoolean = Math.random() < 0.5
    let isHorizontal = user === "player" ? rotationShip === 0 : randomBoolean
    let randomStartIndex = Math.floor(Math.random() * width * width)

    let startIndex = startid ? startid : randomStartIndex;

    const { shipBlocks, valid, notTaken } = getValidity(allGridCellsComp, isHorizontal, startIndex, ship)

    if (valid && notTaken) {
        shipBlocks.forEach((el, index) => {
            el.classList.add(ship.name, "taken");
            if (index === 0) {
                el.classList.add("start");
            } else if (index === ship.length - 1) {
                el.classList.add("end");
            }
        });

        if (isHorizontal) {
            shipBlocks.forEach(el => el.classList.add("horizontal"));
        } else {
            shipBlocks.forEach(el => el.classList.add("vertical"));
        }

        shipBlocks.forEach(el => {
            el.classList.add(ship.name, "taken")
        })
    }
    else {
        if (user === "computer") addShipPiece(user, ship, startid)
        if (user === "player") notDropped = true
    }


}

const testBtn = document.querySelector("#test-btn")
const randomizeBtn = document.querySelector("#randomize-btn")
testBtn.addEventListener("click", () => {


    ships.forEach(ship => addShipPiece("computer", ship))
})


function randomizePlayerShips() {
    const allPlayerBlocks = document.querySelectorAll("#player div");

    allPlayerBlocks.forEach((block) => {
        block.classList.remove("taken", "start", "end", "horizontal", "vertical");
    });

    shuffleArray(ships);

    ships.forEach((ship) => {
        addRandomShip("player", ship);
    });

    notDropped = false;
}

// Function to shuffle an array (Fisher-Yates shuffle algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function addRandomShip(user, ship) {
    addShipPiece(user, ship);
    console.log(shipContainer.children.length)
}

randomizeBtn.addEventListener("click", randomizePlayerShips);
//drag player ships

const allPlayerBlocks = document.querySelectorAll("#player div")
let draggedShip
const optionShips = Array.from(shipContainer.children)
optionShips.forEach(optionShip => optionShip.addEventListener("dragstart", dragStartShips));

allPlayerBlocks.forEach(playerBlock => {
    playerBlock.addEventListener("dragover", dragOver);
    playerBlock.addEventListener("drop", dropPlaceShip);
});


function dragStartShips(e) {
    notDropped = false
    draggedShip = e.target
}

function dragOver(e) {
    e.preventDefault()
    const ship = ships[draggedShip.id]
    higlightArea(e.target.id, ship)
}

function dropPlaceShip(e) {
    const startid = e.target.id
    const ship = ships[draggedShip.id]
    addShipPiece("player", ship, startid)
    if (!notDropped) {
        draggedShip.remove()
    }
}

// Add Highlight


function higlightArea(startIndex, ship) {
    const allGridCellsComp = document.querySelectorAll(`#player div`)

    let isHorizontal = rotationShip === 0

    const { shipBlocks, valid, notTaken } = getValidity(allGridCellsComp, isHorizontal, startIndex, ship)

    if (valid && notTaken) {
        shipBlocks.forEach(shipBlock => {
            shipBlock.classList.add("hover")
            setTimeout(() => shipBlock.classList.remove("hover"), 500)
        })
    }
}

let gameOver = false
let playerTurn

//Start Game

function startGame() {
    if (playerTurn === undefined) {

        if (shipContainer.children.length <= 0) {
            checkDisplay.textContent = "Place Ships"
        }
        else {
            const allComputerBlocks = document.querySelectorAll("#computer div")
            allComputerBlocks.forEach(block => block.addEventListener("click", handleClick))

            playerTurn = true
            turnDisplay.textContent = "hmmmm I think it is your turn frfr"
            checkDisplay.textContent = "The game started gogoggoogo"
        }

    }
}

startBtn.addEventListener("click", startGame)

let playerHits = []
let computerHits = []
const playerSunkShips = []
const computerSunkShips = []

function handleClick(e) {
    if (!gameOver) {
        if (e.target.classList.contains("taken")) {
            e.target.classList.add("boom")
            checkDisplay.textContent = "I think you hit something whoa..."
            let classes = Array.from(e.target.classList)
            classes = classes.filter(className => className !== "grid-cell")
            classes = classes.filter(className => className !== "boom")
            classes = classes.filter(className => className !== "taken")
            playerHits.push(...classes)
            checkScore("player", playerHits, playerSunkShips)

        }
        if (!e.target.classList.contains("taken")) {
            checkDisplay.textContent = "I think you missed..."
            e.target.classList.add("empty")
        }
        playerTurn = false
        // const allComputerBlocks = document.querySelectorAll("#computer div")
        // allComputerBlocks.forEach(block => block.replaceWith(block.cloneNode(true)))
        //how do I remove event listeners

        setTimeout(computerMove, 1000)
    }
}


function computerMove() {
    if (!gameOver) {
        checkDisplay.textContent = "The computer is thinking...?"
        turnDisplay.textContent = "Computer's Turn"

        setTimeout(() => {
            let randomMove = Math.floor(Math.random() * width * width)
            if (allPlayerBlocks[randomMove].classList.contains("taken") &&
                allPlayerBlocks[randomMove].classList.contains("boom")
            ) {
                computerMove()
                return
            }
            else if (
                allPlayerBlocks[randomMove].classList.contains("taken") &&
                !allPlayerBlocks[randomMove].classList.contains("boom")
            ) {
                !allPlayerBlocks[randomMove].classList.add("boom")
                checkDisplay.textContent = "The Computer hit you, damn thats crazy"
                let classes = Array.from(allPlayerBlocks[randomMove].classList)
                classes = classes.filter(className => className !== "grid-cell")
                classes = classes.filter(className => className !== "boom")
                classes = classes.filter(className => className !== "taken")
                computerHits.push(...classes)
                checkScore("computer", computerHits, computerSunkShips)
            }
            else {
                checkDisplay.textContent = "nothing, well hit the water technically"
                allPlayerBlocks[randomMove].classList.add("empty")
            }
        }, 1000)
        setTimeout(() => {
            playerTurn = true
            turnDisplay.textContent = "player's turn"
            checkDisplay.textContent = "hmmmmm I think it's your turn"
            const allComputerBlocks = document.querySelectorAll("#computer div")
            allComputerBlocks.forEach(block => block.addEventListener("click", handleClick))
        }, 1000)
    }
}

function checkScore(user, userHits, userSunkShips) {
    function checkShipName(shipName, shipLength) {
        if (
            userHits.filter(storedShipName => storedShipName === shipName).length === shipLength
        ) {
            if (user === "player") {
                checkDisplay.textContent = `you sunk the computer's ship ${shipName}`
                playerHits = userHits.filter(storedShipName => storedShipName !== shipName)
            }

            if (user === "computer") {
                checkDisplay.textContent = `the computer sunk your ${shipName}`
                computerHits = playerHits = userHits.filter(storedShipName => storedShipName !== shipName)
                computerHits = userHits.filter(storedShipName => storedShipName !== shipName)
            }
            userSunkShips.push(shipName)
        }
    }

    checkShipName("submarine", 2)
    checkShipName("destroyer", 3)
    checkShipName("heavy-cruiser", 4)
    checkShipName("battleship", 5)
    checkShipName("aircraft-carrier", 6)

    console.log("playerHits", playerHits)
    console.log("playerSunkShips", playerSunkShips)

    if (playerSunkShips.length === 5) {
        checkDisplay.textContent = "Congrats you won."
        gameOver = true
    }

    if (computerSunkShips.length === 5) {
        checkDisplay.textContent = "Damn we take those."
        gameOver = true
    }

}   
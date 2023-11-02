"use strict"

const gridSizeSelector = document.querySelectorAll("img");
const gameBoardContainer = document.querySelector(".gameboard-container")
const singlePlayerSelect = document.querySelector(".single-player")
const splashContainer = document.querySelector(".splash-container")
const gridSelectionPage = document.querySelector(".grid-selection-page")
const gridText = document.querySelector("#grid-text")
const mainGameBoard = document.querySelector("#main-game-board")

let gameOver = false
let playerTurn

singlePlayerSelect.addEventListener("click", () => {

    splashContainer.remove()
    gridSelectionPage.style.display = "grid"
    gridText.style.display = "flex"


})


let selectedSize = 11

gridSizeSelector.forEach((el) => {
    el.addEventListener("click", () => {
        console.log("does this even work")
        gridSelectionPage.classList.toggle("reverse-scale")
        selectedSize = parseInt(el.dataset.value);

        gridSelectionPage.addEventListener("animationend", () => {

            gridText.textContent = "Place your ships"
            generateBoard("#00AAFF", "player", "grid-player")
            generateBoard("#00AAFF", "computer", "grid-computer")

            gridSelectionPage.style.display = "none"
            mainGameBoard.style.display = "block"

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
                higlightArea(e.target.dataset.squares, ship)
            }

            function dropPlaceShip(e) {
                const startid = e.target.dataset.squares
                const ship = ships[draggedShip.id]
                addShipPiece("player", ship, startid)
                if (!notDropped) {
                    draggedShip.remove()
                }
                startGame()
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


        })
        //console.log(selectedSize)
        //getGridSize(selectedSize)
    });
})

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
        gridCell.dataset.squares = i
        generatedgameBoardContainer.append(gridCell)
    }
    gameBoardContainer.append(generatedgameBoardContainer)
}






const rotateBtn = document.querySelector("#rotate-btn")
const shipContainer = document.querySelector(".shipContainer")
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

function getValidity(allGridCellsComp, isHorizontal, startIndex, ship, selectedGridSize) {
    let validStart = isHorizontal ? startIndex <= selectedSize * selectedSize - ship.length ? startIndex :
        selectedSize * selectedSize - ship.length :
        //handle Vertical
        startIndex <= selectedSize * selectedSize - selectedSize * ship.length ? startIndex :
            startIndex - ship.length * selectedSize + selectedSize
    let shipBlocks = []
    for (let i = 0; i < ship.length; i++) {
        if (isHorizontal) {
            shipBlocks.push(allGridCellsComp[Number(validStart) + i])
        }
        else {
            shipBlocks.push(allGridCellsComp[Number(validStart) + i * selectedSize])
        }
    }

    let valid
    if (isHorizontal) {
        valid = shipBlocks.every((_shipBlock, index) =>
            shipBlocks[0].dataset.squares % selectedSize !== selectedSize - (shipBlocks.length - (index + 1)))
    }
    else {
        shipBlocks.every((_shipBlock, index) =>
            valid = shipBlocks[0].dataset.squares < 90 + (selectedSize * index + 1))
    }

    const notTaken = shipBlocks.every(shipBlock => !shipBlock.classList.contains("taken"))

    return { shipBlocks, valid, notTaken }
}

let numberOfShipsAdded = 0;



function addShipPiece(user, ship, startid) {
    const allGridCellsComp = document.querySelectorAll(`#${user} div`)
    let randomBoolean = Math.random() < 0.5
    let isHorizontal = user === "player" ? rotationShip === 0 : randomBoolean
    let randomStartIndex = Math.floor(Math.random() * selectedSize * selectedSize)

    let startIndex = startid ? startid : randomStartIndex;

    let shipObj = getValidity(allGridCellsComp, isHorizontal, startIndex, ship);


    const { shipBlocks, valid, notTaken } = shipObj;

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

//drag player ships


//Start Game

function startGame() {
    if (playerTurn === undefined) {

        if (shipContainer.children.length >= 1) {
            checkDisplay.textContent = "Place Ships"
        }
        else {
            const allComputerBlocks = document.querySelectorAll("#computer div")
            allComputerBlocks.forEach(block => block.addEventListener("click", handleClick))

            playerTurn = true
            turnDisplay.textContent = "hmmmm I think it is your turn frfr"
            gridText.style.visibility = "hidden"
            checkDisplay.textContent = "The game started gogoggoogo"
            ships.forEach(ship => addShipPiece("computer", ship))

        }

    }
}



let playerHits = []
let computerHits = []
const playerSunkShips = []
const computerSunkShips = []

function handleClick(e) {

    if (!playerTurn) {
        return;
    }

    if (e.target.classList.contains('empty') || e.target.classList.contains("boom")) {
        return;
    }

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
            return;
        }
        if (!e.target.classList.contains("taken")) {
            checkDisplay.textContent = "I think you missed..."
            e.target.classList.add("empty")
        }
        playerTurn = false


        setTimeout(computerMove, 500)
    }
}

const allPlayerBlocks = document.querySelectorAll("#player div")
let hitBlockIndex;
let lastMoveHit;
let direction = 0;


function computerMove(hitDirection = undefined) {
    const allPlayerBlocks = document.querySelectorAll("#player div")

    if (gameOver) {
        return;
    }

    checkDisplay.textContent = "The computer is thinking...?"
    turnDisplay.textContent = "Computer's Turn"


    if (lastMoveHit === true) {
        //let maxDirections = 4
        let randomDirection;
        if (hitDirection === undefined) {
            randomDirection = Math.floor(Math.random() * 3);
            console.log(hitDirection + "Hit Direction Undefined")
        } else {
            randomDirection = hitDirection;
            console.log(hitDirection + "Hit Direction is not Undefined")
        }

        switch (randomDirection) {
            case 0:
                hitBlockIndex = continueNewMove(hitBlockIndex, "up");
                direction = 0;
                console.log("up Direction")
                break
            case 1:
                hitBlockIndex = continueNewMove(hitBlockIndex, "right")
                direction = 1;
                console.log("right Direction")
                break
            case 2:
                hitBlockIndex = continueNewMove(hitBlockIndex, "down")
                direction = 2;
                console.log("down Direction")
                break
            case 3:
                hitBlockIndex = continueNewMove(hitBlockIndex, "left")
                direction = 3;
                console.log("left Direction")
                break
        }

    }


    setTimeout(() => {
        let randomMove;
        if (lastMoveHit === true) {
            //randomMove becomes the hitBlockIndex from the direction switch case
            randomMove = hitBlockIndex
        } else {
            //If lastMoveHit did not equal true, goes back to being random
            randomMove = Math.floor(Math.random() * selectedSize * selectedSize)
        }
        if (allPlayerBlocks[randomMove].classList.contains("taken") &&
            allPlayerBlocks[randomMove].classList.contains("boom") ||
            allPlayerBlocks[randomMove].classList.contains("empty")
        ) {
            computerMove()
            return
        }
        else if (
            allPlayerBlocks[randomMove].classList.contains("taken") &&
            !allPlayerBlocks[randomMove].classList.contains("boom")
        ) {
            allPlayerBlocks[randomMove].classList.add("boom")
            hitBlockIndex = randomMove;
            console.log(randomMove)
            checkDisplay.textContent = "The Computer hit you, damn thats crazy"
            let classes = Array.from(allPlayerBlocks[randomMove].classList)
            classes = classes.filter(className => className !== "grid-cell")
            classes = classes.filter(className => className !== "boom")
            classes = classes.filter(className => className !== "taken")
            computerHits.push(...classes)
            checkScore("computer", computerHits, computerSunkShips)
            if (lastMoveHit === false) {
                lastMoveHit = true;
                console.log("no direction inputed")
                computerMove();
            } else {
                lastMoveHit = true;
                console.log("direction inputed")
                computerMove(direction);
            }

            //computerMove();
        }
        else {
            checkDisplay.textContent = "nothing, well hit the water technically"
            console.log(randomMove)
            console.log(direction)
            allPlayerBlocks[randomMove].classList.add("empty")
            lastMoveHit = false;
        }
    }, 500)

    setTimeout(() => {
        playerTurn = true
        turnDisplay.textContent = "player's turn"
        checkDisplay.textContent = "hmmmmm I think it's your turn"
        const allComputerBlocks = document.querySelectorAll("#computer div")
        allComputerBlocks.forEach(block => block.addEventListener("click", handleClick))
    }, 500)

}

function continueNewMove(currentMove, direction) {
    const row = Math.floor(currentMove / selectedSize);
    const col = currentMove % selectedSize;

    if (direction === 'up' && row > 0) {
        return currentMove - selectedSize;
    } else if (direction === 'right' && col < selectedSize - 1) {
        return currentMove + 1;
    } else if (direction === 'down' && row < selectedSize - 1) {
        return currentMove + selectedSize;
    } else if (direction === 'left' && col > 0) {
        return currentMove - 1;
    } else {
        // Invalid move, return the current position
        return currentMove;
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
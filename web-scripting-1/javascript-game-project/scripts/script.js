
class Ship {


    constructor(name, length) {
        this.name = name
        this.length = length
        this.hits = 0
    }


    isSunk() {
        return this.hits === this.length
    }

    hit() {
        if (this.hits < this.length) {
            this.hits++
            this.checkIfSunk()
            return true
        }
        else {
            return false
        }
    }


}



const ship1 = new Ship("aircraft carrier", 5);
const ship2 = new Ship("battleship", 4);
const ship3 = new Ship("destroyer", 3);
const ship4 = new Ship("submarine", 2);
// This records a hit on the third part of the Battleship.
// ship1.hit(2);

if (ship1.isSunk()) {
    console.log(`${ship1.name} has been sunk!`);
}


class gameBoard {
    constructor() {
        this.board = [];
        this.missedAttacks = [];
        this.shipPosition = []
    }


    placeShip(ship, x, y, horizontal) {
        if (horizontal) {
            for (let i = 0; i < ship.length; i++) {
                if (x + i < 0 || x + i >= 10 || this.board[y][x + i]) {
                    return false;
                }
            }
            for (let i = 0; i < ship.length; i++) {
                this.board[y][x + i] = ship
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                if (y + i < 0 || y + i >= 10 || this.board[y + i][x]) {
                    return false
                }
                for (let i = 0; i < ship.length; i++) {
                    this.board[y + i][x] = ship
                }
            }

            this.ships.push(ship)
            return true
        }
    }


    receiveAttack(x, y) {
        if (this.board[y][x] instanceof Ship) {
            const ship = this.board[y][x]
            if (ship.hit()) {
                if (ship.isSunk) {
                    this.ships = this.ships.filter(s => s !== ship)
                }
                return "hit"
            }
            else {
                this.missedAttacks.push({ x, y })
                return "miss"
            }
        }
    }

    allShipsSunk() {
        return this.ships.length === 0
    }
}



const player1Board = new gameBoard();
const computerBoard = new gameBoard();



class Player {
    constructor(name) {
        this.name = name
    }


    attack(enemyBoard) {
        const x = this.getRandomCoordinate()
        const y = this.getRandomCoordinate()

        if (this.isValidAttack(x, y, enemyBoard)) {
            if (x < 0 || x >= 10 || y < 0 || y >= 10) {
                return false
            }

            const attackedCoordinates = enemyBoard.missedAttacks;
            for (const coords of attackedCoordinates) {
                if (coords.x === x && coords.y === y) {
                    return false
                }

            }
        }
        return true
    }
}

function renderGameboard(board, boardid) {
    const container = document.querySelectorAll(".grid");

    for (let i = 0; i < container.length; i++) {
        const el = container[i];
        el.innerHTML = ''; // Clear the container.

        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.x = x;
                cell.dataset.y = y;
                cell.addEventListener('click', () => handleCellClick(x, y, board));
                el.appendChild(cell);

                // if (board.board[y][x] instanceof Ship) {

                //     cell.classList.add('ship');
                // } else if (board.missedAttacks.some(coords => coords.x === x && coords.y === y)) {
                //     cell.classList.add('miss');
                // }
            }
        }
    }
}
function handleCellClick(x, y, board) {
    if (player1Board.allShipsSunk() || computerBoard.allShipsSunk()) {
        return; // Game is over, no more attacks.
    }

    // Check if the attack is valid (e.g., not already attacked).
    if (!player1Board.receiveAttack(x, y)) {
        return; // Invalid attack, try again.
    }

    // Render the updated game boards.
    renderGameboard(player1Board, 'player1-board');
    renderGameboard(computerBoard, 'computer-board');

    // Check if the player has won.
    if (computerBoard.allShipsSunk()) {
        alert('You won!');
        return;
    }

    // Computer's turn to attack.
    computer.attack(player1Board);

    // Render the updated game boards.
    renderGameboard(player1Board, 'player1-board');
    renderGameboard(computerBoard, 'computer-board');

    // Check if the computer has won.
    if (player1Board.allShipsSunk()) {
        alert('Computer won!');
    }
}

// Function to handle player's attack.
function handleAttack(x, y) {
    if (player1Board.allShipsSunk() || computerBoard.allShipsSunk()) {
        return; // Game is over, no more attacks.
    }

    if (!player1Board.receiveAttack(x, y)) {
        return; // Invalid attack, try again.
    }

    // Render the updated game boards.
    renderGameboard(player1Board, 'player1-board');
    renderGameboard(computerBoard, 'computer-board');

    // Check if the player has won.
    if (computerBoard.allShipsSunk()) {
        alert('You won!');
        return;
    }

    // Computer's turn to attack.
    computer.attack(player1Board);

    // Render the updated game boards.
    renderGameboard(player1Board, 'player1-board');
    renderGameboard(computerBoard, 'computer-board');

    // Check if the computer has won.
    if (player1Board.allShipsSunk()) {
        alert('Computer won!');
    }
}

// Function to initialize the game.
function initializeGame() {
    renderGameboard(player1Board, "player1-board");
    renderGameboard(computerBoard, "computer-board");
}

const startGameBtn = document.querySelector("#start-game")


startGameBtn.addEventListener("click", () => {
    initializeGame()
    placeShip()
})


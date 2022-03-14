// initialize global variables
let turn = "Player 1";
let boxStates = [];
let boxes = document.querySelectorAll(".box");
let gameOver = document.querySelector("#gameOver");
let outcome = document.querySelector("#outcome");
let playerTurn = document.querySelector("#playerTurn");

// adds reset functionality
document.querySelector("#reset").addEventListener("click", resetGame);
document.querySelector("#replay").addEventListener("click", () => {
    resetGame();
    gameOver.style.display = "none";
});

// adds event listeners to all boxes
for (let i = 0; i < boxes.length; i++) {
    boxStates[i] = 0;
    boxes[i].addEventListener("click", () => {
        selectBox(boxes[i]);
    })
}

// alters playerTurn div on the DOM
function displayTurn() {
    
    playerTurn.innerHTML = `It is ${turn}'s turn`;
    if (turn === "Player 1")
        playerTurn.style.color = "blue";
    else
        playerTurn.style.color = "red";
}
displayTurn();

// executes a turn when player clicks a box
function selectBox(box) {

    // only execute if the box hasn't been picked yet
    if (boxStates[box.id] === 0) {
        if (turn === "Player 1") {
            boxStates[box.id] = 1;
            box.classList.add("p1");
            turn = "Player 2";
        }
        else {
            boxStates[box.id] = 2;
            box.classList.add("p2");
            turn = "Player 1";
        }
        displayTurn();
    }

    if (emptyBox() === false) {
        outcome.innerHTML = (`Tie game!`);
        gameOver.style.display = "block";
    }
    if (checkWinner() !== undefined) {
        outcome.innerHTML = (`Player ${checkWinner()} wins!`);
        gameOver.style.display = "block";
    }
}

// resets the game state
function resetGame() {
    
    for (let i = 0; i < boxes.length; i++) {
        boxStates[i] = 0;
        boxes[i].classList.remove("p1");
        boxes[i].classList.remove("p2");
    }
    turn = "Player 1";
    displayTurn();
}

// checks to see if there are any empty boxes left
function emptyBox() {
    
    let empty = false;
    for (let i = 0; i < boxStates.length; i++) {
        if (boxStates[i] === 0)
            empty = true;
    }
    return empty;
}

// checks to see if a player has won, returns winner
function checkWinner() {

    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winStates.length; i++) {
        winner = checkBoxes(winStates[i]);
        if (winner !== undefined)
            return winner;
    }
}

// checks to see if three boxes belong to the same player
function checkBoxes(arr) {
    let first = boxStates[arr[0]]
    let second = boxStates[arr[1]]
    let third = boxStates[arr[2]]

    if (first !== 0 && first === second && second === third)
        return first;
}


console.log("loaded");
let turn = "Player 1";
let boxStates = [];

let boxes = document.querySelectorAll(".box");

document.querySelector("#reset").addEventListener("click", resetGame);

for (let i = 0; i < boxes.length; i++) {
    boxStates[i] = 0;
    boxes[i].addEventListener("click", () => {
        selectBox(boxes[i]);
    })
}

function selectBox(box) {

    if (turn === "Player 1") {
        if (boxStates[box.id] === 0) {
            boxStates[box.id] = 1;
            box.classList.add("p1");
            turn = "Player 2";
        }
    }
    else {
        if (boxStates[box.id] === 0) {
            boxStates[box.id] = 2;
            box.classList.add("p2");
            turn = "Player 1";
        }
    }
}

function resetGame() {
    for (let i = 0; i < boxes.length; i++) {
        boxStates[i] = 0;
        boxes[i].classList.remove("p1");
        boxes[i].classList.remove("p2");
    }
}

function checkWinner() {



    // if boxStates matches a winning sequence for either player, console log the winner
    // later add a modal with a reset button
}

/*

to do:
- finish reading instructions
- wireframe divs
    - title at top of page
    - centered 3x3 w css grid, give each an ID to store in array later
    - div to say whose turn it is
    - reset button at the bottom
- build basic html without style
- write script
    - event listeners on each div to change colors
    - part II: store an array of arrays representing winning states
    - represent with array of 9 elements like so

    |0 1 2|
    |3 4 5|
    |6 7 8|

    - 0 means nobody has selected yet, 1 means player 1 has picked it, 2 means player 2 has picked it

 */

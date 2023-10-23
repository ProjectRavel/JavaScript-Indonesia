const cells = document.querySelectorAll(".cell");
const statustext = document.querySelector("#statustext");
const restart = document.querySelector("#restartbutton");
const wincondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentplayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellclicked));
    restart.addEventListener("click", restartgame);
    statustext.textContent = `Giliran ${currentplayer} untuk melangkah`;
    running = true;
}

function cellclicked() {
    const cellindex = this.getAttribute("cellIndex");

    if (options[cellindex] !== "" || !running) {
        return;
    }
    updatecell(this, cellindex);
    changeplayer(); // Call changeplayer here
    checkwinner();
}

function updatecell(cell, index) {
    options[index] = currentplayer;
    cell.textContent = currentplayer;
    cell.style.pointerEvents = "none"; // Disable further clicks on the cell.
}

function changeplayer() {
    currentplayer = (currentplayer == "O") ? "X" : "O";
    statustext.textContent = `Giliran ${currentplayer} untuk melangkah`;
}

function checkwinner() {
    for (const condition of wincondition) {
        const [a, b, c] = condition;
        if (options[a] && options[a] === options[b] && options[a] === options[c]) {
            statustext.textContent = `${options[a]} memenangkan permainan!`;
            running = false;
            return;
        }
    }

    if (!options.includes("")) {
        statustext.textContent = "Permainan berakhir, hasil imbang!";
        running = false;
    }
}

function restartgame() {
    options = ["", "", "", "", "", "", "", "", ""];
    currentplayer = "X";
    statustext.textContent = `Giliran ${currentplayer} untuk melangkah`;
    running = true;
    cells.forEach(cell => {
        cell.textContent = "";
        cell.style.pointerEvents = "auto";
    });
}

// this, cellindex
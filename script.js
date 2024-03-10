let currentPlayer = "X";
let board = ['', '', '', '', '', '', '', '', ''];

function makeMove(cellIndex) {
    if (board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
        
        if (checkWinner()) {
            showResult(currentPlayer + " wins!");
            return;
        }
        
        if (board.every(cell => cell !== '')) {
            showResult("It's a draw!");
            return;
        }
        
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let condition of winConditions) {
        if (board[condition[0]] !== '' &&
            board[condition[0]] === board[condition[1]] &&
            board[condition[1]] === board[condition[2]]) {
            return true;
        }
    }

    return false;
}

function showResult(result) {
    document.getElementById('resultText').innerText = result;
    document.getElementById('resultScreen').style.display = 'flex';
    document.getElementById('newGameBtn').style.display = 'block';
}

function resetGame() {
    currentPlayer = "X";
    board = ['', '', '', '', '', '', '', '', ''];
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('newGameBtn').style.display = 'none';
}

function newGame() {
    resetGame();
}

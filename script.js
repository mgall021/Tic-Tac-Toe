// Select all elements with the 'column' class
const gameSquares = document.querySelectorAll('.column');

// Initialize player 1
let currentPlayer1 = 'X';
let gameReset = false; // Keeps track of game state
let totalMoves = 0; // will check how many moves have been placed andnwhen tt reaches 9, it will calla tie

const winMethods = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // the win methods
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

gameSquares.forEach((square) => {
  square.addEventListener('click', (e) => {
    e.preventDefault();

    if (square.innerHTML === '' && !gameReset) {
      square.innerHTML = currentPlayer1;
      square.classList.add(currentPlayer1);
      totalMoves++;

      if (checkWin(currentPlayer1)) {
        alert(`Player ${currentPlayer1} wins`);
        console.log('Player', currentPlayer1, 'wins');
        gameReset = true;
      } else if (totalMoves === gameSquares.length) {
        alert("Darn, ya'll tie");
        console.log("Darn, ya'll tie");
        gameReset = true;
      }
      //else -> add a tie condition for whenever games dont have winners
      if (currentPlayer1 === 'X') currentPlayer1 = 'O';
      else currentPlayer1 = 'X';
    }
  });
});

function checkWin(player) {
  for (let i = 0; i < winMethods.length; i++) {
    // iterates through my wunMethods array
    const method = winMethods[i];
    let winner = true;
    for (let j = 0; j < method.length; j++) {
      const cell = method[j];
      if (!gameSquares[cell - 1].classList.contains(player)) {
        winner = false;
        break;
      }
    }
    if (winner) {
      return true;
    }
  }
  return false;
}
const resetButton = document.getElementById('resetButton');
function resetGameBoard() {
  gameSquares.forEach((square) => {
    square.innerHTML = '';
    square.classList.remove('X');
    square.classList.remove('O');
  });

  currentPlayer1 = 'X';
  gameReset = false;
  totalMoves = 0;
}

resetButton.addEventListener('click', () => {
  resetGameBoard();
});

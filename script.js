// Select all elements with the 'column' class
const gameSquares = document.querySelectorAll('.column');

// Initialize player 1
let currentPlayer1 = 'X';
let gameReset = false; // Keeps track of game state

const winMethods = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // Fixed the win method [7, 6, 9] to [7, 8, 9]
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

      if (checkWin(currentPlayer1)) {
        console.log('Player', currentPlayer1, 'wins');
        gameReset = true;
      }
      if (currentPlayer1 === 'X') currentPlayer1 = 'O';
      else currentPlayer1 = 'X';
    }
  });
});

function checkWin(player) {
  for (let i = 0; i < winMethods.length; i++) {
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

console.log(gameSquares);

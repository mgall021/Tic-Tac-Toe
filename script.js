// square varaible that callss on all classes with squares
const gameSquares = document.querySelectorAll('.column');
// intiale player 1 and 2

let currentPlayer1 = 'X';
let gameReset = false; // keeps track of game

const winMethods = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 6, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// loop the promise of clikcing on every square

// class checkWin {
//   constructor(win, tie) {
//     this.win = win;
//     this.tie = tie;
//   }
// }

gameSquares.forEach((square) => {
  square.addEventListener('click', (e) => {
    e.preventDefault();

    if (square.innerHTML === '' && !gameReset) {
      //conditional check if cell is empty
      square.innerHTML = currentPlayer1; // if cell is empty, this adds the symbol of currentPlayer

      square.classList.add(currentPlayer1); // using my DOM element square
      //this either adds an O or X to my square class list
    }

    if (checkWin(currentPlayer1)) {
      console.log('Player', currentPlayer1, 'wins');
      gameReset = true;
    }
    // we swap currentPlayer is X with O so we can keep track of which symbol is next
    if (currentPlayer1 === 'X') currentPlayer1 = 'O';
    else currentPlayer1 = 'X';

    // this.classList.add(currentPlayer1.toLocaleLowerCase());

    // if (currentPlayer1 === 'X') currentPlayer1 = 'O';
    // else currentPlayer1 = 'X';
  });
  // add eventlistener for the click
});

function checkWIn(player) {
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

console.log(player);

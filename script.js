// square varaible that callss on all classes with squares
const gameSquares = document.querySelectorAll('.column');
// intiale player 1 and 2

let currentPlayer1 = 'X';
let gameReset = false; // keeps track of game
// loop the promise of clikcing on every square
gameSquares.forEach((square) => {
  square.addEventListener('click', (e) => {
    e.preventDefault();

    if (square.innerHTML === '' && !gameReset) {
      //conditional check if cell is empty
      square.innerHTML = currentPlayer1; // if cell is empty, this adds the symbol of currentPlayer

      square.classList.add(currentPlayer1); // using my DOM element square
      //this either adds an O or X to my square class list

      // we swap currentPlayer is X with O so we can keep track of which symbol is next
      if (currentPlayer1 === 'X') currentPlayer1 = 'O';
      else currentPlayer1 = 'X';
    }

    // this.classList.add(currentPlayer1.toLocaleLowerCase());

    // if (currentPlayer1 === 'X') currentPlayer1 = 'O';
    // else currentPlayer1 = 'X';
  });
  // add eventlistener for the click
});

console.log(gameSquares);

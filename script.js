// square varaible that callss on all classes with squares
const gameSquares = document.querySelector('.column');
// intiale player 1 and 2

let player1 = 'X';
let player2 = '0';
// loop the promise of clikcing on every square
gameSquares.forEach((column) => {
  // add eventlistener for the click
  gameSquares.addEventListener('click', (e) => {
    e.preventDefault();

    body.styles.backgroundColor = 'red';
  });
});

console.log(gameSquares);

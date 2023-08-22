let gameReset = false; // Keeps track of game state
let totalMoves = 0; // will check how many moves have been placed andnwhen tt reaches 9, it will calla tie

// represents an array of elements with the class column
const gameSquares = document.querySelectorAll('.column');
// Represents the button with ID for player X
const playerXBtn = document.getElementById('playerX');
// Represents the button with Id for player O
const playerOBtn = document.getElementById('playerO');
// Represents my reset Button with the id of same name
const resetButton = document.getElementById('resetButton');

const winMethods = [
  // Showcases all possible win methods, here we used an array within an array. We call those Sub-arrays
  [1, 2, 3], // wins horizontally
  [4, 5, 6], // wins horizontally
  [7, 8, 9], // wins horizontally
  [1, 4, 7], // wins vertically
  [2, 5, 8], // wins vertically
  [3, 6, 9], // wins vertically
  [1, 5, 9], // wins Diagnolly
  [3, 5, 7], // wins Diagnolly
];

// Event listener activates once the 'O' Button is pressed
playerOBtn.addEventListener('click', () => {
  // set's the player's icon to the icon 'O'
  currentPlayer1 = 'O';
  // updates the stylling on the page to showcase that player 'X' is next
  nextPlayersTurn();
  // this alert pops up in the top of the page to let the user know which icon they've selected
  alert(`Player 1 has selected 'O'`);
});

// Event listener activates once the 'X' Button is pressed
playerXBtn.addEventListener('click', () => {
  // set's the player's icon to the icon 'X'
  currentPlayer1 = 'X';
  // updates the stylling on the page to showcase that player 'O' is next
  nextPlayersTurn();
  // this alert pops up in the top of the page to let the user know which icon they've selected
  alert(`Player 1 has selected 'X'`);
});

// purpose of thus function is to update the styling of the 'X' & 'O' buttons ->> refer to css to check how I got my buttons to transition color
function nextPlayersTurn() {
  // Using Dom Manipulation, I used classlist.toggle to between 'X' & 'O'.
  playerXBtn.classList.toggle('active', currentPlayer1 === 'X'); // If player chooses 'X', it adss the 'active' class to the playerXBtn element to indicate 'X's turn
  // For the element that isn't selected, these 2 lines removes the active class from the element
  playerOBtn.classList.toggle('active', currentPlayer1 === 'O'); // If player chooses 'O', it adss the 'active' class to the playerXBtn element to indicate 'O's turn
}

//  This refers to the locations of each square on the Grid Board
gameSquares.forEach((square) => {
  // working together with my ForEach function, this event listener waits for any square to be clicked from gameSquares element
  square.addEventListener('click', (e) => {
    // stops the page from reloading once a square is clicked
    e.preventDefault();
    // checks 2 conditions: checks to see if the square is empty by referring to innerHTML and checks to make sure the game is not in Reset mode.
    if (square.innerHTML === '' && !gameReset) {
      // !gameReset helps prevent user to place  moves after game has ended or before player has chosen an icon
      // places the symbol of 'X' or 'O' inside the empty square
      square.innerHTML = currentPlayer1;
      // refers to the styling of my icons, without this line my icons are plain Black font. With this line there able to be styled -> check css
      square.classList.add(currentPlayer1);
      // we increment totalMoves by one to keep track of the number of moves. I use this to decide when a game ends in a draw
      totalMoves++;

      // this if statement is meant to check which player has won
      if (checkWin(currentPlayer1)) {
        // we pass currentPlayer1 as an arguement because currentPlayer1 holds the information needed to know the result of the game.

        alert(`Player ${currentPlayer1} wins`); // popup alert that notifies the user of a win

        console.log('Player', currentPlayer1, 'wins'); // console logging it to make sure no erros come up

        gameReset = true; // allows the user to reset the game with no problem
      }
      // this is my method that checks  for a tie
      else if (totalMoves === gameSquares.length) {
        // consition is if totalMoves = the number of squares aka 9, the its a tie

        alert("Darn, ya'll tie"); // pop up window that notifies user of a tie

        console.log("Darn, ya'll tie"); // always gotta make sure theres no errors hence console log  it

        gameReset = true; // a tie means a reset is probabably coming
      }
      // this conditional block alternates the players turn
      // I need this condtional block of code specifically here because this calls a winner as soon as a winmethod is detceted
      // If I were to put it anywhere else, It would detect a winMethod one turn after someone has won.

      if (currentPlayer1 === 'X')
        currentPlayer1 = 'O'; // one of my many hurdles
      else currentPlayer1 = 'X';
      // updates the styling for my 'X' and 'O' buttons
      nextPlayersTurn(); // very important for me to call the function here because it follows the alternating functionality given with the condtional code above
      // another hurdle I faced
    }
  });
});

// I define the function checkWin with the parameter player to keep track of the player who wins the game.
function checkWin(player) {
  // iterates through my array of winMethods
  for (let i = 0; i < winMethods.length; i++) {
    // I define variable and assign it a subarray from the parent array. I do so to speciify the method that will be used to win the game.
    const method = winMethods[i];
    // I used this variable to check whether the variable represents a winning combination from the winMethods array
    let winner = true;
    //Using a nested for loop, this loop iterates through each index inside the method array.
    for (let j = 0; j < method.length; j++) {
      // this assigns the current index of method array to my variable cell
      const cell = method[j];
      // checks to see if the square at index[] has the class of the current player, being 'X' or 'O'
      //if it does not meet the requirement, it means that the current winMethod being checked is not valid
      if (!gameSquares[cell - 1].classList.contains(player)) {
        // if the method becomes invalid, I have set wiiner to false
        winner = false;
        // I use break so the loop can end. That way it does'nt continue checking the rest of the cells from the subarray method
        break;
      }
    }
    // This returns true only after checking all the cells from the array winMethods
    if (winner) {
      // winner variable is the final check to see if the winMethod is valid or not
      return true; // we return trie because if the code doesn;t break, the winning combination put down by the user is valid
    }
  }
  // here we return false to indicate that no winMethod array is valid -> hence a tie
  return false;
}

// function is used to clear the game board of all icons, 'X' & 'O'
function resetGameBoard() {
  // first we must iterate through each square inside the grid
  gameSquares.forEach((square) => {
    //  sets the area inside my square to an empty string
    square.innerHTML = '';
    // removes 'X' class from each square -> associated with styling check css
    square.classList.remove('X');
    // removes 'O' class from each square -> associated with styling check css
    square.classList.remove('O');
  });
  // once the button to reset the gae is pressed, The new starting icon is 'X'
  currentPlayer1 = 'X'; // tried to reset to nextplayersTurn but i keep getting undefined. --> One of the thing's I'd do differently
  // I set the game reset state back to false so we can continue to play a new round
  gameReset = false;
  //  resets the counyter for total moves as well, gives the user a clean start
  totalMoves = 0;
}
// event listener so my reset Button knows when to run the method resetGameBoard
resetButton.addEventListener('click', () => {
  resetGameBoard(); // calls on function to invoke
});

// Finished Product

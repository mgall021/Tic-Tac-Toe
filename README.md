# Tic-Tac-Toe-Project1
This is a simple web-based Tic Tac Toe game built using HTML, CSS, and JavaScript.
## Game Overview
Tic Tac Toe is a classic game where two players take turns marking spaces on a 3x3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

  ![Overview Game Image](https://media.git.generalassemb.ly/user/50083/files/e1b388de-c43c-4e6f-9d43-585b606d039a)

## User Stories
  - As a user, I should be able to start a new tic tac toe game
  - As a user, I should be able to click on a square to add X first and then O, and so on
  - As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
  - As a user, I should not be able to click the same square twice
  - As a user, I should be shown a message when I win, lose or tie
  - As a user, I should not be able to continue playing once I win, lose, or tie
  - As a user, I should be able to play the game again without refreshing the page

## Technologies used
- Developer Tools
   - Visual Studio Code : Allowed me to code in HTML, CSS, and JavaScript.
   - Command Line : A text-based interface in a computer's operating system that allows users to interact with the system by typing commands.
   - Google Chrome Developer Tools : Used for debugginh and troubelshooting any errors.
   - Google Chrome Browser : Used for displaying the web application.
   - Github Pages : Used to deploy my website. 
- Version Control
   - Git : Local Tool that works as a version control system within my computer.
   - GitHub: A web-based platform that hosts Git Repositories and offers a wide range of functions. 
- Online Tools
   - Stack Overflow : A platform where developers can ask technical questions, share knowledge, and solve programming problems.
   - CSS Gradient Website: Platform that allows user's to create their own color code. 
   - ChatGPT : Online AI that I personally used to help me debug my code. 
   - W3Schools : Online resource that offers code tutorials and documentation on programming languages. 
   - Mozilla Developer : Online platform that offers documentation, guides, and tools for web developers. 
   - Notability Notes App : Allowed me to sketch out my wireframing ideas. 

## WireFraming

## MVP - Bronze 
OverView:
-   Create a Repository. 
-   Create a plain HTML page.
-   link my JS code and CSS code to my HTML page.
-   Create a basic 3x3 Grid. 
-   Create a title
-   create Buttons for user to choose their Icon and to reset the game.
-   Create functionality for user to place an 'X' or 'O' inside the set grid. 
-   Create Functionality for user to win, lose, or Tie.
-   Create Functionality for both 'X' and 'O' buttons.
-   Create Functionality for my 'Reset Button', allowing it to start a new game without reloading the page. 
-   Add a hihglighting function onto the 'X' and 'O' buttons, allowing them to highlight the next players turn.

## Bronze Psedocode

- HTML:
    - Use HTML5 Boilerplate
    - link my CSS and JS files
    - Set Up h1 as my Title
    - Add a div, inside that create 3x3 columns and give each square an ID
    - Create buttons for player icons 'X' & 'O'
    - Create a button to Reset the Game 
    - Create an H2, use it to label what buttons the user can pick from. Referring to 'X' 7 'O' buttons.
    
- JavaScrpt:
    - Define Vafiables
         - Define a player Variable
         - Define a variable that tracks whether game needs or gets Reset
         - Create a variable that keeps count of player/players moves
         - Define an array that contains all possible winning scenarios
         - Define Reset Button variable
   -  Create an event listener that fills each square that the user clicks on with an 'X' or 'O'
   -  Create a method that checks for Wins / Ties
         - In this function, We must check use our array to check if any of those possibilities have been met. 
         - Also, We must use this method to check for tie's. We do so by checking if all 9 squares have been filled with either an 'X' or 'O' icon. 
   -  Create an event listener for my Reset Button.
         - In htis function, user must be able to clear the grid of all previous Icon's. We can do so by using the Remove technique.
   -  Create event listenrs for my 'X' & 'O' Buttons.
         - Create a function that lets the user know who;s turn is up next.
         - We do so by inacting the toggle technique. 
         - We must also print alerts to let the user know which icon they've selected. 

- CSS
   - Format my h1 which is my title
   - Format my Grid using row and column elements
     - to create the row, use flex to make sure the lines are centered horizontally
     - to create the column, play with properties of width, height, padding, and borders to reach desired look. 
   - Format my Reset Button
   - Format my H2
   - Format my two player options
     - 'X' Button
     - 'O' Button
   - In body, change the background color of my page. 

- ## Win's
  - I had lots of tought battles while formatting my code. One specific snippet of code that I'm very proud of is my CheckWin Method. In this snippet, I was struggling with my nested for loop. It wasn't till in one of my Stand Up's lead by Suresh where he was helping a student figure out how to implement a grid table. He mentioned that each square is a cell with a certain ID. This is when I had a eureka moment and got the idea to have a variable called 'cell' and have that hold a new sub-array called method. This variable checks to see if the current square has an index[j], checking to see if any of my winMethods were valid.
  - ![ CheckWin Method](https://media.git.generalassemb.ly/user/50083/files/77a498e7-1073-4b31-985b-6e36d35ab4c6)
  
## Hurdles 
 - In the code below, my biggest hurdle was figuring out how to alternate player turns. I tried having for loop's that counted so every even turn was player 1 and every odd turn was player 2. Yet, that got complicated fast. This hurdle took me my whole first 2 days working on this project to figure out. So after countless breaks and researching, I came across this stack overflow thread [StackOverFlow link](https://stackoverflow.com/questions/60527719/javascript-alternate-player-turns-and-changing-colours). This is how i figured out how to solve my my biggest hurdle. 
 ![Hurdle Image](https://media.git.generalassemb.ly/user/50083/files/a8dbcdef-4e7b-4941-a7e3-51c854e9c63c)
   

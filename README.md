# Tic-Tac-Toe (React)

## Project Overview
Tic-Tac-Toe is a simple strategy game where two players take turns placing their symbols (usually X and O) on a 3x3 game board. The first player to successfully placing three of their symbols in a row, either horizontally, vertically, or diagonally, becomes the winner. If there are no remaining blank squares and no winner, then the game is tie. 

## Goal
This project aims to create an interactive Tic-Tac-Toe game using React that can be played through a website. 
### Feature
* **Custom name**: players can customize their names on the homepage, allowing them to add their own name at the beginning of the game.
* **Reset Button**: players have the option to reset the board in case of no winner.
* **Scoring System**: players can view the score of each player's victories.
### Demo
[Click here](https://farizindrad.github.io/React-tic-tac-toe/) to see demo of this project

### Tools
* [Visual Studio Code](https://code.visualstudio.com/)
* [Node.js](https://nodejs.org/en)

### Project Setup
- Preparation:
  ````
  npm create vite@latest
  ````
  - name the project folder
  - use the arrow button to move up and down, select React then enter
  - select Javascript and enter again
  ````
  cd your-folder-name
  ````
  ````
  npm i
  ````
- Creating Board
- Adding Click Functionality
- Adding Opponent
- Checking Winner
- Reset Board
- Customize Name
- Scoring System

### Properties
Component | Function 
--- | ---
**Kotak** | represents each square on the game board. Each square can contain "X," "O," or empty depending on the game state.
**Papan** | responsible for handling the Tic-Tac-Toe game logic, storing and updating the game state, and rendering the user interface (UI) that includes the game board, scores, status, and the "Restart Game" button.
**Game** | responsible for managing the initial game setup, collecting player names, and initiating the game when the "Start" button is clicked.

### Other Enhancements
* A bug occurs when the names of both players are the same, causing the scores not to update.
* The "Reset Game" button appears, replacing the "Start" button.
* Restart the player score.

# Space Hangman

![Space Hangman Banner](images/capture.png)

**Space Hangman** is a two-player game where players take turns guessing letters to complete a hidden word. Players can win by guessing the word correctly or lose if they run out of tries. The game supports different categories, including food, transportation, and clothing.

## Features

- Two-player mode
- Multiple word categories (Food, Transportation, Clothing)
- Turn-based gameplay
- Score tracking for wins and losses
- 10 tries per round with an animated indicator
- Keyboard support (virtual and physical)
- Visual feedback for wrong guesses
- Game over animation

## **How to Play**

1. Players input their usernames.
2. A random word from a chosen category is selected.
3. Players take turns guessing letters, with correct guesses being revealed in the displayed squares.
4. The game tracks and displays the score after each round, with turns alternating between players.
5. The game continues until one player accumulates a defined number of wins or losses.

## **Pseudocode Overview**

### **1. Player Username Input**

- **Objective**: Capture usernames for both Player 1 and Player 2.
- **Variables**:
  - `player1Username` to store Player 1's username.
  - `player2Username` to store Player 2's username.
- **Action**:
  - Create a "Start Game" button and query it using `querySelect`.
  - Once both players click the button, run a function called `storeUsernames` to store the input in the respective variables.

### **2. Random Word Selection Based on Category**

- **Objective**: Choose a random word from a category (e.g., food, transportation, clothing).
- **Variables**:
  - `words` array containing random words grouped into categories.
  - `currentWord` variable to store a randomly selected word from the chosen category.
  - `currentCategory` variable to store the currently selected category.
- **Action**:
  - Use `Math.random` to select a word from the `words` array based on the current category.

### **3. Scoreboard to Track Wins/Losses**

- **Objective**: Track wins and losses for both players.
- **Variables**:
  - `winCount1` and `lossCount1` for Player 1's win/loss record.
  - `winCount2` and `lossCount2` for Player 2's win/loss record.
- **Action**:
  - Create HTML elements (e.g., divs) to display the usernames and scores for both players.
  - The scoreboard will update after each round with the current win/loss counts.

### **4. Display Squares for Each Letter in the Current Word**

- **Objective**: Create visual squares representing the letters of the current word.
- **Action**:
  - Create a function called `wordLength` to calculate and store the length of the `currentWord`.
  - Create a function called `makeSquares` that loops through the length of `currentWord` to create div elements (squares), which are appended to the DOM.
  - Use a query selector (`displaySquares`) to manage the display of these squares.

### **5. Keyboard for Letter Guessing**

- **Objective**: Enable players to guess letters via a virtual keyboard.
- **Variables**:
  - `guessedLetters` array to store letters guessed by both players.
  - `correctLetters` variable to store correctly guessed letters.
- **Action**:
  - Create a function called `handleGuess` to check if the guessed letter exists in `currentWord`.
  - If correct, update the `correctLetters` variable and reveal the correct letters in the displayed squares.
  - If incorrect, increment a `clickCount` variable and reduce the remaining tries for the current player.
  - Disable already guessed letters on the keyboard to prevent re-guessing.

### **6. Win/Loss Checking**

- **Objective**: Determine if a player has won or lost the round.
- **Action**:
  - Create a function called `checkWin` to compare `correctLetters` to the letters in `currentWord`.
  - If all letters match:
    - Add +1 to the current player's `winCount` and reset the round.
  - If too many incorrect guesses:
    - Add +1 to the current player's `lossCount`, reset the round, and switch to the other player.
  - Update the scoreboard after each round.

### **7. Switch Turns Between Players**

- **Objective**: Alternate turns between Player 1 and Player 2.
- **Action**:
  - Create a function called `switchTurn` to toggle the active player after each round.
  - Display a message indicating whose turn it is.

### **8. Additional Features**

- **Sound Effects**:
  - Add sound effects when players guess letters or when a round ends (correct or incorrect guesses).
- **Hangman Animation**:
  - Update the alien-themed hangman animation to reflect incorrect guesses, showing the alien in danger as tries decrease.
- **Try Count**:
  - Add a `triesCount` function to track and display the number of tries remaining.

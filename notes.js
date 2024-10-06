// 1) I want to make the user enter the username and then start the game by clicking on a button which stores the username and uses it during the game

// a) Create an event listener for "startGameBtn" that listens for clicks and runs a function called "storeUsername".
// b) Inside the "storeUsername" function:
// Take the value from the "usernameInput" field and store it in a variable called "username".
// If no username is entered, show an alert asking the user to input a name.ss
// Display the username in the "messageDisplay" area and call the "startGame" function to begin the game.

// 2) Make a keyboard that contains letters only and stores the guessed letters

// a) Dynamically create buttons for each letter of the alphabet and append them to the "keyboard" container.
// b) Add an event listener to each letter button that listens for clicks.
// c) When clicked, the button should call the "handleGuess" function with the clicked letter passed as an argument.
// d) Once a letter is clicked, disable the button to prevent it from being clicked again.

// 3) Showing the username and the score next to it

// a) Display the player's username in the "messageDisplay" section when the game starts.
// b) Create two variables, "winCount" and "lossCount", to store and keep track of the player's wins and losses.
// c) Show the current win and loss counts in the "winDisplay" and "lossDisplay" sections.
// d) Update these counts whenever the player wins or loses a game, reflecting the updated scores.

// 4) Start the game and choose a random word

// a) Inside the "startGame" function, select a random word from the "words" array and store it in the variable "currentWord".
// b) Initialize the "correctGuesses" array with underscores, where each underscore represents an unguessed letter in the "currentWord".
// c) Reset the "wrongGuesses" array to clear any previous wrong guesses.
// d) Call the "renderWord" function to display the underscores on the screen representing the unguessed letters.

// 5) Rendering the word and handling guesses

// a) The "renderWord" function should update the display by showing the correctly guessed letters and underscores for letters that haven't been guessed.
// b) In the "handleGuess" function:
// Check if the guessed letter exists in "currentWord".
// If it does, update the "correctGuesses" array to replace the appropriate underscores with the guessed letter.
// If it doesn’t, add the guessed letter to "wrongGuesses" and check if the player has reached the loss condition (too many wrong guesses).
// c) After each guess, call either "checkWin" or "checkLoss" to determine if the game has been won or lost.

// 6) Checking if the player won or lost

// a) The "checkWin" function checks if the "correctGuesses" array no longer contains any underscores. If it doesn’t, the player has won.
// b) If the player wins, update the win count, display a win message, and make the "restartBtn" visible.
// c) The "checkLoss" function checks if the length of "wrongGuesses" is 6 or more, meaning the player has lost.
// d) If the player loses, update the loss count, display the correct word, and show a loss message. The "restartBtn" should also become visible.

// 7) Restarting the game

// a) Make the "restartBtn" visible when the player wins or loses the game.
// b) Add an event listener to the "restartBtn" that will reset the game by calling the "startGame" function again.

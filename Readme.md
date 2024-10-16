1. I want two players to input their usernames
   There will be two variables called player1Username and player2Username to store the usernames chosen by Player 1 and Player 2.

There will be a "Start Game" button that we will querySelect. After both users click it, we will run a function called storeUsernames which will store the inputs in player1Username and player2Username.

2. After the users click start, choose a random word from the array based on a category
   There will be an array called words that contains manually added random words, grouped into different categories (e.g., food, transportation, clothing).

Make a variable called currentWord that stores one random element from the appropriate category in the words array using Math.random.

Also, store the current category in a variable called currentCategory.

3. I want a scoreboard that shows both usernames and tracks wins/losses
   There will be two sets of variables:

winCount1, lossCount1 for Player 1.
winCount2, lossCount2 for Player 2.
The scoreboard will update after each round to show how many games each player has won and lost.

There will be HTML elements (e.g., divs) displaying the usernames and scores for both players.

4. I want to display squares depending on how many letters are in the current word
   Create a function called wordLength that reads and stores the length of currentWord.

Create another function called makeSquares that loops through the length of currentWord, creates div elements (squares), and appends them to the DOM. The number of loops depends on the value from wordLength.

Query the squares using a variable like displaySquares to manage them visually.

5. I want to display a keyboard and allow the players to guess letters
   There will be an array called guessedLetters to store the letters that have been guessed by both players.

Create a function called handleGuess that checks if the guessed letter exists in currentWord.

If the letter exists, add it to a variable called correctLetters and update the displayed squares with the correct letters.

If the letter does not exist, increment the clickCount and reduce the player's remaining tries.

Disable the guessed letter on the keyboard to prevent re-guessing the same letter.

6. I want to check if the player won or lost
   Create a function called checkWin that checks if all letters in correctLetters match the letters in currentWord. If they do, the player wins.

If the player wins:

Add +1 to the current player’s winCount and reset the round.
If the player makes too many incorrect guesses:

Add +1 to their lossCount, reset the round, and switch to the other player.
Update the scoreboard to reflect the new scores.

7. I want to switch turns between Player 1 and Player 2
   After each round (win or lose), call a function called switchTurn that switches the currentPlayer between Player 1 and Player 2.

Display a message showing whose turn it is.

8. Additional Features
   Add sound effects when letters are guessed or when a round ends (correct/wrong guesses).

Update the hangman animation to show the alien in danger as tries decrease (e.g., triesCount function).

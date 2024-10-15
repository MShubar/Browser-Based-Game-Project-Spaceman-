// -------------------------------------Variables---------------------------------------//
let player1Username, player2Username
let currentPlayer = 1 // Tracks the current player's turn
let clickedLetters = [] // Stores guessed letters
let winCount1 = 0,
  winCount2 = 0 // Keeps track of wins for both players
let lossCount1 = 0,
  lossCount2 = 0 // Keeps track of losses for both players
let currentWord = "" // The word being guessed in the game
let correctLetters = [] // Tracks correctly guessed letters in the word
let clickCount = 0 // Counts wrong guesses
let tries = 10 // Number of tries a player has per round
let previousWord = "" // Tracks the last word used
let keyenter = false
// -------------------------------------Constants----------------------------------------//
// All the words in the game
const words = [
  "PIZZA",
  "BURGER",
  "PASTA",
  "SUSHI",
  "TACOS",
  "SALAD",
  "STEAK",
  "FRIES",
  "SOUP",
  "SANDWICH",
  "DUMPLINGS",
  "CURRY",
  "NOODLES",
  "PANCAKES",
  "WAFFLES",
  "ICE CREAM",
  "LASAGNA",
  "BURRITO",
  "PAELLA",
  "SHAWARMA",
  "CAR",
  "BICYCLE",
  "BUS",
  "TRAIN",
  "MOTORCYCLE",
  "AIRPLANE",
  "BOAT",
  "SUBWAY",
  "TRAM",
  "HELICOPTER",
  "SCOOTER",
  "FERRY",
  "TAXI",
  "SKATEBOARD",
  "VAN",
  "TRUCK",
  "HOVERCRAFT",
  "HOT AIR BALLOON",
  "SEGWAY",
  "MONORAIL",
  "T-SHIRT",
  "JEANS",
  "JACKET",
  "SWEATER",
  "SKIRT",
  "DRESS",
  "BLOUSE",
  "SHORTS",
  "SUIT",
  "HOODIE",
  "COAT",
  "PAJAMAS",
  "TANK TOP",
  "SNEAKERS",
  "SANDALS",
  "SCARF",
  "HAT",
  "SOCKS",
  "GLOVES",
  "BELT",
]
// These are categories selected by words
const categories = {
  Food: [
    "PIZZA",
    "BURGER",
    "PASTA",
    "SUSHI",
    "TACOS",
    "SALAD",
    "STEAK",
    "FRIES",
    "SOUP",
    "SANDWICH",
    "DUMPLINGS",
    "CURRY",
    "NOODLES",
    "PANCAKES",
    "WAFFLES",
    "ICE CREAM",
    "LASAGNA",
    "BURRITO",
    "PAELLA",
    "SHAWARMA",
  ],
  Transportation: [
    "CAR",
    "BICYCLE",
    "BUS",
    "TRAIN",
    "MOTORCYCLE",
    "AIRPLANE",
    "BOAT",
    "SUBWAY",
    "TRAM",
    "HELICOPTER",
    "SCOOTER",
    "FERRY",
    "TAXI",
    "SKATEBOARD",
    "VAN",
    "TRUCK",
    "HOVERCRAFT",
    "HOT AIR BALLOON",
    "SEGWAY",
    "MONORAIL",
  ],
  Clothing: [
    "T-SHIRT",
    "JEANS",
    "JACKET",
    "SWEATER",
    "SKIRT",
    "DRESS",
    "BLOUSE",
    "SHORTS",
    "SUIT",
    "HOODIE",
    "COAT",
    "PAJAMAS",
    "TANK TOP",
    "SNEAKERS",
    "SANDALS",
    "SCARF",
    "HAT",
    "SOCKS",
    "GLOVES",
    "BELT",
  ],
}

// ---------------------------------Cached elements-------------------------------------//
const startGameBtn = document.querySelector("#startgame") // Start game button
const usernameInputs = document.querySelectorAll(".inputusername") // Input username 1 and 2
const messageDisplay = document.querySelector("#messagedisplay") // Message displayed above for the user
const keyboard = document.querySelectorAll(".keyboard") // key buttons show in the screen A-Z
const winDisplay1 = document.querySelector("#wincount1") // score display the wins for player 1 the score container
const winDisplay2 = document.querySelector("#wincount2") // score display the wins for player 2 the score container
const lossDisplay1 = document.querySelector("#losscount1") // score display wins for player 1 the score container
const lossDisplay2 = document.querySelector("#losscount2") // score display wins for player 2 the score container
const wordDisplay = document.querySelector("#word-display") // the squares below currentWord
const player1NameDisplay = document.querySelector("#player1name") // the player 1 name in the score container for win
const player2NameDisplay = document.querySelector("#player2name") // the player 2 name in the score container for win
const player1NameLossesDisplay = document.querySelector("#player1nameLosses") // the player 1 name in the score container for lose
const player2NameLossesDisplay = document.querySelector("#player2nameLosses") // the player 2 name in the score container for lose
const triesLeft = document.querySelector("#Tries_left") // the number of tries that the user has
const scoreContainer = document.querySelector("#scores-container") // the whole container that holds the scores and the username
const clickSound = document.getElementById("click-sound")
// ---------------------------------Functions-------------------------------------------//
// Function to store usernames
const storeUsernames = () => {
  player1Username = usernameInputs[0].value
  player2Username = usernameInputs[1].value

  if (areUsernamesValid()) {
    displayUsernames()
    hideUsernameInputs()
    startGame()
  } else {
    displayMessage("Please enter both usernames!")
  }
}

// checks if both usernames are entered
const areUsernamesValid = () => player1Username && player2Username

// Displays player usernames on the screen
const displayUsernames = () => {
  player1NameDisplay.innerText = player1Username
  player2NameDisplay.innerText = player2Username
  player1NameLossesDisplay.innerText = player1Username
  player2NameLossesDisplay.innerText = player2Username
}

// hides input fields / first page
const hideUsernameInputs = () => {
  usernameInputs.forEach((input) => (input.style.display = "none"))
  startGameBtn.style.display = "none"
}

//  starts the game / init
const startGame = () => {
  resetGameVariables()
  selectRandomWord()
  previousWord = currentWord
  displayWord()
  displayTurnMessage()
  document.getElementById("gameSection").style.display = "block"
  scoreContainer.style.display = "flex"
}

// Resets game-related variables for a new turn
const resetGameVariables = () => {
  clickedLetters = []
  correctLetters = []
  clickCount = 0
}

// Selects a random word
const selectRandomWord = () => {
  const categoryKeys = Object.keys(categories)
  const randomCategory =
    categoryKeys[Math.floor(Math.random() * categoryKeys.length)]
  const wordsInCategory = categories[randomCategory]
  currentWord =
    wordsInCategory[Math.floor(Math.random() * wordsInCategory.length)]
  correctLetters = Array(currentWord.length).fill("_")

  displayCategory(randomCategory)
}

// Displays the current category
const displayCategory = (category) => {
  const categoryDisplay = document.getElementById("category-display")
  categoryDisplay.innerText = `Category: ${category}`
}

// Displays the current word
const displayWord = () => {
  wordDisplay.innerHTML = correctLetters
    .map((letter) => `<div class="letter-square">${letter}</div>`)
    .join("")
}

// Displays whose turn it iss
const displayTurnMessage = () => {
  displayMessage(
    `It's ${currentPlayer === 1 ? player1Username : player2Username}'s turn!`
  )
}

// Displays a message
const displayMessage = (message) => {
  messageDisplay.innerText = message
}

// Handles the player's letter guess
const handleGuess = (letter, button) => {
  if (!clickedLetters.includes(letter)) {
    clickedLetters.push(letter)
    button.disabled = true
    if (currentWord.includes(letter)) {
      updateCorrectLetters(letter)
    } else {
      clickCount++
      triesCount()
    }
    checkForWin()
    checkForLoss()
  }
}

// Updates the correctly guessed letters
const updateCorrectLetters = (letter) => {
  currentWord.split("").forEach((char, index) => {
    if (char === letter) {
      correctLetters[index] = letter
    }
  })
  displayWord()
}

// Checks if the player has won
const checkForWin = () => {
  if (!correctLetters.includes("_")) {
    if (currentPlayer === 1) {
      winCount1++
      winDisplay1.innerText = winCount1
    } else {
      winCount2++
      winDisplay2.innerText = winCount2
    }
    tries = 10

    endGame()
  }
}

// Checks if the player has lost
const checkForLoss = () => {
  if (clickCount >= 10) {
    if (currentPlayer === 1) {
      lossCount1++
      lossDisplay1.innerText = lossCount1
    } else {
      lossCount2++
      lossDisplay2.innerText = lossCount2
    }
    tries = 10
    endGame()
  }
}

// Ends the current round and prepares for the next
const endGame = () => {
  disableKeyboard()
  resetGameForNextRound()
  switchTurn()
}

// Resets variables for the next turn
const resetGameForNextRound = () => {
  clickedLetters = []
  clickCount = 0
  selectRandomWord()
  displayWord()
}

// Switches players each turn
const switchTurn = () => {
  currentPlayer = currentPlayer === 1 ? 2 : 1
  tries = 10
  displayTurnMessage()

  displayMessage(
    `The word was ${previousWord} It's ${
      currentPlayer === 1 ? player1Username : player2Username
    }'s turn!`
  )
  previousWord = currentWord
  enableKeyboard()
  triesLeft.textContent = `Tries left: ${tries}`
  updateAnimation()
}

// Disables all keyboard buttons
const disableKeyboard = () => {
  keyboard.forEach((button) => {
    button.disabled = true
  })
}

// Enables all keyboard buttons
const enableKeyboard = () => {
  keyboard.forEach((button) => {
    button.disabled = false
  })
}

// Update tries left
const triesCount = () => {
  tries -= 1
  triesLeft.textContent = `Tries left: ${tries}`
  updateAnimation()
}

// Updates the animation depending on the try
const updateAnimation = () => {
  const animationDiv = document.getElementById("animation")
  const imgPath = `images/chance${tries}.png`
  animationDiv.style.backgroundImage = `url(${imgPath})`
}

// After entering the player 1 and player 2. pressing Enter only will start the game instead of clicking the button
const key = (event) => {
  if (event.key === "Enter" && keyenter === false) {
    storeUsernames()
    keyenter = true
  } else {
  }
}

// Physical keyboard is turned into the letters and it looks for the button that has similar names/ID
const handleKeyPress = (event) => {
  if (event.key === "Enter" && keyenter === false) {
    storeUsernames()
    keyenter = true
  } else {
    const letter = event.key.toUpperCase()
    if (currentWord !== "") {
      if (letter >= "A" && letter <= "Z") {
        const button = Array.from(keyboard).find((btn) => btn.id === letter)
        if (button && !button.disabled) {
          handleGuess(letter, button)
        }
      }
    }
  }
}
function playClickSound() {
  clickSound.currentTime = 0 // Rewind to the start
  clickSound.play() // Play the sound
}
// ---------------------------------Event Listeners-------------------------------------//
// listener for the start game button
startGameBtn.addEventListener("click", storeUsernames)

// listener for the virtual keyboard
keyboard.forEach((button) => {
  button.addEventListener("click", () => handleGuess(button.id, button))
})

// listeners for the physical keyboard for 2 different function
document.addEventListener("keypress", key, playClickSound)
document.addEventListener("keypress", handleKeyPress, playClickSound)

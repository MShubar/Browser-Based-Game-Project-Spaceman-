// -------------------------------------Variables---------------------------------------//
let player1Username, player2Username
let currentPlayer = 1
let clickedLetters = []
let winCount1 = 0,
  winCount2 = 0
let lossCount1 = 0,
  lossCount2 = 0
let currentWord = ""
let correctLetters = []
let clickCount = 0
let tries = 10
// -------------------------------------Constants----------------------------------------//
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
const startGameBtn = document.querySelector("#startgame")
const usernameInputs = document.querySelectorAll(".inputusername")
const messageDisplay = document.querySelector("#messagedisplay")
const keyboard = document.querySelectorAll(".keyboard")
const winDisplay1 = document.querySelector("#wincount1")
const winDisplay2 = document.querySelector("#wincount2")
const lossDisplay1 = document.querySelector("#losscount1")
const lossDisplay2 = document.querySelector("#losscount2")
const wordDisplay = document.querySelector("#word-display")
const player1NameDisplay = document.querySelector("#player1name")
const player2NameDisplay = document.querySelector("#player2name")
const player1NameLossesDisplay = document.querySelector("#player1nameLosses")
const player2NameLossesDisplay = document.querySelector("#player2nameLosses")
const triesLeft = document.querySelector("#Tries_left")

// ---------------------------------Functions-------------------------------------------//
const storeUsernames = () => {
  player1Username = usernameInputs[0].value
  player2Username = usernameInputs[1].value

  if (areUsernamesValid()) {
    displayUsernames()
    displayMessage(`Welcome, ${player1Username} and ${player2Username}!`)
    hideUsernameInputs()
    startGame()
  } else {
    displayMessage("Please enter both usernames!")
  }
}

const areUsernamesValid = () => player1Username && player2Username

const displayUsernames = () => {
  player1NameDisplay.innerText = player1Username
  player2NameDisplay.innerText = player2Username
  player1NameLossesDisplay.innerText = player1Username
  player2NameLossesDisplay.innerText = player2Username
}

const hideUsernameInputs = () => {
  usernameInputs.forEach((input) => (input.style.display = "none"))
  startGameBtn.style.display = "none"
}

const startGame = () => {
  resetGameVariables()
  selectRandomWord()
  displayWord()
  displayTurnMessage()
  document.getElementById("gameSection").style.display = "block"
}

const resetGameVariables = () => {
  clickedLetters = []
  correctLetters = []
  clickCount = 0
}

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

const displayCategory = (category) => {
  const categoryDisplay = document.getElementById("category-display")
  categoryDisplay.innerText = `Category: ${category}`
}

const displayWord = () => {
  wordDisplay.innerHTML = correctLetters
    .map((letter) => `<div class="letter-square">${letter}</div>`)
    .join("")
}

const displayTurnMessage = () => {
  displayMessage(
    `It's ${currentPlayer === 1 ? player1Username : player2Username}'s turn!`
  )
}

const displayMessage = (message) => {
  messageDisplay.innerText = message
}

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

const updateCorrectLetters = (letter) => {
  currentWord.split("").forEach((char, index) => {
    if (char === letter) {
      correctLetters[index] = letter
    }
  })
  displayWord()
}

const checkForWin = () => {
  if (!correctLetters.includes("_")) {
    if (currentPlayer === 1) {
      winCount1++
      winDisplay1.innerText = winCount1
    } else {
      winCount2++
      winDisplay2.innerText = winCount2
    }
    displayMessage(`Player ${currentPlayer} wins! The word was: ${currentWord}`)
    endGame()
  }
}

const checkForLoss = () => {
  if (clickCount >= 10) {
    if (currentPlayer === 1) {
      lossCount1++
      lossDisplay1.innerText = lossCount1
    } else {
      lossCount2++
      lossDisplay2.innerText = lossCount2
    }
    displayMessage(
      `Player ${currentPlayer} loses! The word was: ${currentWord}`
    )
    endGame()
  }
}

const endGame = () => {
  disableKeyboard()
  resetGameForNextRound()
  switchTurn()
}

const resetGameForNextRound = () => {
  clickedLetters = []
  clickCount = 0
  selectRandomWord()
  displayWord()
}

const switchTurn = () => {
  currentPlayer = currentPlayer === 1 ? 2 : 1
  displayTurnMessage()
  enableKeyboard()
}

const disableKeyboard = () => {
  keyboard.forEach((button) => {
    button.disabled = true
  })
}

const enableKeyboard = () => {
  keyboard.forEach((button) => {
    button.disabled = false
  })
}

const triesCount = () => {
  tries -= 1
  triesLeft.textContent = `Tries left: ${tries}`
}
// ---------------------------------Event Listeners-------------------------------------//
startGameBtn.addEventListener("click", storeUsernames)
keyboard.forEach((button) => {
  button.addEventListener("click", () => handleGuess(button.id, button))
})

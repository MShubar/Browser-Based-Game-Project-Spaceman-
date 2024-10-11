// -------------------------------------Variables---------------------------------------//
let username
let clickedLetters = []
let winCount = 0
let lossCount = 0
let currentWord
let correctLetters = []
let clickCount = 0

// -------------------------------------Constants----------------------------------------//
const words = [
  'ABACUS',
  'BAGEL',
  'CACTUS',
  'DOLPHIN',
  'EAGLE',
  'FABLE',
  'GIRAFFE',
  'HORIZON',
  'ICEBERG',
  'JAGUAR',
  'KITE',
  'LEMONADE',
  'MOUNTAIN',
  'NEBULA',
  'OASIS',
  'PANCAKE',
  'QUICKSAND',
  'RAVEN',
  'SANDWICH',
  'TIGER',
  'UMBRELLA',
  'VIOLET',
  'WALNUT',
  'XENOPHOBIA',
  'YACHT',
  'ZEBRA',
  'AQUARIUM',
  'BICYCLE',
  'CANDLE',
  'DREAM',
  'ELEPHANT',
  'FROST',
  'GALAXY',
  'HELICOPTER',
  'IGUANA',
  'JOURNEY',
  'KANGAROO',
  'LIBRARY',
  'MAGNET',
  'NINJA',
  'ORCHESTRA',
  'PUZZLE',
  'QUEST',
  'ROCKET',
  'SILVER',
  'TELEPHONE',
  'UNIVERSE',
  'VOLCANO',
  'WATERMELON',
  'XYLOPHONE',
  'ABOVE',
  'BALLOON',
  'CRYSTAL',
  'DIPLOMA',
  'ENIGMA',
  'FANTASY',
  'GARDEN',
  'HARMONY',
  'INVENTION',
  'JUGGLER',
  'KITEBOARD',
  'LANTERN',
  'MELODY',
  'NEST',
  'OCTOPUS',
  'PIRATE',
  'QUEEN',
  'RIVER',
  'SPECTRUM',
  'TROPHY',
  'UNIQUE',
  'VORTEX',
  'WIZARD',
  'YELLOW',
  'ZOOLOGIST',
  'AEROPLANE',
  'BENCH',
  'CROSSWORD',
  'DICE',
  'EMERALD',
  'FUSION',
  'GAZELLE',
  'HARMONICA',
  'IVORY',
  'JASMINE',
  'KUMQUAT',
  'LEOPARD',
  'MARSHMALLOW',
  'NINCOMPOOP',
  'OYSTER',
  'PLATYPUS',
  'QUARTZ',
  'RUMBA',
  'SQUASH',
  'THUNDER',
  'UNICORN',
  'VANDAL',
  'WRESTLER',
  'XEROPHYTE',
  'YARN',
  'ZEPPELIN',
  'ARTICHOKE',
  'BLUEPRINT',
  'CARNIVAL',
  'DOLPHIN',
  'ELIXIR',
  'FRIENDSHIP',
  'GIRAFFE',
  'HYDRATION',
  'INCIDENT'
]

// ---------------------------------Cached elements-------------------------------------//
const startGameBtn = document.querySelector('#startgame')
const usernameInput = document.querySelector('#inputusername')
const messageDisplay = document.querySelector('#messagedisplay')
const keyboard = document.querySelectorAll('.keyboard')
const winDisplay = document.querySelector('#wincount')
const lossDisplay = document.querySelector('#losscount')
const retryBtn = document.querySelector('.retrybtn')
const wordDisplay = document.querySelector('#word-display')

// ---------------------------------Functions-------------------------------------------//
const storeUsername = () => {
  username = usernameInput.value
  if (username !== '') {
    messageDisplay.textContent = username
    document.getElementById('gameSection').style.display = 'block' // Show the game section
  } else {
    alert('Please enter a username')
  }
}

const clickingLetter = (event) => {
  let clickedLetter = event.target.id
  clickedLetters.push(clickedLetter)
  event.target.setAttribute('disabled', '')

  // Update correct letters if the clicked letter is in the current word
  if (currentWord.includes(clickedLetter)) {
    correctLetters.push(clickedLetter)
  }

  console.log(clickedLetters)
  console.log(currentWord)
  console.log(`Correct Letters: ${correctLetters}`)
}

const scoreDisplay = () => {
  winDisplay.textContent = winCount
  lossDisplay.textContent = lossCount
}

const renderWord = () => {
  wordDisplay.innerHTML = '' // Clear the previous word display
  currentWord.split('').forEach((letter) => {
    const square = document.createElement('div')
    square.classList.add('letter-square') // Add a class for styling

    // Show the letter if guessed correctly or leave empty
    square.textContent = correctLetters.includes(letter) ? letter : ''
    wordDisplay.appendChild(square)
  })
}

const winCheck = () => {
  const checkWin = currentWord
    .split('')
    .every((letter) => correctLetters.includes(letter))
  console.log(checkWin)
  if (checkWin) {
    console.log(`you won`)
    winCount += 1
    keyboard.forEach((letter) => {
      letter.setAttribute('disabled', '')
    })
  }
}

const lossCheck = () => {
  if (clickCount === 10) {
    console.log(`you lose`)
    lossCount += 1
    keyboard.forEach((letter) => {
      letter.setAttribute('disabled', '')
    })
  }
}

const randomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length) // Generate a random index
  currentWord = words[randomIndex].toUpperCase() // Select the word at that index and convert to uppercase
  console.log(`Current Word: ${currentWord}`) // Debugging log to check the current word
}

const splitWord = () => {
  currentWord = currentWord.split('') // Split the word into an array of letters
  console.log(currentWord)
}

const retryGame = () => {
  keyboard.forEach((letter) => {
    letter.removeAttribute('disabled')
  })
  clickedLetters = []
  correctLetters = []
  clickCount = 0
  init() // Reinitialize the game
}

const displaySquares = () => {
  wordDisplay.innerHTML = '' // Clear existing squares
  const squaresCount = currentWord.length
  for (let i = 0; i < squaresCount; i++) {
    const squareDiv = document.createElement('div')
    squareDiv.classList.add('square')
    wordDisplay.appendChild(squareDiv) // Create squares for the letters of the word
  }
}

const init = () => {
  randomWord()
  splitWord()
  displaySquares() // Create squares once during initialization
}

const handleGuess = (event) => {
  clickingLetter(event)
  renderWord() // Update the squares based on correct letters
  winCheck()
  lossCheck()
  scoreDisplay()
}

// Initialize the game
init()

// -------------------------------Event listeners-------------------------------------//
startGameBtn.addEventListener('click', storeUsername)
keyboard.forEach((letter) => {
  letter.addEventListener('click', handleGuess)
})
retryBtn.addEventListener('click', retryGame)

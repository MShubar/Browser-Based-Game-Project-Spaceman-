// -------------------------------------Variables---------------------------------------//
let username
let clickedLetters = []
let winCount = 0
let lossCount = 0
let currentWord
// -------------------------------------Constants----------------------------------------//
const words = ['hi', 'hey']

// ---------------------------------Chashed elements-------------------------------------//
// 1
const startGameBtn = document.querySelector('#startgame')
const usernameInput = document.querySelector('#inputusername')
const messageDisplay = document.querySelector('#messagedisplay')
//
// 2
const keyboard = document.querySelectorAll('.keyboard')
//
// 3
const winDisplay = document.querySelector('#wincount')
const lossDisplay = document.querySelector('#losscount')
// ---------------------------------Functions-------------------------------------------//
// 1
const storeUsername = (event) => {
  console.log(event.target.id)
  username = usernameInput.textContent
  if (username !== '') {
    user
  } else {
  }
}
//
// 2
const handleGuess = (event) => {
  clickedLetter = event.target.id
  clickedLetters.push(clickedLetter)
  event.target.setAttribute('disabled', '')
  console.log(clickedLetters)
  scoreDisplay()
}
//
// 3
const scoreDisplay = () => {
  winDisplay.textContent = winCount
  lossDisplay.textContent = lossCount
}
//
// 5
const renderWord = clickedLetters.some((clickedLetter, index) => {})
//
// 6
const winCheck = () => {}
//
//
const randomWord = () => {
  currentWord = words[parseInt(Math.random() * 3)]
  console.log(currentWord)
}
// -------------------------------Event Listerners-------------------------------------//
randomWord()

// 1
startGameBtn.addEventListener('click', storeUsername)
//
// 2
keyboard.forEach((letter) => {
  letter.addEventListener('click', handleGuess)
})
//

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
// done
const storeUsername = (event) => {
  let username = usernameInput.value
  if (username !== '') {
    messageDisplay.textContent = username
  } else {
    alert('Please enter a username')
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
// done
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
// done
const randomWord = () => {
  currentWord = words[parseInt(Math.random() * 2)]
}
//
//
const init = () => {
  randomWord()
}
// -------------------------------Event Listerners-------------------------------------//

// 1
startGameBtn.addEventListener('click', storeUsername)
//
// 2
keyboard.forEach((letter) => {
  letter.addEventListener('click', handleGuess)
})
//

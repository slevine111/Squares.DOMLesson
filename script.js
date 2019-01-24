const colors = ['blue', 'green', 'yellow', 'orange']
let individualDiv
let newButton
const hideSquaresButton = document.querySelector('#Hide-Squares')
const showSquaresButton = document.querySelector('#Show-Squares')
const squareContainer = document.querySelector('#square-container')
const squareContainerWidth = squareContainer.offsetWidth
const numberOfBoxes = colors.length
const calculatedMargin =
  ((1 - 0.08 * numberOfBoxes - (2 * 2 * numberOfBoxes) / squareContainerWidth) *
    100) /
  (numberOfBoxes * 2)

colors.forEach(color => {
  individualDiv = document.createElement('div')
  individualDiv.classList.add('square')
  individualDiv.style.backgroundColor = color
  individualDiv.style.margin = `0 ${calculatedMargin}%`

  individualDiv.id = color
  squareContainer.appendChild(individualDiv)

  newButton = document.createElement('button')
  newButton.textContent = `Toggle ${color
    .slice(0, 1)
    .toUpperCase()}${color.slice(1)}`
  //newButton.classList.add('button')
  document.body.insertBefore(newButton, document.querySelector('script'))

  newButton.addEventListener('click', () => {
    const currentBox = document.querySelector(`#${color}`)
    if (currentBox.style.backgroundColor !== 'white') {
      currentBox.style.backgroundColor = 'white'
      currentBox.style.border = 'none'
    } else {
      currentBox.style.backgroundColor = color
      currentBox.style.border = '2px solid black'
    }
    //.classList.toggle('hide-square')
  })
})

const firstColorBox = document.querySelector(`#${colors[0]}`)

squareContainer.style.height = `${firstColorBox.offsetWidth}px`

let allCreatedSquares = document.querySelectorAll('.square')

showSquaresButton.addEventListener('click', () => {
  allCreatedSquares.forEach(square => {
    square.style.backgroundColor = square.id
    square.style.border = '2px solid black'
  })
})

hideSquaresButton.addEventListener('click', () => {
  allCreatedSquares.forEach(square => {
    square.style.backgroundColor = 'white'
    square.style.border = 'none'
  })
})

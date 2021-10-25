"use strict"

import {
  createGrid,
  drawBoard,
  drawFruit,
  initializeSnake,
  checkIfEating,
  moveSnake,
} from "./mainFunctions.mjs"

createGrid(10, 7)

const step = () => {
  if (!hasLost) {
    moveSnake()
    checkIfEating()
    drawFruit()
    drawBoard()
  }
  if (hasLost) clearInterval(gameTick)
}

const gameTick = setInterval(step, 500)

const startGame = () => {
  initializeSnake()
  drawFruit()
  drawBoard()
}

//this looks as messy as my room
document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") {
    if (snake.direction === directions[3]) snake.direction = directions[0]
    else snake.direction = directions[directions.indexOf(snake.direction) + 1]
  }
  if (e.key === "ArrowRight") {
    if (snake.direction === directions[0]) snake.direction = directions[3]
    else snake.direction = directions[directions.indexOf(snake.direction) - 1]
  }
})

startGame()

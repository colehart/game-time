const Game = require('./Game');
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
let game = new Game(ctx);
const score = document.querySelector('.js-game-score');
const highScore = document.querySelector('.js-high-score');
const gameLevel = document.querySelector('.js-game-level');
let gameSpeed = 120;

document.addEventListener('keydown', handleKeyPress);

pullHighScore();
window.requestAnimationFrame(timeOut);

function timeOut(event) {
  if (!game.paused) {
    setTimeout(gameLoop, gameSpeed);
  } else {
    setTimeout(timeOut, gameSpeed);
  };
};

function gameLoop() {
  score.innerText = game.score;

  if (game.isOver()) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    printGameOver();
    checkHighScore();

    //compare high score, update levels

  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (parseInt(gameLevel.innerText) !== game.level) {
      gameLevel.innerText = game.level;
      gameSpeed -= 5;
      console.log(gameSpeed)
    }
    game.handleSnake(game.snake);
    window.requestAnimationFrame(timeOut);
  };
};

function printGameOver() {
  ctx.font = '4rem "Superscript"';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'red';
  ctx.fillText('Game Over', 250, 250);
  printNewGame();
};

function printNewGame() {
  ctx.font = '2rem "VT323"';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'red';
  ctx.fillText('Click here to start new game', 250, 300)
  canvas.addEventListener('click', makeNewGame);
}

function makeNewGame() {
  game = new Game(ctx);
  gameSpeed = 120;
  gameLoop();
}

function pullHighScore() {
  let currentHighScore = JSON.parse(localStorage.getItem(highScore)) || 0;
  highScore.innerText = currentHighScore
};

function checkHighScore() {
  if (parseInt(highScore.innerText) < game.score) {
    highScore.innerText = game.score;
    localStorage.setItem(highScore, JSON.stringify(game.score));
  };
};

function handleKeyPress(e) {
  game.handleKeyPress(e);
};
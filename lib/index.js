const Game = require('./Game');
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const score = document.querySelector('.js-game-score');
const highScore = document.querySelector('.js-high-score');

document.addEventListener('keydown', handleKeyPress);

pullHighScore();
window.requestAnimationFrame(timeOut);

function timeOut(event) {
  if (!game.paused) {
    setTimeout(gameLoop, 100);
  } else {
    setTimeout(timeOut, 100);
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
    game.handleSnake(game.snake);
    window.requestAnimationFrame(timeOut);
  };
};

function printGameOver() {
  ctx.font = '4rem "Superscript"';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'red';
  ctx.fillText('Game Over', 250, 250);
};

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
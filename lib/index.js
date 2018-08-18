const Game = require('./Game');
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const score = document.querySelector('.js-game-score');
const highScore = document.querySelector('.js-high-score');

// window.addEventListener('keydown', checkKeys);

pullHighScore();

// Start animation loop
window.requestAnimationFrame(timeOut);

function checkKeys(event) {
  console.log('checkKeys');
  if (event.type === 'keydown' && event.key === 'ArrowRight' ||
      event.key === 'ArrowUp' ||
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowDown') {
    game.paused = false;
    timeOut();
  } else {
    window.setTimeout(checkKeys(event), 1000);
  };
};

function timeOut(event) {
  if (!game.paused) {
    console.log('timeout if')
    setTimeout(gameLoop, 100);
  } else {
    console.log('timeout else')
    clearTimeout();
    window.setTimeout(checkKeys(event), 1000);
  };
};

function gameLoop() {
  score.innerText = game.score;

  if (game.isOver()) {
    printGameOver();
    checkHighScore();
    //compare high score, update lives, etc.

  } else {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw this frame
    game.animate();
    window.requestAnimationFrame(timeOut);
  // prepare to draw next frame
  }
}

function printGameOver() {
  ctx.font = '4rem "Superscript"';
  ctx.textAlign = 'center';
  ctx.fillText('Game Over', 250, 250);
}

function pullHighScore() {
  let currentHighScore = JSON.parse(localStorage.getItem(highScore)) || 0;
  highScore.innerText = currentHighScore
}

function checkHighScore() {
  if (parseInt(highScore.innerText) < game.score) {
    highScore.innerText = game.score;
    localStorage.setItem(highScore, JSON.stringify(game.score));
  }
}

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const score = document.querySelector('.js-game-score');

// Start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop () {
  score.innerText = game.score;

  if (game.isOver()) {
    ctx.font = "2rem 'Superscript' serif";
    ctx.textAlign = 'center';
    ctx.fillText('Game Over', 250, 250);
    //compare high score, update lives, etc.

  } else {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw this frame
    game.animate();
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop)
}

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

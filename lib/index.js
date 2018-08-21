const Game = require('./Game');
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
let game = new Game(ctx);
const gameScore = document.querySelector('.js-game-score');
let highScoreList = document.querySelector('.js-high-score-list');
const gameLevel = document.querySelector('.js-game-level');
let gameSpeed = 120;

document.addEventListener('keydown', handleKeyPress);

pullHighScore();
window.requestAnimationFrame(timeOut);

function timeOut() {
  if (!game.paused) {
    setTimeout(gameLoop, gameSpeed);
  } else {
    setTimeout(timeOut, gameSpeed);
  }
}

function gameLoop() {
  gameScore.innerText = game.score;

  if (game.isOver()) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    printGameOver();
    checkHighScore(game.score);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (parseInt(gameLevel.innerText) !== game.level) {
      gameLevel.innerText = game.level;
      gameSpeed -= 5;
    }
    game.handleSnake(game.snake);
    window.requestAnimationFrame(timeOut);
  }
}

function printGameOver() {
  ctx.font = '4rem "Superscript"';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'red';
  ctx.fillText('Game Over', 250, 250);
  printNewGame();
}

function printNewGame() {
  ctx.font = '2rem "VT323"';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'red';
  ctx.fillText('Click here to start new game', 250, 300);
  canvas.addEventListener('click', makeNewGame);
}

function makeNewGame() {
  game = new Game(ctx);
  gameSpeed = 120;
  gameLoop();
}

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

function parseStorage() {
  return JSON.parse(localStorage.getItem('highScoreList'));
}

function generateFakeScores() {
  const fakeHighScores = [];
  const fakeInits = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const fakeScores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  fakeInits.forEach((init, index) => {
    fakeHighScores.push({initials: init.repeat(3),
      score: fakeScores[index]});
  });

  return fakeHighScores;
}

function pullHighScore() {
  let currentHighScoreList = parseStorage() || generateFakeScores();

  generateHighScoreList(currentHighScoreList);
}

function generateHighScoreList(currentList) {
  highScoreList.innerHTML = '';
  localStorage.setItem('highScoreList', JSON.stringify(currentList));
  currentList.forEach((item, index) => {
    highScoreList.innerHTML +=  `<li class="place-${index}">
                        <span class="initials">${item.initials}</span>
                        <span class="score">${item.score}</span>
                      </li>`;
  });
}

function checkHighScore(currentScore) {
  let currentHighScoreList = parseStorage();

  spliceNewScore(currentScore, currentHighScoreList);
}

function spliceNewScore(currentScore, currentList) {
  let spliceBegin = currentList.findIndex((item) => {
    return item.score < currentScore;
  });

  if (spliceBegin > -1) {
    let message = 'You earned a high score! Please enter your initials.';
    let defaultInits = 'AAA';
    let newInitials = prompt(message, defaultInits).toUpperCase().slice(0, 3);
    let newHighScoreObject = {
      initials: newInitials || defaultInits,
      score: currentScore
    };

    currentList.splice(spliceBegin, 0, newHighScoreObject);
    currentList.pop();
    setNewHighScoreList(currentList);
  }
}

function setNewHighScoreList(currentList) {
  localStorage.clear();
  generateHighScoreList(currentList);
}
const Game = require('./Game');
// const Scores = require('./Scores');
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

function timeOut(event) {
  if (!game.paused) {
    setTimeout(gameLoop, gameSpeed);
  } else {
    setTimeout(timeOut, gameSpeed);
  };
};

function gameLoop() {
  gameScore.innerText = game.score;

  if (game.isOver()) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    printGameOver();
    checkHighScore(game.score);
    //compare high score

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

function handleKeyPress(e) {
  game.handleKeyPress(e);
};

function pullHighScore() {
  const fakeScores = [
    {initials: 'AAA', score: 10},
    {initials: 'BBB', score: 9},
    {initials: 'CCC', score: 8},
    {initials: 'DDD', score: 7},
    {initials: 'EEE', score: 6}
  ];
  let currentHighScoreList = JSON.parse(localStorage.getItem(highScoreList)) || fakeScores;
  localStorage.setItem('highScoreList', JSON.stringify(currentHighScoreList));
  generateHighScoreList(currentHighScoreList);
};

function generateHighScoreList(currentList) {
  currentList.forEach((item, index) => {
    highScoreList.innerHTML +=  `<li class="place-${index}">
                        <span class="initials">${item.initials}</span>
                        <span class="score">${item.score}</span>
                      </li>`
  });
};

function checkHighScore(currentScore) {
  let currentHighScoreList = JSON.parse(localStorage.getItem('highScoreList'));
  console.log(currentScore + " this is the current score")
  let newScoreList = currentHighScoreList.map((item, index, array) => {
    if (currentScore > item.score) {
      array.splice(index, 0, item);
    }
    array.pop;
    console.log(array + ' popped array')
  });

  console.log(newScoreList);

  if (parseInt(highScoreList.innerText) < game.score) {
    highScoreList.innerText = game.score;

    localStorage.setItem(highScoreList, JSON.stringify(game.score));
  };
};


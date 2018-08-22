const Snake = require('./Snake');
const Food = require('./Food');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.snake = new Snake(50, 250, 25, 25, 'green');
    this.food = this.makeFood();
    this.score = 0;
    this.level = 1;
    this.keyPad = {
      'ArrowUp': () => this.preventDoubleBack(false, 0, -1),
      'ArrowRight': () => this.preventDoubleBack(false, 1, 0),
      'ArrowDown': () => this.preventDoubleBack(false, 0, 1),
      'ArrowLeft': () => this.preventDoubleBack(false, -1, 0),
      'Space': () => this.togglePause()
    };
  }

  makeFood() {
    return new Food(
      (Math.round(Math.round(Math.random() * 475) / 25) * 25),
      (Math.round(Math.round(Math.random() * 475) / 25) * 25),
      25, 25, 'red');
  }

  placeFood() {
    let newFood = this.makeFood();

    for (let i = 0; i < this.snake.tail.length - 1; i++) {
      if (newFood.isCollidingWith(this.snake.tail[i])) {
        return this.placeFood();
      }
    }

    return newFood;
  }

  handleSnake(snake) {
    const { canvas } = this.ctx;

    this.checkTailCollision(snake);
    this.checkCollision(snake, canvas);
  }

  checkTailCollision(snake) {
    for (let i = 0; i < snake.tail.length - 1; i++) {
      if (snake.isCollidingWith(snake.tail[i])) {
        this.endGame();
      }
    }
  }

  checkCollision(snake, canvas) {
    if (snake.isCollidingWithWall(canvas.width, canvas.height)) {
      this.endGame();
    } else if (snake.isCollidingWith(this.food)) {
      this.eatFood(snake);
    } else {
      this.populate(snake);
    }
  }

  endGame() {
    this.playGameOverSound();
    this.gameOver = true;
  }

  playGameOverSound() {
    const audio = new Audio('./assets/sounds/explosion.wav');

    audio.play();
  }

  eatFood(snake) {
    this.playNomSound();
    this.score++;
    this.checkLevel();
    this.growSnake(snake);
    this.food = this.placeFood();
  }

  playNomSound() {
    let nomSounds = Math.floor(Math.random() * 4 + 1);
    const audio = new Audio(`./assets/sounds/nom${nomSounds}.wav`);

    audio.play();
  }

  checkLevel() {
    if (this.score % 5 === 0) {
      this.level++;
    }
  }

  growSnake(snake) {
    snake.tailLength += 2;
    this.populate(snake);
  }

  populate(snake) {
    snake.move();
    this.animate();
  }

  animate() {
    this.food.draw(this.ctx);
    this.snake.draw(this.ctx);
  }

  handleKeyPress(e) {
    this.preventArrowSpaceDefaultOnly(e);
    const property = `${e.code}`;

    if (this.keyPad[property] && property !== 'Space') {
      this.snake.pendingDirection = this.keyPad[property]();
    } else if (property === 'Space') {
      this.keyPad[property]();
    }
  }

  preventArrowSpaceDefaultOnly(e) {
    if (e.code === 'ArrowRight' ||
        e.code === 'ArrowLeft' ||
        e.code === 'ArrowUp' ||
        e.code === 'ArrowDown' ||
        e.code === 'Space') {
      e.preventDefault();
    }
  }

  preventDoubleBack(gamePause, pendX, pendY) {
    const pendingDir = {
      dx: this.snake.dx,
      dy: this.snake.dy
    };

    if (pendX !== (this.snake.dx * -1) || pendY !== (this.snake.dy * -1)) {
      this.paused = gamePause;
      pendingDir.dx = pendX;
      pendingDir.dy = pendY;
    }

    return pendingDir;
  }

  togglePause() {
    this.paused = !this.paused;
  }
};
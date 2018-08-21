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

    this.checkWallCollision(snake, canvas);
  }

  checkTailCollision(snake) {
    for (let i = 0; i < snake.tail.length - 1; i++) {
      if (snake.isCollidingWith(snake.tail[i])) {
        this.endGame();
      }
    }
  }

  checkWallCollision(snake, canvas) {
    if (snake.isCollidingWithWall(canvas.width, canvas.height)) {
      this.endGame();
    } else if (snake.isCollidingWith(this.food)) {
      this.eatFood(snake);
    } else {
      this.populate(snake);
    }
  }

  eatFood(snake) {
    this.playNomSound();
    this.score++;
    this.checkLevel();
    this.growSnake(snake);
    this.food = this.placeFood();
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

  endGame() {
    this.gameOver = true;
    this.playGameOverSound();
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  handleKeyPress(e) {
    this.preventArrowSpaceDefaultOnly(e);

    const pendingDirection = {
      dx: this.snake.dx,
      dy: this.snake.dy
    };

    if (e.key === 'ArrowRight' && this.snake.dx !== -1) {
      this.paused = false;
      pendingDirection.dx = 1;
      pendingDirection.dy = 0;

    } else if (e.key === 'ArrowLeft' && this.snake.dx !== 1) {
      this.paused = false;
      pendingDirection.dx = -1;
      pendingDirection.dy = 0;

    } else if (e.key === 'ArrowDown' && this.snake.dy !== -1) {
      this.paused = false;
      pendingDirection.dx = 0;
      pendingDirection.dy = 1;

    } else if (e.key === 'ArrowUp' && this.snake.dy !== 1) {
      this.paused = false;
      pendingDirection.dx = 0;
      pendingDirection.dy = -1;

    } else if (e.code === 'Space') {
      this.togglePause();
    }

    this.snake.pendingDirection = pendingDirection;
  }

  preventArrowSpaceDefaultOnly(e) {
    if (e.key === 'ArrowRight' ||
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowUp' ||
        e.key === 'ArrowDown' ||
        e.code === 'Space') {
      e.preventDefault();
    }
  }

  playNomSound() {
    let nomSounds = Math.floor(Math.random() * 4 + 1);
    const audio = new Audio(`./assets/sounds/nom${nomSounds}.wav`);

    audio.play();
  }

  playGameOverSound() {
    const audio = new Audio('./assets/sounds/explosion.wav');

    audio.play();
  }

};
const Snake = require('./Snake');
const Food = require('./Food');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.snake = new Snake(50, 250, 25, 25, 'green');
    this.food = new Food(
      (Math.round(Math.round(Math.random() * 475) / 25) * 25),
      (Math.round(Math.round(Math.random() * 475) / 25) * 25),
      25, 25, 'red');
    this.score = 0;
  };

  handleSnake(snake) {
    const { canvas } = this.ctx;
    let _this = this;

    const body = snake.tail.filter((chunk, chunkIndex) => {
      if(chunkIndex > 0) return chunk;
    });

    body.forEach((chunk) => {
      if (snake.isCollidingWith(chunk)) _this.endGame();
    });

    if (snake.isCollidingWithWall(canvas.width, canvas.height)) {
      this.endGame();
    } else if (snake.isCollidingWith(this.food)) {
      this.score++;
      snake.tailLength += 2;
      snake.move();
      this.animate();
      this.food = new Food(
          (Math.round(Math.round(Math.random() * 475) / 25) * 25),
          (Math.round(Math.round(Math.random() * 475) / 25) * 25),
          25, 25, 'red');
    } else {
      snake.move();
      this.animate();
    };
  };

  animate() {
    const { canvas } = this.ctx;
    this.food.draw(this.ctx);
    this.snake.draw(this.ctx);
  };

  endGame() {
    this.gameOver = true;
  };

  isOver() {
    return this.gameOver;
  };

  togglePause() {
    this.paused = !this.paused;
  };

  handleKeyPress(e) {
    const direction = {
      dx: this.snake.dx,
      dy: this.snake.dy
    };

    if (e.key === 'ArrowRight' && this.snake.dx !== -1) {
      e.preventDefault();
      this.paused = false;
      direction.dx = 1;
      direction.dy = 0;

    } else if (e.key === 'ArrowLeft' && this.snake.dx !== 1) {
      e.preventDefault();
      this.paused = false;
      direction.dx = -1;
      direction.dy = 0;

    } else if (e.key === 'ArrowDown' && this.snake.dy !== -1) {
      e.preventDefault();
      this.paused = false;
      direction.dx = 0;
      direction.dy = 1;

    } else if (e.key === 'ArrowUp' && this.snake.dy !== 1) {
      e.preventDefault();
      this.paused = false;
      direction.dx = 0;
      direction.dy = -1;

    } else if (e.code === 'Space') {
      e.preventDefault();
      this.togglePause();
    };

    this.snake.changeDirection(direction) ;
  };
};
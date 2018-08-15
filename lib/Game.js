const Snake = require('./Snake');
const Food = require('./Food');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.snake = new Snake(250, 250, 25, 25, 'red', 'black');

    this.food = new Food(Math.floor(Math.random() * 475 + 1), Math.floor(Math.random() * 475 + 1), 15, 15, 'green', 'black');
  }

  animate() {
    const { canvas } = this.ctx;
    this.handleSnake(this.snake);
    this.snake.draw(this.ctx);
    this.food.draw(this.ctx);
  }

  handleSnake(snake) {
    const { canvas } = this.ctx;

    if (snake.isCollidingWithWall(canvas.width, canvas.height)) {
      this.endGame();
    } else {
      snake.move();
    }
  }

  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  handleKeyPress(e) {

    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight') {
      direction.dx = 1;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
    }

    this.snake.changeDirection(direction) ;
  }

}
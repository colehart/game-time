const Snake = require('./Snake');
const Food = require('./Food');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.snake = new Snake(250, 250, 25, 25, 'green', 'black');
    this.food = new Food(Math.ceil(Math.floor(Math.random() * 475 + 1) / 25) * 25, Math.ceil(Math.floor(Math.random() * 475 + 1) / 25) * 25, 25, 25, 'red', 'black');
    this.score = 0;
  }

  animate() {
    const { canvas } = this.ctx;
    this.handleSnake(this.snake);
    this.snake.draw(this.ctx);
    this.food.draw(this.ctx);
    console.log(this.food);
    console.log(this.snake);
  }

  handleSnake(snake) {
    const { canvas } = this.ctx;

    if (snake.isCollidingWithWall(canvas.width, canvas.height)) {
      this.endGame();
    } else if (snake.isCollidingWith(this.food)) {
      this.score++;
      snake.move();
      this.food = new Food(Math.ceil(Math.floor(Math.random() * 475 + 1) / 25) * 25, Math.ceil(Math.floor(Math.random() * 475 + 1) / 25) * 25, 25, 25, 'red', 'black');
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
      dx: this.snake.dx,
      dy: this.snake.dy
    };

    if (e.key === 'ArrowRight' && this.snake.dx !== -1) {
      e.preventDefault()
      direction.dx = 1;
      direction.dy = 0;

    } else if (e.key === 'ArrowLeft' && this.snake.dx !== 1) {
      e.preventDefault()      
      direction.dx = -1;
      direction.dy = 0;

    } else if (e.key === 'ArrowDown' && this.snake.dy !== -1) {
      e.preventDefault()
      direction.dx = 0;
      direction.dy = 1;

    } else if (e.key === 'ArrowUp' && this.snake.dy !== 1) {
      e.preventDefault()
      direction.dx = 0;
      direction.dy = -1;

    } else if (e.code === 'Space') {
      e.preventDefault()
      this.togglePause();
      direction.dx = 0;
      direction.dy = 0;
    }

    this.snake.changeDirection(direction) ;
  }

}
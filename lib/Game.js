const Snake = require('./Snake');
const Food = require('./Food');
const GamePiece = require('./GamePiece')

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.snake = new Snake(50, 250, 25, 25, 'green', 'green');
    this.food = new Food(Math.ceil(Math.floor(Math.random() * 475 + 1) / 25) * 25, Math.ceil(Math.floor(Math.random() * 475 + 1) / 25) * 25, 25, 25, 'red', 'black');
    this.score = 0;
  }

  animate() {
    const { canvas } = this.ctx;
    this.handleSnake(this.snake);
    this.snake.draw(this.ctx);
    this.food.draw(this.ctx);
  }

  handleSnake(snake) {
    const { canvas } = this.ctx;
    let _this = this;
    snake.tailLength.forEach(function(chunk) {
      let object = {x: chunk[0], y: chunk[1], height: chunk[2], width: chunk[3]}
      if (snake.isCollidingWith(object)) {
        _this.endGame()
      }
    })

    if (snake.isCollidingWithWall(canvas.width, canvas.height))  {
      this.endGame();
      console.log(this)

    } else if (snake.isCollidingWith(this.food)) {
      this.score++;
      snake.tail++;
      console.log(snake.tail)
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
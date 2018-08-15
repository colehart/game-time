const { assert } = require('chai');
const Game = require('../lib/Game');
const Snake = require('../lib/Snake');
const Food = require('../lib/Food');

const ctx = {
  canvas: {
    width: 500,
    height: 500
  }
}

describe('Game', () => {
  let game;
  let snake;

  beforeEach(() => {
    game = new Game(ctx);
    snake = game.snake;
  });

//how to test random placement of food
  it('should take properties', () => {
    assert.deepEqual(game, {
      ctx: ctx,
      paused: false,
      gameOver: false,
      snake: new Snake(250, 250, 25, 25, 'red', 'black'),
      food: game.food
    });
  });

  it('should allow snake to collide with walls', () => {
    snake.x = ctx.canvas.width;
    assert.isTrue(snake.isCollidingWithWall(ctx.canvas.width, ctx.canvas.height));
  })

  it('should end game when snake collides with wall', () => {
    snake.x = ctx.canvas.width;
    game.handleSnake(snake);

    assert.isTrue(game.gameOver);
  })

  it('should allow snake to move if not colliding with walls', () => {
    game.handleSnake(snake);

    assert.isFalse(game.gameOver);
  })

  it('should allow snake to changeDirection', () => {
    assert.equal(snake.dy, 0);
    let e = { key: 'ArrowDown' };
    game.handleKeyPress(e);

    assert.equal(snake.dy, 1);
  })
})
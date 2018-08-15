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

  it('should know if the game is over', () => {
    assert.isFalse(game.isOver());

    snake.x = ctx.canvas.width;
    game.handleSnake(snake);

    assert.isTrue(game.isOver());
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

  it('should not allow snake to reverse direction', () => {
    assert.equal(snake.dx, 1);

    let e = { key: 'ArrowLeft' };
    game.handleKeyPress(e);

    assert.equal(snake.dx, 1);
  })

  it('should pause game on spacebar hit', () => {
    assert.isFalse(game.paused);

    let e = { code: 'Space' };
    game.handleKeyPress(e);

    assert.isTrue(game.paused);
  })

  it('should not allow snake to move when game is paused', () => {
    assert.equal(snake.dx, 1)

    let e = { code: 'Space' };
    game.handleKeyPress(e);

    assert.equal(snake.dx, 0);
    assert.equal(snake.dy, 0);
  })

  it('should not allow any non-Spacebar key to pause game', () => {
    assert.isFalse(game.paused);

    let e = { key: 's' };
    game.handleKeyPress(e);

    assert.isFalse(game.paused);
  })
})
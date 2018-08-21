//write test for randomized Food in handleSnake function

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
  let newFood;

  beforeEach(() => {
    game = new Game(ctx);
    snake = game.snake;
    newFood = game.food;
  });

  it('should allow snake to collide with walls', () => {
    snake.x = ctx.canvas.width;
    assert.isTrue(snake.isCollidingWithWall(ctx.canvas.width, ctx.canvas.height));
  })

  it('should randomly place food on the game space', () => {
    const food1 = game.makeFood();

    assert.notEqual(newFood, food1);
  })

  it('should end game when snake collides with wall', () => {
    snake.x = ctx.canvas.width;
    game.handleSnake(snake);

    assert.isTrue(game.gameOver);
  })

  it('should know if the game is over', () => {
    assert.isFalse(game.gameOver);

    snake.x = ctx.canvas.width;
    game.handleSnake(snake);

    assert.isTrue(game.gameOver);
  })

  it('should not allow snake to reverse direction', () => {
    assert.equal(snake.dx, 1);

    let e = Event.createEvent({ code: 'ArrowLeft' });
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
    assert.equal(snake.dx, 1);

    let e = { code: 'Space' };
    game.handleKeyPress(e);

    assert.equal(snake.dx, 0);
    assert.equal(snake.dy, 0);
  })

  it('should not allow any non-Spacebar key to pause game', () => {
    assert.isFalse(game.paused);

    let e = { code: 's' };
    game.handleKeyPress(e);

    assert.isFalse(game.paused);
  })

  it('should start with score of 0', () => {
    assert.equal(game.score, 0);
  })

  it('should increment score with every food eaten', () => {
    game.eatFood(snake);
    assert.equal(game.score, 1);
  })
})
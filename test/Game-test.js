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

  it('should take properties', () => {
    assert.deepEqual(game, {
      ctx: ctx,
      paused: false,
      gameOver: false,
      snake: new Snake(250, 250, 25, 25, 'red', 'black'),
      food: game.food
    });
  });

  it('should collide with walls', () => {
    snake.x = ctx.canvas.width;
    assert.isTrue(snake.isCollidingWithWall(ctx.canvas.width, ctx.canvas.height));    
  })

  it('should end game when snake collides with wall', () => {
    snake.x = ctx.canvas.width;
    game.handleSnake(snake);

    assert.isTrue(game.gameOver);
  })

  it.skip('should move', () => {

  })

  it.skip('should be able to changeDirection', () => {})
})
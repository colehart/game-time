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

  beforeEach(() => {
    game = new Game(ctx);
  });

  it('should take properties', () => {
    assert.equal(game, {
      ctx: ctx,
      paused: false,
      gameOver: false,
      snakes: [
        new Snake(250, 250, 25, 25, 'red', 'black')
      ],
      food: [
        game.food
      ]
    });
  });

  it.skip('should collide with walls', () => {})

  it('should end game when snake collides with wall', () => {
    const snake = game.snakes[0];
    snake.x = ctx.canvas.width;
    game.handleSnake(snake);

    assert.isTrue(game.gameOver);
  })

  it.skip('should be able to move', () => {})
  it.skip('should be able to changeDirection', () => {})
})
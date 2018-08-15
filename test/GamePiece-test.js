const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece')

describe('GamePiece', () => {
  let gamePiece;

  beforeEach(() => {
    gamePiece = new GamePiece(250, 250, 25, 25, 'green');
  });

  it('should take properties', () => {
    assert.deepEqual(gamePiece, {
      x: 250,
      y: 250,
      height: 25,
      width: 25,
      color: 'green',
      dx: 1,
      dy: 0,
      dxv: 2,
      dyv: 2
    });
  });

  it('should collide with a second gamepiece that occupies the same space', () => {
    const gamePiece2 = new GamePiece(250, 250, 25, 25, 'red');
    const isColliding = gamePiece.isCollidingWith(gamePiece2);

    assert.isTrue(isColliding)
  });

  it('should not collide with a second gamepiece that does not occupy the same space', () => {
    const gamePiece2 = new GamePiece(130, 130, 10, 10, 'red');
    const isColliding = gamePiece.isCollidingWith(gamePiece2);

    assert.isFalse(isColliding)
  });

  it.skip('should collide with walls', () => {

  });

  it.skip('should be able to move', () => {

  });

  it.skip('should be able to changeDirection', () => {

  });
});
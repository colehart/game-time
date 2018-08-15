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

  it('should collide with walls', () => {
    const ctx = {
      canvas: {
        width: 500,
        height: 500
      }
    }

    const { width, height } = ctx.canvas;
    assert.isFalse(gamePiece.isCollidingWithWall(width, height));
    gamePiece.x = ctx.canvas.width;

    assert.isTrue(gamePiece.isCollidingWithWall(width, height));
  });

  it('should be able to move', () => {
    assert.equal(gamePiece.x, 250)

    gamePiece.move();

    assert.equal(gamePiece.x, 252)
  });

  it('should allow gamePiece to changeDirection to Down', () => {
    assert.equal(gamePiece.dy, 0);

    const direction = {
      dx: gamePiece.dx,
      dy: gamePiece.dy
    };

    direction.dy = 1;
    gamePiece.changeDirection(direction);

    assert.equal(gamePiece.dy, 1);
  })

  it('should allow gamePiece to changeDirection to Up', () => {
    assert.equal(gamePiece.dy, 0);

    const direction = {
      dx: gamePiece.dx,
      dy: gamePiece.dy
    };

    direction.dy = -1;

    gamePiece.changeDirection(direction);

    assert.equal(gamePiece.dy, -1);
  })

  it('should allow gamePiece to changeDirection to Right', () => {
    gamePiece.dx = 0;

    const direction = {
      dx: gamePiece.dx,
      dy: gamePiece.dy
    };

    direction.dx = 1;

    gamePiece.changeDirection(direction);

    assert.equal(gamePiece.dx, 1);
  })

  it('should allow gamePiece to changeDirection to Left', () => {
    gamePiece.dx = 0;

    const direction = {
      dx: gamePiece.dx,
      dy: gamePiece.dy
    };

    direction.dx = -1;

    gamePiece.changeDirection(direction);

    assert.equal(gamePiece.dx, -1);
  })
});
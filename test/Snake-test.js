const { assert } = require('chai');
const Snake = require('../lib/Snake');

describe('Snake', () => {
  let snake;

  beforeEach(() => {
    snake = new Snake(250, 250, 25, 25, 'red')
  });

  it('should be able to create a snake', () => {
    assert.instanceOf(snake, Snake);
  });

  it('should be able to have properties', () => {
    assert.deepEqual(snake, {
      x: 250,
      y: 250,
      height: 25,
      width: 25,
      color: 'red',
      dx: 1,
      dy: 0,
      dxv: 25,
      dyv: 25,
      tail: [],
      tailLength: 5
    });
  });

  it('should be able to have different properties', () => {
    const snake2 = new Snake(300, 300, 25, 25, 'brown')

    assert.deepEqual(snake2, {
      x: 300,
      y: 300,
      height: 25,
      width: 25,
      color: 'brown',
      dx: 1,
      dy: 0,
      dxv: 25,
      dyv: 25,
      tail: [],
      tailLength: 5
    });
  });

  it('should be able to move', () => {
    assert.equal(snake.x, 250)

    snake.move();

    assert.equal(snake.x, 275)
  });

  it('should allow snake to changeDirection to Down', () => {
    assert.equal(snake.dy, 0);

    const direction = {
      dx: snake.dx,
      dy: snake.dy
    };

    direction.dy = 1;
    snake.changeDirection(direction);

    assert.equal(snake.dy, 1);
  })

  it('should allow snake to changeDirection to Up', () => {
    assert.equal(snake.dy, 0);

    const direction = {
      dx: snake.dx,
      dy: snake.dy
    };

    direction.dy = -1;

    snake.changeDirection(direction);

    assert.equal(snake.dy, -1);
  })

  it('should allow snake to changeDirection to Right', () => {
    snake.dx = 0;

    const direction = {
      dx: snake.dx,
      dy: snake.dy
    };

    direction.dx = 1;

    snake.changeDirection(direction);

    assert.equal(snake.dx, 1);
  })

  it('should allow snake to changeDirection to Left', () => {
    snake.dx = 0;

    const direction = {
      dx: snake.dx,
      dy: snake.dy
    };

    direction.dx = -1;

    snake.changeDirection(direction);

    assert.equal(snake.dx, -1);
  })

  it('should be able to add blocks to the snake', () => {
    snake.tail = [];

    snake.makeChunk()
    assert.equal(snake.tail.length, 1);
  }) 
});
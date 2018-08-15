const { assert } = require('chai');
const Snake = require('../lib/Snake');

describe('Snake', () => {
  let snake;

  beforeEach(() => {
    snake = new Snake(250, 250, 25, 25, 'red', 'black')
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
      borderColor: 'black',
      dx: 1,
      dy: 0,
      dxv: 2,
      dyv: 2
    });
  });

  it('should be able to have different properties', () => {
    const snake2 = new Snake(300, 300, 25, 25, 'brown', 'green')

    assert.deepEqual(snake2, {
      x: 300,
      y: 300,
      height: 25,
      width: 25,
      color: 'brown',
      borderColor: 'green',
      dx: 1,
      dy: 0,
      dxv: 2,
      dyv: 2
    });
  });
});
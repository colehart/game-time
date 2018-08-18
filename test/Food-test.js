const { assert } = require('chai');
const Food = require('../lib/Food');

describe('Food', () => {
  let food;

  beforeEach(() => {
    food = new Food(250, 250, 25, 25, 'red')
  });

  it('should be able to create a food', () => {
    assert.instanceOf(food, Food);
  });

  it('should be able to have properties', () => {
    assert.deepEqual(food, {
      x: 250,
      y: 250,
      height: 25,
      width: 25,
      color: 'red',
    });
  });

  it('should be able to have different properties', () => {
    const food2 = new Food(300, 300, 25, 25, 'brown')

    assert.deepEqual(food2, {
      x: 300,
      y: 300,
      height: 25,
      width: 25,
      color: 'brown',
    });
  });
});
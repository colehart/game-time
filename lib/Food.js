const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Food extends GamePiece {
  constructor(x, y, height, width, color) {
    // invoke parent class constructor
    super(x, y, height, width, color);
  }

  draw(ctx) {
    const {x, y, height, width } = this;

    // call parent class draw function
    super.draw(ctx);
  }
}
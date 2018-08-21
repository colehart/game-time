const GamePiece = require('./GamePiece');

module.exports = class Food extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color);
  }

  draw(ctx) {
    super.draw(ctx);
  }
};
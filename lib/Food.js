const GamePiece = require('./GamePiece');

module.exports = class Food extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color);
    this.x = this.randomPlacement(x);
    this.y = this.randomPlacement(y);
  }

  randomPlacement(axisValue) {
    return Math.round(Math.round(Math.random() * axisValue) / 25) * 25;
  }

  draw(ctx) {
    super.draw(ctx);
  }
};
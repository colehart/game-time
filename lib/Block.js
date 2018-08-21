const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Food extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    // invoke parent class constructor
    super(x, y, height, width, color);

    this.borderColor = borderColor;
  }

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    // call parent class draw function
    super.draw(ctx);

    // draw Food border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }
};
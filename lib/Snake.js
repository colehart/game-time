const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Snake extends GamePiece {
  constructor(x, y, height, width, color) {
    // invoke parent class constructor
    super(x, y, height, width, color);

    this.dx = 1;
    this.dy = 0;
    this.dxv = 25;
    this.dyv = 25;
  }

  draw(ctx) {
    const {x, y, height, width } = this;

    // call parent class draw function
    super.draw(ctx);
  }

  move() {
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dyv;
  }

  changeDirection(direction) {
    this.dx = direction.dx;
    this.dy = direction.dy;
  }
}
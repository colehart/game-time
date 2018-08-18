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
    this.tail = [];
    this.tailLength = 5;
  }

  draw(ctx) {
    const {x, y, height, width } = this;

    // call parent class draw function
    super.draw(ctx);

    this.tail.forEach((chunk) => {
      ctx.fillRect(chunk.x, chunk.y, chunk.height, chunk.width, chunk.color);
    });
  }

  makeChunk() {
    const chunk = {
      x: this.x,
      y: this.y,
      height: this.height,
      width: this.width,
      color: this.color
    };

    this.tail.push(chunk);
  }

  move() {
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dyv;

    this.makeChunk();

    if (this.tail.length === this.tailLength) {
      this.tail.shift();
    }
    console.log(this.tail);
  }

  changeDirection(direction) {
    this.dx = direction.dx;
    this.dy = direction.dy;
  }
}
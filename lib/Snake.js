const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Snake extends GamePiece {
  constructor(x, y, height, width, color, borderColor, tailLength) {
    // invoke parent class constructor
    super(x, y, height, width, color);

    this.borderColor = borderColor;
  } 

  draw(ctx) {
    const {x, y, height, width, borderColor, tailLength } = this;

    // call parent class draw function
    super.draw(ctx);

    // draw Snake border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);

    this.tailLength.forEach(function(i){
      ctx.fillRect(i[0], i[1], i[2], i[3], i[4])
    }); 
  }

  move() {
    this.tailLength.push([this.x, this.y, this.height, this.width, this.color])

    if (this.tailLength.length === this.tail) {
      this.tailLength.shift();
    }

    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dyv;
  }

  changeDirection(direction) {
    this.dx = direction.dx;
    this.dy = direction.dy;
  }
} 
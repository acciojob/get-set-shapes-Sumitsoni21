class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0 || !Number.isInteger(width) || !Number.isInteger(height)) {
      throw new Error("Width and height must be positive integers");
    }
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    if (side <= 0 || !Number.isInteger(side)) {
      throw new Error("Side must be a positive integer");
    }
    super(side, side);
  }

  getPerimeter() {
    // Since width = height = side
    return this.width * 4;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

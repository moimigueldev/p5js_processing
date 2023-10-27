class Ball {
  activeColor = '#0313fc';
  inactiveColor = '#fff';
  active = false;

  constructor(x, otherBall) {
    this.r = 50;
    this.otherBall = otherBall;

    this.pos = createVector(
      x === width ? x - this.r : x + this.r,
      height - this.r - 2
    );
  }

  update() {
    const dist = this.otherBall.pos.dist(this.pos);
  }

  show() {
    strokeWeight(2);
    stroke(this.active ? this.activeColor : this.inactiveColor);
    noFill();
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }

  moveLeft() {
    const dist = this.otherBall.pos.dist(this.pos);
    if (dist + this.r > this.otherBall.r) {
      this.pos.x -= 5;
    }

    if (this.pos.x - this.r > 0 && dist > this.otherBall.r + this.r) {
      this.pos.x -= 5;
    }
  }

  moveRight() {
    const dist = this.otherBall.pos.dist(this.pos);

    if (this.pos.x + this.r < width) {
      if (dist > this.otherBall.r + this.r) {
        this.pos.x += 5;
      }
      //   this.pos.x += 5;
    }
  }
}

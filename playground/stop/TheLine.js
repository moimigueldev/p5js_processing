class TheLine {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.point2 = createVector(this.pos.x, this.pos.y - height / 2);
  }

  update() {}

  show() {
    push();
    stroke(255);
    strokeWeight(3);
    line(this.pos.x, this.pos.y, this.point2.x, this.point2.y);
    pop();
  }
}

class Attractor {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.color = color(0, 0, 255);
  }

  show() {
    push();
    stroke(this.color);
    strokeWeight(10);
    point(this.pos.x, this.pos.y);
    pop();
  }
}

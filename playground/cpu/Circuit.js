class Circuit {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }

  update() {}

  show() {
    push();
    stroke(255);
    strokeWeight(2);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y - 100);
    pop();
  }
}

class TheRect {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.width = 30;
    this.height = 150;
    this.angle = 0;
    this.angleV = 0;
    this.angleA = 0.1;
  }

  update() {
    // this.angle += 1;
    this.angleV = constrain(this.angleV, -10, 10);
    this.angleV += map(mouseX, 0, width, -0.1, 0.1);
    this.angle += this.angleV;
  }

  show() {
    push();
    noFill();
    stroke(255);
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    rect(0, 0, this.width, this.height);
    pop();
  }
}

class Bird {
  constructor() {
    this.pos = createVector(50, height / 2);
    this.r = 32;
    this.vel = createVector();
    this.acc = createVector();
    this.gravity = createVector(0, 0.2);
    this.vel.limit(0.1);
    this.acc.limit(0.1);
  }

  update() {
    this.applyForce(this.gravity);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    stroke(255);
    noFill();
    strokeWeight(1);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.y + this.r >= height) {
      this.pos.y = height - this.r;
      this.vel.y = 0;
    }
  }
}

class Ball {
  constructor(x, y, other) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.gravity = createVector(0, 0.5);
    this.r = 30;
    this.other = other;
    console.log(other);
  }

  update() {
    this.applyForce(this.gravity);
    this.vel.add(this.acc);

    this.pos.add(this.vel);

    this.acc.mult(0);
  }

  show() {
    push();
    noFill();
    stroke(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    pop();
  }

  applyForce(force) {
    this.acc.add(force);
  }

  checkEdges() {
    if (this.pos.y + this.r > height) {
      this.vel.y = -this.vel.y;
      //   this.pos.y = height - this.r;
      //   if (Math.abs(this.vel.y) > 0.1) {
      //     this.vel.mult(0.9);
      //   }
    }

    if (this.pos.x + this.r > width) {
      this.pos.x = width - this.r;
      this.vel.x = -this.vel.x;
      this.vel.mult(0.9);
    }

    if (this.pos.x - this.r < 0) {
      this.pos.x = this.r;
      this.vel.x = -this.vel.x;
      this.vel.mult(0.9);
    }
  }
}

class TheBall {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.gravity = createVector(0, 0.1);
    this.r = 32;
  }
  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.applyForce(this.gravity);

    this.vel.add(this.acc);
    // this.vel.limit(5);

    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(0.99);
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y);
    noFill();
    stroke(255);
    strokeWeight(1);
    rotate(map(this.vel.heading(), 0, PI * 2, radians(-360), radians(360)));
    ellipse(0, 0, this.r * 2, this.r * 2);
    line(0, 0, 0, this.r);
    line(0, 0, 0, -this.r);
    pop();
  }

  edges() {
    if (this.pos.y + this.r >= height) {
      this.pos.y = height - this.r;
      this.vel.y = this.vel.y * -1;
    }

    if (this.pos.x + this.r >= width) {
      this.vel.x = -this.vel.x;
    }
    if (this.pos.x - this.r <= 0) {
      this.vel.x = -this.vel.x;
    }
  }
}

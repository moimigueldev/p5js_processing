class TheTri {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.applyForce(
      createVector(
        map(random(width), 0, width, -2, 2),
        map(random(height), 0, height, -2, 2)
      )
    );

    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);

    this.acc.mult(0);
  }

  show() {
    push();
    noFill();
    stroke(255);
    strokeWeight(0.5);
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    triangle(0 + 10, 0, 0 - 10, 0 + 10 / 2, 0 - 10, 0 - 10 / 2);
    pop();
  }

  edges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
    }
  }
}

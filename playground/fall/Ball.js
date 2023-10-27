class TheBall {
  constructor() {
    this.pos = createVector(random(width / 2), random(width / 2), balls);
    this.r = 35;
    this.acc = createVector();
    this.vel = p5.Vector.random2D().setMag(random(1, 10));
    this.gravity = createVector(0, 0.5);
    this.angle = 0;
    this.point1 = p5.Vector.fromAngle(radians(this.angle), this.r);
    this.balls = balls;
    this.height = height;
  }

  update() {
    this.applyForce(this.gravity);
    this.vel.add(this.acc);
    if (this.vel.x > 0.02) {
      if (this.vel.x < 0) {
      } else {
        this.angle += 0.1;
      }
    }
    // console.log(this.vel.x);
    this.pos.add(this.vel);
    this.acc.mult(0);
    for (let i = 0; i < this.balls.length; i++) {
      if (this.balls[i] !== this) {
        const distAmount = dist(
          this.pos.x,
          this.pos.y,
          this.balls[i].pos.x,
          this.balls[i].pos.y
        );
        if (distAmount >= this.r * 2) {
        } else {
          if (this.pos.y > this.balls[i].pos.y && distAmount >= this.r * 2) {
            this.height = this.balls[i].pos.y - this.r;
          } else {
            this.height = height;
          }

          this.balls[i].vel.mult(-1);
        }
      }
    }
  }

  show() {
    push();
    noFill();
    stroke(255);
    strokeWeight(1);
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    ellipse(0, 0, this.r * 2, this.r * 2);
    line(0, 0, 0, 0 + this.r);
    line(0, 0, 0, 0 - this.r);
    pop();
  }

  applyForce(force) {
    this.acc.add(force);
  }

  checkEdges() {
    if (this.pos.y + this.r >= this.height) {
      this.pos.y = this.height - this.r;
      this.vel.y = -this.vel.y * 0.9;
    }

    if (this.pos.x + this.r >= width) {
      this.pos.x = width - this.r;
      this.vel.x = -this.vel.x * 0.5;
    }

    if (this.pos.x - this.r <= 0) {
      this.pos.x = this.r;
      this.vel.x = -this.vel.x * 0.5;
    }
  }
}

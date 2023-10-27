class Ship {
  balls = [];
  asteroids = [];
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.acc = createVector();
    this.vel = createVector();
    this.angle = 0;
    this.counter = 0;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.counter++;
    if (this.counter >= 10000) {
      this.counter = 0;
    }
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y);
    noFill();
    stroke(255);
    strokeWeight(1);
    rotate(this.angle);
    triangle(-15, -15, -15, 15, 30, 0);
    pop();

    // BULLETS
    if (this.balls.length) {
      for (let i = 0; i < this.balls.length; i++) {
        const ball = this.balls[i];
        ball.add(ball.angle);
        push();
        stroke(255, 0, 0);
        strokeWeight(4);
        point(ball.x, ball.y);
        pop();

        if (ball.x > width || ball.x < 0) {
          this.balls.splice(i, 1);
        }

        if (ball.y < 0 || ball.y > height) {
          this.balls.splice(i, 1);
        }
      }
    }

    //ASTEROIDS
    if (this.asteroids.length) {
      for (let i = 0; i < this.asteroids.length; i++) {
        const roid = this.asteroids[i];
        const diretion = p5.Vector.sub(this.pos, roid);
        diretion.setMag(1);
        push();
        noFill();
        stroke(255);
        strokeWeight(1);
        ellipse(roid.x, roid.y, roid.r * 2, roid.r * 2);
        pop();
        roid.add(diretion);
      }
    }
  }

  checkEdges() {
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

  applyForce(force) {
    this.acc.add(force);
  }

  shootBall() {
    const vec = createVector(this.pos.x, this.pos.y);
    vec.angle = p5.Vector.fromAngle(this.angle, 3.2);
    this.balls.push(vec);
  }

  createAsteroid() {
    if (this.counter % 200 === 0) {
      const roid = createVector(random(-width / 2, 0), random(-height / 2, 0));
      roid.r = random(10, 32);
      this.asteroids.push(roid);
    }
  }
}

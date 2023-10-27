class Ship {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector();
    this.acc = createVector();
    this.angle = 0;
    this.balls = [];
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    push();
    noFill();
    stroke(155);
    strokeWeight(2);
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    triangle(-15, -15 / 2, -15, 15 / 2, 10, 0);
    pop();

    if (this.balls.length) {
      for (let i = 0; i < this.balls.length; i++) {
        const ball = this.balls[i];
        this.checkBallEdge(ball, i);
        push();
        stroke(255);
        fill(255);
        strokeWeight(5);
        point(ball.x, ball.y);
        pop();
        ball.add(ball.angle);
      }
    }
  }

  applyForce(force) {
    this.acc.add(force);
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

  shootBall() {
    const vec = createVector(this.pos.x, this.pos.y);
    vec.angle = p5.Vector.fromAngle(this.angle, 3);
    this.balls.push(vec);
  }

  checkBallEdge(ball, index) {
    if (ball.x > width) {
      this.balls.splice(index, 1);
      return;
    }
    if (ball.x < 0) {
      this.balls.splice(index, 1);
      return;
    }

    if (ball.y > height) {
      this.balls.splice(index, 1);
      return;
    }
    if (ball.y < 0) {
      this.balls.splice(index, 1);
    }
  }
}

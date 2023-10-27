// let ball;
const col = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];
const usedPos = [];
const balls = [];
const numOfBalls = col.length;
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  // put setup code here
  //   ball = new Ball(width / 2, height / 2, 32);
  for (let i = 0; i < col.length; i++) {
    let x = random(width);
    let y = random(height);

    balls.push(new Ball(x, y, random(10, 32), i));
  }
}
function draw() {
  background(50);
  // put drawing code here
  for (let ball of balls) {
    ball.update();
    ball.border();
    ball.edges();
    ball.show();
  }
}

class Ball {
  constructor(x, y, r, i) {
    this.pos = createVector(x, y);
    this.r = r;
    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(5, 20));
    this.acc = createVector();
    this.gravity = createVector(0, 0.1);
    this.color = col[i];
  }

  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.y > height) {
      this.pos.y = height;
      this.vel.y = this.vel.y * -1;

      //   this.vel.mult(7);
    }
    if (this.pos.y <= 0) {
      this.pos.y = 0;
      this.vel.y = this.vel.y * -1;
    }

    if (this.pos.x <= 0) {
      this.pos.x = 0;
      this.vel.x = this.vel.x * -1;
    }
    if (this.pos.x >= width) {
      this.pos.x = width;
      this.vel.x = this.vel.x * -1;
    }
  }

  border() {
    for (let i = 0; i < balls.length; i++) {
      if (balls[i] !== this) {
        const len = dist(
          this.pos.x,
          this.pos.y,
          balls[i].pos.x,
          balls[i].pos.y
        );

        if (len <= this.r * 2) {
          //   this.pos.sub(-1);
          //   balls[i].vel.mult(-1);
          // this.pos.angleBetween(balls[i].pos);
          let angle = this.pos.angleBetween(balls[i].pos);
          const diff = p5.Vector.fromAngle(radians(-angle), 0.1);

          this.pos.x = this.pos.x;
          balls[i].x = -balls[i].x;
          this.pos.y = this.pos.y;
          balls[i].y = -balls[i].y;
          //   this.pos.y = this.pos.y * -1;
          //   balls[i].pos.add(diff);
        }
      }
    }
  }

  update() {
    this.applyForce(this.gravity);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.div(1.3);
    this.acc.mult(0);
  }

  show() {
    push();
    // noFill();
    stroke(0);
    fill(this.color);
    strokeWeight(2);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    pop();
  }
}

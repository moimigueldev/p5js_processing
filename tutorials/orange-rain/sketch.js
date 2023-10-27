// Rain (252, 182, 3)
// Background (255, 239, 199)
const drops = [];
const numOfDrops = 500;
let westWind = 0.05;
let eastWind = -0.05;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  for (let i = 0; i < numOfDrops; i++) {
    drops.push(new Drop());
  }
}

function draw() {
  background(50);

  for (let i = 0; i < drops.length; i++) {
    if (keyIsDown(RIGHT_ARROW)) {
      drops[i].setForce(drops[i].rightWind);
    }
    if (keyIsDown(LEFT_ARROW)) {
      drops[i].setForce(drops[i].leftWind);
    }

    drops[i].update();
    drops[i].checkBorder();
    drops[i].show();
  }
}

class Drop {
  constructor() {
    this.setConstruct();
  }

  setConstruct() {
    this.length = random(5, 20);
    this.pos = createVector(random(width), random(0, -height));

    this.vel = createVector(0, 1);
    this.acc = createVector();
    this.weight = map(this.length, 5, 20, 2, 7);
    this.gravity = createVector(
      0,
      Math.abs(map(this.weight, 2, 7, 0.01, 0.09))
    );
    this.rightWind = createVector(westWind, 0);
    this.leftWind = createVector(eastWind, 0);
    this.angle = 0;
  }

  setForce(force) {
    this.acc.add(force);
  }

  update() {
    this.setForce(this.gravity);

    this.angle = map(this.acc.x, -0.5, 0.5, -45, 45);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc = createVector();
  }

  show() {
    push();
    stroke(252, 182, 3);
    strokeWeight(this.weight);
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + this.length);
    pop();
  }

  checkBorder() {
    if (this.pos.y + this.length > height) {
      this.setConstruct();
      this.angle = map(this.acc.x, -0.5, 0.5, 0, 45);
    }
  }
}

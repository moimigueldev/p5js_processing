let ball;
let other;

function setup() {
  createCanvas(600, 400);
  ball = new Ball(width / 2, height / 2, other);
  other = new Ball(width / 2 + 200, height, ball);
}

function draw() {
  // put drawing code here
  background(50);

  if (keyIsDown(RIGHT_ARROW)) {
    ball.applyForce(createVector(0.3, 0));
  }
  if (keyIsDown(LEFT_ARROW)) {
    ball.applyForce(createVector(-0.3, 0));
  }

  ball.checkEdges();
  ball.update();
  ball.show();

  other.checkEdges();
  other.update();
  other.show();
}

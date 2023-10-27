let theLine;
let theBall;

function setup() {
  createCanvas(600, 400);
  // put setup code here
  theLine = new TheLine(width / 2 + 10 + 200, height);
  theBall = new TheBall();
}

function draw() {
  // put drawing code here
  background(50);

  theLine.update();
  theLine.show();
  if (keyIsDown(RIGHT_ARROW)) {
    theBall.addWind(theBall.eastWind);
  }
  if (keyIsDown(LEFT_ARROW)) {
    theBall.addWind(theBall.westWind);
  }
  if (keyIsDown(32)) {
    theBall.applyForce(createVector(0, -0.5));
  }

  theBall.update();
  theBall.checkBorder();
  theBall.show();
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    theBall.releaseForce();
  }
}

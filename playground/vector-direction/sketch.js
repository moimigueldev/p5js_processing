let ship;

function setup() {
  createCanvas(600, 400);
  // put setup code here
  ship = new Ship();
}

function draw() {
  // put drawing code here
  background(50);

  if (keyIsDown(UP_ARROW) || keyIsDown(LEFT_ARROW)) {
    ship.angle -= 0.1;
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(RIGHT_ARROW)) {
    ship.angle += 0.1;
  }

  ship.update();
  ship.edges();
  ship.show();
}

function keyPressed(value) {
  if (value.code === 'Space') {
    ship.vel.mult(0);
    ship.applyForce(p5.Vector.fromAngle(ship.angle, 2));
  }

  if (value.key === 'z') {
    ship.shootBall();
  }
}

let ship;
const starPositions = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  ship = new Ship();
}

function draw() {
  background(0);
  // DRAWS BACKGROUND STARS
  drawBackground();

  if (keyIsDown(RIGHT_ARROW) || keyIsDown(DOWN_ARROW)) {
    ship.angle += 0.1;
  }

  if (keyIsDown(LEFT_ARROW) || keyIsDown(UP_ARROW)) {
    ship.angle -= 0.1;
  }
  ship.createAsteroid();
  ship.update();
  ship.checkEdges();
  ship.show();
}

function keyPressed(val) {
  if (val.code === 'Space') {
    ship.vel.mult(0);
    const vect = p5.Vector.fromAngle(ship.angle, 2);
    ship.applyForce(vect);
  }

  if (val.key === 'z') {
    ship.shootBall();
  }

  if (val.key === 'x') {
    ship.createAsteroid();
  }
}

function drawBackground() {
  if (!starPositions.length) {
    let numOfStars = width / 2;

    while (numOfStars >= 0) {
      const x = random(width);
      const y = random(height);
      starPositions.push(createVector(x, y));
      push();
      stroke(255);
      strokeWeight(1);
      point(x, y);
      pop();

      numOfStars--;
    }
  } else {
    for (let i = 0; i < starPositions.length; i++) {
      const star = starPositions[i];
      push();
      stroke(255);
      strokeWeight(1);
      point(star.x, star.y);
      pop();
    }
  }
}

let theBall;
const balls = [];
function setup() {
  createCanvas(600, 400);
  // put setup code here
  for (let i = 0; i < 500; i++) {
    balls.push(new TheBall(balls));
  }
}

function draw() {
  // put drawing code here
  background(50);

  for (let i = 0; i < balls.length; i++) {
    const theBall = balls[i];
    if (keyIsDown(RIGHT_ARROW)) {
      theBall.applyForce(createVector(0.2, 0));
      // theBall.angle += 0.2;
    }
    if (keyIsDown(LEFT_ARROW)) {
      theBall.applyForce(createVector(-0.2, 0));
    }
    if (keyIsDown(DOWN_ARROW)) {
      theBall.applyForce(createVector(0, 1));
    }
    theBall.update();
    theBall.checkEdges();
    theBall.show();
  }
}

function keyPressed(value) {
  if (value.code === 'Space') {
    for (let i = 0; i < balls.length; i++) {
      const theBall = balls[i];
      if (theBall.pos.y === height - theBall.r) {
        theBall.applyForce(createVector(0, random(-5, -15)));
      }
    }
  }
}

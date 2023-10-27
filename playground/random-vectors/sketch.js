let ball1;
let ball2;
let activeBallIndex = 0;
const balls = [];
function setup() {
  createCanvas(800, 400);

  ball3 = new Ball(0, ball2);
  ball1 = new Ball(width, ball3);
  ball2 = new Ball(0, ball1);
  ball1.active = true;
  balls.push(ball1);
  balls.push(ball2);
}

function draw() {
  background(50);
  balls.forEach((ball) => {
    ball.update();
    ball.show();
    if (keyIsDown(LEFT_ARROW)) {
      balls[activeBallIndex].moveLeft();
    }
    if (keyIsDown(RIGHT_ARROW)) {
      balls[activeBallIndex].moveRight();
    }
  });
}

function mouseClicked(e) {
  const mousePos = createVector(e.x, e.y);
  for (let i = 0; i < balls.length; i++) {
    if (mousePos.dist(balls[i].pos) <= balls[i].r) {
      changeActiveBallIndex(activeBallIndex, i);
      break;
    }
  }
}

function changeActiveBallIndex(old, newIndex) {
  balls[old].active = false;
  balls[newIndex].active = true;
  activeBallIndex = newIndex;
}

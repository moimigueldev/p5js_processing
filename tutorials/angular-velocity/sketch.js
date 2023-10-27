let theRect;
let theTri;
let ball;
let otherBall;

const tris = [];
const numOfTris = 1;
function setup() {
  createCanvas(400, 400);
  // put setup code here
  rectMode(CENTER);
  //   angleMode(DEGREES);
  //   theRect = new TheRect();

  //   for (let i = 0; i < numOfTris; i++) {
  //     tris.push(new TheTri());
  //   }
  ball = new TheBall();
  otherBall = new TheBall();
}

function draw() {
  // put drawing code here
  background(50);

  //   theRect.update();
  //   theRect.update();

  //   for (let i = 0; i < tris.length; i++) {
  //     const theTri = tris[i];
  //     theTri.update();
  //     theTri.edges();
  //     theTri.show();
  //   }

  if (keyIsDown(RIGHT_ARROW)) {
    ball.applyForce(createVector(0.1, 0));
    otherBall.applyForce(createVector(-0.1, 0));
  }
  if (keyIsDown(LEFT_ARROW)) {
    ball.applyForce(createVector(-0.1, 0));
    otherBall.applyForce(createVector(0.1, 0));
  }

  ball.update();
  ball.edges();
  ball.show();
  otherBall.update();
  otherBall.edges();
  otherBall.show();
}

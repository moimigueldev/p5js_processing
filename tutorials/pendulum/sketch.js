let angle;
let bob;
let len;
let origin;
let angleV = 0;
let angleA = 0;
let gravity = 1;
function setup() {
  createCanvas(600, 400);
  // put setup code here
  origin = createVector(300, 0);
  angle = PI / 4;
  bob = createVector();
  len = 200;
}

function draw() {
  // put drawing code here

  let force = gravity * sin(angle);
  angleA = -force / len;

  angleV += angleA;
  angle += angleV;

  angleV *= 0.999;

  bob.x = len * sin(angle) + origin.x;
  bob.y = len * cos(angle) + origin.y;

  background(0);
  stroke(255);
  strokeWeight(8);
  fill(127);
  line(origin.x, origin.y, bob.x, bob.y);
  circle(bob.x, bob.y, 64);
}

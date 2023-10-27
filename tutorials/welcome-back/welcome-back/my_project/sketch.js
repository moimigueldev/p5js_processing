function setup() {
  createCanvas(600, 400);
  background(220);
}

function draw() {
  push();
  translate(300, 200);
  fill(225, 0, 0);
  noStroke();
  ellipse(0, 0, 100, 100);
  pop();
}

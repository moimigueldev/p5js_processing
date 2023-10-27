let circleAnchor;
let angle = 0;

function setup() {
  createCanvas(600, 600);
  // put setup code here
  circleAnchor = createVector(width / 2, height / 2);
}

function draw() {
  // put drawing code here
  background(50);
  stroke(255);

  for (let i = 0; i < TWO_PI; i += 0.01) {
    const r = 150;

    const x = r * cos(angle);
    const y = r * sin(angle);

    push();
    translate(width / 2, height / 2);
    circleAnchor.x = x;
    circleAnchor.y = y;
    strokeWeight(4);
    point(x, y);
    pop();
  }

  push();
  strokeWeight(24);
  point(circleAnchor.x, circleAnchor.y);
  pop();

  strokeWeight(4);
  fill(127);

  vertex(0, 300); // First Control Point
  // ANCHOR, ANCHOR, Control Point

  endShape();
  angle += 0.05;
}

// let walker;
function setup() {
  createCanvas(400, 400);
  // angleMode(DEGREES);
}

function draw() {
  background(0);

  let pos = createVector(200, 200);
  let mouse = createVector(mouseX, mouseY);
  let v = p5.Vector.sub(mouse, pos);

  v.setMag(50);

  translate(width / 2, height / 2);
  strokeWeight(4);
  stroke(255);
  line(0, 0, v.x, v.y);
}

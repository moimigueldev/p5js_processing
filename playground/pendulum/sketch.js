let pen;
function setup() {
  createCanvas(600, 600);
  // put setup code here
  frameRate(10);
  angleMode(DEGREES);

  pen = new Pen();
}

function draw() {
  background(50);
  pen.update();
  pen.show();

  drawNeutralLine();
}

function drawNeutralLine() {
  push();
  stroke(40);
  strokeWeight(4);
  line(width / 2, 0, width / 2, height / 2);
  pop();
}

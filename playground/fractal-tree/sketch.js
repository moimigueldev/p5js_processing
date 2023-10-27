let angle = 45;
let slider;
function setup() {
  createCanvas(500, 400);
  slider = createSlider(0, 56, 45, 1);
  // put setup code here
}

function draw() {
  // put drawing code here
  angle = slider.value();
  background(50);
  translate(width / 2, height);

  generateTree(140, 10);
}

function generateTree(len, weight) {
  // TRUNK

  strokeWeight(weight);
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 4) {
    push();
    rotate(angle);
    generateTree(len * 0.67, weight * 0.67);
    pop();
    push();
    rotate(-angle);
    generateTree(len * 0.67, weight * 0.67);
    pop();
  } else {
    noLoop();
  }
}

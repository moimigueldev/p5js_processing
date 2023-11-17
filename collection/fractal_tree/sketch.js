let angle = 3.14 / 4;
let slider;
let weight = 5;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 2 * 3.14, 3.14 / 4, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(255);
  translate(200, height);

  branch(50);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 1) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    rotate(-angle);
    branch(len * 0.67);
  }
}

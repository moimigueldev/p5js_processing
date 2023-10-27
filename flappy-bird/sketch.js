// FINE TUNE DIALS

const backgroundColor = '#92a6f7';
let bird;
function setup() {
  createCanvas(400, 500);
  bird = new Bird();
}

function draw() {
  background(backgroundColor);
  bird.update();
  bird.show();
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}

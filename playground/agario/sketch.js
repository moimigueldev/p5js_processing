let blob;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //   frameRate(10);
  blob = new Blob();
}

function draw() {
  background(255);
  drawGrid();

  blob.update();
  blob.show();
}

function drawGrid() {
  push();
  for (let i = 0; i < windowWidth; i++) {
    if (i % 15 === 0) {
      strokeWeight(0.1);
      stroke(40, 200);
      line(i, 0, i, height);
      line(0, i, width, i);
    }
  }
  pop();
}

const sizes = [];

let cols;
let rows;
let size = 20;
let xOff = 0;
let yOff = 0;
let zOff = 0;
let inc = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = width / size;
  rows = height / size;
  rectMode(CENTER);
  frameRate(30);
}

function draw() {
  background(36, 36, 36);
  xOff = 0;
  for (let i = 0; i < cols; i++) {
    yOff = 0;
    sizes[i] = [];
    for (let j = 0; j < rows; j++) {
      sizes[i][j] = map(noise(xOff, yOff, zOff), 0, 1, 0, size * 1.7);
      yOff += inc;

      let r = noise(zOff) * 255;
      let g = noise(zOff + 15) * 255;
      let b = noise(zOff + 30) * 255;

      fill(r, g, b);
      noStroke();
      rect(size / 2 + i * size, size / 2 + j * size, sizes[i][j], sizes[i][j]);
    }
    xOff += inc;
    zOff += 0.0013;
  }
}

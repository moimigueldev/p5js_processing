let cols;
let rows;
let spacing = 20;
let size = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = width / spacing;
  rows = height / spacing;

  for (let i = 0; i < cols; i++) {
    size[i] = [];
    for (let j = 0; j < rows; j++) {
      size[i][j] = ((j + 1) / rows) * spacing;
      // size[i][j] = ((i + 1) / cols) * spacing;
      // size[i][j] = ((rows - j) / rows) * spacing;
      // size[i][j] = ((cols - i) / cols) * spacing;
    }
  }
}

function draw() {
  background(35, 45, 63);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      noStroke();
      fill((j / (rows - 1)) * 255, 100);
      ellipse(
        spacing / 2 + i * spacing,
        spacing / 2 + j * spacing,
        size[i][j],
        size[i][j]
      );
    }
  }
}

let b;
let size = 10;
let cols;
let rows;
let bricks = [];
let offset = 4;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  cols = width / size;
  rows = height / size;

  for (let i = 0; i < cols; i++) {
    bricks[i] = [];
    for (let j = 0; j < rows; j++) {
      bricks[i][j] = new Brick(size / 2 + i * size, size / 2 + j * size);
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      bricks[i][j].display(10);
    }
  }
}

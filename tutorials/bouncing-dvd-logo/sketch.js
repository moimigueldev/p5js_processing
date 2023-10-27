let x;
let y;
let xSpeed;
let ySpeed;
let dvd;
let r, g, b;

function preload() {
  dvd = loadImage('./images/dvd_logo.png');
}

function pickColor() {
  r = random(100, 255);
  g = random(100, 255);
  b = random(100, 255);
}

function setup() {
  createCanvas(800, 600);
  x = random(width);
  y = random(height);
  xSpeed = 5;
  ySpeed = 5;
  pickColor();
}

function draw() {
  background(0);

  //   noFill();
  //   stroke(255);
  //   rect(x, y, 80, 60);
  tint(r, g, b);
  image(dvd, x, y);

  x += xSpeed;
  y += ySpeed;

  if (x + dvd.width >= width) {
    xSpeed = -xSpeed;
    x = width - dvd.width;
    pickColor();
  } else if (x <= 0) {
    xSpeed = -xSpeed;
    x = 0;
    pickColor();
  }
  if (y + dvd.height >= height) {
    ySpeed = -ySpeed;
    y = height - dvd.height;
    pickColor();
  } else if (y <= 0) {
    ySpeed = -ySpeed;
    y = 0;
    pickColor();
  }
}

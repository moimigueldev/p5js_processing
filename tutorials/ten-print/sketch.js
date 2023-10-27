let x = 0;
let y = 0;
let spacing = 20;
let rightX = 0;
let rightY = 0;
let leftX = 0;
let leftY = 0;
let counter = 0;
let bottomX = 0;
let bottomY = 0;

function setup() {
  createCanvas(600, 400);
  rightX = width;
  leftY = height;
  bottomY = height;
  bottomX = width;
  // put setup code here
}

function draw() {
  background(50, 10);
  //   spacing = random(10, 50);
  noStroke();
  topBottom();
  //   spacing = random(10, 50);
  //
  rightBottom();
  //   spacing = random(10, 50);

  topLeft();
}

function topLeft() {
  if (leftX <= width) {
    const greenColor = color(0, 255, 0, map(noise(leftY), 0, 1, 1, 255));
    if (random(1) > 0.7) {
      // line(x, y, spacing + x, spacing + y);
      fill(greenColor);

      rect(leftX, leftY, spacing, spacing);
    } else {
      // line(x, spacing + y, spacing + x, y);
    }
    leftY -= spacing;

    if (leftY < 0) {
      leftX += spacing;
      leftY = height;
    }
  }
}

function rightBottom() {
  if (rightX >= 0) {
    push();
    const redColor = color(255, 0, 0, map(noise(rightY), 0, 1, 1, 255));

    //   noLoop();

    fill(redColor);
    if (random(1) > 0.7) {
      // line(x, y, spacing + x, spacing + y);

      rect(rightX, rightY, spacing, spacing);
    } else {
      // line(x, spacing + y, spacing + x, y);
    }
    rightY += spacing;

    if (rightY > height) {
      rightX -= spacing;
      rightY = 0;
    }

    pop();
  }
}

function topBottom() {
  // put drawing code here
  if (y < height) {
    const blueColor = color(0, 0, 255, map(noise(x), 0, 1, 1, 255));

    push();

    if (random(1) > 0.7) {
      // line(x, y, spacing + x, spacing + y);
      fill(blueColor);
      rect(x, y, spacing, spacing);
    } else {
      // line(x, spacing + y, spacing + x, y);
    }

    x += spacing;

    if (x > width) {
      y += spacing;
      x = 0;
    }
    pop();
  }
}

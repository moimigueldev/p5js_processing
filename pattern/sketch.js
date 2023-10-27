let leftPat;
const topVectorList = [];
const rightVectorList = [];
const bottomVectorList = [];
function setup() {
  createCanvas(800, 800);

  createTopVectors();
  createRightVectors();
  angleMode(DEGREES);

  leftPat = new LeftPattern(width / 2, 0, topVectorList);
  this.seperation = 10;
}

function draw() {
  background(50, 50);
  leftPat.update();
  leftPat.show();

  push();
  fill(50);
  triangle(0, 0, width / 2, 0, 0, height / 2);
  triangle(width / 2, 0, width, 0, width, height / 2);

  triangle(0, height / 2, 0, height, height / 2, height);
  triangle(width, height / 2, width / 2, height, height, width);

  pop();
}

class LeftPattern {
  constructor(x, y, list) {
    this.pos = createVector(x, y);
    this.list = list;
    this.speed = 10;
    this.opacity = 100;
    this.a = 0;
  }

  update() {
    this.a += 5;
    for (let i = 0; i < this.list.length; i++) {
      const item = this.list[i];
      if (item.mag() <= item.length) {
        item.setMag(item.mag() + this.speed);
      } else {
      }
    }

    for (let i = 0; i < rightVectorList.length; i++) {
      const item = rightVectorList[i];
      if (item.mag() <= item.length) {
        item.setMag(item.mag() + this.speed);
      } else {
      }
    }
  }

  show() {
    if (this.list.length) {
      for (let i = 0; i < this.list.length; i++) {
        push();
        strokeWeight(1);
        stroke(0, 0, 255, this.opacity);

        line(this.pos.x, this.pos.y, this.list[i].x, height / 2);
        pop();
        push();
        strokeWeight(1);
        stroke(0, 0, 255, this.opacity);

        line(this.pos.x, height, this.list[i].x, height / 2);
        pop();
      }
    }

    if (rightVectorList.length) {
      for (let i = 0; i < rightVectorList.length; i++) {
        push();
        strokeWeight(1);
        stroke(255, 0, 0, this.opacity);

        line(width, height / 2, rightVectorList[i].x, rightVectorList[i].y);
        pop();
        push();
        strokeWeight(1);
        stroke(255, 0, 0, this.opacity);

        line(0, height / 2, width, rightVectorList[i].y);
        pop();
      }
    }
  }
}

function createTopVectors() {
  for (let i = 0; i < width; i++) {
    if (i % 10 == 0 || i === 0) {
      const item = createVector(i, height / 2);
      item.length = item.mag();
      item.limit(item.mag());
      item.setMag();

      topVectorList.push(item);
    }
  }
}

function createRightVectors() {
  for (let i = height; i >= 0; i--) {
    if (i % 10 == 0 || i === 0) {
      const item = createVector(0, i);
      item.length = item.mag();
      item.limit(item.mag());
      item.setMag();

      rightVectorList.unshift(item);
    }
  }
}

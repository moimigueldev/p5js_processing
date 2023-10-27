const circlesList = [];
const coordinatesList = [];
circleBufferSpace = 10;
borderBufferSpace = 10;

function setup() {
  createCanvas(500, 500);
  background('#e6e6e6');

  createCircles();
}

function draw() {}

function createCircles() {
  while (circlesList.length <= 4) {
    const circleRadius = random(10, width / 6);

    const circle = new Circle(circleRadius, width, height);
    const coordinates = { x: circle.x, y: circle.y };

    let overlapping = false;
    if (circlesList.length) {
      for (let i = 0; i < circlesList.length; i++) {
        // CHECK OVERLAPPING
        const other = circlesList[i];
        const distance = Math.round(
          Math.sqrt(
            Math.pow(circle.x - other.x, 2) + Math.pow(circle.y - other.y, 2)
          )
        );
        circle.index = index;
        const radiusSum = circle.r + other.r;
        if (distance - circleBufferSpace < radiusSum) {
          overlapping = true;
        }
      }
    }

    if (!overlapping) {
      fill(random(255), random(255), random(255), random(50, 500));
      noStroke();
      ellipse(circle.x, circle.y, circle.r * 2, circle.r * 2);
      index = circlesList.length;
      circle.index = index;
      circlesList.push(circle);
      coordinatesList.push(coordinates);
    }
  }
}

function checkOverlaping(other) {
  const distance = Math.round(
    Math.sqrt(Math.pow(circle.x - other.x, 2) + Math.pow(circle.y - other.y, 2))
  );

  const radiusSum = circle.r + other.r;

  return radiusSum < distance;
}

class Circle {
  circleBufferSpace = 10;
  borderBufferSpace = 10;
  x;
  y;
  r;
  index;
  parentWidth;
  parentHeight;

  constructor(radius, width, height, index) {
    this.r = radius;
    this.parentWidth = width;
    this.parentHeight = height;
    this.index = index;

    this.createCoordinates();
  }

  createCoordinates() {
    this.x = Math.round(
      random(
        this.r + this.borderBufferSpace,
        this.parentWidth - this.r - this.borderBufferSpace
      )
    );

    this.y = Math.round(
      random(
        this.r + this.borderBufferSpace,
        this.parentHeight - this.r - this.borderBufferSpace
      )
    );
  }
}

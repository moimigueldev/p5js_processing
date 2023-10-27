class Obstacle {
  pointsArr = [];
  constructor(ball) {
    this.origin = createVector(random(width), random(height));
    this.ball = ball;
    const m = map(this.origin.x, 0, width, 0, width);
    this.end = createVector(
      this.origin.x + random(10, 150),
      this.origin.y - random(10, 150)
    );
    // this.end = createVector(random(width), random(width));
    // this.midpoint = this.findMindPoint(this.origin, this.end);
    map(mouseX, 0, width, 30, 120);
  }

  show() {
    console.log(
      'dist',
      dist(this.origin.x, this.origin.y, this.end.x, this.end.y)
    );
    stroke(255, 100);
    line(this.origin.x, this.origin.y, this.end.x, this.end.y);
    stroke(209, 33, 110);
    fill(255, 0, 0);
    stroke(255, 100);
    point(this.origin.x, this.origin.y);

    fill(0);
    point(this.end.x, this.end.y);
  }

  update() {
    // console.log('midpointArr', this.pointsArr);
  }
}

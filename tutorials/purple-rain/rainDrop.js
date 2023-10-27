class RainDrop {
  height = random(5, 20);
  ySpeed = map(this.height, 10, 20, 8, 15);
  strokeWeight = map(this.ySpeed, 10, 20, 0.5, 3.5);
  origin = createVector(random(width), random(-600, 0));
  tilt = this.origin.x;
  tiltDeg = 0.1;
  tiltLimit = 10;

  update() {
    this.origin.y += this.ySpeed;

    if (this.origin.y > height) {
      this.origin.y = random(-200, 0);
      this.height = random(10, 20);
      this.ySpeed = map(this.height, 10, 20, 8, 15);
    }
    this.resetTilt();
  }

  show() {
    strokeWeight(this.strokeWeight);
    stroke(132, 53, 212, 200);
    line(this.origin.x, this.origin.y, this.tilt, this.origin.y + this.height);
  }

  tiltLeft() {
    if (this.origin.x - this.tilt <= this.tiltLimit) {
      this.tilt -= this.tiltDeg;
    }
  }
  tiltRight() {
    if (this.tilt - this.origin.x <= this.tiltLimit) {
      this.tilt += this.tiltDeg;
    }
  }

  resetTilt() {
    if (!keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW)) {
      if (this.tilt > this.origin.x) {
        this.tilt -= this.tiltDeg;
      }
      if (this.tilt < this.origin.x) {
        this.tilt += this.tiltDeg;
      }
    }
  }
}

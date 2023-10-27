class Circle {
  r = 10; // radius
  x = width / 2;
  y = height / 2;
  speed = 25;

  show() {
    noFill();
    strokeWeight(3);

    stroke(255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  update() {
    this.move();
    this.checkBorders();
  }

  checkBorders() {
    if (this.x + this.r > width) {
      this.x = width - this.r;
    }

    if (this.x <= this.r) {
      this.x = this.r;
    }

    if (this.y + this.r > height) {
      this.y = height - this.r;
    }

    if (this.y <= this.r) {
      this.y = this.r;
    }
  }

  move() {
    if (keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)) {
      this.x -= this.speed;
      this.y -= this.speed;
    } else if (keyIsDown(LEFT_ARROW) && keyIsDown(DOWN_ARROW)) {
      this.x -= this.speed;
      this.y += this.speed;
    } else if (keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW)) {
      this.x += this.speed;
      this.y -= this.speed;
    } else if (keyIsDown(RIGHT_ARROW) && keyIsDown(DOWN_ARROW)) {
      this.x += this.speed;
      this.y += this.speed;
    }

    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
    } else if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
    }
  }
}

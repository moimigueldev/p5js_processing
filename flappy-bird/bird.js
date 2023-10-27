function Bird() {
  this.y = width / 2;
  this.r = 10;
  this.lift = -15;
  this.x = 20 + this.r * 2;
  this.gravity = 0.6;
  this.velocity = 0;
  console.log('helow', width);

  this.show = function () {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.update = function () {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;
    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  };

  this.up = function () {
    this.velocity += this.gravity * this.lift;
  };
}

function getRandomSize() {
  let r = randomGaussian() * 1;
  return constrain(abs(r * r), 2, 36);

  //   while (true) {
  //     let r1 = random(1);
  //     let r2 = random(2);

  //     if (r2 > r1) {
  //       return r1 * 36;
  //     }
  //   }
}

class Snowflake {
  constructor() {}

  applyForce(force) {
    let f = force.copy();
    f.mult(this.r * 0.2);
    this.acc.add(f);
  }

  offScreen() {
    return this.pos.y > height + this.r;
  }

  randomize() {
    let x = random(width);
    let y = random(-100, -10);

    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.r = getRandomSize();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.r * 0.2);

    if (this.vel.mag() < 1) {
      this.vel.normalize();
    }

    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  render() {
    stroke(255);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
  }
}

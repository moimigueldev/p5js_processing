class Vehicle {
  constructor(x, y) {
    this.pos = createVector(random(width), random(height));
    // this.pos = createVector(x, y);
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.target = createVector(x, y);
    this.r = 8;
    this.maxSpeed = 10;
    this.maxForce = 1;
  }

  update() {
    this.vel.add(this.acc);

    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  behaviors(target) {
    const seek = this.arrive();
    const mouse = createVector(mouseX, mouseY);
    const flee = this.flee(target);
    seek.mult(1);
    flee.mult(5);
    this.applyForce(flee);
    this.applyForce(seek);
  }

  arrive() {
    const desired = p5.Vector.sub(this.target, this.pos);
    const d = desired.mag();
    let speed = this.maxSpeed;
    if (d < 100) {
      speed = map(d, 0, 100, 0, this.maxSpeed);
    } else {
    }
    desired.setMag(speed);
    const steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  }

  flee(target) {
    const desired = p5.Vector.sub(target, this.pos);
    const d = desired.mag();

    if (d < 50) {
      desired.setMag(this.maxSpeed);
      desired.mult(-1);
      const steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxForce);
      return steer;
    }

    return createVector();
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    // this.vel = createVector();
    this.prev = createVector(x, y);
    this.acc = createVector();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    stroke(255, 15);
    strokeWeight(2);
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
  }

  attracted(target, i) {
    const force = p5.Vector.sub(target, this.pos);
    let d = force.mag();
    d = constrain(d, 5, 50);
    const g = 10;
    const strength = g / (d * d);
    force.setMag(strength);
    if (d < 25) {
      force.mult(-10);
    }
    this.acc.add(force);
  }
}

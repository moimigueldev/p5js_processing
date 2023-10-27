class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.prevPos = createVector(this.pos.x, this.pos.y);
    // this.vel = createVector();
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.opacity = 100;
    this.colors = [
      color(0, 255, 0, this.opacity),
      color(0, 0, 255, this.opacity),
      color(255, 0, 0, this.opacity),
    ];
    this.color = random(this.colors);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    push();
    stroke(this.color);
    strokeWeight(4);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
    pop();
  }

  attracted(attractor) {
    const direction = p5.Vector.sub(attractor.pos, this.pos);
    const distance = dist(
      this.pos.x,
      this.pos.y,
      attractor.pos.x,
      attractor.pos.y
    );
    let d = direction.magSq();
    d = constrain(d, 5, 50);
    const gravity = 10;
    const strength = gravity / d;

    // if (distance <= 100) {
    //   direction.mult(-1);
    // }
    direction.setMag(strength);
    this.acc.add(direction);
  }
}

class Blob {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.r = 32;
    this.vol = Math.floor((4 / 3) * PI * Math.pow(this.r, 2));
    this.vel = createVector();
    this.acc = createVector();
    this.mouseVec = createVector(mouseX, mouseY);
    // this.mouseVec.limit(0.3);
    // this.acc.limit(1);
    // this.vel.limit(7);
    console.log('mouse', this.mouseVec.mag());
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.mouseVec = createVector(
      mouseX < this.pos.x ? -mouseX : mouseX,
      mouseY < this.pos.y ? -mouseY : mouseY
    );
    // this.mouseVec.limit(0.1);

    this.applyForce(this.mouseVec);
    this.vel.add(this.acc);

    if (mouseX === this.pos.x && mouseY === this.pos.y) {
      this.pos.x = mouseX;
    } else {
      this.pos.add(this.mouseVec);
    }
    this.acc.mult(0);
  }

  show() {
    push();
    noFill();
    strokeWeight(3);
    stroke(0);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
    pop();
  }
}

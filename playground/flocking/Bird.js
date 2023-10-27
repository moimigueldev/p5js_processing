class Bird {
  constructor(list) {
    this.pos = createVector(random(width), random(height));
    this.angle = random(0, 360);
    this.acc = createVector();
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.vel.limit(2);
    this.list = list;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.limit(3);
  }

  show() {
    push();
    noFill();
    stroke(255);
    strokeWeight(0.5);
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    triangle(-20, -20 / 3, -20, 20 / 3, 5, 0);
    pop();
  }

  applyForce(force) {
    this.acc.add(force);
  }

  checkDirection() {
    let accumAngle = 0;
    let numOfBirds = 0;
    let steering = createVector();
    for (let i = 0; i < this.list.length; i++) {
      const other = this.list[i];
      if (other !== this) {
        const distLen = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);

        if (distLen <= 10) {
          push();
          noFill();
          stroke(255, 0, 0, 50);
          strokeWeight(1);
          steering.add(other.pos);
          accumAngle += other.vel.heading();
          numOfBirds++;
          line(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
          pop();
        }
      }
    }
    // console.log(accumAngle / numOfBirds, numOfBirds);
    // this.vel.sub(radians(numOfBirds) / numOfBirds);
    if (numOfBirds > 0) {
      steering.div(numOfBirds);
      steering.sub(this.pos);
      steering.sub(this.vel);
      this.vel.add(steering);
      this.vel.setMag(1);
    }
  }

  checkEdges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
    }

    if (this.pos.y > height) {
      this.pos.y = 0;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
    }
  }
}

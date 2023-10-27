class Pen {
  constructor() {
    this.pos = createVector(width / 2, 0);
    this.desiredAngle = -90;

    this.point1 = p5.Vector.fromAngle(radians(this.desiredAngle), -height / 2);

    this.point1.y = Math.abs(this.point1.y);
    this.a = 0.5;
  }

  update() {
    this.point1 = p5.Vector.fromAngle(radians(this.desiredAngle), -height / 2);
    console.log('desired', this.desiredAngle);
    // if ((this.desiredAngle = -110)) {
    //   this.a = -this.a;
    // } else if ((this.desiredAngle = -55)) {
    //   this.a = -this.a;
    // }
    this.desiredAngle -= -this.a;
  }

  show() {
    push();
    stroke(255);

    translate(this.pos.x, this.pos.y);
    // line(this.point1.x, this.point1.y, this.point1.x, this.point1.y);
    strokeWeight(50);
    point(this.point1.x, this.point1.y);

    pop();
  }
}

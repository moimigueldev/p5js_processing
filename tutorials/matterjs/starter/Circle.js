function Circle(x, y, r) {
  const options = {
    friction: 0,
    resitution: 0.1,
  };
  this.body = Bodies.circle(x, y, r, options);

  World.add(world, this.body);

  this.show = function () {
    const pos = this.body.position;
    const angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke(255);
    noFill();
    strokeWeight(1);
    ellipse(0, 0, r * 2);
    pop();
  };
}

function Boundary(x, y, w, h, a) {
  this.w = w;
  this.h = h;
  const options = {
    friction: 0.3,
    resitution: 0.1,
    isStatic: true,
    angle: a,
  };
  this.body = Bodies.rectangle(x, y, w, h, options);

  World.add(world, this.body);

  this.show = function () {
    const pos = this.body.position;
    const angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke(255);
    fill(0);
    strokeWeight(1);
    rect(0, 0, this.w, this.h);
    pop();
  };
}

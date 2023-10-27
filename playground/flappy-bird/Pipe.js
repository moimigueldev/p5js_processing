class Pipe {
  constructor(list) {
    this.pos = createVector(width, random(150, 250));

    this.speed = 2;
    this.list = list;
  }

  update() {
    this.pos.x -= this.speed;
  }

  show() {
    fill(0, 255, 0);
    noStroke();
    // line(this.pos.x, 0, this.pos.x, this.pos.y);
    rect(this.pos.x, 0, 20, this.pos.y);
    rect(this.pos.x, height, 20, -this.pos.y);
  }

  checkEdge() {
    if (this.pos.x + 20 < 0) {
      for (let i = 0; i < this.list.length; i++) {
        const pipe = this.list[i];
        if (pipe === this) {
          this.list.splice(i, 1);
        }
      }
    }
  }
}

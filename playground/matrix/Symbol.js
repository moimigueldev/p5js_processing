class Icon {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.r = 10;
    this.color = color(0, 255, 0);
  }

  update() {}

  //   show() {
  //     push();
  //     stroke(this.color);

  //     noFill();
  //     translate(this.pos);
  //     triangle(-10, 0, 10, 0, 0, -10);
  //     pop();
  //   }
}

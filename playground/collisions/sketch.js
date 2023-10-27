const dots = [];
let activeIndex = 0;

function setup() {
  createCanvas(400, 400);
  // put setup code here
  //   frameRate(5);
  angleMode(DEGREES);

  dots.push(new Dot(width / 2 - 50, height / 2));
  dots.push(new Dot(100, 100));
  dots.push(new Dot(200, 100));

  dots.push(new Dot(width / 2, height / 2 - 50));
  dots[activeIndex].showLine = true;
}

function draw() {
  // put drawing code here
  background(50);

  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i];
    dot.update();
    dot.show();
  }
}

class Dot {
  constructor(x, y) {
    push();
    this.angle = -90;
    this.pos = createVector(x, y);
    translate(this.pos.x, this.pos.y);
    this.point1 = p5.Vector.fromAngle(radians(this.angle), 100);
    this.point2 = p5.Vector.fromAngle(radians(-this.angle), 100);
    this.showLine = false;
    pop();
  }

  update() {
    if (this.showLine) {
      this.angle++;
      this.point1 = p5.Vector.fromAngle(radians(this.angle), 100);
      this.point2 = p5.Vector.fromAngle(radians(this.angle), -100);
    }

    if (!this.showLine) {
      const dist1 = Math.round(
        dist(this.point1.x, this.point1.y, this.point2.x, this.point2.y)
      );
      const dist2 = Math.round(
        dist(
          this.pos.x,
          this.pos.y,
          dots[activeIndex].point1.x + dots[activeIndex].pos.x,
          dots[activeIndex].point1.y + dots[activeIndex].pos.y
        )
      );
      const dist3 = Math.round(
        dist(
          this.pos.x,
          this.pos.y,
          dots[activeIndex].point2.x + dots[activeIndex].pos.x,
          dots[activeIndex].point2.y + dots[activeIndex].pos.y
        )
      );
      //   console.log(dist1, dist2, dist3, dist2 + dist3 - 7);
      if (dist1 === dist2 + dist3) {
        console.log('touching');
        // noLoop();
      }
      this.drawCalcLine();
    }
  }

  show() {
    if (this.showLine) {
      this.displayLine();
    }
    push();
    stroke(255);
    strokeWeight(7);
    point(this.pos.x, this.pos.y);
    pop();
  }

  drawCalcLine() {
    push();
    stroke(255, 0, 0, 100);
    strokeWeight(1);

    line(
      dots[activeIndex].point1.x + dots[activeIndex].pos.x,
      dots[activeIndex].point1.y + dots[activeIndex].pos.y,
      this.pos.x,
      this.pos.y
    );
    stroke(0, 255, 0, 100);
    line(
      dots[activeIndex].point2.x + dots[activeIndex].pos.x,
      dots[activeIndex].point2.y + dots[activeIndex].pos.y,
      this.pos.x,
      this.pos.y
    );
    pop();
  }

  displayLine() {
    push();
    stroke(255, 0, 0);
    strokeWeight(3);
    translate(this.pos.x, this.pos.y);
    line(0, 0, this.point1.x, this.point1.y);
    stroke(0, 255, 0);
    line(0, 0, this.point2.x, this.point2.y);
    pop();
  }

  getDist(a, b) {
    return dist(a.x, a.y, b.x, b.y);
  }
}

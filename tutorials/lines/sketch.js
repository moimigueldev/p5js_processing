const dots = [];
const numOfDots = 4;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  frameRate(20);

  // for (let i = 0; i < numOfDots; i++) {
  //   // dots.push(new Dot(width / 2 - 100, 200));
  //   dots.push(new Dot(random(width), random(height)));
  // }

  dots.push(new Dot(width / 2 - 100, 200));
  dots.push(new Dot(200, 300));

  dots[0].showLine = true;
  console.log(dots[1].pos);
  console.log(
    'dist',
    dist(dots[0].pos.x, dots[0].pos.y, dots[1].pos.x, dots[1].pos.y)
  );
}

function draw() {
  background(60);

  // DOTS
  for (let dot of dots) {
    dot.update();
    dot.show();
  }

  // CENTER POINT
  stroke('rgba(255, 0, 0, 0.5)');
  strokeWeight(10);
  point(width / 2, height / 2);
}

class Dot {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.showLine = false;
    this.angle = 0;
    // this.point1 = createVector(-width, -height);
    this.point1 = p5.Vector.fromAngle(radians(this.angle), height / 2);
    this.point2 = p5.Vector.fromAngle(radians(-this.angle), -height / 2);
    // console.log('vector', p5.Vector.fromAngle(0, 30));
    this.coordinates1 = [];
    this.coordinates2 = [];
    this.speed = 10;
  }

  async update() {
    this.angle++;
    if (this.showLine) {
      this.point1 = p5.Vector.fromAngle(radians(this.angle), height / 2);
      this.point2 = p5.Vector.fromAngle(radians(this.angle), -height / 2);
      this.drawLine();
      // this.getCoordinates1();
      this.getCoordinates2();
      // const res = await this.checkCords([...this.coordinates1]);
      // const res2 = await this.checkCords2([...this.coordinates2]);
    }
  }

  checkCords(tempCords1) {
    return new Promise((resolve) => {
      if (tempCords1.length && this.showLine) {
        const cord = dots[1].pos;

        for (let j = 0; j < tempCords1.length; j++) {
          const other = tempCords1[j];
          let len = dist(cord.x, cord.y, other.x, other.y);

          if (len < 2) {
            console.log(
              'stoped',
              dist(cord.x, cord.y, other.x, other.y),
              other,
              cord
            );
            resolve(other);
            noLoop();
          }
        }
      }
      resolve('none');
    });
  }
  checkCords2(tempCords1) {
    return new Promise((resolve) => {
      if (tempCords1.length && this.showLine) {
        const cord = dots[1].pos;

        for (let j = 0; j < tempCords1.length; j++) {
          const other = tempCords1[j];
          let len = dist(cord.x, cord.y, other.x, other.y);

          if (len < 2) {
            console.log(
              'stoped',
              dist(cord.x, cord.y, other.x, other.y),
              other,
              cord
            );
            resolve(other);
            noLoop();
          }
        }
      }
      resolve('none');
    });
  }

  getCoordinates1() {
    const m = this.slope(this.point1, this.point2);
    const b = this.intercept(this.point1, m);
    this.coordinates1.length = 0;
    for (var x = this.point1.x; x <= this.point2.x; x++) {
      var y = m * x + b;
      let v = createVector(x, y);

      let d = dist(dots[1].pos.x, dots[1].pos.y, v.x, v.y);
      console.log('d'), d;
      if (d < 5) {
        console.log('stoped');
        noLoop();
      }
      this.coordinates1.push(createVector(x, y));
    }
  }

  getCoordinates2() {
    const m = this.slope(this.point2, this.point1);
    const b = this.intercept(this.point2, m);
    this.coordinates2.length = 0;
    for (var x = this.point2.x; x <= this.point1.x; x++) {
      var y = m * x + b;
      let v = createVector(x, y);
      let d = dist(dots[1].pos.x, dots[1].pos.y, v.x, v.y);
      console.log('d', d);
      if (d < 5) {
        console.log('stoped');
        noLoop();
      }
      this.coordinates2.push(createVector(x, y));
    }
  }

  show() {
    push();
    stroke(255, 100);
    point(this.pos.x, this.pos.y);
    pop();
    this.drawPoints();
  }

  drawLine() {
    push();
    translate(this.pos.x, this.pos.y);
    stroke(255);
    strokeWeight(4);

    line(0, 0, this.point1.x, this.point1.y);
    line(0, 0, this.point2.x, this.point2.y);

    // stroke('rgba(0,255, 50, 1)');
    // line(0, 0, this.point3.x, this.point3.y);
    pop();
  }

  drawPoints() {
    if (this.showLine && this.coordinates1.length) {
      for (let i = 0; i < this.coordinates1.length; i++) {
        const dot = this.coordinates1[i];
        push();
        translate(this.pos.x, this.pos.y);
        strokeWeight(3);
        stroke('rgba(0, 255, 0, 0.5)');
        point(dot.x, dot.y);
        pop();
      }
    }

    if (this.showLine && this.coordinates2.length) {
      for (let i = 0; i < this.coordinates2.length; i++) {
        const dot = this.coordinates2[i];
        push();
        translate(this.pos.x, this.pos.y);
        strokeWeight(3);
        stroke('rgba(0, 255, 255, 1)');
        point(dot.x, dot.y);
        pop();
      }
    }
  }

  slope(a, b) {
    if (a.x == b.x) {
      return null;
    }

    return (b.y - a.y) / (b.x - a.x);
  }

  intercept(pos, slope) {
    if (slope === null) {
      // vertical line
      return pos.x;
    }

    return pos.y - slope * pos.x;
  }
}

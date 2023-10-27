class TheBall {
  constructor() {
    this.r = 32;
    this.pos = createVector(width / 2 - 200, height - this.r - 2);
    this.speed = 0.00001;
    this.vel = createVector(0, 0);
    this.vel.limit(1);
    this.acc = createVector();
    this.gravity = createVector(0, 0.1);
    this.windValue = 0.02;
    this.eastWind = createVector(1, 0);
    this.eastWind.setMag(0.001);

    this.westWind = createVector(1, 0);
    this.westWind.setMag(-0.001);
  }

  applyForce(force) {
    this.acc.add(force);
  }


    

  update() {
    this.applyForce(this.gravity);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    push();
    stroke(255);
    noFill();
    strokeWeight(3);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);

    pop();
  }

  checkBorder() {
if (this.pos.y + this.r >= height) {
      this.pos.y = height - this.r;
    }
    if (this.pos.y + this.r <= 0) {
      this.pos.y = 0 = this.r;
    }
    if (this.pos.x + this.r >= width) {
      this.vel.x = this.vel.x * -1;
    }

    if (this.pos.x - this.r <= 0) {
      this.vel.x = this.vel.x * -1;
    }
  }

    async sayHello() {
    console.log('sayHello :')
    }

  async releaseForce(wind) {
    if (this.vel.x <= 0) {
      console.log('done', this.vel);
    } else {
      const res = await this.reduceWind(wind);
      console.log('res', res);
      return this.releaseForce(wind);
    }
    if ((this.vel.x = 0.05)) {
    }
    // let neg = this.vel.x.toString()[0];
    // console.log('neg', neg);
    // if (neg == '-') {
    //   await this.reduceWind();
    //   if (this.vel.x <= 0.001) {
    //     this.vel.mult(0);
    //   }
    //   return this.releaseForce();
    // } else {
    // }
  }

  reduceWind(wind) {
    return new Promise((resolve) => {
      // let neg = this.vel.x.toString()[0] === '0' ? 0.1 : -0.1;
      console.log('adsf', this.vel.x);
      setTimeout(() => {
        this.vel.x -= 0.1;

        resolve();
      }, 200);
    });
  }

  addWind(wind) {
    if (wind.x > 0) {
      if (wind.x <= 0.05) {
        wind.setMag(wind.mag() + this.windValue);
      }
      this.applyForce(this.eastWind);
    } else {
      if (Math.abs(wind.x) <= 0.05) {
        wind.setMag(wind.mag() + this.windValue);
      }
      this.applyForce(this.westWind);
    }
  }
}


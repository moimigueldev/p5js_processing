class Boid {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(2, 4));
    this.acc = createVector();
    this.maxForce = 1;
    this.maxSpeed = 4;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    strokeWeight(5);
    stroke(255);
    point(this.pos.x, this.pos.y);
  }

  edges() {
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

  // align this boids with all the other boids
  align(boids) {
    const steering = createVector();
    const perceptionRadius = 50;
    let total = 0;

    for (let other of boids) {
      const d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      if (other != this && d < perceptionRadius) {
        steering.add(other.vel);
        total++;
      }
    }

    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.vel);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  flock(boids) {
    const alignment = this.align(boids);
    const cohesion = this.cohesion(boids);
    const seperation = this.seperation(boids);
    seperation.mult(separationSlider.value());
    alignment.mult(alignSlider.value());
    seperation.mult(separationSlider.value());
    this.acc.add(alignment);
    this.acc.add(cohesion);
    this.acc.add(seperation);
  }

  // gets the average position of local flockmates
  cohesion(boids) {
    const steering = createVector();
    const perceptionRadius = 100;
    let total = 0;

    for (let other of boids) {
      const d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      if (other != this && d < perceptionRadius) {
        steering.add(other.pos);
        total++;
      }
    }

    if (total > 0) {
      steering.div(total);
      steering.sub(this.pos);
      steering.setMag(this.maxSpeed);
      steering.sub(this.vel);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  // avoids running into localflockmates
  seperation(boids) {
    const steering = createVector();
    const perceptionRadius = 50;
    let total = 0;

    for (let other of boids) {
      const d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      if (other != this && d < perceptionRadius) {
        let diff = p5.Vector.sub(this.pos, other.pos);
        diff.mult(d);
        steering.add(diff);
        total++;
      }
    }

    if (total > 0) {
      steering.div(total);

      steering.setMag(this.maxSpeed);
      steering.sub(this.vel);
      steering.limit(this.maxForce);
    }
    return steering;
  }
}

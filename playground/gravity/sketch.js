const particles = [];
const attractors = [];
const starPositions = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //   createCanvas(600, 400);

  // PARTICLES
  for (let i = 0; i < 2; i++) {
    // particles.push(new Particle(random(width), random(height)));
    particles.push(new Particle(width / 2, height / 2));
  }

  // ATTRACTORS
  for (let i = 0; i < 1; i++) {
    // attractors.push(new Attractor(width / 2, height / 2));
  }
  background(0, 200);
  // DRAWS BACKGROUND STARS
  drawBackground();
}

function draw() {
  for (let i = 0; i < attractors.length; i++) {
    const attractor = attractors[i];
    attractor.show();
    for (let j = 0; j < particles.length; j++) {
      const particle = particles[j];
      particle.attracted(attractor);
      particle.update();
      particle.show();
    }
  }
}

function mousePressed() {
  attractors.push(new Attractor(mouseX, mouseY));
}

function drawBackground() {
  if (!starPositions.length) {
    let numOfStars = width / 2;

    while (numOfStars >= 0) {
      const x = random(width);
      const y = random(height);
      starPositions.push(createVector(x, y));
      push();
      stroke(255);
      strokeWeight(1);
      point(x, y);
      pop();

      numOfStars--;
    }
  } else {
    for (let i = 0; i < starPositions.length; i++) {
      const star = starPositions[i];
      push();
      stroke(255);
      strokeWeight(1);
      point(star.x, star.y);
      pop();
    }
  }
}

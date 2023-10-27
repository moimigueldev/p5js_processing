let attractors = [];
let particles = [];

function setup() {
  createCanvas(400, 400);
  // put setup code   here
  //   attractor = createVector(200, 200);
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(200, 200));
    // particles.push(new Particle(random(width), random(height)));
  }
  //   for (let i = 0; i < 10; i++) {
  //     attractors.push(createVector(random(width), random(height)));
  //   }
}

function mousePressed() {
  attractors.push(createVector(mouseX, mouseY));
}

function draw() {
  // put drawing code here
  background(50);

  for (let i = 0; i < attractors.length; i++) {
    const attractor = attractors[i];

    strokeWeight(4);
    stroke(255, 0, 0);
    point(attractor.x, attractor.y);

    for (let j = 0; j < particles.length; j++) {
      const particle = particles[j];
      particle.attracted(attractor, i);
      particle.update();
      particle.show();
    }
  }
}

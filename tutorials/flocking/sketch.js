const flock = [];
function setup() {
  createCanvas(640, 360);
  // put setup code here
  for (let i = 0; i < 100; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  // put drawing code here
  background(51);

  for (let i = 0; i < flock.length; i++) {
    flock[i].align(flock);
    flock[i].update();
    flock[i].show();
  }

  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }
}

const flock = [];
const numOfBoids = 100;

let alignSlider, cohesionSlider, separationSlider;

function setup() {
  createCanvas(640, 360);
  // put setup code here
  alignSlider = createSlider(0, 2, 1, 0.1);
  cohesionSlider = createSlider(0, 2, 1, 0.1);
  separationSlider = createSlider(0, 2, 1, 0.1);
  for (let i = 0; i < numOfBoids; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  // put drawing code here
  background(51);

  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }
}

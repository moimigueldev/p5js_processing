const birds = [];
const numOfBirds = 100;

function setup() {
  createCanvas(600, 400);
  // put setup code here
  for (let i = 0; i < numOfBirds; i++) {
    birds.push(new Bird(birds));
  }
}

function draw() {
  // put drawing code here
  background(50);

  for (let i = 0; i < birds.length; i++) {
    const bird = birds[i];

    bird.checkDirection();
    bird.update();
    bird.checkEdges();
    bird.show();
  }
}

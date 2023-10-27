let bird;
pipes = [];
let counter = 0;

function setup() {
  createCanvas(800, 600);
  // put setup code here
  bird = new Bird();
}

function draw() {
  // put drawing code here
  background(50);

  if (counter % 90 === 0) {
    pipes.push(new Pipe(pipes));
  }

  for (let i = 0; i < pipes.length; i++) {
    const pipe = pipes[i];
    pipe.update();
    pipe.checkEdge();
    pipe.show();
  }

  bird.update();
  bird.edges();
  bird.show();
  counter++;
}

function keyPressed(value) {
  if (value.code === 'Space') {
    bird.applyForce(createVector(0, -6));
  }
}

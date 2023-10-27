let source;

function preload() {
  source = loadImage('choochoobot.png');
}

function setup() {
  createCanvas(400, 400);
  // put setup code here
}

function draw() {
  // put drawing code here
  background(56);
  image(source, 0, 0);
}

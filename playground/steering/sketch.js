let font;
let points;
let deflector;
const vehicles = [];
function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
  createCanvas(700, 300);
  textFont(font);

  fill(255);
  noStroke();
  deflector = createVector(0, height / 2);

  points = font.textToPoints('P5JS', 0, 200, 192);
  for (let i = 0; i < points.length; i++) {
    const vehicle = new Vehicle(points[i].x, points[i].y);
    vehicles.push(vehicle);
  }
}

function draw() {
  // put drawing code here
  background(50);
  push();
  stroke(0, 255, 0);
  strokeWeight(10);
  point(deflector.x, deflector.y);
  pop();

  for (let i = 0; i < vehicles.length; i++) {
    const v = vehicles[i];

    v.behaviors(deflector);
    v.update();
    v.show();
  }

  deflector.x += 2;
}

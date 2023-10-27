let num = 0;
let angle = 0;
let r = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
  //   r = width / 2;
}

function draw() {
  // put drawing code here
  background(0, 10);
  translate(width / 2, height / 2);

  // POINT AT CENTER
  stroke(0, 0, 255, 50);
  strokeWeight(1);
  point(0, 0);
  noFill();

  const increment = 0.1;
  //   const increment = map(mouseX, 0, width, PI, 0.1);

  beginShape();
  for (let a = 0; a < TWO_PI; a += increment) {
    let r1 = r + map(noise(angle), 0, 1, -50, 50);
    let x = r1 * cos(a);
    let y = r1 * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);

  angle += 0.01;
  //   r -= 0.1;
}

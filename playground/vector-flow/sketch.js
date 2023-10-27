function setup() {
  createCanvas(400, 400);
}

let xoff = 0.0;

function draw() {
  background(204);
  xoff = xoff + 0.01;
  let n = noise(xoff) * width;
  line(n, 0, n, height);
}

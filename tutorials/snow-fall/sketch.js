const snow = [];
let gravity;

function setup() {
  createCanvas(500, 500);
  // put setup code here
  gravity = createVector(0, 0.03); //points down
}

function draw() {
  background(0);
  snow.push(new Snowflake());

  for (flake of snow) {
    flake.applyForce(gravity);
    flake.update();
    flake.render();
  }
}

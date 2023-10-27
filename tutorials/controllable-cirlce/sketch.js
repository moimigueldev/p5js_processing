// THINGS TO ADD
// 1. Moveable circle (by arrow keys)
// 2. Border Limits
// 3. Obsticles
// 4. obsticles appearing in random places

let circle;
let obstacle;
const fr = 20;
function setup() {
  createCanvas(400, 400);
  frameRate(fr);
  circle = new Circle();
  obstacle = new Obstacle(circle);
}

function draw() {
  background(50);

  circle.update();
  circle.show();

  obstacle.update();
  obstacle.show();
}

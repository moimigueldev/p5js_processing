const Engine = Matter.Engine,
  //   Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Runner = Matter.Runner;

let engine;
const cirlces = [];
const boundaries = [];
let world;
let ground;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;
  //   Runner.run(engine);

  boundaries.push(new Boundary(width / 2, height, width, 50, 0.3));
  boundaries.push(new Boundary(width / 2, height / 2, width * 0.6, 50, -0.3));
}

// function mouseDragged() {
//   cirlces.push(new Circle(mouseX, mouseY, random(5, 10)));
// }

function draw() {
  // put drawing code here
  background(50);
  cirlces.push(new Circle(200, 50, random(5, 10)));
  noLoop();

  Engine.update(engine);

  for (let i = 0; i < cirlces.length; i++) {
    const cirlce = cirlces[i];

    if (cirlce.isOffScreen()) {
      cirlce.removeFromWord();
      cirlces.splice(i, 1);
      i--;
    }
    cirlce.show();
  }

  for (let i = 0; i < boundaries.length; i++) {
    const ground = boundaries[i];
    ground.show();
  }
}

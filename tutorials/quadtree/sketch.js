const particles = [];
const amountOfParticles = 100;

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
  for (let i = 0; i < amountOfParticles; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  let boundary = new Rectangle(300, 200, width, height);
  let qTree = new QuadTree(boundary, 4);
  background(50);

  for (let p of particles) {
    let point = new Point(p.x, p.y, p);
    qTree.insert(point);

    p.move();
    p.render();
    p.setHighlight(false);
  }

  for (let p of particles) {
    let range = new Circle(p.x, p.y, p.r * 2);
    let points = qTree.query(range);

    for (let point of points) {
      let other = point.userData();
      if (p !== other && p.intersects(other)) {
        p.highlight();
      }
    }
  }
}

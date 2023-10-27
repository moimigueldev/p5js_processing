let icon;
const icons = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
  rectMode(CENTER);

  //   frameRate(10);
  for (let i = 0; i < width; i += random(20, 50)) {
    for (let j = height; j > 0; j -= 10) {
      icons.push(new Icon(i, random(i, j)));
    }
  }
  //   noLoop();
}

function draw() {
  // put drawing code here
  background(50);

  for (let i = 0; i < icons.length; i++) {
    const icon = icons[i];
    icon.update();
    icon.checkEdges();
    icon.show();
  }
}

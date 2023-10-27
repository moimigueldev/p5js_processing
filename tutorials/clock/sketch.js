let arm;
let timeArc;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  arm = new Arm();
  timeArc = new TimeArc();
}

function draw() {
  background('#E5DADA');
  translate(width / 2, height / 2);

  // UPDATE ARMS AND ARCS
  arm.update();

  // SECONDS ARM
  arm.showSeconds();

  // Minute ARM
  arm.showMinutes();

  // HOUR ARM
  arm.showHours();

  // SECONDS ARC
  timeArc.showSecondsArc();

  // MINUTE ARC
  timeArc.showMinuteArc();

  // HOUR ARC
  timeArc.showHourArc();

  // CENTER DOT
  stroke(255);
  strokeWeight(8);
  point(0, 0);
}

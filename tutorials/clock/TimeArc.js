class TimeArc extends Arm {
  strokeWidth = 20;
  rotation = -90;
  constructor() {
    super();
  }

  showSecondsArc() {
    push();
    stroke(this.secondColor);
    strokeWeight(this.strokeWidth);
    noFill();
    rotate(this.rotation);
    arc(0, 0, 250, 250, 0, this.getSeconds());
    pop();
  }

  showMinuteArc() {
    push();
    stroke(this.minuteColor);
    strokeWeight(this.strokeWidth);
    noFill();
    rotate(this.rotation);
    arc(0, 0, 300, 300, 0, this.getMinutes());
    pop();
  }

  showHourArc() {
    push();
    stroke(this.hourColor);
    strokeWeight(this.strokeWidth);
    noFill();
    rotate(this.rotation);
    arc(0, 0, 350, 350, 0, this.getHours());
    pop();
  }
}

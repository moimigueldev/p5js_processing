class Arm {
  secondColor = '#E59500';
  minuteColor = '#840032';
  hourColor = '#002642';
  constructor() {
    this.seconds = this.getSeconds();
    this.minutes = this.getMinutes();
    this.hours = this.getHours();
  }

  update() {
    this.seconds = this.getSeconds();
    this.minutes = this.getMinutes();
    this.hours = this.getHours();
  }

  showSeconds() {
    push();
    strokeWeight(5);
    rotate(this.seconds);
    stroke(this.secondColor);
    line(0, 0, 0, -height / 3.8);
    pop();
  }

  showMinutes() {
    push();
    strokeWeight(5);
    rotate(this.minutes);
    stroke(this.minuteColor);
    line(0, 0, 0, -height / 4);
    pop();
  }

  showHours() {
    push();
    strokeWeight(5);
    rotate(this.hours);
    stroke(this.hourColor);
    line(0, 0, 0, -height / 5.5);
    pop();
  }

  getMinutes() {
    return map(new Date().getMinutes(), 0, 60, 0, 360);
  }

  getHours() {
    return map(new Date().getHours() - 12, 0, 12, 0, 360);
  }

  getSeconds() {
    return map(new Date().getSeconds(), 0, 60, 0, 360);
  }
}

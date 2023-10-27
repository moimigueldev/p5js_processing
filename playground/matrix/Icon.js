class Icon {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.r = 5;
    this.color = color(0, 255, 0);
    this.vel = createVector(0, 3);
    this.counter = 0;
    this.symbols = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
  }

  update() {
    this.pos.add(this.vel);
    this.counter++;
  }

  show() {
    fill(this.color);
    text(random(this.symbols), this.pos.x, this.pos.y);
    if (this.counter % 30 === 0) {
    }
    // noLoop();
  }

  checkEdges() {
    if (this.pos.y > height) {
      this.pos.y = 0;
    }
  }
  makeid(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}

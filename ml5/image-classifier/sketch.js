let mobileNet;
let video;
let label = '';
function modelReady() {
  console.log('modelReady');
  mobileNet.predict(gotResults);
}

function gotResults(err, results) {
  if (err) {
    console.error(err);
  } else {
    label = results[0].label;
    let prob = results[0].confidence;

    mobileNet.predict(gotResults);
  }
}

function preload() {
  video = createCapture(VIDEO, () => {
    video.hide();
  });
}

function setup() {
  createCanvas(640, 480);
  // put setup code here

  mobileNet = ml5.imageClassifier('MobileNet', video, modelReady);
  image(video, 0, 0, width, height);
}

function draw() {
  // put drawing code here
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(20);
  text(label, 10, height - 100);
}

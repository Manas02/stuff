// Daniel Shiffman

var n = 0;
var c = 3;

var points = [];

var start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  rotate(n * 0.3);
  for (var i = 0; i < n; i++) {
    var a = i * 137.5;
    var r = c * sqrt(i);
    var x = r * cos(a);
    var y = r * sin(a);
    noStroke();
    fill(40,random(100,255),40);
    ellipse(x, y, 4, 4);
  }
  n += 5;
  start += 5;
}

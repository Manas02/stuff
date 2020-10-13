//Inspired by Daniel Shiffman

// variables: A B
// axiom: A
// rules: (A → AB), (B → A)
var angle;
var axiom = 'F';
var sentence = axiom;
var len = 300;

var rules = [];
rules[0] = {
  a: 'F',
  b: 'FF+[+F-F-F]-[-F+F+F]'
};

function generate() {
  len *= 0.5;
  var nextSentence = '';
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  createP(sentence);
  turtle();
}

function turtle() {
  background(51);
  resetMatrix();
  translate(width / 2, height);
  strokeWeight(4);
  stroke(0,200,0,100)
  
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);

    if (current == 'F') {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (current == '+') {
      rotate(angle);
    } else if (current == '-') {
      rotate(-angle);
    } else if (current == '[') {
      push();
    } else if (current == ']') {
      pop();
    }
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight-100);
  angle = radians(25);
  background(200);
  createP(axiom);
  turtle();
  var button = createButton('generate');
  button.mousePressed(generate);
}

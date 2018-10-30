// dataset from https://github.com/dariusk/corpora
// icons from https://thenounproject.com/thbruck/collection/washing/?i=182619

// global variables
var data;
var icons = [];
var category = [];
var labels = [];

function preload() {
  // data
  data = loadJSON('./assets/laundry_care.json');
  // icons array
  for (var i = 0; i < 33; i++) {
    icons[i] = loadImage('./assets/laundry_care/' + i + '.png');
  }
}

function setup() {
  // canvas
  createCanvas(windowWidth, windowHeight);
  // category and labels array
  for (var j = 0; j < data.laundry_care_instructions.length; j++) {
    var laundryCare = data.laundry_care_instructions[j];
    category[j] = laundryCare.category;
    labels[j] = laundryCare.instruction;
  }
}

function draw() {
  // heading
  textFont('Karla');
  fill(0);
  textSize(40);
  textStyle(BOLD);
  text('Laundry Care Instructions', 60, (height / 8) - 70);
  textStyle(ITALIC);
  fill('blue');
  textSize(15);
  text('Hover an icon to see its meaning', 60, (height / 8) - 40);
  // display function calling
  for (var k = 0; k < 33; k++) {
    display(icons[k], k, category[k], labels[k]);
  }
}

function display(_img, _counter, _category, _label) {
  // image x and image y
  var c = _counter;
  var xImg = 0;
  var yImg = 0;
  if (_category == "Washing") {
    xImg = 50 + 200 * c;
    yImg = 20 + height / 8;
  } else if (_category == "Bleaching") {
    xImg = 50 + 200 * (c - 8);
    yImg = 20 + (height / 8) * 2 + 10;
  } else if (_category == "Drying") {
    xImg = 50 + 200 * (c - 11);
    yImg = 20 + (height / 8) * 3 + 10;
    if (c > 18) {
      xImg = 50 + 200 * (c - 19);
      yImg = 20 + (height / 8) * 4 + 10;
    }
  } else if (_category == "Wringing") {
    xImg = 50 + 200 * (c - 24);
    yImg = 20 + (height / 8) * 5 + 10;
  } else if (_category == "Ironing") {
    xImg = 50 + 200 * (c - 25);
    yImg = 20 + (height / 8) * 6 + 10;
  } else if (_category == "Drycleaning") {
    xImg = 50 + 200 * (c - 31);
    yImg = 20 + (height / 8) * 7 + 10;
  }
  // category heading
  fill(0);
  textSize(20);
  text(_category, 60, yImg - 10);
  // display image
  image(_img, xImg, yImg, 70, 70);
  // hovering label
  if (mouseY > yImg && mouseY < yImg + 100 && mouseX > xImg && mouseX < xImg + 100) {
    fill('blue');
    textSize(10);
    text(_label, xImg + 10, yImg + 70);
  } else {
    fill(255);
    textSize(10);
    text(_label, xImg + 10, yImg + 70);
  }
}

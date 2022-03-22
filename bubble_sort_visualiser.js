var elements = [];
var x = 0;
var y = 0;
var thick = 2;

function bubblesort() {
  for (var i = x; i < elements.length - 1; i++) {
    for (var j = y; j < elements.length - i - 1; j++) {
      if (elements[j] > elements[j + 1]) {
        var temp = elements[j];
        elements[j] = elements[j + 1];
        elements[j + 1] = temp;
      }
      if (j + 1 == elements.length - i - 1) {
        y = 0;
        x = i + 1;
      } else {
        y = j+1;
        x = i;
      }
      return;
    }
  }
}

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < width / thick; i++) {
    elements[i] = random(0, height);
  }
}

function draw() {
  background(0);
  for (var i = 0; i < elements.length; i++) {
    strokeWeight(thick/5);
    stroke(0);
    if(i == y || i == y-1)
      fill(255, 0, 0);
    else
      fill(0, 200, 200);
    rect(i * thick, height - elements[i], thick, elements[i]);
  }
  if (x == elements.length - 1) 
    noLoop();
  else 
    bubblesort();
}

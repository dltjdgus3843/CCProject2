let x, y;
let q, w;
let slider;

function setup() {
  createCanvas(windowWidth, windowHeight-50);
  background(240);
  
  slider = createSlider(10, 50, 10, 1);
  slider.position(0, windowHeight-25);
  slider.style('width', '200px');
}

function draw() {
  if (mouseIsPressed) {
    var c = color(174, 228, 255);
    pastelDrops(c);
    
    c = color(175, 251, 170);
    pastelDrops(c);
    
    c = color(255, 175, 216);
    pastelDrops(c);
  }

  q = random(0, windowWidth);
  w = random(0, windowHeight-50);
  stroke(240, 90);
  fill(240, 90);
  rect(q, w, 150, 150);
  rectMode(CENTER);
}

function pastelDrops(c) {
  let val = slider.value();
  x = random(-10, 10);
  y = random(-10, 10);
  stroke(c);
  strokeWeight(2);
  fill(240);
  ellipse(mouseX+x, mouseY+y, val, val);
}
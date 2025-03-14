function setup() {
 // put setup code here
 createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  background(255,255,255);
  stroke(0);
  strokeWeight(1);
  line(0, mouseY, width, mouseY);
  line(mouseX, 0, mouseX, height);

}

function mousePressed()
{ //eventListeners
 // background(255);
 print("mouseX is: ");
 print(mouseX);
 print(", mouseY is: ");
 print(mouseY);
 
}
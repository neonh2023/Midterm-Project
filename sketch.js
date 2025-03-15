let crabs = [];
let lastTime;
let interval;//crab
let interval2;//human
let currentTime;//crab
let currentTime2;//human
let feetmove;
let pace;


function setup() 
{
  frameRate(20);
  lastTime = 0;
  currentTime = 0;
  currentTime2 = 0;
  interval =500;
  interval2=20;
  feetmove = 0;
  pace = 1;
  createCanvas(1300,630);
  
}
 
function draw() 
{
   
  //Crabs
   currentTime = currentTime + 10;
   if ((currentTime - lastTime) > interval)
   {
     currentTime = 0;
     let velocity = createVector(int(random(-4, 4)), int(random(-4, 4)) );
     let location = createVector(int(random(100,1200)),int(random(500,600)));
     crabs.push(new Crab(location, velocity));
     //print (velocity);
   }
   
    // put drawing code here
   background(255,255,255);
   stroke(0);
   strokeWeight(1);
   line(0, mouseY, width, mouseY);
   line(mouseX, 0, mouseX, height);
 
  //Sand
   beginShape(); 
   fill(255, 173, 86 );
   vertex(0, 470);
   vertex(1300, 470);
   vertex(1300, 630); 
   vertex(0,630);
   endShape();
 
  
  // CRAB
  for(let i = crabs.length-1; i >=0; i--)
    {
      let c = crabs[i]; //pull one out and put in variable
      c.update();
      c.display();
      if(c.isDead())  
      { // call the method isDead on the object. If we are dead....
        crabs.splice(i, 1);  //take us out of the array.
      }
    }

  
   //Seat
    fill (226, 104, 104);
    bezier(997,630,576,348,630,485,703,661);
  
    //human
      let h = new human(feetmove, feetmove); 
      feetmove = feetmove + pace;
      currentTime2 = currentTime2 + 1;
      if ((currentTime2 - lastTime) > interval2) //human
        {
          currentTime2 = 0;
          pace = pace * -1;
          h.feet();
        }
      h.display();
   
}
 
function mousePressed()
 { //eventListeners
  // background(255);
  print("mouseX is: ");
  print(mouseX);
  print(", mouseY is: ");
  print(mouseY);

  

 }

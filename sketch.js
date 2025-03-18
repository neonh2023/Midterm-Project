//crab
let crabs = [];
let lastTime;
let interval;
let currentTime;

//Cloud
let currentTime2;

//human
let feetmove;
let pace;
let rate;
let breath;

//cloud
let clouds = [];


function setup() 
{
  frameRate(20);
  lastTime = 0;
  currentTime = 0;
  interval =500;

  //Cloud
  currentTime2 =0;
  

  feetmove = 0;
  pace = 1;
  rate = 1
  breath = 1;
  createCanvas(1300,630);

  //let h = new human(feetmove, feetmove);

}
 
function draw() 
{
   // put drawing code here
   background(255,255,255);
   stroke(0);
   strokeWeight(1);
   line(0, mouseY, width, mouseY);
   line(mouseX, 0, mouseX, height);
  
   //Sky
  beginShape();
  fill(185, 223, 255);
  vertex(0,0);
  vertex(0, 250);
  vertex(1300, 250);
  vertex(1300,0);
  endShape();

  // Cloud
  currentTime2 = currentTime2 + 1;
  if (currentTime2 > 60)
  {
    currentTime2 = 0;
    let velocity2 = createVector(-3, 0);
    let location2= createVector(1500,int(random(0, 250)));
    clouds.push(new cloud(location2, velocity2));
    
  }


  for(let i = clouds.length-1; i >=0; i--)
    {
      let cd = clouds[i]; //pull one out and put in variable
      cd.update();
      cd.display();
      if(cd.outofScreen())  
      { 
        clouds.splice(i, 1);  //take us out of the array.
      }
    }

    stroke(0);
    strokeWeight(1);

  //Ocean
  beginShape();
  fill(42, 122, 189);
  vertex(0,250);
  vertex(0, 480);
  vertex(1300, 480);
  vertex(1300,250);
  endShape();
  
  //Dolphin
 

   
  //Sand
   beginShape(); 
   fill(255, 173, 86);
   vertex(0, 470);
   vertex(1300, 470);
   vertex(1300, 630); 
   vertex(0,630);
   endShape();
 
  
 
  //Crabs
  currentTime = currentTime + 10;
  if ((currentTime - lastTime) > interval)
  {
    currentTime = 0;
    let velocity = createVector(int(random(-4, 4)), int(random(-4, 4)) );
    let location = createVector(int(random(100,1200)),int(random(550,600)));
    crabs.push(new Crab(location, velocity));
    //print (velocity);
  }
  

  for(let i = crabs.length-1; i >=0; i--)
    {
      let c = crabs[i]; 
      c.update();
      c.display();
      if(c.isDead())  
      { 
        crabs.splice(i, 1);  
      }
    }

  
   //Seat
    fill (226, 104, 104);
    bezier(997,630,576,348,630,485,703,661);
  
    //human
      let h = new human(feetmove, feetmove, breath); 
      feetmove = feetmove + pace;
      
      if (feetmove > 15 || feetmove <= 0) //human
        {
          pace = pace * -1;
        }

      breath = breath + rate/3;
    
      if ((breath > 15 || breath <= 0)) //human
        {
          rate = rate * -1;
        }

      h.display();
   
}
 
function mousePressed()
 { 
  
  print("mouseX is: ");
  print(mouseX);
  print(", mouseY is: ");
  print(mouseY);
   
  
   //h.breadth();
 }

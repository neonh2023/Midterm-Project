let crabs = [];
let lastTime;
let interval;
let currentTime;

function setup() 
{
  frameRate(20);
  lastTime = 0;
  currentTime = 0;
  interval =500;
  
  createCanvas(1300,630);
  c = new Crab(300,20)
}
 
function draw() 
{
   currentTime = currentTime + 10;
   if ((currentTime - lastTime) > interval)
   {
     currentTime = 0;
     //Crabs
     let velocity = createVector(int(random(-4, 4)), int(random(-4, 4)) );
     let location = createVector(int(random(100,1200)),int(random(500,600)));
     crabs.push(new Crab(location, velocity));
     print (velocity);
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

  
   //Ocean
   fill (226, 104, 104);
   bezier(997,630,576,348,630,485,703,661);
  
   //top of hat
   fill(255, 162, 162 );
   ellipse(689,307,70,40);
   
   fill(204, 216, 30);        //head
   ellipse(690,358, 100,100);
   
   
   fill(138, 138, 138 ); //BODY
   beginShape();
   vertex(659, 397);
   vertex(660, 493);
   vertex(752, 496);
   vertex(735, 430);
   vertex(705, 397);
   endShape();
   
   //hair
   fill(204, 216, 30);
   ellipse(724,395,30,30);
   
   
   fill(204, 216, 30);
   beginShape();    // Right FOOT
   vertex(660, 473);
   vertex(621, 478);
   vertex(606, 566); //moving
   vertex(589,573);
   vertex(591, 581);
   vertex(615, 573); // moving
   vertex(628, 486);
   vertex(660, 483);
   endShape();
   
   beginShape();    // Right FOOT
   vertex(680, 473);
   vertex(640, 478);
   vertex(626, 566); //moving
   vertex(600,573);
   vertex(610, 581);
   vertex(635, 573); // moving
   vertex(648, 486);
   vertex(680, 483);
   endShape();
   
   strokeWeight(2);
   //eye left
   push();
   translate(649,330);
   fill(204, 216, 30);
   bezier(2,20,8,39,20,28,21,20);
   pop();
   
   //eye right
   push();
   translate(672,330);
   fill(204, 216, 30);
   bezier(2,20,8,39,20,28,21,20);
   pop();
   
   //eye lid
   line(692,352,701,352);
   line(691,355,700,358);
   line(652,351,645,350);
   line(653,354, 648,357);
   
   //smile
   push();
   translate(661,348);
   fill(204, 216, 30);
   bezier(2,20,3,27,16,27,18,21);
   pop();
   
   //Hat bottom
   push();
   translate(597, 283);
   fill(255, 144, 144 );
   bezier(56,22,5,50,185,44,128,22);
   pop();
   
   
}
 
function mousePressed()
 { //eventListeners
  // background(255);
  print("mouseX is: ");
  print(mouseX);
  print(", mouseY is: ");
  print(mouseY);

  

 }

//crab
let crabs = [];
let lastTime, currentTime, interval;

//Cloud
let currentTime2;

//human
let feetmove, pace, rate, breath;

//cloud
let clouds = [];

//sky
let isDay = true;
let sun = -50; let moon = -50;
let skyColor;

//wave
let waveMove = 0;

//Stars
let stars = [];

//Snowflakes
let snow = [];


function setup() 
{

  frameRate(30);
  lastTime = 0;
  currentTime = 0;
  interval =1000;

  //Cloud
  currentTime2 =0;
  

  feetmove = 0;
  pace = 1;
  rate = 1
  breath = 1;
  createCanvas(1300,630);

  //sky
  skyColor = color(185,223,255);

  //Stars
	for (let i = 0; i < 100; i++)
		{
			 let x = random(0,width);
			 let y = random(0,250);
			 let brightness = random(150,250);
			 stars.push({x,y,brightness});	
		}


}
 
function draw() 
{
  //sky , moon, and sun
  if(isDay)
  {
    skyColor = lerpColor(skyColor, color(185,223,255),0.02);
  }
  else
  {
    skyColor = lerpColor(skyColor, color(20,20,60),0.02);
  }

  background(skyColor);

  if(isDay)
  {
    fill(255,204,0);
    ellipse(sun , 100,60,60);
    sun+= 1;
    if (sun > width+50)
    {
      isDay = false;
      sun = -50;
    }
  }
  else
  {
    drawStars(); //stars
    
    fill(200,200,230);
    ellipse(moon,100, 50,50);
    moon+=1;
    if (moon>width+50)
    {
      isDay = true;
      moon = -50;
    }
    
  }


   // put drawing code here
   
   //stroke(0);
   //strokeWeight(1);
  // line(0, mouseY, width, mouseY);
   //line(mouseX, 0, mouseX, height);
  

  // Cloud
  currentTime2++;
  if (currentTime2 > 70) 
  {
    currentTime2 = 0;
    let velocity = createVector(int(random(-1,-3)), 0);
    let location = createVector(1300, int(random(0, 200)));
    let o = int(random(1,4));
    clouds.push(new Cloud(location, velocity, o));
  }

  for (let i = clouds.length - 1; i >= 0; i--) 
  {
    let cloud = clouds[i];
    cloud.update();
    cloud.display();
    if (cloud.outofScreen())
    {
      clouds.splice(i, 1);
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
  
  //wave
  Waves();

  stroke(0,0,0);

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

      updateSnowfall();
      drawSnow();
  
}


function updateSnowfall()
{
  if (frameCount % 10 == 0)
  {
    snow.push(new snowflakes(random(width),0));
  }

  for(let i = snow.length-1; i>= 0 ; i--)
  {
     let s = snow[i];
     s.update();

    if (s.outofbound())
    {
      snow.splice(i,1);
    }
  }
}

function drawSnow()
{
   for(let s of snow)
   {
      s.display();
   }
}



function drawStars()
{
	noStroke();
	for(let star of stars)
		{
			fill(255,255,255,star.brightness);
			ellipse(star.x, star.y, 2,2);
			star.brightness = random(150,255); //Twinkling
		}
}

function Waves()
{
  fill (43,162, 255);
  stroke(255, 255,255);
  strokeWeight(2);
  waveMove += 0.05;

  for (let y =260; y <height; y += 20) 
  {
      beginShape();
      for (let x = 0; x <= width; x += 20) 
      {
        let waveHeight =sin((x * 0.05)+waveMove) * 10;
        vertex(x, y + waveHeight);
      }
      endShape();
  }
}

function mousePressed()
 { 
  

  for (let cloud of clouds)
  {
    if (cloud.isClicked(mouseX, mouseY)) 
      {
        cloud.smileAndOscillate();
      }
  }
  
 }


class Cloud
 {
    constructor(loc, v) 
    {
      this.location = loc;
      this.velocity = v;
      this.oscillating = false;
      this.oscillationTime = 0;
      this.blinking = false;
      this.blinkTime = 0;
    }

    display()
     {
        push();
        translate(this.location.x-200, this.location.y-50);
        fill(255);
        noStroke();
        ellipse(230,70,70,70);
        ellipse(190,80,40,40);
        ellipse(203,104,30,30);
        ellipse(230,100,40,40);
        ellipse(260,100,40,40);
        ellipse(266,75,30,30);
        ellipse(280,88,20,20);
        
        // Eyes
        fill(0);
        if (this.blinking) // rectangle eye
        {
            rect(220,60,10,5);
            rect(240,60,10,5);
        } 
        else // the round eye
        {
            ellipse(220,60,10,10);
            ellipse(240,60,10,10);
            fill(255);
            ellipse(222,58,4,4);
            ellipse(242,58,4,4);
        }

        // Smile when clicked
        if (this.oscillating)
        {
          stroke(0);
          noFill();
          bezier(220, 80, 225, 90, 235, 90, 240, 80);
        }
        pop();
      }
    

    update() 
      {
        this.location.add(this.velocity);
        if (this.oscillating) 
        {
          this.location.y += sin(frameCount * 0.2) * 2;
         
          this.oscillationTime++;
          if (this.oscillationTime > 30) 
          {
            this.oscillating = false;
            this.oscillationTime = 0;
            this.blinking = false;
          }
        }
        if (this.blinking) 
        {
            this.blinkTime++;
            if (this.blinkTime > 10) 
            {
              this.blinking = false;
              this.blinkTime = 0;
            }
        }
      }


    isClicked(x, y)
    {
        let d = dist(x, y, this.location.x, this.location.y);
        return d < 50;
    }

    smileAndOscillate() 
    {
        this.oscillating = true;
        this.oscillationTime = 0;
        this.blinking = true;
        this.blinkTime = 0;
    }

    outofScreen()
    {
        if (this.location.x < -200)
        {
            return true;
        }
        else 
        {
          return false;
        }
    }
}
class Crab
{
    constructor(loc, v){
        this.location = loc; //a vector is passed into a vector
        this.velocity = v; // vector object
        this.lifespan = 300; //a variable with the class
      }

    display()
    {
        fill(255, this.lifespan);
        //ellipse(this.location.x, this.location.y, 48, 48);
        // CRAB
        push();
        translate(this.location.x-220, this.location.y-250);
        fill(255, 0, 0);
        ellipse(215,256, 40,30);
        strokeWeight(3);
        line(222,242,224,232);
        line(209,242,207,233);
        stroke(0, 0, 0);
        fill(0, 0, 0);
        ellipse(224,230, 10,10);
        ellipse(206,230,10,10);
        fill(255,255,255);
        ellipse(208,229, 7,7);
        ellipse(227,230,7,7);
        strokeWeight(1);
        push();
        translate(187, 236);
        noFill();
        strokeWeight(3);
        bezier(38,13,29,32,18,19,18,14);
        pop();
        line(232,248,242,238);
        line(197,249,186,238);
        fill(255, 0, 0);
        ellipse(247,226, 15,25);
        ellipse(180,228, 15,25);
        fill(255, 173, 86 );
        noStroke();
        ellipse(247,220, 10,20);
        ellipse(180,220, 10,20);
        stroke(0,0,0);
        strokeWeight(3);
        line(195,256,190,256);
        line(197,261,191,262);
        line(199,265,195,267);
        line(235,257,240,257);
        line(234,261,239,264);
        line(230,266,234,268);
        pop();
    }

    update()
    { // update my variables within the object
        this.location.add(this.velocity);
        this.lifespan -= 1;
    }
    
      isDead()
    {
        if(this.location.y <510)
        {
            return true;
        }
        if(this.lifespan < 0.0)
        {
          return true;
        }
        else 
        {
          return false;
        }
    }


}
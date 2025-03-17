class cloud
{
    constructor(loc,v)
    {
        this.location = loc; //a vector is passed into a vector
        this.velocity = v; 
    }
    display()
    { 
        push();
        translate(this.location.x-200, this.location.y-50);
        noStroke();
        fill(255, 255, 255);
        //fill(255, 0, 240 );
        ellipse(230,70,70,70);
        ellipse(190,80,40,40);
        ellipse(203,104,30,30);
        ellipse(230,100,40,40);
        ellipse(260,100,40,40);
        ellipse(266,75,30,30);
        ellipse(280,88,20,20);
        pop();
    }

    update()
    { // update my variables within the object
        this.location.add(this.velocity);

    }

    outofScreen()
    {
        if (this.location.x < 0)
        {
            return true;
        }
        else 
        {
          return false;
        }
    }
}
class human
{
    constructor(x,y,b)
    {
        this.x = x;
        this.y = y/2;
        this.b = 40 + b;
    }

    display()
    {  
        //top of hat
        fill(255, 162, 162 );
        ellipse(689,307,70,40);
        
        fill(204, 216, 30);        //head
        ellipse(690,358, 100,100);
        
        fill(204, 216, 30);
        beginShape();    // Left FOOT
        vertex(673, 470);
        vertex(621, 478);
        vertex(606+this.x, 566+(this.y/2)); //moving
        vertex(589+this.x, 573+(this.y/2));
        vertex(591+this.x, 581+(this.y/2));
        vertex(615+this.x, 573+(this.y/2)); // moving
        vertex(628, 486);
        vertex(673, 483);
        endShape();

        
       fill(138, 138, 138 ); //BODY
       ellipse(690,447,this.b,80);
        
       fill(204, 216, 30);
       rect(690,431, 10,50); // arm
     
        fill(204, 216, 30); 
        beginShape();    // Right FOOT
        vertex(680, 473);
        vertex(640, 478);
        vertex(626-this.x, 566-this.y); //moving
        vertex(600-this.x,573-this.y);
        vertex(610-this.x, 581-this.y);
        vertex(635-this.x, 573-this.y); // moving
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
    
}

class snowflakes
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.size = random(1,7);
        this.speed = random(1,3);
    }

    update()
    {
        this.y += this.speed;
        this.x += sin(this.y * 0.2) * 2;
    }

    outofbound()
    {
        return this.y > height;
    }

    display()
    {
        stroke(255);
        strokeWeight(2);
        fill(255);
        ellipse(this.x,this.y,this.size,this.size);
        stroke(0);
        strokeWeight(2);
    }
}

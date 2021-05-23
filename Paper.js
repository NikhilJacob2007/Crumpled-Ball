class Paper {

    constructor(x, y, radius){

        var options = {

            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2

        }

        this.x = x;
        this.y = y;

        this.r = radius;

        this.image = loadImage("paper.png");

        this.body = Bodies.circle(x,y,(this.r-20),options);

        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;

        push()

        translate(pos.x, pos.y);
        imageMode(CENTER);
        //ellipse(0, 0, this.r);
        image(this.image, 0, 0, this.r*4, this.r*4);

        pop()

    }

}

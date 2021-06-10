class ComputerArrow {

    //create contructor and give parameters
    constructor(x, y, width, height, archerAngle) {

        //to give options
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0,
            isStatic: true
        };
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);

        //to load images
        this.image = loadImage("./assets/arrow.png");

        //to add it on World
        World.add(world, this.body);
    }

    //function to display
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
class PlayerBase {

    //create contructor and give parameters
    constructor(x, y, width, height) {

        //to give options
        var options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        //to load images
        this.image = loadImage("./assets/base1.png");

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
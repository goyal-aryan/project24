class PlayerArcher {

    //create contructor and give parameters
    constructor(x, y, width, height) {

        //to give options
        const options = {
            isStatic: true
        };

        this.body = Matter.Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.collapse = false;

        //to load images
        this.image = loadImage("./assets/playerArcher.png");

        //to add it on World
        World.add(world, this.body);

        //to set the angle 
        Matter.Body.setAngle(this.body, -PI / 2); // -90 degree
    }

    //function to display
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        if (keyIsDown(DOWN_ARROW) && angle < -1.2) {
            angle += 0.01;
            Matter.Body.setAngle(this.body, angle);
        }

        if (keyIsDown(UP_ARROW) && angle > -1.9) {
            angle -= 0.01;
            Matter.Body.setAngle(this.body, angle);
        }

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
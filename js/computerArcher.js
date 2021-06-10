class ComputerArcher {

    //create contructor and give parameters
    constructor(x, y, width, height) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        //to give options
        var options = {

            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, this.width, this.height, options);

        //to load images
        this.image = loadImage("./assets/computerArcher.png");

        //to add it on World
        World.add(world, this.body);
    }

    //function to display
    display() {

        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        Matter.Body.setAngle(this.body, PI / 2);


        // if (move === "UP" && computerArcher.body.angle < 1.77) {
        //     angleValue = 0.1;
        // } else {
        //     angleValue = -0.1;
        // }

        // if (move === "DOWN" && computerArcher.body.angle > 1.47) {
        //     angleValue = -0.1;
        // } else {
        //     angleValue = 0.1;
        // }
    }
}
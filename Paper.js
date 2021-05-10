class Paper {

    constructor(x, y){

        var options = {
            isStatic: true,
            restitution:0.9,
            density: 0.5
            }

        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.width = 50;
        this.height = 50;
        this.x = x;
        this.y = y;
        this.image = loadImage("paper.png");

        World.add(world, this.body);

    }
    display(){
        var angle = this.angle;
        var paperPos = this.body.position;
        push();
        translate(paperPos.x, paperPos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        pop();

        if(paperPos.x === mouseX && paperPos.y === mouseY){

            paperPos.x = mouseX;
            paperPos.y = mouseY;
        }
    }
}
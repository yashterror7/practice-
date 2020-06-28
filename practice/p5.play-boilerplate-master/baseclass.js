class Base {
    constructor(x,y,width,height,angle){
        var options = {
            restitution :1.0
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/base.png");
    World.add (world,this.body);
    }
    display(){
        var angle = this.body.angle
        push();
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(angle);
        fill("red");
        strokeWeight(6);
        stroke("white");
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
         pop();
    }

}
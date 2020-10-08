class Stone{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        } 
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.image= loadImage("sprites/stone.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.image.position.x,this.image.position.y,this.width,this.height);
    }
}
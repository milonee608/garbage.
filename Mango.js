class Mango{
    constructor(x,y,radius){
        var options={
           isStatic:true,
           restitution:0,
           friction:1
        }
        this.mango=Bodies.circle(x,y,radius,options);
        this.image=loadImage("sprites/mango.png");
        World.add(world,this.mango);
    }
    display(){
        imageMode(CENTER);
        image(this.mango,this.mango.position.x,this.mango.position.y);
    }
}
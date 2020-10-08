
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var boy,tree,mango,ground,stone,mango1,mango2,mango3,chain;
function preload()
{
	boy=loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    boy= Bodies.rectangle(300,400,10,50);
	ground= new Ground(400,690,800,10);
	tree= new Tree(600,680,30,100);
	stone= new Stone(200,200,10,10);

	mango= new Mango(450,550,5);
	mango1=new Mango(460,540,5);
	mango2=new Mango(480,530,5);

	chain= new Chain(stone.body,{x:260,y:450})
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rect();

  ground.display();
  tree.display();
  stone.display();
  mango.display();
  mango1.display();
  mango2.display();
  chain.display();
  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
 }
 function mouseReleased(){
	 chain.fly();
 }
 
 



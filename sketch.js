
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roof,rope1,rope2,rope3,rope4,rope5,world;
var bd=40;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 	roof=new Roof (width/2,height/4,width/7,20);
	starty=height/4+300;
	startx=width/2;
	bob1=new Bob(startx-bd*2,starty,bd);
	bob2=new Bob(startx-bd,starty,bd);
	bob3=new Bob(startx,starty,bd);
	bob4=new Bob(startx+bd*2,starty,bd);
	bob5=new Bob(startx+bd,starty,bd);
	rope1=new Rope(bob1.body,roof.body,-bd*2,0);
	rope2=new Rope(bob2.body,roof.body,-bd,0)
	rope3=new Rope(bob3.body,roof.body,0,0)
	rope4=new Rope(bob4.body,roof.body,bd*2,0);
	rope5=new Rope(bob5.body,roof.body,bd,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
function keyPressed()
 {
	  if (keyCode === UP_ARROW) { 
		  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); 
		}
	 }




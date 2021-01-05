
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	block1 = new Box(390,135,400,30);
	bob1 = new Bob(390,500,50);
	bob2 = new Bob(470,500,25);
	bob3 = new Bob(550,500,25);
	bob4 = new Bob(310,500,25);
	bob5 = new Bob(230,500,25);
	rope1 = new Rope(bob1.body,{x:390,y:135});
	rope2 = new Rope(bob2.body,{x:470,y:135});
	rope3 = new Rope(bob3.body,{x:550,y:135});
	rope4 = new Rope(bob4.body,{x:310,y:135});
	rope5 = new Rope(bob5.body,{x:230,y:135});

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  block1.display()
 bob1.display()
 bob2.display()
 bob3.display()
 bob4.display()
 bob5.display()
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()
}
function mouseDragged(){
    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
    }
// function mouseReleased(){
//     rope1.fly()
// }




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;
	
	rect1 = new Dustbin1(1110,325,20,100);
	rect2 = new Dustbin1(890,325,20,100);
	rect3 = new Dustbin1(1000,365,200,20);
	crumpledPaper = new Paper(140,34,34,34);
	ground = new Ground(600,386,1200,20);
	
	
}

function draw() {

  background("lightblue");
  Engine.update(engine);
  rectMode(CENTER);

  Engine.update(engine);
  
  crumpledPaper.display();
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:60,y:-85});
	}
}
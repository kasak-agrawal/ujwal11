const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
function preload()
{
	boy=loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1300, 600);

   engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(600,500);
	ground = new Ground(width/2, 600, width, 20);
	
Engine.run(engine);
  
}

function draw() {
  //rectMode(CENTER);
  background(220);
   image(boy ,200,340,200,300);
  ground.display();
  tree.display();
  drawSprites();
}




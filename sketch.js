var helicopterBody,helicopterIMG, helicopterSprite;
var packageBody,packageSprite,packageIMG;
var groundBody,groundSprite;
var box;
var myengine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	//myenginge
	myengine = Engine.create()
    world = myengine.world
	
	//package sprite
	packageSprite=createSprite(width/2, 300, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	//helicopter sprite
	helicopterSprite=createSprite(width/2, 300, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	//ground sprite
	groundSprite=createSprite(width/2, height, width,10);
	groundSprite.shapeColor=color("brown")

	//Create the package
	packageBody = Bodies.circle(width/2 , 300 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	//Create the helicopter
	helicopterBody = Bodies.rectangle(width/2, 300, 10, 10 , {isStatic:true} );
	World.add(world, helicopterBody);
	//Create a Ground
	groundBody = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true} );
	 World.add(world, groundBody);
	 
	box = new Box();

	Engine.run(myengine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  box.display();
 
  //to update
  Engine.update(myengine)

  //key function
	if(keyDown("down")) {
	 //to make the package drop
	 Matter.Body.setStatic(packageBody,false)
	}
}
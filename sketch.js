var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box,box1,box2;
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxSprite=createSprite(width/2,650,200,20);
	boxSprite.shapeColor="red";

	box1Sprite=createSprite(500,610,20,100);
	box1Sprite.shapeColor="red";

	box2Sprite=createSprite(300,610,20,100);
	box2Sprite.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);

	boxBody = Bodies.rectangle(width/2,650,200,20,{isStatic:true})
	World.add(world,boxBody);

	box1Body=Bodies.rectangle(500,610,20,100,{isStatic:true});
	World.add(world,box1Body);
	
	box2Body=Bodies.rectangle(300,610,20,100,{isStatic:true});
	World.add(world,box2Body);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  ellipseMode(RADIUS)
  background(0);
  packageSprite.x= packageBody.position.x 
  keyPressed();
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
packageoptions={restitution:1}
 Matter.Body.setStatic(packageBody,isStatic=false)
  }
}




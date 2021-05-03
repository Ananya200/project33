const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snowbg_img,snow_bg;
var girl,girl_img;

var engine, world;
var drops = [];
var rand;

var maxDrops=5;

var snowCreatedFrame=0;

function preload(){

   girl_img = loadImage("girl walking.gif");

}
function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(1280,610);
     
  girl = createSprite(1200,450,50,50);
  girl . addAnimation("girlanimation",girl_img);
  //girl . addVideo("girl1animation",girl_img);
  girl.scale = 0.4;

  snowbg_img = loadImage("snow1.jpg");

  if(frameCount % 5000 === 0){

    for(var i=0; i<maxDrops; i++){
      drops.push(new snowflake(random(0,1280), random(0,610)));
    }

  }

}

function draw() {
  Engine.update(engine);
  background(snowbg_img);

  textFont("Bradley Hand ITC");
  textSize(27);
  textStyle(BOLD);
  fill(64,124,193);
  text("Snowfall is beautiful!",520,50)

  for(var i = 0; i<maxDrops; i++){
    drops[i].showDrop();
    drops[i].updateY();
 }

  drawSprites();

}

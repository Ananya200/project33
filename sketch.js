var snow , snowbg_img,snow_bg;
var girl,girl_img;
function preload(){
   snowbg_img = loadImage("snow2.jpg");
   girl_img = loadAnimation("girl walking.gif");
}
function setup() {
  createCanvas(1280,610);
     
  snow_bg = createSprite(640,250,50,50);
  snow_bg.addImage(snowbg_img);
  snow_bg.scale = 1;

  girl = createSprite(1200,450,50,50);
  girl . addAnimation("girlanimation",girl_img);
 // girl . addAnimation("girl1animation",girl_img);
  girl.scale = 0.4;
}

function draw() {
  background(0,0,0);

  drawSprites();
}
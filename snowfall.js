class snowflake {
  constructor(x,y){
      var options = {
          friction: 0.001,
          restitution:0.1           
      }
      this.rain = Bodies.circle(x,y,5,options)
      this.radius = 0;
      this.img = loadImage("snow4.webp");
      World.add(world, this.rain);
  }

  updateY(){     
      if(this.rain.position.y > height){

          Matter.Body.setPosition(this.rain, {x:random(0,1280), y:random(0,0)})
      }
  }

  showDrop(){
      imageMode(CENTER);
      image(this.img,this.rain.position.x,this.rain.position.y,this.radius+20,this.radius+20);
  }
}
  
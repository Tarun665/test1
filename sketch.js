var fixed,moving;



function setup() {

  createCanvas(800,400);
  fixed = createSprite(200, 200, 120, 70);
  moving = createSprite(600, 200, 60, 120);
  fixed.debug = false;

  moving.velocityX  = -10;
  fixed.velocityX  = 10;

}

function draw() {
  background(0);  

 



  fixed.shapeColor = color("lightgreen");
  moving.shapeColor = color("lightgreen");

  if(fixed.x - moving.x < fixed.width/2 + moving.width/2 && moving.x - fixed.x  < fixed.width/2 + moving.width/2 && fixed.y - moving.y < fixed.height/2 + moving.height/2 && fixed.y - moving.y < fixed.height/2 + moving.height/2){
    fixed.shapeColor = color("crimson");
    moving.shapeColor = color("royalblue");
    moving.velocityX  = moving.velocityX*(-1);
    fixed.velocityX  = fixed.velocityX*(-1);


  }else{
    fixed.shapeColor = color("lightgreen");
    moving.shapeColor = color("lightgreen");

  }
 

  drawSprites();
}
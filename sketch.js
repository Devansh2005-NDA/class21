var fixedRect,movingRect;
var fixed1,fixed2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  fixed1= createSprite(100, 200, 50, 80);
  fixed2= createSprite(300, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixed1.shapeColor="green";
  fixed2.shapeColor="green";
  fixedRect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log("movingRect "+movingRect.x);
  console.log("fixedRect "+fixedRect.x); 
 if(  isTouching(movingRect,fixed2)){
   //movingRect.velocityY=2;
   fixed2.velocityY=2;
 }
 if(  isTouching(movingRect,fixed1)){
  //movingRect.velocityY=2;
  fixed1.velocityY=2;
}
if(  isTouching(movingRect,fixedRect)){
  //movingRect.velocityY=2;
  fixedRect.velocityY=-2;
}
  drawSprites();
}



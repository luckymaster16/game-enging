function setup() {
  createCanvas(800,400);
  stable =createSprite(400, 200, 50, 50);
  square= createSprite(400,400,20,40);
  square.shapeColor="green";
  stable.shapeColor = "green";
  square1= createSprite(400,300,20,40);
}

function draw() {
  background(255,255,255);  
  square.y=mouseY;
  square.x=mouseX;
  if(isTouching(square,stable)){
    square.shapeColor="red";
    stable.shapeColor = "red";
  } else if(isTouching(square,square1)){
    square.shapeColor="red";
    square1.shapeColor="red";
  }else{
    square.shapeColor="green";
    stable.shapeColor = "green";
    square1.shapeColor="green";
  }
  drawSprites();
}
function isTouching(ObjectA,ObjectB){
  if (ObjectA.x-ObjectB.x<=(ObjectA.width/2+ObjectB.width/2)&& ObjectB.x-ObjectA.x<=(ObjectA.width/2+ObjectB.width/2)
  &&ObjectA.y-ObjectB.y<=(ObjectA.height/2+ObjectB.height/2)&& ObjectB.y-ObjectA.y<=(ObjectA.width/2+ObjectB.width/2)){
    
    return true;
  }
  else{
    return false;
  }
}
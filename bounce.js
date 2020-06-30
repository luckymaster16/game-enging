function setup() {
    createCanvas(800,400);
    stable =createSprite(400, 200, 50, 50);
    square= createSprite(200,200,20,40);
    square.shapeColor="green";
    stable.shapeColor = "green";
    squareX= 1;
    squareY=0;
    square.velocityY=squareY;
    square.velocityX=squareX;
    // e.velocityY=1;
  }
  
  function draw() {
    background(255,255,255);  
    bounce(stable,square);
    drawSprites();
  }
  function bounce(ObjectA,ObjectB){
    if (ObjectA.x-ObjectA.x<=(ObjectA.width/2+ObjectA.width/2)&& ObjectA.x-ObjectB.x<=(ObjectB.width/2+ObjectA.width/2)
    &&ObjectB.y-ObjectA.y<=(ObjectB.height/2+ObjectA.height/2)&& ObjectA.y-ObjectB.y<=(ObjectB.width/2+ObjectA.width/2)){
      ObjectB.velocityX*=-1;
      ObjectB.velocityY*=-1;
    }
    if (ObjectB.x-ObjectA.x<=(ObjectB.width/2+ObjectA.width/2)&& ObjectA.x-ObjectB.x<=(ObjectB.width/2+ObjectA.width/2)
    &&ObjectB.y-ObjectA.y<=(ObjectB.height/2+ObjectA.height/2)&& ObjectA.y-ObjectB.y<=(ObjectB.width/2+ObjectA.width/2)){
    //   ObjectA.velocityX=squarev*-1;
    ObjectA.velocityY=squareY;
    ObjectA.velocityX=squareX;
    }
  }
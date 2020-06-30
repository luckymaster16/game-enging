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
  function isTouching(ObjectA,ObjectB){
    if (ObjectA.x-ObjectB.x<=(ObjectA.width/2+ObjectB.width/2)&& ObjectB.x-ObjectA.x<=(ObjectA.width/2+ObjectB.width/2)
    &&ObjectA.y-ObjectB.y<=(ObjectA.height/2+ObjectB.height/2)&& ObjectB.y-ObjectA.y<=(ObjectA.width/2+ObjectB.width/2)){
      
      return true;
    }
    else{
      return false;
    }
}
function bounceOff(object1Rect,object2){
    if (object1Rect.x - object2.x < object2.width/2 + object1Rect.width/2
      && object2.x - object1Rect.x < object2.width/2 + object1Rect.width/2) {
        object1Rect.velocityX = object1Rect.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
  }
  if (object1Rect.y - object2.y < object2.height/2 + object1Rect.height/2
    && object2.y - object1Rect.y < object2.height/2 + object1Rect.height/2){
      object1Rect.velocityY = object1Rect.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
  }
  
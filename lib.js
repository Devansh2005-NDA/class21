function isTouching(o1,o2){
    if((abs(o1.x-o2.x)<o2.width/2+o1.width/2  )&
  (abs(o1.y-o2.y)<o2.height/2+o1.height/2  ))
    
  {return true;
    //o1.shapeColor="red";
    //o2.shapeColor="red";
  
  }
  else{return false;
    //o1.shapeColor="green";
  //o2.shapeColor="green";
  
  }
}
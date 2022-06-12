function sakuraFall(v) {
    let distToGround = 5 * 80; // distance from branch to ground = 400 centimeters
    let time = 0;
    
    if(v > 0){
      time = distToGround / v;
    }
    
    return time;
  }
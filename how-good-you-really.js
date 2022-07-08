function betterThanAverage(classPoints, yourPoints) {
    let classAvg = 0;
    for ( i = 0; i < classPoints.length; i++){
      classAvg += classPoints[i]; 
    }
    classAvg = classAvg/classPoints.length; 
    return yourPoints > classAvg;
  }
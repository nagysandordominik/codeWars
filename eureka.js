function sumDigPow(a, b) {
    let resultArr = [];
    let tempString = [];
    let sum;
    
    for(i = a; i < b; i++){
      sum = 0;
      tempString = ("" + i).split("");
      for(j = 0; j < tempString.length; j++)
        sum += Math.pow(tempString[j], j+1);
      if(sum === i)
        resultArr.push(i);   
    }
    return resultArr;
  }
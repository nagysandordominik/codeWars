function high(x){
    let arr = x.toLowerCase().split(" ");
    let sum = 0;
    let holder = 0;
    let holder2 = 0;
    for(i = 0; i < arr.length; i++) {
    
      for(j = 0; j < arr[i].length; j++) {
      
        sum += arr[i].charCodeAt(j) - 96;
        
      }
    
      if (sum > holder) { 
        holder = sum;
        holder2 = i;
  
       }
      sum = 0;
    }
      return arr[holder2];
    
  }
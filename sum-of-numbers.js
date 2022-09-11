function GetSum(a,b){
    if(a===b){
      return a;
    }
    let result = 0;
    
    let x = a, y = b;
 
    if(a > b) {
       x = b, y = a;
    }
    for(i = x; i <= y; i++ ) {
      result += i;
    }
    
   return result;
    
 }
function findMultiples(int,limit){
    let result = []
    
    for (i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
  }
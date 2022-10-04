function comp(a1, a2){
  
    if(a2 === null || a1 === null) {
      
      return false;
    }
    
    const a1maped = a1.map((e) => {
      return e * e;
    })
    
    a2.sort(), a1maped.sort()
  
    return JSON.stringify(a2) === JSON.stringify(a1maped)
   
  }
function isValid(formula){
  
    const cannot = (a, b) => {
         const containsA = formula.includes(a);
         const containsB = formula.includes(b);
         return containsA !== containsB || !containsA;
    }                        
    const must = (a, b) => formula.includes(a) === formula.includes(b);
    
    const any = (a, b) => formula.includes(a) || formula.includes(b);
   
    return cannot(1, 2) && cannot(3, 4) && must(5, 6) && any(7, 8);
  }
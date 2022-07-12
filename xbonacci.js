function Xbonacci(signature, n){
    let result = signature.slice(0, n);
    let length = signature.length;
    for (index = length; index < n; index++){
      result[index] = 0;
      for (index2 = 1; index2 <= length; index2++){
        result[index] += result[index - index2];
      }
    }
    return result;
  }
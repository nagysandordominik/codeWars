function getCount(str) {
    let vowelsCount = 0;
    let vowels = ["a","e","i","o","u"];
    for(i = 0;i < str.length;i++){
      for(j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }
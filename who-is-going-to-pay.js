function whoIsPaying(name){
    let arr = [name];
    if ( name.length > 2 ) arr.push(name.slice(0, 2));
    return arr;
  }
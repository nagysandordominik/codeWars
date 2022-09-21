function accum(str) {
    let res = [];
    for(i = 0; i < str.length; i++) {
      let row = '';
      for(j = 0; j < i + 1; j++) {
        row += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();      
      }
      res.push(row);
    }
    return res.join('-');
  }
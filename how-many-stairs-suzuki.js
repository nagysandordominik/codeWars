function stairsIn20(s){
    let stairs = 0;
    for (i = 0; i < s.length; i++) {
      for (j = 0; j < s[i].length; j++) {
        stairs += s[i][j];
      }
    }
    return stairs * 20;
  }
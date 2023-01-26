function charFreq(message) {
    const as = message.split(``);
    const colvo = {};
    
      for (let i of as) {
        console.log(as[i]);
        if (colvo[i] === undefined) {
          colvo[i] = 1;
        } else {
          colvo[i] ++;
        }
      }
      return colvo;
     }
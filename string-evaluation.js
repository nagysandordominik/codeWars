function string_evaluation(string,condition){
    let count = {};
    let con = "";
    let out = [];
    let a = '';
    let b = "";
    for (i = 0; i < string.length; i++) {
      count[string[i]] = (count[string[i]] || 0) + 1;
    }
    for (i = 0; i < condition.length; i++) {
      con = condition[i].substring(1, condition[i].length - 1);
      a = (count[condition[i].substring(0, 1)] || condition[i].substring(0, 1));
      b = (count[condition[i].substring(condition[i].length - 1)] || condition[i].substring(condition[i].length - 1))
      console.log(b)
  
      if (con == "==") {
        if (a == b){
          out.push(true);
        } else {
          out.push(false);
        }
      }else if (con == "!=") {
        if (a != b){
          out.push(true);
        } else {
          out.push(false);
        }
      }else if (con == ">=") {
        if (a >= b){
          out.push(true);
        } else {
          out.push(false);
        }
      }else if (con == "<=") {
        if (a <= b){
          out.push(true);
        } else {
          out.push(false);
        }
      }else if (con == ">") {
        if (a > b){
          out.push(true);
        } else {
          out.push(false);
        }
      }else if (con == "<") {
        if (a < b){
          out.push(true);
        } else {
          out.push(false);
        }
      }
    }
    return out;
  }
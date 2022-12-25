function tripleTrouble(one, two, three) {
    let result = "";
    for (i = 0; i < one.length; i++) {
      result += one.charAt(i) + two.charAt(i) + three.charAt(i);
    }
    return result;
  }
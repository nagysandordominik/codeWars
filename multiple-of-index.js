function multipleOfIndex(array) {
    let newArr = [];
    if (array.length > 1) {
      for (let i=1; i<array.length; i++) {
        if ((array[i]%i) == 0) {
          newArr.push(array[i]);
        }
      }
    }
    return newArr;
  }
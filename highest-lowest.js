function highAndLow(numbers) {
    let low, high, data = numbers.split(" ");
    for (i = 0, length = data.length; i < length; i++) {
      let num = + data[i];
      if (low === undefined || num < low) low = num;
      if (high === undefined || num > high) high = num;
    }
    return high + " " + low;
  }
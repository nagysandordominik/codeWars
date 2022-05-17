// You will be given an array of numbers which can be used using the String.fromCharCode() (JS)
// method to convert the number to a character. It is recommended to map over the array of numbers and
// convert each number to the corresponding ascii character.

var ArrowFunc = function(arr) {
    return arr.map(numbers => String.fromCharCode(numbers)).join('');
  }

ArrowFunc(([84,101,115,116]))
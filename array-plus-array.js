// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    const result1 = arr1.reduce(function (a, b) {
        return a + b;
      }, 0);
    const result2 = arr2.reduce(function (a, b) {
        return a + b;
      }, 0);
    return result1 + result2;
  }

  arrayPlusArray([1, 2, 3], [4, 5, 6])

// // Better solutions

// function arrayPlusArray(...arrays) {
//     return [].concat(...arrays).reduce((a,b) => a+b,0)
//   }

//   function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
//   }
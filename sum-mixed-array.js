// Given an array of integers as strings and numbers, return the sum of the array values
//  as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    let intArray = x.map(Number);
    let number = 0;
    for (let i = 0; i < intArray.length; i++) {
        parseInt(intArray[i]);
        number += intArray[i];
    }
    return number;
}
console.log(sumMix(["2",6,"3",5,4]))


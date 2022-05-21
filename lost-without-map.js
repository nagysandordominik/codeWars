// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    let number = [];
    for (i = 0; i < x.length; i++) {
        number.push(x[i] * 2)
    }
    return number;
}

maps([1,2,3])
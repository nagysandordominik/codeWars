// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    const numbers = x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1')
        return numbers;
}

fakeBin('4538559310');

// 4 5 3 8 5 5 9 3 1 0
// 0 1 0 1 1 1 1 0 0 0
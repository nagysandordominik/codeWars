// You will be given a vector of strings. You must sort it alphabetically 
// (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
    let orderedArray = s.sort();
        let firstValue = orderedArray[0].match(/.{1,1}/g);
            let finalValue = firstValue.join('***');

    return finalValue;
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    const twoName = name.split(' ');
        let firstTwoLetter = twoName[0].charAt(0) + '.' + twoName[1].charAt(0);
        firstTwoLetter = firstTwoLetter.toUpperCase();
        console.log(firstTwoLetter);
}

abbrevName('nagy sándor')
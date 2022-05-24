// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291

function uniTotal (string) {
    let result = 0;
        for (i=0; i < string.length; i++){
             result += string[i].charCodeAt() 
        }
        return result;
    }

uniTotal('aaa')
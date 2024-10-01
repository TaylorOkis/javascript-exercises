const reverseString = function (string) {

    reversed_word = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversed_word += string[i];
    }

    return reversed_word;
};

// Do not edit below this line
module.exports = reverseString;

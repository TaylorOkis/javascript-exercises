const repeatString = function (word, number_of_times) {
    let repeatWord = '';
    if (number_of_times >= 0) {
        for (let i = 0; i < number_of_times; i++) {
            repeatWord += word;
        }
    } else {
        return 'ERROR';
    }
    return repeatWord;
};

// Do not edit below this line
module.exports = repeatString;

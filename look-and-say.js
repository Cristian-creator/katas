// https://www.codewars.com/kata/530045e3c7c0f4d3420001af/train/javascript

const lookSay = (number) => {
    const digitsArray = number.toString().split('');
    let result = [];
    let previousDigit = digitsArray[0];
    let countOfTheCurrentDigit = 1;

    for(let i = 1;i <= digitsArray.length;i++) {
        if(digitsArray[i] === previousDigit) {
            countOfTheCurrentDigit++;
        } else {
            result.push(countOfTheCurrentDigit, previousDigit);
            previousDigit = digitsArray[i];
            countOfTheCurrentDigit = 1;
        }
    }

    return parseInt(result.join(''));
};

const lookSay2 = (number) => {
    const digitsArray = number.toString().split('');
    let previousDigit = digitsArray[0];
    let countOfTheCurrentDigit = 1;
    let result = 0;
    const multiplier = 100;

    for(let i = 1;i <= digitsArray.length;i++) {
        if(digitsArray[i] === previousDigit) {
            countOfTheCurrentDigit++;
        } else {
            result *= multiplier;
            result += countOfTheCurrentDigit * 10 + parseInt(previousDigit); 
            previousDigit = digitsArray[i];
            countOfTheCurrentDigit = 1;
        }
    }

    return result;
};

// expected - 111221
console.log(lookSay(12111));
console.log(lookSay2(12111));

// https://www.codewars.com/kata/55143152820d22cdf00001bb/train/javascript

// count from 1 to n
// return the number of aparitions of the number 9
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ... 19, 29, 39, 49... 90, 91, 92 ... 99 ... 100... 10009... 19950... 19990 .... 19999

// first solution:
// 'count' the aparitions for units -> for each hundred 9 appears for 10 times 
// 'count' the aparitions for tens -> for each hundred 9 appears for 10 times
// 'count' the aparitions for hundreds -> for each thousand 9 appears for 100 + 10 * 10 = 200 times -> 900, 901, 

// second solution:
// create permutations of numbers smaller than the given one which contain at least one digit 9
// ex: n = 1200 -> 9 19 29 39 .... 109 119
// start with permutations from 3 digits 

const number9 = (n) => {
    const numberOfDigits = n.toString().length;

    if(numberOfDigits < 2) {
        // ... pretty hardcoded result
    } 

    // backtracking -> 9, 19, 29, 39 .... 90, 91, 92.... 99.... 109, 119 ... 192, 193.... 209....1009, 1549, 1599
    // should keep in a state the following data:  
    for(let currentNumberOfDigits = 2;currentNumberOfDigits <= numberOfDigits;currentNumberOfDigits++) {
        
    }

};

console.log(number9(10));
console.log(number9(80));
console.log(number9(100));

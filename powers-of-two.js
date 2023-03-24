// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

// algorithm: creates a new array with n length filled with 2. e.g. n = 5 -> [2, 2, 2, 2, 2]
// then map over the array and 'replace' each element to the value of itself taken to power of its index: 
// -> second element is going to be 2 at power 1
// -> third element is going to be 2 at power 2
// -> fourth element is going to be 2 at power 3

const powersOfTwo = (n) => new Array(n + 1).fill(2).map((current, index) => Math.pow(current, index));
// OR
const powersOfTwo2 = (n) => Array.from({length: n + 1}, (v, k) => 2 ** k);

console.log(powersOfTwo2(5));
console.log(powersOfTwo(5));



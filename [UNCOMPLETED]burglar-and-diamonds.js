// https://www.codewars.com/kata/63a15a3511e6e70023e7d0d3/train/javascript

// ['*.*.*.*.*.',           // 5 moves
//  '...*..**..',
//  '**.**...*.',
//  '**..**..**']

// const diamondBurglar = (locker) => {
//   let movesCounter = 0;

//   locker.map((row) => {
//     const rowObjects = row.split('');

//     for(let i = 0;i < rowObjects.length;i++) {
//         if(rowObjects[i] === '*') {
//             movesCounter++;

//             if(rowObjects[i + 1] === '*') {
//                 i++;
//             }
//         }
//     }
//   });

//   return movesCounter;
// };

const diamondBurglar = (locker) => {
  return locker.join('|').reduce((previousValue, currentValue) =>  , 0)
};

const lockerData = 
    ['*.*.*.*.*.',
    '...*..**..',
    '**.**...*.',
    '**..**..**'];

console.log(diamondBurglar(lockerData));
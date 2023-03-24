// https://www.codewars.com/kata/62c93765cef6f10030dfa92b

// from 1 to 1:                   0 jumps
// from 1 to 2: 1 -> 2            1 jumps
// from 1 to 3: 1 -> 2 -> 3            2 jumps
// from 1 to 4: 1 -> 4            2 jumps
// from 1 to 5: 1 -> 4 -> 5            2 jumps
// from 1 to 10: 1 -> 4 -> 7 -> 10            3 jumps
// from 1 to 11: 1 -> 4 -> 7 -> 10 -> 11            4 jumps
// from 1 to 19: 1 -> 4 -> 7 -> 10 -> 13 -> 16 -> 19            6 jumps
// from 1 to 20: 1 -> 4 -> 7 -> 10 -> 13 -> 16 -> 19 -> 20            7 jumps
// from 1 to 21: 1 -> 4 -> 7 -> 10 -> 13 -> 16 -> 19 -> 20 -> 21            8 jumps
// from 1 to 22: 1 -> 4 -> 7 -> 10 -> 13 -> 16 -> 19 -> 22            7 jumps

// from 5 to 7: 5 -> 6 -> 7      2 jumps

const solution = (start, finish) => {
  if(start === finish) return 0;

  let currentShelf = start;
  let numberOfJumps = 0;
  let done = 1;

  while(done) {
    if(finish - currentShelf > 3) {
        currentShelf += 3;
        numberOfJumps++;
    } else {
        const remainingShelves = finish - currentShelf;
        currentShelf += remainingShelves;

        if (remainingShelves === 1 || remainingShelves === 3) {
            numberOfJumps++;
        } else if (remainingShelves === 2) {
            numberOfJumps += 2;
        }

        done = 0;
    }
  }

  return numberOfJumps;
}

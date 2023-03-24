// https://www.codewars.com/kata/57c15d314677bb2bd4000017/train/javascript

// input: 5
// initial stage: closed, closed, closed, closed, closed
// stage 1: opened, opened, opened, opened, opened
// stage 2: opened, closed, opened, closed, opened
// stage 3: opened, closed, closed, closed, opened
// stage 4: opened, closed, closed, opened, opened
// stage 5: opened, closed, closed, opened, closed
// output: 2 - the number of opened doors

const doors = (n) => {
    // false represents the closed status
    let doors = new Array(n + 1).fill(false);
    
    for(let i = 1;i <= n;i++) {
        for(let j = i;j <= n;j += i) {
            doors[j] = !doors[j]; 
        }
    }
    
    return doors.filter((door) => door).length;
}

function doors2(n){
    return ~~Math.sqrt(n);
}

console.log(doors(5));
console.log(doors2(5));

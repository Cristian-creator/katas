// https://www.codewars.com/kata/58b1ae711fcffa34090000ea/train/javascript

// 0 - fully closed - decrease the level in order to close
// 5 - opened       - increase the level in order to open
// create an Array named 'status' which stores 3 values: 'opening', 'closing', 'paused' 
// when an event occurs '.' check the status and do the according changes:
//      - on opening increase the level (if it is under 5)
//      - on closing decrease the level (if it is over 1)
//      - on pause do nothing
// track the button clicks and when it is pressed 'P':
// -> if the event's parity is odd ( % 2 === 1) increase/decrease/do nothing based on the status:
//      - if the level is 0 or 5 ( the door is full closed or opened ) change the status & do the changes according to it
//      - if the level is different than 0 or 5 then the button press acts like a 'resume' btn and make the changes over level according to the status
// -> if the event's parity is even ( % 2 === 0 ):
//      - if the level is 0 or 5 (the door is full closed or opened) change the status & do the changes according to it
//      - if the level is different than 0 or 5 then the button press acts like a 'pause' btn and change the status to paused
// -> if an obstacle is encountered 'O' (it can happen ONLy after an odd button press and the level is different than 0 or 5):
//      - reverse the door's direction <=> reverse the status and do the according changes over the level

function door(events) {
    const eventsList = events.split('');
    let status = new Array(eventsList.length);
    let buttonClicks = 0;
    let level = 0;
    let output = '';

    const getTheLastStatusBeforePause = () => status.reverse().find((item) => item && item !== 'paused');

    for(let i = 0;i < eventsList.length;i++) {
        if(eventsList[i] === '.') {
            if(status[i - 1] === 'opening') {
                if(level < 5) level++;

                status[i] = 'opening';
            } else if(status[i - 1] === 'closing') {
                if(level > 0) level--;

                status[i] = 'closing';
            } else if(status[i - 1] === 'paused') {
                status[i] = 'paused';
            }

            output += level;
        } else if(eventsList[i] === 'P') {
            buttonClicks++;

            if(level === 0) {
                status[i] = 'opening';
                level++;
            } else if(level === 5) {
                status[i] = 'closing';
                level--;
            } else if(level > 0 && level < 5) {
                if (status[i - 1] === 'paused') {
                    status[i] = getTheLastStatusBeforePause();
                    
                    if(status[i] === 'opening') level++;
                    else if(status[i] === 'closing') level--;
                } else {
                    status[i] = 'paused';
                }
            }

            output += level;
        } else if(eventsList[i] === 'O') {
            if(status[i - 1] === 'opening') {
                status[i] = 'closing';
                level--;
            } else if (status[i - 1] === 'closing') {
                status[i] = 'opening';
                level++;
            }
            
            output += level;
        }
    }

    return output;
}

console.log(door('.....P......P....P....'));
console.log(door('.....P......P.P.'));
console.log(door('.....P......P....P.....P...'));
console.log(door('.....P......P....P....'));
console.log(door('P..OP...P..'));
console.log(door('P.OP..P..'));
console.log(door('..P...'));
console.log(door('P.P..'));
console.log(door('P....P..P.'));
console.log(door('P......P....'));
console.log(door('P.P....P..P...'));
console.log(door('.P...O...'));
console.log(door('P......P.....P...O....O...'));
console.log(door('......P..OP..P..'));

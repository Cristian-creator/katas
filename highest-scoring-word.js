// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

const high = (x) => {
    const words = x.split(' ');
    let highestScore = 0;
    let highestScoreWord = '';

    for(let i = 0;i < words.length;i++) {
        const currentWordScore = words[i].split('').reduce((prev, current) => prev + (current.charCodeAt(0) - 96), 0);

        if(currentWordScore > highestScore) {
            highestScore = currentWordScore;
            highestScoreWord = words[i];
        }
    }

    return highestScoreWord;
};

const high2 = (x) => {
    let scores = x.split(' ').map((word) => word.split('').reduce((prev, current) => prev + (current.charCodeAt(0) - 96), 0));

    return x.split(' ')[scores.indexOf(Math.max(...scores))];
};

console.log(high('a bcc daa aaa'));
console.log(high2('a bcc daa aaa'));

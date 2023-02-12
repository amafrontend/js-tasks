const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

// Если ответ существует, верните список из двух элементов
// Если нет - то верните пустой список 
function twoSum(array, targetSum) {

	const previous = new Set();

  let b = 0;

  for (const a of array) {
    b = targetSum - a;

      if (previous.has(b)) {
        return [a, b];
      } else {
        previous.add(a);
      }
  }

  return [];
}


// const arr = [-9, -7, -6, -1, -1, 3];
// const sum = 2;
// const answer = [-1, 3];

// const arr = [-96, -93, -39, -30, -11, 11, 22, 40, 67, 84];
// const sum = -186;
// const answer = 'None';

function solve() {
    const n = readInt();
    const array = readArray();
    const targetSum = readInt();
    const ans = twoSum(array, targetSum);
    if (ans.length === 0) {
        console.log("None")    
    } else {
        process.stdout.write(`${ans.join(' ')}`);
    }
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}

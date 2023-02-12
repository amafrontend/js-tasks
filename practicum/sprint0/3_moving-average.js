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

function movingAverage(array, windowSize) {
  const result = [];
  let currentSum = 0;

  for (let i = 0; i < windowSize; i++) {
    currentSum += array[i];
  }
    
  result.push(currentSum / windowSize);
  
  for (let i = 0; i < array.length - windowSize; i++) {
    currentSum -= array[i];
    currentSum += array[i + windowSize];

    result.push(currentSum / windowSize);
  }
  console.log('result3', result )
  return result;
}

// const arr = [9, 3, 2, 0, 1, 5, 1, 0, 0];
// const k = 3;
// const answer = [4.666666666666667, 1.6666666666666667, 1, 2, 2.3333333333333335, 2, 0.3333333333333333];

// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const k2 = 4;
// const answer2 = [2.5, 3.5, 4.5, 5.5];

function solve() {
  const n = readInt();
  const arr = readArray();
  const windowSize = readInt();
  process.stdout.write(`${movingAverage(arr, windowSize).join(' ')}`);
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

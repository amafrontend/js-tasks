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
	
	const sortedArray = array.sort((a, b) => a - b);
    
  let currentSum = 0;
  
  let left = 0,
    right = array.length - 1;
        
	while (left < right) {
    currentSum = sortedArray[left] + sortedArray[right];
    if (currentSum === targetSum) {
      return [sortedArray[left], sortedArray[right]];
    } else if (currentSum < targetSum) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  
  return [];
}

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

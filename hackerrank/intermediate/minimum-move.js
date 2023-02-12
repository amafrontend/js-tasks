/**
 * There are two arrays of integers, arr1 and arr2.
 * One move is defined as an increment or decrement of one element in an array.
 * Determine the minimum number of moves to match arr1 and arr2.
 * No reordering of the digits is allowed.
 * 
 * @param {integer[]} arr1 
 * @param {integer[]} arr2 
 * @returns Integer: minimum number of moves to match arr1 with arr2
 */

function minimumMoves(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return;
  }

  const stringArr1 = arr1.map(el => String(el));
  const stringArr2 = arr2.map(el => String(el));

  let moves = 0;

  for (let i = 0; i < stringArr1.length; i++) {

    numberArr1 = Array.from(stringArr1[i]);
    numberArr2 = Array.from(stringArr2[i]);

    moves += numberArr1.reduce((acc, el, i) => {
      return acc + Math.abs(el - numberArr2[i]);
    }, 0);
  }

  return moves;
}

/**
 * Firstly, using arr.map for each input array will lead to O(2n) in sum.
 * Then, using one cycle for(,,) with array method reduce inside will lead to O(n2) complexity.
 * O(2n + n2) -> O(n2) in common for this task.
 */

 const arr1 = [123, 543];
 const arr2 = [321, 279];
 
 minimumMoves(arr1, arr2);

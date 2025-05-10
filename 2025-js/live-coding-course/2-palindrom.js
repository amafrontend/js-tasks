// #1
// Паллиндром

function isPalindrom(string) {

  if (typeof string !== 'string') {
    return false;
  }

  let newString = string.toLowerCase();

  // for (let i = 0; i < string.length; i++) {
  //   let leftIndex = i;
  //   let rightIndex = string.length - 1 - i;

  //   if (leftIndex >= rightIndex) {
  //     break;
  //   }

  //   if (newString[leftIndex] !== newString[rightIndex]) {
  //     return false;
  //   }
  // }

  let left = 0;
  let right = string.length - 1;

  while(left < right) {

    if (newString[left] !== newString[right]) {
      return false;
    }

    left++;
    right--;

  }

  return true;
}

console.log(isPalindrom('a'));
console.log(isPalindrom('abba'));
console.log(isPalindrom('abcd'));

// паттерн
// два указателя - идут навстречу друг другу
// скользящее окно - два указателя идут в одну сторону, но меняется окно переменных

// сначала всегда пишем ретурн

// Function Expression создаётся,
// когда выполнение доходит до него, и затем уже может использоваться.
/**
 * let sum = function(a, b) {
 *  return a + b;
 * };
 */

// сокращённая версия - стрелочная функция

// Function Declaration может быть вызвана раньше,
// чем она объявлена.
/**
 * function sum(a, b) {
 *  return a + b;
 * }
 */










// 5


// 4
// const stringToNumber = function(str){  
//   return Number(str);
// }

const stringToNumber = (str) => Number(str); // вернет 5e2
const stringToNumber2 = (str) => parseInt(str); // если в строке мб не только числа

const runBench = (cb) => {
  const start = new Date();
  for (let i = 0; i < 1000000; i++) {
    cb();
  }
  const end = new Date();
  console.log(`It took ${end - start} ms`);
}

// 3
// String(num)
// num.toString() // в js есть механизм объекты обертки
// function numberToString(num) {
//   return `${num}`;
// }

const numberToString = (num) => `${num};`

// 2
function evenOrOdd(number) {
  if (typeof(number) !== "number") {
    return;
  }
  
  if (number === 0 || number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}



// Конвертация числа в строку | to string
// Конвертация строки в число | to num
// Четное или нечетное | Even-Odd
// Перевернутые Строки | ReversedString

// Кратчайшее слово | ShortestWord
// Разворот числа | ReversedNumber
// Палиндромы
// Анаграммы

// Задача Чемпионат по шагам (Авито)
// Разворот числа 32 bit

// Фибоначчи (динамическое программирование)
// Top-down
// Bottom-up

// Прототипы и строки
// Прототипы и массивы
// Промисы




// Кратчайшее слово | ShortestWord

function findShort(str) {  
  const arr = str.split(' ');
  let shortestLength = arr[0].length;

  for (let i = 0; i < arr.length; i++ ) {
    shortestLength = arr[i].length < shortestLength ? arr[i].length : shortestLength;
  }

  return shortestLength;
}

// it("Testing for fixed tests", () => {
//   assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//   assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
//   assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
// })

findShort("bitcoin take over the world maybe who knows perhaps");



// Для массива nums, отсортированного по возрастанию, нужно вернуть отсортированный массив,
// полученный путём взятия модуля от каждого элемента nums.
// Проще говоря, все отрицательные элементы нужно заменить на их положительные значения,
// и итоговый массив вернуть в отсортированном порядке.

// Пример:
// Ввод: nums = [-3, -2, 0, 1, 3, 5]
// Вывод: [0, 1, 2, 3, 3, 5]

const nums = [-3, -2, 0, 1, 3, 5, 11, 12];

const sortedArr = arr => {
  const res = new Array(arr.length);

  let left = 0;
  let right = arr.length - 1;

  let index = arr.length - 1;

  while (left <= right) {
    const leftAbsNumber = Math.abs(arr[left]);
    const rightAbsNumber = Math.abs(arr[right]);

    if (leftAbsNumber < rightAbsNumber) {
      res[index] = rightAbsNumber;

      right--;
    } else {
      res[index] = leftAbsNumber;

      left++;
    }

    index--;
  }

  return res;
};

console.log(sortedArr(nums));

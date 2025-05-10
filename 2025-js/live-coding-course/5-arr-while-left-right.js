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

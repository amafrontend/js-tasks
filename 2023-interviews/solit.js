// Задача: Получить из массива последовательность значений кратных 2

const arr1 = [1, 2, 5, 6, 7, 8, 10, 100, 1000, 14, 15, 17];

function getEvenArr(arr) {
    return arr.filter(el => el % 2 === 0);
}

const newArr1 = getEvenArr(arr1);

// Реализовать метод, который на вход получает последовательность целых значений, а на выходе
// выводит последовательность, где все значения кратные 3 заменены на 'Fizz', кратные 5 на 'Buzz',
// кратные 3 и 5 на 'FizzBuzz'

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 15, 25, 34, 33, 9];

// > [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, FizzBuzz, Buzz, 34, Fizz, Fizz]

function getFizzBuzzArr(arr2) {
  
  return arr2.map((el) => {

    let str = '';
      
    if (el % 3 === 0 && el % 5 === 0) {
        return 'FizzBuzz';
    }
    
    if (el % 3 === 0) {
      str += 'Fizz';
    }

    if (el % 5 === 0) {
        return 'Buzz';
    }
      
    return el;
  });
}

function getFizzBuzzArr2(arr2) {
  
  return arr2.map((el) => {

    let str = '';
    
    if (el % 3 === 0) {
      str += 'Fizz';
    }

    if (el % 5 === 0) {
      str += 'Buzz';
    }
      
    return str || el;
  });
}

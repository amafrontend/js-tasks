// #1
//
// data это файлы, в которых импортяться другие файлы
// Нужно узнать есть ли у нас циклическая зависимость.

const data = {
  'index.js': ['foo.js'],
  'foo.js': ['baz.js', 'lol.js'],
  'baz.js': ['bar.js', 'lem.js'],
  'bar.js': ['baz.js', 'k.js'],
};

const hasCircularDep = (data, entryPoint) => {
  const paths = [];
  const stack = [entryPoint];

  while (stack.length) {
    const latestPath = stack.pop();

    if (paths.includes(latestPath)) {
      return true;
    }

    const newPaths = data[latestPath] || [];

    stack.push(...newPaths);
    paths.push(latestPath);
  }

  return false;
};

console.log(hasCircularDep(data, "index.js")); // true (baz.js <-> bar.js)
console.log(hasCircularDep(data, "foo.js")); // true (тот же цикл)
console.log(hasCircularDep(data, "lol.js")); // false (нет зависимостей)


// #2
//
//          1
//        /   \
//       5     9
//      / \   / \
//     2   3 4   3
//              /
//             2
// Условие задачи:
// Найти путь с максимальной суммой от корня до конечного узла и вернуть полученную в этом пути сумму.
// Все числа целые и положительные.
// При решении использовать только один цикл for.

// ответ 1 -> 9 -> 3 -> 2
// если задача на графы - обход в глубину или обход в ширину - рекурсия, стек (push и pop)
// обход в ширину - цикл for // for in по ключам

const tree = {
    val: 1,
    left: {
        val: 5,
        left: { val: 2 },
        right: { val: 3 }
    },
    right: {
        val: 9,
        left: { val: 4 },
        right: { 
            val: 3,
            left: { val: 2 }
        }
    }
};

function breadthSearcherTree(tree) {
  let sumMax = 0;
  let pathMax = '';

  const queue = [{ currentSum: tree.val, currentPath: `${tree.val}`, currentNode: tree }];

  for (let i = 0; i < queue.length; i++) {
    const { currentSum, currentPath, currentNode } = queue[i];

    if (currentSum > sumMax) {
      sumMax = currentSum;
      pathMax = currentPath;
    }

    if (currentNode.left) {
      queue.push({
        currentSum: currentSum + currentNode.left.val,
        currentPath: currentPath + ' -> ' + currentNode.left.val,
        currentNode: currentNode.left,
      });
    }

    if (currentNode.right) {
      queue.push({
        currentSum: currentSum + currentNode.right.val,
        currentPath: currentPath + ' -> ' + currentNode.right.val,
        currentNode: currentNode.right,
      });
    }
  }

  return pathMax;
}

console.log(breadthSearcherTree(tree));

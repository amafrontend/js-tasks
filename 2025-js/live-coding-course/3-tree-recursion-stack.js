// Обход дерева в глубину

// Задание: Нужно написать функцию обхода дерева, чтобы результат был такой: строка '831647101413'
//      8
//     / \
//    3   10
//   / \    \
//  1   6    14
//     / \   /
//    4   7 13

//      8
//     /
//    3

// 3

function recurseTree(treeExample) {
  if (!treeExample) {
    return 0;
  }

  return treeExample.value + recurseTree(treeExample.left) + recurseTree(treeExample.right);
}

function recurseTree2(treeExample) {
  if (!treeExample) {
    return '';
  }

  let str = '';

  if (treeExample.value) {
    str += treeExample.value;
  }

  if (treeExample.left) {
    str += recurseTree2(treeExample.left);
  }

  if (treeExample.right) {
    str += recurseTree2(treeExample.right);
  }

  return str;
}

function stackTree(treeExample) {
  const stack = [treeExample];

  let str = '';

  while (!!stack.length) {
    const currentNode = stack.pop();

    str += String(currentNode.value);

    if (currentNode.right) {
      stack.push(currentNode.right);
    }

    if (currentNode.left) {
      stack.push(currentNode.left);
    }
  }

  return str;
}

const tree = {
  value: 8,
  left: {
    value: 3,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 6,
      left: {
        value: 4,
        left: null,
        right: null,
      },
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 10,
    left: null,
    right: {
      value: 14,
      left: {
        value: 13,
        left: null,
        right: null,
      },
      right: null,
    },
  },
};

console.log(recurseTree(tree));
console.log(recurseTree2(tree));
console.log(stackTree(tree));

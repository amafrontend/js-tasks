// #4
// Посчитать сумму всех value в объекте 

const tree = {
  value: 1,
  children: [
      { value: 2, children: [] },
      { value: 3, children: [] }
   ]
}

// type Tree = {
//   value: number;
//   children: Tree[];
// }

const sumTreeValue = function(tree) {
  let sum = 0;

  if (tree.value) {
    sum += Number(tree.value);
  }

  if (tree.children) {
    tree.children.forEach(child => {
      sum += sumTreeValue(child);
    });
  }

  return sum;
}

const tree1 = {
  value: 2,
  children: [
      { value: 4, children: [] },
      { value: 4, children: [] }
   ]
}
// 10

const tree2 = {
  value: 2,
  children: [
      { value: 4, children: [
        { value: 4, children: [] },
        { value: 4, children: [] }
      ] },
      { value: 4, children: [
        { value: 4, children: [] },
        { value: 4, children: [] }
      ] }
   ]
}
// 26

console.log(sumTreeValue(tree1));
console.log(sumTreeValue(tree2));


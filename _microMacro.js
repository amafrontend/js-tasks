console.log(1)

setTimeout(function() {
  console.log(2)
})

Promise.resolve(3).then(console.log)

console.log(4)

setTimeout(function() {
  console.log(5)
}, 0)

console.log(6)

// 1 4 6 3 2 5
/**
 * Description
 * code появляется первым, т.к. это обычный синхронный вызов.
 * promise появляется вторым, потому что .then проходит через очередь микрозадач и выполняется после текущего синхронного кода.
 * timeout появляется последним, потому что это макрозадача.
 */

const foo2 = () => {
  console.log('foo2')

  setTimeout(foo2)
}

foo2();

// 1 4 6 'foo2' 3 2 5
// 1 4 6 'foo2' 3 'foo2' 'foo2' 'foo2' (...)


 const foo1 = () => {
  console.log('foo1')

  Promise.resolve().then(foo1)
}

foo1();

// 1 4 6 'foo2' 'foo1' 3 2 5
// 1 4 6 'foo2' 'foo1' 3 'foo1' 'foo1' 'foo1' (...)

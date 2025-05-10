const allGoods = [
  {
    id: 1,
    name: 'IPhone'
  },
  {
    id: 2,
    name: 'seeds'
  },
  {
    id: 3,
    name: 'bread'
  }
]

const topGoods = [
  {
    id: 2,
    name: 'seeds'
  },
]

const all = new Promise((resolve, rejects) => {
  resolve(allGoods);
})

const top = new Promise((resolve, rejects) => {
  resolve(topGoods);
})

// 2 API
// in parallel
// First top and after this all [top, all] without duplications
// Fault tolerance

forkJoin
combineLatest

// тесты
// отрисовать



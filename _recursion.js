// task 1

function createIncrementor(n) {
  return function(num) {
    return n + num;
  }
}

const addOneIncrementor = createIncrementor(1);
const addTenIncrementor = createIncrementor(10);

console.log(addOneIncrementor(10));
console.log(addTenIncrementor(20));

// task 2

function urlDomain(domain) {

  return function(url) {
    return `https://${url}.${domain}`
  }
}

const comUrl = urlDomain('com');

console.log(comUrl('google'));

// task 3

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: 'John', age: '25', job: 'Backend'};
const person2 = { name: 'July', age: '24', job: 'Frontend'};

bind(person1, logPerson);
bind(person2, logPerson);

//

function bind(context, fn) {
  return function(...args) {
    fn.apply(context, args);
  }
}

const logPerson1 = bind(person1, logPerson);
const logPerson2 = bind(person2, logPerson);

logPerson1();
logPerson2();


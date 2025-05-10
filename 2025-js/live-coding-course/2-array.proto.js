// реализовать метод map

Array.prototype.map((callback) => {
  let arr = [];

  for (let i = 0; i < this.length; i++ ) {
    arr.push(callback(this[i], i, this));
  }

  return arr;
})

// у обычной функции контекст определяется в момент вызова
// а у стрелочной функции 

Array.prototype.groupBy = function(fn) {
  const grouppedObj = {};

  for (let i = 0; i < this.length; i++) {
    const strKey = fn(this[i]);

    if (grouppedObj[strKey]) {
      grouppedObj[strKey].push(this[i])
    } else {
      grouppedObj[strKey] = [this[i]];
    }

  }

  return grouppedObj;
};

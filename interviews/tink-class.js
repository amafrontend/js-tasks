class EventEmitter {
  store = new Map();

  on(key, cb) {
    if (!this.store.has(key)) {
      const emptyArr = [];
      this.store.set(key, emptyArr);

      this.store.get(key).push(cb);
      return this;
    }

    this.store.get(key).push(cb);

    return this;
  }

  off(key, cb) {
    const arr = this.store.get(key);
    const index = arr.indexOf(cb);
    arr.splice(index, 1);

    if (arr.length === 0) {
      this.store.delete(key);
      return this;
    }

    this.store.set(key, arr);
    return this;
  }

  emit(key) {
    if (!this.store.get(key)) {
      return this;
    }

    const arr = this.store.get(key);
    for (let i = 0; i < arr.length; i++) {
      arr[i]();
    }

    return this;
  }

  get() {
    console.log(this.store)
  }
}

const emitter = new EventEmitter();

const cb1 = () => console.log('cb1');
const cb2 = () => console.log('cb2');
const cb3 = () => console.log('cb3');

emitter
    .on('event', cb1)
    .on('event', cb1)
    .on('event', cb2)
    .on('other event', cb3)
    .emit('event')
    .emit('other event')
    // cb1
    // cb2
    // cb3
    .off('event', cb2)
    .emit('event')
    .emit('other event')
    // cb1
    // cb3
    .off('other event', cb3)
    .emit('event')
    .emit('other event')
    // cb1
    .get();

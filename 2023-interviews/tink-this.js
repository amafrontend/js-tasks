const userService = {
  currentFilter: 'active',
  users: [
    {name: 'Alex', status: 'active'},
    {name: 'Nick', status: 'deleted'},
  ],
  getFilteredUsers: function() {
    const context = this;
    return this.users.filter(function (user) {
      return user.status === context.currentFilter;
    });
  }
}

const userService1 = {
  currentFilter: 'active',
  users: [
    {name: 'Alex', status: 'active'},
    {name: 'Nick', status: 'deleted'},
  ],
  getFilteredUsers: function() {
    const context = this;
    return this.users.filter(function (user) {
      return user.status === context.currentFilter;
    });
  }
}

const userService2 = {
  currentFilter: 'active',
  users: [
    {name: 'Alex', status: 'active'},
    {name: 'Nick', status: 'deleted'},
  ],
  getFilteredUsers: function() {
    return this.users.filter((user) => {
      return user.status === this.currentFilter;
    });
  }
}

// function (user) {} ---> (user) => {}
// function (user) {} ---> function (user) {}.bind(this)

// const context = this; this.currentFilter ---> context.currentFilter
console.log(userService.getFilteredUsers());

const getFilteredUsers = userService1.getFilteredUsers;
console.log(getFilteredUsers.call(userService1));

console.log(userService2.getFilteredUsers());


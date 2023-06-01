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

// function (user) {} ---> (user) => {}
// function (user) {} ---> function (user) {}.bind(this)
// const context = this; this.currentFilter ---> context.currentFilter
console.log(userService.getFilteredUsers());

// const getFilteredUsers = userService.getFilteredUsers;
// console.log(getFilteredUsers.call(userService));



function PUser(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

PUser.prototype.getFullname = function () {
  return `${this.firstname} ${this.lastname}`;
};

PUser.createUser = function (fn, ln) {
  return new this(fn, ln);
};

const willi = new PUser('Willi', 'Lauser');
console.log(willi);

PUser.prototype.getAge = function () {
  return 42;
};

console.log(willi.getFullname());
console.log(willi.getAge());

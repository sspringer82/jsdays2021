class Person {
  constructor(street, city) {
    this.street = street;
    this.city = city;
  }

  getAddress() {
    return `${this.street}
${this.city}`;
  }
}

class User extends Person {
  static age = 42;
  #privateFullName = 'Klaus Müller';
  fullName = 'Klaus Müller';

  firstname = '';
  lastname = '';

  constructor(firstname, lastname, street, city) {
    super(street, city);
    this.firstname = firstname;
    this.lastname = lastname;
  }

  #getFullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  greet() {
    console.log(`Hallo ${this.#getFullname()}`);
  }

  static createUser(firstname, lastname, street, city) {
    return new this(firstname, lastname, street, city);
  }
}

const klaus = new User('Klaus', 'Müller', 'Sesamstraße', 'Entenhausen');

console.log(typeof klaus); // object
console.log(klaus instanceof User); // true

// console.log(klaus.#getFullname());
// console.log(klaus.#fullName);
console.log(klaus.firstname);
klaus.greet();

console.log(klaus.getAddress());

const tina = User.createUser('firstname', 'lastname', 'street', 'city');
tina.greet();

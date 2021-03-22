import User from './user';

let n: number | string = 42;
n = 'foo';

const klaus = new User('Klaus', 'Müller');
klaus.greet();

function sayHello(user: User): void {
  console.log('Hello', user.getFullname());
}
sayHello(klaus);

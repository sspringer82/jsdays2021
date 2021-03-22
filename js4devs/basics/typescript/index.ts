import Person from './person';
import User from './user';

let n: number | string = 42;
n = 'foo';

const name: string = 'Klaus';
console.log(name);

const klaus = new User('Klaus', 'Müller', 1);
klaus.greet();

function sayHello(user: Person): void {
  console.log(`Hello ${user.firstname}`);
}
sayHello(klaus);

function add(a: number, b?: number, ...rest: number[]): number {
  if (b) {
    return a + b;
  }
  return a;
}

console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));

function doIt(bla: unknown): any {
  // magic here
}

const foo = 'string';
const bar: number = (foo as unknown) as number;
console.log(bar);

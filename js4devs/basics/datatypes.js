const bool = false;

const n = null;
const u = undefined;

var foo;
console.log(foo);
function add(a, b) {
  // if (a === undefined || b === undefined) {
  if (!a || !b) {
    console.log('you messed it up');
    return;
  }
  console.log(a, b);
}
add();
add(null, null);
add('', '');
var empty = null;
console.log('xxxx');
console.log(!!undefined); // false

// numbers
const number = 42;
const n1 = 3.14;
const n2 = 2e42;
const n3 = -44;
const sNumber = '42';
const sNumber2 = 'bla';
const n4 = parseInt(sNumber, 10);
console.log(typeof n4);
console.log(typeof sNumber);
const n5 = parseInt(sNumber2, 10);
console.log(typeof n5); // number
console.log(isNaN(n5));
console.log(Math.sqrt(-1));

console.log('value: ', (5).valueOf());

// string
const s1 = 'str"i"ng';
const s2 = "str'i'ng";
const name = 'Klaus';

// template string
const s3 = `Hallo 
${name}`;
console.log(s3);

console.log(s2.toUpperCase());

const sym = Symbol('foo');

const o = {
  name: 'Klaus',
  [name]: 'Klaus',
  [sym]: 'Klaus',
};
console.log(o[sym]);
console.log(sym);

const obj = {
  name: 'Klaus',
  greet() {
    return `Hallo ${this.name}`;
  },
};
console.log(obj.name);
obj.name = 'Peter';
console.log(obj.name);
console.log(obj.greet());

const arr = [1, 2, 3];
const arr2 = new Array();
arr.push(4);
console.log(arr.length);
console.log(arr[0]);
arr[0] = 42;
console.log(arr[0]);

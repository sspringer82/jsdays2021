const a = 42; // constant => gut - global, function, block, closure
let b = 42; // variable => ok - global, function, block, closure
var c = 42; // SOFORT VERGESSEN!  - global, function, closure

// global
const globalScope = 42;

// function
function add() {
  const number = 42;
  console.log(number);
  // block
  if (true) {
    const number2 = 42;
  }

  // console.log(number2); // reference error
}
add();
// console.log(number); // reference error

// closure Scope
function generate() {
  let value = 10_000;
  return {
    getValue() {
      return value;
    },
    setValue(v) {
      value = v;
    },
  };
}

const o = generate();
console.log(o.getValue());
o.setValue(20_000);
console.log(o.getValue());

const prim = 42; // by value;
const comp = { value: 42 }; // by reference;

// prim = 43; // typeerror
comp.value = 43;
console.log(comp.value);

function manipulate(o) {
  comp.value = 3.14;
}

console.log(comp);
manipulate(comp);
console.log(comp);

function doNotManipulate(o) {
  const clone = { ...o }; //spread operator - achtung! flache kopie
  // const clone = JSON.parse(JSON.stringify(o));
  clone.value = 43;
}

console.log(comp);
doNotManipulate(comp);
console.log(comp);

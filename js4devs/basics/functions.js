function add(a, b) {
  console.log(a, b);
  console.log(arguments); // pseudoarray arguments.length gibt's arguments.forEach gibt's nicht
  return a + b;
}

console.log(add(1)); // zu wenige mit undefined aufgefüllt
console.log(add(1, 2));
console.log(add(1, 2, 3)); // zu viele ignoriert

// variable parameterliste
function multiAdd(a, b, ...rest) {
  let result = a + b;
  // console.log(rest);

  return result + rest.reduce((prev, curr) => prev + curr, 0);
}
// const result = multiAdd(1, 2, 3);
const result = multiAdd(1, 2, 3, 4, 5);
console.log(result);

console.log('----------------');

// named function
function greet(name) {
  return 'Hallo ' + name;
}
console.log(greet('Klaus'));

// anonyme function
const greet2 = function (name) {
  return 'Hallo ' + name;
};
console.log(greet2('Klaus'));

// IIFE - für variablen scopes
const name = 'Peter';
(function () {
  const name = 'Paul';
  console.log('Hallo Welt');
})();

// callbacks
function doSomething(callBack) {
  setTimeout(function () {
    const name = 'Klaus';
    callBack(name);
  }, 1000);
  // return undefined; implizit
}

// function handleClick(event) {}
// document.querySelector('button').addEventListener('click', handleClick);
// document.querySelector('button').addEventListener('click', function (event) {});

function greetKlaus(name) {
  console.log('Hallo ', name);
}

doSomething(greetKlaus);

console.log(greetKlaus); // [Function: greetKlaus] - das Funktionsobjekt
console.log(greetKlaus()); // Referenz auf den Rückgabewert

// Arrow Function
const arr = [1, 2, 3];
const arr2 = arr.map(function (element) {
  return element * element;
});
console.log(arr2);

// parameterklammern optional
// bei einem statement {} und return optional
const arr3 = arr.map((element) => {
  return element * element;
});
const arr4 = arr.map((element) => element * element);
console.log(arr4);

const obj = {
  value: 10_000,
  getValue() {
    // setTimeout(
    //   function () {
    //     console.log('Value: ', this.value);
    //   }.bind(this),
    //   1000,
    // );
    setTimeout(() => {
      // this => umgebender Kontext
      console.log('Value: ', this.value);
    }, 1000);
  },
};
obj.getValue();

function addToTen(a, b = 10) {
  return a + b;
}
console.log(addToTen(4));

// doIt();

// const doIt = () => {
//   console.log('doit');
// };

// const doIt = function() {
//   console.log('doit');
// };

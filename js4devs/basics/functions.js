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
  console.log(callBack);
  setTimeout(function () {
    const name = 'Klaus';
    console.log(name);

    callBack(name);
  }, 1000);
  // return undefined; implizit
}

function greetKlaus(name) {
  console.log('Hallo ', name);
}

doSomething(greetKlaus);

console.log(greetKlaus); // [Function: greetKlaus] - das Funktionsobjekt
console.log(greetKlaus()); // Referenz auf den Rückgabewert

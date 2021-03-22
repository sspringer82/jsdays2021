function myAsyncFunction(cb) {
  setTimeout(() => {
    const value = 10_000;
    if (true) {
      cb(new Error());
    } else {
      cb(null, value);
    }
  }, 1000);
}

function handleAsync(e, value) {
  if (e) {
    console.log('whoops');
    return;
    // throw e;
  }
  console.log('c');
  console.log('Value is: ', value);
}
console.log('a');
myAsyncFunction(handleAsync);
console.log('b');

// output: a b c value is...

// callback hell
// myAsyncFunction(function (value) {
//   console.log('1: ', value);
//   myAsyncFunction(function (value) {
//     console.log('2: ', value);
//     myAsyncFunction(function (value) {
//       console.log('3: ', value);
//       myAsyncFunction(function (value) {
//         console.log('4: ', value);
//       });
//     });
//   });
// });

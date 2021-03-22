function myAsyncFunction(value = 10_000, timeout = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
      // reject(value);
    }, timeout);
  });
}

const promise = myAsyncFunction();
promise
  .then(function resolve(value) {
    console.log('S: ', value);
  })
  .catch(function reject(err) {
    console.log('E: ', err);
  });

myAsyncFunction()
  .then((value) => {
    console.log('1: ', value);
    return 42;
    // return myAsyncFunction();
  })
  .then((value) => {
    console.log('2: ', value);
    return myAsyncFunction();
  })
  .then((value) => {
    console.log('3: ', value);
    return myAsyncFunction();
  })
  .then((value) => {
    console.log('4: ', value);
    return myAsyncFunction();
  })
  .catch((e) => console.log('E: ', e));

Promise.all([
  myAsyncFunction(),
  myAsyncFunction(),
  myAsyncFunction(),
  myAsyncFunction(),
  myAsyncFunction(),
]).then((results) => {
  console.log(results);
});

Promise.race([
  myAsyncFunction(1, 100),
  myAsyncFunction('foo', 20),
  myAsyncFunction(true, 150),
  myAsyncFunction(),
  myAsyncFunction(),
]).then((results) => {
  console.log('Race: ', results);
});

// setInterval(() => {
//   console.log('intervall');
// }, 100);

// dirty hack ahead
console.log(0);
setTimeout(() => {
  console.log(1);
}, 0);
Promise.resolve('value').then((v) => console.log(v));
console.log(2);

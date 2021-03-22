function myAsyncFunction(value = 10_000, timeout = 1000, success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(value);
      } else {
        reject(value);
      }
    }, timeout);
  });
}

async function doIt() {
  try {
    const value = await myAsyncFunction(10, 10, false);
    console.log(value);
    return value;
  } catch (error) {
    console.error('E: ', error);
  }
}
console.log('a');
// every async function returns a promise
doIt().then(() => {
  console.log('c');
});
console.log('b');

// async functions work with promise interfaces
Promise.all([doIt(), doIt(), doIt(), doIt(), doIt()]).then((values) =>
  console.log(values),
);

const values = await Promise.all([doIt(), doIt(), doIt()]);
console.log('....');
console.log(values);
console.log('....');

console.log('1');
const value = await myAsyncFunction(100, 1000, true);
console.log(value);
console.log('2');

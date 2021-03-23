const Questionaire = require('./questionaire');
const random = require('random');

const q = new Questionaire();

let tasks = [
  { o1: getRandomNumber(), o2: getRandomNumber(), r: 0 },
  { o1: getRandomNumber(), o2: getRandomNumber(), r: 0 },
  { o1: getRandomNumber(), o2: getRandomNumber(), r: 0 },
].map((e) => ({ ...e, r: e.o1 + e.o2 }));

console.log(tasks);

function getRandomNumber() {
  return random.int((min = 0), (max = 10));
}

q.question('a')
  .then((answer) => {
    console.log('Answer: ', answer);

    return q.question('b');
  })
  .then((answer) => {
    console.log('Answer: ', answer);

    return q.question('c');
  })
  .then((answer) => {
    console.log('Answer: ', answer);

    q.close();
  });

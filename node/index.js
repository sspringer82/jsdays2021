const Questionaire = require('./questionaire');

const q = new Questionaire();

const tasks = [
  {o1: 1, o2: 2, r: 3}
  {o1: 2, o2: 2, r: 4}
  {o1: 4, o2: 4, r: 8}
];

q.question('a')
  .then((answer) => {
    console.log('Answer: ', answer);

    return q.question('b');
  })
  .then((answer) => {
    console.log('Answer: ', answer);

    return q.question('c');
  )
  .then((answer) => {
    console.log('Answer: ', answer);

    q.close();
  });

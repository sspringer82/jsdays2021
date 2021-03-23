const Questionaire = require('./questionaire');

const q = new Questionaire();

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

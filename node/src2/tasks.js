const random = require('random');

function getRandomNumber() {
  return random.int(0, 10);
}

module.exports = function createTasks(number = 1) {
  return new Array(number)
    .fill({})
    .map((e) => ({ o1: getRandomNumber(), o2: getRandomNumber(), r: 0 }))
    .map((e) => ({ ...e, r: e.o1 + e.o2 }));
};

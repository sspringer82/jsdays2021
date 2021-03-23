const getOptions = require('./cli');
const Questionaire = require('./questionaire');
const createTasks = require('./tasks');

const options = getOptions();
const q = new Questionaire();
const tasks = createTasks(options.length);

(async () => {
  for (let i = 0; i < tasks.length; i++) {
    await q.question(tasks[i]);
  }
  q.close();
})();

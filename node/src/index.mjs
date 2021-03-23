import getOptions from './cli.mjs';
import Questionaire from './questionaire.mjs';
import createTasks from './tasks.mjs';

const options = getOptions();
const q = new Questionaire();
const tasks = createTasks(options.length);

for (let i = 0; i < tasks.length; i++) {
  await q.question(tasks[i]);
}
q.close();

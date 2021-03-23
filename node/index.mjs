import Questionaire from './questionaire.mjs';
import createTasks from './tasks.mjs';

console.log(process.argv);

const q = new Questionaire();
const tasks = createTasks(10);

for (let i = 0; i < tasks.length; i++) {
  await q.question(tasks[i]);
}
q.close();

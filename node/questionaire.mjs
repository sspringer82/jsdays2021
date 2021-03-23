import { createInterface } from 'readline';

export default class Questionaire {
  constructor() {
    this.rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  question(task) {
    return new Promise((resolve, reject) => {
      this.rl.question(`${task.o1} + ${task.o2}: `, (answer) => {
        if (parseInt(answer, 10) === task.r) {
          console.log('richtig');
        } else {
          console.log('falsch');
        }
        // TODO: Log the answer in a database
        resolve(answer);
      });
    });
  }

  close() {
    this.rl.close();
  }
}

import { createInterface } from 'readline';
import chalk from 'chalk';

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
          console.log(chalk.blue.bold('richtig'));
        } else {
          console.log(chalk.yellow.bold('falsch'));
        }
        resolve(answer);
      });
    });
  }

  close() {
    this.rl.close();
  }
}

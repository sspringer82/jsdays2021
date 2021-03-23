import { createInterface } from 'readline';
import chalk from 'chalk';
import emoji from 'node-emoji';

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
          console.log(chalk.green.bold('richtig'), emoji.emojify(':beers:'));
        } else {
          console.log(
            chalk.red.bold('Das war leider nicht richtig.'),
            emoji.emojify(':skull:'),
          );
        }
        resolve(answer);
      });
    });
  }

  close() {
    this.rl.close();
  }
}

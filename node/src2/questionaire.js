const { createInterface } = require('readline');
const chalk = require('chalk');
const emoji = require('node-emoji');

module.exports = class Questionaire {
  constructor() {
    this.rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  question(task) {
    return new Promise((resolve, reject) => {
      this.rl.question(
        `${task.o1} + ${task.o2}: `,
        this.handleAnwswer.bind(this, resolve, task),
      );
    });
  }

  handleAnwswer(resolve, task, answer) {
    if (parseInt(answer, 10) === task.r) {
      console.log(chalk.green.bold('richtig'), emoji.emojify(':beers:'));
      resolve(true);
    } else {
      console.log(
        chalk.red.bold('Das war leider nicht richtig.'),
        emoji.emojify(':skull:'),
      );
      resolve(false);
    }
  }

  close() {
    this.rl.close();
  }
};

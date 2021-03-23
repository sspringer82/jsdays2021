const { createInterface } = require('readline');

class Questionaire {
  constructor() {
    this.rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  question(text) {
    return new Promise((resolve, reject) => {
      this.rl.question(`${text}: `, (answer) => {
        // TODO: Log the answer in a database
        resolve(answer);
      });
    });
  }

  close() {
    this.rl.close();
  }
}

module.exports = Questionaire;

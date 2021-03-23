const { Command } = require('commander');
const program = new Command();

module.exports = function getOptions() {
  program.option('-l, --length <number>', 'number of tasks', (i) =>
    parseInt(i, 10),
  );

  program.parse(process.argv);

  const options = program.opts();
  return options;
};

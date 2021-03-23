import { Command } from 'commander/esm.mjs';
const program = new Command();

export default function getOptions() {
  program.option('-l, --length <number>', 'number of tasks', (i) =>
    parseInt(i, 10),
  );

  program.parse(process.argv);

  const options = program.opts();
  return options;
}

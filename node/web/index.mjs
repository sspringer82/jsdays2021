import { createServer } from 'http';
import { config } from 'dotenv';
config();

console.log(process.env);

createServer((req, res) => res.end('Hallo Welt')).listen(
  process.env.PORT,
  () => {
    console.log(`Server is listening to http://localhost:${process.env.PORT}`);
  },
);

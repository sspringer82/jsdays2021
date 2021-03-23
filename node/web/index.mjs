import { createServer } from 'http';
import { config } from 'dotenv';
config();

createServer((req, res) => {
  const user = {
    id: 1,
    firstname: 'Klaus',
    lastname: 'Müller',
  };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  if (req.url.startsWith('/user/')) {
    if (req.method === 'GET') {
      res.write(JSON.stringify(user));
    }
  } else if (req.url === '/user') {
    if (req.method === 'GET') {
      res.write(JSON.stringify([user, user]));
    }
  }
  res.end();
}).listen(process.env.PORT, () => {
  console.log(`Server is listening to http://localhost:${process.env.PORT}`);
});

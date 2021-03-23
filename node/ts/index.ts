import { createServer } from 'http';
import User from './user';

createServer((req, res) => {
  const klaus = new User('Klaus', 'Müller');
  res.end(klaus.getFullname());
}).listen(8081);

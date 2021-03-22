import { createServer } from 'http';

createServer((req, res) => res.end('foo')).listen(8081);

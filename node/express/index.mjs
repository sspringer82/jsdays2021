import express from 'express';
import morgan from 'morgan';
import { createWriteStream } from 'fs';
import model from './model.js';

const app = express();

// logger
const accessLogStream = createWriteStream('./access.log', {
  flags: 'a',
});
app.use(morgan('combined', { stream: accessLogStream }));

// empty middleware
app.use((req, res, next) => {
  next();
});

// body parser
app.use(express.json());

app.get('/', async (req, res) => {
  const data = await model.getAll();
  res.json(data);
});

app.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.json({
    id: 1,
    firstname: 'Klaus',
    lastname: 'Müller',
  });
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(true);
});

app.listen(8081, () =>
  console.log('server is listening to http://localhost:8081'),
);

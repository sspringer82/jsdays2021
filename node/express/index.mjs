import express from 'express';
import morgan from 'morgan';
import { createWriteStream } from 'fs';

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

app.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.json({
    id: 1,
    firstname: 'Klaus',
    lastname: 'Müller',
  });
});

app.listen(8081, () =>
  console.log('server is listening to http://localhost:8081'),
);

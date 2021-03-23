import express from 'express';
import morgan from 'morgan';
import { createWriteStream } from 'fs';

import userRouter from './user/index.mjs';

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

app.use('/user', userRouter);

app.listen(8081, () =>
  console.log('server is listening to http://localhost:8081'),
);

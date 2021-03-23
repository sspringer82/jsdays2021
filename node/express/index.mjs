import express from 'express';

const app = express();

const user = {
  id: 1,
  firstname: 'Klaus',
  lastname: 'Müller',
};

app.get('/', (req, res) => {
  res.json(user);
});

app.listen(8081, () =>
  console.log('server is listening to http://localhost:8081'),
);

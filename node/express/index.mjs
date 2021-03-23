import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(req);
  next();
});

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

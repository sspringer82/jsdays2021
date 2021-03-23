import express from 'express';

const app = express();

const user = {
  id: 1,
  firstname: 'Klaus',
  lastname: 'Müller',
};

app.use((req, res, next) => {
  console.log(req);
  next();
});

app.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.json(user);
});
// app.post();
// app.put();
// app.delete();

app.listen(8081, () =>
  console.log('server is listening to http://localhost:8081'),
);

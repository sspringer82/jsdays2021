import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ name: 'Klaus' }));
app.listen(8081, () =>
  console.log('server is running on http://localhost:8081'),
);

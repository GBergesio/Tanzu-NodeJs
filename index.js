const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

app.get('/', (req, res) => {
  res.send('Hello, this is the main page!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const express = require('express');
const app = express();

app.get('/numbers/rand', (req, res) => {
  const randomNumbers = [1, 2, 3, 4, 5];
  res.json({ numbers: randomNumbers });
});

app.get('/numbers/odd', (req, res) => {
  const odd = [1,3,5,7,9,11,13,15,17,19,21,23];
  res.json({ numbers: odd });
});

app.get('/numbers/fibo', (req, res) => {
  const fibo = [1,1,2,3,5,8,13,21];
  res.json({ numbers: fibo });
});

app.get('/numbers/prime', (req, res) => {
  const prime = [2,3,5,7,11,13];
  res.json({ numbers: prime });
});

app.listen(3000, () => {
  console.log('Number Management Service is running on port 3000');
});

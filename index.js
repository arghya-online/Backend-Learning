require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000; // use env variable or fallback

app.get('/', (req, res) => {
  res.send('<h1>Welcome back</h1>');
});

app.get('/twitter', (req, res) => {
  res.send('arghyadotcom');
});

app.get('/login', (req, res) => {
  res.send('<h1>Do Login</h1>');
});

app.get('/youtube', (req, res) => {
  res.send('<h1>Watch our videos</h1>');
});

app.listen(PORT, () => {
  console.log(`Your app listening on port ${PORT}`);
});

const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

let users = {};
let userMusic = {};

app.get('/api/test', (req, res) => {
  res.json({ message: 'api test thing' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

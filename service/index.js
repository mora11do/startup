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


app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  
  if (users[username]) {
    res.status(400).json({ message: 'Username already exists' });
    return;
  }
  
  users[username] = { password: password };
  res.json({ message: 'User created successfully' });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  if (users[username] && users[username].password === password) {
    res.json({ message: 'Login successful', username: username });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.get('/api/music/:username', (req, res) => {
  const { username } = req.params;
  const music = userMusic[username] || [];
  res.json(music);
});

app.post('/api/music', (req, res) => {
  const { username, song } = req.body;
  
  if (!userMusic[username]) {
    userMusic[username] = [];
  }
  
  userMusic[username].push(song);
  res.json({ message: 'Music saved successfully' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const cookieParser = require('cookie-parser');
const express = require('express');

const bcrypt = require('bcryptjs');
const DB = require('./database.js');

const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

// let users = {};
// let userMusic = {};

app.get('/api/test', (req, res) => {
  res.json({ message: 'api test thing' });
});


// app.get('/api/users', (req, res) => {
//   res.json(users);
// });

app.post('/api/register', async (req, res) => {
   try {
  const { username, password } = req.body;

  const existingUser = await DB.getUser(username);
    if (existingUser) {
      res.status(400).json({ message: 'Username already exists' });
      return;
    }

    const passwordHash = await bcrypt.hash(password, 10);

  const user = {
      username: username,
      password: passwordHash,
      created: new Date()
    };
    await DB.addUser(user);
    
    res.json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const user = await DB.getUser(username);
    
    if (user && await bcrypt.compare(password, user.password)) {
      res.json({ message: 'Login successful', username: username });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

app.get('/api/music/:username', async (req, res) => {
  try {
  const { username } = req.params;
  const music = await DB.getSong(username);
   res.json(music);
  } catch (error) {
 res.status(500).json({ message: 'Error fetching music', error: error.message });
  }
});

app.post('/api/music', async (req, res) => {
  try {
  const { username, song, public } = req.body;
  
  const musicObj = {
      username: username,
      song: song,
      public: public || false,
      created: new Date()
    };

   await DB.addSong(musicObj);

     res.json({ message: 'Music saved successfully' });

    } catch (error) {
 res.status(500).json({ message: 'Error saving music', error: error.message });
    }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const http = require('http');
const { WebSocketServer } = require('ws');

const multer = require('multer');
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 25 * 1024 * 1024 }, // 25MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype && file.mimetype.startsWith('audio/')) cb(null, true);
    else cb(new Error('Invalid audio type'));
  },
});

const cookieParser = require('cookie-parser');
const express = require('express');

const bcrypt = require('bcryptjs');
const DB = require('./database.js');

const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json({ limit: '30mb' }));

app.use(cookieParser());

app.use(express.static('public'));

const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    for (const client of wss.clients) {
      if (client.readyState === 1) {
        client.send(data.toString());
      }
    }
  });
});

console.log('webSocket server ready');


app.get('/api/test', (req, res) => {
  res.json({ message: 'api test thing' });
});

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

app.post('/api/upload-audio-inline', upload.single('audio'), async (req, res) => {
  try {
    if (!req.body.username) {
      return res.status(400).json({ message: 'Missing username' });
    }
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const doc = {
      username: req.body.username,
      song: {
        name: req.file.originalname,
        mime: req.file.mimetype,
        dataBase64: req.file.buffer.toString('base64'),
        uploaded: new Date(),
      },
      created: new Date(),
    };

    await DB.addSong(doc);
    res.json({ message: 'Inline audio stored', name: req.file.originalname });
  } catch (err) {
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
});

app.get('/api/audio-inline/:username/:name', async (req, res) => {
  try {
    const { username, name } = req.params;
    const songs = await DB.getSong(username);
    const match = songs.find(s => s.song?.name === name);
    if (!match) {
      return res.status(404).json({ message: 'Not found' });
    }
    res.setHeader('Content-Type', match.song.mime || 'audio/mpeg');
    const buffer = Buffer.from(match.song.dataBase64, 'base64');
    res.end(buffer);
  } catch (err) {
    res.status(500).json({ message: 'Fetch failed', error: err.message });
  }
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
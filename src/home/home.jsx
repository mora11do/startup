import React, { useState, useEffect, useRef } from "react";

function Home({ currentUser }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [audioSpeed, setAudioSpeed] = useState(1);
  const [isDenoising, setIsDenoising] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [savedMusic, setSavedMusic] = useState([]);
  const [songName, setSongName] = useState('');
  const [QuotesSearch, setQuotesSearch] = useState('');
  const [quotesResults, setQuotesResults] = useState([]);
  const [messages, setMessages] = useState([]);
  const wsRef = useRef(null);
  const [chatInput, setChatInput] = useState('');
  
    const handleSaving = async () => {
    if (!currentUser) {
      alert('Please log in to save music!');
      return;
    }

    setIsSaving(true);
    
    const newSong = {
      id: Date.now(),
      name: songName ? `${songName}.mp3` : `${selectedFile.name}_edited`,
      speed: audioSpeed,
      dateCreated: new Date().toLocaleDateString(),
      owner: currentUser
    };

    const response = await fetch('/api/music', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: currentUser, song: newSong })
    });

    if (response.ok) {
      const musicResponse = await fetch(`/api/music/${currentUser}`);
      const music = await musicResponse.json();
      setSavedMusic(music);
      alert('Audio saved successfully!');
    } else {
      alert('Failed to save music');
    }
    
    setIsSaving(false);
  };

  const handleAIDenoiser = () => {
    setIsDenoising(true);
    setTimeout(() => {
      setIsDenoising(false);
      alert('AI denoising complete!');
    }, 2000);
  };


const handleInspirationaQuotes = async () => {
  try {
    const randomStart = Math.floor(Math.random() * 50) + 1;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${randomStart}&_limit=2`);
    const data = await response.json();
    
    const inspirationalResults = data.map((post, index) => {
      const inspirations = [
        `"Create ${post.title.split(' ').slice(0, 3).join(' ')} music" (That's French for "really cool")`, 
        `"Music flows when you are ${post.title.split(' ').slice(0, 4).join(' ')}" (That's Latin for "inspired")`
      ];
      return inspirations[index];
    });
    
    setQuotesResults(inspirationalResults);
  } catch (error) {
    console.error('API call failed:', error);
    
    const fallbackQuotes = [
      `💡 "Music is the universal language of mankind." - Henry Wadsworth Longfellow`,
      `💡 "Where words fail, music speaks." - Hans Christian Andersen`,
      `💡 "Music can change the world because it can change people." - Bono`
    ];
    setQuotesResults(fallbackQuotes);
  }
};

const sendChat = () => {
  const text = chatInput.trim();
  if (!text) return;
  if (!currentUser) {
    alert('Please log in to chat.');
    return;
  }
  if (wsRef.current?.readyState === 1) {
    wsRef.current.send(JSON.stringify({ from: currentUser, message: text }));
    setChatInput('');
  }
};

useEffect(() => {
  if (currentUser) {
    fetch(`/api/music/${currentUser}`)
      .then(response => response.json())
      .then(music => setSavedMusic(music));
  } else {
    setSavedMusic([]);
  }
}, [currentUser]);

useEffect(() => {
  const wsUrl = `${window.location.origin.replace(/^http/, 'ws')}/ws`;
  const ws = new WebSocket(wsUrl);
  wsRef.current = ws;

  ws.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      const msg = typeof data === 'string' ? { from: 'Anon', message: data } : data;
      setMessages(prev => [...prev.slice(-49), msg]);
    } catch {
      setMessages(prev => [...prev.slice(-49), { from: 'Anon', message: event.data }]);
    }
  };

  ws.onclose = () => { wsRef.current = null; };
  return () => ws.close();
}, []);

  return (
    <div>
      <div style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}>
        <h3>Upload Audio File</h3>
        <input
          type="file" 
          accept="audio/*" 
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        {selectedFile && <p>Selected: {selectedFile.name}</p>}
      </div>

      {selectedFile && (
        <div style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
          <h3>Audio Speed Control</h3>
          <label>Speed: {audioSpeed}x </label>
          <input 
            type="range" 
            min="0.5" 
            max="2" 
            step="0.05" 
            value={audioSpeed}
            onChange={(e) => setAudioSpeed(parseFloat(e.target.value))}
          />

          <div style={{ marginTop: '10px' }}>
            <label>Save as: </label>
            <input 
              type="text" 
              placeholder={`${selectedFile.name}_edited`}
              value={songName}
              onChange={(e) => setSongName(e.target.value)}
              style={{ width: '200px', padding: '5px', marginLeft: '10px' }}
            />
          </div>

          <div style={{ marginTop: '10px' }}>
            <button 
            onClick={handleSaving} 
            disabled={isSaving}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: isSaving ? '#ccc' : '#570274', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px' 
            }}
          >
            {isSaving ? 'Saving...' : 'Save Audio'}
          </button>
          </div>
        </div>
      )}

      {selectedFile && (
        <div style={{ border: '1px solid orange', padding: '10px', margin: '10px' }}>
          <h3>AI Denoiser (3rd Party Service)</h3>
          <button 
            onClick={handleAIDenoiser} 
            disabled={isDenoising}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: isDenoising ? '#ccc' : '#ff6600', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px' 
            }}
          >
            {isDenoising ? 'Processing...' : 'Apply AI Denoising'}
          </button>
        </div>
      )}


      <div style={{ border: '1px solid purple', padding: '10px', margin: '10px' }}>
        <h3>Inspirational Quotes to Motivate You as You Create Audio (3rd Party API)</h3>
        <button 
          onClick={handleInspirationaQuotes}
          style={{ padding: '8px 15px', backgroundColor: '#ff0000', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Get Inspiration
        </button>
        {quotesResults.length > 0 && (
          <div style={{ marginTop: '10px' }}>
            <h4>Results:</h4>
            {quotesResults.map((video, index) => (
              <p key={index} style={{ margin: '5px 0', padding: '5px', backgroundColor: '#f0f0f0' }}>
                {video}
              </p>
            ))}
          </div>
        )}
      </div>

      <img
        src="https://images.ctfassets.net/lzny33ho1g45/5G8NtHY6do1a5iudg099Pf/be2c39648884ab91e10fb7b4360a9c8c/image6.jpeg"
        alt="Audio Editor"
        width="800"
        height="500"
      />
      <h1>My Music (Database)</h1>
        <div style={{ border: '1px solid teal', padding: '10px', margin: '10px' }}>
          {savedMusic.length > 0 ? (
            savedMusic.map(song => (
              <div key={song.id} style={{ margin: '10px 0', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                <strong>🎵 {song.song?.name || 'Untitled'}</strong> - Speed: {song.song?.speed || 'N/A'}x - Saved: {song.song?.dateCreated || new Date(song.created).toLocaleDateString()}
              </div>
            ))
          ) : (
            <p>{currentUser ? 'No saved music yet. Upload and save some audio files!' : 'Log in to see saved music!'}</p>
          )}
        </div>
      <img
        src="https://media.idownloadblog.com/wp-content/uploads/2023/03/Messages-app-icon.jpg"
        alt="Message"
        width="400"
        height="200"
      />
      <h1>Live Music Chat (WebSocket Placeholder)</h1>
        <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
          <h3>Live Messages from Other Users</h3>
          <div style={{ height: '150px', overflowY: 'scroll', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div key={index} style={{ margin: '5px 0', padding: '5px', backgroundColor: 'white', borderRadius: '3px' }}>
                  <strong>{msg.from}</strong>: {msg.message}
                </div>
              ))
            ) : (
              <p>Waiting for live messages...</p>
            )}
          </div>
          <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
            <input
              type="text"
              placeholder="Type a message..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              style={{ flex: 1, padding: '8px' }}
            />
            <button onClick={sendChat} disabled={!wsRef.current || wsRef.current.readyState !== 1}>
              Send
            </button>
          </div>
        </div>
        </div>
  );
}

export default Home;
import React, { useState } from "react";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [audioSpeed, setAudioSpeed] = useState(1);
  const [isDenoising, setIsDenoising] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [savedMusic, setSavedMusic] = useState([]);
  const [songName, setSongName] = useState('');
  const [youtubeSearch, setYoutubeSearch] = useState('');
  const [youtubeResults, setYoutubeResults] = useState([]);
  
  const handleSaving = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      const newSong = {
      id: Date.now(),
      name: songName ? `${songName}.mp3`: `${selectedFile.name}_edited`,
      speed: audioSpeed,
      dateCreated: new Date().toLocaleDateString()
    };
    setSavedMusic([...savedMusic, newSong]);
      alert('Audio saved successfully!');
    }, 1000);
  };

  const handleAIDenoiser = () => {
    setIsDenoising(true);
    setTimeout(() => {
      setIsDenoising(false);
      alert('AI denoising complete!');
    }, 2000);
  };

  const handleYoutubeSearch = () => {
  const mockResults = [
    `${youtubeSearch} - Official Music Video`,
    `${youtubeSearch} Tutorial`,
    `How to make ${youtubeSearch} beats`
  ];
  setYoutubeResults(mockResults);
};

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
        <h3>YouTube Inspiration Search (3rd Party API)</h3>
        <input 
          type="text" 
          placeholder="Search for music inspiration..."
          style={{ width: '250px', padding: '8px', marginRight: '10px' }}
          onChange={(e) => setYoutubeSearch(e.target.value)}
        />
        <button 
          onClick={handleYoutubeSearch}
          style={{ padding: '8px 15px', backgroundColor: '#ff0000', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Search YouTube
        </button>
        {youtubeResults.length > 0 && (
          <div style={{ marginTop: '10px' }}>
            <h4>Results:</h4>
            {youtubeResults.map((video, index) => (
              <p key={index} style={{ margin: '5px 0', padding: '5px', backgroundColor: '#f0f0f0' }}>
                🎵 {video}
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
      <h3>Okay just imagine this wasn't an imagine up here ^^^^^ just pretend it's working</h3>
      <h4>
        (One of the functionalities in the editor will be a THIRD PARTY SERVICE
        which will use someone else's program to use AI to denoise audio files)
      </h4>
      <h4>
        (ALSO a Youtube search bar which can pull up videos from Youtube to help
        with creative inspiration)
      </h4>
      <h1>My Music (Database Placeholder)</h1>
        <div style={{ border: '1px solid teal', padding: '10px', margin: '10px' }}>
          {savedMusic.length > 0 ? (
            savedMusic.map(song => (
              <div key={song.id} style={{ margin: '10px 0', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                <strong>🎵 {song.name}</strong> - Speed: {song.speed}x - Saved: {song.dateCreated}
              </div>
            ))
          ) : (
            <p>No saved music yet. Upload and save some audio files!</p>
          )}
        </div>
      <img
        src="https://media.idownloadblog.com/wp-content/uploads/2023/03/Messages-app-icon.jpg"
        alt="Message"
        width="400"
        height="200"
      />
      <h1>(WEBSOCKET PLACEHOLDER)</h1>
      <h3>
        Oh boy you got a LIVE, REAL-TIME message from your buddy who sent you the
        file they are currently working on!
      </h3>
      <p>"Hey bro I've been working on this love song for you, give it a listen"</p>
      <h3>(Click here to listen to their audio clip)</h3>
    </div>
  );
}

export default Home;
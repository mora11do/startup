import React, { useState, useEffect } from "react";

function SavedMusic({ currentUser }) {
  const [savedMusic, setSavedMusic] = useState([]);

  useEffect(() => {
    if (currentUser) {
      fetch(`/api/music/${currentUser}`)
        .then(response => response.json())
        .then(music => setSavedMusic(music));
    } else {
      setSavedMusic([]);
    }
  }, [currentUser]);

  return (
    <div>
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
    </div>
  );
}

export default SavedMusic;
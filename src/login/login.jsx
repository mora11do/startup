import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setCurrentUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username && password) {
      setCurrentUser(username);
      navigate('/');
      alert(`Welcome, ${username}!`);
    } else {
      alert('Please enter username and password');
    }
  };

  const handleLogout = () => {
    setCurrentUser('');
    setUsername('');
    setPassword('');
    alert('Logged out successfully!');
  };

  return (
    <main>
      <h1>Login</h1>
      <h2>Welcome to Mora11do Audio Editor</h2>
      <div className="login-box">
        <form onSubmit={handleLogin}>
          <div>
            <input 
              type="text" 
              placeholder="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>

          <button 
            type="button" 
            onClick={handleLogout}
            style={{ 
              marginTop: '10px', 
              backgroundColor: '#dc3545',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            Logout
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
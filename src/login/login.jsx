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
        </form>
      </div>
    </main>
  );
}

export default Login;
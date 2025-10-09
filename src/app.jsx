import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home/home.jsx";
import Login from "./login/login.jsx";
import SavedMusic from "./savedmusic/savedmusic.jsx";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Mora11do<sup>&reg;</sup></h1>
          <nav>
            <menu>
              <Link to="/">Home</Link>
              <Link to="/login">Log in</Link>
              <Link to="/savedmusic">Browse Music</Link>
            </menu>
          </nav>
          <h2>Welcome, [username]!</h2>
          <hr />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/savedmusic" element={<SavedMusic />} />
          </Routes>
        </main>

        <footer>
          <hr />
          <span className="text-reset">Nicholas Brown</span>
          <br />
          <a href="https://github.com/mora11do/startup">GitHub</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

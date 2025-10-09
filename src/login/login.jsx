import React from "react";

function Login() {
  return (
    <main>
      <h1>LOGIN PLACEHOLDER Welcome to the log in page</h1>
      <h2>It's very exciting, I know</h2>
      <div className="login-box">
        <form method="get" action="play.html">
          <div>
            <input type="text" placeholder="your@email.com" />
          </div>
          <div>
            <input type="password" placeholder="password" />
          </div>
          <button type="submit">Login</button>
          <button type="submit">Create</button>
        </form>
      </div>
    </main>
  );
}

export default Login;

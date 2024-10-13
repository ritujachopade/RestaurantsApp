import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLoginClick = async () => {
    if (username === "" || password === "") {
      alert("Please enter both username and password");
    } else {
      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          const data = await response.json();
          alert(`Login successful! Welcome ${data.username}`);
          history.push("/dashboard");
        } else {
          alert("Login failed. Please check your credentials.");
        }
      } catch (error) {
        alert("An error occurred during login. Please try again later.");
      }
    }
  };

  return (
    <div class="login-container">
      <div class="login-box">
        <h1>Welcome!</h1>

        <div class="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
          />
          <span class="icon">
            <img src={require("./username.png")} />
          </span>
        </div>

        <div class="input-box">
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
          <span class="icon">
            <img src={require("./password.png")} />
          </span>
        </div>

        <button className="login-btn" onClick={handleLoginClick}>
          Login
        </button>

        <a href="#" class="forgot-password">
          Forgot Password?
        </a>

        <div class="divider">
          <hr />
          <span>Or</span>
          <hr />
        </div>
        <div class="divider">
          <hr>
            <span>Or</span>
          </hr>
        </div>

        <div className="social-login">
          <img
            src="https://cdn-icons-png.flaticon.com/128/281/281764.png"
            alt="Google"
            className="social-icon"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
            alt="Facebook"
            className="social-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

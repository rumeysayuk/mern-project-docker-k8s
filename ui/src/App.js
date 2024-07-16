import React, { useState } from 'react';
import axios from "axios"
import logo from './indir.jpeg';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css'; 
import './App.css';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('hello bu bir mesah');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleRegister = async () => {
    try {
      await axios.post('http://backend.app.com/register', { username, password }).then((resp) => {
        setMessage(resp.data.message);
        alertify.success(resp.data.message);
      }) 
    } catch (error) {

      console.error('Registration error:', error);
      // setMessage(error.response.data.message);
    }
  };

  const handleLogin = async () => {
    try {
      await axios.post('http://backend.app.com/login', { username, password }).then((resp) => {
        setMessage(resp.data.message);
        alertify.success(resp.data.message);
      })
    } catch (error) {
      console.error('Login error:', error);

      // setMessage(error.response.data.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', gap: '8rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            <h2>Register</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>

            <img src={logo} className="App-logo" alt="logo" />
            <p style={{
              marginTop: "100px"
            }}>
              {message}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </header>



    </div>
  );
}

export default App;

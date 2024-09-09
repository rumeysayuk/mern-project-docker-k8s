import React, { useEffect, useState } from 'react';
import axios from "axios"
import logo from './miso2.png';
import alertify from 'alertifyjs';
import useWindowSize from 'react-use/lib/useWindowSize'
import 'alertifyjs/build/css/alertify.css';
import './App.css';
import Confetti from 'react-confetti';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('Hello saver Misha Kedy is here');
  const [message2, setMessage2] = useState('test la ');

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { width, height } = useWindowSize();
  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setMessage2(data.message));
  }, []);

  const handleRegister = async () => {
    try {
      // await axios.post('http://192.168.2.205:5000/api/register', { username, password }).then((resp) => {
        await axios.post('/api/register', { username, password }).then((resp) => {
          setMessage(resp.data.message);
        setIsLoggedIn(true)

        alertify.success(resp.data.message);
      })
    } catch (error) {
      setIsLoggedIn(false)

      console.error('Registration error:', error);
      // setMessage(error.response.data.message);
    }
  };

  const handleLogin = async () => {
    try {
      // await axios.post('http://192.168.2.205:5000/api/login', { username, password }).then((resp) => {
        await axios.post('/api/login', { username, password }).then((resp) => {
        setMessage(resp.data.message);
        alertify.success(resp.data.message);
        setIsLoggedIn(true)
      })
    } catch (error) {
      console.error('Login error:', error);
      setIsLoggedIn(false)

      // setMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        setIsLoggedIn(false)
      }, 6000);
    }
  }, [isLoggedIn])

  return (
    <div className="App"> 
      {
        isLoggedIn &&
        <Confetti width={width} height={height} />
      }
       <div>
      <h1>{message2}</h1>
    </div>
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
            <button className='blue' onClick={handleRegister}>Register</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>

            <img src={logo} className={`${isLoggedIn ? 'heart' : 'exit'}`} alt="logo" style={{
            }} />
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

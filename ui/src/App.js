import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => setMessage('Error logging in: ' + error));
  };

  const handleRegister = () => {
    fetch('http://192.168.2.205/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => setMessage('Error registering: ' + error));
  };

  return (
    <div className="App">
      <h1>{isRegistering ? 'Register' : 'Login'}</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={isRegistering ? handleRegister : handleLogin}>
        {isRegistering ? 'Register' : 'Login'}
      </button>
      <p>{message}</p>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
      </button>
    </div>
  );
}

export default App;

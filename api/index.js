const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000;

app.use(bodyParser.json());

let users = []; // In-memory storage for users

// Register API
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: 'User already exists' });
    }
    console.log("burdaaag register");
    users.push({ username, password });
    res.status(201).json({ message: 'User registered successfully' });
});

// Login API
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  console.log("burdaaag login");

  if (user) {
      res.json({ message: 'Login successful' });
  } else {
      res.status(400).json({ message: 'Invalid credentials' });
  }
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

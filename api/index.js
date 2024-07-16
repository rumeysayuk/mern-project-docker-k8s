const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://mongo-service:27017').then(()=>{
    console.log("mongodb is connected");
}).catch((err)=>{
    console.log(`mongo db conn err => ${err}`);
});

// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Register Endpoint
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  await newUser.save();
  res.json({ message: 'User registered successfully' });
  console.log("register is successful");
});

// Login Endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    console.log("login is successful");
    res.json({ message: 'Login successful' }) ;
  } else {
    console.log("Invalid credentials for login");

    res.status(401).json({ message: 'Invalid credentials' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

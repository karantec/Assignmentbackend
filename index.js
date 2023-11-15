// api.js
const cors = require('cors'); 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// Dummy database (in-memory)
const users = [];

// Dummy endpoint to create an account
app.post('/api/create-account', (req, res) => {
  const { username, password } = req.body;

  // Dummy validation (you can add your validation logic here)
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  // Dummy logic to create an account
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);

  // Simulate a delay (you can remove this in a real backend)
  setTimeout(() => {
    res.status(201).json(newUser);
  }, 1000);
});

app.listen(port, () => {
  console.log(`Dummy API listening at http://localhost:${port}`);
});

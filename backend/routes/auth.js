// auth.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user'); 


// Signup route
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    await user.save();
    res.json({ success: true, message: 'User created successfully' });
  } catch (err) {
    res.status(400).json({ success: false, message: 'Username already exists' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(400).json({ success: false, message: 'Invalid username or password' });
  }

  res.json({ success: true, username: user.username });
});

router.get('/all', async (req, res) => {
  const users = await User.find({}, 'username');
  res.json(users);
});


module.exports = router;
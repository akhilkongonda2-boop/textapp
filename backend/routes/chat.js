// backend/routes/chat.js
const express = require('express');
const router = express.Router();
const Message = require('../models/messages');

// GET chat history between two users
router.get('/history', async (req, res) => {
  const { user1, user2 } = req.query;
  try {
    const messages = await Message.find({
      $or: [
        { fromUser: user1, toUser: user2 },
        { fromUser: user2, toUser: user1 }
      ]
    }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chat history' });
  }
});

module.exports = router;

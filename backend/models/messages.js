const mongoose = require('mongoose');
// Message schema
const MessageSchema = new mongoose.Schema({
  fromUser: { type: String, required: true },
  toUser: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  delivered: { type: Boolean, default: false },
  seen: { type: Boolean, default: false }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
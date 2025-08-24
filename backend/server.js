const express = require('express');
const { Server } = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose')
const Message = require('./models/messages')
const User = require('./models/user')


const authroute = require('./routes/auth')
const chatroute=require('./routes/chat')

const app = express();
app.use(cors());

const server = app.listen(3000, () => {
  console.log("server running on port 3000");
})

const io = new Server(server, {
  cors: {
    origin: "http://localhost:4200", // ✅ Angular frontend
    methods: ["GET", "POST"]
  }
});

const username = 'akhilkongonda';
const password = 'akhil'; // replace with your actual password
const dbName = 'chatapp';
const mongoURI = `mongodb+srv://${username}:${password}@cluster0.ol1mh.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.use(express.json());
app.use('/auth', authroute);
app.use('/chat', chatroute);

const users = {};

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);


  socket.on('register', (username) => {
    users[username] = socket.id;
    io.emit('online-users', Object.keys(users));
    console.log('User registered:', username, socket.id);
  });

  socket.on('chat-message', async (data) => {
    console.log('Received chat message:`', data);
    await Message.create({
      fromUser: data.from,
      toUser: data.to,
      message: data.text
    });
    console.log('Message saved to database:', data);
    const toSocketId = users[data.to];
    if (toSocketId) {
      io.to(toSocketId).emit('chat-message', { from: data.from, text: data.text });
      console.log('Message sent to:', data.to);
    } else {
      console.log('User not connected:', data.to);
    }
  });

  socket.on('disconnect', () => {
    for (const [username, id] of Object.entries(users)) {
      if (id === socket.id) {
        delete users[username];
        break;
      }
    }
    io.emit('online-users', Object.keys(users)); // broadcast updated online users
  });
})



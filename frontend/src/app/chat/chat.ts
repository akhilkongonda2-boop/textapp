import { Component, signal } from '@angular/core';
import { SocketService } from '../socket.service';
import { AuthService } from '../auth.service';

interface Message {
  from: string;
  text: string;
}

@Component({
  selector: 'app-chat',
  standalone: false,
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat {

  // signals instead of plain arrays
  users = signal<string[]>([]);
  messages = signal<Message[]>([]);
  onlineUsers = signal<string[]>([]);

  newMessage: string = '';
  currentUser: string = '';
  selectedUser: string = '';

  constructor(private socketService: SocketService, private auth: AuthService) {}

  ngOnInit() {
    this.currentUser = this.auth.currentUser();

    // fetch all users
    this.auth.getAllUsers().subscribe(users => {
      const filtered = users
        .map(u => u.username)
        .filter(u => u !== this.currentUser);

      this.users.set(filtered);   // 👈 signal update
      console.log('Online', filtered);

      this.selectedUser = filtered[0] || '';
    });

    if (this.currentUser) {
      this.socketService.registerUser(this.currentUser);
    }

    this.socketService.getSocket().on(
      'chat-message',
      (message: { from: string; text: string; to: string }) => {
        console.log('Message received:', message);

        if (message.from === this.selectedUser || message.from === this.currentUser) {
          this.messages.update(current => [...current, message]);
        }
      }
    );

    this.socketService.getSocket().on('online-users', (users: string[]) => {
      this.onlineUsers.set(users);   // 👈 signal update
    });
  }

  selectUser(user: string) {
    this.selectedUser = user;
    this.auth.getChatHistory(this.selectedUser).subscribe(messages => {
      this.messages.set(messages.map(m => ({ from: m.fromUser, text: m.message })));
    });
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    const message = {
      from: this.currentUser,
      text: this.newMessage,
      to: this.selectedUser
    };
    this.messages.update(current => [...current, message]);
    this.socketService.sendPrivateMessage(message);
    this.newMessage = '';
  }

  logout() {
    this.auth.logout();
  }
}

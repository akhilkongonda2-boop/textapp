import { Component } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { SocketService } from '../socket.service'
import { AuthService } from '../auth.service';
import { signal } from '@angular/core';


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

   users: string[] = []; 
 messages = signal<Message[]>([]);


  newMessage: string = '';
  currentUser: string = '';

  selectedUser: string = '';

  onlineUsers: string[] = [];

  constructor(private socketService: SocketService, private auth: AuthService) {

  }

  ngOnInit() {

    this.currentUser = this.auth.currentUser();


      // fetch all users
  this.auth.getAllUsers().subscribe(users => {
    this.users = users
      .map(u => u.username)
      .filter(u => u !== this.currentUser); // remove self from list
    this.selectedUser = this.users[0] || '';
  });


    if(this.currentUser){
      this.socketService.registerUser(this.currentUser); // register in socket
    }


    this.socketService.getSocket().on('chat-message', (message: { from: string; text: string; to: string }) => {
      console.log('Message received:', message);

    // Optional: only show messages if it's from the selected user
    if (message.from === this.selectedUser || message.from === this.currentUser) {
      this.messages.update(current => [...current, message]);
    }
    });

    this.socketService.getSocket().on('online-users', (users: string[]) => {
      this.onlineUsers = users;
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

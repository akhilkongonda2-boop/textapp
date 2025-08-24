import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;
  private SERVER_URL = 'http://localhost:3000';
  private currentUser: string | null = null;

  constructor() {
    // Initialize socket connection
    this.socket = io(this.SERVER_URL,{
      transports: ['websocket']
    });
  }


  // Call this after login
  registerUser(username: string) {
    this.currentUser = username;
    this.socket.emit('register', username); // send to server
  }


  sendPrivateMessage( message:{ from:string, text: string, to: string }) {
    console.log('Sending private message:', message);
    this.socket.emit('chat-message', message);
  }

  

  // ✅ Give access to the socket instance
  getSocket(): Socket {
    return this.socket;
  }

}

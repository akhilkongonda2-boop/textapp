import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

interface Message {
  fromUser: string;
  toUser: string;
  message: string;
}

import { SocketService } from './socket.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'https://chatapp-4her.onrender.com/auth';

   // Signal to hold current logged-in username
  currentUser = signal<string>('');

  constructor(private http: HttpClient, private socketService: SocketService,private router: Router) {}

  signup(username: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}/signup`, { username, password });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, { username, password }).pipe(
        tap(res => {
        if (res) {
          console.log(username);
          this.currentUser.set(username);
       if (typeof localStorage !== 'undefined') {
            localStorage.setItem('currentUser', username);
          }
        }
      })
    );
  }


loadUserFromStorage() {
    if (typeof localStorage !== 'undefined') {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUser.set(storedUser);
      }
    }
  }

  getAllUsers(): Observable<{ username: string }[]> {
  return this.http.get<{ username: string }[]>(`${this.API_URL}/all`);
}

getChatHistory(selecteduser: string) {
  return this.http.get<Message[]>(`https://chatapp-4her.onrender.com
/chat/history?user1=${this.currentUser()}&user2=${selecteduser}`);
}

  logout() {
  this.currentUser.set(''); // Clear the signal
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('currentUser'); // Clear storage if you want persistence
  }
  this.router.navigate(['/login']);
  // Disconnect socket on logout
  this.socketService.getSocket().disconnect();
}


}

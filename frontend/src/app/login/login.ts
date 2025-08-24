import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SocketService } from '../socket.service';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username = '';
  password = '';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private socketService: SocketService
  ) {}

  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: res => {
        this.socketService.registerUser(this.username); // register in socket
        this.router.navigate(['/chat']);
      },
      error: err => this.error = err.error.message
    });
  }
}

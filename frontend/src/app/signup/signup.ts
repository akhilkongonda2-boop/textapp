import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}
  signup() {
    this.auth.signup(this.username, this.password).subscribe({
      next: res => this.router.navigate(['/login']),
      error: err => this.error = err.error.message
    });
  }
}

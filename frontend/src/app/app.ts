import { Component, signal } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');


  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.loadUserFromStorage();
  }
}

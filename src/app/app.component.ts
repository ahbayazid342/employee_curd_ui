import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud_ui';
  isLoggedIn = false;

  constructor(private router: Router) {
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  onLogout() {
    const confirmation = confirm('Are you sure you want to');

    if (confirmation) {
      localStorage.removeItem('token');
      this.isLoggedIn = false;
      this.router.navigate(['login']);
    }
  }
}

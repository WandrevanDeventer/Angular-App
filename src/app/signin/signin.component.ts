import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  signIn(): void {
    this.authService.signIn(this.email, this.password)
      .then((success) => {
        if (success) {
          this.router.navigate(['/employee-list']);
        } else {
          alert('Invalid credentials. Please try again.');
        }
      });
  }
}


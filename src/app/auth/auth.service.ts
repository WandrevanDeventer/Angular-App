import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  signIn(email: string, password: string): Promise<boolean> {
    // Implement actual sign-in logic here (e.g., using Firebase Authentication)
    // Return a promise that resolves to true if authentication is successful.
    // For demonstration purposes, we'll simulate a successful login with a hardcoded email and password.
    return new Promise((resolve) => {
      if (email === 'user@example.com' && password === 'password') {
        this.isAuthenticated = true;
        resolve(true);
      } else {
        this.isAuthenticated = false;
        resolve(false);
      }
    });
  }

  signOut(): void {
    // Implement sign-out logic here (e.g., using Firebase Authentication)
    this.isAuthenticated = false;
  }

  get isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}

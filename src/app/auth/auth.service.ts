import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // NomeUtente
  static getAdminName(): string {
    return 'admin';
  }

  // Password
  static getAdminPassword(): string {
    return 'angular';
  }

  login(username: string, password: string): boolean {
    if (
      username === AuthService.getAdminName() &&
      password === AuthService.getAdminPassword()
    ) {
      localStorage.setItem('token', 'fake-jwt-token');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

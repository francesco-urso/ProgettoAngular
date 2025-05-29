import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() titlePage: string = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  isLoggedIn(): boolean {
    return this.auth.isAuthenticated();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  addProduct() {
    this.router.navigate(['/manage-products']);
  }

  productList() {
    this.router.navigate(['/products']);
  }

  cart() {
    this.router.navigate(['/cart']);
  }
}

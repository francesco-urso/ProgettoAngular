import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  pageTitle: string = '';
  admin: string = AuthService.getAdminName();
  password: string = AuthService.getAdminPassword();

  constructor(private router: Router) {}

  productList() {
    this.router.navigate(['/products']);
  }
}

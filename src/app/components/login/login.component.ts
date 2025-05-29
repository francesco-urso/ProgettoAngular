import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

  loginControl = new FormControl('', { validators: [Validators.required] });

  onLogin() {
    this.error = !this.auth.login(this.username, this.password);
    if (!this.error) {
      this.router.navigate(['/manage-products']);
    }
  }
}

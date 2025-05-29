import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  pageTitle: string = '';

  constructor(private router: Router) {}

  productList() {
    this.router.navigate(['/products']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-management',
  standalone: false,
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
})
export class ProductManagementComponent implements OnInit {
  pageTitle: string = 'Gestione Prodotti';
  products$: Observable<Product[]>;
  editingProduct: Product = new Product();
  isEditing = false;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts();
  }

  ngOnInit(): void {}

  startEdit(product: Product): void {
    this.editingProduct = { ...product };
    this.isEditing = true;
  }

  saveProduct(): void {
    if (this.editingProduct.id) {
      this.productService.updateProduct(this.editingProduct);
    } else {
      this.productService.addProduct(this.editingProduct);
    }
    this.resetForm();
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);
  }

  resetForm(): void {
    this.editingProduct = new Product();
    this.isEditing = false;
  }
}

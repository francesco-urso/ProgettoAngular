import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  getCartItems() {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product) {
    const existingProduct = this.cartItems.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.cartQuantity = (existingProduct.cartQuantity || 1) + 1;
    } else {
      const newProduct = { ...product, cartQuantity: 1 };
      this.cartItems.push(newProduct);
    }

    this.cartSubject.next([...this.cartItems]);
  }

  removeFromCart(product: Product) {
    const index = this.cartItems.findIndex((item) => item.id === product.id);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.cartSubject.next([...this.cartItems]);
    }
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next([]);
  }
}

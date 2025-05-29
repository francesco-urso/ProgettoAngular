export class Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  cartQuantity?: number;

  constructor(
    id: number = 0,
    name: string = '',
    description: string = '',
    quantity: number = 0,
    price: number = 0,
    cartQuantity: number = 1
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
    this.cartQuantity = cartQuantity;
  }
}

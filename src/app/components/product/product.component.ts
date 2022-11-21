import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product1: any = {
    productId: 1,
    productName: 'Suluk',
    categoryId: 1,
    unitPrice: 5,
  };
  product2: any = {
    productId: 2,
    productName: 'Mouse',
    categoryId: 1,
    unitPrice: 5,
  };
  product3: any = {
    productId: 3,
    productName: 'Klavye',
    categoryId: 1,
    unitPrice: 5,
  };
  product4: any = {
    productId: 4,
    productName: 'Ekran',
    categoryId: 1,
    unitPrice: 5,
  };
  product5: any = {
    productId: 5,
    productName: 'Mousepad',
    categoryId: 1,
    unitPrice: 5,
  };

  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];
}

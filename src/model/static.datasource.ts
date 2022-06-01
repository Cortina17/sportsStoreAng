import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable()
export class StaticDataSource {

  private products: Product[] = [
    new Product(1, "Product 1", 100, "Cat 1", "Product 1 de Cat 1"),
    new Product(2, "Product 2", 100, "Cat 2", "Product 2 de Cat 2"),
    new Product(3, "Product 3", 100, "Cat 3", "Product 3 de Cat 3"),
    new Product(4, "Product 4", 100, "Cat 2", "Product 4 de Cat 2"),
    new Product(5, "Product 5", 100, "Cat 1", "Product 5 de Cat 1"),
    new Product(6, "Product 6", 100, "Cat 2", "Product 6 de Cat 2"),
    new Product(7, "Product 7", 100, "Cat 2", "Product 7 de Cat 2"),
    new Product(8, "Product 8", 100, "Cat 3", "Product 8 de Cat 3"),
    new Product(9, "Product 9", 100, "Cat 1", "Product 9 de Cat 1"),
    new Product(10, "Product 10", 100, "Cat 2", "Product 10 de Cat 2"),
    new Product(11, "Product 11", 100, "Cat 3", "Product 11 de Cat 3"),
    new Product(12, "Product 12", 100, "Cat 1", "Product 12 de Cat 1"),
  ];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }
}

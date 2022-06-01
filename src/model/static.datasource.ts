import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable()
export class StaticDataSource {

  private products: Product[] = [
    new Product(1, "Product 1", 200, "Cat 1", "Product 1 (Cat 1)"),
    new Product(2, "Product 2", 100, "Cat 2", "Product 2 (Cat 2)"),
    new Product(3, "Product 3", 200, "Cat 3", "Product 3 (Cat 3)"),
    new Product(4, "Product 4", 100, "Cat 2", "Product 4 (Cat 2)"),
    new Product(5, "Product 5", 150, "Cat 1", "Product 5 (Cat 1)"),
    new Product(6, "Product 6", 100, "Cat 2", "Product 6 (Cat 2)"),
    new Product(7, "Product 7", 67, "Cat 2", "Product 7 (Cat 2)"),
    new Product(8, "Product 8", 100, "Cat 3", "Product 8 (Cat 3)"),
    new Product(9, "Product 9", 240, "Cat 1", "Product 9 (Cat 1)"),
    new Product(10, "Product 10", 50, "Cat 2", "Product 10 (Cat 2)"),
    new Product(11, "Product 11", 80, "Cat 3", "Product 11 (Cat 3)"),
    new Product(12, "Product 12", 13, "Cat 1", "Product 12 (Cat 1)"),
    new Product(13, "Product 13", 6530, "Cat 2", "Product 13 (Cat 2)"),
    new Product(14, "Product 14", 9765, "Cat 1", "Product 14 (Cat 1)"),
    new Product(15, "Product 15", 5688, "Cat 3", "Product 15 (Cat 3)"),
  ];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }
}

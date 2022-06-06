import { Product } from './../model/product.model';
import { ProductRepository } from './../model/product.repository';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'productTable.component.html'
  //template: `<div class="bg-info p-2 text-white"><h3>Catalogue</h3></div>`
})

export class ProductTableComponent {

  constructor(private repository: ProductRepository) { }

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  deleteProducts(id: number) {
    this.repository.deleteProduct(id);
  }
}

import { RestDataSource } from './rest.datasource';
import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductRepository {

  private products: Product[] = [];
  private categories: string[] = [];
  constructor(private dataSource: RestDataSource) {
    //  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe(
      data => {
        this.products = data;
        this.categories = data.map(p => p.category).filter((c, index, array) => array.indexOf(c) == index).sort();
      }
    );
  }

  getProduct(id: number): Product | undefined { //uso | undefined si tengo activado el chequeo del typeScript
    return this.products.find(p => p.id == id)//busca el producto por su id, en el vector de productos
  }

  getCategories(): string[] {
    return this.categories;
  }

  //getProducts(category?: string = null): Product[] {
  getProducts(category: string = null): Product[] {
    return this.products.filter((p) => category == null || category == p.category)
  }

  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(p => {
      this.products.splice(this.products.findIndex((p) => p.id == id), 1)
    });
  }

  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) { // es para dar de alta
      this.dataSource
        .saveProduct(product)
        .subscribe((p) => { this.products.push(p) });
    } else {
      // estoy haciendo una modificacion de un producto que ya existe
      this.dataSource
        .updateProduct(product)
        .subscribe((p) => this.products.splice(
          this.products.findIndex((p) => p.id == product.id), 1, product));
    }
  }
}

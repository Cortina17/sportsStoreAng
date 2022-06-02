import { Product } from './product.model';

export class Cart {

  public lines: CartLine[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;

  addLine(product: Product, quantity: number = 1) {
    let line = this.lines.find(line => line.product.id == product.id);
    if (line != undefined) {
      line.quantity += quantity;//si ya existe el producto en el carro
    } else {
      this.lines.push(new CartLine(product, quantity)); //cuando es un nuevo producto para el carro
    }
  }
}

export class CartLine {

  constructor(public product: Product, public quantity: number) { }

  get lineTotal() {
    return this.quantity * this.product.price;
  }
}

import { StaticDataSource } from './static.datasource';
import { Product } from './product.model';

export class ProductRepository {

  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe(
      data => {
        this.products = data;
        this.categories = data.map(p => p.category).filter((c, index, array) => array.indexOf(c) == index).sort();
      }
    );
  }
}

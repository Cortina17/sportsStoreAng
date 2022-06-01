import { StaticDataSource } from './static.datasource';
import { Product } from './product.model';

export class ProductRepository {

  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: StaticDataSource) { }
}

import { StaticDataSource } from './static.datasource';
import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { Observable } from 'rxjs';

@Injectable()
export class OrderRepository {

  private orders: Order[] = null;

  constructor(private dataSource: StaticDataSource) { }

  getOrders() {
    return this.orders;
  }

  saveOrders(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);

  }
}

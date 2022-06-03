import { RestDataSource } from './rest.datasource';
import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { Observable } from 'rxjs';

@Injectable()
export class OrderRepository {

  private orders: Order[] = [];

  //constructor(private dataSource: StaticDataSource) { }
  constructor(private dataSource: RestDataSource) { }

  getOrders() {
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);

  }
}

import { RestDataSource } from './rest.datasource';
import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { Observable } from 'rxjs';

@Injectable()
export class OrderRepository {

  private orders: Order[] = [];
  private loaded: boolean = false;

  //constructor(private dataSource: StaticDataSource) { }
  constructor(private dataSource: RestDataSource) { }

  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }

  updateOrder(order: Order) {
    this.dataSource.updateOrder(order).subscribe((order) => this.orders.splice(this.orders.findIndex((o) => o.id == order.id), 1, order));
  }

  loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders().subscribe((orders) => (this.orders = orders));
  }
}

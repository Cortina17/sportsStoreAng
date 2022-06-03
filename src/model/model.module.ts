import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { NgModule } from '@angular/core';
import { Cart } from './cart.model';

@NgModule({
  providers: [StaticDataSource, ProductRepository, Cart, Order, OrderRepository]
})

export class ModelModule { }

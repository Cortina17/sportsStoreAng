import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { NgModule } from '@angular/core';
import { Cart } from './cart.model';

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, Cart, Order, OrderRepository, AuthService,
    { provide: StaticDataSource, useClass: RestDataSource }
  ]
})

export class ModelModule { }

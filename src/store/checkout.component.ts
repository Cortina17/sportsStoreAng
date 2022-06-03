import { Order } from './../model/order.model';
import { OrderRepository } from './../model/order.repository';
import { Component } from "@angular/core";

@Component({
  //template: `<div><h3 class="bg-info p-1 text-white">Checkout Component</h3></div>`
  templateUrl: "./checkout.component.html"
})
export class CheckoutComponent {

  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(public reporistory: OrderRepository, public order: Order) { }
}

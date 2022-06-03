import { Order } from './../model/order.model';
import { OrderRepository } from './../model/order.repository';
import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';

@Component({
  //template: `<div><h3 class="bg-info p-1 text-white">Checkout Component</h3></div>`
  templateUrl: "./checkout.component.html",
  styleUrls: ["checkout.component.css"]
})
export class CheckoutComponent {

  submitted: boolean = false;//usuario hace un pedido
  orderSent: boolean = false;//admin envia pedido

  constructor(public reporistory: OrderRepository, public order: Order) { }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.reporistory.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      })
    }
  }
}

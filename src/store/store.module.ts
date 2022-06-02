import { ImpuestoPipe } from './impuesto.pipe';
import { ModelModule } from './../model/model.module';
import { StoreComponent } from './store.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetailComponent } from './cartDetail.component';
import { CheckoutComponent } from './checkout.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule],
  declarations: [StoreComponent, ImpuestoPipe, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent],
})

export class StoreModule { }

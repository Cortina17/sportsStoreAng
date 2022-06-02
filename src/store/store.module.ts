import { ImpuestoPipe } from './impuesto.pipe';
import { ModelModule } from './../model/model.module';
import { StoreComponent } from './store.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { CounterDirective } from './counter.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule],
  declarations: [StoreComponent, ImpuestoPipe, CounterDirective],
  exports: [StoreComponent],
})

export class StoreModule { }

import { ModelModule } from './../model/model.module';
import { StoreComponent } from './store.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule],
  declarations: [StoreComponent],
  exports: [StoreComponent],
})

export class StoreModule { }
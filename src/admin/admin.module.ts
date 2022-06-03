import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";

let routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: 'auth' }
]);

@NgModule({
  imports: [FormsModule, routing],
  declarations: [AuthComponent]
})

export class AdminModule { }


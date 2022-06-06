import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: '<store></store>'
  template: "<router-outlet></router-outlet>"
})

export class AppComponent {
  title = 'SportsStore';
}

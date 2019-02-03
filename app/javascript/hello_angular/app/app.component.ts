import { Component } from '@angular/core';
import templateString from './app.component.html'
import styleString from './app.component.scss';

@Component({
  selector: 'hello-angular',
  template: templateString,
  styles: [ styleString ]
})

export class AppComponent {
  name = 'Angular';
}

import { Component } from '@angular/core';
import templateString from './toolbar.component.html';
import styleString from './toolbar.component.scss';

@Component({
  selector: 'app-toolbar',
  template: templateString,
  styles: [ styleString ]
})
export class ToolbarComponent {

  public constructor() {}

}

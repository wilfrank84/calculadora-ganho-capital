import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import templateString from './app.component.html'
import styleString from './app.component.scss';

import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'hello-angular',
  template: templateString,
  styles: [ styleString ]
})

export class AppComponent {
  name = 'Angular';

  constructor(
    private http: HttpClient,
    private tokenService: Angular2TokenService
  ) {
    this.tokenService.init({
      apiBase: 'http://localhost:3000',
      resetPasswordCallback: window.location.href,
      globalOptions: {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    })
  }

  public changeName() {
    this.http.get('/hello_angular/name').subscribe(data => {
      this.name = data['name'];
    });
  }
}

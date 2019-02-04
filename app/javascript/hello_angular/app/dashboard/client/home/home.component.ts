import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import templateString from './home.component.html'

import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-home',
  template: templateString
})
export class HomeComponent {
  name = 'Angular!';

  public constructor(
    private http: HttpClient,
    private tokenService: Angular2TokenService
  ) {}

  changeName() {
    this.http.get('/hello_angular/name').subscribe(data => {
      this.name = data['name'];
    });
  }

  signOut() {
    this.http.delete('/users/sign_out').subscribe(data => {
      console.log(data);
    });
  }

}
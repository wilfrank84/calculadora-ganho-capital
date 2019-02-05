import { Component } from '@angular/core';
import { Router } from '@angular/router';

import templateString from './toolbar.component.html';
import styleString from './toolbar.component.scss';

import { AuthService } from './../../../shared/auth.service';

@Component({
  selector: 'app-toolbar',
  template: templateString,
  styles: [ styleString ]
})
export class ToolbarComponent {

  public constructor(
    public authService: AuthService,
    private router: Router,
  ) {}

  public signOutUser() {
    this.authService.signOut()
      .subscribe(
        () => this.router.navigate(['/sign-in'])
      )
  }

}

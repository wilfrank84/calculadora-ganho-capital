import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './../shared/auth.service';
import { Angular2TokenService } from 'angular2-token';

@Injectable()

export class AuthGuard implements CanActivate {
  public userSignedIn: boolean;

  public constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: Angular2TokenService
  ) {}

  public canActivate() {
    if( localStorage.getItem('user') ) {
      return true;
    } else {
      this.router.navigate(['/sign-in']);
      return false;
    }
  }

}

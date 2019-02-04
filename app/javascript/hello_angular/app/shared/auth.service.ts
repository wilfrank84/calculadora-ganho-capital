import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Angular2TokenService, UserData } from 'angular2-token';

// import { User } from './../dashboard/admin/users/shared/user.model';

@Injectable()

export class AuthService {
  public currentUser: UserData;
  public userSignedIn$: Subject<boolean> = new Subject();

  public constructor(private tokenService: Angular2TokenService){
    this.tokenService.validateToken().subscribe(
      res => res.status == 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
    )
  }

  // public signUp(user: User): Observable<Response> {
  //   return this.tokenService.registerAccount(user as any).pipe(
  //     catchError(this.handleErrors),
  //     map(
  //       res => {
  //         this.userSignedIn$.next(true);
  //         localStorage.setItem('user', 'logged');
  //         return res
  //       })
  //   )
  // }

  public signIn(uid: string, password: string): Observable<Response>{
    let signInData = {
      email: uid,
      password: password
    };

    return this.tokenService.signIn(signInData).pipe(
      catchError(this.handleErrors),
      map(
        res => {
          this.userSignedIn$.next(true);
          localStorage.setItem('user', 'logged');
          return res
        })
    )
  }

  public signOut(): Observable<Response> {
    return this.tokenService.signOut().pipe(
      catchError(this.handleErrors),
      map(
        res => {
          this.userSignedIn$.next(false);
          localStorage.removeItem('user');
          return res;
        })
    )
  }

  public resetPassword(email: any): Observable<Response> {
    return this.tokenService.resetPassword({
      email: email,
    }).pipe(
      catchError(this.handleErrors),
      map(
        res => {
          return res
        }
      )
    )
  }

  public updatePassword(data: any): Observable<Response> {
    return this.tokenService.updatePassword({
      password:             data.newPassword,
      passwordConfirmation: data.newPassword,
      passwordCurrent:      null,
      resetPasswordToken:   data.resetPasswordToken
    }).pipe(
      catchError(this.handleErrors),
      map(
        res => {
          this.userSignedIn$.next(true);
          localStorage.setItem('user', 'logged');
          return res
        }
      )
    )
  }

  public userSignedIn(): boolean {
    return this.tokenService.userSignedIn();
  }

  public getCurrentUser() {
    return this.tokenService.validateToken()
  }

  private handleErrors(error: Response){
    console.log("SALVANDO O ERRO NUM ARQUIVO DE LOG - DETALHES DO ERRO => ", error);
    return throwError(error);
  }

}

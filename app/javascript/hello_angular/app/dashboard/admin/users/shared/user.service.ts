import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Angular2TokenService } from 'angular2-token';
import { User } from './user.model';

@Injectable()

export class UserService {
  public usersUrl = 'users';

  public constructor(private tokenHttp: Angular2TokenService) {}

  public getAll(): Observable<User[]>{
    return this.tokenHttp.get(this.usersUrl).pipe(
      catchError(this.handleErrors),
      map((response: Response) => this.responseToUsers(response))
    )
  }

  public getById(id: number): Observable<User>{
    let url = `${this.usersUrl}/${id}`;

    return this.tokenHttp.get(url).pipe(
      catchError(this.handleErrors),
      map((response: Response) => this.responseToUser(response))
    )
  }

  public getProfile(): Observable<User>{
    let url = 'user/profile';

    return this.tokenHttp.get(url).pipe(
      catchError(this.handleErrors),
      map((response: Response) => this.responseToUser(response))
    )
  }

  public create(user: User): Observable<User>{
    let url = `${this.usersUrl}`;
    let body = JSON.stringify(user);

    return this.tokenHttp.get(url).pipe(
      catchError(this.handleErrors),
      map((response: Response) => this.responseToUser(response))
    )
  }

  public update(user: User): Observable<User>{
    let url = `${this.usersUrl}/${user.id}`;
    let body = JSON.stringify(user.jsonForRailsAPI());

    return this.tokenHttp.put(url, body).pipe(
      catchError(this.handleErrors),
      map((response: Response) => this.responseToUser(response))
    )
  }

  public delete(id: number): Observable<User>{
    let url = `${this.usersUrl}/${id}`;

    return this.tokenHttp.delete(url).pipe(
      catchError(this.handleErrors),
      map(() => null)
    )
  }


  private handleErrors(error: Response){
    console.log("SALVANDO O ERRO EM UM ARQUIVO DE LOG - DETALHES DO ERRO => ", error);
    return Observable.throw(error);
  }

  private responseToUsers(response: Response): User[]{
    let collection = response.json().data as Array<any>;
    let users: User[] = [];

    collection.forEach(item => {
      let user = new User(
        item.attributes.email,
        item.attributes.name,
        item.attributes.roles
      )

      users.push(user)
    })

    return users;
  }

  private responseToUser(response: Response): User {

    return new User(
      response.json().data.attributes.email,
      response.json().data.attributes.name,
      response.json().data.attributes.roles
    )
  }

}

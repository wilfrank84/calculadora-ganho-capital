import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Angular2TokenService } from 'angular2-token';
import { Transaction } from './transaction.model';

@Injectable()

export class TransactionService {
  public transactionUrl = 'stock_exchange_transactions';

  public constructor(private tokenHttp: Angular2TokenService) {}

  public getAll(): Observable<Transaction[]>{
    return this.tokenHttp.get(this.transactionUrl).pipe(
      catchError(this.handleErrors),
      map((response: Response) => this.responseToTransactions(response))
    )
  }

  public getById(id: number): Observable<Transaction>{
    let url = `${this.transactionUrl}/${id}`;

    return this.tokenHttp.get(url).pipe(
      catchError(this.handleErrors),
      map((response: Response) => this.responseToTransaction(response))
    )
  }

  public getByUser(): Observable<any>{
    let url = `user/address`;

    return this.tokenHttp.get(url).pipe(
      catchError(this.handleErrors),
      map((response: Response) => {

        if (response.status === 200) {
          return this.responseToTransaction(response)
        } else {
          return null;
        }

      })
    )
  }

  public create(transaction: Transaction): Observable<Transaction> {
    let url = this.transactionUrl;
    let body = JSON.stringify(transaction.jsonForRailsAPI());

    return this.tokenHttp.post(url, body).pipe(
      catchError(this.handleErrors),
      map((response: Response) => this.responseToTransaction(response))
    )
  }

  public update(transaction: Transaction): Observable<Transaction>{
    let url = `${this.transactionUrl}/${transaction.id}`;
    let body = JSON.stringify(transaction);

    return this.tokenHttp.put(url, body).pipe(
      catchError(this.handleErrors),
      map((response: Response) => this.responseToTransaction(response))
    )
  }

  public delete(id: number): Observable<Transaction>{
    let url = `${this.transactionUrl}/${id}`;

    return this.tokenHttp.delete(url).pipe(
      catchError(this.handleErrors),
      map(() => null)
    )
  }

  private handleErrors(error: Response){
    console.log("SALVANDO O ERRO EM UM ARQUIVO DE LOG - DETALHES DO ERRO => ", error);
    return Observable.throw(error);
  }

  private responseToTransactions(response: Response): Transaction[]{
    let collection = response.json() as Array<any>;
    let transactions: Transaction[] = [];

    collection.forEach(item => {
      let transaction = new Transaction(
        item.transaction_date,
        item.transaction_kind,
        item.amount,
        item.asset_kind,
        item.asset_name,
        item.asset_price,
        item.transaction_costs,
        item.asset_price_less_costs,
        item.transaction_total_price,
        item.irrf,
        item.user_id,
        item.id
      )
      transactions.push(transaction)
    })

    return transactions;
  }

  private responseToTransaction(response: Response): Transaction {
    return new Transaction(
      response.json().transaction_date,
      response.json().transaction_kind,
      response.json().amount,
      response.json().asset_kind,
      response.json().asset_name,
      response.json().asset_price,
      response.json().transaction_costs,
      response.json().asset_price_less_costs,
      response.json().transaction_total_price,
      response.json().irrf,
      response.json().user_id,
      response.json().id
    )
  }

}

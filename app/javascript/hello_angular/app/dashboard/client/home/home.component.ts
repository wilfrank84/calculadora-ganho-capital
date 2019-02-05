import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';

import { Angular2TokenService } from 'angular2-token';

import templateString from './home.component.html';
import styleString from './home.component.scss';
import { TransactionService } from './../../transactions/shared/transaction.service';
import { Transaction } from './../../transactions/shared/transaction.model';
import { TransactionFormComponent } from './../../transactions/transaction-form/transaction-form.component';


@Component({
  selector: 'app-home',
  template: templateString,
  styles: [ styleString ]
})
export class HomeComponent implements OnInit {
  name = 'Angular!';
  displayedColumns: string[] = ['transactionDate', 'transactionKind', 'assetKind', 'assetPrice', 'assetPriceLessCosts', 'irrf'];
  transactions: Transaction[] = [];

  public constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private tokenService: Angular2TokenService,
    private transactionService: TransactionService
  ) {}

  public ngOnInit() {
    this.transactionService.getAll()
      .subscribe(transactions => {
        this.transactions = transactions;
        console.log(this.transactions);
      })
  }

  public openDialog() {
    const dialogRef = this.dialog.open(TransactionFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }





  // changeName() {
  //   this.http.get('/hello_angular/name').subscribe(data => {
  //     this.name = data['name'];
  //   });
  // }

  // signOut() {
  //   this.http.delete('/users/sign_out').subscribe(data => {
  //     console.log(data);
  //   });
  // }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

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
    private transactionService: TransactionService,
    private router: Router
  ) {}

  public ngOnInit() {
    this.getUserTransactions();
  }

  public getUserTransactions() {
    this.transactionService.getByUser()
      .subscribe(transactions => {
        this.transactions = transactions;
      })
  }

  public openDialog() {
    const dialogRef = this.dialog.open(TransactionFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getUserTransactions();
    });
  }

  public allTransactions() {
    this.router.navigate(['/transactions'])
  }

}

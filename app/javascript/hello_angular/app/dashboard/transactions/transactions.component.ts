import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Angular2TokenService } from 'angular2-token';

import templateString from './transactions.component.html';
import styleString from './transactions.component.scss';
import { TransactionService } from './shared/transaction.service';
import { Transaction } from './shared/transaction.model';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';


@Component({
  selector: 'app-transactions',
  template: templateString,
  styles: [ styleString ]
})
export class TransactionsComponent implements OnInit {
  displayedColumns: string[] = ['transactionDate', 'transactionKind', 'assetKind', 'assetPrice', 'assetPriceLessCosts', 'irrf'];
  transactions: Transaction[] = [];

  public constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private location: Location,
    private tokenService: Angular2TokenService,
    private transactionService: TransactionService,
    private router: Router
  ) {}

  public ngOnInit() {
    this.getTransactions();
  }

  public getTransactions() {
    this.transactionService.getAll()
      .subscribe(transactions => {
        this.transactions = transactions;
      })
  }

  public openDialog() {
    const dialogRef = this.dialog.open(TransactionFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getTransactions();
    });
  }

  public goBack() {
    this.location.back();
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Angular2TokenService } from 'angular2-token';

import templateString from './transaction-form.component.html';
import styleString from './transaction-form.component.scss';
import { Transaction } from './../shared/transaction.model';
import { TransactionService } from './../shared/transaction.service';

@Component({
  selector: 'app-transaction-form',
  template: templateString,
  styles: [ styleString ]
})
export class TransactionFormComponent implements OnInit {
  public form: FormGroup;
  public transaction: Transaction;

  public constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private tokenService: Angular2TokenService,
    private transactionService: TransactionService
  ) {
    this.setupForm();
  }

  public ngOnInit() {
    this.transaction = new Transaction();
  }

  private setupForm(){
    this.form = this.formBuilder.group({
      transactionDate:       [null, [ Validators.required ]],
      transactionKind:       [null, [ Validators.required ]],
      amount:                [0, [ Validators.required ]],
      assetKind:             [null, [ Validators.required ]],
      assetName:             [null, [ Validators.required ]],
      assetPrice:            [null, [ Validators.required ]],
      transactionCosts:      [null, [ Validators.required ]],
      // assetPriceLessCosts:   [null, [ Validators.required ]],
      // transactionTotalPrice: [null, [ Validators.required ]]
    });
  }

  public createTransaction() {

    this.transaction.transactionDate       = this.form.get('transactionDate').value,
    this.transaction.transactionKind       = this.form.get('transactionKind').value,
    this.transaction.amount                = this.form.get('amount').value,
    this.transaction.assetKind             = this.form.get('assetKind').value,
    this.transaction.assetName             = this.form.get('assetName').value,
    this.transaction.assetPrice            = this.form.get('assetPrice').value,
    this.transaction.transactionCosts      = this.form.get('transactionCosts').value,
    // this.transaction.assetPriceLessCosts   = this.form.get('assetPriceLessCosts').value
    // this.transaction.transactionTotalPrice = this.form.get('transactionTotalPrice').value

    console.log(this.transaction);

    this.transactionService.create(this.transaction)
      .subscribe(
        () => alert("Transação cadastrada com sucesso!"),
        erro => {
          alert("Ocorreu um erro no servidor, por favor tente mais tarde.");
          console.log(erro);
        }
      )
  }

}

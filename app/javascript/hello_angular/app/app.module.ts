import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// rxjs operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { _throw } from 'rxjs/observable/throw';
import { of } from 'rxjs/observable/of';

// Component imports
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './dashboard/client/home/home.component';
import { SignInFormComponent } from './login/sign-in-form/sign-in-form.component';
import { TransactionsComponent } from './dashboard/transactions/transactions.component';
import { TransactionFormComponent } from './dashboard/transactions/transaction-form/transaction-form.component';
import { ToolbarComponent } from './dashboard/shared/toolbar/toolbar.component';

// Services imports
import { AuthService } from './shared/auth.service';
import { TransactionService } from './dashboard/transactions/shared/transaction.service';
import { UserService } from './dashboard/admin/users/shared/user.service';

// Angular Plugins Imports
import { Angular2TokenService } from 'angular2-token';

// Guards imports
import { AuthGuard } from './guards/auth.guard';

// Directives imports
import { IfInRoleDirective } from './shared/can-access.directive';

// Material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

// Input Masks
import { NgxCurrencyModule } from "ngx-currency";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IfInRoleDirective,
    SignInFormComponent,
    TransactionsComponent,
    TransactionFormComponent,
    ToolbarComponent
  ],
  entryComponents: [TransactionFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    NgxCurrencyModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  exports: [IfInRoleDirective],
  providers: [
    Angular2TokenService,
    AuthGuard,
    AuthService,
    TransactionService,
    UserService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

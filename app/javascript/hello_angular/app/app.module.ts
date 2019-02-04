import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Modules imports
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './dashboard/client/home/home.component';
import { ToolbarComponent } from './dashboard/shared/toolbar/toolbar.component';

// Services imports
import { AuthService } from './shared/auth.service';

// Angular Plugins Imports
import { Angular2TokenService } from 'angular2-token';

// Material imports
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    Angular2TokenService,
    AuthService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

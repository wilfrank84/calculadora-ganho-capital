import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//--- DASHBOARD ---//
import { HomeComponent } from './dashboard/client/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SHARED
import { AuthGuard } from './guards/auth.guard';

//--- DASHBOARD ---//
import { HomeComponent } from './dashboard/client/home/home.component';

// LOGIN
import { SignInFormComponent } from './login/sign-in-form/sign-in-form.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInFormComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

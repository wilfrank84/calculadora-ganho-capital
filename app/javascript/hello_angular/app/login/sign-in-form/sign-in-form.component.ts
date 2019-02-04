import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './../../shared/auth.service';
// import { FormUtils } from './../../shared/form.utils';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: 'sign-in-form.component.html'
})

export class SignInFormComponent implements OnInit {
  public form: FormGroup;
  // public formUtils: FormUtils;
  public submitted: boolean;
  public formErrors: Array<string>;
  public returnUrl: string;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ){
    this.setupForm();
    // this.formUtils = new FormUtils(this.form);
    this.submitted = false;
    this.formErrors = null;
  }

  public ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }

  public signInUser(){
    this.submitted = true;

    this.authService.signIn(this.form.get('email').value, this.form.get('password').value)
      .subscribe(
        (response) => {
          this.formErrors = null;
          this.form.reset();

          // login successful so redirect to return url
          if (this.returnUrl) {
            this.router.navigateByUrl(this.returnUrl);
          }
        },
        (error) => {
          this.submitted = false;

          if( error.status === 401 )
            this.formErrors = JSON.parse(error._body).errors;
          else
            this.formErrors = ["Não foi possível processar a sua solicitação. Por favor, tente mais tarde."]
        }
      )
  }

  private setupForm(){
    this.form = this.formBuilder.group({
      email: [null, [ Validators.required, Validators.email ]],
      password: [null, [ Validators.required ]]
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import templateString from './sign-in-form.component.html';
import styleString from './sign-in-form.component.scss';
import { AuthService } from './../../shared/auth.service';
// import { FormUtils } from './../../shared/form.utils';

@Component({
  selector: 'app-sign-in-form',
  template: templateString,
  styles: [ styleString ]
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

  public ngOnInit() {}

  public signInUser(){
    this.submitted = true;

    this.authService.signIn(this.form.get('email').value, this.form.get('password').value)
      .subscribe(
        (response) => {
          this.formErrors = null;
          this.form.reset();
          this.router.navigate(['']);
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

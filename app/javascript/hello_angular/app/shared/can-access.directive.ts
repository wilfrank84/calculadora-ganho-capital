import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

import { UserService } from './../dashboard/admin/users/shared/user.service';

@Directive({
    selector: '[ifInRole]'
})
export class IfInRoleDirective implements OnInit {
    @Input('ifInRole') role: string;

    userId: number;

    constructor(
        private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        private tokenService: Angular2TokenService,
        private userService: UserService
    ) {}

    ngOnInit(): void {

        this.tokenService.validateToken()
          .subscribe(res => {
            this.userId = res.json().data.id;
            this.userService.getById(this.userId)
              .subscribe(user => {

                if (user['roles'].includes(this.role)) {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                } else {
                    this.viewContainer.clear();
                }

              })
          })


    }
}

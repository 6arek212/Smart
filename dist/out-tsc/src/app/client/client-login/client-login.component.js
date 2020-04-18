import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { phoneNumber } from '../../utils-components/validators';
let ClientLoginComponent = class ClientLoginComponent {
    constructor(clientAuthService, router) {
        this.clientAuthService = clientAuthService;
        this.router = router;
        this.isLoading = false;
    }
    ngOnInit() {
        this.form = new FormGroup({
            phone: new FormControl(null, {
                validators: [Validators.required, Validators.minLength(6), Validators.maxLength(24)],
                asyncValidators: [phoneNumber]
            }),
            password: new FormControl(null, {
                validators: [Validators.required, Validators.minLength(8), Validators.maxLength(16)]
            }),
            keepMeLogedIn: new FormControl(false),
        });
        this.clientAuthService.getIsAuthenticatedListener().subscribe(isAuth => {
            this.isLoading = isAuth;
        });
    }
    onLogin() {
        if (this.form.invalid) {
            this.form.markAsTouched();
            return;
        }
        this.isLoading = true;
        this.clientAuthService.login(this.form.get('phone').value, this.form.get('password').value, this.form.get('keepMeLogedIn').value);
    }
};
ClientLoginComponent = __decorate([
    Component({
        selector: 'app-client-login',
        templateUrl: './client-login.component.html',
        styleUrls: ['./client-login.component.css']
    })
], ClientLoginComponent);
export { ClientLoginComponent };
//# sourceMappingURL=client-login.component.js.map
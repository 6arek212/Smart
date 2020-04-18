import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoading = false;
        this.isAuthenticated = false;
    }
    ngOnInit() {
        this.form = new FormGroup({
            'email': new FormControl(null, { validators: [Validators.required] }),
            'password': new FormControl(null, { validators: [Validators.required] })
        });
        this.authListenerSubs = this.authService.getIsAuthenticatedListener().subscribe(isAuthintecated => {
            this.isAuthenticated = isAuthintecated;
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        var _a;
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        (_a = this.authListenerSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    onLogin(form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.login(form.value.email, form.value.password);
        form.reset();
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map
import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SignupComponent = class SignupComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoading = false;
        this.selectedItem = 'male';
    }
    ngOnInit() {
        // this.authStatusAuth = this.authService.getAuthStatusListener().subscribe(
        //   authStatus => {
        //     this.isLoading = false
        //   }
        // )
    }
    onValidatePassword(form) {
        console.log(form.controls);
        const validatePassword = form.controls.validate_password;
        const password = form.controls.password;
        if (validatePassword.value !== password.value) {
            validatePassword.setErrors(Object.assign(Object.assign({}, validatePassword.errors), { passwordNotMatch: true }));
        }
    }
    onSingUp(form) {
        this.onValidatePassword(form);
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        const user = {
            firstName: form.value.firstName,
            lastName: form.value.lastName,
            email: form.value.email,
            password: form.value.password,
            gender: form.value.gender
        };
        this.authService.onSignUp(user);
        form.reset();
    }
    ngOnDestroy() {
        var _a;
        (_a = this.authStatusAuth) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
};
SignupComponent = __decorate([
    Component({
        selector: 'app-signup',
        templateUrl: './signup.component.html',
        styleUrls: ['./signup.component.css']
    })
], SignupComponent);
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map
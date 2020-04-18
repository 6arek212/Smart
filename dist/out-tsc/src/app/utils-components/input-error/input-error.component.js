import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let InputErrorComponent = class InputErrorComponent {
    constructor() { }
    ngOnInit() {
    }
    getError() {
        if (!this.errors)
            return;
        if (this.errors['required']) {
            return 'required';
        }
        if (this.errors['email']) {
            return 'email';
        }
        if (this.errors['email']) {
            return 'email';
        }
        if (this.errors['minlength']) {
            return 'minlength';
        }
        if (this.errors['maxlength']) {
            return 'maxlength';
        }
        if (this.errors['phoneNumber']) {
            return 'phoneNumber';
        }
        if (this.errors['passwordNotMatch']) {
            return 'passwordNotMatch';
        }
    }
};
__decorate([
    Input()
], InputErrorComponent.prototype, "errors", void 0);
__decorate([
    Input()
], InputErrorComponent.prototype, "controller", void 0);
InputErrorComponent = __decorate([
    Component({
        selector: 'app-input-error',
        templateUrl: './input-error.component.html',
        styleUrls: ['./input-error.component.css']
    })
], InputErrorComponent);
export { InputErrorComponent };
//# sourceMappingURL=input-error.component.js.map
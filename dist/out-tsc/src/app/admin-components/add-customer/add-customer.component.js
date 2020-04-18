import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AddCustomerComponent = class AddCustomerComponent {
    constructor() { }
    ngOnInit() {
    }
    addCustomer(form) {
        if (form.invalid) {
            this.isFormInvalid = true;
            return;
        }
        this.isFormInvalid = false;
    }
    checkPhoneNumber(form, event) {
        const phone = form.controls[event.target.name];
        console.log(phone);
        if (!phone) {
            return;
        }
        var isnum = /^\d+$/.test(phone.value);
        if (!isnum)
            phone.setErrors(Object.assign(Object.assign({}, phone.errors), { phoneNumber: true }));
    }
};
AddCustomerComponent = __decorate([
    Component({
        selector: 'app-add-customer',
        templateUrl: './add-customer.component.html',
        styleUrls: ['./add-customer.component.css']
    })
], AddCustomerComponent);
export { AddCustomerComponent };
//# sourceMappingURL=add-customer.component.js.map
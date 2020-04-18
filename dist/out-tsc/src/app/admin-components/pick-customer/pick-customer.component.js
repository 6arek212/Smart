import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PickCustomerComponent = class PickCustomerComponent {
    constructor(cutomerService) {
        this.cutomerService = cutomerService;
    }
    ngOnInit() {
        this.cutomerService.getCustomers().subscribe(data => {
            this.customers = data.customers;
        });
    }
    onSearch(event) {
        const ref = this.cutomerService.getCustomers(event.value).subscribe(data => {
            console.log(data);
            this.customers = data.customers;
            ref.unsubscribe();
        }, err => {
            console.log(err);
        });
    }
};
PickCustomerComponent = __decorate([
    Component({
        selector: 'app-pick-customer',
        templateUrl: './pick-customer.component.html',
        styleUrls: ['./pick-customer.component.css']
    })
], PickCustomerComponent);
export { PickCustomerComponent };
//# sourceMappingURL=pick-customer.component.js.map
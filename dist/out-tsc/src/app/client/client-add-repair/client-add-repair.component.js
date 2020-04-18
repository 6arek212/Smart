import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ClientService } from 'src/app/client/services/client.service';
let ClientAddRepairComponent = class ClientAddRepairComponent {
    constructor(clientService, phoneService) {
        this.clientService = clientService;
        this.phoneService = phoneService;
        this.isLoading = false;
        this.isSubmited = false;
    }
    ngOnInit() {
        this.phoneNumberData = this.phoneService.getPhoneNumberAndCountryCode();
    }
    onAddingRequest(form) {
        if (form.invalid)
            return;
        const req = {
            firstName: form.value.firstName,
            lastName: form.value.lastName,
            title: form.value.title,
            phoneAuthId: this.phoneService.getPhoneAuthId(),
            phone: this.phoneNumberData.phoneNumber,
            countryCode: this.phoneNumberData.countryCode,
            notes: form.value.notes
        };
        this.isLoading = true;
        this.clientService.addRequest(req).subscribe(res => {
            this.isLoading = false;
            this.isSubmited = true;
        });
        this.phoneService.ngOnDestroy();
    }
    checkPhoneNumber(form, event) {
        const phone = form.controls[event.target.name];
        if (!phone) {
            return;
        }
        var isnum = /^\d+$/.test(phone.value);
        if (!isnum)
            phone.setErrors(Object.assign(Object.assign({}, phone.errors), { phoneNumber: true }));
    }
};
ClientAddRepairComponent = __decorate([
    Component({
        selector: 'app-client-add-repair',
        templateUrl: './client-add-repair.component.html',
        styleUrls: ['./client-add-repair.component.css'],
        providers: [ClientService]
    })
], ClientAddRepairComponent);
export { ClientAddRepairComponent };
//# sourceMappingURL=client-add-repair.component.js.map
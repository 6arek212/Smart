import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let AddDeviceComponent = class AddDeviceComponent {
    constructor(repairService, data) {
        this.repairService = repairService;
        this.data = data;
        this.viewNames = {};
    }
    ngOnInit() {
        this.getCompanies();
    }
    onSelected(event) {
        console.log(event);
        this.viewNames[event.source.ngControl.name] = event.source.triggerValue;
        if (event.source.ngControl.name === 'company')
            this.repairService.getDeviceModelByCompanyID(event.value).subscribe(devices => {
                this.devicesModel = devices.devices;
            });
    }
    getCompanies() {
        this.repairService.getDeviceCompanies().subscribe(res => {
            console.log(res.message);
            this.companies = res.companies;
        });
    }
    onAddingDevice(form) {
        if (form.invalid)
            return;
        const device = {
            device: form.value.device,
            notes: form.value.notes,
            price: form.value.price
        };
        this.data.callback(device, this.viewNames);
    }
};
AddDeviceComponent = __decorate([
    Component({
        selector: 'app-add-device',
        templateUrl: './add-device.component.html',
        styleUrls: ['./add-device.component.css']
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], AddDeviceComponent);
export { AddDeviceComponent };
//# sourceMappingURL=add-device.component.js.map
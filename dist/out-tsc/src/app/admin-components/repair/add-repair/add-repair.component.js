import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PickCustomerComponent } from 'src/app/admin-components/pick-customer/pick-customer.component';
import { AddDeviceComponent } from 'src/app/admin-components/add-device/add-device.component';
let AddRepairComponent = class AddRepairComponent {
    constructor(dilaog, repairService) {
        this.dilaog = dilaog;
        this.repairService = repairService;
        this.devices = [];
        this.isLoading = false;
        this.viewsName = [];
    }
    ngOnInit() {
        this.loadingSub = this.repairService.getIsLoading().subscribe(res => {
            this.isLoading = res;
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.loadingSub.unsubscribe();
    }
    pickCustomer() {
        const ref = this.dilaog.open(PickCustomerComponent, {
            width: '80%',
            height: '90vh'
        });
        ref.afterClosed().subscribe(res => {
            console.log(res);
            this.customer = res;
        });
    }
    addDevice() {
        const callback = (device, viewNames) => {
            console.log(device, viewNames);
            this.dilaog.closeAll();
            this.devices.push(device);
            this.viewsName.push(viewNames);
        };
        const ref = this.dilaog.open(AddDeviceComponent, {
            width: '80%',
            height: '90vh',
            data: { callback }
        });
    }
    deleteDevice(index) {
        console.log(index);
        const newArr = this.devices.filter((dev, i) => {
            return index !== i;
        });
        const newViewsList = this.viewsName.filter((v, i) => {
            return index !== i;
        });
        this.viewsName = newViewsList;
        this.devices = newArr;
    }
    onAddingRepair() {
        if (this.devices.length == 0)
            return;
        if (!this.customer)
            return;
        const repair = {
            customer: this.customer._id,
            devices: this.devices
        };
        console.log(repair);
        this.repairService.addRepair(repair);
    }
};
AddRepairComponent = __decorate([
    Component({
        selector: 'app-add-repair',
        templateUrl: './add-repair.component.html',
        styleUrls: ['./add-repair.component.css']
    })
], AddRepairComponent);
export { AddRepairComponent };
//# sourceMappingURL=add-repair.component.js.map
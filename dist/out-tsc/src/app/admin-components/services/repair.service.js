import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Customer } from '../../models/Customer';
import { Device } from '../../models/Device';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
const BACKEND_URL = environment.apiUrl;
let RepairService = class RepairService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isLoading = new Subject();
        this.devicesModels = [{ _id: '1', model: "iPhone X" },
            { _id: '2', model: "Galaxy S20" }];
    }
    getIsLoading() {
        return this.isLoading.asObservable();
    }
    getRepairs() {
        return [
            {
                _id: "1", notes: "this device needs alot of things", price: 500.5, problems: ["1", "2", "3"], createdAt: new Date(), status: true,
                customer: new Customer(), device: new Device()
            },
            {
                _id: "2", notes: "this device needs alot of things", price: 500.5, problems: ["1", "2", "3"], createdAt: new Date(), status: false,
                customer: new Customer(), device: new Device()
            },
            {
                _id: "2", notes: "this device needs alot of things", price: 500.5, problems: ["1", "2", "3"], createdAt: new Date(), status: false,
                customer: new Customer(), device: new Device()
            },
            {
                _id: "2", notes: "this device needs alot of things", price: 500.5, problems: ["1", "2", "3"], createdAt: new Date(), status: false,
                customer: new Customer(), device: new Device()
            }
        ];
    }
    getDeviceModelByCompanyID(id) {
        return this.http.get(BACKEND_URL + 'devices/' + id);
    }
    getDeviceCompanies() {
        return this.http.get(BACKEND_URL + "companies");
    }
    addRepair(repair) {
        this.isLoading.next(true);
        this.http.post(BACKEND_URL + 'repairs', repair).subscribe(data => {
            console.log(data);
            this.isLoading.next(false);
            this.router.navigate(['/admin']);
        });
    }
};
RepairService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RepairService);
export { RepairService };
//# sourceMappingURL=repair.service.js.map
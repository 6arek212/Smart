import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
const BACKEND_URL = environment.apiUrl + 'devices/';
let DevicesService = class DevicesService {
    constructor(http) {
        this.http = http;
        this.devicesListener = new Subject();
    }
    getDevicesListener() {
        return this.devicesListener.asObservable();
    }
    getDevices() {
        this.http.get(BACKEND_URL).subscribe(res => {
            this.devices = res.devices;
            this.devicesListener.next([...this.devices]);
        });
    }
    getDevicesByCompanyId(companyId) {
        this.http.get(BACKEND_URL + companyId).subscribe(res => {
            this.devices = res.devices;
            this.devicesListener.next([...this.devices]);
        });
    }
};
DevicesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DevicesService);
export { DevicesService };
//# sourceMappingURL=devices.service.js.map
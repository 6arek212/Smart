import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const BACKEND_URL = environment.apiUrl + 'customers/';
let CustomersService = class CustomersService {
    constructor(http) {
        this.http = http;
    }
    getCustomers(search = null) {
        console.dir(search);
        return this.http.post(BACKEND_URL + 'search', { search });
    }
};
CustomersService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CustomersService);
export { CustomersService };
//# sourceMappingURL=customers.service.js.map
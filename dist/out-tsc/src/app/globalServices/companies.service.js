import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
const BACKEND_URL = environment.apiUrl + 'companies/';
let CompaniesService = class CompaniesService {
    constructor(http) {
        this.http = http;
        this.companiesListener = new Subject();
    }
    getCompaniesListener() {
        return this.companiesListener.asObservable();
    }
    getCompanies() {
        this.http.get(BACKEND_URL).subscribe(res => {
            this.companies = res.companies;
            this.companiesListener.next([...this.companies]);
        });
    }
};
CompaniesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CompaniesService);
export { CompaniesService };
//# sourceMappingURL=companies.service.js.map
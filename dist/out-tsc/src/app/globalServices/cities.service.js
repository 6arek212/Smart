import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
const BACKEND_URL = environment.apiUrl + 'cities/';
let CitiesService = class CitiesService {
    constructor(http) {
        this.http = http;
        this.citiesListener = new Subject();
    }
    getCitiesListener() {
        return this.citiesListener.asObservable();
    }
    getCites() {
        this.http.get(BACKEND_URL).subscribe(res => {
            this.cities = res.cities;
            this.citiesListener.next([...this.cities]);
        });
    }
};
CitiesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CitiesService);
export { CitiesService };
//# sourceMappingURL=cities.service.js.map
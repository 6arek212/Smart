import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
const BACKEND_URL = environment.apiUrl + 'customers/';
let ClientInfoService = class ClientInfoService {
    constructor(http, clientAuthService) {
        this.http = http;
        this.clientAuthService = clientAuthService;
        this.requestsStaticsListener = new Subject();
    }
    getClientRequestsStatics() {
        this.http.get(BACKEND_URL + 'getRequestsStatics/' + this.clientAuthService.getUser()._id)
            .pipe(map((res) => {
            return {
                data: Object.keys(res.data).map(name => {
                    let newName;
                    if (name == 'numOfRequests') {
                        newName = 'الطلبات';
                    }
                    else if (name == 'numOfDoneRequests') {
                        newName = 'طلبات تمت';
                    }
                    return { name: newName, value: res.data[name] };
                }),
                message: res.message
            };
        }))
            .subscribe(res => {
            this.requestsStatics = res.data;
            this.requestsStaticsListener.next([...this.requestsStatics]);
        });
    }
    getClientRequestsStaticsListener() {
        return this.requestsStaticsListener.asObservable();
    }
};
ClientInfoService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ClientInfoService);
export { ClientInfoService };
//# sourceMappingURL=client-info.service.js.map
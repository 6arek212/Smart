import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
const BACKEND_URL = environment.apiUrl + 'requests/';
let RequestsService = class RequestsService {
    constructor(http, clientAuthService) {
        this.http = http;
        this.clientAuthService = clientAuthService;
        this.requests = [];
        this.requestsListener = new Subject();
    }
    getRequestsListener() {
        return this.requestsListener.asObservable();
    }
    getRequests(page = 1, pagesize = 10) {
        this.http.get(BACKEND_URL).subscribe(res => {
            this.requests = res.requests;
            this.requestsListener.next([...this.requests]);
        });
    }
    getRequestsByCustomerId(page = 1, pagesize = 10) {
        const customerId = this.clientAuthService.getUser()._id;
        const queryParams = `requestsByCustomerId?page=${page}&pagesize=${pagesize}&customerId=${customerId}`;
        this.http.get(BACKEND_URL + queryParams).subscribe(res => {
            this.requests = res.requests;
            this.requestsListener.next([...this.requests]);
        });
    }
    getRequestById(requestId) {
        return this.http.get(BACKEND_URL + 'getRequest/' + requestId);
    }
    addRequest(request, error, success) {
        this.http.post(BACKEND_URL, request).subscribe(res => {
            this.requests.push(res.request);
            this.requestsListener.next([...this.requests]);
            success();
        }, err => {
            error();
        });
    }
    updateReuqest(requestId, updateOp) {
        console.log(updateOp, requestId);
        const customerId = this.clientAuthService.getUser()._id;
        const queryParams = `?customerId=${customerId}&requestId=${requestId}`;
        return this.http.patch(BACKEND_URL + queryParams, updateOp);
    }
};
RequestsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RequestsService);
export { RequestsService };
//# sourceMappingURL=requests.service.js.map
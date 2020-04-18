import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
const BACKEND_URL = environment.apiUrl + 'issues/';
let IssuesService = class IssuesService {
    constructor(http) {
        this.http = http;
        this.issuesListener = new Subject();
    }
    getIssuesListener() {
        return this.issuesListener.asObservable();
    }
    getIssues() {
        this.http.get(BACKEND_URL).subscribe(res => {
            this.issues = res.issues;
            this.issuesListener.next([...this.issues]);
        });
    }
};
IssuesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], IssuesService);
export { IssuesService };
//# sourceMappingURL=issues.service.js.map
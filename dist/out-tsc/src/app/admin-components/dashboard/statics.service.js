import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
const BACKEND = environment.apiUrl + "statistic";
let StaticsService = class StaticsService {
    constructor(http) {
        this.http = http;
        this.numOf = [];
        this.numOfSub = new Subject();
        this.statistics = [];
        this.statisticsSub = new Subject();
    }
    getNumOf() {
        this.http.get(BACKEND + '/numOf').subscribe(res => {
            this.numOf = res;
            this.numOfSub.next([...this.numOf]);
            console.log(res);
        });
    }
    getNumOfListener() {
        return this.numOfSub.asObservable();
    }
    getStaticsRecord() {
        this.http.get(BACKEND).subscribe(res => {
            this.statistics = res;
            this.statisticsSub.next([...this.statistics]);
            console.log(res);
        });
    }
    getStaticsRecordListener() {
        return this.statisticsSub.asObservable();
    }
    siteVisit() {
        this.http.post(BACKEND + '/siteVisit', null).subscribe(res => {
        });
    }
};
StaticsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StaticsService);
export { StaticsService };
//# sourceMappingURL=statics.service.js.map
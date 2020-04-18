import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
const BASE_URL = environment.apiUrl;
let PhoneAuthService = class PhoneAuthService {
    constructor(http) {
        this.http = http;
        this.isVerified = false;
        this.isVerifiedListener = new Subject();
        this.isLoading = new Subject();
    }
    ngOnDestroy() {
        console.log('phone service destroied');
    }
    getPhoneAuthId() {
        return this.phoneAuthId;
    }
    getPhoneNumberAndCountryCode() {
        return { phoneNumber: this.authPhoneNumber, countryCode: this.authCountryCode };
    }
    getIsVerified() {
        return this.isVerified;
    }
    getIsVierifiedListener() {
        return this.isVerifiedListener.asObservable();
    }
    sendSMS(countryCode, phoneNumber, success = null, err = null) {
        this.isLoading.next(true);
        this.authPhoneNumber = phoneNumber;
        this.authCountryCode = countryCode;
        this.http.post(BASE_URL + 'phoneAuth', { countryCode, phoneNumber }).subscribe(res => {
            this.phoneAuthId = res._id;
            success();
        }, err => {
            err(err);
        });
    }
    verifyPhone(code, _id) {
        this.http.post(BASE_URL + 'phoneAuth/verifyNumber', { code, _id }).subscribe(res => {
            this.isVerified = true;
            this.isVerifiedListener.next(true);
            console.log(res);
        }, err => {
            console.log(err);
            this.isVerified = false;
            this.isVerifiedListener.next(this.isVerified);
        });
    }
};
PhoneAuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PhoneAuthService);
export { PhoneAuthService };
//# sourceMappingURL=phone-auth.service.js.map
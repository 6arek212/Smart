import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
const BACKEND_URL = environment.apiUrl + 'customers/';
let ClientAuthService = class ClientAuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.isAuthenticatedListener = new Subject();
        this.isLoading = false;
    }
    getIsAuthenticated() {
        return this.isAuthenticated;
    }
    getIsAuthenticatedListener() {
        return this.isAuthenticatedListener;
    }
    getIsLoading() {
        return this.isLoading;
    }
    getUser() {
        return { _id: '5e8c91149ccc676a84216d3c' };
    }
    ngOnDestroy() {
        console.log('clientService died');
    }
    onSignUp(customer) {
        this.isLoading = true;
        this.http.post(BACKEND_URL + 'signup', customer).subscribe(res => {
            console.log('signup success');
            this.authMethod(res);
        }, err => {
            this.setAuthenticated(false);
        });
    }
    login(phoneNumber, password, keepMelogedIn = false) {
        const authData = { phone: phoneNumber, password };
        this.isLoading = true;
        this.http.post(BACKEND_URL + 'login', authData).subscribe(res => {
            this.authMethod(res, keepMelogedIn);
        }, err => {
            this.setAuthenticated(false);
        });
    }
    setAuthenticated(state) {
        this.isAuthenticated = state;
        this.isAuthenticatedListener.next(state);
        this.isLoading = false;
        this.router.navigate(['/client']);
    }
    authMethod(res, keepMelogedIn = false) {
        const token = res.token;
        this.token = token;
        if (token) {
            this.token = token;
            this.setAuthenticated(true);
            const user = res.user;
            this.user = user;
            const expiresInDuration = res.expiresIn;
            this.setAuthTimer(expiresInDuration);
            if (keepMelogedIn) {
                const now = new Date();
                const expirationDate = new Date((now.getTime() + expiresInDuration * 1000));
                this.saveAuthData(token, expirationDate, user);
            }
        }
    }
    ///--- Summary ---////
    /// Title : Loging out
    /// Description :
    /// Returning Args :
    logout() {
        this.setAuthenticated(false);
        this.token = null;
        this.isAuthenticated = false;
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.user = null;
        this.router.navigate(['/admin/login']);
    }
    ///--- Summary ---////
    /// Title : Auto authenticate the user
    /// Description : Automatically authenticating the user
    /// Returning Args :
    autoAuthUser() {
        const authInfo = this.getAuthData();
        if (!authInfo) {
            return;
        }
        const now = new Date();
        const expiresIn = authInfo.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInfo.token;
            this.user = authInfo.user;
            this.setAuthTimer(expiresIn / 1000);
            this.setAuthenticated(true);
            this.token = authInfo.token;
            this.router.navigate(['/admin']);
        }
    }
    ///--- Summary ---////
    /// Title : Auth timer for token date
    /// Description : updating the ui based on the token expire date
    /// Returning Args :
    setAuthTimer(duration) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }
    getToken() {
        return this.token;
    }
    ///--- Summary ---////
    /// Title : getting the authintecation data from local storage
    /// Description :
    /// Returning Args :
    getAuthData() {
        const token = localStorage.getItem('client-token');
        const expirationDate = localStorage.getItem('client-expirationDate');
        const firstName = localStorage.getItem('client-firstName');
        const lastName = localStorage.getItem('client-lastName');
        const id = localStorage.getItem('client-id');
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            user: {
                firstName,
                lastName,
                _id: id
            }
        };
    }
    ///--- Summary ---////
    /// Title : Saving to local storage
    /// Description : saving the auth data to local storage
    /// Returning Args :
    saveAuthData(token, expirationDate, user) {
        localStorage.setItem('client-token', token);
        localStorage.setItem('client-expirationDate', expirationDate.toISOString());
        localStorage.setItem('client-firstName', user.firstName);
        localStorage.setItem('client-lastName', user.lastName);
        localStorage.setItem('client-id', user._id);
    }
    ///--- Summary ---////
    /// Title : Clear auth data from local storage
    /// Description : clearing the local storage
    /// Returning Args :
    clearAuthData() {
        localStorage.removeItem('client-token');
        localStorage.removeItem('client-expirationDate');
        localStorage.removeItem('client-firstName');
        localStorage.removeItem('client-lastName');
        localStorage.removeItem('client-id');
    }
};
ClientAuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ClientAuthService);
export { ClientAuthService };
//# sourceMappingURL=client-auth.service.js.map
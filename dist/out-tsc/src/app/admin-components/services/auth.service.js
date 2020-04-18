import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
const BACKEND_URL = environment.apiUrl + 'admin/';
let AuthService = class AuthService {
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
    onSignUp(user) {
        this.isLoading = true;
        this.http.post(BACKEND_URL + 'signup', user).subscribe(res => {
            this.authMethod(res);
        });
    }
    login(email, password) {
        const authData = { email, password };
        this.isLoading = true;
        this.http.post(BACKEND_URL + 'login', authData).subscribe(res => {
            this.authMethod(res);
        });
    }
    setAuthenticated(state) {
        this.isAuthenticated = state;
        this.isAuthenticatedListener.next(state);
        this.isLoading = false;
    }
    authMethod(res) {
        const token = res.token;
        this.token = token;
        if (token) {
            this.token = token;
            this.setAuthenticated(true);
            const user = res.user;
            const expiresInDuration = res.expiresIn;
            this.setAuthTimer(expiresInDuration);
            const now = new Date();
            const expirationDate = new Date((now.getTime() + expiresInDuration * 1000));
            this.saveAuthData(token, expirationDate, user);
            this.router.navigate(['/admin']);
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
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expirationDate');
        const firstName = localStorage.getItem('firstName');
        const lastName = localStorage.getItem('lastName');
        const id = localStorage.getItem('id');
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            user: {
                firstName,
                lastName,
                id
            }
        };
    }
    ///--- Summary ---////
    /// Title : Saving to local storage
    /// Description : saving the auth data to local storage
    /// Returning Args :
    saveAuthData(token, expirationDate, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate.toISOString());
        localStorage.setItem('firstName', user.firstName);
        localStorage.setItem('lastName', user.lastName);
        localStorage.setItem('id', user._id);
    }
    ///--- Summary ---////
    /// Title : Clear auth data from local storage
    /// Description : clearing the local storage
    /// Returning Args :
    clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        localStorage.removeItem('id');
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map
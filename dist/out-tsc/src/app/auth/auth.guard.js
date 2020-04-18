import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivateChild(childRoute, state) {
        return true;
    }
    canActivate(next, state) {
        const isAuth = this.authService.getIsAuthenticated();
        if (!isAuth) {
            this.router.navigate(['admin/login']);
        }
        return true;
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map
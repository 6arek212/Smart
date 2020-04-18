import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ClientAuthGuard = class ClientAuthGuard {
    constructor(clientAuthService, router) {
        this.clientAuthService = clientAuthService;
        this.router = router;
    }
    canActivateChild(childRoute, state) {
        return true;
    }
    canActivate(next, state) {
        const isAuth = this.clientAuthService.getIsAuthenticated();
        if (!isAuth) {
            this.router.navigate(['/client/login']);
        }
        return true;
    }
};
ClientAuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ClientAuthGuard);
export { ClientAuthGuard };
//# sourceMappingURL=client-auth.guard.js.map
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthInterceptor = class AuthInterceptor {
    constructor(authService, clietAuthService) {
        this.authService = authService;
        this.clietAuthService = clietAuthService;
    }
    intercept(req, next) {
        const token = this.authService.getToken() ? this.authService.getToken() : this.clietAuthService.getToken();
        const authReq = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + token)
        });
        return next.handle(authReq);
    }
};
AuthInterceptor = __decorate([
    Injectable()
], AuthInterceptor);
export { AuthInterceptor };
//# sourceMappingURL=auth-interceptor.js.map
import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
        this.isAuthenticated = false;
    }
    ngOnInit() {
        this.isAuthenticated = this.authService.getIsAuthenticated();
        this.authService.getIsAuthenticatedListener().subscribe(status => {
            this.isAuthenticated = status;
        });
    }
    ngOnDestroy() {
        var _a;
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        (_a = this.authStatusAuthSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    onLogOut() {
        this.authService.logout();
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map
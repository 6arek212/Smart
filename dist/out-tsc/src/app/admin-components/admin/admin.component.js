import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdminComponent = class AdminComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.autoAuthUser();
    }
};
AdminComponent = __decorate([
    Component({
        selector: 'app-admin',
        templateUrl: './admin.component.html',
        styleUrls: ['./admin.component.css']
    })
], AdminComponent);
export { AdminComponent };
//# sourceMappingURL=admin.component.js.map
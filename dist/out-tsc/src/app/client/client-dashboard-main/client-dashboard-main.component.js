import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ClientDashboardMainComponent = class ClientDashboardMainComponent {
    constructor(clietAuthService) {
        this.clietAuthService = clietAuthService;
    }
    ngOnInit() {
        this.user = this.clietAuthService.getUser();
    }
};
ClientDashboardMainComponent = __decorate([
    Component({
        selector: 'app-client-dashboard-main',
        templateUrl: './client-dashboard-main.component.html',
        styleUrls: ['./client-dashboard-main.component.css']
    })
], ClientDashboardMainComponent);
export { ClientDashboardMainComponent };
//# sourceMappingURL=client-dashboard-main.component.js.map
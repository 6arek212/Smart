import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
let RepairListComponent = class RepairListComponent {
    constructor(repairService) {
        this.repairService = repairService;
        this.pipe = new DatePipe('en-US'); // Use your own locale
    }
    ngOnInit() {
        this.repairs = this.repairService.getRepairs();
    }
};
RepairListComponent = __decorate([
    Component({
        selector: 'app-repair-list',
        templateUrl: './repair-list.component.html',
        styleUrls: ['./repair-list.component.css']
    })
], RepairListComponent);
export { RepairListComponent };
//# sourceMappingURL=repair-list.component.js.map
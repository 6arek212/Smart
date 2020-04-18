import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DashboardComponent = class DashboardComponent {
    constructor(staticsService) {
        this.staticsService = staticsService;
        this.view = [700, 300];
        // options
        this.legend = true;
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Year';
        this.yAxisLabel = 'Population';
        this.timeline = true;
        this.staticsRecord = [];
        this.showLegened = true;
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        this.cardColor = '#232837';
    }
    ngOnInit() {
        this.staticsService.getStaticsRecord();
        this.staticsService.getNumOf();
        this.staticsRecordSub = this.staticsService.getStaticsRecordListener().subscribe(res => {
            this.staticsRecord = res;
        });
        this.numOfSub = this.staticsService.getNumOfListener().subscribe(res => {
            this.single = res;
        });
    }
    ngOnDestroy() {
        this.numOfSub.unsubscribe();
        this.staticsRecordSub.unsubscribe();
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map
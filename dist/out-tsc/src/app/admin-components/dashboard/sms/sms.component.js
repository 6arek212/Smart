import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SmsComponent = class SmsComponent {
    constructor() { }
    ngOnInit() {
    }
    done(ev) {
        console.log(ev);
    }
};
SmsComponent = __decorate([
    Component({
        selector: 'app-sms',
        templateUrl: './sms.component.html',
        styleUrls: ['./sms.component.css']
    })
], SmsComponent);
export { SmsComponent };
//# sourceMappingURL=sms.component.js.map
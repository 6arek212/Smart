import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { DialogMessageComponent } from '../../utils-components/dialog-message/dialog-message.component';
import { StaticsService } from 'src/app/admin-components/dashboard/statics.service';
let MainPageComponent = class MainPageComponent {
    constructor(dilaog, statistic) {
        this.dilaog = dilaog;
        this.statistic = statistic;
    }
    ngOnInit() {
        this.statistic.siteVisit();
    }
    showContactInfo() {
        const confirm = () => {
            this.dilaog.closeAll();
        };
        this.dilaog.open(DialogMessageComponent, { data: { buttons: false, title: 'معلومات التواصل', message: ' עומר חוסין : 0522784070 |  טארק חוסין:  0525145565', confirm } });
    }
    smoothScrolling(element) {
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
};
MainPageComponent = __decorate([
    Component({
        selector: 'app-main-page',
        templateUrl: './main-page.component.html',
        styleUrls: ['./main-page.component.css'],
        providers: [StaticsService]
    })
], MainPageComponent);
export { MainPageComponent };
//# sourceMappingURL=main-page.component.js.map
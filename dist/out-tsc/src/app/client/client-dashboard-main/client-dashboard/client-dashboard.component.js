import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RequestsService } from 'src/app/globalServices/requests.service';
import { ClientInfoService } from '../../services/client-info.service';
import { DialogMessageComponent } from 'src/app/utils-components/dialog-message/dialog-message.component';
let ClientDashboardComponent = class ClientDashboardComponent {
    constructor(requestsService, clientInfoService, dialog) {
        this.requestsService = requestsService;
        this.clientInfoService = clientInfoService;
        this.dialog = dialog;
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        this.cardColor = '#232837';
    }
    ngOnInit() {
        this.requestsService.getRequestsByCustomerId();
        this.requestsSub = this.requestsService.getRequestsListener().subscribe(res => {
            this.requests = res;
        });
        this.clientInfoService.getClientRequestsStatics();
        this.staticInfoSub = this.clientInfoService.getClientRequestsStaticsListener().subscribe(res => {
            this.staticInfo = res;
        });
    }
    onCancelRequest(request) {
        const confirm = () => {
            const updateOps = [
                { name: 'status', value: 'CANCEL' }
            ];
            this.requestsService.updateReuqest(request._id, updateOps).subscribe(res => {
                request.status = 'CANCEL';
            });
        };
        this.dialog.open(DialogMessageComponent, {
            data: {
                buttons: true, title: 'الغاء طلب',
                message: 'هل انت متأكد لالغاء الطلب ؟', confirm
            }
        });
    }
    ngOnDestroy() {
        this.staticInfoSub.unsubscribe();
        this.requestsSub.unsubscribe();
    }
};
ClientDashboardComponent = __decorate([
    Component({
        selector: 'app-client-dashboard',
        templateUrl: './client-dashboard.component.html',
        styleUrls: ['./client-dashboard.component.css'],
        providers: [RequestsService, ClientInfoService]
    })
], ClientDashboardComponent);
export { ClientDashboardComponent };
//# sourceMappingURL=client-dashboard.component.js.map
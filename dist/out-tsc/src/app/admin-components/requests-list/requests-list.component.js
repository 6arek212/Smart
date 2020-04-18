import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ClientService } from '../../client/services/client.service';
import * as moment from 'moment';
let RequestsListComponent = class RequestsListComponent {
    constructor(clientService, dialog) {
        this.clientService = clientService;
        this.dialog = dialog;
        this.requests = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.clientService.attachRequestsListener();
        this.clientService.getRequests();
        this.requestsUpdate = this.clientService.getRequestsListener().subscribe(res => {
            this.requests = res;
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.requestsUpdate.unsubscribe();
        // this.clientService.socketUnSub()
    }
    dateFormat(date) {
        return moment(date).fromNow();
    }
    dateFormat2(date) {
        return moment(date).format('LLLL');
    }
    onDeleteRequest(request) {
        const cb = () => {
            this.dialog.closeAll();
            // this.clientService.deleteRequest(request._id)
        };
        // const data = { message: 'Are you sure for deleting this request for ' + request.firstName + ' ' + request.lastName + ' ?', confirm: cb, buttons: true }
        // this.dialog.open(DialogMessageComponent, { data })
    }
    onFinishRequest(request) {
        const finish = () => {
            this.dialog.closeAll();
            // this.clientService.changeRequestStatus(true, request._id)
        };
        const cancel = () => {
            // this.clientService.changeRequestStatus(null, request._id)
        };
        // const data = { message: 'Cancel or finish request for ' + request.firstName + ' ' + request.lastName, confirm: finish, cancel, buttons: true }
        // this.dialog.open(DialogMessageComponent, { data })
    }
};
RequestsListComponent = __decorate([
    Component({
        selector: 'app-requests-list',
        templateUrl: './requests-list.component.html',
        styleUrls: ['./requests-list.component.css'],
        providers: [ClientService]
    })
], RequestsListComponent);
export { RequestsListComponent };
//# sourceMappingURL=requests-list.component.js.map
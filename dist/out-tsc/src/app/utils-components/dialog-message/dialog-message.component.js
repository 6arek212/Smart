import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let DialogMessageComponent = class DialogMessageComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
    onConfirm() {
        if (this.data.confirm)
            this.data.confirm();
    }
    onCancel() {
        if (this.data.cancel)
            this.data.cancel();
    }
};
DialogMessageComponent = __decorate([
    Component({
        selector: 'app-dialog-message',
        templateUrl: './dialog-message.component.html',
        styleUrls: ['./dialog-message.component.css']
    }),
    __param(0, Inject(MAT_DIALOG_DATA))
], DialogMessageComponent);
export { DialogMessageComponent };
//# sourceMappingURL=dialog-message.component.js.map
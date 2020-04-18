import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { DialogMessageComponent } from './utils-components/dialog-message/dialog-message.component';
let ErrorInterceptor = class ErrorInterceptor {
    constructor(dialog) {
        this.dialog = dialog;
    }
    intercept(req, next) {
        return next.handle(req).pipe(catchError((error) => {
            console.log(error);
            let errorMsg = "Unknown Error Occurred !";
            if (error.error.message) {
                errorMsg = error.error.message;
            }
            this.dialog.open(DialogMessageComponent, { data: { title: 'Error', message: errorMsg } });
            return throwError(error);
        }));
    }
};
ErrorInterceptor = __decorate([
    Injectable()
], ErrorInterceptor);
export { ErrorInterceptor };
//# sourceMappingURL=error-interceptor.js.map
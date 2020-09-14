import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessageComponent } from './utils-components/dialog-message/dialog-message.component';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);

        let errorMsg = "הרעה שגיאה !"

        switch (error.status) {
          case 404:
            errorMsg='לא נמצא'
        }


        if (error.error.message) {
          errorMsg = error.error.message
        }
        console.log(this.dialog.openDialogs);

        if (this.dialog.openDialogs.length == 0)
          this.dialog.open(DialogMessageComponent, { data: { title: 'שגיאה', message: errorMsg } })
        return throwError(error)
      })
    )
  }


}

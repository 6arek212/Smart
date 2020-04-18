import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../admin-components/services/auth.service';
import { ClientAuthService } from '../client/services/client-auth.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private clietAuthService: ClientAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getToken() ? this.authService.getToken() : this.clietAuthService.getToken()
    const authReq = req.clone({
      headers: req.headers.set('Authorization', "Bearer " + token)
    })
    return next.handle(authReq)
  }


}

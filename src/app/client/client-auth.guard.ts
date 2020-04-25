import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientAuthService } from './services/client-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientAuthGuard implements CanActivate {

  constructor(private clientAuthService: ClientAuthService, private router: Router) { }



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.clientAuthService.autoAuthUser()
    const isAuth = this.clientAuthService.getIsAuthenticated()

    if (!isAuth) {
      return this.router.parseUrl('/client/login')
    }

    return true;
  }

}

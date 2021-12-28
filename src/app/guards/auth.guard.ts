import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthUtils } from '../components/utility/auth-utils';
;

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const isLoggedIn = !!AuthUtils.getAuthToken();
    if (isLoggedIn) {
      return true;
    } else {
      return this.router.navigate(['']);
    }
  }
}

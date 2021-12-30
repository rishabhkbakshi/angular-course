import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthUtils } from '../components/utility/auth-utils';
;

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    @Inject(PLATFORM_ID) private plateformId: any) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const isLoggedIn = isPlatformBrowser(this.plateformId) ? !!AuthUtils.getAuthToken() : null;
    if (isLoggedIn) {
      return true;
    } else {
      return this.router.navigate(['']);
    }
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AuthUtils } from '../components/utility/auth-utils';
import { ApiServices } from '../services/api-services.service';

@Injectable({
  providedIn: 'root'
})
export class AnonGuard implements CanActivate {

  constructor(private router: Router,
    private apiService: ApiServices) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const isLoggedIn = !AuthUtils.getAuthToken();
    if (isLoggedIn) {
      return true;
    } else {
      const user$ = this.apiService.fetchMe();
      return user$.pipe(filter(data => !!data), map(data => {
        if (!data.verified) {
          this.router.navigate(['verify']);
        } else if (data.onboarding !== 200) {
          this.router.navigate(['on-boarding']);
        } else {
          this.router.navigate(['dashboard', 'resume']);
        }
      }));
    }
  }
}
